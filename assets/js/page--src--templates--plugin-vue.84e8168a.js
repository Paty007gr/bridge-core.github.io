(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{xumc:function(t,n,a){"use strict";a.r(n);var e={components:{DownloadCloudIcon:a("CjXH").e},computed:{plugin:function(){return this.$page.plugin},author:function(){return this.plugin.author}}},i=a("KHd+"),o=null,s=Object(i.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("Layout",{attrs:{showSidebars:!1}},[a("div",{staticClass:"mt-12 mx-12"},[a("h1",[t._v(t._s(t.plugin.title))]),a("div",{staticClass:"pb-2"},t._l(t.plugin.tags,(function(n){return a("g-link",{key:n.id,staticClass:"inline-block bg-ui-sidebar rounded-full px-3 py-1 text-sm font-semibold opacity-75 mr-2 mb-2 transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1",attrs:{to:n.path}},[t._v("\n\t\t\t\t#"+t._s(n.title)+"\n\t\t\t")])})),1),a("AuthorTag",{staticClass:"mb-4",staticStyle:{width:"fit-content"},attrs:{author:t.author}}),t.plugin.image?a("g-image",{staticClass:"mb-8",attrs:{src:t.plugin.image}}):t._e(),t.plugin.content?a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.plugin.content)}}):a("div",{staticClass:"content",domProps:{textContent:t._s(t.plugin.excerpt)}}),a("div",{staticClass:"flex mt-8 pt-4 border-t border-ui-border"},[a("g-link",{staticClass:"flex items-center px-6 py-4 text-2xl font-bold leading-none text-white rounded-lg shadow-lg bg-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1",style:"background: "+(t.author.themeColor||"var(--color-ui-primary)")+";",attrs:{to:"https://github.com/bridge-core/plugins/raw/master"+t.plugin.link}},[t._v("\n\t\t\t\tDownload\n\t\t\t\t"),a("DownloadCloudIcon",{staticClass:"ml-4",attrs:{size:"1x"}})],1)],1)],1)])}),[],!1,null,null,null);"function"==typeof o&&o(s);n.default=s.exports}}]);