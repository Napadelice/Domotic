import logging
import requests
import voluptuous as vol

from homeassistant.components.cover import (
    CoverEntity, PLATFORM_SCHEMA, CoverDeviceClass
)
from homeassistant.components.cover import CoverEntityFeature
from homeassistant.const import (CONF_NAME, STATE_CLOSED, STATE_OPEN, STATE_UNKNOWN, STATE_OPENING, STATE_CLOSING,
                                 DEVICE_CLASS_ENERGY, ENERGY_WATT_HOUR, DEVICE_CLASS_POWER, POWER_WATT)
import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.entity import Entity

_LOGGER = logging.getLogger(__name__)

CONF_IP_ADDRESS = "ip_address"
CONF_ID_COVER = "id_cover"
CONF_ID_INFO_COVER = "id_info_cover"

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_IP_ADDRESS): cv.string,
    vol.Required(CONF_ID_COVER): cv.positive_int,
    vol.Required(CONF_ID_INFO_COVER): cv.positive_int,
    vol.Optional(CONF_NAME, default="Dingz Cover"): cv.string,
})


def setup_platform(hass, config, add_entities, discovery_info=None):
    ip_address = config[CONF_IP_ADDRESS]
    id_cover = config[CONF_ID_COVER]
    id_info_cover = config[CONF_ID_INFO_COVER]
    name = config[CONF_NAME]

    cover_entity = DingzCover(name, ip_address, id_cover, id_info_cover)
    power_sensor = DingzPowerSensor(name, ip_address, id_cover)

    add_entities([cover_entity, power_sensor])


