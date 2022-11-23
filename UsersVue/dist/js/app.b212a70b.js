(()=>{"use strict";var e={3864:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727);var l=n(9963),r=n(6252);function u(e,t,n,l,u,a){var o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(o)}const a={name:"App"};var o=n(3744);const s=(0,o.Z)(a,[["render",u]]),i=s;var c=n(2201),d=(n(8309),n(3577)),m=(0,r._)("h1",null,"Users",-1),p={class:"table"},f=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Name"),(0,r._)("th",null,"Age"),(0,r._)("th",null,"City"),(0,r._)("th",null,"Email"),(0,r._)("th")])],-1);function _(e,t,n,l,u,a){var o=(0,r.up)("router-link"),s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s,null,{default:(0,r.w5)((function(){return[m,(0,r._)("p",null,[(0,r.Wm)(o,{to:"Create"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Create New")]})),_:1})]),(0,r._)("table",p,[f,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.users,(function(e){return(0,r.wg)(),(0,r.iD)("tr",null,[(0,r._)("td",null,(0,d.zw)(e.name),1),(0,r._)("td",null,(0,d.zw)(e.age),1),(0,r._)("td",null,(0,d.zw)(e.city),1),(0,r._)("td",null,(0,d.zw)(e.email),1),(0,r._)("td",null,[(0,r.Wm)(o,{to:{name:"Edit",params:{id:e.id}}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Edit")]})),_:2},1032,["to"]),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:{name:"Details",params:{id:e.id}}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Details")]})),_:2},1032,["to"]),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:{name:"Delete",params:{id:e.id}}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Delete")]})),_:2},1032,["to"])])])})),256))])])]})),_:1})}var h=n(196);const v={name:"Users",data:function(){return{users:null,edituser:null}},mounted:function(){var e=this;h.ZP.get("http://localhost:14558/api/Users/").then((function(t){return e.users=t.data}))}},w=(0,o.Z)(v,[["render",_]]),y=w;var g=(0,r._)("h1",null,"Details",-1),b=(0,r._)("h4",null,"User",-1),k=(0,r._)("hr",null,null,-1),U={class:"row"},C=(0,r._)("dt",{class:"col-sm-2"},"Name",-1),D={class:"col-sm-10"},E=(0,r._)("dt",{class:"col-sm-2"},"Age",-1),j={class:"col-sm-10"},z=(0,r._)("dt",{class:"col-sm-2"},"City",-1),O={class:"col-sm-10"},Z=(0,r._)("dt",{class:"col-sm-2"},"Email",-1),V={class:"col-sm-10"};function P(e,t,n,l,u,a){var o=(0,r.up)("router-link"),s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s,null,{default:(0,r.w5)((function(){return[g,(0,r._)("div",null,[b,k,(0,r._)("dl",U,[C,(0,r._)("dd",D,(0,d.zw)(u.user.name),1),E,(0,r._)("dd",j,(0,d.zw)(u.user.age),1),z,(0,r._)("dd",O,(0,d.zw)(u.user.city),1),Z,(0,r._)("dd",V,(0,d.zw)(u.user.email),1)])]),(0,r._)("div",null,["undefined"!==typeof u.user.id?((0,r.wg)(),(0,r.j4)(o,{key:0,to:{name:"Edit",params:{id:u.user.id}}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Edit")]})),_:1},8,["to"])):(0,r.kq)("",!0),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:{name:"Users"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Back to List")]})),_:1})])]})),_:1})}const W={name:"Details",data:function(){return{user:[]}},mounted:function(){var e=this;h.ZP.get("http://localhost:14558/api/Users/"+this.$route.params.id).then((function(t){return e.user=t.data}))}},A=(0,o.Z)(W,[["render",P]]),N=A;var $=(0,r._)("h1",null,"Create",-1),x=(0,r._)("h4",null,"User",-1),B=(0,r._)("hr",null,null,-1),L={class:"row"},T={class:"col-md-4"},q={class:"form-group"},F=(0,r._)("label",{class:"control-label"},"Name",-1),H={class:"form-group"},K=(0,r._)("label",{class:"control-label"},"Age",-1),S={class:"form-group"},Y=(0,r._)("label",{class:"control-label"},"City",-1),G={class:"form-group"},I=(0,r._)("label",{class:"control-label"},"Email",-1),J={class:"form-group"},M=["disabled"];function Q(e,t,n,u,a,o){var s=(0,r.up)("router-link"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((function(){return[$,x,B,(0,r._)("div",L,[(0,r._)("div",T,[(0,r._)("div",q,[F,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user.name=e}),class:"form-control"},null,512),[[l.nr,a.user.name]])]),(0,r._)("div",H,[K,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.user.age=e}),class:"form-control"},null,512),[[l.nr,a.user.age]])]),(0,r._)("div",S,[Y,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.user.city=e}),class:"form-control"},null,512),[[l.nr,a.user.city]])]),(0,r._)("div",G,[I,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.user.email=e}),class:"form-control"},null,512),[[l.nr,a.user.email]])]),(0,r._)("div",J,[(0,r._)("input",{type:"button",value:"Create",onClick:t[4]||(t[4]=function(){return o.onclick&&o.onclick.apply(o,arguments)}),disabled:o.validate(),class:"btn btn-primary"},null,8,M)])])]),(0,r._)("div",null,[(0,r.Wm)(s,{to:{name:"Users"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Back to List")]})),_:1})])]})),_:1})}n(7658);const R={name:"Create",data:function(){return{user:{name:"",age:0,city:"",email:""}}},methods:{onclick:function(){var e=this;h.ZP.post("http://localhost:14558/api/Users/",this.user,{withCredentials:!1}).then((function(){return e.$router.push("/")}))["catch"]((function(e){console.log(e)}))},validate:function(){return""===this.user.name||0===this.user.age||""===this.user.city||""===this.user.email}}},X=(0,o.Z)(R,[["render",Q]]),ee=X;var te=(0,r._)("h1",null,"Edit",-1),ne=(0,r._)("h4",null,"User",-1),le=(0,r._)("hr",null,null,-1),re={class:"row"},ue={class:"col-md-4"},ae={class:"form-group"},oe=(0,r._)("label",{class:"control-label"},"Name",-1),se={class:"form-group"},ie=(0,r._)("label",{class:"control-label"},"Age",-1),ce={class:"form-group"},de=(0,r._)("label",{class:"control-label"},"City",-1),me={class:"form-group"},pe=(0,r._)("label",{class:"control-label"},"Email",-1),fe={class:"form-group"},_e=["disabled"];function he(e,t,n,u,a,o){var s=(0,r.up)("router-link"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((function(){return[te,ne,le,(0,r._)("div",re,[(0,r._)("div",ue,[(0,r.wy)((0,r._)("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user.id=e})},null,512),[[l.nr,a.user.id]]),(0,r._)("div",ae,[oe,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.user.name=e}),class:"form-control"},null,512),[[l.nr,a.user.name]])]),(0,r._)("div",se,[ie,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.user.age=e}),class:"form-control"},null,512),[[l.nr,a.user.age]])]),(0,r._)("div",ce,[de,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.user.city=e}),class:"form-control"},null,512),[[l.nr,a.user.city]])]),(0,r._)("div",me,[pe,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.user.email=e}),class:"form-control"},null,512),[[l.nr,a.user.email]])]),(0,r._)("div",fe,[(0,r._)("input",{type:"button",value:"Save",onClick:t[5]||(t[5]=function(){return o.onclick&&o.onclick.apply(o,arguments)}),disabled:o.validate(),class:"btn btn-primary"},null,8,_e)])])]),(0,r._)("div",null,[(0,r.Wm)(s,{to:{name:"Users"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Back to List")]})),_:1})])]})),_:1})}const ve={name:"Edit",data:function(){return{user:{name:"",age:0,city:"",email:""}}},methods:{onclick:function(){var e=this;h.ZP.put("http://localhost:14558/api/Users/"+this.$route.params.id).then((function(){return e.$router.push("/")}))["catch"]((function(e){console.log(e)}))},validate:function(){return""===this.user.name||null===this.user.age||""===this.user.city||""===this.user.email}}},we=(0,o.Z)(ve,[["render",he]]),ye=we;var ge=(0,r._)("h1",null,"Delete",-1),be=(0,r._)("h3",null,"Are you sure you want to delete this?",-1),ke=(0,r._)("h4",null,"User",-1),Ue=(0,r._)("hr",null,null,-1),Ce={class:"row"},De=(0,r._)("dt",{class:"col-sm-2"},"Name",-1),Ee={class:"col-sm-10"},je=(0,r._)("dt",{class:"col-sm-2"},"Age",-1),ze={class:"col-sm-10"},Oe=(0,r._)("dt",{class:"col-sm-2"},"City",-1),Ze={class:"col-sm-10"},Ve=(0,r._)("dt",{class:"col-sm-2"},"Email",-1),Pe={class:"col-sm-10"};function We(e,t,n,u,a,o){var s=(0,r.up)("router-link"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((function(){return[ge,be,(0,r._)("div",null,[ke,Ue,(0,r._)("dl",Ce,[De,(0,r._)("dd",Ee,(0,d.zw)(a.user.name),1),je,(0,r._)("dd",ze,(0,d.zw)(a.user.age),1),Oe,(0,r._)("dd",Ze,(0,d.zw)(a.user.city),1),Ve,(0,r._)("dd",Pe,(0,d.zw)(a.user.email),1)]),(0,r.wy)((0,r._)("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.user.id=e})},null,512),[[l.nr,a.user.id]]),(0,r._)("input",{type:"button",value:"Delete",onClick:t[1]||(t[1]=function(){return e.onclick&&e.onclick.apply(e,arguments)}),class:"btn btn-danger"}),(0,r.Uk)(" | "),(0,r.Wm)(s,{to:{name:"Users"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Back to List")]})),_:1})])]})),_:1})}const Ae={name:"Delete",data:function(){return{user:[]}},onclick:function(){var e=this;h.ZP["delete"]("http://localhost:14558/api/Users/"+this.$route.params.id).then((function(){return e.$router.push("/")}))["catch"](console.error())}},Ne=(0,o.Z)(Ae,[["render",We]]),$e=Ne;var xe=[{name:"Users",path:"/",component:y},{name:"Details",path:"/Details/:id",component:N},{name:"Create",path:"/Create",component:ee},{name:"Edit",path:"/Edit/:id",component:ye},{name:"Delete",path:"/Delete/:id",component:$e}],Be=(0,c.p7)({history:(0,c.PO)(),routes:xe});(0,l.ri)(i).use(Be).mount("#app")}},t={};function n(l){var r=t[l];if(void 0!==r)return r.exports;var u=t[l]={exports:{}};return e[l](u,u.exports,n),u.exports}n.m=e,(()=>{var e=[];n.O=(t,l,r,u)=>{if(!l){var a=1/0;for(c=0;c<e.length;c++){for(var[l,r,u]=e[c],o=!0,s=0;s<l.length;s++)(!1&u||a>=u)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(o=!1,u<a&&(a=u));if(o){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[l,r,u]}})(),(()=>{n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var r,u,[a,o,s]=l,i=0;if(a.some((t=>0!==e[t]))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(s)var c=s(n)}for(t&&t(l);i<a.length;i++)u=a[i],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(c)},l=self["webpackChunkusers_vue"]=self["webpackChunkusers_vue"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=n.O(void 0,[998],(()=>n(3864)));l=n.O(l)})();
//# sourceMappingURL=app.b212a70b.js.map