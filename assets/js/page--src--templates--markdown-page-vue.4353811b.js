(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4Brf":function(t,e,n){"use strict";var i=n("I+eb"),r=n("g6v/"),o=n("2oRo"),s=n("UTVS"),a=n("hh1v"),c=n("m/L8").f,d=n("6JNq"),l=o.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var u={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(u[e]=!0),e};d(p,l);var f=p.prototype=l.prototype;f.constructor=p;var h=f.toString,m="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(s(u,t))return"";var n=m?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:p})}},"51lp":function(t,e){t.exports=[{name:"editor",sections:[{title:"Editor",items:["/editor-docs/","/latest-release/","/editor-docs/features/","/editor-docs/team/","/editor-docs/getting-started/","/editor-docs/migration-guide/","/editor-docs/faq/"]},{title:"Other",items:["/editor-docs/other/model-viewer/","/editor-docs/other/molang/"]}]},{name:"extensions",sections:[{title:"General",items:["/extension-docs/","/extension-docs/contributing/","/extension-docs/other/default-file-types/","/extension-docs/compiler-plugins/","/extension-docs/custom-molang/","/extension-docs/custom-commands/","/extension-docs/custom-components/","/extension-docs/json/file-definitions/","/extension-docs/json/lightning-cache/","/extension-docs/json/presets/","/extension-docs/json/themes/"]},{title:"Extension Modules",items:["/extension-docs/scripts/index/","/extension-docs/scripts/modules/bridge-com-mojang/","/extension-docs/scripts/modules/bridge-compare-version/","/extension-docs/scripts/modules/bridge-env/","/extension-docs/scripts/modules/bridge-fetch-definition/","/extension-docs/scripts/modules/bridge-file-importer/","/extension-docs/scripts/modules/bridge-fs/","/extension-docs/scripts/modules/bridge-globals/","/extension-docs/scripts/modules/bridge-json5/","/extension-docs/scripts/modules/bridge-monaco/","/extension-docs/scripts/modules/bridge-notifications/","/extension-docs/scripts/modules/bridge-path/","/extension-docs/scripts/modules/bridge-sidebar/","/extension-docs/scripts/modules/bridge-tab/","/extension-docs/scripts/modules/bridge-tab-actions/","/extension-docs/scripts/modules/bridge-theme/","/extension-docs/scripts/modules/bridge-toolbar/","/extension-docs/scripts/modules/bridge-ui/","/extension-docs/scripts/modules/bridge-utils/","/extension-docs/scripts/modules/bridge-windows/","/extension-docs/scripts/interfaces/builtin/","/extension-docs/scripts/interfaces/idisposable/","/extension-docs/scripts/interfaces/igethandleconfig/","/extension-docs/scripts/interfaces/imkdirconfig/","/extension-docs/scripts/interfaces/inotificationconfig/","/extension-docs/scripts/interfaces/isidebarconfig/","/extension-docs/scripts/interfaces/itabactionconfig/","/extension-docs/scripts/interfaces/itabpreviewconfig/","/extension-docs/scripts/interfaces/sidebarelement/","/extension-docs/scripts/interfaces/signal/"]}]}]},"5Tg+":function(t,e,n){var i=n("tiKp");e.f=i},"BX/b":function(t,e,n){var i=n("/GqU"),r=n("JBy8").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?function(t){try{return r(t)}catch(t){return s.slice()}}(t):r(i(t))}},O3Wj:function(t,e,n){"use strict";var i={components:{GithubIcon:n("CjXH").g},props:{githubLink:String,smallIcon:{default:!1,type:Boolean}}},r=n("KHd+"),o=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"flex items-center text-ui-primary",attrs:{href:this.githubLink,target:"_blank",rel:"noopener noreferrer",title:"Edit on GitHub",name:"Edit on GitHub"}},[e("GithubIcon",{staticClass:"inline mr-1",attrs:{size:this.smallIcon?"1.0x":"1.5x"}}),e("span",{staticClass:"underline pr-1 text-center"},[this._v("\n\t\tEdit this page on GitHub\n\t")])],1)}),[],!1,null,null,null);e.a=o.exports},"dG/n":function(t,e,n){var i=n("Qo9l"),r=n("UTVS"),o=n("5Tg+"),s=n("m/L8").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||s(e,t,{value:o.f(t)})}},pNMO:function(t,e,n){"use strict";var i=n("I+eb"),r=n("2oRo"),o=n("0GbY"),s=n("xDBR"),a=n("g6v/"),c=n("STAE"),d=n("/b8u"),l=n("0Dky"),u=n("UTVS"),p=n("6LWA"),f=n("hh1v"),h=n("glrk"),m=n("ewvW"),g=n("/GqU"),b=n("wE6v"),v=n("XGwC"),x=n("fHMY"),y=n("33Wh"),w=n("JBy8"),k=n("BX/b"),O=n("dBg+"),S=n("Bs8V"),j=n("m/L8"),C=n("0eef"),_=n("kRJp"),P=n("busE"),E=n("VpIT"),I=n("93I0"),$=n("0BK2"),T=n("kOOl"),L=n("tiKp"),A=n("5Tg+"),G=n("dG/n"),B=n("1E5z"),N=n("afO8"),J=n("tycR").forEach,H=I("hidden"),M=L("toPrimitive"),R=N.set,W=N.getterFor("Symbol"),U=Object.prototype,V=r.Symbol,X=o("JSON","stringify"),q=S.f,z=j.f,K=k.f,F=C.f,D=E("symbols"),Q=E("op-symbols"),Y=E("string-to-symbol-registry"),Z=E("symbol-to-string-registry"),tt=E("wks"),et=r.QObject,nt=!et||!et.prototype||!et.prototype.findChild,it=a&&l((function(){return 7!=x(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=q(U,e);i&&delete U[e],z(t,e,n),i&&t!==U&&z(U,e,i)}:z,rt=function(t,e){var n=D[t]=x(V.prototype);return R(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},ot=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},st=function(t,e,n){t===U&&st(Q,e,n),h(t);var i=b(e,!0);return h(n),u(D,i)?(n.enumerable?(u(t,H)&&t[H][i]&&(t[H][i]=!1),n=x(n,{enumerable:v(0,!1)})):(u(t,H)||z(t,H,v(1,{})),t[H][i]=!0),it(t,i,n)):z(t,i,n)},at=function(t,e){h(t);var n=g(e),i=y(n).concat(ut(n));return J(i,(function(e){a&&!ct.call(n,e)||st(t,e,n[e])})),t},ct=function(t){var e=b(t,!0),n=F.call(this,e);return!(this===U&&u(D,e)&&!u(Q,e))&&(!(n||!u(this,e)||!u(D,e)||u(this,H)&&this[H][e])||n)},dt=function(t,e){var n=g(t),i=b(e,!0);if(n!==U||!u(D,i)||u(Q,i)){var r=q(n,i);return!r||!u(D,i)||u(n,H)&&n[H][i]||(r.enumerable=!0),r}},lt=function(t){var e=K(g(t)),n=[];return J(e,(function(t){u(D,t)||u($,t)||n.push(t)})),n},ut=function(t){var e=t===U,n=K(e?Q:g(t)),i=[];return J(n,(function(t){!u(D,t)||e&&!u(U,t)||i.push(D[t])})),i};(c||(P((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===U&&n.call(Q,t),u(this,H)&&u(this[H],e)&&(this[H][e]=!1),it(this,e,v(1,t))};return a&&nt&&it(U,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return W(this).tag})),P(V,"withoutSetter",(function(t){return rt(T(t),t)})),C.f=ct,j.f=st,S.f=dt,w.f=k.f=lt,O.f=ut,A.f=function(t){return rt(L(t),t)},a&&(z(V.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),s||P(U,"propertyIsEnumerable",ct,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),J(y(tt),(function(t){G(t)})),i({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(Y,e))return Y[e];var n=V(e);return Y[e]=n,Z[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(u(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?x(t):at(x(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ut}),i({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(m(t))}}),X)&&i({target:"JSON",stat:!0,forced:!c||l((function(){var t=V();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}))},{stringify:function(t,e,n){for(var i,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(i=e,(f(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),r[1]=e,X.apply(null,r)}});V.prototype[M]||_(V.prototype,M,V.prototype.valueOf),B(V,"Symbol"),$[H]=!0},zwLt:function(t,e,n){"use strict";n.r(e);n("pNMO"),n("4Brf"),n("TeQF");var i={data:function(){return{activeAnchor:"",observer:null}},computed:{page:function(){return this.$page.markdownPage},headings:function(){return this.page.headings.filter((function(t){return t.depth>1}))}},watch:{$route:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.observer.disconnect(),this.$nextTick(this.initObserver)}},methods:{observerCallback:function(t,e){if(!(t.length>1)){var n=t[0].target.id;n&&(this.activeAnchor="#"+n,history.replaceState&&history.replaceState(null,null,"#"+n))}},initObserver:function(){if(window.IntersectionObserver){this.observer=new IntersectionObserver(this.observerCallback,{rootMargin:"0px 0px 99999px",threshold:1});for(var t=document.querySelectorAll(".content h2, .content h3, .content h4, .content h5, .content h6"),e=0;e<t.length;e++)this.observer.observe(t[e])}}},mounted:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.$nextTick(this.initObserver)}},r=n("KHd+"),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 sm:pl-4 md:pl-6 md:pt-12 lg:pl-8 sm:pb-16 sm:border-l border-ui-border md:mt-0"},[n("h3",{staticClass:"pt-0 mt-0 text-sm tracking-wide uppercase border-none"},[t._v("\n\t\tOn this page\n\t")]),n("div",[n("ul",{staticClass:"list-none"},t._l(t.headings,(function(e,i){var r;return n("li",{key:""+t.page.path+e.anchor,class:(r={"border-t border-dashed border-ui-border pt-2 mt-2":i>0&&2===e.depth,"font-semibold":2===e.depth},r["depth-"+e.depth]=!0,r)},[n("g-link",{staticClass:"relative flex items-center py-1 text-sm transition transform hover:translate-x-1",class:{"pl-2":3===e.depth,"pl-3":4===e.depth,"pl-4":5===e.depth,"pl-5":6===e.depth,"font-bold text-ui-primary":t.activeAnchor===e.anchor},attrs:{to:""+t.page.path+e.anchor}},[n("span",{staticClass:"absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center",class:{"opacity-100 scale-100":t.activeAnchor===e.anchor}}),t._v("\n\t\t\t\t\t"+t._s(e.value)+"\n\t\t\t\t")])],1)})),0)])])}),[],!1,null,null,null).exports,s=(n("fbCW"),n("yXV3"),n("2B1R"),n("uFwe")),a=n("CjXH"),c=n("51lp"),d=n.n(c);function l(t){var e,n=Object(s.a)(d.a);try{for(n.s();!(e=n.n()).done;){var i,r=e.value,o=Object(s.a)(r.sections);try{for(o.s();!(i=o.n()).done;){var a=i.value,c=a.items.indexOf(t);if(-1!==c)return{items:a.items,index:c}}}catch(t){o.e(t)}finally{o.f()}}}catch(t){n.e(t)}finally{n.f()}return{items:[],index:-1}}var u={components:{ArrowLeftIcon:a.a,ArrowRightIcon:a.b},computed:{page:function(){return this.$page.markdownPage},pages:function(){return this.$page.allMarkdownPage.edges.map((function(t){return t.node}))},next:function(){var t=this.page.next||function(t){var e=l(t),n=e.items,i=e.index;if(-1!==i&&i!==n.length-1)return n[i+1]}(this.page.path);return!(this.pages&&!t)&&this.pages.find((function(e){return e.path===t}))},prev:function(){var t=this.page.prev||function(t){var e=l(t),n=e.items,i=e.index;if(-1!==i&&0!==i)return n[i-1]}(this.page.path);return!(this.pages&&!t)&&this.pages.find((function(e){return e.path===t}))}}},p={components:{OnThisPage:o,NextPrevLinks:Object(r.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col sm:flex-row justify-between items-center"},[t.prev?n("g-link",{staticClass:"mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.prev.path}},[n("ArrowLeftIcon",{staticClass:"mr-2",attrs:{size:"1x"}}),t._v("\n\t\t\t"+t._s(t.prev.title)+"\n\t\t")],1):t._e(),t.next?n("g-link",{staticClass:"flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.next.path}},[t._v("\n\t\t\t"+t._s(t.next.title)+"\n\t\t\t"),n("ArrowRightIcon",{staticClass:"ml-2",attrs:{size:"1x"}})],1):t._e()],1)])}),[],!1,null,null,null).exports,GithubEdit:n("O3Wj").a},metaInfo:function(){var t=this.$page.markdownPage.title,e=this.$page.markdownPage.description||this.$page.markdownPage.excerpt||"bridge. is a powerful add-on editor designed to speed up your development process. It provides a rich editing experience for all files inside behavior and resource packs (JavaScript, JSON and functions) and provides a powerful work environment. Unleash the full power of add-ons with bridge. plugins and make use of rich auto-completions provided as you navigate through a file. Creating Minecraft add-ons was never more convenient!";return{title:t,meta:[{name:"description",content:e},{key:"og:title",name:"og:title",content:t+" - bridge."},{key:"twitter:title",name:"twitter:title",content:t+" - bridge."},{key:"og:description",name:"og:description",content:e},{key:"twitter:description",name:"twitter:description",content:e}]}},computed:{githubLink:function(){return"https://github.com/bridge-core/bridge-core.github.io/blob/master/content/docs/"+this.$page.markdownPage.fileInfo.path},author:function(){return this.$page.markdownPage.author}}},f=null,h=Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"flex flex-wrap items-start justify-start"},[n("div",{staticClass:"order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky",staticStyle:{top:"4rem"}},[n("OnThisPage")],1),n("div",{staticClass:"order-1 w-full md:w-2/3"},[n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.$page.markdownPage.content)}}),n("div",{staticClass:"flex items-center mt-8 mb-4 lg:mt-12 lg:mb-6"},[t.author?n("AuthorTag",{attrs:{author:t.author}}):t._e(),t.author?n("span",{staticClass:"mx-8 border-r border-ui-border"},[t._v("\n\t\t\t\t\t \n\t\t\t\t")]):t._e(),n("GithubEdit",{attrs:{githubLink:t.githubLink}})],1),n("div",{staticClass:"pt-8 lg:pt-12 border-t border-ui-border"},[n("NextPrevLinks")],1)])])])}),[],!1,null,null,null);"function"==typeof f&&f(h);e.default=h.exports}}]);