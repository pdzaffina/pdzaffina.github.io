"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8484],{8484:(I,x,u)=>{u.r(x),u.d(x,{ion_accordion:()=>m,ion_accordion_group:()=>b});var l=u(5861),a=u(1688),h=u(839),v=u(3173),f=u(2085),y=u(6710);const m=class{constructor(e){var o=this;(0,a.r)(this,e),this.updateListener=()=>this.updateState(!1),this.setItemDefaults=()=>{const t=this.getSlottedHeaderIonItem();t&&(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:t}=this;if(!t)return;const n=t.querySelector("slot");return n&&void 0!==n.assignedElements?n.assignedElements().find(i=>"ION-ITEM"===i.tagName):void 0},this.setAria=(t=!1)=>{const n=this.getSlottedHeaderIonItem();if(!n)return;const s=(0,h.g)(n).querySelector("button");s&&s.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const{toggleIconSlot:n,toggleIcon:i}=this;if(t.querySelector(".ion-accordion-toggle-icon"))return;const r=document.createElement("ion-icon");r.slot=n,r.lazy=!1,r.classList.add("ion-accordion-toggle-icon"),r.icon=i,r.setAttribute("aria-hidden","true"),t.appendChild(r)},this.expandAccordion=(t=!1)=>{const{contentEl:n,contentElWrapper:i}=this;t||void 0===n||void 0===i?this.state=4:4!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(0,h.r)(()=>{this.state=8,this.currentRaf=(0,h.r)((0,l.Z)(function*(){const s=i.offsetHeight,r=(0,h.t)(n,2e3);n.style.setProperty("max-height",`${s}px`),yield r,o.state=4,n.style.removeProperty("max-height")}))}):this.state=4)},this.collapseAccordion=(t=!1)=>{const{contentEl:n}=this;t||void 0===n?this.state=1:1!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=(0,h.r)((0,l.Z)(function*(){n.style.setProperty("max-height",`${n.offsetHeight}px`),(0,h.r)((0,l.Z)(function*(){const s=(0,h.t)(n,2e3);o.state=2,yield s,o.state=1,n.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>!(typeof window>"u"||matchMedia("(prefers-reduced-motion: reduce)").matches||!f.c.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=(0,l.Z)(function*(t=!1){const n=o.accordionGroupEl,i=o.value;if(!n)return;const s=n.value;if(Array.isArray(s)?s.includes(i):s===i)o.expandAccordion(t),o.isNext=o.isPrevious=!1;else{o.collapseAccordion(t);const c=o.getNextSibling(),d=null==c?void 0:c.value;void 0!==d&&(o.isPrevious=Array.isArray(s)?s.includes(d):s===d);const p=o.getPreviousSibling(),g=null==p?void 0:p.value;void 0!==g&&(o.isNext=Array.isArray(s)?s.includes(g):s===g)}}),this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+E++,this.disabled=!1,this.readonly=!1,this.toggleIcon=v.l,this.toggleIconSlot="end"}valueChanged(){this.updateState()}connectedCallback(){var e;const o=this.accordionGroupEl=null===(e=this.el)||void 0===e?void 0:e.closest("ion-accordion-group");o&&(this.updateState(!0),(0,h.a)(o,"ionValueChange",this.updateListener))}disconnectedCallback(){const e=this.accordionGroupEl;e&&(0,h.b)(e,"ionValueChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),(0,h.r)(()=>{this.setAria(4===this.state||8===this.state)})}toggleExpanded(){const{accordionGroupEl:e,value:o,state:t}=this;e&&e.requestAccordionToggle(o,1===t||2===t)}render(){const{disabled:e,readonly:o}=this,t=(0,f.b)(this),n=4===this.state||8===this.state,i=n?"header expanded":"header",s=n?"content expanded":"content";return this.setAria(n),(0,a.h)(a.H,{class:{[t]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":e,"accordion-readonly":o,"accordion-animated":this.shouldAnimate()}},(0,a.h)("div",{onClick:()=>this.toggleExpanded(),id:"header",part:i,"aria-controls":"content",ref:r=>this.headerEl=r},(0,a.h)("slot",{name:"header"})),(0,a.h)("div",{id:"content",part:s,role:"region","aria-labelledby":"header",ref:r=>this.contentEl=r},(0,a.h)("div",{id:"content-wrapper",ref:r=>this.contentElWrapper=r},(0,a.h)("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return(0,a.f)(this)}static get watchers(){return{value:["valueChanged"]}}};let E=0;m.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};const b=class{constructor(e){(0,a.r)(this,e),this.ionChange=(0,a.d)(this,"ionChange",7),this.ionValueChange=(0,a.d)(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:e,multiple:o}=this;!o&&Array.isArray(e)&&(0,y.p)(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: [${e.map(t=>`'${t}'`).join(", ")}]\n`,this.el),this.ionValueChange.emit({value:this.value})}disabledChanged(){var e=this;return(0,l.Z)(function*(){const{disabled:o}=e,t=yield e.getAccordions();for(const n of t)n.disabled=o})()}readonlyChanged(){var e=this;return(0,l.Z)(function*(){const{readonly:o}=e,t=yield e.getAccordions();for(const n of t)n.readonly=o})()}onKeydown(e){var o=this;return(0,l.Z)(function*(){const t=document.activeElement;if(!t||!t.closest('ion-accordion [slot="header"]'))return;const i="ION-ACCORDION"===t.tagName?t:t.closest("ion-accordion");if(!i||i.closest("ion-accordion-group")!==o.el)return;const r=yield o.getAccordions(),c=r.findIndex(p=>p===i);if(-1===c)return;let d;"ArrowDown"===e.key?d=o.findNextAccordion(r,c):"ArrowUp"===e.key?d=o.findPreviousAccordion(r,c):"Home"===e.key?d=r[0]:"End"===e.key&&(d=r[r.length-1]),void 0!==d&&d!==t&&d.focus()})()}componentDidLoad(){var e=this;return(0,l.Z)(function*(){e.disabled&&e.disabledChanged(),e.readonly&&e.readonlyChanged()})()}setValue(e){const o=this.value=e;this.ionChange.emit({value:o})}requestAccordionToggle(e,o){var t=this;return(0,l.Z)(function*(){const{multiple:n,value:i,readonly:s,disabled:r}=t;if(!s&&!r)if(o)if(n){const c=null!=i?i:[],d=Array.isArray(c)?c:[c];void 0===d.find(g=>g===e)&&void 0!==e&&t.setValue([...d,e])}else t.setValue(e);else if(n){const c=null!=i?i:[],d=Array.isArray(c)?c:[c];t.setValue(d.filter(p=>p!==e))}else t.setValue(void 0)})()}findNextAccordion(e,o){const t=e[o+1];return void 0===t?e[0]:t}findPreviousAccordion(e,o){const t=e[o-1];return void 0===t?e[e.length-1]:t}getAccordions(){var e=this;return(0,l.Z)(function*(){return Array.from(e.el.querySelectorAll(":scope > ion-accordion"))})()}render(){const{disabled:e,readonly:o,expand:t}=this,n=(0,f.b)(this);return(0,a.h)(a.H,{class:{[n]:!0,"accordion-group-disabled":e,"accordion-group-readonly":o,[`accordion-group-expand-${t}`]:!0},role:"presentation"},(0,a.h)("slot",null))}get el(){return(0,a.f)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};b.style={ios:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous):dir(rtl){border-bottom-right-radius:6px;border-bottom-left-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next):dir(rtl){border-top-left-radius:6px;border-top-right-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);