import{a as te,c as nt,d as it,e as ot,f as ne,h as at,k as ie}from"./chunk-UT2GJTLJ.js";import"./chunk-RBI3BAAU.js";import{B as fe,a as Ke,b as K,f as pe,h as X,i as he,j as et,k as tt,n as N,o as B,p as ee,t as rt,w as st,x as lt,z as ct}from"./chunk-ISVBBHRV.js";import{f as ue,g as Xe}from"./chunk-XARPCUYG.js";import{g as Ye,h as Z}from"./chunk-CZLORVFP.js";import{h as Ze}from"./chunk-JEGMXTNJ.js";import{$b as A,A as Me,Ab as u,Bb as f,Cb as Ge,D as k,Db as d,Eb as g,F as ke,Fb as M,Ib as O,L as H,Mb as F,Nb as R,Oa as Le,P as we,Pa as T,Ra as m,Rb as ze,Sb as Ve,T as w,Tb as He,U,W as C,Wa as Fe,Xa as Re,Xb as Ue,Y as r,Yb as qe,Za as Ne,_b as c,a as _,ac as E,b as xe,ea as b,eb as h,fa as Ie,fb as $,g as v,i as de,ia as q,ib as Q,ja as Te,jb as J,jc as We,kc as $e,l as Oe,na as D,oc as Qe,p as Ae,pc as Y,qa as W,sa as Se,sb as x,sc as y,tb as Be,u as V,ua as me,ub as je,uc as Je,v as Ee,x as Pe,xb as S,y as I,yb as L,zb as ge}from"./chunk-GJ66JQBE.js";function yt(i,o){}var P=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var be=(()=>{class i extends tt{_elementRef=r(me);_focusTrapFactory=r(lt);_config;_interactivityChecker=r(st);_ngZone=r(Te);_focusMonitor=r(rt);_renderer=r(Ne);_changeDetectorRef=r(Je);_injector=r(b);_platform=r(Ke);_document=r(Ie);_portalOutlet;_focusTrapped=new v;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(P,{optional:!0})||new P,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),l(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",n),l=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Fe(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=K(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=K();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=K()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&ze(N,7),t&2){let a;Ve(a=He())&&(n._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&x("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[Q],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&J(0,yt,0,0,"ng-template",0)},dependencies:[N],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),j=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new v;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ee(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},vt=new C("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=r(b);return()=>te(i)}}),Ct=new C("DialogData"),Dt=new C("DefaultDialogConfig");function xt(i){let o=D(i),e=new q;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var ye=(()=>{class i{_injector=r(b);_defaultOptions=r(Dt,{optional:!0});_parentDialog=r(i,{optional:!0,skipSelf:!0});_overlayContainer=r(it);_idGenerator=r(X);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new v;_afterOpenedAtThisLevel=new v;_ariaHiddenElements=new Map;_scrollStrategy=r(vt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=V(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(H(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new P;t=_(_({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),l=at(this._injector,a),s=new j(l,t),p=this._attachContainer(l,s,t);if(s.containerInstance=p,!this.openDialogs.length){let ce=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(k(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(ce)}):this._hideNonDialogContentFromAssistiveTechnology(ce)}return this._attachDialogContent(e,s,p,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){_e(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){_e(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),_e(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new nt({positionStrategy:e.positionStrategy||ne().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let a=n.injector||n.viewContainerRef?.injector,l=[{provide:P,useValue:n},{provide:j,useValue:t},{provide:ot,useValue:e}],s;n.container?typeof n.container=="function"?s=n.container:(s=n.container.type,l.push(...n.container.providers(n))):s=be;let p=new he(s,n.viewContainerRef,b.create({parent:a||this._injector,providers:l}));return e.attach(p).instance}_attachDialogContent(e,t,n,a){if(e instanceof Re){let l=this._createInjector(a,t,n,void 0),s={$implicit:a.data,dialogRef:t};a.templateContext&&(s=_(_({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),n.attachTemplatePortal(new et(e,null,s,l))}else{let l=this._createInjector(a,t,n,this._injector),s=n.attachComponentPortal(new he(e,a.viewContainerRef,l));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,n,a){let l=e.injector||e.viewContainerRef?.injector,s=[{provide:Ct,useValue:e.data},{provide:j,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,n)):s.push(...e.providers)),e.direction&&(!l||!l.get(ue,null,{optional:!0}))&&s.push({provide:ue,useValue:xt(e.direction)}),b.create({parent:l||a,providers:s})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute("aria-hidden",a):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let a=t[n];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _e(i,o){let e=i.length;for(;e--;)o(i[e])}var mt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$({type:i});static \u0275inj=U({providers:[ye],imports:[ie,B,ct,B]})}return i})();function Ot(i,o){}var ae=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},ve="mdc-dialog--open",gt="mdc-dialog--opening",pt="mdc-dialog--closing",At=150,Et=75,Pt=(()=>{class i extends be{_animationStateChanged=new q;_animationsEnabled=!fe();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ht(this._config.enterAnimationDuration)??At:0;_exitAnimationDuration=this._animationsEnabled?ht(this._config.exitAnimationDuration)??Et:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ut,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(gt,ve)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ve),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ve),this._animationsEnabled?(this._hostElement.style.setProperty(ut,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(pt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(gt,pt)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Se(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(O("id",n._config.id),x("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),qe("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[Q],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(u(0,"div",0)(1,"div",1),J(2,Ot,0,0,"ng-template",2),f()())},dependencies:[N],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),ut="--mat-dialog-transition-duration";function ht(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?pe(i.substring(0,i.length-2)):i.endsWith("s")?pe(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var oe=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(oe||{}),z=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new de(1);_beforeClosed=new de(1);_result;_closeFallbackTimeout;_state=oe.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(I(n=>n.state==="opened"),k(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(I(n=>n.state==="closed"),k(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Pe(this.backdropClick(),this.keydownEvents().pipe(I(n=>n.keyCode===27&&!this.disableClose&&!ee(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Mt(this,n.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(I(t=>t.state==="closing"),k(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=oe.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=oe.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Mt(i,o,e){return i._closeInteractionType=o,i.close(e)}var Ce=new C("MatMdcDialogData"),kt=new C("mat-mdc-dialog-default-options"),wt=new C("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(b);return()=>te(i)}}),De=(()=>{class i{_defaultOptions=r(kt,{optional:!0});_scrollStrategy=r(wt);_parentDialog=r(i,{optional:!0,skipSelf:!0});_idGenerator=r(X);_injector=r(b);_dialog=r(ye);_animationsDisabled=fe();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new v;_afterOpenedAtThisLevel=new v;dialogConfigClass=ae;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=V(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(H(void 0)));constructor(){this._dialogRefConstructor=z,this._dialogContainerType=Pt,this._dialogDataToken=Ce}open(e,t){let n;t=_(_({},this._defaultOptions||new ae),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,xe(_({},t),{positionStrategy:ne(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:P,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(l,s,p)=>(n=new this._dialogRefConstructor(l,t,p),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$({type:i});static \u0275inj=U({providers:[De],imports:[mt,ie,B,Xe]})}return i})();var It=(i,o)=>o.subCategoryGuid;function Tt(i,o){if(i&1&&(d(0,"div",6)(1,"div",7),M(2,"img",8),d(3,"div",9)(4,"span",10),c(5,"Menu Category"),g(),d(6,"strong",11),c(7),g()()(),d(8,"div",12),c(9,"\u2794"),g(),d(10,"div",7),M(11,"img",8),d(12,"div",9)(13,"span",10),c(14,"Sub-Category Group"),g(),d(15,"strong",11),c(16),g()()()()),i&2){let e=o.$implicit,t=R();m(2),O("src",e.topLevelIcon||t.data.placeholderImage,T),m(5),A(e.topLevelName),m(4),O("src",e.subCategoryIcon||t.data.placeholderImage,T),m(5),A(e.subCategoryName)}}var re=class i{dialogRef=r(z);data=r(Ce);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["anno-ornament-placements-dialog"]],decls:12,vars:2,consts:[["role","dialog",1,"anno-dialog-container"],[1,"anno-dialog-header"],["aria-label","Close dialog",1,"anno-close-btn",3,"click"],[1,"anno-dialog-body"],[1,"anno-dialog-intro"],[1,"placements-list"],[1,"placement-row"],[1,"category-block"],["alt","",1,"menu-icon",3,"src"],[1,"meta"],[1,"type-label"],[1,"name-val"],["aria-hidden","true",1,"hierarchy-arrow"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"header",1)(2,"h3"),c(3),g(),d(4,"button",2),F("click",function(){return t.dialogRef.close()}),c(5," \u2715 "),g()(),d(6,"div",3)(7,"p",4),c(8," This decorative asset appears across the following construction menus: "),g(),d(9,"div",5),S(10,Tt,17,4,"div",6,It),g()()()),e&2&&(x("aria-label",t.data.title+" Menu Placements"),m(3),E("",t.data.title," \u2014 Menu Placements"),m(7),L(t.data.placements))},styles:[".placements-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;max-height:350px;overflow-y:auto}.placement-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background-color:#ffffff08;border:1px solid color-mix(in srgb,var(--secondary-color),transparent 85%);padding:10px;border-radius:6px}.placement-row[_ngcontent-%COMP%]   .hierarchy-arrow[_ngcontent-%COMP%]{color:var(--secondary-color);font-weight:700;padding:0 8px}.category-block[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex:1}.category-block[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{width:36px;height:36px;background-color:#2a2a2a;border-radius:4px;border:1px solid rgba(255,255,255,.1);object-fit:contain}.category-block[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:left}.category-block[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .type-label[_ngcontent-%COMP%]{font-size:.6em;text-transform:uppercase;color:var(--secondary-color);letter-spacing:.5px}.category-block[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .name-val[_ngcontent-%COMP%]{font-size:.85em;color:var(--text-color)}@keyframes _ngcontent-%COMP%_scaleUp{0%{transform:scale(.96);opacity:0}to{transform:scale(1);opacity:1}}"],changeDetection:0})};var se=class i{title=y.required();description=y.required();imageUrl=y.required();placeholderImage=y.required();prestige=y.required();cost=y.required();origin=y.required();placements=y.required();dialog=r(De);hasError=D(!1);resolvedImage=Y(()=>this.hasError()?this.placeholderImage():this.imageUrl());constructor(){W(()=>{this.imageUrl(),Qe(()=>this.hasError.set(!1))})}handleImgError(){this.hasError()||this.hasError.set(!0)}openDialog(){this.dialog.open(re,{data:{title:this.title(),placements:this.placements(),placeholderImage:this.placeholderImage()},panelClass:"roman-dialog-panel",backdropClass:"roman-dialog-backdrop",autoFocus:"first-tabbable"})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["anno-ornament-card"]],hostAttrs:[2,"display","block","width","100%"],inputs:{title:[1,"title"],description:[1,"description"],imageUrl:[1,"imageUrl"],placeholderImage:[1,"placeholderImage"],prestige:[1,"prestige"],cost:[1,"cost"],origin:[1,"origin"],placements:[1,"placements"]},decls:31,vars:15,consts:[[1,"generic-card","ornament-card"],[1,"card-body-row"],[1,"card-image"],[3,"error","src","alt"],[1,"card-content"],[3,"innerHTML"],[1,"card-footer","main-stats"],[1,"footer-col"],[1,"label"],[1,"value"],["role","img",1,"inline-block","w-4","h-4","icon-brand"],["src","assets/icons/main/attributes/icon_income_0.webp","alt","prestige icon",1,"w-4","h-4"],[1,"card-footer","sub-meta"],[1,"origin-tag"],[1,"origin-value"],["title","View Construction Menu Placements",1,"placement-btn",3,"click"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"header")(2,"h3"),c(3),g()(),d(4,"div",1)(5,"div",2)(6,"img",3),F("error",function(){return t.handleImgError()}),g()(),d(7,"div",4),M(8,"p",5),g()(),d(9,"footer",6)(10,"div",7)(11,"span",8),c(12,"Prestige"),g(),d(13,"span",9),M(14,"span",10),c(15),g()(),d(16,"div",7)(17,"span",8),c(18,"Cost"),g(),d(19,"span",9),M(20,"img",11),c(21),We(22,"number"),g()()(),d(23,"footer",12)(24,"div",13)(25,"span",8),c(26,"Source:"),g(),d(27,"span",14),c(28),g()(),d(29,"button",15),F("click",function(){return t.openDialog()}),c(30),g()()()),e&2&&(m(3),A(t.title()),m(3),O("src",t.resolvedImage(),T)("alt",t.title()),m(2),O("innerHTML",t.description(),Le),m(6),Ue("mask-image","url(assets/icons/main/attributes/icon_prestige_0.webp)")("-webkit-mask-image","url(assets/icons/main/attributes/icon_prestige_0.webp)"),x("aria-label","Prestige Icon"),m(),E(" ",t.prestige()," "),m(6),E(" ",t.cost()>0?$e(22,13,t.cost()):"Free"," "),m(7),A(t.origin()),m(2),E(" \u{1038E} Placements (",t.placements().length,") "))},dependencies:[Z,ft,Ye],styles:[".ornament-card[_ngcontent-%COMP%]{--meta-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--meta-border: color-mix(in srgb, var(--background-color), transparent 90%);--meta-label: color-mix(in srgb, var(--background-color), transparent 30%);--meta-value: var(--background-accent-color);--btn-bg: color-mix(in srgb, var(--primary-color), black 10%);--btn-text: var(--background-accent-color);--btn-border: color-mix(in srgb, var(--background-accent-color), transparent 50%);--btn-hover-bg: var(--background-accent-color);--btn-hover-text: var(--secondary-color)}.light-mode[_nghost-%COMP%]   .ornament-card[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .ornament-card[_ngcontent-%COMP%]{--meta-bg: color-mix(in srgb, var(--background-accent-color), transparent 40%);--meta-border: color-mix(in srgb, var(--secondary-color), transparent 80%);--meta-label: color-mix(in srgb, var(--text-color), transparent 20%);--meta-value: var(--text-color);--btn-bg: color-mix(in srgb, var(--primary-color), transparent 90%);--btn-text: var(--primary-color);--btn-border: color-mix(in srgb, var(--primary-color), transparent 50%);--btn-hover-bg: var(--primary-color);--btn-hover-text: #ffffff}.ornament-card[_ngcontent-%COMP%]   .sub-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.6em .8em;background-color:var(--meta-bg);border-top:1px solid var(--meta-border);font-size:.75em;transition:background-color .3s ease,border-color .3s ease}.ornament-card[_ngcontent-%COMP%]   .sub-meta[_ngcontent-%COMP%]   .origin-tag[_ngcontent-%COMP%]{display:flex;gap:4px}.ornament-card[_ngcontent-%COMP%]   .sub-meta[_ngcontent-%COMP%]   .origin-tag[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:var(--meta-label);font-weight:600;transition:color .3s ease}.ornament-card[_ngcontent-%COMP%]   .sub-meta[_ngcontent-%COMP%]   .origin-tag[_ngcontent-%COMP%]   .origin-value[_ngcontent-%COMP%]{color:var(--meta-value);font-weight:500;transition:color .3s ease}.ornament-card[_ngcontent-%COMP%]   .sub-meta[_ngcontent-%COMP%]   .placement-btn[_ngcontent-%COMP%]{background-color:var(--btn-bg);color:var(--btn-text);border:1px solid var(--btn-border);padding:3px 8px;border-radius:4px;font-weight:600;cursor:pointer;transition:background-color .2s ease,color .2s ease,border-color .2s ease,transform .1s ease}.ornament-card[_ngcontent-%COMP%]   .sub-meta[_ngcontent-%COMP%]   .placement-btn[_ngcontent-%COMP%]:hover{background-color:var(--btn-hover-bg);color:var(--btn-hover-text);border-color:transparent}.ornament-card[_ngcontent-%COMP%]   .sub-meta[_ngcontent-%COMP%]   .placement-btn[_ngcontent-%COMP%]:active{transform:scale(.97)}"],changeDetection:0})};var le=class i{http=r(Ze);placeholderImage="assets/icons/base/icon_content/ornaments/icon_3d_ground_romanpavement_0.webp";_buildings=D([]);_loading=D(!1);_error=D(null);buildings=this._buildings.asReadonly();isLoading=this._loading.asReadonly();error=this._error.asReadonly();fetchOrnaments(o="en"){return this._loading.set(!0),this._error.set(null),Ee({ornaments:this.http.get(`assets/data/ornaments_${o}.json`),categories:this.http.get(`assets/data/categories_ornaments_${o}.json`)}).pipe(Ae(({ornaments:e,categories:t})=>this.mapToViewModel(e,t)),we(e=>{this._buildings.set(e)}),Me(e=>(this._error.set("Failed to load ornamental buildings database."),console.error("Fetching Ornamental Data Error: ",e),Oe([]))),ke(()=>this._loading.set(!1))).subscribe()}mapToViewModel(o,e){return Object.entries(o).map(([t,n])=>{let a=n.construction_groups.map(l=>{let s=e[l.top_level_guid],p=e[l.construction_group_guid];return{topLevelGuid:l.top_level_guid,topLevelName:s?.localized_name||"General",topLevelIcon:s?.icon_url||"",subCategoryGuid:l.construction_group_guid,subCategoryName:p?.localized_name||"Miscellaneous",subCategoryIcon:p?.icon_url||""}});return{id:t,slug:this.slugify(n.title),name:n.title,description:n.description,image_url:n.icon_url||this.placeholderImage,prestige:n.prestige,cost:n.cost,origin:n.origin||"Base Game",placements:a}})}slugify(o){return o.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}static \u0275fac=function(e){return new(e||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};var St=(i,o)=>o.slug,Lt=(i,o)=>o.id;function Ft(i,o){i&1&&(u(0,"div",5)(1,"p"),c(2,"Loading ornamental records..."),f()())}function Rt(i,o){if(i&1&&Ge(0,"anno-ornament-card",11),i&2){let e=o.$implicit,t=R(3);ge("title",e.name)("description",e.description)("imageUrl",e.image_url)("placeholderImage",t.ornamentalService.placeholderImage)("prestige",e.prestige)("cost",e.cost)("origin",e.origin)("placements",e.placements)}}function Nt(i,o){if(i&1&&(u(0,"div",6)(1,"div",7)(2,"h3",8),c(3),f(),u(4,"span",9),c(5," Total Ornaments: "),u(6,"strong"),c(7),f()()(),u(8,"div",10),S(9,Rt,1,8,"anno-ornament-card",11,Lt),f()()),i&2){let e=o.$implicit;ge("id","origin-"+e.slug),m(3),E(" ",e.title," "),m(4),A(e.items.length),m(2),L(e.items)}}function Bt(i,o){if(i&1&&S(0,Nt,11,3,"div",6,St),i&2){let e=R();L(e.groupedBuildings())}}var bt=class i{ornamentalService=r(le);buildings=this.ornamentalService.buildings;isLoading=this.ornamentalService.isLoading;constructor(){W(()=>{this.ornamentalService.fetchOrnaments()})}groupedBuildings=Y(()=>{let o=this.buildings(),e=new Map;return o.forEach(t=>{let n=t.origin;e.has(n)||e.set(n,[]);let a=e.get(n);a&&a.push(t)}),Array.from(e.entries()).map(([t,n])=>({title:t,slug:this.slugify(t),items:n}))});slugify(o){return o.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["anno-ornaments-page"]],decls:9,vars:1,consts:[[1,"w-full","flex","flex-col","items-center","py-8"],[1,"text-3xl","page-main-title"],[1,"page-main-subtitle"],[1,"w-full","max-w-400","flex","flex-row","items-start","px-6"],[1,"grow","min-w-0"],[1,"text-center","py-20"],[1,"w-full","mb-16",3,"id"],[1,"flex","flex-col","md:flex-row","md:items-end","justify-between","page-main-section-header"],[1,"section-title","text-lg","font-bold"],[1,"section-subtitle","text-sm","italic"],[1,"grid","w-full","gap-6","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","2xl:grid-cols-4","box-border","justify-items-center"],[3,"title","description","imageUrl","placeholderImage","prestige","cost","origin","placements"]],template:function(e,t){e&1&&(u(0,"section",0)(1,"h2",1),c(2,"Ornaments"),f(),u(3,"p",2),c(4," Explore the collection of decorative buildings to enhance your city's prestige and aesthetic appeal. "),f(),u(5,"div",3)(6,"div",4),Be(7,Ft,3,0,"div",5)(8,Bt,2,0),f()()()),e&2&&(m(7),je(t.isLoading()?7:8))},dependencies:[Z,se],encapsulation:2})};export{bt as OrnamentsPageComponent};
