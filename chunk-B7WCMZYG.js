import{c as k}from"./chunk-ZKQAVGXU.js";import{b as x,c as l,e as C,f as S,g as y,h as s,i as P,j as F,k as D,l as I,o as N,p as E,q as T,r as _,s as B,t as U,u as V}from"./chunk-3OJJ36S6.js";import"./chunk-6GCVCL5M.js";import"./chunk-NEYJV3DM.js";import{C as g,h,y as b}from"./chunk-S7QZYCKR.js";import{Ba as t,Ca as o,Da as a,Ia as u,M as p,Nb as v,Q as d,Ra as m,Ya as c,Za as A,ia as G,wa as w,za as R}from"./chunk-TQEPK4JF.js";var q=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=d({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[c],decls:2,vars:0,template:function(r,i){r&1&&(t(0,"p"),m(1,` dashboard works!
`),o())},changeDetection:0});let n=e;return n})();var L=(()=>{let e=class e{constructor(){this.store=p(h),this.router=p(v),this.changePasswordForm=new y({currentPassword:new s("",{validators:[l.required]}),newPassword:new s("",{validators:[l.required]}),confirmPassword:new s("",{validators:[l.required]})},{validators:[V("newPassword","confirmPassword")]})}onCancel(){this.router.navigate(["/"])}onUpdatePassword(){this.changePasswordForm.valid&&this.store.dispatch(b.changePassword({data:this.changePasswordForm.value}))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=d({type:e,selectors:[["app-change-password"]],standalone:!0,features:[c],decls:20,vars:1,consts:[[1,"px-5","flex","justify-content-center","align-items-center","mt-8",3,"ngSubmit","formGroup"],[1,"border-1","surface-border","surface-card","border-round","py-7","px-4","md:px-7","z-1"],[1,"mb-4"],[1,"text-900","text-xl","font-bold","mb-2"],[1,"text-600","font-medium"],[1,"flex","flex-column","mb-4"],[1,"p-input-icon-left","w-full","mb-4"],[1,"pi","pi-lock"],["id","password","type","password","pInputText","","placeholder","Old Password","formControlName","currentPassword",1,"w-full","md:w-25rem"],["id","password","type","password","pInputText","","placeholder","New Password","formControlName","newPassword",1,"w-full","md:w-25rem"],["id","password","type","password","pInputText","","placeholder","Confirm Password","formControlName","confirmPassword",1,"w-full","md:w-25rem"],[1,"flex","flex-wrap","gap-2","justify-content-between"],["pButton","","pRipple","","label","Cancel","type","button",1,"flex-auto","p-button-outlined",3,"click"],["pButton","","pRipple","","label","Update Password","type","submit",1,""]],template:function(r,i){r&1&&(t(0,"form",0),u("ngSubmit",function(){return i.onUpdatePassword()}),t(1,"div",1)(2,"div",2)(3,"div",3),m(4,"Change Password"),o(),t(5,"span",4),m(6,"Please enter your details"),o()(),t(7,"div",5)(8,"span",6),a(9,"i",7)(10,"input",8),o(),t(11,"span",6),a(12,"i",7)(13,"input",9),o(),t(14,"span",6),a(15,"i",7)(16,"input",10),o()(),t(17,"div",11)(18,"button",12),u("click",function(){return i.onCancel()}),o(),a(19,"button",13),o()()()),r&2&&w("formGroup",i.changePasswordForm)},dependencies:[E,N,_,T,I,P,x,C,S,F,D],changeDetection:0});let n=e;return n})();var K=()=>({width:"100%"}),z=(()=>{let e=class e{constructor(){this.store=p(h),this.router=p(v),this.roles=[{label:"Admin",value:g.Admin},{label:"General",value:g.General},{label:"Special",value:g.Special}],this.inviteForm=new y({email:new s("",{validators:[l.required,l.email]}),role:new s("",{validators:[l.required]})})}onSendInvitation(){this.inviteForm.valid&&this.store.dispatch(b.inviteUser({data:this.inviteForm.value}))}onCancel(){this.router.navigate(["/"])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=d({type:e,selectors:[["app-invite-user"]],standalone:!0,features:[c],decls:16,vars:5,consts:[[1,"px-5","min-h-screen","flex","justify-content-center","align-items-center",3,"ngSubmit","formGroup"],[1,"border-1","surface-border","surface-card","border-round","py-7","px-4","md:px-7","z-1"],[1,"mb-4"],[1,"text-900","text-xl","font-bold","mb-2"],[1,"text-600","font-medium"],[1,"flex","flex-column"],[1,"p-input-icon-left","w-full","mb-4"],[1,"pi","pi-envelope"],["id","email","type","text","pInputText","","placeholder","Email","formControlName","email",1,"w-full","md:w-25rem"],[1,"w-full","mb-4"],["formControlName","role","placeholder","Select a Role",3,"options"],[1,"flex","flex-wrap","gap-2","justify-content-between"],["pButton","","pRipple","","label","Cancel","type","button",1,"flex-auto","p-button-outlined",3,"click"],["pButton","","pRipple","","label","Send Invitation"]],template:function(r,i){r&1&&(t(0,"form",0),u("ngSubmit",function(){return i.onSendInvitation()}),t(1,"div",1)(2,"div",2)(3,"div",3),m(4,"Invite User"),o(),t(5,"span",4),m(6,"Let's get started"),o()(),t(7,"div",5)(8,"span",6),a(9,"i",7)(10,"input",8),o(),t(11,"span",9),a(12,"p-dropdown",10),o()(),t(13,"div",11)(14,"button",12),u("click",function(){return i.onCancel()}),o(),a(15,"button",13),o()()()),r&2&&(w("formGroup",i.inviteForm),G(12),R(A(4,K)),w("options",i.roles))},dependencies:[_,T,E,N,U,B,I,P,x,C,S,F,D],changeDetection:0});let n=e;return n})();var Q=()=>import("./chunk-CVUCNYAR.js").then(n=>n.PrivateComponent),Ie=[{path:"",loadComponent:Q,children:[{path:"",component:q},{path:"change-password",component:L},{path:"invite-user",component:z,canActivate:[k]}]}];export{Ie as privateRoutes};
