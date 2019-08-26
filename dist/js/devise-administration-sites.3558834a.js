(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-administration-sites"],{"26ae":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.name,expression:"localValue.name"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Name of the Site"},domProps:{value:e.localValue.name},on:{input:function(t){t.target.composing||e.$set(e.localValue,"name",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("\n      Domain\n      "),a("help",{staticClass:"dvs-mb-8",attrs:{compact:!0}},[e._v('The domain should not include the http or https:// protocol identifier. So your site entry could be "my-super-awesome-site.com" or "sub-domain.my-super-awesome-site.com". To Support development environments you can override these values in your .env file in the root of your project with something like "SITE_1_DOMAIN=my-super-awesome-site.test" for your local development or staging.')])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.domain,expression:"localValue.domain"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Domain of the Site"},domProps:{value:e.localValue.domain},on:{input:function(t){t.target.composing||e.$set(e.localValue,"domain",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.localValue.language_id,expression:"localValue.language_id"}],staticClass:"w-full",attrs:{type:"text"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.localValue,"language_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("Select a Default Language")]),e._l(e.languages.data,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.code))])})],2)]),a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-xs mr-2",attrs:{disabled:e.editInvalid},on:{click:e.requestEditSite}},[e._v("Edit Site")]),a("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-text-xs",on:{click:e.cancel}},[e._v("Cancel")])])},i=[],s=(a("7f7f"),a("7514"),a("ac6a"),a("cebc")),l=a("2f62"),o={name:"DeviseSitesEdit",props:{values:{type:Object,required:!0}},data:function(){return{localValue:{}}},mounted:function(){this.localValue=Object(s["a"])({},this.values),this.loadLanguages()},methods:Object(s["a"])({},Object(l["b"])("devise",["updateGeneric","getGeneric"]),{requestEditSite:function(){var e=this;this.updateGeneric({config:{apiendpoint:"sites",recordLabel:"name"},record:this.localValue}).then(function(){e.$emit("done")})},loadLanguages:function(){var e=this;this.getGeneric({config:{apiendpoint:"languages",store:"languages"}}).then(function(t){if(t.data&&t.data.data&&t.data.data.length>0){var a=t.data.data.find(function(e){return 1===e.default});e.localValue.language_id=a.id}})},cancel:function(){this.$emit("cancel")}}),computed:Object(s["a"])({},Object(l["e"])("devise",["languages"]),{editInvalid:function(){return!this.localValue.name||!this.localValue.domain||!this.localValue.language_id}})},c=o,r=a("0c7c"),u=Object(r["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports},"4c71":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newSite.name,expression:"newSite.name"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Name of the Site"},domProps:{value:e.newSite.name},on:{input:function(t){t.target.composing||e.$set(e.newSite,"name",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("\n      Domain\n      "),a("help",{staticClass:"dvs-mb-8",attrs:{compact:!0}},[e._v('The domain should not include the http or https:// protocol identifier. So your site entry could be "my-super-awesome-site.com" or "sub-domain.my-super-awesome-site.com". To Support development environments you can override these values in your .env file in the root of your project with something like "SITE_1_DOMAIN=my-super-awesome-site.test" for your local development or staging.')])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newSite.domain,expression:"newSite.domain"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Domain of the Site"},domProps:{value:e.newSite.domain},on:{input:function(t){t.target.composing||e.$set(e.newSite,"domain",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newSite.language_id,expression:"newSite.language_id"}],staticClass:"w-full",attrs:{type:"text"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.newSite,"language_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("Select a Default Language")]),e._l(e.languages.data,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.code))])})],2)]),a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-xs mr-2",attrs:{disabled:e.createInvalid},on:{click:e.requestCreateSite}},[e._v("Create")]),a("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-text-xs",on:{click:e.cancel}},[e._v("Cancel")])])},i=[],s=(a("7f7f"),a("cebc")),l=a("2f62"),o={name:"DeviseSiteCreate",data:function(){return{newSite:{name:null,domain:null,language_id:null,settings:{}}}},mounted:function(){this.loadLanguages()},methods:Object(s["a"])({},Object(l["b"])("devise",["createGeneric","getGeneric"]),{requestCreateSite:function(){var e=this;this.createGeneric({config:{apiendpoint:"sites",recordLabel:"name"},record:this.newSite}).then(function(){e.$emit("done")})},loadLanguages:function(){var e=this;this.getGeneric({config:{apiendpoint:"languages",store:"languages"}}).then(function(t){t.data&&t.data.data&&t.data.data.length>0&&(e.newSite.language_id=t.data.data[0].id)})},cancel:function(){this.$emit("cancel")}}),computed:Object(s["a"])({},Object(l["e"])("devise",["languages"]),{createInvalid:function(){return null===this.newSite.name||null===this.newSite.domain||null===this.newSite.language_id}})},c=o,r=a("0c7c"),u=Object(r["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports},"80a8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-center"},[a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-btn-lg mr-4",on:{click:e.requestDeleteUser}},[e._v("Remove User")])])},i=[],s=(a("ac6a"),a("cebc")),l=a("2f62"),o={name:"DeviseUsersDelete",props:{values:{type:Object,required:!0}},methods:Object(s["a"])({},Object(l["b"])("devise",["deleteGeneric"]),{requestDeleteUser:function(){var e=this;this.deleteGeneric({config:{apiendpoint:"users",recordLabel:"name"},record:this.values}).then(function(){e.$emit("done")})},cancel:function(){this.$emit("cancel")}})},c=o,r=a("0c7c"),u=Object(r["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=devise-administration-sites.3558834a.js.map