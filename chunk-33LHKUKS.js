import{a as Ze,d as Xe,f as Ye,h as Je,i as et,j as tt,k as nt,l as at,m as rt,n as ot,o as lt}from"./chunk-EAI5XFH3.js";import{b as ee}from"./chunk-7M3DYWDZ.js";import{a as it}from"./chunk-XQQZCUUF.js";import{E as ue,F as Ke,k as J,m as Qe,q as Ue,r as We,s as qe,w as Ge}from"./chunk-T5NXEJ7H.js";import{e as je,g as $e}from"./chunk-PN2LBJVD.js";import{e as ze,h as Be}from"./chunk-CJ5YNVG4.js";import"./chunk-EFRQ7R5D.js";import{$ as p,$b as pe,A as _e,Ab as b,B,Bb as x,Cb as m,Db as r,Dc as U,Eb as a,Ec as Ve,Fb as C,G as he,Gb as G,Hb as se,Ib as Ee,Lb as de,Mb as P,O as ve,Qb as u,Sa as R,Sb as c,Tb as ce,Ua as l,Ub as D,Vb as Oe,Wb as Te,X as j,Xb as K,Yb as Z,Z as N,_a as Me,a as fe,ab as ke,ac as O,b as be,bc as V,cc as Ae,d as W,db as Se,dc as s,ea as w,ec as g,fa as M,fc as F,ga as ye,gc as Ie,h as re,hb as E,hc as De,ia as Ce,ib as $,ic as Fe,jb as Q,jc as He,kc as X,la as A,lb as Pe,m as xe,ma as we,mb as L,mc as me,qa as k,qc as Ne,ua as oe,uc as H,vb as S,wb as _,wc as Re,xa as le,xb as h,xc as Le,zb as q,zc as Y}from"./chunk-6OBXNOGG.js";var st=new N("CdkAccordion");var dt=(()=>{class t{accordion=p(st,{optional:!0,skipSelf:!0});_changeDetectorRef=p(Y);_expansionDispatcher=p(ee);_openCloseAllSubscription=W.EMPTY;closed=new A;opened=new A;destroyed=new A;expandedChange=new A;id=p(J).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=k(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Q({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",U],disabled:[2,"disabled","disabled",U]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[X([{provide:st,useValue:void 0}])]})}return t})(),ct=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=j({})}return t})();var Mt=["body"],kt=["bodyWrapper"],St=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Pt=["mat-expansion-panel-header","*","mat-action-row"];function Et(t,i){}var Ot=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Tt=["mat-panel-title","mat-panel-description","*"];function At(t,i){t&1&&(G(0,"span",1),ye(),G(1,"svg",2),Ee(2,"path",3),se()())}var pt=new N("MAT_ACCORDION"),mt=new N("MAT_EXPANSION_PANEL"),It=(()=>{class t{_template=p(Me);_expansionPanel=p(mt,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Q({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),ut=new N("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),ge=(()=>{class t extends dt{_viewContainerRef=p(Se);_animationsDisabled=Ke();_document=p(Ce);_ngZone=p(we);_elementRef=p(le);_renderer=p(ke);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new A;afterCollapse=new A;_inputChanges=new re;accordion=p(pt,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=p(J).getId("mat-expansion-panel-header-");constructor(){super();let e=p(ut,{optional:!0});this._expansionDispatcher=p(ee),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ve(null),B(()=>this.expanded&&!this._portal),he(1)).subscribe(()=>{this._portal=new Qe(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,o,d){if(n&1&&Oe(d,It,5),n&2){let f;K(f=Z())&&(o._lazyContent=f.first)}},viewQuery:function(n,o){if(n&1&&Te(Mt,5)(kt,5),n&2){let d;K(d=Z())&&(o._body=d.first),K(d=Z())&&(o._bodyWrapper=d.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,o){n&2&&V("mat-expanded",o.expanded)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",U],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[X([{provide:pt,useValue:void 0},{provide:mt,useExisting:t}]),Pe,oe],ngContentSelectors:Pt,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,o){n&1&&(ce(St),D(0),r(1,"div",2,0)(3,"div",3,1)(5,"div",4),D(6,1),L(7,Et,0,0,"ng-template",5),a(),D(8,2),a()()),n&2&&(l(),S("inert",o.expanded?null:""),l(2),m("id",o.id),S("aria-labelledby",o._headerId),l(4),m("cdkPortalOutlet",o._portal))},dependencies:[Ue],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var gt=(()=>{class t{panel=p(ge,{host:!0});_element=p(le);_focusMonitor=p(Ge);_changeDetectorRef=p(Y);_parentChangeSubscription=W.EMPTY;constructor(){p(je).load(it);let e=this.panel,n=p(ut,{optional:!0}),o=p(new Re("tabindex"),{optional:!0}),d=e.accordion?e.accordion._stateChanges.pipe(B(f=>!!(f.hideToggle||f.togglePosition))):xe;this.tabIndex=parseInt(o||"")||0,this._parentChangeSubscription=_e(e.opened,e.closed,d,e._inputChanges.pipe(B(f=>!!(f.hideToggle||f.disabled||f.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(B(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:qe(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,o){n&1&&u("click",function(){return o._toggle()})("keydown",function(f){return o._keydown(f)}),n&2&&(S("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),O("height",o._getHeaderHeight()),V("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ve(e)]},ngContentSelectors:Tt,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,o){n&1&&(ce(Ot),G(0,"span",0),D(1),D(2,1),D(3,2),se(),_(4,At,3,0,"span",1)),n&2&&(V("mat-content-hide-toggle",!o._showToggle()),l(4),h(o._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=Q({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})();var bt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=j({imports:[ct,We,$e]})}return t})();var xt=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ue(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ue(e)}_inset=!1;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(n,o){n&2&&(S("aria-orientation",o.vertical?"vertical":"horizontal"),V("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(n,o){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})();var _t=t=>({$implicit:t}),z=(t,i)=>i.guid,ht=(t,i)=>i.key,Ht=(t,i)=>i.product.guid;function Nt(t,i){t&1&&de(0)}function Rt(t,i){if(t&1&&(r(0,"div",12)(1,"div",13)(2,"h3",14),s(3," Improves "),a(),r(4,"span",15),s(5),a()(),L(6,Nt,1,0,"ng-container",16),a()),t&2){let e=i.$implicit;c();let n=pe(21),o=He(2);l(5),g(o.effect.scope),l(),m("ngTemplateOutlet",n)("ngTemplateOutletContext",me(3,_t,e))}}function Lt(t,i){if(t&1&&(r(0,"div",23)(1,"span",25),s(2,"Hint:"),a(),s(3),a()),t&2){let e=c();l(3),F(" ",e.hint," ")}}function Vt(t,i){t&1&&de(0)}function zt(t,i){if(t&1&&(r(0,"div",13)(1,"h3",26),s(2," Improves (Boosted) "),a(),r(3,"span",27),s(4,"Active Boost"),a()(),L(5,Vt,1,0,"ng-container",16)),t&2){let e=i.$implicit;c(2);let n=pe(21);l(5),m("ngTemplateOutlet",n)("ngTemplateOutletContext",me(2,_t,e))}}function Bt(t,i){if(t&1&&(C(0,"mat-divider",17),r(1,"div",18)(2,"div",19)(3,"div",20)(4,"h3",14),s(5," Boost Requirements "),a()(),r(6,"div",21)(7,"span",22),s(8,"Condition:"),a(),r(9,"span"),s(10),a()(),_(11,Lt,4,1,"div",23),a(),r(12,"div",24),b(13,zt,6,4,null,null,z),a()()),t&2){let e=i;O("border-color","var(--section-divider)"),l(10),g(e.condition),l(),h(e.hint?11:-1),l(2),x(e.buffs)}}function jt(t,i){if(t&1){let e=P();r(0,"div",39)(1,"img",40),u("error",function(o){w(e);let d=c(4);return M(d.onImageError(o))}),a(),r(2,"span"),s(3),a()()}if(t&2){let e=i.$implicit;l(),m("src",e.icon_url,R),l(2),g(e.name)}}function $t(t,i){if(t&1&&(r(0,"mat-expansion-panel",37)(1,"mat-expansion-panel-header")(2,"mat-panel-title",38),s(3),a()(),r(4,"div",28),b(5,jt,4,2,"div",39,z),a()()),t&2){let e=c().$implicit;l(3),F(" ",e.asset_pool_title," "),l(2),x(e.affected_items)}}function Qt(t,i){if(t&1){let e=P();r(0,"div",39)(1,"img",40),u("error",function(o){w(e);let d=c(4);return M(d.onImageError(o))}),a(),r(2,"span"),s(3),a()()}if(t&2){let e=i.$implicit;l(),m("src",e.icon_url,R),l(2),g(e.name)}}function Ut(t,i){if(t&1&&b(0,Qt,4,2,"div",39,z),t&2){let e=c().$implicit;x(e.affected_items)}}function Wt(t,i){if(t&1&&_(0,$t,7,1,"mat-expansion-panel",37)(1,Ut,2,0),t&2){let e=i.$implicit;h(e.asset_pool_title?0:1)}}function qt(t,i){if(t&1&&C(0,"span",44),t&2){let e=i,n=c().$implicit,o=c(2);O("mask-image","url("+e+")")("-webkit-mask-image","url("+e+")"),S("aria-label",o.getLabel(n.key)+" icon")}}function Gt(t,i){if(t&1&&(r(0,"div",31)(1,"div",41),_(2,qt,1,5,"span",42),r(3,"span"),s(4),a()(),r(5,"span",43),s(6),a()()),t&2){let e,n=i.$implicit,o=c(2);l(2),h((e=o.keyIcons[n.key])?2:-1,e),l(2),g(o.getLabel(n.key)),l(2),g(n.value)}}function Kt(t,i){if(t&1&&C(0,"span",44),t&2){let e=i,n=c().$implicit,o=c(3);O("mask-image","url("+e+")")("-webkit-mask-image","url("+e+")"),S("aria-label",o.getLabel(n.key)+" icon")}}function Zt(t,i){if(t&1&&(r(0,"div",48)(1,"div",41),_(2,Kt,1,5,"span",42),r(3,"span"),s(4),a()(),r(5,"span",43),s(6),a()()),t&2){let e,n=i.$implicit,o=c(3);l(2),h((e=o.keyIcons[n.key])?2:-1,e),l(2),g(o.getLabel(n.key)),l(2),g(n.value)}}function Xt(t,i){if(t&1){let e=P();r(0,"div",30)(1,"div",45)(2,"img",46),u("error",function(o){w(e);let d=c(2);return M(d.onImageError(o))}),a(),r(3,"span"),s(4),a()(),r(5,"div",47),b(6,Zt,7,3,"div",48,ht),a()()}if(t&2){let e=i.$implicit;l(2),m("src",e.product.icon_url,R),l(2),F("Provided from ",e.product.name,":"),l(2),x(e.attributes)}}function Yt(t,i){if(t&1&&(r(0,"div",33)(1,"span",49),s(2,"Extra Workforce"),a(),r(3,"span",50),s(4),a()()),t&2){let e=c().$implicit;l(4),g(e.workforceModifierInPercent)}}function Jt(t,i){if(t&1&&(r(0,"div",54),C(1,"span",44),r(2,"div"),s(3),a()()),t&2){let e=i.$implicit;l(),O("mask-image","url("+e.icon_url+")")("-webkit-mask-image","url("+e.icon_url+")"),S("aria-label","Workforce Icon"),l(2),g(e.name)}}function en(t,i){if(t&1&&(r(0,"div",51)(1,"div",52),s(2," Provides Additional Workforces: "),a(),r(3,"div",53),b(4,Jt,4,6,"div",54,z),a()()),t&2){let e=c().$implicit;O("border-top","1px solid var(--border-subtle-five)"),l(4),x(e.additionalWorkforces)}}function tn(t,i){if(t&1&&(r(0,"div",35)(1,"div",55),s(2," Workforce Replacement: "),a(),r(3,"div",56)(4,"span",57),s(5),a(),r(6,"span",58),s(7,"\u2794"),a(),r(8,"span",59),s(9),a()()()),t&2){let e=c().$implicit;l(5),g(e.workforceReplacement.old_workforce_title),l(4),g(e.workforceReplacement.new_workforce_title)}}function nn(t,i){if(t&1){let e=P();r(0,"div",36)(1,"div",60),s(2," ADDS RESOURCE FERTILITY: "),a(),r(3,"div",61)(4,"div",62)(5,"img",63),u("error",function(o){w(e);let d=c(2);return M(d.onImageError(o))}),a(),r(6,"span",64),s(7),a()(),r(8,"span",50),s(9),a()()()}if(t&2){let n=c().$implicit.addedFertility;l(5),m("src",n.icon_url,R),l(2),g(n.name),l(2),F("+",n.percent,"%")}}function an(t,i){if(t&1&&(r(0,"div",28),b(1,Wt,2,1,null,null,z),a(),r(3,"div",29)(4,"div",30),b(5,Gt,7,3,"div",31,ht),a(),b(7,Xt,8,2,"div",30,Ht),a(),r(9,"div",32),_(10,Yt,5,1,"div",33),_(11,en,6,2,"div",34),_(12,tn,10,2,"div",35),_(13,nn,10,3,"div",36),a()),t&2){let e=i.$implicit;l(),x(e.targets),l(4),x(e.generalAttributes),l(2),x(e.productNeedGroups),l(3),h(e.workforceModifierInPercent?10:-1),l(),h((e==null||e.additionalWorkforces==null?null:e.additionalWorkforces.length)>0?11:-1),l(),h(e.workforceReplacement?12:-1),l(),h(e.addedFertility?13:-1)}}var ne=class t{specialist=Le.required();keyLabels={health:"Health",fire_safety:"Fire Safety",population:"Population",money:"Money",happiness:"Happiness",belief:"Belief",knowledge:"Knowledge",prestige:"Prestige",maintenance_factor:"Maintenance Cost",workforce_maintenance_factor:"Workforce Required",productivity_upgrade:"Productivity",buff_base_speed_upgrade:"Navigation Speed",loading_speed_upgrade:"Cargo Loading Speed"};keyIcons={population:"assets/icons/base/icon_content/attributes/icon_population_0.webp",money:"assets/icons/base/icon_content/attributes/icon_income_0.webp",happiness:"assets/icons/base/icon_content/attributes/icon_happiness_0.webp",health:"assets/icons/base/icon_content/attributes/icon_health_0.webp",fire_safety:"assets/icons/base/icon_content/attributes/icon_fire_safety_0.webp",belief:"assets/icons/base/icon_content/attributes/icon_religion_belief_0.webp",knowledge:"assets/icons/base/icon_content/attributes/icon_techtree_knowledge_0.webp",prestige:"assets/icons/base/icon_content/attributes/icon_prestige_0.webp"};rarityClass=H(()=>{let i=this.specialist()?.rarity;return i?`rarity-${i.toLowerCase()}`:"rarity-common"});socketMaskUrl=H(()=>`url(assets/icons/${this.specialist()?.allocation?.toLowerCase()==="ship"?"item_ship_socket.webp":"item_villa_socket.webp"})`);groupedBuffs=H(()=>{let i=this.specialist();return i.effect?i.effect.buffs.map(e=>this.mapToGroupedBuff(e,i.effect.targets)):[]});boostDetails=H(()=>{let i=this.specialist();return!i.has_boost||!i.boost_details?null:be(fe({},i.boost_details),{buffs:i.boost_details.buffs.map(e=>this.mapToGroupedBuff(e,i.effect?.targets||[]))})});mapToGroupedBuff(i,e){let n=[],o=new Map;return i.attributes.forEach(d=>{!d.product_needs||d.product_needs.length===0?n.push(d):d.product_needs.forEach(f=>{o.has(f.guid)||o.set(f.guid,{product:f,attributes:[]});let T=o.get(f.guid);T&&!T.attributes.includes(d)&&T.attributes.push(d)})}),{guid:i.guid,generalAttributes:n,productNeedGroups:Array.from(o.values()),additionalWorkforces:i.additional_workforces||[],addedFertility:i.added_fertility,workforceReplacement:i.workforce_replacement,workforceModifierInPercent:i.workforce_modifier_in_percent,targets:e.filter(d=>(i.target_guids||[]).includes(d.guid))}}getLabel(i){return this.keyLabels[i]||i.replace(/_/g," ")}onImageError(i){let e=i.target;e.src="assets/icons/placeholder_asset.webp"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["anno-117-specialist-card"]],hostAttrs:[2,"display","block","width","100%"],inputs:{specialist:[1,"specialist"]},decls:22,vars:13,consts:[["buffContent",""],["role","region",1,"roman-card-container","p-6","flex","flex-col","h-full","specialist-card"],[1,"roman-border-frame"],[1,"relative","z-10","mb-6"],[1,"flex","items-center","gap-4","mb-4"],[1,"w-20","h-20","shrink-0"],[1,"relative",3,"error","src","alt"],[1,"avatar-frame"],[1,"text-[10px]","uppercase","tracking-widest","font-semibold","mb-0.5","spec-meta-tag"],[1,"font-roman","text-md","sm:text-lg","font-bold","leading-tight","tracking-wide","spec-title"],[1,"italic","text-xs","mt-4","pl-4","py-1","spec-quote"],[1,"relative","z-10","buff-content-wrapper","gap-4"],[1,"roman-card-box","p-4","rounded-md"],[1,"flex","items-center","justify-between","pb-2","mb-3","spec-section-header"],[1,"font-roman","text-xs","uppercase","tracking-widest","font-bold","text-(--text-sub-label)"],[1,"badge-radius"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"specialist-divider"],[1,"roman-card-box","p-4","rounded-md","border-dashed","border-(--gold-val)/40"],[1,"flex","flex-col","gap-1","mb-4"],[1,"mb-3","border-b","border-(--border-subtle)","pb-2"],[1,"text-xs"],[1,"font-bold","uppercase","tracking-wider","text-[10px]","text-(--gold-val)","mr-1"],[1,"text-xs","italic","opacity-80","border-t","border-(--box-border)","pt-2","mt-1"],[1,"space-y-4"],[1,"font-bold","non-italic","uppercase","tracking-wider","text-[10px]","text-(--text-sub-label)","mr-1"],[1,"font-roman","text-xs","uppercase","tracking-widest","font-bold","text-(--gold-val)"],[1,"badge-radius",2,"color","var(--gold-val)","border-color","var(--gold-val)"],[1,"flex","flex-wrap","gap-2","mb-3"],[1,"space-y-3"],[1,"space-y-1.5"],[1,"attribute-row","flex","items-center","justify-between","text-xs","py-1.5","px-3","rounded"],[1,"pt-3","space-y-2"],[1,"modifier-panel","p-2","rounded","flex","justify-between","items-center"],[1,"mt-2","pt-3",3,"border-top"],[1,"replacement-panel","p-2","rounded","text-xs"],[1,"fertility-panel","rounded","p-3"],[1,"custom-roman-panel"],[1,"font-bold"],[1,"chip","flex","items-center","gap-1.5","px-2","py-1","rounded","text-xs"],["alt","",1,"w-5","h-5","rounded-sm",3,"error","src"],[1,"flex","items-center","gap-1.5","capitalize","attribute-label"],["role","img",1,"inline-block","w-4","h-4","icon-brand",3,"mask-image","-webkit-mask-image"],[1,"font-bold","attr-value"],["role","img",1,"inline-block","w-4","h-4","icon-brand"],[1,"product-group-title","flex","items-center","gap-1.5","px-1","text-[10px]","font-roman","uppercase","tracking-wider"],["alt","Need Icon",1,"w-5","h-5","rounded-sm","shrink-0",3,"error","src"],[1,"product-sub-attributes","space-y-1","ml-2","pl-2"],[1,"attribute-row","flex","items-center","justify-between","text-xs","py-1","px-2.5","rounded"],[1,"text-[10px]","uppercase","tracking-wide","panel-title"],[1,"text-sm","font-bold","gold-metric"],[1,"mt-2","pt-3"],[1,"text-[10px]","uppercase","tracking-wider","mb-1.5","panel-title"],[1,"flex","flex-wrap","gap-1"],[1,"chip","flex","items-center","gap-1.5","px-2.5","py-1","rounded","text-xs"],[1,"text-[9px]","uppercase","tracking-wider","mb-1","panel-title"],[1,"flex","items-center","justify-between","gap-2"],[1,"opacity-60"],[1,"font-bold","arrow"],[1,"font-bold","gold-metric"],[1,"text-[9px]","uppercase","tracking-widest","font-bold","mb-2","panel-title"],[1,"flex","items-center","justify-between"],[1,"flex","items-center","gap-2"],["alt","Fertility",1,"w-5","h-5","rounded","shrink-0",3,"error","src"],[1,"text-xs","font-roman","font-bold","spec-title"]],template:function(e,n){if(e&1&&(r(0,"div",1),C(1,"div",2),De(2),r(3,"header",3)(4,"div",4)(5,"div",5)(6,"div")(7,"img",6),u("error",function(d){return n.onImageError(d)}),a(),C(8,"div",7),a()(),r(9,"div")(10,"span",8),s(11),a(),r(12,"h2",9),s(13),a()()(),r(14,"blockquote",10),s(15),a()(),r(16,"div",11),b(17,Rt,7,5,"div",12,z),_(19,Bt,15,4),a()(),L(20,an,14,4,"ng-template",null,0,Ne)),e&2){let o;l(2);let d=Fe(n.specialist());l(4),Ae("specialist-avatar-box "+n.rarityClass()),l(),m("src",d.icon_url,R)("alt",d.title),l(),O("--mask-url",n.socketMaskUrl()),l(3),Ie(" ",d.rarity," \u2022 ",d.niche," \u2022 ",d.allocation," "),l(2),F(" ",d.title," "),l(2),F(' "',d.description,'" '),l(2),x(n.groupedBuffs()),l(2),h((o=n.boostDetails())?19:-1,o)}},dependencies:[bt,ge,gt,ft,xt,ze],styles:[".specialist-card[_ngcontent-%COMP%]{transition:background-color .3s ease,border-color .3s ease,color .3s ease;--card-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--card-border: color-mix(in srgb, var(--primary-color), transparent 20%);--card-frame-border: color-mix(in srgb, var(--primary-color), black 15%);--text-main: var(--background-color);--text-muted: color-mix(in srgb, var(--background-color), var(--secondary-color) 25%);--text-sub-label: color-mix(in srgb, var(--background-color), transparent 10%);--text-highlight: var(--background-accent-color);--text-blockquote: color-mix(in srgb, var(--background-color), transparent 10%);--section-divider: color-mix(in srgb, var(--primary-color), transparent 20%);--border-subtle: color-mix(in srgb, var(--primary-color), transparent 40%);--box-bg: color-mix(in srgb, var(--primary-color), black 50%);--box-border: color-mix(in srgb, var(--background-color), transparent 90%);--gold-val: #ffcc00}.light-mode[_nghost-%COMP%]   .specialist-card[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .specialist-card[_ngcontent-%COMP%]{--card-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--card-border: #d4b89b;--card-frame-border: rgba(140, 29, 64, .2);--text-main: var(--text-color);--text-muted: color-mix(in srgb, var(--text-color), var(--background-color) 30%);--text-sub-label: color-mix(in srgb, var(--primary-color), var(--background-color) 20%);--text-highlight: var(--text-color);--text-blockquote: color-mix(in srgb, var(--primary-color), var(--card-bg) 50%);--section-divider: rgba(140, 29, 64, .2);--border-subtle: rgba(140, 29, 64, .15);--box-bg: color-mix(in srgb, var(--card-bg), black 4%);--box-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 85%);--gold-val: var(--primary-color)}.roman-card-container[_ngcontent-%COMP%]{background-color:var(--card-bg);color:var(--text-main);border-radius:6px;position:relative;overflow:hidden;border:1px solid var(--card-border);height:100%}.roman-card-box[_ngcontent-%COMP%]{background-color:var(--box-bg);border:1px solid var(--box-border);display:flex;flex-direction:column;transition:background-color .3s ease,border-color .3s ease}.roman-border-frame[_ngcontent-%COMP%]{position:absolute;inset:12px;border:1px solid var(--card-frame-border);pointer-events:none;border-radius:4px}.spec-meta-tag[_ngcontent-%COMP%]{color:var(--text-sub-label)}.spec-title[_ngcontent-%COMP%]{color:var(--text-highlight)}.spec-quote[_ngcontent-%COMP%]{color:var(--text-blockquote);border-left:2px solid var(--primary-color);background-color:color-mix(in srgb,var(--primary-color),transparent 96%)}.spec-section-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--border-subtle)}.spec-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--text-sub-label)}.buff-content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.badge-radius[_ngcontent-%COMP%]{background:var(--box-bg);color:var(--text-main);font-size:.65rem;padding:.1rem .5rem;border-radius:2px;border:1px solid var(--border-subtle);text-transform:uppercase;letter-spacing:.05em}.chip[_ngcontent-%COMP%]{background-color:var(--box-bg);border:1px solid var(--box-border);color:var(--text-highlight)}.attribute-row[_ngcontent-%COMP%]{background-color:var(--box-bg);border:1px solid var(--border-subtle);color:var(--text-highlight)}.attribute-row[_ngcontent-%COMP%]   .attribute-label[_ngcontent-%COMP%]{color:var(--text-muted)}.product-group-title[_ngcontent-%COMP%]{color:var(--text-sub-label)}.product-group-title[_ngcontent-%COMP%]   .product-icon[_ngcontent-%COMP%]{border:1px solid var(--box-border)}.product-sub-attributes[_ngcontent-%COMP%]{border-left:1px solid var(--section-divider)}.workforce-modifier-panel[_ngcontent-%COMP%]{background-color:var(--box-bg);border:1px solid var(--box-border)}.workforce-modifier-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:var(--text-muted)}.workforce-replacement-panel[_ngcontent-%COMP%], .fertility-panel[_ngcontent-%COMP%]{background-color:var(--box-bg);border:1px solid var(--box-border)}.workforce-replacement-panel[_ngcontent-%COMP%]   .panel-sub-label[_ngcontent-%COMP%], .fertility-panel[_ngcontent-%COMP%]   .panel-sub-label[_ngcontent-%COMP%], .workforce-replacement-panel[_ngcontent-%COMP%]   .indicator-arrow[_ngcontent-%COMP%], .fertility-panel[_ngcontent-%COMP%]   .indicator-arrow[_ngcontent-%COMP%]{color:var(--text-sub-label)}.workforce-replacement-panel[_ngcontent-%COMP%]   .fertility-icon[_ngcontent-%COMP%], .fertility-panel[_ngcontent-%COMP%]   .fertility-icon[_ngcontent-%COMP%]{border:1px solid var(--border-subtle)}.gold-metric[_ngcontent-%COMP%]{color:var(--gold-val)}.specialist-divider[_ngcontent-%COMP%]{padding-bottom:.75em;margin-top:.75em}  .custom-roman-panel{background:var(--box-bg)!important;border:1px solid var(--box-border)!important}  .custom-roman-panel .mat-expansion-panel-header-title{color:var(--text-highlight)!important}"],changeDetection:0})};var vt=(t,i)=>i.value,rn=(t,i)=>i.id;function on(t,i){if(t&1){let e=P();r(0,"button",38),u("click",function(){w(e);let o=c();return M(o.searchQuery.set(""))}),s(1," \u2715 "),a()}}function ln(t,i){if(t&1){let e=P();r(0,"button",39),u("click",function(){w(e);let o=c();return M(o.targetItemQuery.set(""))}),s(1," \u2715 "),a()}}function sn(t,i){if(t&1&&(r(0,"option",22),s(1),a()),t&2){let e=i.$implicit;m("value",e),l(),g(e)}}function dn(t,i){if(t&1&&(r(0,"option",22),s(1),a()),t&2){let e=i.$implicit;m("value",e),l(),g(e)}}function cn(t,i){if(t&1&&(r(0,"option",22),s(1),a()),t&2){let e=i.$implicit;m("value",e.value),l(),g(e.label)}}function pn(t,i){if(t&1&&(r(0,"option",22),s(1),a()),t&2){let e=i.$implicit;m("value",e),l(),g(e)}}function mn(t,i){if(t&1&&(r(0,"option",22),s(1),a()),t&2){let e=i.$implicit;m("value",e.value),l(),g(e.label)}}function un(t,i){t&1&&(r(0,"div",34),C(1,"div",40),r(2,"span",41),s(3," Sifting Classical Records... "),a()())}function gn(t,i){if(t&1){let e=P();r(0,"div",35)(1,"h3",42),s(2,"Registry Inaccessible"),a(),r(3,"p",43),s(4),a(),r(5,"button",44),u("click",function(){w(e);let o=c();return M(o.loadData())}),s(6," Retry Invocation "),a()()}if(t&2){let e=c();l(4),g(e.service.error())}}function fn(t,i){if(t&1){let e=P();r(0,"div",36)(1,"h3",45),s(2," No Archives Match Search "),a(),r(3,"p",46),s(4," No specialists were found matching these filter definitions. Try clearing active inputs. "),a(),r(5,"button",44),u("click",function(){w(e);let o=c();return M(o.resetFilters())}),s(6," Clear Active Parameters "),a()()}}function bn(t,i){if(t&1&&C(0,"anno-117-specialist-card",47),t&2){let e=i.$implicit;m("specialist",e)}}function xn(t,i){if(t&1&&(r(0,"div",37),b(1,bn,1,1,"anno-117-specialist-card",47,rn),a()),t&2){let e=c();l(),x(e.filteredSpecialists())}}var yt=class t{service=p(lt);searchQuery=k("");targetItemQuery=k("");selectedAllocation=k("");selectedRarity=k("");selectedAttribute=k("");selectedNiche=k("");selectedUpgrade=k("");attributeFilters=[{value:"population",label:"Population"},{value:"money",label:"Money & Maintenance"},{value:"happiness",label:"Happiness"},{value:"health",label:"Health"},{value:"fire_safety",label:"Fire Safety"},{value:"belief",label:"Belief"},{value:"knowledge",label:"Knowledge"},{value:"prestige",label:"Prestige"}];nichesList=Object.values(ot);raritiesList=Object.values(rt);allocationList=Object.values(at);upgradeFilters=[{value:"fertility",label:"Fertility Seeders"},{value:"workforce",label:"Workforce Upgrades"}];ngOnInit(){this.loadData()}loadData(){this.service.fetchSpecialists()}filteredSpecialists=H(()=>{let i=this.service.hydratedSpecialists(),e=this.searchQuery().trim().toLowerCase(),n=this.targetItemQuery().trim().toLowerCase(),o=this.selectedAllocation(),d=this.selectedRarity(),f=this.selectedNiche(),T=this.selectedAttribute(),ie=this.selectedUpgrade();return e&&(i=i.filter(v=>(v.title||"").toLowerCase().includes(e))),n&&(i=i.filter(v=>v.effect.targets.some(y=>y.affected_items.some(ae=>(ae.name||"").toLowerCase().includes(n))))),o&&(i=i.filter(v=>v.allocation.toLowerCase()===o.toLowerCase())),d&&(i=i.filter(v=>v.rarity.toLowerCase()===d.toLowerCase())),f&&(i=i.filter(v=>v.niche.toLowerCase()===f.toLowerCase())),T&&(i=i.filter(v=>v.effect.buffs.some(y=>y.attributes.some(ae=>{let I=ae.key.toLowerCase();return T==="money"?I.includes("money")||I.includes("maintenance_factor")||I.includes("upkeep")||I.includes("price"):T==="health"?I.includes("health")||I.includes("heal"):I.includes(T.toLowerCase())})))),ie&&(i=i.filter(v=>v.effect.buffs.some(y=>ie==="fertility"?y.added_fertility!==null:ie==="workforce"?y.workforce_replacement!==null||y.workforce_modifier_in_percent!==null&&y.workforce_modifier_in_percent!=="0"&&y.workforce_modifier_in_percent!=="0%"||y.additional_workforces&&y.additional_workforces.length>0:!1))),i});resetFilters(){this.searchQuery.set(""),this.targetItemQuery.set(""),this.selectedAllocation.set(""),this.selectedRarity.set(""),this.selectedAttribute.set(""),this.selectedNiche.set(""),this.selectedUpgrade.set("")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["anno-specialists-page"]],decls:74,vars:10,consts:[[1,"specialists-workspace","min-h-screen","pb-24"],[1,"relative","pt-16","pb-4","text-center"],[1,"absolute","inset-0","pattern-overlay","opacity-5"],[1,"text-center","z-10","px-4"],[1,"page-main-title","select-none"],[1,"page-main-subtitle","mx-auto"],[1,"w-full","max-w-400","mx-auto","flex","flex-col","lg:flex-row","items-start","gap-8","px-6","mt-4"],[1,"w-full","lg:w-80","shrink-0","specialist-filter-panel","p-6","rounded","border","relative"],[1,"roman-filter-inner","relative","z-10","space-y-6"],[1,"filter-panel-header"],[1,"header-title"],[1,"space-y-2"],["for","title-search-input",1,"filter-label","text-[10px]","uppercase","tracking-widest","font-bold","font-roman","block"],[1,"relative","flex","items-center"],["id","title-search-input","type","text","placeholder","Enter specialist name...",1,"roman-input-field","w-full","px-3","py-2","text-sm","rounded","border","focus:outline-none","focus:ring-1",3,"ngModelChange","ngModel"],["type","button","aria-label","Clear Search Input",1,"absolute","right-3","text-xs","opacity-40","hover:opacity-100","transition-opacity"],["for","target-item-input",1,"filter-label","text-[10px]","uppercase","tracking-widest","font-bold","font-roman","block"],["id","target-item-input","type","text","placeholder","Enter building or item name...",1,"roman-input-field","w-full","px-3","py-2","text-sm","rounded","border","focus:outline-none","focus:ring-1",3,"ngModelChange","ngModel"],["type","button","aria-label","Clear Item Search Input",1,"absolute","right-3","text-xs","opacity-40","hover:opacity-100","transition-opacity"],["for","allocation-select",1,"filter-label","text-[10px]","uppercase","tracking-widest","font-bold","font-roman","block"],["id","allocation-select",1,"roman-select-field","w-full","px-3","py-2","text-sm","rounded","border","focus:outline-none","focus:ring-1","cursor-pointer",3,"ngModelChange","ngModel"],["value",""],[3,"value"],["for","rarity-select",1,"filter-label","text-[10px]","uppercase","tracking-widest","font-bold","font-roman","block"],["id","rarity-select",1,"roman-select-field","w-full","px-3","py-2","text-sm","rounded","border","focus:outline-none","focus:ring-1","cursor-pointer",3,"ngModelChange","ngModel"],["for","attribute-select",1,"filter-label","text-[10px]","uppercase","tracking-widest","font-bold","font-roman","block"],["id","attribute-select",1,"roman-select-field","w-full","px-3","py-2","text-sm","rounded","border","focus:outline-none","focus:ring-1","cursor-pointer",3,"ngModelChange","ngModel"],["for","niche-select",1,"filter-label","text-[10px]","uppercase","tracking-widest","font-bold","font-roman","block"],["id","niche-select",1,"roman-select-field","w-full","px-3","py-2","text-sm","rounded","border","focus:outline-none","focus:ring-1","cursor-pointer",3,"ngModelChange","ngModel"],["for","upgrade-select",1,"filter-label","text-[10px]","uppercase","tracking-widest","font-bold","font-roman","block"],["id","upgrade-select",1,"roman-select-field","w-full","px-3","py-2","text-sm","rounded","border","focus:outline-none","focus:ring-1","cursor-pointer",3,"ngModelChange","ngModel"],[1,"pt-4","border-t"],["type","button",1,"btn-classic","w-full","text-center","py-2.5","rounded","text-xs","uppercase","tracking-wider","font-bold","font-roman","transition","duration-200",3,"click"],[1,"grow","min-w-0","w-full"],[1,"flex","flex-col","items-center","justify-center","py-24","space-y-4"],[1,"error-panel","p-8","text-center","rounded","border","border-red-900/30"],[1,"no-results-panel","text-center","py-20","px-6","rounded","border","border-dashed"],[1,"grid","w-full","gap-6","grid-cols-1","md:grid-cols-2","xl:grid-cols-3","box-border","justify-items-center","items-start"],["type","button","aria-label","Clear Search Input",1,"absolute","right-3","text-xs","opacity-40","hover:opacity-100","transition-opacity",3,"click"],["type","button","aria-label","Clear Item Search Input",1,"absolute","right-3","text-xs","opacity-40","hover:opacity-100","transition-opacity",3,"click"],[1,"roman-loader"],[1,"font-roman","text-(--primary-color)","tracking-widest","text-sm","uppercase"],[1,"text-red-800","font-roman","mb-2"],[1,"text-sm","opacity-80","mb-4"],[1,"btn-classic",3,"click"],[1,"font-roman","text-xl","text-(--primary-color)","mb-2"],[1,"text-sm","opacity-70","mb-4","max-w-md","mx-auto"],[1,"w-full","h-full","flex","flex-col","justify-between",3,"specialist"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1),C(2,"div",2),r(3,"div",3)(4,"h1",4),s(5,"Specialists"),a(),r(6,"p",5),s(7," Filter and inspect legendary administrators, captains, and master architects. Socket their individual modifiers to alter your city's production, unlock raw fertilities, or command the seas. "),a()()(),r(8,"div",6)(9,"aside",7)(10,"div",8)(11,"div",9)(12,"h3",10),s(13,"Filter Items"),a()(),r(14,"div",11)(15,"label",12),s(16," Search by Specialist name "),a(),r(17,"div",13)(18,"input",14),u("ngModelChange",function(d){return n.searchQuery.set(d)}),a(),_(19,on,2,0,"button",15),a()(),r(20,"div",11)(21,"label",16),s(22," Search by Affected Building "),a(),r(23,"div",13)(24,"input",17),u("ngModelChange",function(d){return n.targetItemQuery.set(d)}),a(),_(25,ln,2,0,"button",18),a()(),r(26,"div",11)(27,"label",19),s(28," Allocation "),a(),r(29,"select",20),u("ngModelChange",function(d){return n.selectedAllocation.set(d)}),r(30,"option",21),s(31,"-- All Allocations --"),a(),b(32,sn,2,2,"option",22,q),a()(),r(34,"div",11)(35,"label",23),s(36," Rarity "),a(),r(37,"select",24),u("ngModelChange",function(d){return n.selectedRarity.set(d)}),r(38,"option",21),s(39,"-- All Rarities --"),a(),b(40,dn,2,2,"option",22,q),a()(),r(42,"div",11)(43,"label",25),s(44," Modifier Attributes "),a(),r(45,"select",26),u("ngModelChange",function(d){return n.selectedAttribute.set(d)}),r(46,"option",21),s(47,"-- All Attributes --"),a(),b(48,cn,2,2,"option",22,vt),a()(),r(50,"div",11)(51,"label",27),s(52," Niche Category "),a(),r(53,"select",28),u("ngModelChange",function(d){return n.selectedNiche.set(d)}),r(54,"option",21),s(55,"-- All Categories --"),a(),b(56,pn,2,2,"option",22,q),a()(),r(58,"div",11)(59,"label",29),s(60," Special Upgrades "),a(),r(61,"select",30),u("ngModelChange",function(d){return n.selectedUpgrade.set(d)}),r(62,"option",21),s(63,"-- All Upgrades --"),a(),b(64,mn,2,2,"option",22,vt),a()(),r(66,"div",31)(67,"button",32),u("click",function(){return n.resetFilters()}),s(68," Reset Filters "),a()()()(),r(69,"main",33),_(70,un,4,0,"div",34)(71,gn,7,1,"div",35)(72,fn,7,0,"div",36)(73,xn,3,0,"div",37),a()()()),e&2&&(l(18),m("ngModel",n.searchQuery()),l(),h(n.searchQuery()?19:-1),l(5),m("ngModel",n.targetItemQuery()),l(),h(n.targetItemQuery()?25:-1),l(4),m("ngModel",n.selectedAllocation()),l(3),x(n.allocationList),l(5),m("ngModel",n.selectedRarity()),l(3),x(n.raritiesList),l(5),m("ngModel",n.selectedAttribute()),l(3),x(n.attributeFilters),l(5),m("ngModel",n.selectedNiche()),l(3),x(n.nichesList),l(5),m("ngModel",n.selectedUpgrade()),l(3),x(n.upgradeFilters),l(6),h(n.service.isLoading()?70:n.service.error()?71:n.filteredSpecialists().length===0?72:73))},dependencies:[Be,nt,et,tt,Ze,Je,Xe,Ye,ne],styles:[".specialists-workspace[_ngcontent-%COMP%]{background-color:var(--background-color);transition:background-color .3s ease}.specialist-filter-panel[_ngcontent-%COMP%]{--panel-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--panel-border: color-mix(in srgb, var(--background-color), transparent 85%);--label-color: color-mix(in srgb, var(--background-color), transparent 30%);--divider-color: color-mix(in srgb, var(--background-color), transparent 85%);--field-bg: color-mix(in srgb, var(--primary-color), black 50%);--field-text: var(--background-color);--field-border: color-mix(in srgb, var(--background-color), transparent 80%);--btn-bg: color-mix(in srgb, var(--primary-color), black 60%);--btn-bg-hover: color-mix(in srgb, var(--primary-color), black 70%);--btn-text: var(--background-color);background-color:var(--panel-bg);border-color:var(--panel-border);transition:background-color .3s ease,transform .3s ease,border-color .3s ease}.light-mode[_nghost-%COMP%]   .specialist-filter-panel[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .specialist-filter-panel[_ngcontent-%COMP%]{--panel-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--panel-border: color-mix(in srgb, var(--primary-color), transparent 85%);--label-color: var(--primary-color);--divider-color: color-mix(in srgb, var(--primary-color), transparent 85%);--field-bg: color-mix(in srgb, var(--panel-bg), black 4%);--field-text: var(--text-color);--field-border: color-mix(in srgb, var(--primary-color), transparent 70%);--btn-bg: color-mix(in srgb, var(--panel-bg), black 10%);--btn-bg-hover: color-mix(in srgb, var(--panel-bg), black 20%);--btn-text: var(--text-color)}.specialist-filter-panel[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%]{color:var(--label-color);transition:color .3s ease}.specialist-filter-panel[_ngcontent-%COMP%]   .border-b[_ngcontent-%COMP%], .specialist-filter-panel[_ngcontent-%COMP%]   .border-t[_ngcontent-%COMP%]{border-color:var(--divider-color)!important;transition:border-color .3s ease}.specialist-filter-panel[_ngcontent-%COMP%]   .roman-select-field[_ngcontent-%COMP%], .specialist-filter-panel[_ngcontent-%COMP%]   .roman-input-field[_ngcontent-%COMP%]{background-color:var(--field-bg);color:var(--field-text);border-color:var(--field-border);transition:background-color .3s ease,color .3s ease,border-color .3s ease}.specialist-filter-panel[_ngcontent-%COMP%]   .roman-select-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], .specialist-filter-panel[_ngcontent-%COMP%]   .roman-input-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:var(--field-bg);color:var(--field-text)}.specialist-filter-panel[_ngcontent-%COMP%]   .roman-select-field[_ngcontent-%COMP%]::placeholder, .specialist-filter-panel[_ngcontent-%COMP%]   .roman-input-field[_ngcontent-%COMP%]::placeholder{color:var(--field-text);opacity:.5}.specialist-filter-panel[_ngcontent-%COMP%]   .roman-select-field[_ngcontent-%COMP%]:focus, .specialist-filter-panel[_ngcontent-%COMP%]   .roman-input-field[_ngcontent-%COMP%]:focus{border-color:var(--primary-color);box-shadow:0 0 0 1px var(--primary-color)}.specialist-filter-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--btn-bg);color:var(--btn-text)}.specialist-filter-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--btn-bg-hover)}.filter-panel-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--divider-color, color-mix(in srgb, var(--background-color), transparent 85%));padding-bottom:.75rem;transition:border-color .3s ease}.filter-panel-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{font-family:var(--font-roman);font-size:.875rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin:0;color:var(--field-text);transition:color .3s ease}.roman-loader[_ngcontent-%COMP%]{width:48px;height:48px;border:4px solid var(--primary-color);border-bottom-color:transparent;border-radius:50%;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.error-panel[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--primary-color),transparent 90%);border-color:color-mix(in srgb,var(--primary-color),transparent 70%);color:var(--text-color)}.btn-classic[_ngcontent-%COMP%]{border:none;padding:.5rem 1.5rem;border-radius:2px;font-family:var(--font-primary);font-size:.8rem;text-transform:uppercase;cursor:pointer;letter-spacing:.05em;transition:background-color .2s}"],changeDetection:0})};export{yt as SpecialistsPageComponent};
