(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{277:function(e,t,n){"use strict";n(33),n(288)},278:function(e,t,n){"use strict";var o=n(1),a=n(282),r=n(17);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c,s={},l=4.5,u=24,p=24,m="topRight";function f(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;switch(e){case"topLeft":t={left:0,top:n,bottom:"auto"};break;case"topRight":t={right:0,top:n,bottom:"auto"};break;case"bottomLeft":t={left:0,top:"auto",bottom:o};break;default:t={right:0,top:"auto",bottom:o}}return t}var d={success:"check-circle-o",info:"info-circle-o",error:"close-circle-o",warning:"exclamation-circle-o"};var v={open:function(e){var t=e.prefixCls||"ant-notification",n="".concat(t,"-notice"),i=void 0===e.duration?l:e.duration,u=null;if(e.icon)u=o.createElement("span",{className:"".concat(n,"-icon")},e.icon);else if(e.type){var p=d[e.type];u=o.createElement(r.a,{className:"".concat(n,"-icon ").concat(n,"-icon-").concat(e.type),type:p})}var v=!e.description&&u?o.createElement("span",{className:"".concat(n,"-message-single-line-auto-margin")}):null;!function(e,t){var n=e.prefixCls,i=e.placement,l=void 0===i?m:i,u=e.getContainer,p=void 0===u?c:u,d=e.top,v=e.bottom,y="".concat(n,"-").concat(l);s[y]?t(s[y]):a.a.newInstance({prefixCls:n,className:"".concat(n,"-").concat(l),style:f(l,d,v),getContainer:p,closeIcon:o.createElement(r.a,{className:"".concat(n,"-close-icon"),type:"close"})},function(e){s[y]=e,t(e)})}({prefixCls:t,placement:e.placement,top:e.top,bottom:e.bottom,getContainer:e.getContainer},function(t){t.notice({content:o.createElement("div",{className:u?"".concat(n,"-with-icon"):""},u,o.createElement("div",{className:"".concat(n,"-message")},v,e.message),o.createElement("div",{className:"".concat(n,"-description")},e.description),e.btn?o.createElement("span",{className:"".concat(n,"-btn")},e.btn):null),duration:i,closable:!0,onClose:e.onClose,onClick:e.onClick,key:e.key,style:e.style||{},className:e.className})})},close:function(e){Object.keys(s).forEach(function(t){return s[t].removeNotice(e)})},config:function(e){var t=e.duration,n=e.placement,o=e.bottom,a=e.top,r=e.getContainer;void 0!==t&&(l=t),void 0!==n&&(m=n),void 0!==o&&(p=o),void 0!==a&&(u=a),void 0!==r&&(c=r)},destroy:function(){Object.keys(s).forEach(function(e){s[e].destroy(),delete s[e]})}};["success","info","warning","error"].forEach(function(e){v[e]=function(t){return v.open(i({},t,{type:e}))}}),v.warn=v.warning,t.a=v},279:function(e,t,n){"use strict";function o(e,t,n,o,a,r,i){try{var c=e[r](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(o,a)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function c(e){o(i,a,r,c,s,"next",e)}function s(e){o(i,a,r,c,s,"throw",e)}c(void 0)})}}n.d(t,"a",function(){return a})},280:function(e,t,n){"use strict";n(33),n(289)},281:function(e,t,n){"use strict";var o,a,r,i,c=n(1),s=n(282),l=n(17),u=3,p=1,m="ant-message",f="move-up";var d={open:function(e){var t=void 0!==e.duration?e.duration:u,n={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],d=p++,v=new Promise(function(u){var p=function(){return"function"===typeof e.onClose&&e.onClose(),u(!0)};!function(e){a?e(a):s.a.newInstance({prefixCls:m,transitionName:f,style:{top:o},getContainer:r,maxCount:i},function(t){a?e(a):(a=t,e(t))})}(function(o){var a=c.createElement(l.a,{type:n,theme:"loading"===n?"outlined":"filled"});o.notice({key:d,duration:t,style:{},content:c.createElement("div",{className:"".concat(m,"-custom-content").concat(e.type?" ".concat(m,"-").concat(e.type):"")},e.icon?e.icon:n?a:"",c.createElement("span",null,e.content)),onClose:p})})}),y=function(){a&&a.removeNotice(d)};return y.then=function(e,t){return v.then(e,t)},y.promise=v,y},config:function(e){void 0!==e.top&&(o=e.top,a=null),void 0!==e.duration&&(u=e.duration),void 0!==e.prefixCls&&(m=e.prefixCls),void 0!==e.getContainer&&(r=e.getContainer),void 0!==e.transitionName&&(f=e.transitionName,a=null),void 0!==e.maxCount&&(i=e.maxCount,a=null)},destroy:function(){a&&(a.destroy(),a=null)}};["success","info","warning","error","loading"].forEach(function(e){d[e]=function(t,n,o){return"function"===typeof n&&(o=n,n=void 0),d.open({content:t,duration:n,type:e,onClose:o})}}),d.warn=d.warning,t.a=d},282:function(e,t,n){"use strict";var o=n(22),a=n.n(o),r=n(35),i=n.n(r),c=n(5),s=n.n(c),l=n(10),u=n.n(l),p=n(24),m=n.n(p),f=n(8),d=n.n(f),v=n(12),y=n.n(v),h=n(1),g=n.n(h),C=n(0),b=n.n(C),k=n(13),E=n.n(k),N=n(61),w=n(129),x=n(11),T=n.n(x),O=function(e){function t(){var e,n,o,a;u()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=o=d()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.close=function(e){e&&e.stopPropagation(),o.clearCloseTimer(),o.props.onClose()},o.startCloseTimer=function(){o.props.duration&&(o.closeTimer=setTimeout(function(){o.close()},1e3*o.props.duration))},o.clearCloseTimer=function(){o.closeTimer&&(clearTimeout(o.closeTimer),o.closeTimer=null)},a=n,d()(o,a)}return y()(t,e),m()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",o=(e={},i()(e,""+n,1),i()(e,n+"-closable",t.closable),i()(e,t.className,!!t.className),e);return g.a.createElement("div",{className:T()(o),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},g.a.createElement("div",{className:n+"-content"},t.children),t.closable?g.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},t.closeIcon||g.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(h.Component);O.propTypes={duration:b.a.number,onClose:b.a.func,children:b.a.any,update:b.a.bool,closeIcon:b.a.node},O.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var j=O,S=0,I=Date.now();var _=function(e){function t(){var e,n,o,a;u()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=o=d()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={notices:[]},o.add=function(e){var t=e.key=e.key||"rcNotification_"+I+"_"+S++,n=o.props.maxCount;o.setState(function(o){var a=o.notices,r=a.map(function(e){return e.key}).indexOf(t),i=a.concat();return-1!==r?i.splice(r,1,e):(n&&a.length>=n&&(e.updateKey=i[0].updateKey||i[0].key,i.shift()),i.push(e)),{notices:i}})},o.remove=function(e){o.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},a=n,d()(o,a)}return y()(t,e),m()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,o=this.state.notices,a=o.map(function(e,a){var r=Boolean(a===o.length-1&&e.updateKey),i=e.updateKey?e.updateKey:e.key,c=Object(w.a)(t.remove.bind(t,e.key),e.onClose);return g.a.createElement(j,s()({prefixCls:n.prefixCls},e,{key:i,update:r,onClose:c,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)}),r=(e={},i()(e,n.prefixCls,1),i()(e,n.className,!!n.className),e);return g.a.createElement("div",{className:T()(r),style:n.style},g.a.createElement(N.a,{transitionName:this.getTransitionName()},a))}}]),t}(h.Component);_.propTypes={prefixCls:b.a.string,transitionName:b.a.string,animation:b.a.oneOfType([b.a.string,b.a.object]),style:b.a.object,maxCount:b.a.number,closeIcon:b.a.node},_.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},_.newInstance=function(e,t){var n=e||{},o=n.getContainer,r=a()(n,["getContainer"]),i=document.createElement("div");o?o().appendChild(i):document.body.appendChild(i);var c=!1;E.a.render(g.a.createElement(_,s()({},r,{ref:function(e){c||(c=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){E.a.unmountComponentAtNode(i),i.parentNode.removeChild(i)}}))}})),i)};var P=_;t.a=P},288:function(e,t,n){},289:function(e,t,n){},478:function(e,t,n){"use strict";n.r(t);n(171);var o=n(86),a=(n(286),n(287)),r=(n(283),n(285)),i=n(9),c=n.n(i),s=(n(277),n(278)),l=(n(280),n(281)),u=n(279),p=n(40),m=n(41),f=n(84),d=n(83),v=n(85),y=n(1),h=n.n(y),g=n(34),C=n(52);var b=function(e){function t(){var e,n;Object(p.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!1},n.onSave=function(){var e=Object(u.a)(c.a.mark(function e(t){var o,a,r,i,u,p,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState(function(e){return{loading:!0}}),o=l.a.loading("Saving changes..",0),e.prev=2,a={data:{type:"attribute_set",attributes:{name:t.name}}},e.next=6,Object(C.r)({entity:n.props.entity.entity_code},a,{});case 6:r=e.sent,n.props.updateSet(r),o(),n.setState(function(e){return{loading:!1}}),l.a.success("Changes has been saved.",1).then(function(){n.props.close()}),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(2),"network"===e.t0.type?(i="Network Error",u=e.t0.message):"server"===e.t0.type&&500===e.t0.status?(i=e.t0.error.errors[0].title,u=e.t0.error.errors[0].detail):(p=n.props.form.setFields,m={},e.t0.error.errors.forEach(function(e){var n=e.source.pointer.split("/");m[n[n.length-1]]={touched:!0,value:t[n[n.length-1]],errors:[new Error(e.detail)]}}),p(m),i="Input Error",u=""),o(),s.a.error({message:i,description:u,duration:0}),n.setState(function(e){return{loading:!1}});case 19:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){e||n.onSave(t)})},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields().catch(function(){})}},{key:"render",value:function(){var e,t=this.props.form,n=t.getFieldDecorator,i=t.getFieldsError,c=t.getFieldError,s=(0,t.isFieldTouched)("name")&&c("name");return h.a.createElement(a.a,{layout:"horizontal",onSubmit:this.handleSubmit},h.a.createElement(a.a.Item,{label:"Entity"},n("entity",{initialValue:this.props.entity.entity_code})(h.a.createElement(r.a,{disabled:!0}))),h.a.createElement(a.a.Item,{label:"Name",validateStatus:s?"error":"",help:s||""},n("name",{rules:[{required:!0,message:"Please input name!"}]})(h.a.createElement(r.a,{placeholder:"Name",autoComplete:"off",autoFocus:!0}))),h.a.createElement(a.a.Item,null,h.a.createElement(o.a,{style:{marginRight:8},onClick:this.props.close},"Cancel"),h.a.createElement(o.a,{type:"primary",htmlType:"submit",loading:this.state.loading,disabled:(e=i(),Object.keys(e).some(function(t){return e[t]}))},"Save")))}}]),t}(y.PureComponent),k=a.a.create({name:"add_group"})(b);t.default=Object(g.c)()(k)}}]);
//# sourceMappingURL=addSet.31594bfa.chunk.js.map