import{a6 as P,a7 as R,bB as S,a9 as _,j as e,a as r,ak as z,bc as C,a$ as F,b as I,c as G,d as H,av as Q,bC as U,ab as Z,ag as J,Q as k,aj as K,I as y,ba as W,bD as q,r as f,C as X,aa as Y,aH as ee,aq as ae}from"./index.ef1be1b9.js";import{T as te}from"./Textarea.4f2f5a05.js";import{F as le}from"./index.e769cd6f.js";import{M as se}from"./Modal.80a6f694.js";import{T as ie}from"./Tooltip.a10beefd.js";import{L}from"./LoadingIcon.5d40e9d4.js";import{A as re}from"./Alert.788caed2.js";const ne=P({title:R().required("Title is required"),assign:S().required("Assignee is required"),tags:S().required("Tag is required")}).required(),A={multiValue:(a,s)=>s.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,s)=>s.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,s)=>s.data.isFixed?{...a,display:"none"}:a,option:(a,s)=>({...a,fontSize:"14px"})},oe=[{value:"jone",label:"Jone Doe",image:I},{value:"faruk",label:"Faruk",image:G},{value:"hasin",label:"Hasin",image:H},{value:"haq",label:"Salauddin",image:Q}],de=[{value:"team",label:"team"},{value:"low",label:"low"},{value:"medium",label:"medium"},{value:"high",label:"high"},{value:"update",label:"update"}],ce=({data:a,...s})=>e(U.Option,{...s,children:r("span",{className:"flex items-center space-x-4",children:[e("div",{className:"flex-none",children:e("div",{className:"h-7 w-7 rounded-full",children:e("img",{src:a.image,alt:"",className:"w-full h-full rounded-full"})})}),e("span",{className:"flex-1",children:a.label})]})}),me=({todo:a,showModal:s,onClose:o,onAdd:u,onEdit:d})=>{var m,h,p,b;const{register:c,control:i,formState:{errors:l},reset:N,handleSubmit:v}=_({resolver:Z(ne),mode:"all"});return e(se,{title:a?"Edit Task":"Add Task",labelclassName:"btn-outline-dark",activeModal:s,onClose:o,children:r("form",{onSubmit:v(t=>{const g={...a,title:t.title,completed:t.completed,assign:t.assign,category:t.tags};a?d(g):u({title:t.title,completed:!1,assign:t.assign,category:t.tags})}),className:" space-y-5",children:[e(z,{name:"title",label:"title",type:"text",placeholder:"Enter title",register:c,defaultValue:a?a.title:"",error:l.title}),r("div",{className:l.assign?"is-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Assignee"}),e(C,{name:"assign",control:i,defaultValue:a&&a.assign?a.assign:[],render:({field:t})=>e(F,{...t,options:oe,styles:A,className:"react-select",classNamePrefix:"select",isMulti:!0,components:{Option:ce},id:"icon_s"})}),l.assign&&e("div",{className:" mt-2  text-red-600 block text-sm",children:((m=l.assign)==null?void 0:m.message)||((h=l.assign)==null?void 0:h.label.message)})]}),r("div",{children:[e("label",{htmlFor:"default-picker",className:" form-label",children:"Due Date"}),e(le,{className:"text-control py-2",id:"default-picker"})]}),r("div",{className:l.tags?"is-error":"",children:[e("label",{className:"form-label",htmlFor:"icon_s",children:"Tag"}),e(C,{name:"tags",control:i,defaultValue:a&&a.category?a.category:[],render:({field:t})=>e(F,{...t,options:de,styles:A,className:"react-select",classNamePrefix:"select",isMulti:!0,id:"icon_s"})}),l.assign&&e("div",{className:" mt-2  text-red-600 block text-sm",children:((p=l.tags)==null?void 0:p.message)||((b=l.tags)==null?void 0:b.label.message)})]}),e(te,{label:"Description",placeholder:"Description"}),r("div",{className:"space-x-3  mt-3 flex justify-end",children:[r("button",{type:"submit",className:"btn btn-primary",children:[a?"Save":"Add"," Task"]}),e("button",{onClick:o,className:"btn btn-danger",children:"Cancel"})]})]})})},ue=J.injectEndpoints({tagTypes:["todos"],endpoints:a=>({getTodos:a.query({query:s=>({url:`todos?${new URLSearchParams(s).toString()}`,method:"GET"}),providesTags:["todos"]}),addTodo:a.mutation({query:s=>({url:"/todos",method:"POST",body:s}),invalidatesTags:["todos"]}),editTodo:a.mutation({query:({id:s,todo:o})=>({url:`/todos/${s}`,method:"PUT",body:{id:s,...o}}),invalidatesTags:["todos"]}),deleteTodo:a.mutation({query:s=>({url:`/todos/${s}`,method:"DELETE"}),invalidatesTags:["todos"]})})}),{useGetTodosQuery:he,useAddTodoMutation:pe,useEditTodoMutation:M,useDeleteTodoMutation:ge}=ue,xe=({todo:a,openEditModal:s})=>{const{id:o,title:u,assign:d,completed:c,category:i,favorite:l}=a,[N,{isLoading:v}]=ge(),[x,{isLoading:m}]=M(),h=()=>{const t={...a,completed:!a.completed};x({id:a.id,todo:t})},p=()=>{const t={...a,favorite:!a.favorite};x({id:a.id,todo:t})},b=t=>{N(t)};return e(k,{children:r("li",{className:"flex items-center px-6 space-x-4 py-6 hover:-translate-y-1 hover:shadow-todo transition-all duration-200 rtl:space-x-reverse",children:[e("div",{children:e(K,{value:c,onChange:h,disabled:m})}),r("label",{children:[e("input",{type:"checkbox",className:"hidden",checked:l,onChange:p}),l?e(y,{icon:"ph:star-fill",className:"text-xl leading-[1] cursor-pointer text-yellow-500"}):e(y,{icon:"ph:star",className:"text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"})]}),e("span",{className:` ${c?"line-through dark:text-gray-300":""} flex-1 text-sm text-gray-600 dark:text-gray-300 truncate`,children:u}),e("div",{className:"flex",children:r("span",{className:"flex-none space-x-1.5 text-base text-gray-400 flex rtl:space-x-reverse",children:[e("div",{className:"flex justify-start -space-x-1.5 min-w-[60px] rtl:space-x-reverse",children:d==null?void 0:d.map((t,g)=>e("div",{className:" h-6 w-6 rounded-full ring-1 ring-gray-400",children:e(ie,{placement:"top",arrow:!0,content:t.label,children:e("img",{src:t.image,alt:t.label,className:"w-full h-full rounded-full"})})},g))}),i==null?void 0:i.map((t,g)=>e("div",{children:t&&e(k,{children:e("span",{className:W("h-2 w-2  capitalize font-normal   rounded-full inline-block ",{"bg-red-500 text-red-500":t.value==="team","bg-green-500 text-green-500":t.value==="low","bg-yellow-500 text-yellow-500":t.value==="medium","bg-[#13317d] text-indigo-500":t.value==="high","bg-cyan-500 text-cyan-500":t.value==="update"})})})},g)),e("button",{type:"button",className:"text-gray-400 ",onClick:()=>s(a),children:e(y,{icon:"ph:pencil-simple-line"})}),e("button",{type:"button",className:"transition duration-150 hover:text-red-600 text-gray-400 inline-flex items-center",onClick:()=>b(a.id),disabled:v,children:v?e(L,{className:"text-red-500  w-8"}):e(y,{icon:"ph:trash"})})]})})]})})},be=({handleFilterChange:a,filter:s})=>{const o=q.slice(0,3),u=q.slice(3),d=i=>{let l="transition-all duration-200 inline-flex items-center space-x-1 rtl:space-x-reverse";if(i.value===s)switch(i.value){case"team":l+=" text-red-500";break;case"low":l+=" text-green-500";break;case"medium":l+=" text-yellow-500";break;case"high":l+=" text-indigo-500";break;case"update":l+=" text-cyan-500";break}return l},c=i=>{let l="w-2 h-2 rounded-full inline-block transition-all duration-150";if(i.value===s)switch(i.value){case"team":l+=" bg-red-500";break;case"low":l+=" bg-green-500";break;case"medium":l+=" bg-yellow-500";break;case"high":l+=" bg-[#13317d]";break;case"update":l+=" bg-cyan-500";break}return l};return r("li",{className:"sticky top-0 p-6 bg-white/10 backdrop-blur-md rounded-t-md dark:bg-gray-800/10 z-[1] flex justify-between",children:[e("div",{className:"text-sm space-x-3 rtl:space-x-reverse",children:o.map(i=>e("button",{className:i.value===s?"text-indigo-500 font-medium":"",onClick:()=>a(i.value),children:i.label},i.value))}),e("div",{className:"text-sm space-x-3 rtl:space-x-reverse",children:u.map(i=>r("button",{className:d(i),onClick:()=>a(i.value),children:[e("span",{className:c(i)}),e("span",{children:i.label})]},i.value))})]})},Fe=()=>{const[a,s]=f.exports.useState(""),[o,u]=f.exports.useState(""),[d,c]=f.exports.useState("all"),{data:i,isLoading:l,isError:N,error:v}=he({searchTerm:a,sortBy:o,filter:d}),[x,m]=f.exports.useState(!1),[h,p]=f.exports.useState(null),[b,{isLoading:t}]=pe(),[g,{isLoading:ve}]=M(),E=()=>{p(null),m(!0)},w=(i==null?void 0:i.todos)||[],j=n=>{p(n),m(!0)},T=()=>{m(!1)},D=n=>{g({id:h.id,todo:n}),T()},$=n=>{b(n),T()},B=n=>{s(n.target.value)},V=n=>{u(n.target.value)};return l?e(X,{className:"todo_height",children:e(L,{className:"text-indigo-500 h-20 w-20"})}):N?e("div",{children:"Error:"}):r(k,{children:[r("div",{className:"  todo_height relative rtl:space-x-reverse  space-y-5",children:[r("div",{className:"flex justify-between items-center",children:[e("div",{children:e(Y,{icon:"heroicons-outline:plus",text:"Add Todo",isLoading:t,className:"btn-primary  rounded-full    ",onClick:E})}),r("div",{className:" flex space-x-2 rtl:space-x-reverse",children:[e("input",{type:"text",className:"text-control md:min-w-[200px] py-2",value:a,placeholder:"Search...",onChange:B}),r(ee,{value:o,onChange:V,className:"lg:min-w-[150px]",children:[e("option",{value:"",children:"Sort By"}),e("option",{value:"asc",children:"A-Z"}),e("option",{value:"desc",children:"Z-A"})]})]})]}),e("div",{className:"h-full card",children:e(ae,{className:"h-full all-todos overflow-x-hidden",children:r("ul",{className:"divide-y divide-slate-100 dark:divide-slate-700  h-full",children:[e(be,{handleFilterChange:n=>{c(n)},filter:d}),w.map((n,O)=>e(xe,{todo:n,openEditModal:j,addLoading:t},O)),w.length===0&&e("li",{className:"mx-6 mt-6",children:e(re,{label:"No Result Found",className:"alert-danger py-2"})})]})})})]}),x&&e(me,{todo:h,onEdit:D,onAdd:$,onClose:T,showModal:x})]})};export{Fe as default};
