"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8362],{8362:(_,d,s)=>{s.r(d),s.d(d,{HomePageModule:()=>k});var m=s(6895),u=s(433),i=s(29),c=s(2001),g=s(655),e=s(4650);const p=["templateList"],f=function(o){return[o]},h=function(){return[]};function P(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-col",4,5)(2,"ion-item",6),e.NdJ("click",function(){const l=e.CHM(t).$implicit,C=e.oxw();return e.KtG(C.onScreenClick(l))}),e._UZ(3,"ion-img",7)(4,"ion-ripple-effect"),e.qZA()()}if(2&o){const t=a.$implicit,n=e.oxw();e.Q6J("size",n.multiple?6:12),e.xp6(2),e.Q6J("routerLink",t.screenPath?e.VKq(3,f,t.screenPath):e.DdM(5,h)),e.xp6(1),e.Q6J("src",t.background)}}const y=[{path:"",component:(()=>{class o{constructor(t,n,r){this.toastController=t,this.animationCtrl=n,this.platform=r,this.templates=[{id:"course-rive",background:"assets/course_rive/course_rive.png",screenPath:"/course-rive"},{id:"hotel-booking",background:"assets/hotel/hotel_booking.png",screenPath:void 0},{id:"fitness-app",background:"assets/fitness_app/fitness_app.png",screenPath:void 0},{id:"design-course",background:"assets/design_course/design_course.png",screenPath:void 0}],this.multiple=!0}ngAfterViewInit(){setTimeout(()=>this.initListAnimation(),this.platform.is("android")?500:0)}initListAnimation(){var t;const n=null===(t=this.templateListRef)||void 0===t?void 0:t.toArray();for(let r=0;r<n.length;r++){const l=n[r].nativeElement;this.animationCtrl.create().addElement(l).duration(1e3).delay(r*(1e3/3)).easing("cubic-bezier(0.4, 0.0, 0.2, 1.0)").fromTo("transform","translateY(50px)","translateY(0px)").fromTo("opacity","0","1").play()}}onScreenClick(t){return(0,g.mG)(this,void 0,void 0,function*(){t.screenPath||(yield this.toastController.create({message:"Coming soon...",duration:2e3})).present()})}listKeyExtractor(t,n){return n.id}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.yF),e.Y36(i.vB),e.Y36(i.t4))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(t,n){if(1&t&&e.Gf(p,5,e.SBq),2&t){let r;e.iGM(r=e.CRH())&&(n.templateListRef=r)}},decls:12,vars:3,consts:[[1,"ion-no-border"],["slot","end",3,"click"],["slot","icon-only",1,"material-icons","darkgrey"],["style","opacity: 0",3,"size",4,"ngFor","ngForOf","ngForTrackBy"],[2,"opacity","0",3,"size"],["templateList",""],["lines","none","detail","false",1,"ion-no-padding","ion-activatable",3,"routerLink","click"],[3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Ionic UI"),e.qZA(),e.TgZ(4,"ion-buttons",1),e.NdJ("click",function(){return n.multiple=!n.multiple}),e.TgZ(5,"ion-button")(6,"i",2),e._uU(7),e.qZA()()()()(),e.TgZ(8,"ion-content")(9,"ion-grid")(10,"ion-row"),e.YNc(11,P,5,6,"ion-col",3),e.qZA()()()),2&t&&(e.xp6(7),e.hij(" ",n.multiple?"dashboard":"view_agenda"," "),e.xp6(4),e.Q6J("ngForOf",n.templates)("ngForTrackBy",n.listKeyExtractor))},dependencies:[m.sg,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.Xz,i.Ie,i.H$,i.Nd,i.wd,i.sr,i.YI,c.rH],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: white}@media (prefers-color-scheme: dark){ion-toolbar[_ngcontent-%COMP%]{--background: var(--ion-background-color)}}.md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--padding-top: var(--status-bar-height)}ion-title[_ngcontent-%COMP%]{font-size:22px;font-family:WorkSans-Bold;color:var(--color-darkText)}ion-title.md[_ngcontent-%COMP%]{text-align:center;margin-left:48px}ion-item[_ngcontent-%COMP%]{--padding-end: 0px;--inner-padding-end: 0px;--border-radius: 4px}ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{aspect-ratio:1.5;object-fit:cover}.material-icons.darkgrey[_ngcontent-%COMP%]{color:var(--color-darkgrey)}"]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(y),c.Bz]}),o})(),k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,u.u5,i.Pc,v]}),o})()}}]);