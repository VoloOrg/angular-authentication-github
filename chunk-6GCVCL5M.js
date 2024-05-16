import{F as X,b as Y,e as Q,f as Z,g as J,h as d,x as p}from"./chunk-S7QZYCKR.js";import{$,A as x,Aa as q,Ba as H,Ca as B,Da as K,I as E,K as u,L as h,M as f,O as M,Q as A,T as N,Y as L,Ya as z,Z as V,a as m,e as R,f as T,l,m as g,p as F,q as y,r as b,ra as G,s as j,u as O,v as w,va as U,w as P,y as k,z as S}from"./chunk-TQEPK4JF.js";var ut={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},_="__@ngrx/effects_create__";function Jt(t,e={}){let s=e.functional?t:t(),n=m(m({},ut),e);return Object.defineProperty(s,_,{value:n}),s}function lt(t){return Object.getOwnPropertyNames(t).filter(n=>t[n]&&t[n].hasOwnProperty(_)?t[n][_].hasOwnProperty("dispatch"):!1).map(n=>{let r=t[n][_];return m({propertyName:n},r)})}function ht(t){return lt(t)}function W(t){return Object.getPrototypeOf(t)}function dt(t){return!!t.constructor&&t.constructor.name!=="Object"&&t.constructor.name!=="Function"}function tt(t){return typeof t=="function"}function pt(t){return t.filter(tt)}function mt(t,e,s){let n=W(t),o=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,i=ht(t).map(({propertyName:a,dispatch:ot,useEffectsErrorHandler:ct})=>{let C=typeof t[a]=="function"?t[a]():t[a],I=ct?s(C,e):C;return ot===!1?I.pipe(w()):I.pipe(x()).pipe(l(ft=>({effect:t[a],notification:ft,propertyName:a,sourceName:o,sourceInstance:t})))});return F(...i)}var yt=10;function et(t,e,s=yt){return t.pipe(j(n=>(e&&e.handleError(n),s<=1?t:et(t,e,s-1))))}var nt=(()=>{let e=class e extends R{constructor(n){super(),n&&(this.source=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}};e.\u0275fac=function(r){return new(r||e)(h(J))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function v(...t){return y(e=>t.some(s=>typeof s=="string"?s===e.type:s.type===e.type))}var Xt=new u("@ngrx/effects Internal Root Guard"),Wt=new u("@ngrx/effects User Provided Effects"),te=new u("@ngrx/effects Internal Root Effects"),ee=new u("@ngrx/effects Internal Root Effects Instances"),ne=new u("@ngrx/effects Internal Feature Effects"),se=new u("@ngrx/effects Internal Feature Effects Instance Groups"),Et=new u("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>et}),_t="@ngrx/effects/init",gt=Y(_t);function Ft(t,e){if(t.notification.kind==="N"){let s=t.notification.value;!St(s)&&e.handleError(new Error(`Effect ${vt(t)} dispatched an invalid action: ${Dt(s)}`))}}function St(t){return typeof t!="function"&&t&&t.type&&typeof t.type=="string"}function vt({propertyName:t,sourceInstance:e,sourceName:s}){let n=typeof e[t]=="function";return!!s?`"${s}.${String(t)}${n?"()":""}"`:`"${String(t)}()"`}function Dt(t){try{return JSON.stringify(t)}catch{return t}}var Ct="ngrxOnIdentifyEffects";function It(t){return D(t,Ct)}var Rt="ngrxOnRunEffects";function Tt(t){return D(t,Rt)}var bt="ngrxOnInitEffects";function jt(t){return D(t,bt)}function D(t,e){return t&&e in t&&typeof t[e]=="function"}var st=(()=>{let e=class e extends T{constructor(n,r){super(),this.errorHandler=n,this.effectsErrorHandler=r}addEffects(n){this.next(n)}toActions(){return this.pipe(S(n=>dt(n)?W(n):n),g(n=>n.pipe(S(Ot))),g(n=>{let r=n.pipe(k(i=>wt(this.errorHandler,this.effectsErrorHandler)(i)),l(i=>(Ft(i,this.errorHandler),i.notification)),y(i=>i.kind==="N"&&i.value!=null),P()),o=n.pipe(O(1),y(jt),l(i=>i.ngrxOnInitEffects()));return F(r,o)}))}};e.\u0275fac=function(r){return new(r||e)(h($),h(Et))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ot(t){return It(t)?t.ngrxOnIdentifyEffects():""}function wt(t,e){return s=>{let n=mt(s,t,e);return Tt(s)?s.ngrxOnRunEffects(n):n}}var Pt=(()=>{let e=class e{get isStarted(){return!!this.effectsSubscription}constructor(n,r){this.effectSources=n,this.store=r,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};e.\u0275fac=function(r){return new(r||e)(h(st),h(d))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function re(...t){let e=t.flat(),s=pt(e);return N([s,{provide:M,multi:!0,useValue:()=>{f(Q),f(Z,{optional:!0});let n=f(Pt),r=f(st),o=!n.isStarted;o&&n.start();for(let i of e){let a=tt(i)?f(i):i;r.addEffects(a)}o&&f(d).dispatch(gt())}}])}function he(t){let e=f(d),s=f(nt),n={email:t.queryParams.email,token:t.queryParams.token,type:t.queryParams.type};return e.dispatch(p.checkTokenValidation({data:n})),b(s.pipe(v(p.checkTokenValidationSuccess)),s.pipe(v(p.checkTokenValidationError))).pipe(l(r=>r.type===p.checkTokenValidationSuccess.type?!!r.data:!1))}var c=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(c||{}),pe="*";function me(t,e){return{type:c.Trigger,name:t,definitions:e,options:{}}}function ye(t,e=null){return{type:c.Animate,styles:e,timings:t}}function Ee(t,e=null){return{type:c.Sequence,steps:t,options:e}}function _e(t){return{type:c.Style,styles:t,offset:null}}function ge(t,e,s){return{type:c.State,name:t,styles:e,options:s}}function Fe(t,e,s=null){return{type:c.Transition,expr:t,animation:e,options:s}}function Se(t,e=null){return{type:c.Reference,animation:t,options:e}}function ve(t=null){return{type:c.AnimateChild,options:t}}function De(t,e=null){return{type:c.AnimateRef,animation:t,options:e}}function Ce(t,e,s=null){return{type:c.Query,selector:t,animation:e,options:s}}var rt=class{constructor(e=0,s=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+s}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let s=e=="start"?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}},it=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let s=0,n=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(i=>{i.onDone(()=>{++s==o&&this._onFinish()}),i.onDestroy(()=>{++n==o&&this._onDestroy()}),i.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((i,a)=>Math.max(i,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let s=e*this.totalTime;this.players.forEach(n=>{let r=n.totalTime?Math.min(1,s/n.totalTime):1;n.setPosition(r)})}getPosition(){let e=this.players.reduce((s,n)=>s===null||n.totalTime>s.totalTime?n:s,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let s=e=="start"?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}},Ie="!";var be=(()=>{class t extends X{static \u0275fac=(()=>{let s;return function(r){return(s||(s=V(t)))(r||t)}})();static \u0275cmp=A({type:t,selectors:[["TimesIcon"]],standalone:!0,features:[G,z],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,r){n&1&&(L(),H(0,"svg",0),K(1,"path",1),B()),n&2&&(q(r.getClassNames()),U("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return t})();export{c as a,pe as b,me as c,ye as d,Ee as e,_e as f,ge as g,Fe as h,Se as i,ve as j,De as k,Ce as l,rt as m,it as n,Ie as o,Jt as p,nt as q,v as r,re as s,he as t,be as u};
