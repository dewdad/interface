(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-query-selector"],{a501:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-4 dvs-pb-8  dvs-text-admin-fg  dvs-w-full"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],ref:"filter",staticClass:"dvs-bg-transparent dvs-border-b-2 dvs-px-12 dvs-py-2 dvs-text-admin-fg dvs-outline-none dvs-placeholder-admin-fg dvs-text-center",attrs:{type:"text",placeholder:e.value.label},domProps:{value:e.filter},on:{keyup:e.requestSearch,input:function(t){t.target.composing||(e.filter=t.target.value)}}}),s("div",{staticClass:"dvs-cursor-pointer",class:{"dvs-opacity-50":""===e.filter},on:{click:function(t){e.filter=""}}},[s("x-icon")],1)]),s("ul",{staticClass:"dvs-list-reset"},e._l(e.filteredSuggestions,function(t,a){return s("li",{key:a,staticClass:"dvs-bg-admin-bg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-2 dvs-cursor-pointer",on:{click:function(s){return e.selectSuggestion(t)}}},[s("div",{staticClass:"dvs-text-lg dvs-mb-2"},[e._v(e._s(t.displayFields[0].value))]),s("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.subLabelFields(t.displayFields),function(t,a){return s("li",{key:a,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight"},[s("div",{staticClass:"dvs-uppercase dvs-text-xs dvs-text-admin-secondary-fg"},[e._v(e._s(t.label))]),s("div",[e._v(e._s(t.value))])])}),0)])}),0),s("draggable",e._b({staticClass:"dvs-list-reset",attrs:{list:e.selected,tag:"ul"},on:{change:e.update}},"draggable",{group:{name:"g1"},animation:200,ghostClass:"dvs-ghost",handle:".handle",dragClass:"dvs-chosen-drag-slice",emptyInsertThreshold:10,removeCloneOnHide:!1},!1),e._l(e.selected,function(t,a){return s("li",{key:a,staticClass:"dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg dvs-rounded dvs-my-4 dvs-p-2 dvs-flex"},[e.value.allowSort?s("div",{staticClass:"dvs-mr-4 handle"},[s("menu-icon")],1):e._e(),s("div",{staticClass:"dvs-w-full"},[s("div",{staticClass:"dvs-text-lg dvs-mb-2"},[e._v(e._s(t.displayFields[0].value))]),s("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.subLabelFields(t.displayFields),function(t,a){return s("li",{key:a,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight"},[s("div",{staticClass:"dvs-uppercase dvs-text-xs dvs-text-admin-secondary-fg"},[e._v(e._s(t.label))]),s("div",[e._v(e._s(t.value))])])}),0)]),s("div",{staticClass:"dvs-cursor-pointer",on:{click:function(s){return e.removeSuggestion(t)}}},[s("x-icon")],1)])}),0)],1)},l=[],i=s("f499"),n=s.n(i),r=s("5176"),u=s.n(r),d=(s("ac6a"),s("cebc")),c=(s("7514"),s("2f62")),o={name:"DeviseQuerySelectorSearch",components:{draggable:function(){return Promise.resolve().then(s.t.bind(null,"1980",7))}},props:{value:{type:Object,required:!0}},computed:{filteredSuggestions:function(){var e=this;return this.autosuggest.data.filter(function(t){return!e.selected.find(function(e){return t.value===e.value})})}},data:function(){return{filter:null,autosuggest:{data:[]},selected:[]}},methods:Object(d["a"])({},Object(c["b"])("devise",["appGenericSearch"]),{update:function(){var e=this.value;e.value=[],this.selected.forEach(function(t){e.value.push(t.value)}),this.$emit("input",e)},selectSuggestion:function(e){this.selected.push(e),this.update()},removeSuggestion:function(e){this.resetSearch(),this.selected.splice(this.selected.indexOf(e),1)},resetSearch:function(){this.filter=null,this.autosuggest.data=[]},requestSearch:function(e){var t=this,s=e.target.value;if(""!==s){var a={searchterm:s};this.appGenericSearch({config:{apiendpoint:this.value.api},filters:a}).then(function(e){t.autosuggest=e.data,e.data.length<1&&window.deviseSettings.$bus.$emit("showMessage",{title:"No Suggestions Found",message:"We couldn't find any data with the term: \"".concat(s,'".')})})}else this.autosuggest=u()({},{})},subLabelFields:function(e){var t=JSON.parse(n()(e));return t.shift(),t}})},v=o,p=s("0c7c"),f=Object(p["a"])(v,a,l,!1,null,null,null);t["default"]=f.exports},bce6:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[e._v(e._s(e.value.label))]),s("select",{staticClass:"dvs-w-full",attrs:{type:"text",placeholder:e.value.label},domProps:{value:e.value.value},on:{change:e.updateValue}},[s("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("Please Select from the Following")]),e._l(e.options,function(t,a){return s("option",{key:a,domProps:{value:a}},[e._v("\n        "+e._s(t)+"\n      ")])})],2)])])},l=[],i=s("cebc"),n=s("2f62"),r={name:"DeviseQuerySelectorSelect",props:{value:{type:Object,required:!0}},data:function(){return{apiOptions:[]}},computed:{options:function(){return this.value.options?this.value.options:this.apiOptions}},mounted:function(){this.value.api&&this.requestOptions()},methods:Object(i["a"])({},Object(n["b"])("devise",["getGeneric"]),{updateValue:function(e){var t=this.value;t.value=e.target.value,this.$emit("input",t)},requestOptions:function(){var e=this;this.getGeneric({config:{app:!0,apiendpoint:this.value.api}}).then(function(t){e.apiOptions=t.data})}})},u=r,d=s("0c7c"),c=Object(d["a"])(u,a,l,!1,null,null,null);t["default"]=c.exports},dd2b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[e._v(e._s(e.value.label))]),s("input",{staticClass:"dvs-w-full",attrs:{type:"text",placeholder:e.value.label},on:{keyup:e.updateValue}})])])},l=[],i={name:"DeviseQuerySelectorText",props:{value:{type:Object,required:!0}},methods:{updateValue:function(e){var t=this.value;t.value=e.target.value,this.$emit("input",t)}}},n=i,r=s("0c7c"),u=Object(r["a"])(n,a,l,!1,null,null,null);t["default"]=u.exports},dda1:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[e._v(e._s(e.value.label))]),s("date-picker",{ref:"datepicker",attrs:{settings:{date:!0,time:!0}},on:{change:e.updateValue}})],1)])},l=[],i={name:"DeviseQuerySelectorText",components:{DatePicker:function(){return Promise.resolve().then(s.bind(null,"7e6e"))}},props:{value:{type:Object,required:!0}},methods:{updateValue:function(e){var t=this.value;t.value=e,this.$emit("input",t)}}},n=i,r=s("0c7c"),u=Object(r["a"])(n,a,l,!1,null,null,null);t["default"]=u.exports},e9bb:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-text-admin-fg"},[s("fieldset",{staticClass:"dvs-fieldset"},[s("label",{attrs:{for:"querykey"}},[e._v("Data Set Query")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.query.key,expression:"query.key"}],staticClass:"w-full",attrs:{name:"querykey",id:"querykey"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.query,"key",t.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("\n        Please Select a Data Set Query\n      ")]),e._l(e.modelQueries,function(t){return s("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.description))])})],2)]),e.selectedModelQuery&&e.selectedModelQuery.params.length>0?s("div",{staticClass:"dvs-mt-6"},e._l(e.selectedModelQuery.params,function(t,a){return s("div",{key:a},["search"===t.type?s("param-search",{model:{value:e.selectedModelQuery.params[a],callback:function(t){e.$set(e.selectedModelQuery.params,a,t)},expression:"selectedModelQuery.params[key]"}}):e._e(),"text"===t.type?s("param-text",{staticClass:"dvs-mb-4",model:{value:e.selectedModelQuery.params[a],callback:function(t){e.$set(e.selectedModelQuery.params,a,t)},expression:"selectedModelQuery.params[key]"}}):e._e(),"select"===t.type?s("param-select",{staticClass:"dvs-mb-4",model:{value:e.selectedModelQuery.params[a],callback:function(t){e.$set(e.selectedModelQuery.params,a,t)},expression:"selectedModelQuery.params[key]"}}):e._e(),"datetime"===t.type?s("param-datetime",{staticClass:"dvs-mb-4",model:{value:e.selectedModelQuery.params[a],callback:function(t){e.$set(e.selectedModelQuery.params,a,t)},expression:"selectedModelQuery.params[key]"}}):e._e()],1)}),0):e._e()])},l=[],i=(s("7514"),s("cebc")),n=(s("ac6a"),s("2f62")),r={name:"QuerySelector",components:{ParamDatetime:function(){return Promise.resolve().then(s.bind(null,"dda1"))},ParamSearch:function(){return Promise.resolve().then(s.bind(null,"a501"))},ParamSelect:function(){return Promise.resolve().then(s.bind(null,"bce6"))},ParamText:function(){return Promise.resolve().then(s.bind(null,"dd2b"))}},props:{value:{}},watch:{selectedModelQuery:{handler:function(e){var t=[];e.params.forEach(function(e){t.push(e.value)});var s={key:e.key,params:t};this.$emit("input",s)},deep:!0}},computed:Object(i["a"])({},Object(n["e"])("devise",["modelQueries"]),{selectedModelQuery:function(){var e=this;return this.modelQueries.find(function(t){return t.key===e.query.key})}}),data:function(){return{query:{key:null,params:[]},modelQuery:{}}}},u=r,d=s("0c7c"),c=Object(d["a"])(u,a,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=devise-query-selector.790d118a.js.map