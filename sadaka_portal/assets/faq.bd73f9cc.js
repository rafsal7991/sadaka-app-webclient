import{r as l,R as U,bg as oe,bh as pe,bi as M,bj as ne,bk as j,bl as H,bm as S,bn as X,j as n,a as b,bo as J,bp as ie,bq as be,br as ce,bs as q,bt as he,bu as m,bv as R,bw as g,bx as xe,by as ae,I as se,C as le}from"./index.ef1be1b9.js";import{I as fe}from"./InputGroup.49993b9a.js";import{A as K,a as L,b as G,c as O}from"./accordion.c1012d6c.js";import"./index.8c5b7a61.js";function me({onFocus:e}){let[t,r]=l.exports.useState(!0);return t?U.createElement(oe,{as:"button",type:"button",features:pe.Focusable,onFocus:c=>{c.preventDefault();let s,o=50;function i(){if(o--<=0){s&&cancelAnimationFrame(s);return}if(e()){r(!1),cancelAnimationFrame(s);return}s=requestAnimationFrame(i)}s=requestAnimationFrame(i)}}):null}var ge=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(ge||{});let ye={[0](e,t){let r=e.tabs.filter(o=>{var i;return!((i=o.current)!=null&&i.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let c=e.tabs.slice(0,t.index),s=[...e.tabs.slice(t.index),...c].find(o=>r.includes(o));return s?{...e,selectedIndex:e.tabs.indexOf(s)}:e},[1](e,t){var r;if(e.tabs.includes(t.tab))return e;let c=e.tabs[e.selectedIndex],s=ae([...e.tabs,t.tab],i=>i.current),o=(r=s.indexOf(c))!=null?r:e.selectedIndex;return o===-1&&(o=e.selectedIndex),{...e,tabs:s,selectedIndex:o}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:ae([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},Z=l.exports.createContext(null);Z.displayName="TabsSSRContext";function V(e){let t=l.exports.useContext(Z);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return t}let _=l.exports.createContext(null);_.displayName="TabsDataContext";function C(e){let t=l.exports.useContext(_);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return t}let ee=l.exports.createContext(null);ee.displayName="TabsActionsContext";function te(e){let t=l.exports.useContext(ee);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,te),r}return t}function ve(e,t){return ce(t.type,ye,e,t)}let Ie=l.exports.Fragment,Pe=M(function(e,t){let{defaultIndex:r=0,vertical:c=!1,manual:s=!1,onChange:o,selectedIndex:i=null,...w}=e;const I=c?"vertical":"horizontal",N=s?"manual":"auto";let A=i!==null,F=j(t),[u,h]=l.exports.useReducer(ve,{selectedIndex:i!=null?i:r,tabs:[],panels:[]}),y=l.exports.useMemo(()=>({selectedIndex:u.selectedIndex}),[u.selectedIndex]),x=H(o||(()=>{})),$=H(u.tabs),f=l.exports.useMemo(()=>({orientation:I,activation:N,...u}),[I,N,u]),d=S(p=>(h({type:1,tab:p}),()=>h({type:2,tab:p}))),P=S(p=>(h({type:3,panel:p}),()=>h({type:4,panel:p}))),T=S(p=>{Y.current!==p&&x.current(p),A||h({type:0,index:p})}),Y=H(A?e.selectedIndex:u.selectedIndex),D=l.exports.useMemo(()=>({registerTab:d,registerPanel:P,change:T}),[]);X(()=>{h({type:0,index:i!=null?i:r})},[i]);let z=l.exports.useRef({tabs:[],panels:[]}),B={ref:F};return U.createElement(Z.Provider,{value:z},n(ee.Provider,{value:D,children:b(_.Provider,{value:f,children:[f.tabs.length<=0&&U.createElement(me,{onFocus:()=>{var p,Q;for(let a of $.current)if(((p=a.current)==null?void 0:p.tabIndex)===0)return(Q=a.current)==null||Q.focus(),!0;return!1}}),J({ourProps:B,theirProps:w,slot:y,defaultTag:Ie,name:"Tabs"})]})}))}),Te="div",we=M(function(e,t){let{orientation:r,selectedIndex:c}=C("Tab.List"),s=j(t);return J({ourProps:{ref:s,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:c},defaultTag:Te,name:"Tabs.List"})}),Ae="button",$e=M(function(e,t){var r,c;let s=ie(),{id:o=`headlessui-tabs-tab-${s}`,...i}=e,{orientation:w,activation:I,selectedIndex:N,tabs:A,panels:F}=C("Tab"),u=te("Tab"),h=C("Tab"),y=V("Tab"),x=l.exports.useRef(null),$=j(x,t);X(()=>u.registerTab(x),[u,x]);let f=y.current.tabs.indexOf(o);f===-1&&(f=y.current.tabs.push(o)-1);let d=A.indexOf(x);d===-1&&(d=f);let P=d===N,T=S(a=>{var v;let W=a();if(W===q.Success&&I==="auto"){let ue=(v=he(x))==null?void 0:v.activeElement,re=h.tabs.findIndex(de=>de.current===ue);re!==-1&&u.change(re)}return W}),Y=S(a=>{let v=A.map(W=>W.current).filter(Boolean);if(a.key===m.Space||a.key===m.Enter){a.preventDefault(),a.stopPropagation(),u.change(d);return}switch(a.key){case m.Home:case m.PageUp:return a.preventDefault(),a.stopPropagation(),T(()=>R(v,g.First));case m.End:case m.PageDown:return a.preventDefault(),a.stopPropagation(),T(()=>R(v,g.Last))}if(T(()=>ce(w,{vertical(){return a.key===m.ArrowUp?R(v,g.Previous|g.WrapAround):a.key===m.ArrowDown?R(v,g.Next|g.WrapAround):q.Error},horizontal(){return a.key===m.ArrowLeft?R(v,g.Previous|g.WrapAround):a.key===m.ArrowRight?R(v,g.Next|g.WrapAround):q.Error}}))===q.Success)return a.preventDefault()}),D=l.exports.useRef(!1),z=S(()=>{var a;D.current||(D.current=!0,(a=x.current)==null||a.focus(),u.change(d),xe(()=>{D.current=!1}))}),B=S(a=>{a.preventDefault()}),p=l.exports.useMemo(()=>({selected:P}),[P]),Q={ref:$,onKeyDown:Y,onMouseDown:B,onClick:z,id:o,role:"tab",type:be(e,x),"aria-controls":(c=(r=F[d])==null?void 0:r.current)==null?void 0:c.id,"aria-selected":P,tabIndex:P?0:-1};return J({ourProps:Q,theirProps:i,slot:p,defaultTag:Ae,name:"Tabs.Tab"})}),Ee="div",Se=M(function(e,t){let{selectedIndex:r}=C("Tab.Panels"),c=j(t),s=l.exports.useMemo(()=>({selectedIndex:r}),[r]);return J({ourProps:{ref:c},theirProps:e,slot:s,defaultTag:Ee,name:"Tabs.Panels"})}),Ne="div",Re=ne.RenderStrategy|ne.Static,ke=M(function(e,t){var r,c,s,o;let i=ie(),{id:w=`headlessui-tabs-panel-${i}`,...I}=e,{selectedIndex:N,tabs:A,panels:F}=C("Tab.Panel"),u=te("Tab.Panel"),h=V("Tab.Panel"),y=l.exports.useRef(null),x=j(y,t);X(()=>u.registerPanel(y),[u,y]);let $=h.current.panels.indexOf(w);$===-1&&($=h.current.panels.push(w)-1);let f=F.indexOf(y);f===-1&&(f=$);let d=f===N,P=l.exports.useMemo(()=>({selected:d}),[d]),T={ref:x,id:w,role:"tabpanel","aria-labelledby":(c=(r=A[f])==null?void 0:r.current)==null?void 0:c.id,tabIndex:d?0:-1};return!d&&((s=I.unmount)!=null?s:!0)&&!((o=I.static)!=null&&o)?U.createElement(oe,{as:"span",...T}):J({ourProps:T,theirProps:I,slot:P,defaultTag:Ne,features:Re,visible:d,name:"Tabs.Panel"})}),E=Object.assign($e,{Group:Pe,List:we,Panels:Se,Panel:ke});const Ce=[{title:"Getting started",icon:"ph:trend-up"},{title:"Shipping",icon:"ph:car-profile"},{title:"Payments",icon:"ph:credit-card"}],k=[{title:"Question 1",content:"Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post."},{title:"Question 2",content:"Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post."},{title:"Question 3",content:"Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post."},{title:"Question 4",content:"Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post."},{title:"Question 5",content:"Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post."}],Oe=()=>b("div",{children:[b("div",{className:"text-center mb-12 space-y-5",children:[n("h4",{children:"How we can help you?"}),n("div",{className:"max-w-sm mx-auto",children:n(fe,{type:"text",className:"",placeholder:"Search your Question's",prepend:n(se,{icon:"circum:search"}),merged:!0})})]}),n(E.Group,{children:b("div",{className:"grid gap-5 grid-cols-12",children:[n("div",{className:"xl:col-span-3 lg:col-span-4 col-span-12 card-auto-height",children:n(le,{children:n(E.List,{className:"flex flex-col space-y-1 text-start items-start",children:Ce.map((e,t)=>n(E,{as:l.exports.Fragment,children:({selected:r})=>b("button",{className:`focus:ring-0 focus:outline-none  space-x-2 text-sm flex items-center w-full transition duration-150 px-3 py-2 rounded-[6px] rtl:space-x-reverse
                            ${r?"text-indigo-500":" text-gray-600  dark:text-gray-300"}
                         `,type:"button",children:[n(se,{icon:e.icon,className:"text-lg"}),b("span",{children:[" ",e.title]})]})},t))})})}),n("div",{className:"xl:col-span-9 lg:col-span-8 col-span-12",children:n(le,{children:b(E.Panels,{children:[n(E.Panel,{children:b(K,{type:"single",collapsible:!0,className:"w-full",children:[b(L,{value:"item-1",children:[n(G,{children:"Is it accessible?"}),n(O,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),b(L,{value:"item-2",children:[n(G,{children:"Is it styled?"}),n(O,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),b(L,{value:"item-3",children:[n(G,{children:"Is it animated?"}),n(O,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})}),n(E.Panel,{children:n(K,{type:"single",collapsible:!0,className:"w-full",children:k==null?void 0:k.map((e,t)=>b(L,{value:`item-${t+1}`,children:[n(G,{children:e.title}),n(O,{children:e.content})]}))})}),n(E.Panel,{children:n(K,{type:"single",collapsible:!0,className:"w-full",children:k==null?void 0:k.map((e,t)=>b(L,{value:`item-${t+1}`,children:[n(G,{children:e.title}),n(O,{children:e.content})]}))})})]})})})]})})]});export{Oe as default};
