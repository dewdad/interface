(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-administration-redirects"],{c5c8:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center"},[r("button",{staticClass:"dvs-btn dvs-btn-primary dvs-btn-lg mr-4",on:{click:e.requestDeleteRedirect}},[e._v("Remove Redirect")])])},l=[],i=(r("ac6a"),r("cebc")),c=r("2f62"),a={name:"DeviseRedirectsDelete",props:{values:{type:Object,required:!0}},methods:Object(i["a"])({},Object(c["b"])("devise",["deleteGeneric"]),{requestDeleteRedirect:function(){var e=this;this.deleteGeneric({config:{apiendpoint:"redirects",recordLabel:"from_url"},record:this.values}).then(function(){e.$emit("done")})},cancel:function(){this.$emit("cancel")}})},s=a,o=r("0c7c"),u=Object(o["a"])(s,n,l,!1,null,null,null);t["default"]=u.exports},cae9:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(e){e.preventDefault()}}},[r("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[r("label",[e._v("From URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.from_url,expression:"localValue.from_url"}],attrs:{type:"text"},domProps:{value:e.localValue.from_url},on:{input:function(t){t.target.composing||e.$set(e.localValue,"from_url",t.target.value)}}})]),r("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[r("label",[e._v("To URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.to_url,expression:"localValue.to_url"}],attrs:{type:"text"},domProps:{value:e.localValue.to_url},on:{input:function(t){t.target.composing||e.$set(e.localValue,"to_url",t.target.value)}}})]),r("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-xs mr-2",attrs:{disabled:e.editInvalid},on:{click:e.requestEditRedirect}},[e._v("Edit 301 Redirect")]),r("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-text-xs",on:{click:e.cancel}},[e._v("Cancel")])])},l=[],i=(r("ac6a"),r("cebc")),c=r("2f62"),a={name:"DeviseRedirectsEdit",props:{values:{type:Object,required:!0}},data:function(){return{localValue:{}}},mounted:function(){this.localValue=Object(i["a"])({},this.values)},methods:Object(i["a"])({},Object(c["b"])("devise",["updateGeneric"]),{requestEditRedirect:function(){var e=this;this.updateGeneric({config:{apiendpoint:"redirects",recordLabel:"from_url"},record:this.localValue}).then(function(){e.$emit("done")})},cancel:function(){this.$emit("cancel")}}),computed:{editInvalid:function(){return!this.localValue.from_url||!this.localValue.to_url}}},s=a,o=r("0c7c"),u=Object(o["a"])(s,n,l,!1,null,null,null);t["default"]=u.exports},f369:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(e){e.preventDefault()}}},[r("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[r("label",[e._v("From URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newRedirect.from_url,expression:"newRedirect.from_url"}],attrs:{type:"text"},domProps:{value:e.newRedirect.from_url},on:{input:function(t){t.target.composing||e.$set(e.newRedirect,"from_url",t.target.value)}}})]),r("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[r("label",[e._v("To URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newRedirect.to_url,expression:"newRedirect.to_url"}],attrs:{type:"text"},domProps:{value:e.newRedirect.to_url},on:{input:function(t){t.target.composing||e.$set(e.newRedirect,"to_url",t.target.value)}}})]),r("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-xs mr-2",attrs:{disabled:e.createInvalid},on:{click:e.requestCreateSite}},[e._v("Create")]),r("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-text-xs",on:{click:e.cancel}},[e._v("Cancel")])])},l=[],i=r("cebc"),c=r("2f62"),a={name:"DeviseSiteCreate",data:function(){return{newRedirect:{from_url:null,to_url:null}}},methods:Object(i["a"])({},Object(c["b"])("devise",["createGeneric"]),{requestCreateSite:function(){var e=this;this.createGeneric({config:{apiendpoint:"redirects",recordLabel:"from_url"},record:this.newRedirect}).then(function(){e.$emit("done")})},cancel:function(){this.$emit("cancel")}}),computed:{createInvalid:function(){return null===this.newRedirect.from_url||null===this.newRedirect.to_url}}},s=a,o=r("0c7c"),u=Object(o["a"])(s,n,l,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=devise-administration-redirects.14897a94.js.map