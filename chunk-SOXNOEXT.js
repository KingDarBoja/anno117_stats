import{a as ut,c as _t}from"./chunk-CFLBQXH5.js";import{a as Pt,b as Se}from"./chunk-5GVXADDZ.js";import"./chunk-D4WUF3QD.js";import{a as It}from"./chunk-XQQZCUUF.js";import{d as ft,e as vt}from"./chunk-D7C76XVE.js";import{F as ge,H as Mt,a as Pe,k as yt,m as xt,p as Ct,q as De,s as kt,x as Tt,z as wt}from"./chunk-T5NXEJ7H.js";import{e as gt,f as Ie,g as ht}from"./chunk-PN2LBJVD.js";import{e as dt,f as mt,g as bt}from"./chunk-CJ5YNVG4.js";import{h as pt}from"./chunk-EFRQ7R5D.js";import{$ as d,$b as $,A as te,Ab as P,B as qe,Bb as I,Cb as p,D as Ge,Db as o,Dc as E,Eb as l,Ec as _e,F as Je,Fb as u,I as Ue,Lb as Te,Mb as R,N as Ze,O as ne,P as Ke,Q as J,Qb as h,S as Ye,Sa as re,Sb as b,T as ve,Tb as le,Ua as s,Ub as ce,Vb as de,W as Xe,Wb as K,X as et,Xb as f,Yb as v,Z as j,Za as oe,_a as se,a as q,ab as Ce,ac as B,b as G,bc as M,cc as me,d as F,db as at,dc as m,ea as y,ec as D,f as Ve,fa as x,fc as S,h as X,ha as ae,hb as L,hc as st,ib as it,ic as lt,ja as ye,jb as z,jc as Q,kc as Y,la as O,lb as Z,m as $e,ma as U,mb as H,nb as rt,nc as we,o as ee,oc as be,pc as pe,qa as k,qc as Me,s as Qe,ta as xe,ua as tt,ub as ot,uc as A,va as ie,vb as g,wb as T,xa as V,xb as w,xc as ct,ya as nt,z as We,zb as ke,zc as ue}from"./chunk-6OBXNOGG.js";function Dt(a,i){let t=!i?.manualCleanup?i?.injector?.get(ye)??d(ye):null,n=Vt(i?.equal),r;i?.requireSync?r=k({kind:0},{equal:n}):r=k({kind:1,value:i?.initialValue},{equal:n});let c,C=a.subscribe({next:_=>r.set({kind:1,value:_}),error:_=>{r.set({kind:2,error:_}),c?.()},complete:()=>{c?.()}});if(i?.requireSync&&r().kind===0)throw new ve(601,!1);return c=t?.onDestroy(C.unsubscribe.bind(C)),A(()=>{let _=r();switch(_.kind){case 1:return _.value;case 2:throw _.error;case 0:throw new ve(601,!1)}},{equal:i?.equal})}function Vt(a=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&a(i.value,e.value)}var Ae=["*"];function Wt(a,i){a&1&&ce(0)}var qt=["tabListContainer"],Gt=["tabList"],Jt=["tabListInner"],Ut=["nextPaginator"],Zt=["previousPaginator"],Kt=["content"];function Yt(a,i){}var Xt=["tabBodyWrapper"],en=["tabHeader"];function tn(a,i){}function nn(a,i){if(a&1&&H(0,tn,0,0,"ng-template",12),a&2){let e=b().$implicit;p("cdkPortalOutlet",e.templateLabel)}}function an(a,i){if(a&1&&m(0),a&2){let e=b().$implicit;D(e.textLabel)}}function rn(a,i){if(a&1){let e=R();o(0,"div",7,2),h("click",function(){let n=y(e),r=n.$implicit,c=n.$index,C=b(),_=$(1);return x(C._handleClick(r,_,c))})("cdkFocusChange",function(n){let r=y(e).$index,c=b();return x(c._tabFocusChanged(n,r))}),u(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),T(6,nn,1,1,null,12)(7,an,1,1),l()()()}if(a&2){let e=i.$implicit,t=i.$index,n=$(1),r=b();me(e.labelClass),M("mdc-tab--active",r.selectedIndex===t),p("id",r._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",r.fitInkBarToContent),g("tabIndex",r._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",r._tabs.length)("aria-controls",r._getTabContentId(t))("aria-selected",r.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),s(3),p("matRippleTrigger",n)("matRippleDisabled",e.disabled||r.disableRipple),s(3),w(e.templateLabel?6:7)}}function on(a,i){a&1&&ce(0)}function sn(a,i){if(a&1){let e=R();o(0,"mat-tab-body",13),h("_onCentered",function(){y(e);let n=b();return x(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){y(e);let r=b();return x(r._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){y(e);let r=b();return x(r._bodyCentered(n))}),l()}if(a&2){let e=i.$implicit,t=i.$index,n=b();me(e.bodyClass),p("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),g("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var ln=new j("MatTabContent"),cn=(()=>{class a{template=d(se);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,selectors:[["","matTabContent",""]],features:[Y([{provide:ln,useExisting:a}])]})}return a})(),dn=new j("MatTabLabel"),Rt=new j("MAT_TAB"),Ne=(()=>{class a extends Ct{_closestTab=d(Rt,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=ie(a)))(n||a)}})();static \u0275dir=z({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Y([{provide:dn,useExisting:a}]),Z]})}return a})(),Lt=new j("MAT_TAB_GROUP"),Fe=(()=>{class a{_viewContainerRef=d(at);_closestTabGroup=d(Lt,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new X;position=null;origin=null;isActive=!1;constructor(){d(gt).load(It)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new xt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-tab"]],contentQueries:function(t,n,r){if(t&1&&de(r,Ne,5)(r,cn,7,se),t&2){let c;f(c=v())&&(n.templateLabel=c.first),f(c=v())&&(n._explicitContent=c.first)}},viewQuery:function(t,n){if(t&1&&K(se,7),t&2){let r;f(r=v())&&(n._implicitContent=r.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&g("id",null)},inputs:{disabled:[2,"disabled","disabled",E],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Y([{provide:Rt,useExisting:a}]),tt],ngContentSelectors:Ae,decls:1,vars:0,template:function(t,n){t&1&&(le(),rt(0,Wt,1,0,"ng-template"))},encapsulation:2})}return a})(),Ee="mdc-tab-indicator--active",St="mdc-tab-indicator--no-transition",Oe=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(n=>n.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},mn=(()=>{class a{_elementRef=d(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Ee);return}let n=t.getBoundingClientRect(),r=e.width/n.width,c=e.left-n.left;t.classList.add(St),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${r})`),t.getBoundingClientRect(),t.classList.remove(St),t.classList.add(Ee),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Ee)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E]}})}return a})();var Bt=(()=>{class a extends mn{elementRef=d(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ie(a)))(n||a)}})();static \u0275dir=z({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(g("aria-disabled",!!n.disabled),M("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",E]},features:[Z]})}return a})(),Et={passive:!0},bn=650,pn=100,un=(()=>{class a{_elementRef=d(V);_changeDetectorRef=d(ue);_viewportRuler=d(vt);_dir=d(Ie,{optional:!0});_ngZone=d(U);_platform=d(Pe);_sharedResizeObserver=d(Pt);_injector=d(ae);_renderer=d(Ce);_animationsDisabled=ge();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new X;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new X;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Et),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Et))}ngAfterContentInit(){let e=this._dir?this._dir.change:ee("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Je(32),J(this._destroyed)),n=this._viewportRuler.change(150).pipe(J(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Mt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),oe(r,{injector:this._injector}),te(e,n,t,this._items.changes,this._itemsResized()).pipe(J(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c)})}_itemsResized(){return typeof ResizeObserver!="function"?$e:this._items.changes.pipe(ne(this._items),Ke(e=>new Ve(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(r=>t.next(r));return e.forEach(r=>n.observe(r.elementRef.nativeElement)),()=>{n.disconnect()}}))),Ze(1),qe(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!kt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:c}=t.elementRef.nativeElement,C,_;this._getLayoutDirection()=="ltr"?(C=r,_=C+c):(_=this._tabListInner.nativeElement.offsetWidth-r,C=_-c);let N=this.scrollDistance,W=this.scrollDistance+n;C<N?this.scrollDistance-=N-C:_>W&&(this.scrollDistance+=Math.min(_-W,C-N))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),We(bn,pn).pipe(J(te(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:r}=this._scrollHeader(e);(r===0||r>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",E],selectedIndex:[2,"selectedIndex","selectedIndex",_e]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),_n=(()=>{class a extends un{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Oe(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ie(a)))(n||a)}})();static \u0275cmp=L({type:a,selectors:[["mat-tab-header"]],contentQueries:function(t,n,r){if(t&1&&de(r,Bt,4),t&2){let c;f(c=v())&&(n._items=c)}},viewQuery:function(t,n){if(t&1&&K(qt,7)(Gt,7)(Jt,7)(Ut,5)(Zt,5),t&2){let r;f(r=v())&&(n._tabListContainer=r.first),f(r=v())&&(n._tabList=r.first),f(r=v())&&(n._tabListInner=r.first),f(r=v())&&(n._nextPaginator=r.first),f(r=v())&&(n._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&M("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",E]},features:[Z],ngContentSelectors:Ae,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(le(),o(0,"div",5,0),h("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(c){return n._handlePaginatorPress("before",c)})("touchend",function(){return n._stopInterval()}),u(2,"div",6),l(),o(3,"div",7,1),h("keydown",function(c){return n._handleKeydown(c)}),o(5,"div",8,2),h("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),ce(9),l()()(),o(10,"div",10,4),h("mousedown",function(c){return n._handlePaginatorPress("after",c)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),u(12,"div",6),l()),t&2&&(M("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),s(3),M("_mat-animation-noopable",n._animationsDisabled),s(2),g("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),s(5),M("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Se,wt],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),gn=new j("MAT_TABS_CONFIG"),Ot=(()=>{class a extends De{_host=d(Re);_ngZone=d(U);_centeringSub=F.EMPTY;_leavingSub=F.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ne(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,selectors:[["","matTabBodyHost",""]],features:[Z]})}return a})(),Re=(()=>{class a{_elementRef=d(V);_dir=d(Ie,{optional:!0});_ngZone=d(U);_injector=d(ae);_renderer=d(Ce);_diAnimationsDisabled=ge();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=F.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(ue);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),oe(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),oe(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&K(Ot,5)(Kt,5),t&2){let r;f(r=v())&&(n._portalHost=r.first),f(r=v())&&(n._contentElement=r.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&g("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(o(0,"div",1,0),H(2,Yt,0,0,"ng-template",2),l()),t&2&&M("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Ot,ft],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),At=(()=>{class a{_elementRef=d(V);_changeDetectorRef=d(ue);_ngZone=d(U);_tabsSubscription=F.EMPTY;_tabLabelSubscription=F.EMPTY;_tabBodySubscription=F.EMPTY;_diAnimationsDisabled=ge();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new nt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!d(Pe).isBrowser;constructor(){let e=d(gn,{optional:!0});this._groupId=d(yt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,r)=>n.isActive=r===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let r=0;r<t.length;r++)if(t[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,n=t[r];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ne(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Le;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=te(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-tab-group"]],contentQueries:function(t,n,r){if(t&1&&de(r,Fe,5),t&2){let c;f(c=v())&&(n._allTabs=c)}},viewQuery:function(t,n){if(t&1&&K(Xt,5)(en,5)(Re,5),t&2){let r;f(r=v())&&(n._tabBodyWrapper=r.first),f(r=v())&&(n._tabHeader=r.first),f(r=v())&&(n._tabBodies=r)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(g("mat-align-tabs",n.alignTabs),me("mat-"+(n.color||"primary")),B("--mat-tab-animation-duration",n.animationDuration),M("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",E],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",E],selectedIndex:[2,"selectedIndex","selectedIndex",_e],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",_e],disablePagination:[2,"disablePagination","disablePagination",E],disableRipple:[2,"disableRipple","disableRipple",E],preserveContent:[2,"preserveContent","preserveContent",E],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Y([{provide:Lt,useExisting:a}])],ngContentSelectors:Ae,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(le(),o(0,"mat-tab-header",3,0),h("indexFocused",function(c){return n._focusChanged(c)})("selectFocusedIndex",function(c){return n.selectedIndex=c}),P(2,rn,8,17,"div",4,ke),l(),T(4,on,1,0),o(5,"div",5,1),P(7,sn,1,10,"mat-tab-body",6,ke),l()),t&2&&(p("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),ot("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),s(2),I(n._tabs),s(2),w(n._isServer?4:-1),s(),M("_mat-animation-noopable",n._animationsDisabled()),s(2),I(n._tabs))},dependencies:[_n,Bt,Tt,Se,De,Re],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),Le=class{index;tab};var Nt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=it({type:a});static \u0275inj=et({imports:[ht]})}return a})();var vn=(a,i)=>({$implicit:a,patron:i}),yn=(a,i)=>({$implicit:a,index:i}),xn=(a,i)=>i.devotion,Ft=(a,i)=>i.title,ze=(a,i)=>i.key,Cn=(a,i)=>i.guid;function kn(a,i){if(a&1&&u(0,"div",19),a&2){b();let e=Q(0);B("mask-image","url("+e.icon_url+")")("-webkit-mask-image","url("+e.icon_url+")"),g("aria-label",e.title+" Icon")}}function Tn(a,i){if(a&1){let e=R();o(0,"button",32),h("click",function(){let n=y(e).$implicit,r=b(2);return x(r.selectMilestone(n))}),o(1,"span",33),m(2),be(3,"number"),l()()}if(a&2){let e=i.$implicit,t=i.$index,n=b(2),r=Q(0);B("left",t/(r.local_effects[0].milestones.length-1)*100,"%"),M("node-completed",n.selectedDevotion()>=e.devotion)("node-active",n.selectedDevotion()===e.devotion),s(2),S("",pe(3,7,e.devotion)," Devotion")}}function wn(a,i){if(a&1&&Te(0,31),a&2){let e=i.$implicit,t=i.$index;b(2);let n=$(27);p("ngTemplateOutlet",n)("ngTemplateOutletContext",we(2,yn,e,t+1))}}function Mn(a,i){if(a&1){let e=R();o(0,"div",13)(1,"div",20)(2,"div",21)(3,"div",22),u(4,"div",23),l(),o(5,"div",24),P(6,Tn,4,9,"button",25,xn),l()(),o(8,"div",26)(9,"label",27),m(10,"Select Simulated Devotion Level:"),l(),o(11,"div",28)(12,"input",29),h("input",function(n){y(e);let r=b();return x(r.updateSimulatedDevotion(n))}),l(),o(13,"input",30),h("input",function(n){y(e);let r=b();return x(r.updateSimulatedDevotion(n))}),l()()()(),Te(14,31),P(15,wn,1,5,"ng-container",31,Ft),l()}if(a&2){let e=b(),t=$(25),n=Q(0);p("id","local-tab-"+n.uid),s(4),B("width",e.progressPercentage(),"%"),s(2),I(n.local_effects[0].milestones),s(3),p("for","simulated-range-"+n.uid),s(3),p("id","simulated-range-"+n.uid)("min",0)("max",e.maxDevotion())("value",e.selectedDevotion()),s(),p("id","simulated-range-number"+n.uid)("min",0)("max",e.maxDevotion())("value",e.selectedDevotion()),s(),p("ngTemplateOutlet",t)("ngTemplateOutletContext",we(14,vn,n.local_effects[0],n)),s(),I(n.local_effects.slice(1))}}function Pn(a,i){if(a&1&&u(0,"span",50),a&2){let e=i,t=b().$implicit;B("mask-image","url("+e+")")("-webkit-mask-image","url("+e+")"),g("aria-label",t.label+" icon")}}function In(a,i){if(a&1&&(o(0,"span",45)(1,"div",46),T(2,Pn,1,5,"span",47),o(3,"span",48),m(4),l()(),o(5,"span",49),m(6),l()()),a&2){let e,t=i.$implicit,n=b(3);s(2),w((e=n.keyIcons[t.key])?2:-1,e),s(2),D(t.label),s(2),D(t.value)}}function Dn(a,i){if(a&1&&(o(0,"div",41),P(1,In,7,3,"span",45,ze),l()),a&2){let e=i.$implicit;s(),I(e.value)}}function Sn(a,i){if(a&1&&(o(0,"div",44)(1,"span",38),m(2,"Exaltation Reward (7K Global Devotion)"),l(),o(3,"h4",39),m(4),l(),o(5,"p",43),m(6),l()()),a&2){let e=i.$implicit;s(4),D(e.title),s(2),D(e.description)}}function En(a,i){if(a&1&&(o(0,"div",14)(1,"div",34)(2,"div",35),u(3,"img",36),o(4,"div",37)(5,"span",38),m(6,"Shrine (1K Global Devotion)"),l(),o(7,"h4",39),m(8),l()()(),o(9,"div",40),P(10,Dn,3,0,"div",41,ze),be(12,"keyvalue"),l()(),o(13,"div",42)(14,"span",38),m(15,"Veneration Blessing (4K Global Devotion)"),l(),o(16,"h4",39),m(17),l(),o(18,"p",43),m(19),l()(),P(20,Sn,7,2,"div",44,Ft),l()),a&2){b();let e=Q(0);p("id","global-tab-"+e.uid);let t=e.shrine_effect.attributes,n=e.shrine_effect.shrines[0];s(3),p("src",n.icon_url,re)("alt",n.title),s(5),S(" ",n.title," "),s(2),I(pe(12,6,t)),s(7),S(" ",e.veneration_effect.title," "),s(2),S(" ",e.veneration_effect.description," "),s(),I(e.exaltation_effects)}}function On(a,i){if(a&1&&u(0,"img",18),a&2){b();let e=Q(0);p("src",e.portraits.big,re)("alt",e.title+" Big Portrait Artwork")}}function Rn(a,i){if(a&1&&(o(0,"span",61),u(1,"img",62),m(2),l()),a&2){let e=i.$implicit;s(),p("src",e.icon_url,re)("alt",e.name),s(),S(" ",e.text," ")}}function Ln(a,i){if(a&1&&(o(0,"div",59)(1,"span",60),m(2),l(),o(3,"div",41),P(4,Rn,3,3,"span",61,Cn),l()()),a&2){let e=i.$implicit;s(2),D(e.value.text),s(2),I(e.value.production_assets)}}function Bn(a,i){if(a&1&&(o(0,"div",56)(1,"h4",57),m(2,"Affected Production Chains"),l(),o(3,"div",58),P(4,Ln,6,1,"div",59,ze),be(6,"keyvalue"),l()()),a&2){let e=b().$implicit;s(4),I(pe(6,0,e.affected_chains))}}function An(a,i){if(a&1&&(o(0,"div",51)(1,"div",52)(2,"span",53),m(3),l(),o(4,"span",54),m(5),l()(),o(6,"p",55),m(7),l()(),T(8,Bn,7,2,"div",56)),a&2){let e=i.$implicit,t=b();s(3),S("\u2726 ",e.title),s(2),S("+",t.activeLocalValue(),"%"),s(2),D(e.description),s(),w(t.hasChains(e.affected_chains)?8:-1)}}function Nn(a,i){if(a&1&&(o(0,"div",67)(1,"span",68),m(2,"Current Modifier:"),l(),o(3,"span",69),m(4),l()()),a&2){let e=b(2);s(4),S("+",e.activeSecondaryLocalValue())}}function Fn(a,i){if(a&1&&(o(0,"div",63)(1,"div")(2,"span",64),m(3,"Secondary Blessing"),l(),o(4,"h4",65),m(5),l(),o(6,"p",66),m(7),l()(),T(8,Nn,5,1,"div",67),l()),a&2){let e=i.$implicit;s(5),S(" ",e.title," "),s(2),S(" ",e.description," "),s(),w(e.milestones.length>0?8:-1)}}var he=class a{keyIcons={population:"assets/icons/base/icon_content/attributes/icon_population_0.webp",money:"assets/icons/base/icon_content/attributes/icon_income_0.webp",happiness:"assets/icons/base/icon_content/attributes/icon_happiness_0.webp",health:"assets/icons/base/icon_content/attributes/icon_health_0.webp",fire_safety:"assets/icons/base/icon_content/attributes/icon_fire_safety_0.webp",belief:"assets/icons/base/icon_content/attributes/icon_religion_belief_0.webp",knowledge:"assets/icons/base/icon_content/attributes/icon_techtree_knowledge_0.webp",prestige:"assets/icons/base/icon_content/attributes/icon_prestige_0.webp"};patron=ct.required();activeTab=k("local");selectedDevotion=k(2500);isLightMode=k(!1);maxDevotion=A(()=>{let i=this.patron().local_effects[0];return!i||!i.milestones.length?3e5:i.milestones[i.milestones.length-1].devotion});activeLocalValue=A(()=>{let i=this.patron().local_effects[0];if(!i||!i.milestones.length)return 0;let e=this.selectedDevotion(),t=i.milestones,n=0;for(let r of t)if(e>=r.devotion)n=r.buff_scaling;else break;return n});activeSecondaryLocalValue=A(()=>{let i=this.patron().local_effects[1];if(!i||!i.milestones.length)return 0;let e=this.selectedDevotion(),t=i.milestones,n=0;for(let r of t)if(e>=r.devotion)n=r.buff_scaling;else break;return n});currentMilestoneIndex=A(()=>{let i=this.patron().local_effects[0]?.milestones||[],e=this.selectedDevotion(),t=0;for(let n=0;n<i.length&&e>=i[n].devotion;n++)t=n;return t});progressPercentage=A(()=>{let i=this.patron().local_effects[0]?.milestones||[];return i.length?this.currentMilestoneIndex()/(i.length-1)*100:0});hasChains(i){return Object.keys(i).length>0}selectMilestone(i){this.selectedDevotion.set(i.devotion)}updateMilestoneByStep(i){let e=i.target,t=Number(e.value),n=this.patron().local_effects[0]?.milestones||[];n[t]&&this.selectedDevotion.set(n[t].devotion)}updateSimulatedDevotion(i){let e=i.target,t=Number(e.value);t>this.maxDevotion()&&(t=this.maxDevotion()),t<0&&(t=0),this.selectedDevotion.set(t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["anno-deity-card"]],inputs:{patron:[1,"patron"]},decls:28,vars:18,consts:[["primaryEffectTpl",""],["standardEffectTpl",""],["role","region",1,"deity-monument-container",3,"id"],[1,"roman-border-frame"],[1,"grid","grid-cols-1","lg:grid-cols-12","gap-8","relative","z-10","p-6","md:p-10","min-h-160"],[1,"lg:col-span-7","flex","flex-col","justify-between","space-y-8"],[1,"flex","items-center","space-x-4","mb-4"],["role","img",1,"w-14","h-14","deity-icon-brand",3,"mask-image","-webkit-mask-image"],[1,"deity-title"],[1,"deity-desc-long"],["role","tablist",1,"flex","space-x-2","border-b","pb-2","mb-6"],["role","tab","id","local-tab-btn",1,"tab-btn",3,"click","keydown.enter","keydown.space"],["role","tab","id","global-tab-btn",1,"tab-btn",3,"click","keydown.enter","keydown.space"],["role","tabpanel","aria-labelledby","local-tab-btn",1,"space-y-6",3,"id"],["role","tabpanel","aria-labelledby","global-tab-btn",1,"space-y-6",3,"id"],[1,"lg:col-span-5","relative","flex","items-center","justify-center","min-h-87.5","lg:min-h-full"],[1,"portrait-vignette-wrapper"],[1,"vignette-glow-radial"],[1,"portrait-artwork",3,"src","alt"],["role","img",1,"w-14","h-14","deity-icon-brand"],[1,"mb-8"],[1,"progression-timeline"],[1,"timeline-track"],[1,"timeline-bar-filled"],["role","group","aria-label","Devotion Milestone Points",1,"timeline-points"],[1,"timeline-node",3,"node-completed","node-active","left"],[1,"devotion-selector-card","mt-4"],[1,"devotion-label",3,"for"],[1,"flex","items-center","space-x-3","mt-2"],["type","range",1,"roman-range",3,"input","id","min","max","value"],["type","number",1,"devotion-value-input",3,"input","id","min","max","value"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"timeline-node",3,"click"],[1,"node-tooltip"],[1,"blessing-card","card-bronze"],[1,"flex","flex-row"],[1,"inline","w-10","h-10","mr-4",3,"src","alt"],[1,"flex","flex-col"],[1,"blessing-badge"],[1,"blessing-title"],[1,"shrine-attributes-container"],[1,"flex","flex-wrap","gap-2","mt-2"],[1,"blessing-card","card-silver"],[1,"blessing-desc"],[1,"blessing-card","card-gold"],[1,"attribute-modifier"],[1,"flex","items-center","gap-1"],["role","img",1,"inline-block","w-4","h-4","icon-brand",3,"mask-image","-webkit-mask-image"],[1,"tracking-wider","attribute-label"],[1,"attribute-value"],["role","img",1,"inline-block","w-4","h-4","icon-brand"],[1,"milestone-box"],[1,"flex","justify-between","items-center","mb-1"],[1,"milestone-title"],[1,"milestone-badge"],[1,"milestone-desc"],[1,"mt-6"],[1,"sub-section-title"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4","mt-3"],[1,"chain-box"],[1,"chain-label"],[1,"building-chip"],[1,"inline","w-4","h-4","mr-1",3,"src","alt"],[1,"passive-secondary-bar","border-t","flex","flex-col","md:flex-row","md:items-center","justify-between","gap-4"],[1,"roman-meta-badge"],[1,"passive-title"],[1,"passive-desc"],[1,"passive-modifier","flex","items-center","justify-between","space-x-2","self-start","md:self-center","px-4","py-1.5","rounded","border"],[1,"text-[0.7rem]","uppercase","tracking-wider"],[1,"font-roman","text-sm","font-bold"]],template:function(e,t){if(e&1){let n=R();st(0),o(1,"div",2),u(2,"div",3),o(3,"div",4)(4,"div",5)(5,"div")(6,"div",6),T(7,kn,1,5,"div",7),o(8,"div")(9,"h2",8),m(10),l()()(),o(11,"p",9),m(12),l(),o(13,"div",10)(14,"button",11),h("click",function(){return t.activeTab.set("local")})("keydown.enter",function(){return t.activeTab.set("local")})("keydown.space",function(c){return y(n),c.preventDefault(),x(t.activeTab.set("local"))}),m(15," Local Favour "),l(),o(16,"button",12),h("click",function(){return t.activeTab.set("global")})("keydown.enter",function(){return t.activeTab.set("global")})("keydown.space",function(c){return y(n),c.preventDefault(),x(t.activeTab.set("global"))}),m(17," Global Blessings "),l()(),T(18,Mn,17,17,"div",13),T(19,En,22,8,"div",14),l()(),o(20,"div",15)(21,"div",16),u(22,"div",17),T(23,On,1,2,"img",18),l()()()(),H(24,An,9,4,"ng-template",null,0,Me)(26,Fn,9,3,"ng-template",null,1,Me)}if(e&2){let n=lt(t.patron());s(),p("id","patron-"+n.uid),g("aria-label",n.title+" Details"),s(6),w(n.icon_url?7:-1),s(3),D(n.title),s(2),D(n.description),s(),g("aria-label",n.title+" attributes"),s(),M("tab-active",t.activeTab()==="local"),g("aria-selected",t.activeTab()==="local")("aria-controls","local-tab-"+n.uid),s(2),M("tab-active",t.activeTab()==="global"),g("aria-selected",t.activeTab()==="global")("aria-controls","global-tab-"+n.uid),s(2),w(t.activeTab()==="local"?18:-1),s(),w(t.activeTab()==="global"?19:-1),s(4),w(n.portraits.big?23:-1)}},dependencies:[dt,bt,mt],styles:['.deity-monument-container[_ngcontent-%COMP%]{--card-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--card-text: var(--background-color);--card-text-muted: color-mix(in srgb, var(--background-color), var(--secondary-color) 25%);--card-title-color: var(--background-accent-color);--card-subtitle-color: var(--background-accent-color);--box-bg: color-mix(in srgb, var(--primary-color), black 50%);--box-border: color-mix(in srgb, var(--card-text), transparent 90%);--input-bg: color-mix(in srgb, var(--primary-color), black 50%);--milestone-bg: color-mix(in srgb, var(--primary-color), black 20%);--shadow-color: color-mix(in srgb, black, transparent 60%);--vignette-gradient: radial-gradient(circle, rgba(95, 3, 46, .4) 0%, rgba(0, 0, 0, .85) 80%);--tab-border: color-mix(in srgb, var(--primary-color), transparent 40%);--tab-border-active: var(--background-color);--chip-bg: color-mix(in srgb, var(--primary-color), var(--secondary-color) 40%);--chip-border: color-mix(in srgb, var(--primary-color), black 15%);--chip-text: color-mix(in srgb, var(--background-color), transparent 10%);--timeline-node-bg: var(--primary-color);--timeline-node-border: var(--background-accent-color);--timeline-track-bg: color-mix(in srgb, var(--card-text), transparent 85%);--timeline-node-uncompleted-bg: var(--secondary-color);--timeline-node-uncompleted-border: color-mix(in srgb, var(--background-color), var(--secondary-color) 60%);--timeline-node-completed-bg: var(--background-accent-color);--icon-mask-color: var(--background-color);--tab-container-border: color-mix(in srgb, var(--background-color), transparent 80%);--section-divider: rgba(235, 210, 184, .22);--modifier-badge-bg: color-mix(in srgb, var(--primary-color), transparent 80%);--modifier-badge-border: color-mix(in srgb, var(--primary-color), transparent 40%);--modifier-badge-label: color-mix(in srgb, var(--background-color), transparent 10%);--modifier-badge-val: #ffcc00}.light-mode[_nghost-%COMP%]   .deity-monument-container[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .deity-monument-container[_ngcontent-%COMP%]{--card-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--card-text: var(--text-color);--card-text-muted: color-mix(in srgb, var(--text-color), var(--background-color) 30%);--card-title-color: var(--primary-color);--card-subtitle-color: color-mix(in srgb, var(--primary-color), var(--background-color) 20%);--box-bg: color-mix(in srgb, var(--card-bg), black 4%);--box-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 85%);--input-bg: color-mix(in srgb, var(--card-bg), black 8%);--milestone-bg: color-mix(in srgb, var(--card-bg), black 5%);--shadow-color: rgba(95, 3, 46, .12);--vignette-gradient: radial-gradient( circle, transparent 25%, color-mix(in srgb, var(--background-accent-color), black 15%) 100% );--tab-border: color-mix(in srgb, var(--secondary-color), transparent 90%);--tab-border-active: var(--primary-color);--chip-bg: color-mix(in srgb, var(--primary-color), var(--card-bg) 90%);--chip-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 50%);--chip-text: var(--text-color);--timeline-node-bg: var(--text-color);--timeline-node-border: color-mix(in srgb, var(--text-color), transparent 50%);--timeline-track-bg: color-mix(in srgb, var(--primary-color), transparent 82%);--timeline-node-uncompleted-bg: color-mix(in srgb, var(--card-bg), black 3%);--timeline-node-uncompleted-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 60%);--timeline-node-completed-bg: var(--primary-color);--icon-mask-color: var(--primary-color);--tab-container-border: color-mix(in srgb, var(--text-color), var(--card-bg) 80%);--section-divider: color-mix(in srgb, var(--text-color), var(--card-bg) 75%);--modifier-badge-bg: color-mix(in srgb, var(--primary-color), var(--card-bg) 90%);--modifier-badge-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 65%);--modifier-badge-label: color-mix(in srgb, var(--text-color), var(--card-bg) 20%);--modifier-badge-val: var(--primary-color)}.deity-monument-container[_ngcontent-%COMP%]{position:relative;background-color:var(--card-bg);color:var(--card-text);border-radius:6px;margin-bottom:1rem;overflow:hidden;box-shadow:0 4px 12px var(--shadow-color);transition:background-color .3s ease,color .3s ease,box-shadow .3s ease}.roman-border-frame[_ngcontent-%COMP%]{position:absolute;inset:12px;border:1px solid color-mix(in srgb,var(--card-text),transparent 85%);pointer-events:none;border-radius:4px;z-index:2}.roman-border-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:4px;border:1px solid color-mix(in srgb,var(--card-text),transparent 95%);border-radius:2px}.deity-title[_ngcontent-%COMP%]{font-size:2.25rem;color:var(--card-title-color);font-weight:700;margin:0;letter-spacing:.05em;text-shadow:0 2px 4px rgba(0,0,0,.15)}.deity-icon-brand[_ngcontent-%COMP%]{background-color:var(--icon-mask-color);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;transition:background-color .3s ease}.deity-desc-long[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.95rem;line-height:1.6;color:color-mix(in srgb,var(--card-text),transparent 15%);margin-bottom:2rem}[role=tablist][_ngcontent-%COMP%]{border-color:var(--tab-container-border)!important}.tab-btn[_ngcontent-%COMP%]{font-family:var(--font-primary);text-transform:uppercase;font-size:.85rem;letter-spacing:.08em;color:color-mix(in srgb,var(--card-text),transparent 50%);padding:.5rem 1rem;background:none;border:2px solid var(--tab-border);cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover, .tab-btn[_ngcontent-%COMP%]:focus{color:var(--card-text);outline:none}.tab-active[_ngcontent-%COMP%]{color:var(--card-text);border:2px solid var(--tab-border-active);font-weight:600}.milestone-box[_ngcontent-%COMP%]{background:var(--milestone-bg);border-left:3px solid var(--primary-color);padding:1rem;border-radius:0 4px 4px 0}.milestone-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.1rem;font-weight:700;color:var(--card-title-color);letter-spacing:.03em}.milestone-badge[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;color:var(--card-subtitle-color)}.milestone-desc[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.85rem;margin:.5rem 0 0;color:var(--card-text-muted)}.progression-timeline[_ngcontent-%COMP%]{position:relative;height:6px;margin-bottom:2.5rem}.timeline-track[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background:var(--timeline-track-bg);border-radius:3px}.timeline-bar-filled[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,var(--accent-color),#ffcc00);border-radius:3px;transition:width .4s ease;box-shadow:0 0 8px color-mix(in srgb,var(--accent-color),transparent 30%)}.timeline-points[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0}.timeline-node[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:var(--timeline-node-uncompleted-bg);border:2px solid var(--timeline-node-uncompleted-border);cursor:pointer;transition:all .2s ease;z-index:3;padding:0}.timeline-node[_ngcontent-%COMP%]:hover, .timeline-node[_ngcontent-%COMP%]:focus{transform:translate(-50%,-50%) scale(1.3);background:var(--card-text);outline:none}.node-completed[_ngcontent-%COMP%]{background:var(--timeline-node-completed-bg);border-color:var(--timeline-node-completed-bg)}.node-active[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(1.4);background:#fc0!important;border-color:var(--card-text)!important;box-shadow:0 0 15px #fc0c}.node-tooltip[_ngcontent-%COMP%]{position:absolute;bottom:22px;left:50%;transform:translate(-50%) scale(.85);background:#000000e6;color:#ebd2b8;font-size:.65rem;padding:2px 6px;border-radius:3px;white-space:nowrap;opacity:0;transition:all .2s ease;pointer-events:none;font-family:var(--font-secondary)}.timeline-node[_ngcontent-%COMP%]:hover   .node-tooltip[_ngcontent-%COMP%], .timeline-node[_ngcontent-%COMP%]:focus   .node-tooltip[_ngcontent-%COMP%], .node-active[_ngcontent-%COMP%]   .node-tooltip[_ngcontent-%COMP%]{opacity:1;transform:translate(-50%) scale(1)}.devotion-selector-card[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--card-text),transparent 95%);border:1px solid color-mix(in srgb,var(--card-text),transparent 90%);padding:.75rem 1rem;border-radius:4px}.devotion-label[_ngcontent-%COMP%]{display:block;font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;color:color-mix(in srgb,var(--card-text),transparent 20%)}.devotion-value-input[_ngcontent-%COMP%]{background:var(--input-bg);border:1px solid color-mix(in srgb,var(--card-text),transparent 80%);color:var(--card-text);font-family:var(--font-primary);font-size:.9rem;padding:.25rem .5rem;width:100px;border-radius:3px;text-align:center;appearance:textfield;-moz-appearance:textfield}.devotion-value-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .devotion-value-input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.devotion-value-input[_ngcontent-%COMP%]:focus{outline:1px solid var(--accent-color);border-color:var(--accent-color)}.roman-range[_ngcontent-%COMP%]{flex:1;accent-color:var(--primary-color);height:4px;border-radius:2px;cursor:pointer}.sub-section-title[_ngcontent-%COMP%]{font-size:1rem;text-transform:uppercase;letter-spacing:.1em;color:var(--card-subtitle-color);border-bottom:1px solid color-mix(in srgb,var(--card-text),transparent 85%);padding-bottom:4px}.chain-box[_ngcontent-%COMP%]{background:var(--box-bg);border:1px solid var(--box-border);padding:.75rem;border-radius:4px}.chain-label[_ngcontent-%COMP%]{display:block;font-family:var(--font-primary);font-size:.95rem;color:var(--card-text)}.building-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;font-size:.75rem;letter-spacing:.6px;padding:1px 6px;background:var(--chip-bg);border:1px solid var(--chip-border);color:var(--chip-text);border-radius:2px;transition:background-color .2s ease,color .2s ease}.building-chip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:drop-shadow(0 1px 1px color-mix(in srgb,black,transparent 50%))}.blessing-card[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--card-text),transparent 97%);border-left:3px solid color-mix(in srgb,var(--card-text),transparent 80%);padding:1rem;border-radius:0 4px 4px 0}.card-gold[_ngcontent-%COMP%]{border-left-color:#cca300}.card-silver[_ngcontent-%COMP%]{border-left-color:#ccc}.card-bronze[_ngcontent-%COMP%]{border-left-color:#cd7f32}.blessing-badge[_ngcontent-%COMP%]{font-family:var(--font-secondary);display:inline-block;font-size:.65rem;text-transform:uppercase;letter-spacing:.12em;color:var(--card-subtitle-color);margin-bottom:4px}.blessing-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.15rem;letter-spacing:.12rem;font-weight:700;color:var(--card-text);margin:0 0 .25rem}.blessing-desc[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.85rem;color:color-mix(in srgb,var(--card-text),transparent 20%);margin:0}.shrine-attributes-container[_ngcontent-%COMP%]{border-top:1px solid var(--section-divider)!important;padding-top:4px;margin-top:4px}.shrine-attributes-container[_ngcontent-%COMP%]   .attribute-modifier[_ngcontent-%COMP%]{background-color:var(--modifier-badge-bg)!important;border:1px solid var(--modifier-badge-border)!important;font-family:var(--font-secondary);font-size:.85rem;display:inline-flex;padding-inline:calc(var(--spacing) * 2);padding-block:calc(var(--spacing) * 1);gap:calc(var(--spacing) * 8)}.shrine-attributes-container[_ngcontent-%COMP%]   .attribute-modifier[_ngcontent-%COMP%]   .attribute-label[_ngcontent-%COMP%]{color:var(--modifier-badge-label)!important}.shrine-attributes-container[_ngcontent-%COMP%]   .attribute-modifier[_ngcontent-%COMP%]   .attribute-value[_ngcontent-%COMP%]{color:var(--modifier-badge-val)!important;font-weight:700}.passive-secondary-bar[_ngcontent-%COMP%]{border-top:1px solid var(--section-divider)!important;padding-top:1rem;margin-top:1.5rem}.passive-secondary-bar[_ngcontent-%COMP%]   .roman-meta-badge[_ngcontent-%COMP%]{font-size:.65rem;text-transform:uppercase;letter-spacing:.08em;color:var(--card-subtitle-color)}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.05rem;color:var(--card-text);margin:.1rem 0 .2rem}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-desc[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.82rem;line-height:1.5;color:var(--card-text-muted);margin:0}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-modifier[_ngcontent-%COMP%]{background-color:var(--modifier-badge-bg)!important;border:1px solid var(--modifier-badge-border)!important;width:200px}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-modifier[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:var(--modifier-badge-label)!important}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-modifier[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--modifier-badge-val)!important}.portrait-vignette-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;max-width:440px;aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:4px;box-shadow:inset 0 0 50px #000000b3;border:1px solid color-mix(in srgb,var(--card-text),transparent 92%)}.vignette-glow-radial[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}.portrait-artwork[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center top;position:relative;z-index:0;transform:scale(1.02);transition:transform .5s ease}.portrait-artwork[_ngcontent-%COMP%]:hover{transform:scale(1.05)}'],changeDetection:0})};var fe=class a{http=d(pt);_patrons=k([]);_loading=k(!1);_error=k(null);patrons=this._patrons.asReadonly();isLoading=this._loading.asReadonly();error=this._error.asReadonly();fetchPatrons(i="en"){return this._loading.set(!0),this._error.set(null),this.http.get(`assets/data/patrons_${i}.json`).pipe(Qe(e=>this.mapToViewModel(e)),Ye(e=>{this._patrons.set(e)}),Ge(e=>(this._error.set("Could not retrieve deities database."),console.error("Patrons Service Error: ",e),ee([]))),Ue(()=>this._loading.set(!1))).subscribe()}mapToViewModel(i){return Object.entries(i).map(([e,t])=>{let n=t.local_effects.map(r=>{let c={},C=new Set;return Object.entries(r.affected_chains).forEach(([_,N])=>{let W=N.text.trim().toLowerCase();if(C.has(W))return;C.add(W);let He=new Set,Ht=N.production_assets.filter(jt=>{let je=jt.text.trim().toLowerCase();return He.has(je)?!1:(He.add(je),!0)});c[_]=G(q({},N),{production_assets:Ht})}),G(q({},r),{affected_chains:c})});return G(q({},t),{id:e,local_effects:n,slug:t.title.toLowerCase().replace(/\s+/g,"-")})})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=Xe({token:a,factory:a.\u0275fac,providedIn:"root"})};var zn=(a,i)=>i.uid;function Hn(a,i){a&1&&(o(0,"div",8),u(1,"div",11),o(2,"span",12),m(3," Loading Oracle Records... "),l()())}function jn(a,i){if(a&1){let e=R();o(0,"div",9)(1,"h3",13),m(2,"Oracle Disconnected"),l(),o(3,"p",14),m(4),l(),o(5,"button",15),h("click",function(){y(e);let n=b();return x(n.loadData())}),m(6," Retry Invocation "),l()()}if(a&2){let e=b();s(4),S(" ",e.service.error()," ")}}function Vn(a,i){if(a&1&&u(0,"div",23),a&2){let e=b(2).$implicit;B("mask-image","url("+e.icon_url+")")("-webkit-mask-image","url("+e.icon_url+")"),g("aria-label",e.title+" Tab Icon")}}function $n(a,i){if(a&1&&(o(0,"div",20),T(1,Vn,1,5,"div",21),o(2,"span",22),m(3),l()()),a&2){let e=b().$implicit;s(),w(e.icon_url?1:-1),s(2),D(e.title)}}function Qn(a,i){if(a&1&&(o(0,"mat-tab"),H(1,$n,4,2,"ng-template",17),o(2,"div",18),u(3,"anno-deity-card",19),l()()),a&2){let e=i.$implicit;s(3),p("patron",e)}}function Wn(a,i){if(a&1){let e=R();o(0,"mat-tab-group",16),h("selectedIndexChange",function(n){y(e);let r=b();return x(r.onTabChange(n))}),P(1,Qn,4,1,"mat-tab",null,zn),l()}if(a&2){let e=b();p("selectedIndex",e.activeTabIndex()),s(),I(e.service.patrons())}}var zt=class a{service=d(fe);router=d(_t);route=d(ut);activeTabIndex=k(0);fragment=Dt(this.route.fragment);constructor(){xe(()=>{let i=this.fragment();if(i){let e=this.service.patrons().findIndex(t=>this.slugify(t.title)===i);e!==-1&&this.activeTabIndex.set(e)}})}ngOnInit(){this.loadData()}loadData(){this.service.fetchPatrons()}onTabChange(i){let e=this.service.patrons()[i];e&&this.router.navigate([],{fragment:this.slugify(e.title),replaceUrl:!0})}slugify(i){return i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["anno-patrons-page"]],decls:13,vars:1,consts:[[1,"patrons-workspace","min-h-screen","pb-16"],[1,"relative","pt-16","pb-4","text-center"],[1,"absolute","inset-0","pattern-overlay","opacity-5"],[1,"text-center","z-10","px-4"],[1,"page-main-title","select-none"],[1,"page-main-subtitle","mx-auto"],[1,"max-w-7xl","mx-auto","px-4","md:px-8","mt-8"],[1,"xl:col-span-9","space-y-12"],[1,"flex","flex-col","items-center","justify-center","py-20","space-y-4"],[1,"error-panel","p-8","text-center","rounded"],[1,"patron-tabs",3,"selectedIndex"],[1,"roman-loader","animate-spin"],[1,"font-roman","loader-text","tracking-widest","text-sm","uppercase"],[1,"font-roman","mb-2","text-error-title"],[1,"text-sm","opacity-80","mb-4","text-error-desc"],[1,"btn-classic",3,"click"],[1,"patron-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"mt-8"],[3,"patron"],[1,"flex","items-center","gap-2"],["role","img",1,"w-5","h-5","patron-tab-icon",3,"mask-image","-webkit-mask-image"],[1,"hidden","md:inline"],["role","img",1,"w-5","h-5","patron-tab-icon"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1),u(2,"div",2),o(3,"div",3)(4,"h1",4),m(5,"Patrons"),l(),o(6,"p",5),m(7," Sacrifice devotion to gain powerful blessings from Roman and Celtic patrons. Under Neptune's waves, Ceres' grain fields, or Mars' iron blades, lead Albion and Latium to divine glory. "),l()()(),o(8,"div",6)(9,"div",7),T(10,Hn,4,0,"div",8)(11,jn,7,1,"div",9)(12,Wn,3,1,"mat-tab-group",10),l()()()),e&2&&(s(10),w(t.service.isLoading()?10:t.service.error()?11:12))},dependencies:[he,Nt,Ne,Fe,At],styles:[".patrons-workspace[_ngcontent-%COMP%]{--workspace-bg: var(--background-color);--title-color: var(--primary-color);--subtitle-color: var(--text-color);--tab-header-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--tab-text-color: rgba(235, 210, 184, .6);--tab-text-active: var(--background-color);--tab-underline: var(--accent-color);--loader-color: var(--primary-color);--error-bg: rgba(95, 3, 46, .1);--error-border: rgba(95, 3, 46, .3);--error-text: #ff6b6b}.light-mode[_nghost-%COMP%]   .patrons-workspace[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .patrons-workspace[_ngcontent-%COMP%]{--workspace-bg: var(--background-color);--title-color: var(--primary-color);--subtitle-color: var(--text-color);--tab-header-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--tab-text-color: color-mix(in srgb, var(--text-color), transparent 35%);--tab-text-active: var(--primary-color);--tab-underline: var(--primary-color);--loader-color: var(--primary-color);--error-bg: color-mix(in srgb, var(--primary-color), transparent 92%);--error-border: color-mix(in srgb, var(--primary-color), transparent 80%);--error-text: var(--primary-color)}.patrons-workspace[_ngcontent-%COMP%]{background-color:var(--workspace-bg);transition:background-color .3s ease}.patrons-workspace[_ngcontent-%COMP%]   .page-main-title[_ngcontent-%COMP%]{color:var(--title-color);transition:color .3s ease}.patrons-workspace[_ngcontent-%COMP%]   .page-main-subtitle[_ngcontent-%COMP%]{color:var(--subtitle-color);transition:color .3s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header-pagination-chevron{border-color:var(--tab-text-color)!important}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-label-container{border-width:0!important}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header{background-color:var(--tab-header-bg)!important;border-radius:4px 4px 0 0;transition:background-color .3s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab{font-family:var(--font-primary);text-transform:uppercase;transition:opacity .2s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label{color:var(--tab-text-color)!important;font-weight:600;transition:color .2s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab--active{opacity:1}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--tab-text-active)!important;font-weight:700}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-indicator__content--underline{border-color:var(--tab-underline)!important;border-top-width:4px!important;transition:border-color .3s ease}.patron-tab-icon[_ngcontent-%COMP%]{background-color:currentColor;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;transition:background-color .2s ease}.roman-loader[_ngcontent-%COMP%]{width:48px;height:48px;border:4px solid var(--loader-color);border-bottom-color:transparent;border-radius:50%;transition:border-color .3s ease}.loader-text[_ngcontent-%COMP%]{color:var(--loader-color);transition:color .3s ease}.error-panel[_ngcontent-%COMP%]{background-color:var(--error-bg);border:1px solid var(--error-border);transition:background-color .3s ease,border-color .3s ease}.error-panel[_ngcontent-%COMP%]   .text-error-title[_ngcontent-%COMP%]{color:var(--error-text)}.btn-classic[_ngcontent-%COMP%]{background-color:var(--loader-color);color:var(--workspace-bg);border:none;padding:.5rem 1.5rem;border-radius:2px;font-family:var(--font-primary);font-size:.8rem;text-transform:uppercase;cursor:pointer;letter-spacing:.05em;transition:background-color .2s,color .2s}.btn-classic[_ngcontent-%COMP%]:hover{background-color:var(--tab-header-bg);color:var(--tab-text-active)}"],changeDetection:0})};export{zt as PatronsPageComponent};
