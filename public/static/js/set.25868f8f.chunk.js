(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{494:function(e,t,r){"use strict";r.r(t);r(174);var n=r(89),a=(r(173),r(102)),o=(r(301),r(71)),i=(r(171),r(86)),s=(r(339),r(361)),p=r(9),u=r.n(p),c=(r(277),r(278)),l=(r(280),r(281)),d=r(101),b=r(279),g=r(40),f=r(41),m=r(84),h=r(83),y=r(85),v=r(359),j=r(29),O=r(1),w=r.n(O),x=r(34),A=r(30),E=r(460),D=r.n(E),k=r(336),C=r(3),G=r(128),S=r(52),I=r(44),P=r(80),z=r(96),R=r(140),T=(r(356),r(360)),J=(r(309),r(302)),L=(r(325),r(328)),N=(r(103),r(17));function V(){var e=Object(j.a)(["\n    border-radius: 6px;\n    margin-right: 8px;\n    margin-bottom: 8px;\n    padding: 10px;\n    background-color: white;\n    border: 1px solid #e8e8e8;\n"]);return V=function(){return e},e}function q(){var e=Object(j.a)(["\n    margin-left: 24px;\n    cursor: pointer;\n"]);return q=function(){return e},e}function H(){var e=Object(j.a)(["\n    font-style: normal;\n    vertical-align: -0.125em;\n    text-align: center;\n    text-transform: none;\n    line-height: 0;\n    text-rendering: optimizeLegibility;\n    font-size: 12px;\n    position: absolute;\n    display: inline-block;\n    line-height: 46px;\n    vertical-align: top;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 16px;\n"]);return H=function(){return e},e}function M(){var e=Object(j.a)(["\n    padding: 4px 16px 16px 16px;\n    display: flex;\n    flex-wrap: wrap;\n"]);return M=function(){return e},e}function _(){var e=Object(j.a)(["\n    line-height: 22px;\n    padding: 12px 0 12px 40px;\n    color: rgba(0, 0, 0, 0.85);\n    position: relative;\n    transition: all 0.3s;\n"]);return _=function(){return e},e}function F(){var e=Object(j.a)(["\n    background: #f7f7f7;\n    border-radius: 4px;\n    margin-bottom: 24px;\n    border: 0px;\n    overflow: hidden;\n"]);return F=function(){return e},e}var Y=A.a.div(F()),B=A.a.div(_()),K=A.a.div(M()),Q=Object(A.a)(N.a)(H()),U=Object(A.a)(i.a)(q()),W=A.a.div(V()),X=function(e){function t(){return Object(g.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(C.i)({params:{entity:this.props.entity,set:this.props.set,group:this.props.group.get("id")}}))}},{key:"render",value:function(){var e=this,t=this.props.group,r=this.props.index;return w.a.createElement(k.b,{key:t.get("id"),draggableId:"group-".concat(t.get("id")),index:r},function(n,a){return w.a.createElement(Y,Object.assign({ref:n.innerRef},n.draggableProps),w.a.createElement(B,null,w.a.createElement(Q,Object.assign({type:"drag"},n.dragHandleProps)),w.a.createElement("span",null,t.get("name")),w.a.createElement(U,{type:"dashed",shape:"circle",icon:"edit",size:"small",onClick:function(){return e.props.edit(t.get("id"),t.get("name"),r)}}),w.a.createElement(L.a,{type:"vertical"}),w.a.createElement(J.a,{title:"Sure to delete?",onConfirm:function(){return e.props.delete(t.get("id"),r)}},w.a.createElement(N.a,{type:"delete",style:{color:"red"}}))),w.a.createElement(k.c,{droppableId:"group-".concat(t.get("id")),type:"attributes",direction:"horizontal"},function(t,r){return w.a.createElement(K,{ref:t.innerRef},w.a.createElement(T.a,{active:!0,loading:e.props.loading},e.props.attributes.map(function(e,t){return w.a.createElement(k.b,{key:e.get("id"),draggableId:"attr-".concat(e.get("id")),index:t},function(t,r){return w.a.createElement(W,Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),"".concat(e.get("frontend_label")," (").concat(e.get("attribute_code"),")"))})}),t.placeholder))}))})}}]),t}(O.PureComponent);var Z=Object(x.c)(function(e,t){return{attributes:Object(G.c)(e,t.group.get("id")),loading:e.app.getIn(["groups","attributes",t.group.get("id"),"loading"])}})(X);function $(){var e=Object(j.a)(["\n    height: calc(90vh - 108px);\n    overflow: auto;\n"]);return $=function(){return e},e}function ee(){var e=Object(j.a)(["\n    background-color: #fff;\n"]);return ee=function(){return e},e}var te=Object(O.lazy)(function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(6)]).then(r.bind(null,496))}),re=Object(O.lazy)(function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(11)]).then(r.bind(null,497))}),ne=Object(O.lazy)(function(){return Promise.all([r.e(0),r.e(21),r.e(8)]).then(r.bind(null,498))}),ae=Object(O.lazy)(function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(5)]).then(r.bind(null,489))}),oe=A.a.div(ee()),ie=A.a.div($()),se=function(e,t,r){var n=Array.from(e),a=n.splice(t,1),o=Object(v.a)(a,1)[0];return n.splice(r,0,o),Object(P.c)(n)},pe=function(e,t,r,n){var a=Array.from(e),o=Array.from(t),i=a.splice(r.index,1),s=Object(v.a)(i,1)[0];o.splice(n.index,0,s);var p={};return p[r.droppableId]=a,p[n.droppableId]=Object(P.c)(o),p.moved=s,p},ue=function(e){function t(){var e,r;Object(g.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={subDrawer:!1,subDrawerContent:null,subDrawerTitle:null,subDrawerData:{},loading:!1},r.getAttributes=function(){return[]},r.updateAttributes=function(){return null},r.reloadAttributeList=function(){return null},r.componentDidMount=function(){r.props.dispatch(Object(C.h)({params:{entity:r.props.entity,set:r.props.set.id}})),r.props.canClose(function(){return!r.props.hasChanges}),r.props.onClose(function(){return r.props.dispatch(Object(C.c)({type:"entityViewer",changed:!1}))})},r.addGroup=function(){r.setState({subDrawerContent:"addGroup",subDrawerTitle:"Add Group",subDrawer:!0})},r.editGroup=function(e,t,n){r.setState({subDrawerContent:"editGroup",subDrawerTitle:"Edit Group",subDrawerData:{id:e,name:t,updateIndex:n},subDrawer:!0})},r.deleteGroup=function(){var e=Object(b.a)(u.a.mark(function e(t,n){var a,o,i,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState(function(e){return Object(d.a)({},e,{loading:!0})}),a=l.a.loading("Deleting..",0),e.prev=2,e.next=5,Object(S.b)({entity:r.props.entity,set:r.props.set.id,group:t});case 5:return a(),o=r.props.groups.toJS().find(function(e){return e.id===t}),r.props.getGroupAttr(o.id).forEach(function(e){r.updateAttributes(e,!0)}),r.props.dispatch(Object(C.k)({set:r.props.set.id,removeIndex:n})),l.a.success("Group deleted.",2),e.next=12,r.onSave();case 12:e.next=20;break;case 14:e.prev=14,e.t0=e.catch(2),"network"===e.t0.type?(i="Network Error",s=e.t0.message):"server"===e.t0.type&&(i=e.t0.error.errors[0].title,s=e.t0.error.errors[0].detail),a(),c.a.error({message:i,description:s,duration:0}),r.setState(function(e){return Object(d.a)({},e,{loading:!1})});case 20:case"end":return e.stop()}},e,null,[[2,14]])}));return function(t,r){return e.apply(this,arguments)}}(),r.onCancel=function(){r.props.close()},r.onSave=Object(b.a)(u.a.mark(function e(){var t,n,a,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState(function(e){return{loading:!0}}),t=l.a.loading("Saving changes..",0),n=(n=Object(P.c)(r.props.groups)).toJS().map(function(e){var t=Object(P.c)(r.props.getGroupAttr(e.id)).map(function(e){return{id:e.get("id"),type:e.get("type"),sequence:e.get("sequence")}});return e.attributes=t.toJS(),e}),e.prev=4,e.next=7,Object(S.s)({entity:r.props.entity,set:r.props.set.id},n,{});case 7:r.props.dispatch(Object(C.c)({type:"entityViewer",changed:!1})),t(),l.a.success("Changes has been saved."),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),"network"===e.t0.type?(a="Network Error",o=e.t0.message):"server"===e.t0.type&&500===e.t0.status&&(a=e.t0.error.errors[0].title,o=e.t0.error.errors[0].detail),c.a.error({message:a,description:o,duration:0});case 16:r.setState(function(e){return{loading:!1}});case 17:case"end":return e.stop()}},e,null,[[4,12]])})),r.addAttribute=function(){r.setState({subDrawerContent:"addAttribute",subDrawerTitle:"Add Attribute",subDrawer:!0})},r.onSubDrawerClose=function(){r.setState({subDrawer:!1,subDrawerContent:null,subDrawerTitle:null})},r.onAddtributeAdd=function(){r.reloadAttributeList()},r.getDrawerContent=function(){var e;switch(r.state.subDrawerContent){case"addGroup":e=w.a.createElement(te,Object.assign({entity:r.props.entity,set:r.props.set,close:r.onSubDrawerClose},r.state.subDrawerData));break;case"editGroup":e=w.a.createElement(re,Object.assign({entity:r.props.entity,set:r.props.set,close:r.onSubDrawerClose},r.state.subDrawerData));break;case"addAttribute":e=w.a.createElement(ae,Object.assign({entity:r.props.entity,close:r.onSubDrawerClose,onAdd:r.onAddtributeAdd},r.state.subDrawerData));break;default:e=null}return e},r.sortGroups=function(e,t){var n=se(r.props.groups,e.index,t.index);D()(n,r.props.groups.toArray())||r.props.dispatch(Object(C.l)({set:r.props.set.id,groups:n}))},r.sortAttributes=function(e,t){var n=e.droppableId.split("-"),a=Object(v.a)(n,2),o=(a[0],a[1]),i=r.props.getGroupAttr(o),s=se(i,e.index,t.index);D()(s,i.toArray())||r.props.dispatch(Object(C.p)({id:o,attributes:s}))},r.moveAttribute=function(e,t){var n=t.droppableId.split("-"),a=Object(v.a)(n,2),o=(a[0],a[1]),i=r.props.getGroupAttr(o),s=pe(r.getAttributes(),i,e,t);r.props.dispatch(Object(C.p)({id:o,attributes:s["group-".concat(o)]})),r.updateAttributes(s.moved)},r.removeAttribute=function(e,t){var n=e.droppableId.split("-"),a=Object(v.a)(n,2),o=(a[0],a[1]),i=r.props.getGroupAttr(o),s=pe(i,r.getAttributes(),e,t);r.props.dispatch(Object(C.p)({id:o,attributes:s["group-".concat(o)]})),r.updateAttributes(s.moved,!0)},r.reGroup=function(e,t){var n=e.droppableId.split("-"),a=Object(v.a)(n,2),o=(a[0],a[1]),i=t.droppableId.split("-"),s=Object(v.a)(i,2),p=(s[0],s[1]),u=r.props.getGroupAttr(o),c=r.props.getGroupAttr(p),l=pe(u,c,e,t);r.props.dispatch(Object(C.p)({id:o,attributes:l["group-".concat(o)]})),r.props.dispatch(Object(C.p)({id:p,attributes:l["group-".concat(p)]}))},r.onDragEnd=function(e){var t=e.source,n=e.destination;if(n)if(t.droppableId===n.droppableId){if("attributes"===n.droppableId)return;if("groups-droppable"===n.droppableId)return r.sortGroups(t,n);r.sortAttributes(t,n)}else"attributes"===t.droppableId?r.moveAttribute(t,n):"attributes"===n.droppableId?r.removeAttribute(t,n):r.reGroup(t,n)},r}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return w.a.createElement(O.Fragment,null,w.a.createElement(z.a.Consumer,null,function(t){return w.a.createElement(s.a,{title:e.state.subDrawerTitle,placement:"right",maskClosable:!1,width:"small"===t?"80%":"65%",closable:!1,onClose:e.onSubDrawerClose,visible:e.state.subDrawer},w.a.createElement(O.Suspense,{fallback:w.a.createElement(R.a,null)},e.state.subDrawer&&e.getDrawerContent()))}),w.a.createElement(n.a,null,w.a.createElement(k.a,{onDragEnd:this.onDragEnd},w.a.createElement(a.a,{span:24,md:16},w.a.createElement(oe,null,!this.props.loadingGroup&&!this.props.groups.size&&w.a.createElement(o.a,{style:{textAlign:"center"},description:w.a.createElement("span",null,"No Groups")},w.a.createElement(i.a,{type:"primary",icon:"plus",style:{marginRight:8},onClick:this.addGroup},"Group")),this.props.loadingGroup?w.a.createElement(R.a,null):w.a.createElement(k.c,{droppableId:"groups-droppable",type:"groups"},function(t,r){return w.a.createElement(ie,{ref:t.innerRef},e.props.groups.map(function(t,r){return w.a.createElement(Z,{key:r,entity:e.props.entity,set:e.props.set.id,group:t,edit:e.editGroup,delete:e.deleteGroup,index:r})}),t.placeholder)}))),w.a.createElement(a.a,{span:24,md:8},w.a.createElement(O.Suspense,{fallback:w.a.createElement(R.a,null)},w.a.createElement(ne,{entity:this.props.entity,set:this.props.set,getAttributes:function(t){return e.getAttributes=t},updateAttributes:function(t){return e.updateAttributes=t},reload:function(t){return e.reloadAttributeList=t}}))))),w.a.createElement("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},w.a.createElement(i.a,{style:{marginRight:8},onClick:this.onCancel},"Close"),w.a.createElement(i.a,{type:"primary",icon:"plus",style:{marginRight:8},onClick:this.addAttribute},"Attribute"),w.a.createElement(i.a,{type:"primary",icon:"plus",style:{marginRight:8},onClick:this.addGroup},"Group"),w.a.createElement(i.a,{icon:"save",type:"primary",loading:this.state.loading,disabled:!this.props.hasChanges,onClick:this.onSave},"Save")))}}]),t}(O.PureComponent);t.default=Object(x.c)(function(e,t){return{attributes:Object(G.a)(e,t.entity),hasChanges:Object(I.d)(e,"entityViewer"),groups:Object(G.d)(e,t.set.id),loadingGroup:e.app.getIn(["sets","loading"]),getGroupAttr:function(t){return Object(G.c)(e,t)}}})(ue)}}]);
//# sourceMappingURL=set.25868f8f.chunk.js.map