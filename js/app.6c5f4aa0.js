(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],d=0,b=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue3-admin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"04df":function(e,t,n){"use strict";n("a479")},"0f5d":function(e,t,n){},2254:function(e,t,n){"use strict";n("4a83")},3345:function(e,t,n){"use strict";n("4da0")},"4a83":function(e,t,n){},"4da0":function(e,t,n){},"4fb7":function(e,t,n){"use strict";n("ccd0")},"593b":function(e,t,n){},7633:function(e,t,n){"use strict";n("a7e1")},"8dab":function(e,t,n){"use strict";n("b411")},"8e1f":function(e,t,n){},a479:function(e,t,n){},a7e1:function(e,t,n){},b108:function(e,t,n){"use strict";n("f320")},b411:function(e,t,n){},c1c6:function(e,t,n){"use strict";n("0f5d")},c59e:function(e,t,n){},ccd0:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("3fd4"),c=(n("b0c0"),n("96cf"),n("1da1")),a=n("6c02"),i=n("53ca");function u(e,t){localStorage.setItem(e,"object"===Object(i["a"])(t)?JSON.stringify(t):t)}function l(e){return localStorage.getItem(e)||""}function s(e){return/^(https?|tel|mailto)/.test(e)}function d(){return!!l("token")}var b=Object(r["eb"])("data-v-53f48fe2"),f=b((function(e,t,n,o,c,a){var i=Object(r["M"])("MHeader"),u=Object(r["M"])("SideBar"),l=Object(r["M"])("PageMain"),s=Object(r["M"])("el-container");return Object(r["D"])(),Object(r["i"])(s,{class:["container",{"small-style":!e.opened}]},{default:b((function(){return[Object(r["m"])(i),Object(r["m"])(s,{class:"content"},{default:b((function(){return[Object(r["m"])(u),Object(r["m"])(l)]})),_:1})]})),_:1},8,["class"])})),m=n("5502"),O=Object(r["eb"])("data-v-c643555e"),p=O((function(e,t,n,o,c,a){var i=Object(r["M"])("sidebar-item"),u=Object(r["M"])("el-menu"),l=Object(r["M"])("el-scrollbar");return Object(r["D"])(),Object(r["i"])("aside",null,[Object(r["m"])(l,null,{default:O((function(){return[Object(r["m"])(u,{"default-active":e.activeMenu,class:"el-menu-vertical-demo","background-color":e.MENU_SETTING.BG,"text-color":e.MENU_SETTING.TEXT,"active-text-color":e.MENU_SETTING.ACTIVE_TEXT,"collapse-transition":!1,collapse:!e.opened},{default:O((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.filterSidebarList,(function(e){return Object(r["D"])(),Object(r["i"])(i,{key:e.path,data:e,url:e.path},null,8,["data","url"])})),128))]})),_:1},8,["default-active","background-color","text-color","active-text-color","collapse"])]})),_:1})])})),g=(n("4de4"),{BG:"#3a3f51",TEXT:"#b5b6bd",ACTIVE_TEXT:"rgb(79, 148, 212)"}),j=Object(r["eb"])("data-v-f93dce66");Object(r["G"])("data-v-f93dce66");var v={class:"title"},h={class:"title"};Object(r["E"])();var _=j((function(e,t,n,o,c,a){var i=Object(r["M"])("el-menu-item"),u=Object(r["M"])("page-link"),l=Object(r["M"])("sidebar-item"),s=Object(r["M"])("el-submenu");return!e.hasOnlyChild(e.item)||e.childItem.children&&!e.childItem.noChild?(Object(r["D"])(),Object(r["i"])(s,{key:1,index:e.resolvePath(e.item.path)},{title:j((function(){return[Object(r["m"])("i",{class:e.item.meta.icon},null,2),Object(r["m"])("span",h,Object(r["Q"])(e.item.meta.title),1)]})),default:j((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.item.children,(function(t){return Object(r["D"])(),Object(r["i"])(l,{key:t.path,data:t,url:e.resolvePath(t.path)},null,8,["data","url"])})),128))]})),_:1},8,["index"])):(Object(r["D"])(),Object(r["i"])(r["b"],{key:0},[e.childItem.meta?(Object(r["D"])(),Object(r["i"])(u,{key:0,to:e.resolvePath(e.childItem.path)},{default:j((function(){return[Object(r["m"])(i,{index:e.resolvePath(e.childItem.path)},{default:j((function(){return[Object(r["m"])("i",{class:e.childItem.meta.icon?e.childItem.meta.icon:""},null,2),Object(r["m"])("span",v,Object(r["Q"])(e.childItem.meta.title),1)]})),_:1},8,["index"])]})),_:1},8,["to"])):Object(r["j"])("",!0)],64))})),T=(n("a15b"),n("5530")),w=n("df7c"),D=n.n(w),E=Object(r["eb"])("data-v-54131656"),M=E((function(e,t,n,o,c,a){return Object(r["D"])(),Object(r["i"])(Object(r["O"])(e.componentType),e.redirectLink,{default:E((function(){return[Object(r["L"])(e.$slots,"default",{},void 0,!0)]})),_:3},16)})),I=Object(r["n"])({props:{to:{type:String,required:!0}},setup:function(e){var t=Object(r["I"])(e.to),n={target:"_blank",href:t.value,rel:"noopener"},o={to:t.value},c=Object(r["g"])((function(){return s(t.value)?n:o})),a=Object(r["g"])((function(){return s(t.value)?"a":"router-link"}));return{redirectLink:c,componentType:a}}});I.render=M,I.__scopeId="data-v-54131656";var S=I,k=Object(r["n"])({name:"SidebarItem",components:{PageLink:S},props:{data:{type:Object,required:!0},url:{type:String,default:""}},setup:function(e){var t=Object(r["I"])(e.url),n=Object(r["H"])(e.data),o=Object(r["I"])({}),c=function(e){var t=e.children&&e.children.filter((function(e){return!e.hidden}))||[];return 1!==t.length||e.meta?0===t.length&&(o.value=Object(T["a"])(Object(T["a"])({},e),{},{path:"",noChild:!0}),console.log("childItem 0",e.meta,o),!0):(o.value=t[0],console.log("childItem 1",e.meta,o),!0)},a=function(e){return s(e)?e:s(t.value)?t.value:D.a.join(t.value,e)};return{item:n,basePath:t,childItem:o,hasOnlyChild:c,resolvePath:a}}});n("c1c6");k.render=_,k.__scopeId="data-v-f93dce66";var L=k,C=Object(r["n"])({components:{SidebarItem:L},setup:function(){var e=Object(a["c"])(),t=Object(m["b"])(),n=Object(r["I"])(e.name);return Object(r["Y"])(n,(function(){n.value=e.name})),{MENU_SETTING:g,activeMenu:n,opened:Object(r["g"])((function(){return t.getters.isMenuOpen})),filterSidebarList:Object(r["g"])((function(){return t.getters.sidebarList.filter((function(e){return!e.hidden}))}))}}});n("4fb7");C.render=p,C.__scopeId="data-v-c643555e";var y=C,A=n("cf05"),N=n.n(A),x=Object(r["eb"])("data-v-6e0787f0");Object(r["G"])("data-v-6e0787f0");var R=Object(r["m"])("section",{class:"logo"},[Object(r["m"])("img",{src:N.a,alt:"logo"})],-1),P={class:"function"};Object(r["E"])();var G=x((function(e,t,n,o,c,a){var i=Object(r["M"])("Nav");return Object(r["D"])(),Object(r["i"])("header",null,[R,Object(r["m"])("section",P,[Object(r["m"])("i",{class:e.opened?"el-icon-s-unfold":"el-icon-s-fold",onClick:t[1]||(t[1]=function(t){return e.toggleOpen()})},null,2),Object(r["m"])(i,{class:"nav"})])])})),U=Object(r["eb"])("data-v-74885563");Object(r["G"])("data-v-74885563");var V={class:"avatar-wrapper"},F=Object(r["m"])("i",{class:"el-icon-caret-bottom"},null,-1),B=Object(r["l"])("個人資料"),H=Object(r["l"])("外部連結"),K=Object(r["l"])("禁止"),q=Object(r["l"])("登出");Object(r["E"])();var Q=U((function(e,t,n,o,c,a){var i=Object(r["M"])("el-avatar"),u=Object(r["M"])("el-dropdown-item"),l=Object(r["M"])("page-link"),s=Object(r["M"])("el-dropdown-menu"),d=Object(r["M"])("el-dropdown");return Object(r["D"])(),Object(r["i"])(d,{class:"avatar-container right-menu-item hover-effect",trigger:"click"},{dropdown:U((function(){return[Object(r["m"])(s,null,{default:U((function(){return[Object(r["m"])(l,{to:"profile"},{default:U((function(){return[Object(r["m"])(u,null,{default:U((function(){return[B]})),_:1})]})),_:1}),Object(r["m"])(l,{to:"https://google.com.tw"},{default:U((function(){return[Object(r["m"])(u,null,{default:U((function(){return[H]})),_:1})]})),_:1}),Object(r["m"])(u,{disabled:""},{default:U((function(){return[K]})),_:1}),Object(r["m"])(u,{divided:"",onClick:e.logout},{default:U((function(){return[q]})),_:1},8,["onClick"])]})),_:1})]})),default:U((function(){return[Object(r["m"])("div",V,[Object(r["m"])(i,{src:e.user.avatar},null,8,["src"]),F])]})),_:1})})),J=Object(r["n"])({components:{PageLink:S},setup:function(){var e=Object(m["b"])();return{user:Object(r["g"])((function(){return e.getters.userData})),logout:function(){return e.dispatch("logout")}}}});n("ebb0");J.render=Q,J.__scopeId="data-v-74885563";var z=J,X=Object(r["n"])({components:{Nav:z},setup:function(){var e=Object(m["b"])();return{opened:Object(r["g"])((function(){return e.getters.isMenuOpen})),toggleOpen:function(){return e.commit("UPDATE_MENU_OPEN")}}}});n("7633");X.render=G,X.__scopeId="data-v-6e0787f0";var $=X,Y=Object(r["eb"])("data-v-4e41e427"),Z=Y((function(e,t,n,o,c,a){var i=Object(r["M"])("router-view"),u=Object(r["M"])("Loading");return Object(r["D"])(),Object(r["i"])("main",null,[Object(r["m"])(i),Object(r["m"])(u,{name:"content"})])})),W=Object(r["eb"])("data-v-5366bbd9"),ee=W((function(e,t,n,o,c,a){var i=Object(r["N"])("loading");return Object(r["bb"])((Object(r["D"])(),Object(r["i"])("div",null,null,512)),[[i,e.isFullscreen&&e.isLoading,void 0,{fullscreen:!0,lock:!0}],[i,!e.isFullscreen&&e.isLoading]])})),te=Object(r["n"])({props:{name:{type:String,default:""}},setup:function(e){var t=Object(m["b"])();return{isFullscreen:Object(r["g"])((function(){return"fullscreen"===e.name})),isLoading:Object(r["g"])((function(){return e.name===t.getters.loadingTarget&&t.getters.isLoading}))}}});n("04df");te.render=ee,te.__scopeId="data-v-5366bbd9";var ne=te,re=Object(r["n"])({components:{Loading:ne},setup:function(){return{}}});re.render=Z,re.__scopeId="data-v-4e41e427";var oe=re,ce=Object(r["n"])({components:{SideBar:y,MHeader:$,PageMain:oe},setup:function(){var e=Object(m["b"])();return l("sidebarList")&&e.dispatch("setSidebarList",JSON.parse(l("sidebarList"))),l("user")&&e.dispatch("setUserData",JSON.parse(l("user"))),{opened:Object(r["g"])((function(){return e.getters.isMenuOpen}))}}});n("2254");ce.render=f,ce.__scopeId="data-v-53f48fe2";var ae=ce,ie=Object(r["eb"])("data-v-bb9b5d12");Object(r["G"])("data-v-bb9b5d12");var ue={class:"login-container"},le=Object(r["m"])("div",{class:"title"},[Object(r["m"])("h2",null,"後台系統")],-1),se=Object(r["l"])("Login");Object(r["E"])();var de=ie((function(e,t,n,o,c,a){var i=Object(r["M"])("el-input"),u=Object(r["M"])("el-form-item"),l=Object(r["M"])("el-button"),s=Object(r["M"])("el-form");return Object(r["D"])(),Object(r["i"])("div",ue,[Object(r["m"])(s,{ref:"loginFormRef",class:"login-form",rules:e.loginRules,model:e.loginForm},{default:ie((function(){return[le,Object(r["m"])(u,{prop:"email"},{default:ie((function(){return[Object(r["m"])(i,{type:"email",placeholder:"請輸入信箱","prefix-icon":"el-icon-user",modelValue:e.loginForm.email,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.loginForm.email=t})},null,8,["modelValue"])]})),_:1}),Object(r["m"])(u,{prop:"password"},{default:ie((function(){return[Object(r["m"])(i,{type:"password",placeholder:"請輸入密碼","prefix-icon":"el-icon-lock",modelValue:e.loginForm.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.loginForm.password=t}),"show-password":""},null,8,["modelValue"])]})),_:1}),Object(r["m"])(l,{type:"primary",class:"loginBtn",disabled:e.isDisabled,onClick:e.onSubmit},{default:ie((function(){return[se]})),_:1},8,["disabled","onClick"])]})),_:1},8,["rules","model"])])})),be=Object(r["n"])({setup:function(){var e=Object(m["b"])(),t=Object(r["I"])(),n=Object(r["I"])(!0),o=Object(r["H"])({email:"rainbow_wu@cht.com.tw",password:"`1QAZ2wsx"}),a={email:[{required:!0,message:"請輸入信箱",trigger:"blur"},{type:"email",message:"請輸入信箱格式",trigger:["blur","change"]}],password:[{required:!0,message:"請輸入密碼",trigger:"blur"}]},i=function(){t.value.validate((function(e){return n.value=!e}))};Object(r["A"])((function(){i()})),Object(r["Y"])(o,(function(){return i()}),{deep:!0});var u=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.value){t.next=4;break}return t.abrupt("return");case 4:e.dispatch("handLogin",{data:o});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{loginFormRef:t,loginForm:o,loginRules:a,isDisabled:n,onSubmit:u}}});n("3345");be.render=de,be.__scopeId="data-v-bb9b5d12";var fe=be,me=fe,Oe=Object(r["eb"])("data-v-6e843729"),pe=Oe((function(e,t,n,o,c,a){return Object(r["D"])(),Object(r["i"])("h1",null,"Home")})),ge=Object(r["n"])({setup:function(){return{}}});ge.render=pe,ge.__scopeId="data-v-6e843729";var je=ge,ve=je,he=Object(r["eb"])("data-v-76561e4f"),_e=he((function(e,t,n,o,c,a){return Object(r["D"])(),Object(r["i"])("h1",null,"Page Not Found")})),Te=Object(r["n"])({setup:function(){return{}}});Te.render=_e,Te.__scopeId="data-v-76561e4f";var we=Te,De=we,Ee=Object(r["eb"])("data-v-69b36240");Object(r["G"])("data-v-69b36240");var Me=Object(r["m"])("h1",{class:"title"},"TO DO List",-1),Ie=Object(r["l"])(" 新增 "),Se=Object(r["l"])(" 編輯 "),ke=Object(r["l"])(" 刪除 ");Object(r["E"])();var Le=Ee((function(e,t,n,o,c,a){var i=Object(r["M"])("el-button"),u=Object(r["M"])("el-table-column"),l=Object(r["M"])("el-table"),s=Object(r["M"])("ItemModal");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Me,Object(r["m"])(i,{class:"add-btn",onClick:t[1]||(t[1]=Object(r["db"])((function(t){return e.addItem()}),["prevent"])),type:"primary",size:"small",plain:""},{default:Ee((function(){return[Ie]})),_:1}),e.data.length>0?(Object(r["D"])(),Object(r["i"])(l,{key:0,data:e.data,"default-sort":{prop:"id",order:"title"},stripe:"","highlight-current-row":"",style:{width:"100%"}},{default:Ee((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.columnArray,(function(e){return Object(r["D"])(),Object(r["i"])(u,{key:e.id,prop:e.prop,label:e.label,sortable:"title"===e.prop,width:e.width},null,8,["prop","label","sortable","width"])})),128)),Object(r["m"])(u,{label:"功能",align:"center"},{default:Ee((function(t){return[Object(r["m"])(i,{onClick:Object(r["db"])((function(n){return e.putItem(t.$index)}),["prevent"]),type:"info",size:"small",plain:""},{default:Ee((function(){return[Se]})),_:2},1032,["onClick"]),Object(r["m"])(i,{onClick:Object(r["db"])((function(n){return e.deleteItem(t.$index)}),["prevent"]),type:"danger",size:"small",plain:""},{default:Ee((function(){return[ke]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])):Object(r["j"])("",!0),Object(r["m"])(s)],64)})),Ce=(n("a4d3"),n("e01a"),Object(r["eb"])("data-v-6c3e1938"));Object(r["G"])("data-v-6c3e1938");var ye={class:"dialog-footer"},Ae=Object(r["l"])("取消"),Ne=Object(r["l"])("儲存");Object(r["E"])();var xe=Ce((function(e,t,n,o,c,a){var i=Object(r["M"])("el-input"),u=Object(r["M"])("el-form-item"),l=Object(r["M"])("el-switch"),s=Object(r["M"])("el-form"),d=Object(r["M"])("el-button"),b=Object(r["M"])("el-dialog");return Object(r["D"])(),Object(r["i"])(b,{title:"add"===e.modalConfig.type?"新增":"編輯","model-value":e.isModalShow,onClose:e.cancel,width:e.modalConfig.width},{footer:Ce((function(){return[Object(r["m"])("span",ye,[Object(r["m"])(d,{onClick:e.cancel},{default:Ce((function(){return[Ae]})),_:1},8,["onClick"]),Object(r["m"])(d,{type:"primary",disabled:e.isDisabled,onClick:e.confirm},{default:Ce((function(){return[Ne]})),_:1},8,["disabled","onClick"])])]})),default:Ce((function(){return[Object(r["m"])("main",null,[Object(r["m"])(s,{ref:"formRef",class:"form",rules:e.formRules,model:e.form},{default:Ce((function(){return[Object(r["m"])(u,{prop:"title",label:"標題"},{default:Ce((function(){return[Object(r["m"])(i,{type:"title",placeholder:"請輸入標題",modelValue:e.form.title,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.title=t})},null,8,["modelValue"])]})),_:1}),Object(r["m"])(u,{prop:"description",label:"描述"},{default:Ce((function(){return[Object(r["m"])(i,{type:"description",placeholder:"請輸入描述",modelValue:e.form.description,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.description=t})},null,8,["modelValue"])]})),_:1}),Object(r["m"])(u,{type:"done",label:"已完成"},{default:Ce((function(){return[Object(r["m"])(l,{modelValue:e.form.done,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.done=t})},null,8,["modelValue"])]})),_:1})]})),_:1},8,["rules","model"])])]})),_:1},8,["title","model-value","onClose","width"])})),Re=Object(r["n"])({setup:function(){var e=Object(m["b"])(),t=Object(r["g"])((function(){return e.getters["todo/modalConfig"]})),n=Object(r["I"])(),o=Object(r["g"])({get:function(){return e.getters["todo/modalData"]},set:function(t){return e.dispatch("todo/setModalDate",t)}}),c=Object(r["I"])(!0),a={title:[{required:!0,message:"請輸入標題",trigger:"blur"}],description:[{required:!0,message:"請輸入描述",trigger:"blur"}]},i=function(){var e;null===n||void 0===n||null===(e=n.value)||void 0===e||e.validate((function(e){return c.value=!e}))};Object(r["Z"])((function(){return i()}));var u=function(){e.dispatch("todo/toggleModal",{flag:!1})},l=function(){var n="add"===t.value.type?"todo/addItem":"todo/putItem";e.dispatch(n,o.value),t.value.confirmCallback()};return{modalConfig:t,isModalShow:Object(r["g"])((function(){return e.getters["todo/isModalShow"]})),form:o,formRef:n,formRules:a,isDisabled:c,cancel:u,confirm:l}}});n("8dab");Re.render=xe,Re.__scopeId="data-v-6c3e1938";var Pe=Re,Ge=Object(r["n"])({components:{ItemModal:Pe},setup:function(){var e=Object(m["b"])(),t=[{prop:"title",label:"標題",width:"250"},{prop:"description",label:"描述",width:"350"},{prop:"doneString",label:"完成狀態",width:"150"}],n=Object(r["g"])((function(){return e.getters["todo/list"]}));Object(r["w"])((function(){e.dispatch("todo/getList")}));var o=function(){e.dispatch("todo/toggleModal",{flag:!0,config:{type:"add"}})},c=function(t){e.dispatch("todo/toggleModal",{flag:!0,config:{type:"edit"},data:Object(T["a"])({},n.value[t])})},a=function(t){var r={title:"確定要刪除嗎？",message:"確定要刪除：".concat(n.value[t].title),confirmCallback:function(){e.dispatch("todo/deleteItem",n.value[t].id)}};e.dispatch("toggleDialog",{flag:!0,config:r})};return{columnArray:t,data:n,addItem:o,deleteItem:a,putItem:c}}});n("b108");Ge.render=Le,Ge.__scopeId="data-v-69b36240";var Ue=Ge,Ve=[{path:"/login",name:"login",component:me},{path:"/",name:"index",component:ae,redirect:"/home",children:[{path:"home",name:"home",component:ve},{path:"todo",name:"todo",component:Ue},{path:"/:pathMatch(.*)*",component:De}]}],Fe=Object(a["a"])({history:Object(a["b"])("/vue3-admin/"),routes:Ve});Fe.beforeEach(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d()?"login"===t.name?r({name:"home"}):r():"login"===t.name?r():r({name:"login"});case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var Be=Fe,He=(n("d3b7"),n("bc3a")),Ke=n.n(He),qe={LOGIN:"/Auth/Login",REGISTER:"/Auth/Register",REFRESH_TOKEN:"/Auth/RefreshToken",TODO:"/Todo"},Qe=qe,Je=Ke.a.create({baseURL:"".concat("http://localhost:5000/api")});Je.interceptors.request.use((function(e){return console.log("請求發起前",e),e}),(function(e){return Promise.reject(e)})),Je.interceptors.response.use((function(e){return console.log("回傳資料",e),e.data.success?e.data:Promise.reject(e.data)}),(function(e){return Promise.reject(e)}));var ze=function(e){return Je.post(Qe.LOGIN,e)},Xe=function(){return Je.post(Qe.REFRESH_TOKEN,{token:l("token"),refreshToken:l("refreshToken")})},$e=(n("99af"),Ke.a.create({baseURL:"".concat("http://localhost:5000/api")}));$e.interceptors.request.use((function(e){return console.log("請求發起前",e),e.headers.common["Authorization"]="Bearer ".concat(l("token")),e}),(function(e){console.log("error",e)})),$e.interceptors.response.use((function(e){return console.log("回傳資料",e),e.data?e.data:Promise.reject(e.data)}),(function(e){console.log("error",e),mt.dispatch("refreshToken"),mt.dispatch(l("actionName"))}));var Ye=function(){return $e.get(Qe.TODO)},Ze=function(e){return $e.post(Qe.TODO,e)},We=function(e,t){return $e.put("".concat(Qe.TODO,"/").concat(e),t)},et=function(e){return $e.delete("".concat(Qe.TODO,"/").concat(e))},tt=ze,nt=Xe,rt=Ye,ot=Ze,ct=We,at=et,it={message:"",title:"提示",cancelText:"取 消",submitText:"確 定",width:"30%",showHeaderClose:!0,isCancelShow:!1,confirmCallback:function(){}},ut={state:{isLoading:!1,loadingTarget:"",isMenuOpen:!0,isDialogShow:!1,dialogConfig:{},user:{},sidebarList:[],jwt:{token:"",refreshToken:""}},getters:{isLoading:function(e){return e.isLoading},loadingTarget:function(e){return e.loadingTarget},isMenuOpen:function(e){return e.isMenuOpen},isDialogShow:function(e){return e.isDialogShow},dialogConfig:function(e){return e.dialogConfig},userData:function(e){return e.user},sidebarList:function(e){return e.sidebarList},jwt:function(e){return e.jwt}},mutations:{UPDATE_LOADING:function(e,t){var n=t.flag,r=t.target,o=void 0===r?"content":r;e.isLoading=n,e.loadingTarget=o},UPDATE_MENU_OPEN:function(e){e.isMenuOpen=!e.isMenuOpen},UPDATE_DIALOG_OPEN:function(e,t){var n=t.flag,r=t.config,o=void 0===r?{}:r;e.isDialogShow=!!n,e.dialogConfig=Object.assign(it,o)},SET_SIDEBAR_LIST:function(e,t){e.sidebarList=t,u("sidebarList",t)},SET_TOKEN:function(e,t){var n=t||{token:"",refreshToken:""};e.jwt=n,u("token",n.token),u("refreshToken",n.refreshToken)},SET_USER_DATA:function(e,t){e.user=t,u("user",t)},SET_ACTION_NAME:function(e,t){u("actionName",t)}},actions:{handLogin:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=e.dispatch,c=t.data,r("UPDATE_LOADING",{flag:!0,target:"fullscreen"}),n.prev=3,n.t0=o,n.next=7,tt(c);case 7:n.t1=n.sent,(0,n.t0)("setLoginAction",n.t1),n.next=15;break;case 11:n.prev=11,n.t2=n["catch"](3),console.log("error",n.t2),o("toggleDialog",{flag:!0,config:{isCancelShow:!1,message:n.t2.message}});case 15:r("UPDATE_LOADING",{flag:!1});case 16:case"end":return n.stop()}}),n,null,[[3,11]])})))()},refreshToken:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.t0=n,t.next=5,nt();case 5:t.t1=t.sent,(0,t.t0)("SET_TOKEN",t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t["catch"](1),console.log("error",t.t2);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},setLoginAction:function(e,t){var n=e.commit;n("SET_TOKEN",t),n("SET_SIDEBAR_LIST",[{hidden:!1,path:"todo",meta:{title:"todo",icon:"el-icon-s-order"}},{hidden:!1,path:"https://google.com.tw",meta:{title:"外部連結",icon:"el-icon-link"}}]),n("SET_USER_DATA",{roles:["admin"],avatar:"https://avatars.githubusercontent.com/u/35356592",name:"rainbow"}),Be.push({name:"home"})},logout:function(e){var t=e.commit;t("SET_TOKEN"),t("SET_SIDEBAR_LIST",[]),t("SET_USER_DATA",{}),Be.push({name:"login"})},setSidebarList:function(e,t){var n=e.commit;n("SET_SIDEBAR_LIST",t)},setUserData:function(e,t){var n=e.commit;n("SET_USER_DATA",t)},toggleDialog:function(e,t){var n=e.commit,r=t.flag,o=t.config;n("UPDATE_DIALOG_OPEN",{flag:r,config:o})}}},lt=ut,st=(n("d81d"),n("2909")),dt={type:"add",width:"50%",isCancelShow:!1,confirmCallback:function(){}},bt={namespaced:!0,state:{list:[],isModalShow:!1,modalConfig:{},modalData:{}},getters:{list:function(e){return e.list},isModalShow:function(e){return e.isModalShow},modalConfig:function(e){return e.modalConfig},modalData:function(e){return e.modalData}},mutations:{SET_LIST:function(e,t){e.list=t.map((function(e){return e.doneString=e.done?"已完成":"未完成",e}))},TOGGLE_MODAL:function(e,t){var n=t.flag,r=t.config,o=void 0===r?{}:r,c=t.data,a=void 0===c?{}:c;e.isModalShow=!!n,e.modalConfig=Object.assign(dt,o),e.modalData=a},SET_MODAL:function(e,t){e.modalData=t}},actions:{setList:function(e,t){var n=e.commit;n("SET_LIST",t)},getList:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,n("UPDATE_LOADING",{flag:!0},{root:!0}),n("SET_ACTION_NAME","todo/getList",{root:!0}),t.next=5,rt();case 5:o=t.sent,o&&(r("setList",o),n("UPDATE_LOADING",{flag:!1},{root:!0}));case 7:case"end":return t.stop()}}),t)})))()},addItem:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,c,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getters,o=e.commit,c=e.dispatch,n.prev=1,o("SET_ACTION_NAME","todo/addItem",{root:!0}),n.next=5,ot(t);case 5:a=n.sent,i=[].concat(Object(st["a"])(r.list),[a]),c("setList",i),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](1),console.log("error",n.t0);case 13:o("TOGGLE_MODAL",{flag:!1});case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},putItem:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getters,o=e.commit,c=e.dispatch,n.prev=1,o("SET_ACTION_NAME","todo/putItem/".concat(t.id),{root:!0}),n.next=5,ct(t.id,t);case 5:a=r.list.map((function(e){return e.id===t.id&&(e=t),e})),c("setList",a),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log("error",n.t0);case 12:o("TOGGLE_MODAL",{flag:!1});case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},deleteItem:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getters,o=e.commit,c=e.dispatch,n.prev=1,o("SET_ACTION_NAME","todo/deleteItem/".concat(t),{root:!0}),n.next=5,at(t);case 5:a=r.list.filter((function(e){return e.id!==t})),c("setList",a),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log("error",n.t0);case 12:o("UPDATE_DIALOG_OPEN",{flag:!1},{root:!0});case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},toggleModal:function(e,t){var n=e.commit,r=t.flag,o=t.config,c=t.data;n("TOGGLE_MODAL",{flag:r,config:o,data:c})},setModalDate:function(e,t){var n=e.commit;n("SET_MODAL",t)}}},ft=bt,mt=Object(m["a"])({modules:{general:lt,todo:ft}}),Ot=n("a0b8"),pt=n.n(Ot);function gt(e,t,n,o,c,a){var i=Object(r["M"])("router-view"),u=Object(r["M"])("Dialog"),l=Object(r["M"])("Loading");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])(i),Object(r["m"])(u),Object(r["m"])(l,{name:"fullscreen"})],64)}var jt=Object(r["eb"])("data-v-19d13576");Object(r["G"])("data-v-19d13576");var vt={class:"dialog-footer"};Object(r["E"])();var ht=jt((function(e,t,n,o,c,a){var i=Object(r["M"])("el-button"),u=Object(r["M"])("el-dialog");return Object(r["D"])(),Object(r["i"])(u,{title:e.dialogConfig.title,"model-value":e.isDialogShow,"show-close":e.dialogConfig.showHeaderClose,onClose:e.cancel,width:e.dialogConfig.width},{footer:jt((function(){return[Object(r["m"])("span",vt,[e.dialogConfig.isCancelShow?(Object(r["D"])(),Object(r["i"])(i,{key:0,onClick:e.cancel},{default:jt((function(){return[Object(r["l"])(Object(r["Q"])(e.dialogConfig.cancelText),1)]})),_:1},8,["onClick"])):Object(r["j"])("",!0),Object(r["m"])(i,{type:"primary",onClick:e.confirm},{default:jt((function(){return[Object(r["l"])(Object(r["Q"])(e.dialogConfig.submitText),1)]})),_:1},8,["onClick"])])]})),default:jt((function(){return[Object(r["m"])("main",null,Object(r["Q"])(e.dialogConfig.message||""),1)]})),_:1},8,["title","model-value","show-close","onClose","width"])})),_t=Object(r["n"])({setup:function(){var e=Object(m["b"])(),t=Object(r["g"])((function(){return e.getters.dialogConfig})),n=function(){e.dispatch("toggleDialog",!1)},o=function(){e.dispatch("toggleDialog",!1),t.value.confirmCallback()};return{dialogConfig:t,isDialogShow:Object(r["g"])((function(){return e.getters.isDialogShow})),cancel:n,confirm:o}}});n("feb8");_t.render=ht,_t.__scopeId="data-v-19d13576";var Tt=_t,wt={name:"App",components:{Dialog:Tt,Loading:ne}};wt.render=gt;var Dt=wt;n("8e1f");Object(r["h"])(Dt).use(mt).use(Be).use(o["a"],{locale:pt.a}).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},ebb0:function(e,t,n){"use strict";n("593b")},f320:function(e,t,n){},feb8:function(e,t,n){"use strict";n("c59e")}});
//# sourceMappingURL=app.6c5f4aa0.js.map