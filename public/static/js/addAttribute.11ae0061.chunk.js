(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{329:function(e,t,n){"use strict";n(33),n(330)},330:function(e,t,n){},331:function(e,t,n){"use strict";n(286);var r=n(287),a=(n(292),n(296)),o=n(40),c=n(41),l=n(84),i=n(83),s=n(85),u=(n(293),n(291)),d=n(1),f=n.n(d),p=n(52),h=u.a.Option,b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!0,selectSources:[]},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.k)().then(function(t){var n=t.data;e.setState(function(e){return{selectSources:n,loading:!1}})})}},{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator,n=e.getFieldError,o=(0,e.isFieldTouched)("select_source")&&n("select_source");return f.a.createElement(r.a.Item,{label:"Select Source",validateStatus:o?"error":"",help:o||""},t("select_source",{initialValue:"database",rules:[{required:!0,message:"Please select a source!"}]})(f.a.createElement(u.a,{placeholder:"Please select a source",showSearch:!0,notFoundContent:this.state.loading?f.a.createElement(a.a,{size:"small"}):null},this.state.selectSources.map(function(e){return f.a.createElement(h,{key:e},e)}))))}}]),t}(d.PureComponent);t.a=b},332:function(e,t,n){"use strict";n.d(t,"a",function(){return k});var r=n(1),a=n(0),o=n(333),c=n.n(o),l=n(11),i=n.n(l),s=n(58),u=n(131),d=n(17),f=n(15);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=y(this,v(t).apply(this,arguments))).saveSwitch=function(t){e.rcSwitch=t},e.renderSwitch=function(t){var n,a=t.getPrefixCls,o=e.props,l=o.prefixCls,f=o.size,p=o.loading,m=o.className,y=void 0===m?"":m,v=o.disabled,g=a("switch",l),k=i()(y,(b(n={},"".concat(g,"-small"),"small"===f),b(n,"".concat(g,"-loading"),p),n)),O=p?r.createElement(d.a,{type:"loading",className:"".concat(g,"-loading-icon")}):null;return r.createElement(u.a,{insertExtraNode:!0},r.createElement(c.a,h({},Object(s.a)(e.props,["loading"]),{prefixCls:g,className:k,disabled:v||p,ref:e.saveSwitch,loadingIcon:O})))},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,(a=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return r.createElement(f.a,null,this.renderSwitch)}}])&&m(n.prototype,a),o&&m(n,o),t}();k.propTypes={prefixCls:a.string,size:a.oneOf(["small","default","large"]),className:a.string}},333:function(e,t,n){e.exports=n(334)},334:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(0),c=n.n(o),l=n(27);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(11),m=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=d(t).call(this,e),n=!a||"object"!==typeof a&&"function"!==typeof a?p(r):a,h(p(p(n)),"handleClick",function(e){var t=n.state.checked,r=n.props.onClick,a=!t;n.setChecked(a,e),r&&r(a,e)}),h(p(p(n)),"handleKeyDown",function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)}),h(p(p(n)),"handleMouseUp",function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)}),h(p(p(n)),"saveNode",function(e){n.node=e});var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:o},n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,c=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,r=n.disabled,a=n.onChange;r||("checked"in this.props||this.setState({checked:e}),a&&a(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,o=t.disabled,c=t.loadingIcon,l=t.checkedChildren,u=t.unCheckedChildren,d=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),f=this.state.checked,p=b((h(e={},n,!!n),h(e,r,!0),h(e,"".concat(r,"-checked"),f),h(e,"".concat(r,"-disabled"),o),e));return a.a.createElement("button",i({},d,{type:"button",role:"switch","aria-checked":f,disabled:o,className:p,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),c,a.a.createElement("span",{className:"".concat(r,"-inner")},f?l:u))}}])&&u(n.prototype,o),c&&u(n,c),t}();m.propTypes={className:c.a.string,prefixCls:c.a.string,disabled:c.a.bool,checkedChildren:c.a.any,unCheckedChildren:c.a.any,onChange:c.a.func,onMouseUp:c.a.func,onClick:c.a.func,tabIndex:c.a.number,checked:c.a.bool,defaultChecked:c.a.bool,autoFocus:c.a.bool,loadingIcon:c.a.node},m.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(l.polyfill)(m),t.default=m},489:function(e,t,n){"use strict";n.r(t);n(171);var r=n(86),a=(n(174),n(89)),o=(n(173),n(102)),c=(n(329),n(332)),l=(n(292),n(296)),i=(n(286),n(287)),s=(n(283),n(285)),u=n(9),d=n.n(u),f=(n(277),n(278)),p=n(101),h=(n(280),n(281)),b=n(279),m=n(40),y=n(41),v=n(84),g=n(83),k=n(85),O=(n(293),n(291)),S=n(1),E=n.n(S),C=n(34),w=n(3),j=n(52),_=n(331),P=O.a.Option;var F=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!1,backendType:[],fetchingBT:!0,frontendType:[],fetchingFT:!0,showSelectSource:!1},n.onSave=function(){var e=Object(b.a)(d.a.mark(function e(t){var r,a,o,c,l,i,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState(function(e){return{loading:!0}}),r=h.a.loading("Saving changes..",0),e.prev=2,a={data:{type:"attribute",attributes:Object(p.a)({},t)}},e.next=6,Object(j.m)({entity:n.props.entity},a,{});case 6:o=e.sent,n.props.dispatch(Object(w.a)({entity:n.props.entity,data:o})),r(),n.setState(function(e){return{loading:!1}}),h.a.success("Changes has been saved.",1).then(function(){n.props.close(),n.props.onAdd()}),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(2),"network"===e.t0.type?(c="Network Error",l=e.t0.message):"server"===e.t0.type&&500===e.t0.status?(c=e.t0.error.errors[0].title,l=e.t0.error.errors[0].detail):(i=n.props.form.setFields,s={},e.t0.error.errors.forEach(function(e){var n=e.source.pointer.split("/");s[n[n.length-1]]={touched:!0,value:t[n[n.length-1]],errors:[new Error(e.detail)]}}),i(s),c="Input Error",l=""),r(),f.a.error({message:c,description:l,duration:0}),n.setState(function(e){return{loading:!1}});case 19:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),n.handleFrontendChange=function(e){"select"===e?n.setState(function(e){return{showSelectSource:!0}}):n.setState(function(e){return{showSelectSource:!1}})},n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields(function(e,t){e?(Object.keys(e).forEach(function(t){e[t]=Object(p.a)({},e[t],{touched:!0})}),n.props.form.setFields(e)):n.onSave(t)})},n}return Object(k.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.form.validateFields().catch(function(){}),Object(j.f)().then(function(t){var n=t.data;e.setState(function(e){return{backendType:n,fetchingBT:!1}})}),Object(j.h)().then(function(t){var n=t.data;e.setState(function(e){return{frontendType:n,fetchingFT:!1}})})}},{key:"render",value:function(){var e,t=this.props.form,n=t.getFieldDecorator,u=t.getFieldsError,d=t.getFieldError,f=t.isFieldTouched,p=f("code")&&d("code"),h=f("frontend_label")&&d("frontend_label"),b=f("frontend_type")&&d("frontend_type"),m=f("is_required")&&d("is_required"),y=f("is_filterable")&&d("is_filterable"),v=f("is_searchable")&&d("is_searchable"),g=f("backend_type")&&d("backend_type");return E.a.createElement(i.a,{layout:"horizontal",onSubmit:this.handleSubmit},E.a.createElement(i.a.Item,{label:"Entity"},n("entity",{initialValue:this.props.entity})(E.a.createElement(s.a,{disabled:!0}))),E.a.createElement(i.a.Item,{label:"Code",validateStatus:p?"error":"",help:p||""},n("code",{rules:[{required:!0,message:"Please input code!"}]})(E.a.createElement(s.a,{placeholder:"Code",autoComplete:"off",autoFocus:!0}))),E.a.createElement(i.a.Item,{label:"Frontend Label",validateStatus:h?"error":"",help:h||""},n("frontend_label",{rules:[{required:!0,message:"Please input label!"}]})(E.a.createElement(s.a,{placeholder:"Frontend Label",autoComplete:"off"}))),E.a.createElement(i.a.Item,{label:"Frontend Type",validateStatus:b?"error":"",help:b||""},n("frontend_type",{rules:[{required:!0,message:"Please select frontend type!"}]})(E.a.createElement(O.a,{placeholder:"Please select frontend type",showSearch:!0,notFoundContent:this.state.fetchingFT?E.a.createElement(l.a,{size:"small"}):null,onChange:this.handleFrontendChange},this.state.frontendType.map(function(e){return E.a.createElement(P,{key:e},e)})))),this.state.showSelectSource&&E.a.createElement(_.a,{form:this.props.form}),E.a.createElement(a.a,null,E.a.createElement(o.a,{xs:8,md:2},E.a.createElement(i.a.Item,{label:"Required",validateStatus:m?"error":"",help:m||""},n("is_required",{valuePropName:"checked",initialValue:!0})(E.a.createElement(c.a,null)))),E.a.createElement(o.a,{xs:8,md:2},E.a.createElement(i.a.Item,{label:"Filterable",validateStatus:y?"error":"",help:y||""},n("is_filterable",{valuePropName:"checked",initialValue:!0})(E.a.createElement(c.a,null)))),E.a.createElement(o.a,{xs:8,md:2},E.a.createElement(i.a.Item,{label:"Searchable",validateStatus:v?"error":"",help:v||""},n("is_searchable",{valuePropName:"checked",initialValue:!0})(E.a.createElement(c.a,null))))),E.a.createElement(i.a.Item,{label:"Backend Type",validateStatus:g?"error":"",help:g||""},n("backend_type",{rules:[{required:!0,message:"Please select backend type!"}]})(E.a.createElement(O.a,{placeholder:"Please select backend type",notFoundContent:this.state.fetchingBT?E.a.createElement(l.a,{size:"small"}):null},this.state.backendType.map(function(e){return E.a.createElement(P,{key:e},e)})))),E.a.createElement(i.a.Item,null,E.a.createElement(r.a,{style:{marginRight:8},onClick:this.props.close},"Cancel"),E.a.createElement(r.a,{type:"primary",htmlType:"submit",loading:this.state.loading,disabled:(e=u(),Object.keys(e).some(function(t){return e[t]}))},"Save")))}}]),t}(S.PureComponent);F.defaultProps={onAdd:function(){return null},close:function(){return null}};var T=i.a.create({name:"add_attribute"})(F);t.default=Object(C.c)()(T)}}]);
//# sourceMappingURL=addAttribute.11ae0061.chunk.js.map