class DingzCover(CoverEntity):
    def __init__(self, name, ip_address, id_cover, id_info_cover):
        self._target_tilt = None
        self._current_tilt = None
        self._name = name
        self._ip_address = ip_address
        self._id_cover = id_cover
        self._id_info_cover = id_info_cover
        self._state = STATE_UNKNOWN
        self._current_blind = None
        self._target_blind = None
        self._is_opening = False
        self._is_closing = False
        self._is_stopped = True
        self._device_name = None

    @property
    def name(self):
        return self._device_name if self._device_name else self._name

    @property
    def device_class(self):
        return CoverDeviceClass.BLIND  # Spécifiez la classe de votre dispositif ici

    @property
    def is_closed(self):
        return self._current_blind == 0

    @property
    def is_opening(self):
        return self._is_opening

    @property
    def is_closing(self):
        return self._is_closing

    @property
    def is_open(self):
        return self._current_blind == 100

    @property
    def current_cover_position(self) -> int | None:
        return self._current_blind

    @property
    def current_tilt_position(self) -> int | None:
        return self._current_tilt

    @property
    def supported_features(self):
        return (
                CoverEntityFeature.OPEN
                | CoverEntityFeature.CLOSE
                | CoverEntityFeature.STOP
                | CoverEntityFeature.SET_POSITION
                | CoverEntityFeature.CLOSE_TILT
                | CoverEntityFeature.OPEN_TILT
                | CoverEntityFeature.SET_TILT_POSITION
        )

    def open_cover(self, **kwargs):
        self._send_command("up")
        self._is_opening = True
        self._is_closing = False
        self._is_stopped = False
        self._target_blind = 100
        self._state = STATE_OPENING
        self.schedule_update_ha_state()

    def close_cover(self, **kwargs):
        self._send_command_blind_tilt_pos(0, 0)
        self._send_command("down")
        self._is_opening = False
        self._is_closing = True
        self._is_stopped = False
        self._target_blind = 0
        self._target_tilt = 0
        self._state = STATE_CLOSING
        self.schedule_update_ha_state()

    def stop_cover(self, **kwargs):
        self._send_command("stop")
        self._is_opening = False
        self._is_closing = False
        self._is_stopped = True
        self._state = STATE_UNKNOWN
        self.schedule_update_ha_state()

    def set_cover_position(self, **kwargs):
        position = kwargs.get('position')
        if position is not None:
            self._send_command_blind_pos(position)
            self.schedule_update_ha_state()

    def open_cover_tilt(self, **kwargs):
        self._send_command_tilt_pos(100)

    def close_cover_tilt(self, **kwargs):
        self._send_command_tilt_pos(0)

    def set_cover_tilt_position(self, **kwargs):
        position = kwargs.get('tilt_position')
        if position is not None:
            self._send_command_tilt_pos(position)
            self.schedule_update_ha_state()

    def _send_command_blind_tilt_pos(self, blind_position, tilt_position):
        self._target_tilt = tilt_position
        self._target_blind = blind_position
        url = f"http://{self._ip_address}/api/v1/shade/{self._id_cover}?blind={blind_position}&lamella={tilt_position}"
        try:
            response = requests.post(url)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            _LOGGER.error(
                f"Error sending lamella position {tilt_position} and blind position : {blind_position}, command to {self._name}: {e}")

    def _send_command_tilt_pos(self, position):
        self._target_tilt = position
        url = f"http://{self._ip_address}/api/v1/shade/{self._id_cover}?lamella={position}"
        try:
            response = requests.post(url)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            _LOGGER.error(f"Error sending lamella position {position} command to {self._name}: {e}")

    def _send_command_blind_pos(self, position):
        self._target_blind = position
        url = f"http://{self._ip_address}/api/v1/shade/{self._id_cover}?blind={position}"
        try:
            response = requests.post(url)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            _LOGGER.error(f"Error sending blind position {position} command to {self._name}: {e}")

    def _send_command(self, command):
        url = f"http://{self._ip_address}/api/v1/shade/{self._id_cover}/{command}"
        try:
            response = requests.post(url)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            _LOGGER.error(f"Error sending {command} command to {self._name}: {e}")

    def update(self):
        url = f"http://{self._ip_address}/api/v1/shade/{self._id_cover}"
        try:
            response = requests.get(url)
            response.raise_for_status()
            data = response.json()

            # @Dingz : Changer le format de vos boolean pour supprimer la majuscule, ce n'est pas standard.
            def convert_bools(d):
                for key, value in d.items():
                    if isinstance(value, dict):
                        convert_bools(value)
                    elif isinstance(value, str):
                        if value == 'False':
                            d[key] = False
                        elif value == 'True':
                            d[key] = True

            # Appliquer la conversion
            convert_bools(data)

            self._current_blind = data.get('current', {}).get('blind', None)
            self._target_blind = data.get('target', {}).get('blind', None)
            self._current_tilt = data.get('current', {}).get('lamella', None)
            self._target_tilt = data.get('target', {}).get('lamella', None)

            if self._current_blind is not None:
                if self._current_blind == 0:
                    self._state = STATE_CLOSED
                elif self._current_blind == 100:
                    self._state = STATE_OPEN
                else:
                    self._state = STATE_UNKNOWN
            else:
                self._state = STATE_UNKNOWN

            if self._current_tilt is not None:
                if self._current_tilt > 0:
                    self._state = STATE_UNKNOWN

            if not self._is_stopped:
                self._is_opening = self._target_blind > self._current_blind
                self._is_closing = self._target_blind < self._current_blind

            _LOGGER.warning(
                f"Store {self._name}, current_blind : {self._current_blind}, target_blind : {self._target_blind}, "
                f"current_tilt : {self._current_tilt}, target_tilt: {self._target_tilt}, state: {self._state}")
        except requests.exceptions.RequestException as e:
            _LOGGER.error(f"Error fetching status for {self._name}: {e}")
            self._state = STATE_UNKNOWN

        if self._device_name is None:
            url = f"http://{self._ip_address}/api/v1/blind_config"
            try:
                response = requests.get(url)
                response.raise_for_status()
                data = response.json()

                # @Dingz : Changer le format de vos boolean pour supprimer la majuscule, ce n'est pas standard.
                def convert_bools(d):
                    for key, value in d.items():
                        if isinstance(value, dict):
                            convert_bools(value)
                        elif isinstance(value, str):
                            if value == 'False':
                                d[key] = False
                            elif value == 'True':
                                d[key] = True

                # Appliquer la conversion
                convert_bools(data)

                self._device_name = data['blinds'][self._id_info_cover]['name']

                _LOGGER.warning(
                    f"Store {self._name}, device_name : {self._device_name}")
            except requests.exceptions.RequestException as e:
                _LOGGER.error(f"Error fetching status for {self._name}: {e}")


class DingzPowerSensor(Entity):
    def __init__(self, name, ip_address, id_cover):
        self._name = f"{name} Power"
        self._ip_address = ip_address
        self._id_cover = id_cover
        self._state = None

    @property
    def name(self):
        return self._name

    @property
    def state(self):
        return self._state

    @property
    def unit_of_measurement(self):
        return POWER_WATT

    @property
    def state_class(self):
        return "total"

    @property
    def device_class(self):
        return DEVICE_CLASS_POWER

    def update(self):
        url = f"http://{self._ip_address}/api/v1/sensors"
        try:
            response = requests.get(url)
            response.raise_for_status()
            data = response.json()

            power_output_values = [output.get('value') for output in data.get('power_outputs', [])]

            if self._id_cover == 0:
                self._state = power_output_values[0] + power_output_values[1]

            if self._id_cover == 1:
                self._state = power_output_values[2] + power_output_values[3]

        except requests.exceptions.RequestException as e:
            _LOGGER.error(f"Error fetching power consumption for {self._name}: {e}")
            self._state = None
