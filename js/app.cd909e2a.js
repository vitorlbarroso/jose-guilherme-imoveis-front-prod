(function(){"use strict";var e={3893:function(e,t,o){var a=o(5130),r=o(6768),i=o(4232),s=o.p+"img/joseguilhermeimoveislogo.db0c9503.svg";const l={class:"principal-bg"},n={key:0,class:"top-nav-bar"},c=(0,r.Lk)("figure",null,[(0,r.Lk)("img",{src:s,alt:""})],-1),p={class:"main"},d={key:0},u=(0,r.Lk)("p",null,"Todo os direitos reservados © José Guilherme Imóveis",-1),m=(0,r.Lk)("p",null,"Desenvolvido por Cometa Code",-1),g=[u,m];function h(e,t,o,a,s,u){const m=(0,r.g2)("router-link"),h=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("section",l,["/login"!=this.$route.path?((0,r.uX)(),(0,r.CE)("section",n,[c,(0,r.Lk)("nav",null,[(0,r.bF)(m,{class:(0,i.C4)(["/"==this.$route.path?"link-active":"","link"]),to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)(" Página inicial ")])),_:1},8,["class"]),(0,r.bF)(m,{class:(0,i.C4)(["/imoveis"==this.$route.path?"link-active":"","link"]),to:"/imoveis"},{default:(0,r.k6)((()=>[(0,r.eW)(" Imóveis ")])),_:1},8,["class"]),(0,r.bF)(m,{class:(0,i.C4)(["/contato"==this.$route.path?"link-active":"","link"]),to:"/contato"},{default:(0,r.k6)((()=>[(0,r.eW)(" Contato ")])),_:1},8,["class"]),s.hasUserLogged?((0,r.uX)(),(0,r.Wv)(m,{key:0,class:(0,i.C4)(["/dashboard"==this.$route.path?"link-active":"","link"]),to:"/dashboard"},{default:(0,r.k6)((()=>[(0,r.eW)(" Dashboard ")])),_:1},8,["class"])):(0,r.Q3)("",!0)])])):(0,r.Q3)("",!0),(0,r.Lk)("div",p,[(0,r.bF)(h),"/login"!=this.$route.path&&"/dashboard"!=this.$route.path?((0,r.uX)(),(0,r.CE)("footer",d,g)):(0,r.Q3)("",!0)])])}o(4114);var v=o(4373),k={data(){return{hasUserLogged:!1}},setup(){document.title="O imóvel que você procura com a qualidade que você quer | José Guilherme Imóveis"},created(){localStorage.getItem("UAUTHTKKEY")&&(this.hasUserLogged=!0),v.A.interceptors.request.use((e=>{const t=localStorage.getItem("UAUTHTKKEY");return t||this.$router.push("/login"),e.headers.Authorization=`Bearer ${t}`,e}),(e=>Promise.reject(e))),v.A.interceptors.response.use((e=>e),(async e=>e.response&&401===e.response.status?(localStorage.removeItem("UAUTHTKKEY"),await router.push("/login"),Promise.reject()):Promise.reject(e)))}},b=o(1241);const f=(0,b.A)(k,[["render",h]]);var L=f,C=o(1387),y=o.p+"img/mao.23565181.svg";const w=e=>((0,r.Qi)("data-v-a72cf172"),e=e(),(0,r.jt)(),e),P={class:"bg-header"},E={class:"description-header"},S=w((()=>(0,r.Lk)("h1",null,"JOSÉ GUILHERME",-1))),_=w((()=>(0,r.Lk)("h1",null,"IMÓVEIS",-1))),T=w((()=>(0,r.Lk)("div",{class:"divider"},null,-1))),U=w((()=>(0,r.Lk)("h2",null,"O imóvel que você procura,",-1))),x=w((()=>(0,r.Lk)("h2",null,"com a qualidade que você quer",-1))),A=w((()=>(0,r.Lk)("p",null,"Imóveis na região serrana do ES",-1))),F=w((()=>(0,r.Lk)("div",{class:"divider"},null,-1))),I=w((()=>(0,r.Lk)("figure",null,[(0,r.Lk)("img",{src:y,alt:""})],-1))),$={key:1,class:"bg-principal-properties"},X={class:"bg-category"};function j(e,t,o,a,i,s){const l=(0,r.g2)("Loader"),n=(0,r.g2)("Card"),c=(0,r.g2)("Category");return(0,r.uX)(),(0,r.CE)(r.FK,null,[i.loader?((0,r.uX)(),(0,r.Wv)(l,{key:0})):(0,r.Q3)("",!0),(0,r.Lk)("header",P,[(0,r.Lk)("section",E,[S,_,T,U,x,A,F,(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.searchingPropertie&&s.searchingPropertie(...e))}," Estou buscando um imóvel ")]),I]),i.loader?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("section",$,[(0,r.Lk)("section",X,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.categoriesAndProperties,((e,t)=>((0,r.uX)(),(0,r.Wv)(c,{title:"casas-apartamentos"==t?"Casas e Apartamentos":"chacaras"==t?"Chácaras":"sitios"==t?"Sitios":"lotes"==t?"Lotes":"terrenos"==t?"Terrenos":"pontos-comerciais"==t?"Pontos Comerciais":"Categoria"},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e,((e,t)=>((0,r.uX)(),(0,r.Wv)(n,{propertieId:e.id,title:e.title,city:e.location,price:e.price,imageUrl:e.medias.length>0&&e.medias[0].url,onCallToWpp:t=>s.callToWppPropertie(e),class:"card"},null,8,["propertieId","title","city","price","imageUrl","onCallToWpp"])))),256))])),_:2},1032,["title"])))),256))])]))],64)}const W=e=>((0,r.Qi)("data-v-a07addf8"),e=e(),(0,r.jt)(),e),Q={class:"bg-category"},O=W((()=>(0,r.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"icon"},[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"})],-1))),H={class:"bg-slot"};function q(e,t,o,a,s,l){return(0,r.uX)(),(0,r.CE)("section",Q,[(0,r.Lk)("header",null,[(0,r.Lk)("h2",null,(0,i.v_)(o.title),1),(0,r.Lk)("p",{onClick:t[0]||(t[0]=e=>this.$router.push("/imoveis"))},[(0,r.eW)(" Clique para ver todos "),O])]),(0,r.Lk)("section",H,[(0,r.RG)(e.$slots,"default",{},void 0,!0)])])}var K={props:{title:{type:String}}};const V=(0,b.A)(K,[["render",q],["__scopeId","data-v-a07addf8"]]);var J=V,B=o.p+"img/not-image.ebdc9464.png",R=o.p+"img/whatsapp-icon.eecbac13.svg";const M=e=>((0,r.Qi)("data-v-c819ff12"),e=e(),(0,r.jt)(),e),D={class:"card"},G=["src"],z={key:1,src:B,alt:""},Y={class:"bg-card-infos"},N={class:"card-infos"},Z=M((()=>(0,r.Lk)("img",{src:R,alt:""},null,-1))),ee=[Z];function te(e,t,o,a,s,l){return(0,r.uX)(),(0,r.CE)("section",D,[(0,r.Lk)("figure",{onClick:t[0]||(t[0]=e=>this.$router.push(`/imoveis/${o.propertieId}`)),class:"bg-card-figure"},[o.imageUrl?((0,r.uX)(),(0,r.CE)("img",{key:0,src:o.imageUrl,alt:""},null,8,G)):((0,r.uX)(),(0,r.CE)("img",z))]),(0,r.Lk)("article",Y,[(0,r.Lk)("div",N,[(0,r.Lk)("h2",{onClick:t[1]||(t[1]=e=>this.$router.push(`/imoveis/${o.propertieId}`))},(0,i.v_)(o.title),1),(0,r.Lk)("p",{onClick:t[2]||(t[2]=e=>this.$router.push(`/imoveis/${o.propertieId}`))},(0,i.v_)(o.city),1)]),(0,r.Lk)("div",{class:"card-infos-wpp",onClick:t[3]||(t[3]=e=>this.$emit("callToWpp"))},ee)]),(0,r.Lk)("section",{class:"bg-price",onClick:t[4]||(t[4]=e=>this.$router.push(`/imoveis/${o.propertieId}`))},(0,i.v_)(parseFloat(o.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})),1)])}var oe={props:["title","city","price","propertieId","imageUrl"]};const ae=(0,b.A)(oe,[["render",te],["__scopeId","data-v-c819ff12"]]);var re=ae;const ie=e=>((0,r.Qi)("data-v-917ce43e"),e=e(),(0,r.jt)(),e),se={class:"bg-loader"},le=ie((()=>(0,r.Lk)("div",{class:"loader"},null,-1))),ne=[le];function ce(e,t){return(0,r.uX)(),(0,r.CE)("section",se,ne)}const pe={},de=(0,b.A)(pe,[["render",ce],["__scopeId","data-v-917ce43e"]]);var ue=de,me={data(){return{categoriesAndProperties:[],loader:!0}},created(){this.getHomePropertiesAndCategories()},methods:{searchingPropertie(){return window.open("https://wa.me/+5527999746179?text=Olá, José Guilherme. Vim através do site informar que estou buscando um imóvel, poderia me ajudar?","_blank")},getHomePropertiesAndCategories(){this.loader=!0,this.$axios.get("/properties/home_categories").then((e=>{this.categoriesAndProperties=e.data.data,this.loader=!1})).catch((e=>{this.loader=!1}))},callToWppPropertie(e){return window.open(`https://wa.me/+5527999746179?text=Olá, José Guilherme. Tenho interesse no imóvel ${e.title} - ${e.location} - ${parseFloat(e.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}`,"_blank")}},components:{Category:J,Card:re,Loader:ue}};const ge=(0,b.A)(me,[["render",j],["__scopeId","data-v-a72cf172"]]);var he=ge;const ve={class:"background-properties"},ke={key:0,class:"properties-list"};function be(e,t,o,a,i,s){const l=(0,r.g2)("Loader"),n=(0,r.g2)("Header"),c=(0,r.g2)("Select"),p=(0,r.g2)("Card");return(0,r.uX)(),(0,r.CE)(r.FK,null,[i.loader?((0,r.uX)(),(0,r.Wv)(l,{key:0})):(0,r.Q3)("",!0),(0,r.Lk)("section",ve,[(0,r.bF)(n,{title:"Imóveis disponíveis"}),(0,r.bF)(c,{class:"select-category",options:i.propertiesCategories,selected:1,onHandleChange:s.alterCategory},null,8,["options","onHandleChange"]),i.loader?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",ke,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.properties,((e,t)=>((0,r.uX)(),(0,r.Wv)(p,{propertieId:e.id,title:e.title,city:e.location,price:e.price,imageUrl:e.medias.length>0&&e.medias[0].url,onCallToWpp:t=>s.callToWppPropertie(e),class:"card"},null,8,["propertieId","title","city","price","imageUrl","onCallToWpp"])))),256))]))])],64)}o(4603),o(7566),o(8721);const fe={class:"bg-header"};function Le(e,t,o,a,s,l){return(0,r.uX)(),(0,r.CE)("section",fe,[(0,r.Lk)("h1",null,(0,i.v_)(o.title),1)])}var Ce={props:{title:{type:String,required:!0}}};const ye=(0,b.A)(Ce,[["render",Le],["__scopeId","data-v-73dbb2a2"]]);var we=ye;const Pe=e=>((0,r.Qi)("data-v-1bee21c4"),e=e(),(0,r.jt)(),e),Ee={class:"bg-input"},Se=Pe((()=>(0,r.Lk)("label",{for:""},"Selecione uma categoria",-1))),_e=["value"];function Te(e,t,o,s,l,n){return(0,r.uX)(),(0,r.CE)("section",Ee,[Se,(0,r.bo)((0,r.Lk)("select",{name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedValue=e),onChange:t[1]||(t[1]=e=>n.handleChange(e))},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.options,((e,t)=>((0,r.uX)(),(0,r.CE)("option",{value:e.value},(0,i.v_)(e.name),9,_e)))),256))],544),[[a.u1,l.selectedValue]])])}var Ue={props:{options:{type:Array},selected:{type:Number}},data(){return{selectedValue:"todos"}},created(){this.selectedValue=this.selected},methods:{handleChange(e){return this.$emit("handleChange",this.selectedValue)}}};const xe=(0,b.A)(Ue,[["render",Te],["__scopeId","data-v-1bee21c4"]]);var Ae=xe,Fe={data(){return{loader:!0,propertiesCategories:[{id:1,name:"Todos",value:"todos"},{id:2,name:"Casas e Apartamentos",value:"casas-apartamentos"},{id:3,name:"Chácaras",value:"chacaras"},{id:4,name:"Sítios",value:"sitios"},{id:5,name:"Lotes",value:"lotes"},{id:6,name:"Terrenos",value:"terrenos"},{id:7,name:"Pontos Comerciais",value:"pontos-comerciais"}],properties:[],selectedCategory:"todos"}},created(){const e=new URLSearchParams(window.location.search);e.get("categoria")&&(this.selectedCategory=e.get("categoria")),this.getProperties()},methods:{getProperties(){this.loader=!0,this.$axios.get(`/properties/public?category=${this.selectedCategory}`).then((e=>{this.properties=e.data.data,console.log(e.data.data),this.loader=!1})).catch((e=>{this.loader=!1}))},callToWppPropertie(e){return window.open(`https://wa.me/+5527999746179?text=Olá, José Guilherme. Tenho interesse no imóvel ${e.title} - ${e.location} - ${parseFloat(e.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}`,"_blank")},alterCategory(e){return this.selectedCategory=e,this.getProperties()}},components:{Header:we,Select:Ae,Card:re,Loader:ue}};const Ie=(0,b.A)(Fe,[["render",be],["__scopeId","data-v-17b55260"]]);var $e=Ie;const Xe=e=>((0,r.Qi)("data-v-3b2002a0"),e=e(),(0,r.jt)(),e),je=Xe((()=>(0,r.Lk)("div",{class:"close-image"},null,-1))),We=["src"],Qe={key:2,class:"bg-propertie"},Oe={class:"bg-propertie-infos"},He={class:"propertie-infos"},qe={key:0,class:"propertie-images"},Ke=["src","onClick"];function Ve(e,t,o,a,s,l){const n=(0,r.g2)("Loader"),c=(0,r.g2)("Header");return(0,r.uX)(),(0,r.CE)(r.FK,null,[s.loader?((0,r.uX)(),(0,r.Wv)(n,{key:0})):(0,r.Q3)("",!0),s.selectedImage?((0,r.uX)(),(0,r.CE)("div",{key:1,onClick:t[0]||(t[0]=e=>s.selectedImage=null),class:"open-image"},[je,(0,r.Lk)("img",{src:s.selectedImage,alt:""},null,8,We)])):(0,r.Q3)("",!0),s.loader?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("section",Qe,[(0,r.bF)(c,{title:"Detalhes do imóvel"}),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.callToWppPropertie&&l.callToWppPropertie(...e)),class:"call-to-action-button"}," Tenho interesse nesse imóvel "),(0,r.Lk)("div",Oe,[(0,r.Lk)("section",He,[(0,r.Lk)("p",null,[(0,r.eW)("Título: "),(0,r.Lk)("span",null,(0,i.v_)(s.propertie.title),1)]),(0,r.Lk)("p",null,[(0,r.eW)("Localização: "),(0,r.Lk)("span",null,(0,i.v_)(s.propertie.location),1)]),(0,r.Lk)("p",null,[(0,r.eW)("Preço: "),(0,r.Lk)("span",null,(0,i.v_)(parseFloat(s.propertie.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})),1)]),(0,r.Lk)("p",null,[(0,r.eW)("Categoria: "),(0,r.Lk)("span",null,(0,i.v_)("casas-apartamentos"==s.propertie.category?"Casas e Apartamentos":"chacaras"==s.propertie.category?"Chácaras":"sitios"==s.propertie.category?"Sitios":"lotes"==s.propertie.category?"Lotes":"terrenos"==s.propertie.category?"Terrenos":"pontos-comerciais"==s.propertie.category?"Pontos Comerciais":"Categoria"),1)]),(0,r.Lk)("p",null,[(0,r.eW)("Código do imóvel: "),(0,r.Lk)("span",null,(0,i.v_)(s.propertie.id),1)]),(0,r.Lk)("p",null,[(0,r.eW)("Descrição: "),(0,r.Lk)("span",null,(0,i.v_)(s.propertie.description),1)])]),s.propertie.medias.length>0?((0,r.uX)(),(0,r.CE)("section",qe,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.propertie.medias,((e,t)=>((0,r.uX)(),(0,r.CE)("img",{src:e.url,onClick:t=>l.openImage(e.url),alt:""},null,8,Ke)))),256))])):(0,r.Q3)("",!0)])]))],64)}var Je={data(){return{selectedImage:null,loader:!0,propertie:null}},created(){this.getPropertie()},methods:{getPropertie(){this.loader=!0,this.$axios.get(`/properties/unic/${this.$route.params.id}`).then((e=>{console.log(e.data.data),this.propertie=e.data.data,this.loader=!1})).catch((e=>{this.$router.push("/imoveis")}))},openImage(e){this.selectedImage=e},callToWppPropertie(){return window.open(`https://wa.me/+5527999746179?text=Olá, José Guilherme. Tenho interesse no imóvel ${this.propertie.title} - ${this.propertie.location} - ${parseFloat(this.propertie.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})} - https://joseguilhermeimoveis.com.br/imoveis/${this.propertie.id}`,"_blank")}},components:{Header:we,Loader:ue}};const Be=(0,b.A)(Je,[["render",Ve],["__scopeId","data-v-3b2002a0"]]);var Re=Be;const Me=e=>((0,r.Qi)("data-v-b22b7802"),e=e(),(0,r.jt)(),e),De={class:"bg-login"},Ge=Me((()=>(0,r.Lk)("figure",null,[(0,r.Lk)("img",{src:s,alt:""})],-1))),ze={class:"forms-login"},Ye=Me((()=>(0,r.Lk)("label",{class:"label",for:"email"},"Digite o seu e-mail",-1))),Ne=Me((()=>(0,r.Lk)("label",{class:"label",for:"password"},"Digite o seu e-mail",-1)));function Ze(e,t,o,i,s,l){const n=(0,r.g2)("Loader");return(0,r.uX)(),(0,r.CE)(r.FK,null,[s.loader?((0,r.uX)(),(0,r.Wv)(n,{key:0})):(0,r.Q3)("",!0),(0,r.Lk)("section",De,[Ge,(0,r.Lk)("section",ze,[Ye,(0,r.bo)((0,r.Lk)("input",{type:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>s.formLogin.email=e),class:"input mb-2",placeholder:"email@email.com"},null,512),[[a.Jo,s.formLogin.email]]),Ne,(0,r.bo)((0,r.Lk)("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.formLogin.password=e),class:"input mb-2",placeholder:"●●●●●●●●●●●●"},null,512),[[a.Jo,s.formLogin.password]]),(0,r.Lk)("button",{class:"button",onClick:t[2]||(t[2]=(...e)=>l.login&&l.login(...e))}," Fazer login ")])])],64)}var et=o(4084),tt={data(){return{formLogin:{email:"",password:""},loader:!1}},created(){const e=localStorage.getItem("UAUTHTKKEY");e&&this.$router.push("/inicio")},methods:{notify(e,t){(0,et.oR)(e,{type:"info"==t?"info":"warning"==t?"warning":"error"==t?"error":"success"==t?"success":"default"})},login(){if(this.loader=!0,!this.formLogin.email||!this.formLogin.password)return this.notify("Preencha todos os campos para prosseguir com o login!","error"),void(this.loader=!1);this.notify("Validando dados de acesso!","info"),this.$axios.post("user/login",{email:this.formLogin.email,password:this.formLogin.password}).then((e=>{this.notify(e.data.message,"success"),localStorage.setItem("UAUTHTKKEY",e.data.data.token),setTimeout((()=>{this.$router.push("/dashboard")}),1e3)})).catch((e=>(this.loader=!1,this.notify("Credenciais incorretas ou usuário não cadastrado!","error"))))}},components:{Loader:ue}};const ot=(0,b.A)(tt,[["render",Ze],["__scopeId","data-v-b22b7802"]]);var at=ot,rt=o.p+"img/casa.176be7cb.jpg";const it=e=>((0,r.Qi)("data-v-19395056"),e=e(),(0,r.jt)(),e),st={class:"bg-dash"},lt={class:"list-properties"},nt=it((()=>(0,r.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"icon"},[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"})],-1))),ct={key:2,class:"properties"},pt={class:"propertie"},dt={key:3,class:"bg-add-propertie"},ut=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Digite o nome do imóvel",-1))),mt=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Digite o valor do imóvel",-1))),gt=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Digite a localização do imóvel",-1))),ht=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Adicione uma descrição mais detalhada sobre o imóvel",-1))),vt=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Selecione as imagens do imóvel",-1))),kt={key:4,class:"bg-add-propertie"},bt=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Digite o nome do imóvel",-1))),ft=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Digite o valor do imóvel",-1))),Lt=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Digite a localização do imóvel",-1))),Ct=it((()=>(0,r.Lk)("label",{for:"title",class:"label"},"Adicione uma descrição mais detalhada sobre o imóvel",-1))),yt=(0,r.Fv)('<label for="title" class="label" data-v-19395056>Adicione imagens ao imóvel</label><input type="file" multiple class="input" data-v-19395056><div class="edit-properties-list-images" data-v-19395056><figure data-v-19395056><img src="'+rt+'" alt="" data-v-19395056><div class="delete-image" data-v-19395056><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon" data-v-19395056><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" data-v-19395056></path></svg></div></figure></div>',3);function wt(e,t,o,i,s,l){const n=(0,r.g2)("Loader"),c=(0,r.g2)("Header"),p=(0,r.g2)("CardLine"),d=(0,r.g2)("Select");return(0,r.uX)(),(0,r.CE)(r.FK,null,[s.loader?((0,r.uX)(),(0,r.Wv)(n,{key:0})):(0,r.Q3)("",!0),(0,r.Lk)("section",st,[(0,r.Lk)("div",lt,["list-properties"!=s.view?((0,r.uX)(),(0,r.CE)("p",{key:0,onClick:t[0]||(t[0]=e=>s.view="list-properties"),class:"return-to-page"},[nt,(0,r.eW)(" Voltar para a listagem de imoveis ")])):(0,r.Q3)("",!0),(0,r.bF)(c,{title:"list-properties"==s.view?"Todos os imóveis":"add-propertie"==s.view?"Adicionar novo imóvel":"Editar imóvel"},null,8,["title"]),"list-properties"==s.view?((0,r.uX)(),(0,r.CE)("button",{key:1,onClick:t[1]||(t[1]=e=>s.view="add-propertie"),class:"add-propertie"},"Adicionar novo imóvel")):(0,r.Q3)("",!0),"list-properties"!=s.view||s.loader?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",ct,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.properties,(e=>((0,r.uX)(),(0,r.CE)("div",pt,[(0,r.bF)(p,{imageUrl:e.medias.length>0&&e.medias[0].url,title:e.title,status:e.is_active,location:e.location,price:e.price,onEdit:l.editPropertie,onUpdateStatus:t=>l.updateStatus(e)},null,8,["imageUrl","title","status","location","price","onEdit","onUpdateStatus"])])))),256))])),"add-propertie"==s.view?((0,r.uX)(),(0,r.CE)("div",dt,[ut,(0,r.bo)((0,r.Lk)("input",{type:"text",name:"title",placeholder:"Apartamento no centro com 24m2","onUpdate:modelValue":t[2]||(t[2]=e=>s.editPropertieForm.title=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.title]]),(0,r.bF)(d,{class:"select-category mb-2",options:s.propertiesCategories,selected:1,onHandleChange:l.selectCreatePropertie},null,8,["options","onHandleChange"]),mt,(0,r.bo)((0,r.Lk)("input",{type:"number",name:"title",placeholder:"180000.00","onUpdate:modelValue":t[3]||(t[3]=e=>s.editPropertieForm.price=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.price]]),gt,(0,r.bo)((0,r.Lk)("input",{type:"text",name:"title",placeholder:"Santa Teresa - ES","onUpdate:modelValue":t[4]||(t[4]=e=>s.editPropertieForm.location=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.location]]),ht,(0,r.bo)((0,r.Lk)("input",{type:"text",name:"title",placeholder:"Esse completo imóvel contém 3 quartos, área de churrasco, cozinha, sala de estar...","onUpdate:modelValue":t[5]||(t[5]=e=>s.editPropertieForm.description=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.description]]),vt,(0,r.Lk)("input",{type:"file",multiple:"",class:"input",onChange:t[6]||(t[6]=(...e)=>l.handleFileUpload&&l.handleFileUpload(...e))},null,32),(0,r.Lk)("button",{class:"button-add-propertie",onClick:t[7]||(t[7]=(...e)=>l.addPropertiePost&&l.addPropertiePost(...e))}," Adicionar imóvel ")])):(0,r.Q3)("",!0),"edit-propertie"==s.view?((0,r.uX)(),(0,r.CE)("div",kt,[bt,(0,r.bo)((0,r.Lk)("input",{type:"text",name:"title",placeholder:"Apartamento no centro com 24m2","onUpdate:modelValue":t[8]||(t[8]=e=>s.editPropertieForm.title=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.title]]),(0,r.bF)(d,{class:"select-category mb-2",options:s.propertiesCategories,selected:1},null,8,["options"]),ft,(0,r.bo)((0,r.Lk)("input",{type:"number",name:"title",placeholder:"180000.00","onUpdate:modelValue":t[9]||(t[9]=e=>s.editPropertieForm.price=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.price]]),Lt,(0,r.bo)((0,r.Lk)("input",{type:"text",name:"title",placeholder:"Santa Teresa - ES","onUpdate:modelValue":t[10]||(t[10]=e=>s.editPropertieForm.location=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.location]]),Ct,(0,r.bo)((0,r.Lk)("input",{type:"text",name:"title",placeholder:"Esse completo imóvel contém 3 quartos, área de churrasco, cozinha, sala de estar...","onUpdate:modelValue":t[11]||(t[11]=e=>s.editPropertieForm.description=e),class:"input mb-2"},null,512),[[a.Jo,s.editPropertieForm.description]]),yt,(0,r.Lk)("button",{class:"button-add-propertie",onClick:t[12]||(t[12]=(...e)=>l.addPropertiePost&&l.addPropertiePost(...e))}," Editar imóvel ")])):(0,r.Q3)("",!0)])])],64)}const Pt=e=>((0,r.Qi)("data-v-819509f4"),e=e(),(0,r.jt)(),e),Et={class:"bg-card-line"},St={class:"bg-card-line-infos"},_t=["src"],Tt={key:1,src:B,alt:""},Ut={class:"infos"},xt={class:"line"},At={class:"rounded gray"},Ft={class:"rounded gray"},It={class:"line"},$t={class:"rounded yellow"},Xt={class:"actions"},jt=Pt((()=>(0,r.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"icon"},[(0,r.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})],-1))),Wt=[jt];function Qt(e,t,o,a,s,l){return(0,r.uX)(),(0,r.CE)("section",Et,[(0,r.Lk)("section",St,[(0,r.Lk)("figure",null,[o.imageUrl?((0,r.uX)(),(0,r.CE)("img",{key:0,src:o.imageUrl,alt:""},null,8,_t)):((0,r.uX)(),(0,r.CE)("img",Tt))]),(0,r.Lk)("section",Ut,[(0,r.Lk)("div",xt,[(0,r.Lk)("p",At,(0,i.v_)(o.title.slice(0,40)),1),(0,r.Lk)("p",Ft,(0,i.v_)(o.location),1)]),(0,r.Lk)("div",It,[(0,r.Lk)("p",$t,(0,i.v_)(parseFloat(o.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})),1),(0,r.Lk)("p",{onClick:t[0]||(t[0]=e=>this.$emit("updateStatus")),class:(0,i.C4)([o.status?"active":"deactivate","rounded"])},(0,i.v_)(o.status?"Ativo":"Inativo"),3)])])]),(0,r.Lk)("section",Xt,[(0,r.Lk)("div",{onClick:t[1]||(t[1]=e=>this.$emit("edit"))},Wt)])])}var Ot={props:{imageUrl:{type:String},status:{type:Boolean},title:{type:String},price:{type:Number},location:{type:String}}};const Ht=(0,b.A)(Ot,[["render",Qt],["__scopeId","data-v-819509f4"]]);var qt=Ht,Kt={data(){return{loader:!0,properties:[{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!0,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!1,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!0,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!1,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!1,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!1,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!1,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!1,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"},{id:1,imageUrl:"https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",status:!1,title:"Casa de 24m2 no Centro, Próximo a mercado",price:1e5,location:"Santa Teresa - ES"}],view:"list-properties",editPropertieForm:{title:"",price:0,location:"",description:"",category:""},files:[],propertiesCategories:[{id:2,name:"Casas e Apartamentos",value:"casas-apartamentos"},{id:3,name:"Chácaras",value:"chacaras"},{id:4,name:"Sítios",value:"sitios"},{id:5,name:"Lotes",value:"lotes"},{id:6,name:"Terrenos",value:"terrenos"},{id:7,name:"Pontos Comerciais",value:"pontos-comerciais"}]}},created(){const e=localStorage.getItem("UAUTHTKKEY");e||this.$router.push("/login"),this.getProperties()},methods:{notify(e,t){(0,et.oR)(e,{type:"info"==t?"info":"warning"==t?"warning":"error"==t?"error":"success"==t?"success":"default"})},handleFileUpload(e){this.files=Array.from(e.target.files)},selectCreatePropertie(e){console.log(e),this.editPropertieForm.category=e},async postImage(e){await v.A.post("https://files.joseguilhermeimoveis.com.br/upload.php",{file:e},{headers:{"Content-Type":"multipart/form-data"}}).then((e=>e.data)).catch((e=>!1))},addPropertiePost(){this.loader=!0,this.files.length>0&&this.files.forEach((e=>{let t=this.postImage(e);console.log(t)}))},editPropertie(){this.view="edit-propertie"},getProperties(){this.loader=!0,this.$axios.get("/properties").then((e=>{console.log(e.data.data),this.properties=e.data.data,this.loader=!1})).catch((e=>{this.loader=!1}))},updateStatus(e){this.loader=!0,this.$axios.put(`/properties/${e.id}`,{is_active:1==e.is_active?0:1}).then((e=>{this.notify("Visibilidade da propriedade foi alterada com sucesso!","success"),setTimeout((()=>{window.location.reload()}),2e3)})).catch((e=>{this.notify("Ocorreu ume erro ao tentar alterar a visibilidade da propriedade!","error"),this.loader=!1}))}},components:{Header:we,Card:re,CardLine:qt,Select:Ae,Loader:ue}};const Vt=(0,b.A)(Kt,[["render",wt],["__scopeId","data-v-19395056"]]);var Jt=Vt;const Bt={class:"bg-contact"};function Rt(e,t,o,a,i,s){return(0,r.uX)(),(0,r.CE)("section",Bt,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.callToWpp&&s.callToWpp(...e)),class:"call-to-action-button"}," Entrar em contato pelo WhatsApp ")])}var Mt={methods:{callToWpp(){return window.open("https://wa.me/+5527999746179?text=Olá, José Guilherme. Encontrei o seu contato no site da José Guilherme Imóveis, pode me ajudar?","_blank")}}};const Dt=(0,b.A)(Mt,[["render",Rt],["__scopeId","data-v-48a07a96"]]);var Gt=Dt;const zt=[{path:"/",name:"home",component:he},{path:"/imoveis",name:"imoveis",component:$e},{path:"/imoveis/:id",name:"imovel",component:Re},{path:"/login",name:"login",component:at},{path:"/dashboard",name:"dashboard",component:Jt},{path:"/contato",name:"contato",component:Gt}],Yt=(0,C.aE)({history:(0,C.LA)("/"),routes:zt});var Nt=Yt,Zt=o(6942);v.A.defaults.baseURL="https://api.joseguilhermeimoveis.com.br/api/";const eo=(0,a.Ef)(L);eo.use(Nt),eo.use(v.A),eo.config.globalProperties.$axios=v.A,eo.use(Zt.A,v.A),eo.use(et.Ay,{autoClose:3e3,position:"bottom-right",transition:"bounce",dangerouslyHTMLString:!0}),eo.mount("#app")}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,function(){o.amdO={}}(),function(){var e=[];o.O=function(t,a,r,i){if(!a){var s=1/0;for(p=0;p<e.length;p++){a=e[p][0],r=e[p][1],i=e[p][2];for(var l=!0,n=0;n<a.length;n++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](a[n])}))?a.splice(n--,1):(l=!1,i<s&&(s=i));if(l){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[a,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,s=a[0],l=a[1],n=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(n)var p=n(o)}for(t&&t(a);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},a=self["webpackChunkjose_guilherme_imoveis_front"]=self["webpackChunkjose_guilherme_imoveis_front"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(3893)}));a=o.O(a)})();
//# sourceMappingURL=app.cd909e2a.js.map