import{b as ut}from"./chunk-S6UO5PYW.js";import"./chunk-D4WUF3QD.js";import{b as ct,c as mt,e as ft,g as pt,l as pe}from"./chunk-CQRVLXRN.js";import{a as ht}from"./chunk-MVHV3DYS.js";import{a as st}from"./chunk-4EL4BRSK.js";import{b as nt,h as ot,j as Te,k as ze}from"./chunk-5TJUFRWW.js";import{e as it}from"./chunk-XLWYF6DI.js";import{C as rt,F as fe,G as lt,I as dt,J as Ie,c as Ze,k as me,s as Q}from"./chunk-HBRZKOJ2.js";import{h as et,i as tt,k as at}from"./chunk-OY5OQEYI.js";import{j as ce}from"./chunk-LREUUD6O.js";import{h as Je}from"./chunk-RBRB4GMX.js";import{$b as z,A as He,Ab as x,Bb as l,Cb as s,D as qe,Db as M,Dc as E,Eb as C,Ec as De,F as je,Fb as w,Gb as le,Kb as de,L as ye,Lb as Y,M as Ce,N as j,Ob as y,P as Ge,Pb as Ye,Qa as W,Qb as p,Rb as X,Sa as d,Sb as A,T as ie,Tb as Me,Ub as J,Vb as P,W as D,Wb as F,Xb as Se,Y as m,Yb as Oe,Zb as Pe,_a as we,_b as N,ac as se,ba as ne,bc as c,ca as oe,cc as g,da as We,dc as T,e as q,ea as Qe,fb as O,hb as re,ia as G,ic as Z,kb as ke,l as Ve,na as b,nb as $e,p as U,qa as ae,ra as Ke,sc as I,tb as k,u as Be,ua as $,ub as _,uc as Xe,vb as v,vc as Fe,wc as Ee,x as te,y as xe,yb as R,za as Ue,zb as L,zc as ee}from"./chunk-KEHRPNTX.js";import"./chunk-7CGTOI24.js";var gt=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=re({type:n})}return n})();var bt=new D("MatFormField");var _t=(()=>{class n{_animationsDisabled=fe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&z("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Et=["text"],Dt=[[["mat-icon"]],"*"],Tt=["mat-icon","*"];function zt(n,o){if(n&1&&M(0,"mat-pseudo-checkbox",1),n&2){let e=p();x("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function It(n,o){if(n&1&&M(0,"mat-pseudo-checkbox",3),n&2){let e=p();x("disabled",e.disabled)}}function Rt(n,o){if(n&1&&(l(0,"span",4),c(1),s()),n&2){let e=p();d(),T("(",e.group.label,")")}}var Le=new D("MAT_OPTION_PARENT_COMPONENT"),Ae=new D("MatOptgroup");var Re=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}},ge=(()=>{class n{_element=m($);_changeDetectorRef=m(ee);_parent=m(Le,{optional:!0});group=m(Ae,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(me).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=b(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new G;_text;_stateChanges=new q;constructor(){let e=m(et);e.load(ht),e.load(at),this._signalDisableRipple=!!this._parent&&$e(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Q(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Re(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&J(Et,7),t&2){let a;P(a=F())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&y("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(Y("id",i.id),k("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),z("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",E]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Tt,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(X(Dt),_(0,zt,1,2,"mat-pseudo-checkbox",1),A(1),l(2,"span",2,0),A(4,1),s(),_(5,It,1,1,"mat-pseudo-checkbox",3),_(6,Rt,2,1,"span",4),M(7,"div",5)),t&2&&(v(i.multiple?0:-1),d(5),v(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),d(),v(i.group&&i.group._inert?6:-1),d(),x("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[_t,ut],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function vt(n,o,e){if(e.length){let t=o.toArray(),i=e.toArray(),a=0;for(let r=0;r<n+1;r++)t[r].group&&t[r].group===i[a]&&a++;return a}return 0}function xt(n,o,e,t){return n<e?n:n+o>e+t?Math.max(0,n-t+o):e}var yt=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var be=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,e,t,i,a){this._defaultMatcher=o,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=a}updateErrorState(){let o=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(i,e)??!1;a!==o&&(this.errorState=a,this._stateChanges.next())}};var Bt=["trigger"],Ht=["panel"],qt=[[["mat-select-trigger"]],"*"],jt=["mat-select-trigger","*"];function Gt(n,o){if(n&1&&(l(0,"span",4),c(1),s()),n&2){let e=p();d(),g(e.placeholder)}}function Wt(n,o){n&1&&A(0)}function Qt(n,o){if(n&1&&(l(0,"span",11),c(1),s()),n&2){let e=p(2);d(),g(e.triggerValue)}}function Kt(n,o){if(n&1&&(l(0,"span",5),_(1,Wt,1,0)(2,Qt,2,1,"span",11),s()),n&2){let e=p();d(),v(e.customTrigger?1:2)}}function Ut(n,o){if(n&1){let e=de();l(0,"div",12,1),y("keydown",function(i){ne(e);let a=p();return oe(a._handleKeydown(i))}),A(2,1),s()}if(n&2){let e=p();se(e.panelClass),z("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),k("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var $t=new D("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(Qe);return()=>nt(n)}}),Yt=new D("MAT_SELECT_CONFIG"),kt=new D("MatSelectTrigger"),Ne=class{source;value;constructor(o,e){this.source=o,this.value=e}},Mt=(()=>{class n{_viewportRuler=m(it);_changeDetectorRef=m(ee);_elementRef=m($);_dir=m(tt,{optional:!0});_idGenerator=m(me);_renderer=m(we);_parentFormField=m(bt,{optional:!0});ngControl=m(mt,{self:!0,optional:!0});_liveAnnouncer=m(rt);_defaultOptions=m(Yt,{optional:!0});_animationsDisabled=fe();_popoverLocation;_initialized=new q;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=vt(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=xt(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ne(this,e)}_scrollStrategyFactory=m($t);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new q;_errorStateTracker;stateChanges=new q;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=b(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ct.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Be(()=>{let e=this.options;return e?e.changes.pipe(ye(e),Ce(()=>te(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ce(()=>this.optionSelectionChanges))});openedChange=new G;_openedStream=this.openedChange.pipe(xe(e=>e),U(()=>{}));_closedStream=this.openedChange.pipe(xe(e=>!e),U(()=>{}));selectionChange=new G;valueChange=new G;constructor(){let e=m(yt),t=m(ft,{optional:!0}),i=m(pt,{optional:!0}),a=m(new Xe("tabindex"),{optional:!0}),r=m(ot,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new be(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new st(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(j(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(j(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ye(null),j(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(qe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Ie(this._trackedModal,"aria-owns",t),dt(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Ie(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!Q(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;r.onKeydown(e);let f=this.selected;f&&u!==f&&this._liveAnnouncer.announce(f.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!Q(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(f=>!f.disabled&&!f.selected);this.options.forEach(f=>{f.disabled||(u?f.select():f.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Q(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Te?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new lt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=te(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(j(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),te(...this.options.map(t=>t._stateChanges)).pipe(j(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ze(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&Me(a,kt,5)(a,ge,5)(a,Ae,5),t&2){let r;P(r=F())&&(i.customTrigger=r.first),P(r=F())&&(i.options=r),P(r=F())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&J(Bt,5)(Ht,5)(ze,5),t&2){let a;P(a=F())&&(i.trigger=a.first),P(a=F())&&(i.panel=a.first),P(a=F())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&y("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(k("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),z("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",E],disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:De(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E],placeholder:"placeholder",required:[2,"required","required",E],multiple:[2,"multiple","multiple",E],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",E],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",De],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",E]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Z([{provide:gt,useExisting:n},{provide:Le,useExisting:n}]),Ke],ngContentSelectors:jt,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(X(qt),l(0,"div",2,0),y("click",function(){return i.open()}),l(3,"div",3),_(4,Gt,2,1,"span",4)(5,Kt,3,1,"span",5),s(),l(6,"div",6)(7,"div",7),We(),l(8,"svg",8),M(9,"path",9),s()()()(),ke(10,Ut,3,16,"ng-template",10),y("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let a=Pe(1);d(3),k("id",i._valueId),d(),v(i.empty?4:5),d(6),x("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Te,ze],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})(),St=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=re({type:n,selectors:[["mat-select-trigger"]],features:[Z([{provide:kt,useExisting:n}])]})}return n})();var _e=class n{http=m(Je);specialistService=m(pe);placeholderImage="assets/icons/base/icon_content/buildings/building_icon_default.webp";_chains=b([]);_loading=b(!1);_error=b(null);chains=this._chains.asReadonly();isLoading=this._loading.asReadonly();error=this._error.asReadonly();getSpecialistsForBuilding(o){return o?this.specialistService.hydratedSpecialists().filter(t=>t.effect?.targets?.some(i=>i.guid===o||i.affected_items?.some(a=>a.guid===o))):[]}fetchChains(o="en"){return this._loading.set(!0),this._error.set(null),this.http.get(`assets/data/chains_${o}.json`).pipe(U(e=>this.mapToViewModel(e)),Ge(e=>{this._chains.set(e)}),He(e=>(this._error.set("Failed to load production chains."),console.error("Fetching Production Chains - Error: ",e),Ve([]))),je(()=>this._loading.set(!1))).subscribe()}mapToViewModel(o){let e=Object.entries(o).map(([a,r])=>({id:a,uid:r.uid,slug:this.slugify(r.name),canonName:r.canon_name,name:r.name,description:r.description,outputBuilding:r.output_building})),t=new Set,i=a=>{let r=[],u=f=>{f.tier&&f.tier.forEach(S=>{r.push(S.guid),u(S)})};return u(a),r};return e.filter(a=>{let r=a.outputBuilding;if(!r)return!1;let u=i(r).sort((S,B)=>S-B),f=`${r.guid}:${u.join(",")}`;return t.has(f)?!1:(t.add(f),!0)}).sort((a,r)=>a.outputBuilding.text.localeCompare(r.outputBuilding.text))}slugify(o){return o.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})};var Jt=(n,o)=>o.guid,Zt=(n,o)=>o.key;function ei(n,o){if(n&1&&le(0,"span",20),n&2){let e=o,t=p().$implicit,i=p(3);N("mask-image","url("+e+")")("-webkit-mask-image","url("+e+")"),k("aria-label",i.getLabel(t.key)+" icon")}}function ti(n,o){if(n&1&&(C(0,"div",16)(1,"div",17),_(2,ei,1,5,"span",18),C(3,"span"),c(4),w()(),C(5,"span",19),c(6),w()()),n&2){let e,t=o.$implicit,i=p(3);d(2),v((e=i.keyIcons[t.key])?2:-1,e),d(2),g(i.getLabel(t.key)),d(2),g(t.value)}}function ii(n,o){if(n&1&&(C(0,"div",15),R(1,ti,7,3,"div",16,Zt),w()),n&2){let e=p().$implicit;d(),L(e.attributes)}}function ni(n,o){if(n&1&&_(0,ii,3,0,"div",15),n&2){let e=o.$implicit;v(e.attributes.length>0?0:-1)}}var ve=class n{specialist=Fe.required();targetGuid=Fe();keyLabels={health:"Health",fire_safety:"Fire Safety",population:"Population",money:"Money",happiness:"Happiness",belief:"Belief",knowledge:"Knowledge",prestige:"Prestige",maintenance_factor:"Maintenance Cost",workforce_maintenance_factor:"Workforce Required",productivity_upgrade:"Productivity",buff_base_speed_upgrade:"Navigation Speed",loading_speed_upgrade:"Cargo Loading Speed"};keyIcons={population:"assets/icons/base/icon_content/attributes/icon_population_0.webp",money:"assets/icons/base/icon_content/attributes/icon_income_0.webp",happiness:"assets/icons/base/icon_content/attributes/icon_happiness_0.webp",health:"assets/icons/base/icon_content/attributes/icon_health_0.webp",fire_safety:"assets/icons/base/icon_content/attributes/icon_fire_safety_0.webp",belief:"assets/icons/base/icon_content/attributes/icon_religion_belief_0.webp",knowledge:"assets/icons/base/icon_content/attributes/icon_techtree_knowledge_0.webp",prestige:"assets/icons/base/icon_content/attributes/icon_prestige_0.webp"};filteredBuffs=I(()=>{let o=this.specialist(),e=this.targetGuid();if(!o.effect?.buffs)return[];if(!e)return o.effect.buffs;let i=o.effect.targets.filter(a=>a.guid===e||a.affected_items?.some(r=>r.guid===e)).map(a=>a.guid);return o.effect.buffs.filter(a=>a.target_guids?.some(r=>i.includes(r)))});rarityClass=I(()=>{let o=this.specialist()?.rarity;return o?`rarity-${o.toLowerCase()}`:"rarity-common"});socketMaskUrl=I(()=>`url(assets/icons/${this.specialist()?.allocation?.toLowerCase()==="ship"?"item_ship_socket.webp":"item_villa_socket.webp"})`);getLabel(o){return this.keyLabels[o]||o.replace(/_/g," ")}handleIconFallback(o){let e=o.target;e.src="/assets/icons/placeholder-specialist.png"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["anno-mini-specialist-card"]],inputs:{specialist:[1,"specialist"],targetGuid:[1,"targetGuid"]},decls:30,vars:13,consts:[[1,"spec-card"],[1,"spec-card-wrapper"],[1,"spec-header"],[1,"w-14","h-14","shrink-0"],[1,"relative",3,"error","src"],[1,"avatar-frame"],[1,"spec-title-wrapper"],[1,"spec-tags"],[1,"spec-name"],[1,"spec-flavor"],[1,"spec-effects-container"],[1,"spec-effects-header"],[1,"effects-title"],[1,"scope-badge"],[1,"spec-targets-block"],[1,"buff-group"],[1,"buff-row"],[1,"flex","items-center","gap-1.5","capitalize","buff-key"],["role","img",1,"inline-block","w-3.5","h-3.5","icon-brand",3,"mask-image","-webkit-mask-image"],[1,"buff-value"],["role","img",1,"inline-block","w-3.5","h-3.5","icon-brand"]],template:function(e,t){if(e&1&&(C(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"img",4),Ye("error",function(a){return t.handleIconFallback(a)}),w(),le(6,"div",5),w()(),C(7,"div",6)(8,"div",7)(9,"span"),c(10),w(),c(11," \u2022 "),C(12,"span"),c(13),w(),c(14," \u2022 "),C(15,"span"),c(16),w()(),C(17,"h4",8),c(18),w()()(),C(19,"div",9),c(20),w(),C(21,"div",10)(22,"div",11)(23,"span",12),c(24,"IMPROVES"),w(),C(25,"span",13),c(26),w()(),C(27,"div",14),R(28,ni,1,1,null,null,Jt),w()()()()),e&2){let i=t.specialist();k("data-rarity",i.rarity.toLowerCase()),d(4),se("specialist-avatar-box "+t.rarityClass()),d(),Y("src",i.icon_url,W),k("alt",i.title),d(),N("--mask-url",t.socketMaskUrl()),d(4),g(i.rarity),d(3),g(i.niche),d(3),g(i.allocation),d(2),g(i.title),d(2),T('"',i.description,'"'),d(6),g(i.effect.scope),d(2),L(t.filteredBuffs())}},styles:['.spec-card[_ngcontent-%COMP%]{font-family:var(--font-primary);position:relative;overflow:hidden;isolation:isolate;border-radius:4px;box-shadow:0 4px 6px -1px #0000000d;transition:background-color .3s ease,border-color .3s ease,color .3s ease;--card-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--card-border: color-mix(in srgb, var(--primary-color), transparent 20%);--text-main: var(--background-color);--text-muted: color-mix(in srgb, var(--background-color), var(--secondary-color) 25%);--text-sub-label: color-mix(in srgb, var(--background-color), transparent 10%);--text-highlight: var(--background-accent-color);--text-blockquote: color-mix(in srgb, var(--background-color), transparent 10%);--section-divider: color-mix(in srgb, var(--primary-color), transparent 20%);--border-subtle: color-mix(in srgb, var(--primary-color), transparent 40%);--box-bg: color-mix(in srgb, var(--primary-color), black 50%);--box-border: color-mix(in srgb, var(--background-color), transparent 90%)}.light-mode[_nghost-%COMP%]   .spec-card[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .spec-card[_ngcontent-%COMP%]{--card-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--card-border: #d4b89b;--text-main: var(--text-color);--text-muted: color-mix(in srgb, var(--text-color), var(--background-color) 30%);--text-sub-label: color-mix(in srgb, var(--primary-color), var(--background-color) 20%);--text-highlight: var(--text-color);--text-blockquote: color-mix(in srgb, var(--primary-color), var(--card-bg) 50%);--section-divider: rgba(140, 29, 64, .2);--border-subtle: rgba(140, 29, 64, .15);--box-bg: color-mix(in srgb, var(--card-bg), black 4%);--box-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 85%)}.spec-card[_ngcontent-%COMP%]{border:1px solid var(--card-border);color:var(--text-main)}.spec-card[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;width:4px;background-color:#fff;filter:brightness(1.15) contrast(1.3)}.spec-card[_ngcontent-%COMP%]   .spec-card-wrapper[_ngcontent-%COMP%]{padding:1rem;background-color:var(--card-bg);transition:background-color .3s ease}.spec-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1rem;margin-bottom:.75rem}.spec-title-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center}.spec-title-wrapper[_ngcontent-%COMP%]   .spec-tags[_ngcontent-%COMP%]{font-size:.5rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text-sub-label);margin-bottom:.25rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .3s ease}.spec-title-wrapper[_ngcontent-%COMP%]   .spec-name[_ngcontent-%COMP%]{font-size:.85rem;font-weight:800;margin:0;color:var(--text-highlight);line-height:1.2;text-transform:uppercase;transition:color .3s ease}.spec-flavor[_ngcontent-%COMP%]{font-size:.65rem;font-style:italic;color:var(--text-blockquote);margin-bottom:1rem;padding-left:.5rem;border-left:2px solid var(--border-subtle);transition:color .3s ease,border-color .3s ease}.spec-effects-container[_ngcontent-%COMP%]{background-color:var(--box-bg);border:1px solid var(--box-border);border-radius:4px;transition:background-color .3s ease,border-color .3s ease}.spec-effects-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.5rem .75rem;border-bottom:1px solid var(--box-border);transition:border-color .3s ease}.spec-effects-header[_ngcontent-%COMP%]   .effects-title[_ngcontent-%COMP%]{font-size:.65rem;font-weight:800;letter-spacing:.05em;color:var(--text-sub-label);transition:color .3s ease}.spec-effects-header[_ngcontent-%COMP%]   .scope-badge[_ngcontent-%COMP%]{font-size:.5rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:.15rem .35rem;border:1px solid var(--border-subtle);color:var(--text-main);border-radius:3px;transition:border-color .3s ease,color .3s ease}.spec-targets-block[_ngcontent-%COMP%]{padding:.5rem .75rem}.spec-targets-block[_ngcontent-%COMP%]   .buff-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem}.spec-targets-block[_ngcontent-%COMP%]   .buff-group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.5rem;padding-bottom:.5rem;border-bottom:1px dashed var(--section-divider);transition:border-color .3s ease}.spec-targets-block[_ngcontent-%COMP%]   .buff-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:.75rem}.spec-targets-block[_ngcontent-%COMP%]   .buff-row[_ngcontent-%COMP%]   .buff-key[_ngcontent-%COMP%]{font-weight:600;color:var(--text-muted);transition:color .3s ease}.spec-targets-block[_ngcontent-%COMP%]   .buff-row[_ngcontent-%COMP%]   .buff-value[_ngcontent-%COMP%]{font-weight:800;color:var(--text-highlight);transition:color .3s ease}'],changeDetection:0})};var oi=["visContainer"],ai=(n,o)=>o.label,Pt=(n,o)=>o.id;function ri(n,o){n&1&&(l(0,"span",8),c(1,"Loading Production Chains..."),s())}function li(n,o){if(n&1&&(l(0,"div",11),M(1,"img",39),l(2,"span",40),c(3),s()()),n&2){let e=o;d(),x("src",e.outputBuilding.icon_url,W),k("alt",e.name),d(2),g(e.name)}}function di(n,o){if(n&1&&(l(0,"mat-option",45)(1,"div",46),M(2,"img",47),l(3,"span",48),c(4),s()()()),n&2){let e=o.$implicit;x("value",e.id),d(2),x("src",e.outputBuilding.icon_url,W),k("alt",e.name),d(2),g(e.name)}}function si(n,o){if(n&1&&(l(0,"mat-option",41)(1,"div",42),M(2,"span",43),l(3,"span",44),c(4),s()()(),R(5,di,5,4,"mat-option",45,Pt)),n&2){let e=o.$implicit;d(2),N("mask-image","url("+e.icon+")")("-webkit-mask-image","url("+e.icon+")"),k("aria-label",e.label+" icon"),d(2),T(" ",e.label," "),d(),L(e.chains)}}function ci(n,o){n&1&&(l(0,"mat-option",12)(1,"span",49),c(2,"No chains loaded"),s()())}function mi(n,o){if(n&1){let e=de();l(0,"div",29)(1,"div",50)(2,"div",51)(3,"img",52),y("error",function(i){ne(e);let a=p();return oe(a.handleIconFallback(i))}),s()(),l(4,"div")(5,"h4",53),c(6),s(),l(7,"p",54),c(8),s()()(),l(9,"table",55)(10,"tbody")(11,"tr",56)(12,"th",57),c(13,"Tier Level"),s(),l(14,"td",58),c(15),s()(),l(16,"tr",56)(17,"th",57),c(18,"Internal ID"),s(),l(19,"td",58),c(20),s()()()()()}if(n&2){let e=o;d(3),x("src",e.iconUrl,W),d(3),g(e.text),d(2),T("GUID: ",e.guid),d(7),T("Tier ",e.level),d(5),g(e.stdName)}}function fi(n,o){n&1&&(l(0,"div",30),c(1," Click any circular building node on the canvas to inspect its parameters. "),s())}function pi(n,o){if(n&1&&(l(0,"div",59)(1,"p",60),c(2),s()()),n&2){let e=p();N("color",e.secondaryColor()),d(2),g(e.service.error())}}function ui(n,o){n&1&&(l(0,"div",37),c(1," Select a building node to view the specialists that affect its productivity. "),s())}function hi(n,o){if(n&1&&(l(0,"div",37),c(1),s()),n&2){let e,t=p();d(),T(" No registered specialists affect ",(e=t.selectedNode())==null?null:e.text,". ")}}function gi(n,o){if(n&1&&M(0,"anno-mini-specialist-card",61),n&2){let e,t=o.$implicit,i=p(2);x("specialist",t)("targetGuid",(e=i.selectedNode())==null?null:e.guid)}}function bi(n,o){if(n&1&&(l(0,"div",38),R(1,gi,1,2,"anno-mini-specialist-card",61,Pt),s()),n&2){let e=p();d(),L(e.applicableSpecialists())}}var Ot=class n{service=m(_e);specialistService=m(pe);platformId=m(Ue);visContainer=Ee("visContainer");primaryColor=b("");secondaryColor=b("");bgColor=b("");fontPrimary=b("serif");selectedChain=b(null);selectedNode=b(null);networkInstance=null;nodeMetadataMap=new Map;activeChainId=b("");applicableSpecialists=I(()=>{let o=this.selectedNode();return this.service.getSpecialistsForBuilding(o?.guid)});groupedChains=I(()=>{let o=this.service.chains(),e=[],t=[],i=[];o.forEach(r=>{let u=r.outputBuilding;if(!u)return;let f=u.region||[],S=f.includes("Roman"),B=f.includes("Celtic");S&&B?i.push(r):S?e.push(r):B&&t.push(r)});let a=r=>{let u=new Set;return r.filter(f=>u.has(f.name)?!1:(u.add(f.name),!0)).sort((f,S)=>f.name.localeCompare(S.name))};return[{label:"Latium",icon:"assets/icons/base/icon_content/generic/icon_2d_region_heartlands_0.webp",chains:a(e)},{label:"Albion",icon:"assets/icons/base/icon_content/generic/icon_2d_region_wetlands_0.webp",chains:a(t)},{label:"Shared",icon:"assets/icons/base/icon_content/generic/icon_2d_region_global_0.webp",chains:a(i)}].filter(r=>r.chains.length>0)});constructor(){ae(()=>{let o=this.primaryColor(),e=this.secondaryColor(),t=this.bgColor(),i=this.selectedChain();o&&e&&t&&i&&this.rebuildGraph()}),ae(()=>{let o=this.service.chains();if(o.length>0&&!this.selectedChain()){let e="3222",t=o.find(i=>i.id===e)||o[0];t&&(this.activeChainId.set(t.id),this.selectedChain.set(t))}})}ngOnInit(){if(ce(this.platformId)){let o=getComputedStyle(document.documentElement);this.primaryColor.set(o.getPropertyValue("--primary-color").trim()),this.secondaryColor.set(o.getPropertyValue("--secondary-color").trim()),this.bgColor.set(o.getPropertyValue("--background-accent-color").trim()||o.getPropertyValue("--background-color").trim()),this.fontPrimary.set(o.getPropertyValue("--font-primary").trim()||"Marcellus, Roboto, serif")}this.service.fetchChains("en"),this.specialistService.fetchSpecialists()}ngAfterViewInit(){this.primaryColor()&&this.rebuildGraph()}ngOnDestroy(){this.networkInstance&&(this.networkInstance.destroy(),this.networkInstance=null)}async rebuildGraph(){if(!ce(this.platformId))return;let o=this.visContainer()?.nativeElement,e=this.selectedChain();if(!o||!e)return;let{Network:t}=await import("./chunk-XC5M76XR.js"),{DataSet:i}=await import("./chunk-J2RDNJKG.js"),a=[],r=[];this.nodeMetadataMap.clear();let u=(h,K)=>{this.nodeMetadataMap.set(h.guid,{guid:h.guid,text:h.text,stdName:h.std_name,iconUrl:h.icon_url,level:K}),a.push({id:h.guid,label:h.text,image:h.icon_url||this.service.placeholderImage,level:K}),h.tier.forEach(H=>{r.push({id:`${H.guid}-${h.guid}`,from:H.guid,to:h.guid}),u(H,K+1)})};u(e.outputBuilding,0);let f=Array.from(new Map(a.map(h=>[h.id,h])).values()),S=new i(f),B=new i(r),Ft={nodes:{shape:"circularImage",imagePadding:4,size:38,borderWidth:2.5,borderWidthSelected:3.5,color:{border:this.secondaryColor(),background:this.primaryColor(),highlight:{border:this.secondaryColor(),background:this.primaryColor()}},font:{color:this.secondaryColor(),size:14,face:this.fontPrimary(),strokeWidth:0,strokeColor:"none",vadjust:24}},edges:{font:{strokeWidth:0,strokeColor:"none"},width:2.2,color:{color:this.secondaryColor(),highlight:this.secondaryColor()},arrows:{to:{enabled:!0,scaleFactor:1.1,type:"arrow"}},smooth:{enabled:!0,type:"cubicBezier",roundness:.5}},layout:{hierarchical:{enabled:!0,direction:"RL",sortMethod:"directed",nodeSpacing:160,levelSeparation:250}},interaction:{dragView:!1,zoomView:!1,hover:!0,dragNodes:!0,selectable:!0},physics:{enabled:!1}};this.networkInstance&&this.networkInstance.destroy(),this.networkInstance=new t(o,{nodes:S,edges:B},Ft),this.networkInstance.on("click",h=>{if(h.nodes&&h.nodes.length>0){let K=Number(h.nodes[0]),H=this.nodeMetadataMap.get(Number(K));H&&this.selectedNode.set(H)}else this.selectedNode.set(null)})}resetColors(){if(!ce(this.platformId))return;let o=getComputedStyle(document.documentElement);this.bgColor.set(o.getPropertyValue("--background-accent-color").trim()||o.getPropertyValue("--background-color").trim()),this.primaryColor.set(o.getPropertyValue("--primary-color").trim()),this.secondaryColor.set(o.getPropertyValue("--secondary-color").trim()),this.networkInstance&&this.networkInstance.setOptions({nodes:{color:{background:this.primaryColor(),border:this.secondaryColor(),highlight:{background:this.primaryColor(),border:this.secondaryColor()}},font:{color:this.secondaryColor()}},edges:{color:{color:this.secondaryColor(),highlight:this.secondaryColor()}}})}onChainChange(o){let e=o.value;if(e){this.activeChainId.set(e);let t=this.service.chains().find(i=>i.id===e);t&&this.selectedChain.set(t),this.selectedNode.set(null),this.resetView()}}updateColor(o,e){let t=e.target;o==="bg"&&this.bgColor.set(t.value),o==="primary"&&this.primaryColor.set(t.value),o==="secondary"&&this.secondaryColor.set(t.value)}handleIconFallback(o){let e=o.target;e.src=this.service.placeholderImage}resetView(){this.networkInstance&&this.networkInstance.fit()}exportCanvas(){if(!this.networkInstance)return;let o=this.visContainer()?.nativeElement.querySelector("canvas");if(o){let e=o.toDataURL("image/png"),t=document.createElement("a");t.download=`${this.selectedChain()?.canonName||"production_chain"}.png`,t.href=e,t.click()}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=O({type:n,selectors:[["anno-production-chain-visualizer"]],viewQuery:function(e,t){e&1&&Se(t.visContainer,oi,5),e&2&&Oe()},decls:66,vars:14,consts:[["visContainer",""],[1,"visualizer-container"],[1,"visualizer-header"],[1,"header-title-group"],[1,"text-anno-roman-red"],[1,"main-title"],[1,"subtitle"],[1,"visualizer-controls"],[1,"loading-pulse"],["for","chain-template-selector",1,"selector-label"],["id","chain-template-selector",1,"chain-select",3,"selectionChange","value"],[1,"option-content-wrapper"],["value","","disabled",""],[1,"visualizer-main"],[1,"customizer-sidebar"],[1,"sidebar-section"],[1,"sidebar-header"],[1,"sidebar-title"],[1,"btn-text-reset",3,"click"],[1,"color-picker-list"],[1,"color-row"],[1,"color-label"],["type","color",1,"color-picker-input",3,"input","value"],[1,"sidebar-title","border-bottom"],[1,"action-button-group"],[1,"btn-layout","btn-outline",3,"click"],[1,"btn-layout","btn-filled",3,"click"],[1,"sidebar-section","flex-expanded"],[1,"inspector-scroll-container"],[1,"inspector-details","animate-fade-in"],[1,"inspector-empty-state"],[1,"canvas-wrapper"],[1,"canvas-error-layer",3,"color"],[1,"network-canvas-surface"],[1,"canvas-tooltip"],[1,"specialists-sidebar"],[1,"specialists-scroll-container"],[1,"sidebar-empty-state"],[1,"specialists-list","animate-fade-in"],[1,"option-icon","w-6","h-6",3,"src"],[1,"option-text"],["disabled","",1,"custom-select-group-header"],[1,"flex","items-center","gap-2","border-b","border-(--secondary-color)/20","pb-1","w-full"],["role","img",1,"inline-block","w-8","h-8","icon-brand"],[1,"text-xs","font-bold","uppercase","tracking-widest"],[1,"custom-select-option","client-option-indent",3,"value"],[1,"flex","items-center","gap-2.5","capitalize"],[1,"w-6","h-6","rounded-sm","shrink-0","object-contain",3,"src"],[1,"font-bold","text-sm"],[1,"text-xs","opacity-60"],[1,"node-profile-header"],[1,"node-profile-avatar"],["alt","node icon",1,"avatar-img",3,"error","src"],[1,"node-name"],[1,"node-meta-guid"],[1,"inspector-table"],[1,"table-row"],[1,"table-th"],[1,"table-td"],[1,"canvas-error-layer"],[1,"error-msg"],[3,"specialist","targetGuid"]],template:function(e,t){if(e&1&&(l(0,"div",1)(1,"header",2)(2,"div",3)(3,"h4",4),c(4,"THIS IS A WORK IN PROGRESS"),s(),l(5,"h1",5),c(6,"Anno 117 Production Networks"),s(),l(7,"p",6),c(8,"Interactive Graph & Asset Visualizer"),s()(),l(9,"div",7),_(10,ri,2,0,"span",8),l(11,"label",9),c(12," Select Chain Template: "),s(),l(13,"mat-select",10),y("selectionChange",function(a){return t.onChainChange(a)}),l(14,"mat-select-trigger"),_(15,li,4,3,"div",11),s(),R(16,si,7,6,null,null,ai,!1,ci,3,0,"mat-option",12),s()()(),l(19,"main",13)(20,"section",14)(21,"div",15)(22,"div",16)(23,"h3",17),c(24,"Palette Customizer"),s(),l(25,"button",18),y("click",function(){return t.resetColors()}),c(26," Reset Colors "),s()(),l(27,"div",19)(28,"div",20)(29,"span",21),c(30,"Canvas Background"),s(),l(31,"input",22),y("input",function(a){return t.updateColor("bg",a)}),s()(),l(32,"div",20)(33,"span",21),c(34,"Node Background"),s(),l(35,"input",22),y("input",function(a){return t.updateColor("primary",a)}),s()(),l(36,"div",20)(37,"span",21),c(38,"Borders, Labels & Lines"),s(),l(39,"input",22),y("input",function(a){return t.updateColor("secondary",a)}),s()()()(),l(40,"div",15)(41,"h3",23),c(42,"Actions"),s(),l(43,"div",24)(44,"button",25),y("click",function(){return t.resetView()}),c(45," Reset View "),s(),l(46,"button",26),y("click",function(){return t.exportCanvas()}),c(47," Export PNG "),s()()(),l(48,"div",27)(49,"h3",23),c(50,"Node Inspector"),s(),l(51,"div",28),_(52,mi,21,5,"div",29)(53,fi,2,0,"div",30),s()()(),l(54,"section",31),_(55,pi,3,3,"div",32),M(56,"div",33,0),l(58,"div",34)(59,"span"),c(60,"\u{1F5B1}\uFE0F Click any Node to inspect parameters"),s()()(),l(61,"section",35)(62,"div",36),_(63,ui,2,0,"div",37)(64,hi,2,1,"div",37)(65,bi,3,0,"div",38),s()()()()),e&2){let i,a;d(10),v(t.service.isLoading()?10:-1),d(3),x("value",t.activeChainId()),d(2),v((i=t.selectedChain())?15:-1,i),d(),L(t.groupedChains()),d(15),x("value",t.bgColor()),d(4),x("value",t.primaryColor()),d(4),x("value",t.secondaryColor()),d(13),v((a=t.selectedNode())?52:53,a),d(2),N("border-color",t.secondaryColor())("background-color",t.bgColor()),d(),v(t.service.error()?55:-1),d(8),v(t.selectedNode()?t.applicableSpecialists().length===0?64:65:63)}},dependencies:[Mt,ge,St,ve],styles:[".visualizer-container[_ngcontent-%COMP%]{--sidebar-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--sidebar-text: var(--background-color);--sidebar-border: color-mix(in srgb, var(--primary-color), transparent 20%);--btn-bg: color-mix(in srgb, var(--primary-color), black 50%);--btn-border: color-mix(in srgb, var(--background-color), transparent 90%)}.light-mode[_nghost-%COMP%]   .visualizer-container[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .visualizer-container[_ngcontent-%COMP%]{--sidebar-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--sidebar-text: var(--text-color);--sidebar-border: color-mix(in srgb, var(--primary-color), var(--sidebar-bg) 85%);--btn-bg: color-mix(in srgb, var(--sidebar-bg), black 4%);--btn-border: color-mix(in srgb, var(--primary-color), var(--sidebar-bg) 85%)}.visualizer-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;min-height:0;background-color:transparent}@media(min-width:1024px){.visualizer-container[_ngcontent-%COMP%]{height:calc(100vh - 80px);overflow:hidden}}.visualizer-header[_ngcontent-%COMP%]{font-family:var(--font-primary);border-bottom:2px solid var(--secondary-color);color:var(--secondary-color);display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:1rem 1.5rem;gap:1rem;flex-shrink:0;background:#00000005}@media(min-width:1024px){.visualizer-header[_ngcontent-%COMP%]{flex-direction:row;padding-left:2rem;padding-right:2rem}}.visualizer-header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]{text-align:center}@media(min-width:1024px){.visualizer-header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]{text-align:left}}.visualizer-header[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{font-size:var(--text-3xl);line-height:var(--tw-leading, var(--text-3xl--line-height));font-weight:700;text-transform:uppercase;margin:0}@media(min-width:1024px){.visualizer-header[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{font-size:1.875rem}}.visualizer-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:var(--text-sm);line-height:var(--tw-leading, var(--text-sm--line-height));font-weight:700;font-style:italic;opacity:.8;margin-top:.25rem;margin-bottom:0}.visualizer-controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.5rem;width:100%}@media(min-width:640px){.visualizer-controls[_ngcontent-%COMP%]{flex-direction:row;align-items:center;gap:.75rem}}@media(min-width:768px){.visualizer-controls[_ngcontent-%COMP%]{width:auto;justify-content:flex-end}}.visualizer-controls[_ngcontent-%COMP%]   .loading-pulse[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;flex-shrink:0;animation:_ngcontent-%COMP%_pulse 2s cubic-bezier(.4,0,.6,1) infinite}.visualizer-controls[_ngcontent-%COMP%]   .selector-label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;white-space:nowrap}@media(min-width:768px){.visualizer-controls[_ngcontent-%COMP%]   .selector-label[_ngcontent-%COMP%]{font-size:.875rem}}.chain-select[_ngcontent-%COMP%]{width:100%!important;font-family:var(--font-primary);border:2px solid var(--secondary-color);background-color:var(--background-color);color:var(--secondary-color);border-radius:.375rem;font-weight:700;cursor:pointer;outline:none;transition:colors .2s cubic-bezier(.4,0,.2,1);font-size:.875rem}@media(min-width:640px){.chain-select[_ngcontent-%COMP%]{width:24rem!important}}.chain-select[_ngcontent-%COMP%]     .mat-mdc-select-trigger{display:flex;align-items:center;height:2.5rem;padding:0 .75rem;box-sizing:border-box}.chain-select[_ngcontent-%COMP%]     .mat-mdc-select-value{display:flex!important;align-items:center;color:var(--secondary-color)!important;max-width:calc(100% - 1.5rem)}.chain-select[_ngcontent-%COMP%]     .mat-mdc-select-arrow{color:var(--secondary-color)!important}.chain-select[_ngcontent-%COMP%]     .mat-mdc-select-arrow svg{fill:currentColor}.chain-select[_ngcontent-%COMP%]   .option-content-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;width:100%}.chain-select[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]{font-weight:700;font-family:var(--font-primary);font-size:.875rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}  .mat-mdc-select-panel{background-color:var(--background-color)!important;border:2px solid var(--secondary-color);font-family:var(--font-primary);min-width:100%!important;box-shadow:0 4px 14px #00000040;border-radius:.375rem}  .mat-mdc-select-panel .custom-select-group-header.mdc-list-item--disabled{opacity:1!important;height:40px!important;padding:0 12px!important;cursor:default;pointer-events:none}  .mat-mdc-select-panel .custom-select-group-header.mdc-list-item--disabled .icon-brand{background-color:var(--primary-color)}  .mat-mdc-select-panel .custom-select-group-header.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--secondary-color)!important;opacity:.75;width:100%}  .mat-mdc-select-panel .custom-select-group-header.mdc-list-item--disabled:hover{background-color:transparent!important}.custom-select-option[_ngcontent-%COMP%]{color:var(--secondary-color)!important;padding:0 .75rem!important}.custom-select-option[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]{font-weight:700;font-family:var(--font-primary);font-size:.875rem}.custom-select-option[_ngcontent-%COMP%]:hover:not(.mdc-list-item--disabled){background-color:color-mix(in srgb,var(--secondary-color),transparent 90%)!important}.visualizer-main[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;min-height:0;padding:1rem;gap:1rem;overflow:visible}@media(min-width:1024px){.visualizer-main[_ngcontent-%COMP%]{flex-direction:row;overflow:hidden}}.customizer-sidebar[_ngcontent-%COMP%], .specialists-sidebar[_ngcontent-%COMP%]{width:100%;background-color:var(--sidebar-bg);border:2px solid var(--sidebar-border);color:var(--sidebar-text);border-radius:.5rem;display:flex;flex-direction:column;flex-shrink:0;transition:background-color .3s ease,color .3s ease,border-color .3s ease}@media(min-width:1024px){.customizer-sidebar[_ngcontent-%COMP%], .specialists-sidebar[_ngcontent-%COMP%]{background-color:transparent;height:100%}}.customizer-sidebar[_ngcontent-%COMP%]{padding:1rem;gap:1.5rem}@media(min-width:1024px){.customizer-sidebar[_ngcontent-%COMP%]{background-color:var(--sidebar-bg);border:2px solid var(--sidebar-border);color:var(--sidebar-text);width:20rem;overflow-y:auto;transition:background-color .3s ease,color .3s ease,border-color .3s ease}}.customizer-sidebar[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-shrink:0}.customizer-sidebar[_ngcontent-%COMP%]   .sidebar-section.flex-expanded[_ngcontent-%COMP%]{flex:1;min-height:0}.customizer-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--secondary-color);padding-bottom:.5rem;margin-bottom:1rem}.customizer-sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:.75rem;font-weight:700;text-transform:uppercase;margin:0}@media(min-width:768px){.customizer-sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]{font-size:.875rem}}.customizer-sidebar[_ngcontent-%COMP%]   .sidebar-title.border-bottom[_ngcontent-%COMP%]{border-bottom:2px solid var(--secondary-color);padding-bottom:.5rem;margin-bottom:1rem}@media(min-width:1024px){.specialists-sidebar[_ngcontent-%COMP%]{width:21rem}}.color-picker-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.color-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.color-row[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700}.color-picker-input[_ngcontent-%COMP%]{border:none;width:2.75rem;height:1.75rem;border-radius:.25rem;cursor:pointer;background:none;padding:0}.action-button-group[_ngcontent-%COMP%]{display:flex;gap:.5rem}.btn-layout[_ngcontent-%COMP%]{flex:1;padding-top:.5rem;padding-bottom:.5rem;border-radius:.375rem;font-weight:700;cursor:pointer;font-size:.75rem;transition:all .2s ease}.btn-layout[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 8px #00000026}.btn-outline[_ngcontent-%COMP%]{background-color:transparent;border:2px solid var(--btn-border);color:var(--sidebar-text)}.btn-filled[_ngcontent-%COMP%]{background-color:var(--btn-bg);color:var(--sidebar-text);border:2px solid var(--btn-border)}.btn-text-reset[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-transform:uppercase;text-decoration:underline;opacity:.7;cursor:pointer;border:none;background:transparent;color:inherit;transition:opacity .2s ease}.btn-text-reset[_ngcontent-%COMP%]:hover{opacity:1}.inspector-scroll-container[_ngcontent-%COMP%]{flex:1;min-height:0}@media(min-width:1024px){.inspector-scroll-container[_ngcontent-%COMP%]{overflow-y:auto}}.inspector-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding-right:.25rem}.node-profile-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.node-profile-avatar[_ngcontent-%COMP%]{width:3.5rem;height:3.5rem;border-radius:9999px;border:2px solid var(--secondary-color);background-color:var(--primary-color);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;box-shadow:0 2px 4px #0000001a}.node-profile-avatar[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;object-fit:contain;margin-left:auto;margin-right:auto}.node-name[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.125rem;font-weight:700;margin:0}.node-meta-guid[_ngcontent-%COMP%]{font-size:.75rem;opacity:.75;margin:0}.inspector-table[_ngcontent-%COMP%]{width:100%;font-size:.75rem;border-collapse:collapse}.inspector-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.1)}.inspector-table[_ngcontent-%COMP%]   .table-th[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;text-align:left;font-weight:700;width:33.333%}.inspector-table[_ngcontent-%COMP%]   .table-td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;text-align:left}.inspector-empty-state[_ngcontent-%COMP%], .sidebar-empty-state[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;padding:2rem 1.5rem;text-align:center;font-size:.75rem;font-style:italic;opacity:.6}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;border:2px solid transparent;border-radius:.5rem;position:relative;overflow:hidden;box-shadow:inset 0 2px 6px #0000001a;height:55dvh;min-height:28.75rem}@media(min-width:1024px){.canvas-wrapper[_ngcontent-%COMP%]{height:100%;min-height:0}}.network-canvas-surface[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%}.canvas-error-layer[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:1rem;z-index:10}.canvas-error-layer[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%]{font-weight:700;margin:0}.canvas-tooltip[_ngcontent-%COMP%]{font-family:var(--font-primary);position:absolute;bottom:.75rem;left:.75rem;font-size:10px;font-weight:700;background-color:color-mix(in srgb,var(--background-color),transparent 60%);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);padding:.375rem .75rem;border-radius:9999px;pointer-events:none;z-index:10;color:var(--secondary-color)}@media(min-width:768px){.canvas-tooltip[_ngcontent-%COMP%]{font-size:.75rem}}.specialists-scroll-container[_ngcontent-%COMP%]{flex:1;min-height:0;overflow-y:auto;padding:.5rem}.specialists-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:.5rem}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s cubic-bezier(.4,0,.2,1) forwards}"],changeDetection:0})};export{Ot as ProductionChainVisualizerComponent};
