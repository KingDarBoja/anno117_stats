import{a as dt,c as mt}from"./chunk-N7MIHFW6.js";import{a as kt,b as De}from"./chunk-TMNHJYBI.js";import{a as Tt}from"./chunk-FUHHY3RS.js";import{d as ut,e as gt}from"./chunk-RBI3BAAU.js";import{B as pe,D as Ct,a as Me,h as _t,j as ht,m as ft,n as Pe,p as vt,u as yt,v as xt}from"./chunk-ISVBBHRV.js";import{e as bt,f as Ie,g as pt}from"./chunk-XARPCUYG.js";import{e as ot,f as st,g as lt}from"./chunk-CZLORVFP.js";import{h as ct}from"./chunk-JEGMXTNJ.js";import{$b as O,A as We,Ab as o,Bb as s,C as qe,Cb as g,F as Ge,Gb as xe,Hb as R,K as Je,L as te,Lb as _,M as Ue,N as G,Nb as b,Ob as se,P as Ze,Pa as ie,Pb as le,Q as _e,Qb as ce,Ra as l,Rb as Z,Sb as f,T as Ke,Tb as v,U as Ye,W as j,Wa as re,Wb as $,Xa as oe,Xb as A,Y as d,Yb as T,Za as ve,Zb as de,_b as m,a as W,ab as tt,ac as w,b as q,ba as y,ca as x,d as F,ea as ne,eb as L,f as He,fb as nt,fc as K,g as Y,ga as he,gb as z,ia as D,ib as U,ic as Ce,j as je,ja as J,jb as H,jc as ke,kb as at,kc as Te,l as X,lc as we,na as k,p as Ve,pc as B,qa as fe,ra as Xe,rb as it,sa as ae,sb as h,sc as rt,tb as M,ua as V,ub as I,uc as me,va as et,w as $e,wb as ye,x as ee,xb as S,xc as P,y as Qe,yb as E,yc as be,zb as p}from"./chunk-GJ66JQBE.js";function wt(a,i){let t=!i?.manualCleanup?i?.injector?.get(he)??d(he):null,n=Ft(i?.equal),r;i?.requireSync?r=k({kind:0},{equal:n}):r=k({kind:1,value:i?.initialValue},{equal:n});let c,C=a.subscribe({next:u=>r.set({kind:1,value:u}),error:u=>{r.set({kind:2,error:u}),c?.()},complete:()=>{c?.()}});if(i?.requireSync&&r().kind===0)throw new _e(601,!1);return c=t?.onDestroy(C.unsubscribe.bind(C)),B(()=>{let u=r();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new _e(601,!1)}},{equal:i?.equal})}function Ft(a=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&a(i.value,e.value)}var Be=["*"];function jt(a,i){a&1&&le(0)}var Vt=["tabListContainer"],$t=["tabList"],Qt=["tabListInner"],Wt=["nextPaginator"],qt=["previousPaginator"],Gt=["content"];function Jt(a,i){}var Ut=["tabBodyWrapper"],Zt=["tabHeader"];function Kt(a,i){}function Yt(a,i){if(a&1&&H(0,Kt,0,0,"ng-template",12),a&2){let e=b().$implicit;p("cdkPortalOutlet",e.templateLabel)}}function Xt(a,i){if(a&1&&m(0),a&2){let e=b().$implicit;O(e.textLabel)}}function en(a,i){if(a&1){let e=R();o(0,"div",7,2),_("click",function(){let n=y(e),r=n.$implicit,c=n.$index,C=b(),u=$(1);return x(C._handleClick(r,u,c))})("cdkFocusChange",function(n){let r=y(e).$index,c=b();return x(c._tabFocusChanged(n,r))}),g(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),M(6,Yt,1,1,null,12)(7,Xt,1,1),s()()()}if(a&2){let e=i.$implicit,t=i.$index,n=$(1),r=b();de(e.labelClass),T("mdc-tab--active",r.selectedIndex===t),p("id",r._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",r.fitInkBarToContent),h("tabIndex",r._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",r._tabs.length)("aria-controls",r._getTabContentId(t))("aria-selected",r.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),l(3),p("matRippleTrigger",n)("matRippleDisabled",e.disabled||r.disableRipple),l(3),I(e.templateLabel?6:7)}}function tn(a,i){a&1&&le(0)}function nn(a,i){if(a&1){let e=R();o(0,"mat-tab-body",13),_("_onCentered",function(){y(e);let n=b();return x(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){y(e);let r=b();return x(r._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){y(e);let r=b();return x(r._bodyCentered(n))}),s()}if(a&2){let e=i.$implicit,t=i.$index,n=b();de(e.bodyClass),p("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),h("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var an=new j("MatTabContent"),rn=(()=>{class a{template=d(oe);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,selectors:[["","matTabContent",""]],features:[K([{provide:an,useExisting:a}])]})}return a})(),on=new j("MatTabLabel"),Dt=new j("MAT_TAB"),Ae=(()=>{class a extends ft{_closestTab=d(Dt,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=ae(a)))(n||a)}})();static \u0275dir=z({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[K([{provide:on,useExisting:a}]),U]})}return a})(),St=new j("MAT_TAB_GROUP"),Ne=(()=>{class a{_viewContainerRef=d(tt);_closestTabGroup=d(St,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Y;position=null;origin=null;isActive=!1;constructor(){d(bt).load(Tt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ht(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-tab"]],contentQueries:function(t,n,r){if(t&1&&ce(r,Ae,5)(r,rn,7,oe),t&2){let c;f(c=v())&&(n.templateLabel=c.first),f(c=v())&&(n._explicitContent=c.first)}},viewQuery:function(t,n){if(t&1&&Z(oe,7),t&2){let r;f(r=v())&&(n._implicitContent=r.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&h("id",null)},inputs:{disabled:[2,"disabled","disabled",P],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[K([{provide:Dt,useExisting:a}]),Xe],ngContentSelectors:Be,decls:1,vars:0,template:function(t,n){t&1&&(se(),at(0,jt,1,0,"ng-template"))},encapsulation:2})}return a})(),Se="mdc-tab-indicator--active",Mt="mdc-tab-indicator--no-transition",Ee=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(n=>n.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},sn=(()=>{class a{_elementRef=d(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Se);return}let n=t.getBoundingClientRect(),r=e.width/n.width,c=e.left-n.left;t.classList.add(Mt),this._inkBarContentElement.style.setProperty("transform",`translateX(${c}px) scaleX(${r})`),t.getBoundingClientRect(),t.classList.remove(Mt),t.classList.add(Se),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Se)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P]}})}return a})();var Et=(()=>{class a extends sn{elementRef=d(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ae(a)))(n||a)}})();static \u0275dir=z({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(h("aria-disabled",!!n.disabled),T("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",P]},features:[U]})}return a})(),It={passive:!0},ln=650,cn=100,dn=(()=>{class a{_elementRef=d(V);_changeDetectorRef=d(me);_viewportRuler=d(gt);_dir=d(Ie,{optional:!0});_ngZone=d(J);_platform=d(Me);_sharedResizeObserver=d(kt);_injector=d(ne);_renderer=d(ve);_animationsDisabled=pe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new D;indexFocused=new D;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),It),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),It))}ngAfterContentInit(){let e=this._dir?this._dir.change:X("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(qe(32),G(this._destroyed)),n=this._viewportRuler.change(150).pipe(G(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ct(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),re(r,{injector:this._injector}),ee(e,n,t,this._items.changes,this._itemsResized()).pipe(G(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(c=>{this.indexFocused.emit(c),this._setTabFocus(c)})}_itemsResized(){return typeof ResizeObserver!="function"?je:this._items.changes.pipe(te(this._items),Ue(e=>new He(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(r=>t.next(r));return e.forEach(r=>n.observe(r.elementRef.nativeElement)),()=>{n.disconnect()}}))),Je(1),Qe(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!vt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:c}=t.elementRef.nativeElement,C,u;this._getLayoutDirection()=="ltr"?(C=r,u=C+c):(u=this._tabListInner.nativeElement.offsetWidth-r,C=u-c);let N=this.scrollDistance,Q=this.scrollDistance+n;C<N?this.scrollDistance-=N-C:u>Q&&(this.scrollDistance+=Math.min(u-Q,C-N))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),$e(ln,cn).pipe(G(ee(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:r}=this._scrollHeader(e);(r===0||r>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",P],selectedIndex:[2,"selectedIndex","selectedIndex",be]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),mn=(()=>{class a extends dn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ee(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ae(a)))(n||a)}})();static \u0275cmp=L({type:a,selectors:[["mat-tab-header"]],contentQueries:function(t,n,r){if(t&1&&ce(r,Et,4),t&2){let c;f(c=v())&&(n._items=c)}},viewQuery:function(t,n){if(t&1&&Z(Vt,7)($t,7)(Qt,7)(Wt,5)(qt,5),t&2){let r;f(r=v())&&(n._tabListContainer=r.first),f(r=v())&&(n._tabList=r.first),f(r=v())&&(n._tabListInner=r.first),f(r=v())&&(n._nextPaginator=r.first),f(r=v())&&(n._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&T("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",P]},features:[U],ngContentSelectors:Be,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(se(),o(0,"div",5,0),_("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(c){return n._handlePaginatorPress("before",c)})("touchend",function(){return n._stopInterval()}),g(2,"div",6),s(),o(3,"div",7,1),_("keydown",function(c){return n._handleKeydown(c)}),o(5,"div",8,2),_("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),le(9),s()()(),o(10,"div",10,4),_("mousedown",function(c){return n._handlePaginatorPress("after",c)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),g(12,"div",6),s()),t&2&&(T("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),l(3),T("_mat-animation-noopable",n._animationsDisabled),l(2),h("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),l(5),T("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[De,xt],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),bn=new j("MAT_TABS_CONFIG"),Pt=(()=>{class a extends Pe{_host=d(Oe);_ngZone=d(J);_centeringSub=F.EMPTY;_leavingSub=F.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(te(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=z({type:a,selectors:[["","matTabBodyHost",""]],features:[U]})}return a})(),Oe=(()=>{class a{_elementRef=d(V);_dir=d(Ie,{optional:!0});_ngZone=d(J);_injector=d(ne);_renderer=d(ve);_diAnimationsDisabled=pe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=F.EMPTY;_position;_previousPosition;_onCentering=new D;_beforeCentering=new D;_afterLeavingCenter=new D;_onCentered=new D(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(me);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),re(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),re(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&Z(Pt,5)(Gt,5),t&2){let r;f(r=v())&&(n._portalHost=r.first),f(r=v())&&(n._contentElement=r.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&h("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(o(0,"div",1,0),H(2,Jt,0,0,"ng-template",2),s()),t&2&&T("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Pt,ut],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),Ot=(()=>{class a{_elementRef=d(V);_changeDetectorRef=d(me);_ngZone=d(J);_tabsSubscription=F.EMPTY;_tabLabelSubscription=F.EMPTY;_tabBodySubscription=F.EMPTY;_diAnimationsDisabled=pe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new et;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new D;focusChange=new D;animationDone=new D;selectedTabChange=new D(!0);_groupId;_isServer=!d(Me).isBrowser;constructor(){let e=d(bn,{optional:!0});this._groupId=d(_t).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,r)=>n.isActive=r===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let r=0;r<t.length;r++)if(t[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,n=t[r];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(te(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Re;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ee(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=L({type:a,selectors:[["mat-tab-group"]],contentQueries:function(t,n,r){if(t&1&&ce(r,Ne,5),t&2){let c;f(c=v())&&(n._allTabs=c)}},viewQuery:function(t,n){if(t&1&&Z(Ut,5)(Zt,5)(Oe,5),t&2){let r;f(r=v())&&(n._tabBodyWrapper=r.first),f(r=v())&&(n._tabHeader=r.first),f(r=v())&&(n._tabBodies=r)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(h("mat-align-tabs",n.alignTabs),de("mat-"+(n.color||"primary")),A("--mat-tab-animation-duration",n.animationDuration),T("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",P],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",P],selectedIndex:[2,"selectedIndex","selectedIndex",be],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",be],disablePagination:[2,"disablePagination","disablePagination",P],disableRipple:[2,"disableRipple","disableRipple",P],preserveContent:[2,"preserveContent","preserveContent",P],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[K([{provide:St,useExisting:a}])],ngContentSelectors:Be,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(se(),o(0,"mat-tab-header",3,0),_("indexFocused",function(c){return n._focusChanged(c)})("selectFocusedIndex",function(c){return n.selectedIndex=c}),S(2,en,8,17,"div",4,ye),s(),M(4,tn,1,0),o(5,"div",5,1),S(7,nn,1,10,"mat-tab-body",6,ye),s()),t&2&&(p("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),it("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),l(2),E(n._tabs),l(2),I(n._isServer?4:-1),l(),T("_mat-animation-noopable",n._animationsDisabled()),l(2),E(n._tabs))},dependencies:[mn,Et,yt,De,Pe,Oe],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),Re=class{index;tab};var Rt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=nt({type:a});static \u0275inj=Ye({imports:[pt]})}return a})();var gn=(a,i)=>({$implicit:a,patron:i}),_n=(a,i)=>({$implicit:a,index:i}),hn=(a,i)=>i.devotion,Lt=(a,i)=>i.title,fn=(a,i)=>i.key,vn=(a,i)=>i.guid;function yn(a,i){if(a&1&&g(0,"div",19),a&2){let e=b();A("mask-image","url("+e.patron().icon_url+")")("-webkit-mask-image","url("+e.patron().icon_url+")"),h("aria-label",e.patron().title+" Icon")}}function xn(a,i){if(a&1){let e=R();o(0,"button",32),_("click",function(){let n=y(e).$implicit,r=b(2);return x(r.selectMilestone(n))}),o(1,"span",33),m(2),ke(3,"number"),s()()}if(a&2){let e=i.$implicit,t=i.$index,n=b(2);A("left",t/(n.patron().local_effects[0].milestones.length-1)*100,"%"),T("node-completed",n.selectedDevotion()>=e.devotion)("node-active",n.selectedDevotion()===e.devotion),l(2),w("",Te(3,7,e.devotion)," Devotion")}}function Cn(a,i){if(a&1&&xe(0,31),a&2){let e=i.$implicit,t=i.$index;b(2);let n=$(26);p("ngTemplateOutlet",n)("ngTemplateOutletContext",Ce(2,_n,e,t+1))}}function kn(a,i){if(a&1){let e=R();o(0,"div",13)(1,"div",20)(2,"div",21)(3,"div",22),g(4,"div",23),s(),o(5,"div",24),S(6,xn,4,9,"button",25,hn),s()(),o(8,"div",26)(9,"label",27),m(10,"Select Simulated Devotion Level:"),s(),o(11,"div",28)(12,"input",29),_("input",function(n){y(e);let r=b();return x(r.updateSimulatedDevotion(n))}),s(),o(13,"input",30),_("input",function(n){y(e);let r=b();return x(r.updateSimulatedDevotion(n))}),s()()()(),xe(14,31),S(15,Cn,1,5,"ng-container",31,Lt),s()}if(a&2){let e=b(),t=$(24);p("id","local-tab-"+e.patron().uid),l(4),A("width",e.progressPercentage(),"%"),l(2),E(e.patron().local_effects[0].milestones),l(3),p("for","simulated-range-"+e.patron().uid),l(3),p("id","simulated-range-"+e.patron().uid)("min",0)("max",e.maxDevotion())("value",e.selectedDevotion()),l(),p("id","simulated-range-number"+e.patron().uid)("min",0)("max",e.maxDevotion())("value",e.selectedDevotion()),l(),p("ngTemplateOutlet",t)("ngTemplateOutletContext",Ce(14,gn,e.patron().local_effects[0],e.patron())),l(),E(e.patron().local_effects.slice(1))}}function Tn(a,i){if(a&1&&(o(0,"div",42)(1,"span",38),m(2,"Exaltation Reward (7K Global Devotion)"),s(),o(3,"h4",39),m(4),s(),o(5,"p",40),m(6),s()()),a&2){let e=i.$implicit;l(4),O(e.title),l(2),O(e.description)}}function wn(a,i){if(a&1&&(o(0,"div",14)(1,"div",34)(2,"div",35),g(3,"img",36),o(4,"div",37)(5,"span",38),m(6,"Shrine (1K Global Devotion)"),s(),o(7,"h4",39),m(8),s()()(),o(9,"span",40),m(10),s()(),o(11,"div",41)(12,"span",38),m(13,"Veneration Blessing (4K Global Devotion)"),s(),o(14,"h4",39),m(15),s(),o(16,"p",40),m(17),s()(),S(18,Tn,7,2,"div",42,Lt),s()),a&2){let e=b();p("id","global-tab-"+e.patron().uid);let t=e.patron().shrine_effect.shrines[0];l(3),p("src",t.icon_url,ie)("alt",t.title),l(5),w(" ",t.title," "),l(2),w(" ","Shrines celebrate the deity and provide benefits nearby"," "),l(5),w(" ",e.patron().veneration_effect.title," "),l(2),w(" ",e.patron().veneration_effect.description," "),l(),E(e.patron().exaltation_effects)}}function Mn(a,i){if(a&1&&g(0,"img",18),a&2){let e=b();p("src",e.patron().portraits.big,ie)("alt",e.patron().title+" Big Portrait Artwork")}}function In(a,i){if(a&1&&(o(0,"span",54),g(1,"img",55),m(2),s()),a&2){let e=i.$implicit;l(),p("src",e.icon_url,ie)("alt",e.name),l(),w(" ",e.text," ")}}function Pn(a,i){if(a&1&&(o(0,"div",51)(1,"span",52),m(2),s(),o(3,"div",53),S(4,In,3,3,"span",54,vn),s()()),a&2){let e=i.$implicit;l(2),O(e.value.text),l(2),E(e.value.production_assets)}}function Dn(a,i){if(a&1&&(o(0,"div",48)(1,"h4",49),m(2,"Affected Production Chains"),s(),o(3,"div",50),S(4,Pn,6,1,"div",51,fn),ke(6,"keyvalue"),s()()),a&2){let e=b().$implicit;l(4),E(Te(6,0,e.affected_chains))}}function Sn(a,i){if(a&1&&(o(0,"div",43)(1,"div",44)(2,"span",45),m(3),s(),o(4,"span",46),m(5),s()(),o(6,"p",47),m(7),s()(),M(8,Dn,7,2,"div",48)),a&2){let e=i.$implicit,t=b();l(3),w("\u2726 ",e.title),l(2),w("+",t.activeLocalValue(),"%"),l(2),O(e.description),l(),I(t.hasChains(e.affected_chains)?8:-1)}}function En(a,i){if(a&1&&(o(0,"div",60)(1,"span",61),m(2,"Current Modifier:"),s(),o(3,"span",62),m(4),s()()),a&2){let e=b(2);l(4),w("+",e.activeSecondaryLocalValue())}}function On(a,i){if(a&1&&(o(0,"div",56)(1,"div")(2,"span",57),m(3,"Secondary Blessing"),s(),o(4,"h4",58),m(5),s(),o(6,"p",59),m(7),s()(),M(8,En,5,1,"div",60),s()),a&2){let e=i.$implicit;l(5),w(" ",e.title," "),l(2),w(" ",e.description," "),l(),I(e.milestones.length>0?8:-1)}}var ue=class a{patron=rt.required();activeTab=k("local");selectedDevotion=k(2500);isLightMode=k(!1);maxDevotion=B(()=>{let i=this.patron().local_effects[0];return!i||!i.milestones.length?3e5:i.milestones[i.milestones.length-1].devotion});activeLocalValue=B(()=>{let i=this.patron().local_effects[0];if(!i||!i.milestones.length)return 0;let e=this.selectedDevotion(),t=i.milestones,n=0;for(let r of t)if(e>=r.devotion)n=r.buff_scaling;else break;return n});activeSecondaryLocalValue=B(()=>{let i=this.patron().local_effects[1];if(!i||!i.milestones.length)return 0;let e=this.selectedDevotion(),t=i.milestones,n=0;for(let r of t)if(e>=r.devotion)n=r.buff_scaling;else break;return n});currentMilestoneIndex=B(()=>{let i=this.patron().local_effects[0]?.milestones||[],e=this.selectedDevotion(),t=0;for(let n=0;n<i.length&&e>=i[n].devotion;n++)t=n;return t});progressPercentage=B(()=>{let i=this.patron().local_effects[0]?.milestones||[];return i.length?this.currentMilestoneIndex()/(i.length-1)*100:0});hasChains(i){return Object.keys(i).length>0}selectMilestone(i){this.selectedDevotion.set(i.devotion)}updateMilestoneByStep(i){let e=i.target,t=Number(e.value),n=this.patron().local_effects[0]?.milestones||[];n[t]&&this.selectedDevotion.set(n[t].devotion)}updateSimulatedDevotion(i){let e=i.target,t=Number(e.value);t>this.maxDevotion()&&(t=this.maxDevotion()),t<0&&(t=0),this.selectedDevotion.set(t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["anno-deity-card"]],inputs:{patron:[1,"patron"]},decls:27,vars:17,consts:[["primaryEffectTpl",""],["standardEffectTpl",""],["role","region",1,"deity-monument-container",3,"id"],[1,"roman-border-frame"],[1,"grid","grid-cols-1","lg:grid-cols-12","gap-8","relative","z-10","p-6","md:p-10","min-h-160"],[1,"lg:col-span-7","flex","flex-col","justify-between","space-y-8"],[1,"flex","items-center","space-x-4","mb-4"],["role","img",1,"w-14","h-14","deity-icon-brand",3,"mask-image","-webkit-mask-image"],[1,"deity-title"],[1,"deity-desc-long"],["role","tablist",1,"flex","space-x-2","border-b","pb-2","mb-6"],["role","tab","id","local-tab-btn",1,"tab-btn",3,"click","keydown.enter","keydown.space"],["role","tab","id","global-tab-btn",1,"tab-btn",3,"click","keydown.enter","keydown.space"],["role","tabpanel","aria-labelledby","local-tab-btn",1,"space-y-6",3,"id"],["role","tabpanel","aria-labelledby","global-tab-btn",1,"space-y-6",3,"id"],[1,"lg:col-span-5","relative","flex","items-center","justify-center","min-h-87.5","lg:min-h-full"],[1,"portrait-vignette-wrapper"],[1,"vignette-glow-radial"],[1,"portrait-artwork",3,"src","alt"],["role","img",1,"w-14","h-14","deity-icon-brand"],[1,"mb-8"],[1,"progression-timeline"],[1,"timeline-track"],[1,"timeline-bar-filled"],["role","group","aria-label","Devotion Milestone Points",1,"timeline-points"],[1,"timeline-node",3,"node-completed","node-active","left"],[1,"devotion-selector-card","mt-4"],[1,"devotion-label",3,"for"],[1,"flex","items-center","space-x-3","mt-2"],["type","range",1,"roman-range",3,"input","id","min","max","value"],["type","number",1,"devotion-value-input",3,"input","id","min","max","value"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"timeline-node",3,"click"],[1,"node-tooltip"],[1,"blessing-card","card-bronze"],[1,"flex","flex-row"],[1,"inline","w-10","h-10","mr-4",3,"src","alt"],[1,"flex","flex-col"],[1,"blessing-badge"],[1,"blessing-title"],[1,"blessing-desc"],[1,"blessing-card","card-silver"],[1,"blessing-card","card-gold"],[1,"milestone-box"],[1,"flex","justify-between","items-center","mb-1"],[1,"milestone-title"],[1,"milestone-badge"],[1,"milestone-desc"],[1,"mt-6"],[1,"sub-section-title"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4","mt-3"],[1,"chain-box"],[1,"chain-label"],[1,"flex","flex-wrap","gap-1","mt-2"],[1,"building-chip"],[1,"inline","w-4","h-4","mr-1",3,"src","alt"],[1,"passive-secondary-bar","border-t","flex","flex-col","md:flex-row","md:items-center","justify-between","gap-4"],[1,"roman-meta-badge"],[1,"passive-title"],[1,"passive-desc"],[1,"passive-modifier","flex","items-center","justify-between","space-x-2","self-start","md:self-center","px-4","py-1.5","rounded","border"],[1,"text-[0.7rem]","uppercase","tracking-wider"],[1,"font-roman","text-sm","font-bold"]],template:function(e,t){if(e&1){let n=R();o(0,"div",2),g(1,"div",3),o(2,"div",4)(3,"div",5)(4,"div")(5,"div",6),M(6,yn,1,5,"div",7),o(7,"div")(8,"h2",8),m(9),s()()(),o(10,"p",9),m(11),s(),o(12,"div",10)(13,"button",11),_("click",function(){return t.activeTab.set("local")})("keydown.enter",function(){return t.activeTab.set("local")})("keydown.space",function(c){return y(n),c.preventDefault(),x(t.activeTab.set("local"))}),m(14," Local Favour "),s(),o(15,"button",12),_("click",function(){return t.activeTab.set("global")})("keydown.enter",function(){return t.activeTab.set("global")})("keydown.space",function(c){return y(n),c.preventDefault(),x(t.activeTab.set("global"))}),m(16," Global Blessings "),s()(),M(17,kn,17,17,"div",13),M(18,wn,20,7,"div",14),s()(),o(19,"div",15)(20,"div",16),g(21,"div",17),M(22,Mn,1,2,"img",18),s()()()(),H(23,Sn,9,4,"ng-template",null,0,we)(25,On,9,3,"ng-template",null,1,we)}e&2&&(p("id","patron-"+t.patron().uid),h("aria-label",t.patron().title+" Details"),l(6),I(t.patron().icon_url?6:-1),l(3),O(t.patron().title),l(2),O(t.patron().description),l(),h("aria-label",t.patron().title+" attributes"),l(),T("tab-active",t.activeTab()==="local"),h("aria-selected",t.activeTab()==="local")("aria-controls","local-tab-"+t.patron().uid),l(2),T("tab-active",t.activeTab()==="global"),h("aria-selected",t.activeTab()==="global")("aria-controls","global-tab-"+t.patron().uid),l(2),I(t.activeTab()==="local"?17:-1),l(),I(t.activeTab()==="global"?18:-1),l(4),I(t.patron().portraits.big?22:-1))},dependencies:[ot,lt,st],styles:['.deity-monument-container[_ngcontent-%COMP%]{--card-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--card-text: var(--background-color);--card-text-muted: color-mix(in srgb, var(--background-color), var(--secondary-color) 25%);--card-title-color: var(--background-accent-color);--card-subtitle-color: var(--background-accent-color);--box-bg: color-mix(in srgb, var(--primary-color), black 50%);--box-border: color-mix(in srgb, var(--card-text), transparent 90%);--input-bg: color-mix(in srgb, var(--primary-color), black 50%);--milestone-bg: color-mix(in srgb, var(--primary-color), black 20%);--shadow-color: color-mix(in srgb, black, transparent 60%);--vignette-gradient: radial-gradient(circle, rgba(95, 3, 46, .4) 0%, rgba(0, 0, 0, .85) 80%);--tab-border: color-mix(in srgb, var(--primary-color), transparent 40%);--tab-border-active: var(--background-color);--chip-bg: color-mix(in srgb, var(--primary-color), var(--secondary-color) 40%);--chip-border: color-mix(in srgb, var(--primary-color), black 15%);--chip-text: color-mix(in srgb, var(--background-color), transparent 10%);--timeline-node-bg: var(--primary-color);--timeline-node-border: var(--background-accent-color);--timeline-track-bg: color-mix(in srgb, var(--card-text), transparent 85%);--timeline-node-uncompleted-bg: var(--secondary-color);--timeline-node-uncompleted-border: color-mix(in srgb, var(--background-color), var(--secondary-color) 60%);--timeline-node-completed-bg: var(--background-accent-color);--icon-mask-color: var(--background-color);--tab-container-border: color-mix(in srgb, var(--background-color), transparent 80%);--section-divider: rgba(235, 210, 184, .22);--modifier-badge-bg: color-mix(in srgb, var(--primary-color), transparent 80%);--modifier-badge-border: color-mix(in srgb, var(--primary-color), transparent 40%);--modifier-badge-label: color-mix(in srgb, var(--background-color), transparent 10%);--modifier-badge-val: #ffcc00}.light-mode[_nghost-%COMP%]   .deity-monument-container[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .deity-monument-container[_ngcontent-%COMP%]{--card-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--card-text: var(--text-color);--card-text-muted: color-mix(in srgb, var(--text-color), var(--background-color) 30%);--card-title-color: var(--primary-color);--card-subtitle-color: color-mix(in srgb, var(--primary-color), var(--background-color) 20%);--box-bg: color-mix(in srgb, var(--card-bg), black 4%);--box-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 85%);--input-bg: color-mix(in srgb, var(--card-bg), black 8%);--milestone-bg: color-mix(in srgb, var(--card-bg), black 5%);--shadow-color: rgba(95, 3, 46, .12);--vignette-gradient: radial-gradient( circle, transparent 25%, color-mix(in srgb, var(--background-accent-color), black 15%) 100% );--tab-border: color-mix(in srgb, var(--secondary-color), transparent 90%);--tab-border-active: var(--primary-color);--chip-bg: color-mix(in srgb, var(--primary-color), var(--card-bg) 90%);--chip-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 50%);--chip-text: var(--text-color);--timeline-node-bg: var(--text-color);--timeline-node-border: color-mix(in srgb, var(--text-color), transparent 50%);--timeline-track-bg: color-mix(in srgb, var(--primary-color), transparent 82%);--timeline-node-uncompleted-bg: color-mix(in srgb, var(--card-bg), black 3%);--timeline-node-uncompleted-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 60%);--timeline-node-completed-bg: var(--primary-color);--icon-mask-color: var(--primary-color);--tab-container-border: color-mix(in srgb, var(--text-color), var(--card-bg) 80%);--section-divider: color-mix(in srgb, var(--text-color), var(--card-bg) 75%);--modifier-badge-bg: color-mix(in srgb, var(--primary-color), var(--card-bg) 90%);--modifier-badge-border: color-mix(in srgb, var(--primary-color), var(--card-bg) 65%);--modifier-badge-label: color-mix(in srgb, var(--text-color), var(--card-bg) 20%);--modifier-badge-val: var(--primary-color)}.deity-monument-container[_ngcontent-%COMP%]{position:relative;background-color:var(--card-bg);color:var(--card-text);border-radius:6px;margin-bottom:1rem;overflow:hidden;box-shadow:0 4px 12px var(--shadow-color);transition:background-color .3s ease,color .3s ease,box-shadow .3s ease}.roman-border-frame[_ngcontent-%COMP%]{position:absolute;inset:12px;border:1px solid color-mix(in srgb,var(--card-text),transparent 85%);pointer-events:none;border-radius:4px;z-index:2}.roman-border-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:4px;border:1px solid color-mix(in srgb,var(--card-text),transparent 95%);border-radius:2px}.deity-title[_ngcontent-%COMP%]{font-size:2.25rem;color:var(--card-title-color);font-weight:700;margin:0;letter-spacing:.05em;text-shadow:0 2px 4px rgba(0,0,0,.15)}.deity-icon-brand[_ngcontent-%COMP%]{background-color:var(--icon-mask-color);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;transition:background-color .3s ease}.deity-desc-long[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.95rem;line-height:1.6;color:color-mix(in srgb,var(--card-text),transparent 15%);margin-bottom:2rem}[role=tablist][_ngcontent-%COMP%]{border-color:var(--tab-container-border)!important}.tab-btn[_ngcontent-%COMP%]{font-family:var(--font-primary);text-transform:uppercase;font-size:.85rem;letter-spacing:.08em;color:color-mix(in srgb,var(--card-text),transparent 50%);padding:.5rem 1rem;background:none;border:2px solid var(--tab-border);cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover, .tab-btn[_ngcontent-%COMP%]:focus{color:var(--card-text);outline:none}.tab-active[_ngcontent-%COMP%]{color:var(--card-text);border:2px solid var(--tab-border-active);font-weight:600}.milestone-box[_ngcontent-%COMP%]{background:var(--milestone-bg);border-left:3px solid var(--primary-color);padding:1rem;border-radius:0 4px 4px 0}.milestone-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.1rem;font-weight:700;color:var(--card-title-color);letter-spacing:.03em}.milestone-badge[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;color:var(--card-subtitle-color)}.milestone-desc[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.85rem;margin:.5rem 0 0;color:var(--card-text-muted)}.progression-timeline[_ngcontent-%COMP%]{position:relative;height:6px;margin-bottom:2.5rem}.timeline-track[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background:var(--timeline-track-bg);border-radius:3px}.timeline-bar-filled[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,var(--accent-color),#ffcc00);border-radius:3px;transition:width .4s ease;box-shadow:0 0 8px color-mix(in srgb,var(--accent-color),transparent 30%)}.timeline-points[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0}.timeline-node[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:var(--timeline-node-uncompleted-bg);border:2px solid var(--timeline-node-uncompleted-border);cursor:pointer;transition:all .2s ease;z-index:3;padding:0}.timeline-node[_ngcontent-%COMP%]:hover, .timeline-node[_ngcontent-%COMP%]:focus{transform:translate(-50%,-50%) scale(1.3);background:var(--card-text);outline:none}.node-completed[_ngcontent-%COMP%]{background:var(--timeline-node-completed-bg);border-color:var(--timeline-node-completed-bg)}.node-active[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(1.4);background:#fc0!important;border-color:var(--card-text)!important;box-shadow:0 0 15px #fc0c}.node-tooltip[_ngcontent-%COMP%]{position:absolute;bottom:22px;left:50%;transform:translate(-50%) scale(.85);background:#000000e6;color:#ebd2b8;font-size:.65rem;padding:2px 6px;border-radius:3px;white-space:nowrap;opacity:0;transition:all .2s ease;pointer-events:none;font-family:var(--font-secondary)}.timeline-node[_ngcontent-%COMP%]:hover   .node-tooltip[_ngcontent-%COMP%], .timeline-node[_ngcontent-%COMP%]:focus   .node-tooltip[_ngcontent-%COMP%], .node-active[_ngcontent-%COMP%]   .node-tooltip[_ngcontent-%COMP%]{opacity:1;transform:translate(-50%) scale(1)}.devotion-selector-card[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--card-text),transparent 95%);border:1px solid color-mix(in srgb,var(--card-text),transparent 90%);padding:.75rem 1rem;border-radius:4px}.devotion-label[_ngcontent-%COMP%]{display:block;font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;color:color-mix(in srgb,var(--card-text),transparent 20%)}.devotion-value-input[_ngcontent-%COMP%]{background:var(--input-bg);border:1px solid color-mix(in srgb,var(--card-text),transparent 80%);color:var(--card-text);font-family:var(--font-primary);font-size:.9rem;padding:.25rem .5rem;width:100px;border-radius:3px;text-align:center;appearance:textfield;-moz-appearance:textfield}.devotion-value-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .devotion-value-input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.devotion-value-input[_ngcontent-%COMP%]:focus{outline:1px solid var(--accent-color);border-color:var(--accent-color)}.roman-range[_ngcontent-%COMP%]{flex:1;accent-color:var(--primary-color);height:4px;border-radius:2px;cursor:pointer}.sub-section-title[_ngcontent-%COMP%]{font-size:1rem;text-transform:uppercase;letter-spacing:.1em;color:var(--card-subtitle-color);border-bottom:1px solid color-mix(in srgb,var(--card-text),transparent 85%);padding-bottom:4px}.chain-box[_ngcontent-%COMP%]{background:var(--box-bg);border:1px solid var(--box-border);padding:.75rem;border-radius:4px}.chain-label[_ngcontent-%COMP%]{display:block;font-family:var(--font-primary);font-size:.95rem;color:var(--card-text)}.building-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;font-size:.75rem;letter-spacing:.6px;padding:1px 6px;background:var(--chip-bg);border:1px solid var(--chip-border);color:var(--chip-text);border-radius:2px;transition:background-color .2s ease,color .2s ease}.building-chip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:drop-shadow(0 1px 1px color-mix(in srgb,black,transparent 50%))}.blessing-card[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--card-text),transparent 97%);border-left:3px solid color-mix(in srgb,var(--card-text),transparent 80%);padding:1rem;border-radius:0 4px 4px 0}.card-gold[_ngcontent-%COMP%]{border-left-color:#cca300}.card-silver[_ngcontent-%COMP%]{border-left-color:#ccc}.card-bronze[_ngcontent-%COMP%]{border-left-color:#cd7f32}.blessing-badge[_ngcontent-%COMP%]{font-family:var(--font-secondary);display:inline-block;font-size:.65rem;text-transform:uppercase;letter-spacing:.12em;color:var(--card-subtitle-color);margin-bottom:4px}.blessing-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.15rem;letter-spacing:.12rem;font-weight:700;color:var(--card-text);margin:0 0 .25rem}.blessing-desc[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.85rem;color:color-mix(in srgb,var(--card-text),transparent 20%);margin:0}.passive-secondary-bar[_ngcontent-%COMP%]{border-top:1px solid var(--section-divider)!important;padding-top:1rem;margin-top:1.5rem}.passive-secondary-bar[_ngcontent-%COMP%]   .roman-meta-badge[_ngcontent-%COMP%]{font-size:.65rem;text-transform:uppercase;letter-spacing:.08em;color:var(--card-subtitle-color)}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-title[_ngcontent-%COMP%]{font-family:var(--font-primary);font-size:1.05rem;color:var(--card-text);margin:.1rem 0 .2rem}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-desc[_ngcontent-%COMP%]{font-family:var(--font-secondary);font-size:.82rem;line-height:1.5;color:var(--card-text-muted);margin:0}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-modifier[_ngcontent-%COMP%]{background-color:var(--modifier-badge-bg)!important;border:1px solid var(--modifier-badge-border)!important;width:200px}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-modifier[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:var(--modifier-badge-label)!important}.passive-secondary-bar[_ngcontent-%COMP%]   .passive-modifier[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{color:var(--modifier-badge-val)!important}.portrait-vignette-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;max-width:440px;aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:4px;box-shadow:inset 0 0 50px #000000b3;border:1px solid color-mix(in srgb,var(--card-text),transparent 92%)}.vignette-glow-radial[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}.portrait-artwork[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center top;position:relative;z-index:0;transform:scale(1.02);transition:transform .5s ease}.portrait-artwork[_ngcontent-%COMP%]:hover{transform:scale(1.05)}'],changeDetection:0})};var ge=class a{http=d(ct);_patrons=k([]);_loading=k(!1);_error=k(null);patrons=this._patrons.asReadonly();isLoading=this._loading.asReadonly();error=this._error.asReadonly();fetchPatrons(i="en"){return this._loading.set(!0),this._error.set(null),this.http.get(`assets/data/patrons_${i}.json`).pipe(Ve(e=>this.mapToViewModel(e)),Ze(e=>{this._patrons.set(e)}),We(e=>(this._error.set("Could not retrieve deities database."),console.error("Patrons Service Error: ",e),X([]))),Ge(()=>this._loading.set(!1))).subscribe()}mapToViewModel(i){return Object.entries(i).map(([e,t])=>{let n=t.local_effects.map(r=>{let c={},C=new Set;return Object.entries(r.affected_chains).forEach(([u,N])=>{let Q=N.text.trim().toLowerCase();if(C.has(Q))return;C.add(Q);let Fe=new Set,At=N.production_assets.filter(Nt=>{let ze=Nt.text.trim().toLowerCase();return Fe.has(ze)?!1:(Fe.add(ze),!0)});c[u]=q(W({},N),{production_assets:At})}),q(W({},r),{affected_chains:c})});return q(W({},t),{id:e,local_effects:n,slug:t.title.toLowerCase().replace(/\s+/g,"-")})})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=Ke({token:a,factory:a.\u0275fac,providedIn:"root"})};var Rn=(a,i)=>i.uid;function Ln(a,i){a&1&&(o(0,"div",8),g(1,"div",11),o(2,"span",12),m(3," Loading Oracle Records... "),s()())}function Bn(a,i){if(a&1){let e=R();o(0,"div",9)(1,"h3",13),m(2,"Oracle Disconnected"),s(),o(3,"p",14),m(4),s(),o(5,"button",15),_("click",function(){y(e);let n=b();return x(n.loadData())}),m(6," Retry Invocation "),s()()}if(a&2){let e=b();l(4),w(" ",e.service.error()," ")}}function An(a,i){if(a&1&&g(0,"div",23),a&2){let e=b(2).$implicit;A("mask-image","url("+e.icon_url+")")("-webkit-mask-image","url("+e.icon_url+")"),h("aria-label",e.title+" Tab Icon")}}function Nn(a,i){if(a&1&&(o(0,"div",20),M(1,An,1,5,"div",21),o(2,"span",22),m(3),s()()),a&2){let e=b().$implicit;l(),I(e.icon_url?1:-1),l(2),O(e.title)}}function Fn(a,i){if(a&1&&(o(0,"mat-tab"),H(1,Nn,4,2,"ng-template",17),o(2,"div",18),g(3,"anno-deity-card",19),s()()),a&2){let e=i.$implicit;l(3),p("patron",e)}}function zn(a,i){if(a&1){let e=R();o(0,"mat-tab-group",16),_("selectedIndexChange",function(n){y(e);let r=b();return x(r.onTabChange(n))}),S(1,Fn,4,1,"mat-tab",null,Rn),s()}if(a&2){let e=b();p("selectedIndex",e.activeTabIndex()),l(),E(e.service.patrons())}}var Bt=class a{service=d(ge);router=d(mt);route=d(dt);activeTabIndex=k(0);fragment=wt(this.route.fragment);constructor(){fe(()=>{let i=this.fragment();if(i){let e=this.service.patrons().findIndex(t=>this.slugify(t.title)===i);e!==-1&&this.activeTabIndex.set(e)}})}ngOnInit(){this.loadData()}loadData(){this.service.fetchPatrons()}onTabChange(i){let e=this.service.patrons()[i];e&&this.router.navigate([],{fragment:this.slugify(e.title),replaceUrl:!0})}slugify(i){return i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=L({type:a,selectors:[["anno-patrons-page"]],decls:13,vars:1,consts:[[1,"patrons-workspace","min-h-screen","pb-16"],[1,"relative","pt-16","pb-4","text-center"],[1,"absolute","inset-0","pattern-overlay","opacity-5"],[1,"text-center","z-10","px-4"],[1,"page-main-title","select-none"],[1,"page-main-subtitle","mx-auto"],[1,"max-w-7xl","mx-auto","px-4","md:px-8","mt-8"],[1,"xl:col-span-9","space-y-12"],[1,"flex","flex-col","items-center","justify-center","py-20","space-y-4"],[1,"error-panel","p-8","text-center","rounded"],[1,"patron-tabs",3,"selectedIndex"],[1,"roman-loader","animate-spin"],[1,"font-roman","loader-text","tracking-widest","text-sm","uppercase"],[1,"font-roman","mb-2","text-error-title"],[1,"text-sm","opacity-80","mb-4","text-error-desc"],[1,"btn-classic",3,"click"],[1,"patron-tabs",3,"selectedIndexChange","selectedIndex"],["mat-tab-label",""],[1,"mt-8"],[3,"patron"],[1,"flex","items-center","gap-2"],["role","img",1,"w-5","h-5","patron-tab-icon",3,"mask-image","-webkit-mask-image"],[1,"hidden","md:inline"],["role","img",1,"w-5","h-5","patron-tab-icon"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1),g(2,"div",2),o(3,"div",3)(4,"h1",4),m(5,"Patrons"),s(),o(6,"p",5),m(7," Sacrifice devotion to gain powerful blessings from Roman and Celtic patrons. Under Neptune's waves, Ceres' grain fields, or Mars' iron blades, lead Albion and Latium to divine glory. "),s()()(),o(8,"div",6)(9,"div",7),M(10,Ln,4,0,"div",8)(11,Bn,7,1,"div",9)(12,zn,3,1,"mat-tab-group",10),s()()()),e&2&&(l(10),I(t.service.isLoading()?10:t.service.error()?11:12))},dependencies:[ue,Rt,Ae,Ne,Ot],styles:[".patrons-workspace[_ngcontent-%COMP%]{--workspace-bg: var(--background-color);--title-color: var(--primary-color);--subtitle-color: var(--text-color);--tab-header-bg: color-mix(in srgb, var(--secondary-color), var(--primary-color) 40%);--tab-text-color: rgba(235, 210, 184, .6);--tab-text-active: var(--background-color);--tab-underline: var(--accent-color);--loader-color: var(--primary-color);--error-bg: rgba(95, 3, 46, .1);--error-border: rgba(95, 3, 46, .3);--error-text: #ff6b6b}.light-mode[_nghost-%COMP%]   .patrons-workspace[_ngcontent-%COMP%], .light-mode   [_nghost-%COMP%]   .patrons-workspace[_ngcontent-%COMP%]{--workspace-bg: var(--background-color);--title-color: var(--primary-color);--subtitle-color: var(--text-color);--tab-header-bg: color-mix(in srgb, var(--background-color), var(--background-accent-color) 60%);--tab-text-color: color-mix(in srgb, var(--text-color), transparent 35%);--tab-text-active: var(--primary-color);--tab-underline: var(--primary-color);--loader-color: var(--primary-color);--error-bg: color-mix(in srgb, var(--primary-color), transparent 92%);--error-border: color-mix(in srgb, var(--primary-color), transparent 80%);--error-text: var(--primary-color)}.patrons-workspace[_ngcontent-%COMP%]{background-color:var(--workspace-bg);transition:background-color .3s ease}.patrons-workspace[_ngcontent-%COMP%]   .page-main-title[_ngcontent-%COMP%]{color:var(--title-color);transition:color .3s ease}.patrons-workspace[_ngcontent-%COMP%]   .page-main-subtitle[_ngcontent-%COMP%]{color:var(--subtitle-color);transition:color .3s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header-pagination-chevron{border-color:var(--tab-text-color)!important}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-label-container{border-width:0!important}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-header{background-color:var(--tab-header-bg)!important;border-radius:4px 4px 0 0;transition:background-color .3s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab{font-family:var(--font-primary);text-transform:uppercase;transition:opacity .2s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label{color:var(--tab-text-color)!important;font-weight:600;transition:color .2s ease}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab--active{opacity:1}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--tab-text-active)!important;font-weight:700}.patron-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-indicator__content--underline{border-color:var(--tab-underline)!important;border-top-width:4px!important;transition:border-color .3s ease}.patron-tab-icon[_ngcontent-%COMP%]{background-color:currentColor;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;transition:background-color .2s ease}.roman-loader[_ngcontent-%COMP%]{width:48px;height:48px;border:4px solid var(--loader-color);border-bottom-color:transparent;border-radius:50%;transition:border-color .3s ease}.loader-text[_ngcontent-%COMP%]{color:var(--loader-color);transition:color .3s ease}.error-panel[_ngcontent-%COMP%]{background-color:var(--error-bg);border:1px solid var(--error-border);transition:background-color .3s ease,border-color .3s ease}.error-panel[_ngcontent-%COMP%]   .text-error-title[_ngcontent-%COMP%]{color:var(--error-text)}.btn-classic[_ngcontent-%COMP%]{background-color:var(--loader-color);color:var(--workspace-bg);border:none;padding:.5rem 1.5rem;border-radius:2px;font-family:var(--font-primary);font-size:.8rem;text-transform:uppercase;cursor:pointer;letter-spacing:.05em;transition:background-color .2s,color .2s}.btn-classic[_ngcontent-%COMP%]:hover{background-color:var(--tab-header-bg);color:var(--tab-text-active)}"],changeDetection:0})};export{Bt as PatronsPageComponent};
