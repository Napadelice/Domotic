export const id=4232;export const ids=[4232];export const modules={4569:(e,i,t)=>{var a=t(36312),s=(t(253),t(5186),t(2075),t(16891),t(4525),t(66360)),r=t(29818),d=t(65520),n=t(94100),l=t(50880),o=t(31134),c=t(11605),u=t(69408),h=t(75325),v=t(75548),p=t(87846);t(98969),t(58715),t(27783),t(83859);const m=e=>s.qy`<ha-list-item graphic="icon" class="${(0,d.H)({"add-new":e.area_id===k})}"> ${e.icon?s.qy`<ha-icon slot="graphic" .icon="${e.icon}"></ha-icon>`:s.qy`<ha-svg-icon slot="graphic" .path="${"M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z"}"></ha-svg-icon>`} ${e.name} </ha-list-item>`,k="___ADD_NEW___",y="___NO_ITEMS___",_="___ADD_NEW_SUGGESTION___";(0,a.A)([(0,r.EM)("ha-area-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Array,attribute:"exclude-areas"})],key:"excludeAreas",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,r.wk)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,r.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"open",value:async function(){await this.updateComplete,await(this.comboBox?.open())}},{kind:"method",key:"focus",value:async function(){await this.updateComplete,await(this.comboBox?.focus())}},{kind:"field",key:"_getAreas",value(){return(0,n.A)(((e,i,t,a,s,r,d,n,l,c)=>{let u,v,p={};(a||s||r||d||n)&&(p=(0,h.g2)(t),u=i,v=t.filter((e=>e.area_id)),a&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>a.includes((0,o.m)(e.entity_id))))})),v=v.filter((e=>a.includes((0,o.m)(e.entity_id))))),s&&(u=u.filter((e=>{const i=p[e.id];return!i||!i.length||t.every((e=>!s.includes((0,o.m)(e.entity_id))))})),v=v.filter((e=>!s.includes((0,o.m)(e.entity_id))))),r&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&r.includes(i.attributes.device_class))}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&r.includes(i.attributes.device_class)}))),d&&(u=u.filter((e=>d(e)))),n&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))));let m,_=e;return u&&(m=u.filter((e=>e.area_id)).map((e=>e.area_id))),v&&(m=(m??[]).concat(v.filter((e=>e.area_id)).map((e=>e.area_id)))),m&&(_=_.filter((e=>m.includes(e.area_id)))),c&&(_=_.filter((e=>!c.includes(e.area_id)))),_.length||(_=[{area_id:y,floor_id:null,name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null,icon:null,aliases:[],labels:[],created_at:0,modified_at:0}]),l?_:[..._,{area_id:k,floor_id:null,name:this.hass.localize("ui.components.area-picker.add_new"),picture:null,icon:"mdi:plus",aliases:[],labels:[],created_at:0,modified_at:0}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getAreas(Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas).map((e=>({...e,strings:[e.area_id,...e.aliases,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){return s.qy` <ha-combo-box .hass="${this.hass}" .helper="${this.helper}" item-value-path="area_id" item-id-path="area_id" item-label-path="name" .value="${this._value}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label}" .placeholder="${this.placeholder?this.hass.areas[this.placeholder]?.name:void 0}" .renderer="${m}" @filter-changed="${this._filterChanged}" @opened-changed="${this._openedChanged}" @value-changed="${this._areaChanged}"> </ha-combo-box> `}},{kind:"method",key:"_filterChanged",value:function(e){const i=e.target,t=e.detail.value;if(!t)return void(this.comboBox.filteredItems=this.comboBox.items);const a=(0,c.H)(t,i.items?.filter((e=>![y,k].includes(e.label_id)))||[]);0===a.length?this.noAdd?(this._suggestion=t,this.comboBox.filteredItems=[{area_id:_,floor_id:null,name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._suggestion}),icon:"mdi:plus",picture:null,labels:[],aliases:[],created_at:0,modified_at:0}]):this.comboBox.filteredItems=[{area_id:y,floor_id:null,name:this.hass.localize("ui.components.area-picker.no_match"),icon:null,picture:null,labels:[],aliases:[],created_at:0,modified_at:0}]:this.comboBox.filteredItems=a}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let i=e.detail.value;if(i===y)return i="",void this.comboBox.setInputValue("");[_,k].includes(i)?(e.target.value=this._value,this.hass.loadFragmentTranslation("config"),(0,p.J)(this,{suggestedName:i===_?this._suggestion:"",createEntry:async e=>{try{const i=await(0,u.L3)(this.hass,e),t=[...Object.values(this.hass.areas),i];this.comboBox.filteredItems=this._getAreas(t,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.area_id)}catch(e){(0,v.K$)(this,{title:this.hass.localize("ui.components.area-picker.failed_create_area"),text:e.message})}}}),this._suggestion=void 0,this.comboBox.setInputValue("")):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,l.r)(this,"value-changed",{value:e}),(0,l.r)(this,"change")}),0)}}]}}),s.WF)},27783:(e,i,t)=>{var a=t(36312),s=t(68689),r=t(30116),d=t(43389),n=t(66360),l=t(29818);(0,a.A)([(0,l.EM)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,s.A)(t,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[d.R,n.AH`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?n.AH`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:n.AH``]}}]}}),r.J)},44232:(e,i,t)=>{t.r(i),t.d(i,{HaAreaSelector:()=>p});var a=t(36312),s=(t(253),t(4525),t(66360)),r=t(29818),d=t(94100),n=t(38782),l=t(75325),o=t(50880),c=t(43527),u=t(37880),h=t(91148),v=(t(4569),t(2075),t(16891),t(31627));(0,a.A)([(0,r.EM)("ha-areas-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:"picked-area-label"})],key:"pickedAreaLabel",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:"pick-area-label"})],key:"pickAreaLabel",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){if(!this.hass)return s.s6;const e=this._currentAreas;return s.qy` ${e.map((e=>s.qy` <div> <ha-area-picker .curValue="${e}" .noAdd="${this.noAdd}" .hass="${this.hass}" .value="${e}" .label="${this.pickedAreaLabel}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeDeviceClasses="${this.includeDeviceClasses}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .disabled="${this.disabled}" @value-changed="${this._areaChanged}"></ha-area-picker> </div> `))} <div> <ha-area-picker .noAdd="${this.noAdd}" .hass="${this.hass}" .label="${this.pickAreaLabel}" .helper="${this.helper}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeDeviceClasses="${this.includeDeviceClasses}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .disabled="${this.disabled}" .placeholder="${this.placeholder}" .required="${this.required&&!e.length}" @value-changed="${this._addArea}" .excludeAreas="${e}"></ha-area-picker> </div> `}},{kind:"get",key:"_currentAreas",value:function(){return this.value||[]}},{kind:"method",key:"_updateAreas",value:async function(e){this.value=e,(0,o.r)(this,"value-changed",{value:e})}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i)return;const a=this._currentAreas;t&&!a.includes(t)?this._updateAreas(a.map((e=>e===i?t:e))):this._updateAreas(a.filter((e=>e!==i)))}},{kind:"method",key:"_addArea",value:function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;e.currentTarget.value="";const t=this._currentAreas;t.includes(i)||this._updateAreas([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>s.AH`div{margin-top:8px}`}]}}),(0,v.E)(s.WF));let p=(0,a.A)([(0,r.EM)("ha-selector-area")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,r.wk)()],key:"_entitySources",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_configEntries",value:void 0},{kind:"field",key:"_deviceIntegrationLookup",value:()=>(0,d.A)(l.fk)},{kind:"method",key:"_hasIntegration",value:function(e){return e.area?.entity&&(0,n.e)(e.area.entity).some((e=>e.integration))||e.area?.device&&(0,n.e)(e.area.device).some((e=>e.integration))}},{kind:"method",key:"willUpdate",value:function(e){e.has("selector")&&void 0!==this.value&&(this.selector.area?.multiple&&!Array.isArray(this.value)?(this.value=[this.value],(0,o.r)(this,"value-changed",{value:this.value})):!this.selector.area?.multiple&&Array.isArray(this.value)&&(this.value=this.value[0],(0,o.r)(this,"value-changed",{value:this.value})))}},{kind:"method",key:"updated",value:function(e){e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,c.c)(this.hass).then((e=>{this._entitySources=e})),!this._configEntries&&this._hasIntegration(this.selector)&&(this._configEntries=[],(0,u.VN)(this.hass).then((e=>{this._configEntries=e})))}},{kind:"method",key:"render",value:function(){return this._hasIntegration(this.selector)&&!this._entitySources?s.s6:this.selector.area?.multiple?s.qy` <ha-areas-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .pickAreaLabel="${this.label}" no-add .deviceFilter="${this.selector.area?.device?this._filterDevices:void 0}" .entityFilter="${this.selector.area?.entity?this._filterEntities:void 0}" .disabled="${this.disabled}" .required="${this.required}"></ha-areas-picker> `:s.qy` <ha-area-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" no-add .deviceFilter="${this.selector.area?.device?this._filterDevices:void 0}" .entityFilter="${this.selector.area?.entity?this._filterEntities:void 0}" .disabled="${this.disabled}" .required="${this.required}"></ha-area-picker> `}},{kind:"field",key:"_filterEntities",value(){return e=>!this.selector.area?.entity||(0,n.e)(this.selector.area.entity).some((i=>(0,h.Ru)(i,e,this._entitySources)))}},{kind:"field",key:"_filterDevices",value(){return e=>{if(!this.selector.area?.device)return!0;const i=this._entitySources?this._deviceIntegrationLookup(this._entitySources,Object.values(this.hass.entities),Object.values(this.hass.devices),this._configEntries):void 0;return(0,n.e)(this.selector.area.device).some((t=>(0,h.vX)(t,e,i)))}}}]}}),s.WF)},69408:(e,i,t)=>{t.d(i,{L3:()=>r,dj:()=>n,ft:()=>s.f,gs:()=>d});t(89655);var a=t(82739),s=t(20691);const r=(e,i)=>e.callWS({type:"config/area_registry/create",...i}),d=(e,i,t)=>e.callWS({type:"config/area_registry/update",area_id:i,...t}),n=(e,i)=>(t,s)=>{const r=i?i.indexOf(t):-1,d=i?i.indexOf(s):-1;if(-1===r&&-1===d){const i=e?.[t]?.name??t,r=e?.[s]?.name??s;return(0,a.x)(i,r)}return-1===r?1:-1===d?-1:r-d}},43527:(e,i,t)=>{t.d(i,{c:()=>r});const a=async(e,i,t,s,r,...d)=>{const n=r,l=n[e],o=l=>s&&s(r,l.result)!==l.cacheKey?(n[e]=void 0,a(e,i,t,s,r,...d)):l.result;if(l)return l instanceof Promise?l.then(o):o(l);const c=t(r,...d);return n[e]=c,c.then((t=>{n[e]={result:t,cacheKey:s?.(r,t)},setTimeout((()=>{n[e]=void 0}),i)}),(()=>{n[e]=void 0})),c},s=e=>e.callWS({type:"entity/source"}),r=e=>a("_entitySources",3e4,s,(e=>Object.keys(e.states).length),e)},20691:(e,i,t)=>{t.d(i,{f:()=>l});var a=t(84280),s=t(82739),r=t(46530);const d=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,i)=>(0,s.x)(e.name,i.name))))),n=(e,i)=>e.subscribeEvents((0,r.s)((()=>d(e).then((e=>i.setState(e,!0)))),500,!0),"area_registry_updated"),l=(e,i)=>(0,a.N)("_areaRegistry",d,n,e,i)},31627:(e,i,t)=>{t.d(i,{E:()=>d});var a=t(36312),s=t(68689),r=t(29818);const d=e=>(0,a.A)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,s.A)(t,"connectedCallback",this,3)([]),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,s.A)(t,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,s.A)(t,"updated",this,3)([e]),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&!this.hassSubscribeRequiredHostProps?.some((e=>void 0===this[e]))&&(this.__unsubs=this.hassSubscribe())}}]}}),e)},87846:(e,i,t)=>{t.d(i,{J:()=>r});var a=t(50880);const s=()=>Promise.all([t.e(3893),t.e(6342),t.e(6279),t.e(3832),t.e(4555),t.e(4421),t.e(1056)]).then(t.bind(t,1056)),r=(e,i)=>{(0,a.r)(e,"show-dialog",{dialogTag:"dialog-area-registry-detail",dialogImport:s,dialogParams:i})}},5186:(e,i,t)=>{var a=t(41765),s=t(73201),r=t(95689),d=t(56674),n=t(1370);a({target:"Iterator",proto:!0,real:!0},{every:function(e){d(this),r(e);var i=n(this),t=0;return!s(i,(function(i,a){if(!e(i,t++))return a()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})}};
//# sourceMappingURL=4232.ssjPmpX9y4Y.js.map