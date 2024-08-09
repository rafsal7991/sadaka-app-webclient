import{a as k,j as c,a$ as g,s as l,R as T,b0 as w,b1 as H,r as d,b2 as oe,aO as se,b3 as le,am as O,b4 as v,b5 as ue,b6 as L}from"./index.ef1be1b9.js";import{c as S}from"./code-snippet.9dcb43e4.js";import{_ as J}from"./inheritsLoose.182f7627.js";const b=[{value:"caramel",label:"Caramel"},{value:"red velvet",label:"Red Velvet"},{value:"matcha",label:"Matcha"}],F={option:(o,n)=>({...o,fontSize:"14px"})},ce=()=>k("div",{className:" space-y-5",children:[c(S,{title:" Basic",children:c(g,{className:"react-select",classNamePrefix:"select",defaultValue:b[0],options:b,styles:F,id:"hh"})}),c(S,{title:" Clearable",children:c(g,{className:"react-select",classNamePrefix:"select",defaultValue:b[1],styles:F,name:"clear",options:b,isClearable:!0,id:"hh2"})}),c(S,{title:" Loading",children:c(g,{className:"react-select",classNamePrefix:"select",defaultValue:b[2],name:"loading",options:b,isLoading:!0,isClearable:!1,id:"hh23",styles:F})}),c(S,{title:" Disabled",children:c(g,{className:"react-select",classNamePrefix:"select",defaultValue:b[3],name:"disabled",options:b,isDisabled:!0,isClearable:!1,id:"dis",styles:F})})]}),B={disabled:!1};var pe=l.exports.oneOfType([l.exports.number,l.exports.shape({enter:l.exports.number,exit:l.exports.number,appear:l.exports.number}).isRequired]);l.exports.oneOfType([l.exports.string,l.exports.shape({enter:l.exports.string,exit:l.exports.string,active:l.exports.string}),l.exports.shape({enter:l.exports.string,enterDone:l.exports.string,enterActive:l.exports.string,exit:l.exports.string,exitDone:l.exports.string,exitActive:l.exports.string})]);const A=T.createContext(null);var de=function(n){return n.scrollTop},R="unmounted",C="exited",V="entering",y="entered",G="exiting",E=function(o){J(n,o);function n(a,t){var e;e=o.call(this,a,t)||this;var i=t,s=i&&!i.isMounting?a.enter:a.appear,u;return e.appearStatus=null,a.in?s?(u=C,e.appearStatus=V):u=y:a.unmountOnExit||a.mountOnEnter?u=R:u=C,e.state={status:u},e.nextCallback=null,e}n.getDerivedStateFromProps=function(t,e){var i=t.in;return i&&e.status===R?{status:C}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(t){var e=null;if(t!==this.props){var i=this.state.status;this.props.in?i!==V&&i!==y&&(e=V):(i===V||i===y)&&(e=G)}this.updateStatus(!1,e)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var t=this.props.timeout,e,i,s;return e=i=s=t,t!=null&&typeof t!="number"&&(e=t.exit,i=t.enter,s=t.appear!==void 0?t.appear:i),{exit:e,enter:i,appear:s}},r.updateStatus=function(t,e){if(t===void 0&&(t=!1),e!==null)if(this.cancelNextCallback(),e===V){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this);i&&de(i)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===C&&this.setState({status:R})},r.performEnter=function(t){var e=this,i=this.props.enter,s=this.context?this.context.isMounting:t,u=this.props.nodeRef?[s]:[w.findDOMNode(this),s],p=u[0],f=u[1],m=this.getTimeouts(),x=s?m.appear:m.enter;if(!t&&!i||B.disabled){this.safeSetState({status:y},function(){e.props.onEntered(p)});return}this.props.onEnter(p,f),this.safeSetState({status:V},function(){e.props.onEntering(p,f),e.onTransitionEnd(x,function(){e.safeSetState({status:y},function(){e.props.onEntered(p,f)})})})},r.performExit=function(){var t=this,e=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:w.findDOMNode(this);if(!e||B.disabled){this.safeSetState({status:C},function(){t.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:G},function(){t.props.onExiting(s),t.onTransitionEnd(i.exit,function(){t.safeSetState({status:C},function(){t.props.onExited(s)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},r.setNextCallback=function(t){var e=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},r.onTransitionEnd=function(t,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this),s=t==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],p=u[0],f=u[1];this.props.addEndListener(p,f)}t!=null&&setTimeout(this.nextCallback,t)},r.render=function(){var t=this.state.status;if(t===R)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var s=H(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return c(A.Provider,{value:null,children:typeof i=="function"?i(t,s):T.cloneElement(T.Children.only(i),s)})},n}(T.Component);E.contextType=A;E.propTypes={nodeRef:l.exports.shape({current:typeof Element>"u"?l.exports.any:function(o,n,r,a,t,e){var i=o[n];return l.exports.instanceOf(i&&"ownerDocument"in i?i.ownerDocument.defaultView.Element:Element)(o,n,r,a,t,e)}}),children:l.exports.oneOfType([l.exports.func.isRequired,l.exports.element.isRequired]).isRequired,in:l.exports.bool,mountOnEnter:l.exports.bool,unmountOnExit:l.exports.bool,appear:l.exports.bool,enter:l.exports.bool,exit:l.exports.bool,timeout:function(n){var r=pe;n.addEndListener||(r=r.isRequired);for(var a=arguments.length,t=new Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];return r.apply(void 0,[n].concat(t))},addEndListener:l.exports.func,onEnter:l.exports.func,onEntering:l.exports.func,onEntered:l.exports.func,onExit:l.exports.func,onExiting:l.exports.func,onExited:l.exports.func};function M(){}E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:M,onEntering:M,onEntered:M,onExit:M,onExiting:M,onExited:M};E.UNMOUNTED=R;E.EXITED=C;E.ENTERING=V;E.ENTERED=y;E.EXITING=G;const Q=E;function j(o,n){var r=function(e){return n&&d.exports.isValidElement(e)?n(e):e},a=Object.create(null);return o&&d.exports.Children.map(o,function(t){return t}).forEach(function(t){a[t.key]=r(t)}),a}function fe(o,n){o=o||{},n=n||{};function r(f){return f in n?n[f]:o[f]}var a=Object.create(null),t=[];for(var e in o)e in n?t.length&&(a[e]=t,t=[]):t.push(e);var i,s={};for(var u in n){if(a[u])for(i=0;i<a[u].length;i++){var p=a[u][i];s[a[u][i]]=r(p)}s[u]=r(u)}for(i=0;i<t.length;i++)s[t[i]]=r(t[i]);return s}function N(o,n,r){return r[n]!=null?r[n]:o.props[n]}function xe(o,n){return j(o.children,function(r){return d.exports.cloneElement(r,{onExited:n.bind(null,r),in:!0,appear:N(r,"appear",o),enter:N(r,"enter",o),exit:N(r,"exit",o)})})}function me(o,n,r){var a=j(o.children),t=fe(n,a);return Object.keys(t).forEach(function(e){var i=t[e];if(!!d.exports.isValidElement(i)){var s=e in n,u=e in a,p=n[e],f=d.exports.isValidElement(p)&&!p.props.in;u&&(!s||f)?t[e]=d.exports.cloneElement(i,{onExited:r.bind(null,i),in:!0,exit:N(i,"exit",o),enter:N(i,"enter",o)}):!u&&s&&!f?t[e]=d.exports.cloneElement(i,{in:!1}):u&&s&&d.exports.isValidElement(p)&&(t[e]=d.exports.cloneElement(i,{onExited:r.bind(null,i),in:p.props.in,exit:N(i,"exit",o),enter:N(i,"enter",o)}))}}),t}var he=Object.values||function(o){return Object.keys(o).map(function(n){return o[n]})},ve={component:"div",childFactory:function(n){return n}},U=function(o){J(n,o);function n(a,t){var e;e=o.call(this,a,t)||this;var i=e.handleExited.bind(oe(e));return e.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},e}var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(t,e){var i=e.children,s=e.handleExited,u=e.firstRender;return{children:u?xe(t,s):me(t,i,s),firstRender:!1}},r.handleExited=function(t,e){var i=j(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState(function(s){var u=se({},s.children);return delete u[t.key],{children:u}}))},r.render=function(){var t=this.props,e=t.component,i=t.childFactory,s=H(t,["component","childFactory"]),u=this.state.contextValue,p=he(this.state.children).map(i);return delete s.appear,delete s.enter,delete s.exit,e===null?c(A.Provider,{value:u,children:p}):c(A.Provider,{value:u,children:c(e,{...s,children:p})})},n}(T.Component);U.propTypes={component:l.exports.any,children:l.exports.node,appear:l.exports.bool,enter:l.exports.bool,exit:l.exports.bool,childFactory:l.exports.func};U.defaultProps=ve;const Y=U;var Ee=["in","onExited","appear","enter","exit"],be=function(n){return function(r){r.in,r.onExited,r.appear,r.enter,r.exit;var a=O(r,Ee);return c(n,{...a})}},ge=["component","duration","in","onExited"],Z=function(n){var r=n.component,a=n.duration,t=a===void 0?1:a,e=n.in;n.onExited;var i=O(n,ge),s=d.exports.useRef(null),u={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(t,"ms")},exiting:{opacity:0},exited:{opacity:0}};return c(Q,{mountOnEnter:!0,unmountOnExit:!0,in:e,timeout:t,nodeRef:s,children:function(p){var f={style:v({},u[p]),ref:s};return c(r,{innerProps:f,...i})}})},_=260,Se=function(n){var r=n.children,a=n.in,t=n.onExited,e=d.exports.useRef(null),i=d.exports.useState("auto"),s=L(i,2),u=s[0],p=s[1];d.exports.useEffect(function(){var m=e.current;if(!!m){var x=window.requestAnimationFrame(function(){return p(m.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(x)}}},[]);var f=function(x){switch(x){default:return{width:u};case"exiting":return{width:0,transition:"width ".concat(_,"ms ease-out")};case"exited":return{width:0}}};return c(Q,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:a,onExited:function(){var x=e.current;!x||t==null||t(x)},timeout:_,nodeRef:e,children:function(m){return c("div",{ref:e,style:v({overflow:"hidden",whiteSpace:"nowrap"},f(m)),children:r})}})},Ce=["in","onExited"],Ve=function(n){return function(r){var a=r.in,t=r.onExited,e=O(r,Ce);return c(Se,{in:a,onExited:t,children:c(n,{cropWithEllipsis:a,...e})})}},Ne=function(n){return function(r){return c(Z,{component:n,duration:r.isMulti?_:1,...r})}},Me=function(n){return function(r){return c(Z,{component:n,...r})}},ye=["component"],Oe=["children"],Pe=function(n){return function(r){return r.isMulti?c(Re,{component:n,...r}):c(Y,{component:n,...r})}},Re=function(n){var r=n.component,a=O(n,ye),t=Te(a);return c(Y,{component:r,...t})},Te=function(n){var r=n.children,a=O(n,Oe),t=a.isMulti,e=a.hasValue,i=a.innerProps,s=a.selectProps,u=s.components,p=s.controlShouldRenderValue,f=d.exports.useState(t&&p&&e),m=L(f,2),x=m[0],$=m[1],ee=d.exports.useState(!1),W=L(ee,2),q=W[0],z=W[1];d.exports.useEffect(function(){e&&!x&&$(!0)},[e,x]),d.exports.useEffect(function(){q&&!e&&x&&$(!1),z(!1)},[q,e,x]);var te=function(){return z(!0)},ne=function(P){if(t&&d.exports.isValidElement(P)){if(P.type===u.MultiValue)return d.exports.cloneElement(P,{onExited:te});if(P.type===u.Placeholder&&x)return null}return P},ie=v(v({},i),{},{style:v(v({},i==null?void 0:i.style),{},{display:t&&e||x?"flex":"grid"})}),re=v(v({},a),{},{innerProps:ie,children:d.exports.Children.toArray(r).map(ne)});return re},De=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],K=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=le({components:n}),a=r.Input,t=r.MultiValue,e=r.Placeholder,i=r.SingleValue,s=r.ValueContainer,u=O(r,De);return v({Input:be(a),MultiValue:Ve(t),Placeholder:Ne(e),SingleValue:Me(i),ValueContainer:Pe(s)},u)},D=K();D.Input;D.MultiValue;D.Placeholder;D.SingleValue;D.ValueContainer;var we=ue(K);const h=[{value:"banana",label:"Banana"},{value:"watermelon",label:"Watermelon"},{value:"kiwi",label:"Kiwi"},{value:"grapefruit",label:"Grapefruit"},{value:"pear",label:"Pear"}],Fe=o=>k("div",{className:"flex justify-between items-center",children:[c("strong",{children:c("span",{className:" text-2xl font-semibold capitalize",children:o.label})}),c("span",{children:o.options.length})]}),Ie=[{label:"Fruits",options:[{value:"banana",label:"Banana"},{value:"apple",label:"Apple"},{value:"orange",label:"Orange"},{value:"mango",label:"Mango"},{value:"grapes",label:"Grapes"}]},{label:"Vegetables",options:[{value:"carrot",label:"Carrot"},{value:"broccoli",label:"Broccoli"},{value:"cucumber",label:"Cucumber"},{value:"spinach",label:"Spinach"},{value:"sweet potato",label:"Sweet Potato"}]}],Ae=we(),I={multiValue:(o,n)=>n.data.isFixed?{...o,opacity:"0.5"}:o,multiValueLabel:(o,n)=>n.data.isFixed?{...o,color:"#626262",paddingRight:6}:o,multiValueRemove:(o,n)=>n.data.isFixed?{...o,display:"none"}:o,option:(o,n)=>({...o,fontSize:"14px"})},X=o=>{if(o.length>0)return o.filter(n=>n.isFixed).concat(o.filter(n=>!n.isFixed))},ke=()=>{const[o,n]=d.exports.useState(X([h[0],h[1]])),r=(a,{action:t,removedValue:e})=>{switch(t){case"remove-value":case"pop-value":if(e.isFixed)return;break;case"clear":a=h.filter(i=>i.isFixed);break}a=X(a),n(a)};return k("div",{className:" space-y-5",children:[c(S,{title:" Multi Select..",children:c(g,{isClearable:!1,defaultValue:[h[2],h[3]],styles:I,isMulti:!0,name:"colors",options:h,className:"react-select",classNamePrefix:"select",id:"mul_1"})}),c(S,{title:"Grouped Select",children:c(g,{isClearable:!1,defaultValue:h[1],options:Ie,styles:I,formatGroupLabel:Fe,className:"react-select",classNamePrefix:"select",id:"mul_2"})}),c(S,{title:"Animated Select",children:c(g,{isClearable:!1,closeMenuOnSelect:!1,components:Ae,defaultValue:[h[4],h[5]],isMulti:!0,options:h,styles:I,className:"react-select",classNamePrefix:"select",id:"animated_1"})}),c(S,{title:"Fixed Options Select",children:c(g,{isClearable:!1,value:o,styles:I,isMulti:!0,onChange:r,name:"furits",className:"react-select",classNamePrefix:"select",options:h,id:"dis_s"})})]})},je=()=>k("div",{className:" space-y-5",children:[c(ce,{}),c(ke,{})]});export{je as default};
