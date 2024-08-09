import{a as l,j as e}from"./index.ef1be1b9.js";import{c as t}from"./code-snippet.9dcb43e4.js";import{B as a}from"./Badge.675d15c3.js";const s=()=>l("div",{className:"space-xy",children:[e(a,{label:"primary",className:"bg-[#13317d] text-white"}),e(a,{label:"secondary",className:"bg-fuchsia-500 text-white"}),e(a,{label:"danger",className:"bg-red-500 text-white"}),e(a,{label:"success",className:"bg-green-500 text-white"}),e(a,{label:"info",className:"bg-cyan-500 text-white"}),e(a,{label:"warning",className:"bg-yellow-500 text-white"}),e(a,{label:"Dark",className:"bg-gray-800 dark:bg-gray-900  text-white"}),e(a,{label:"light",className:"bg-gray-200 text-gray-700"})]}),r=`
import Badge from "@/components/ui/Badge"
const BasicBadge = () => {
  return (
    <>
    <Badge label="primary" className="bg-[#13317d]text-white" />
    <Badge label="secondary" className="bg-fuchsia-500 text-white" />
    <Badge label="danger" className="bg-red-500 text-white" />
    <Badge label="success" className="bg-green-500 text-white" />
    <Badge label="info" className="bg-cyan-500 text-white" />
    <Badge label="warning" className="bg-yellow-500 text-white" />
    <Badge label="Dark" className="bg-gray-800 dark:bg-gray-900  text-white"/>
    <Badge label="light" className="bg-gray-200 text-gray-700" />
    </>
  )
}
export default BasicBadge
`,g=`import Badge from "@/components/ui/Badge"
const RoundedBadge = () => {
  return (
    <> 
    <Badge label="primary" className="bg-[#13317d] text-white pill" />
    <Badge label="secondary" className="bg-fuchsia-500 text-white pill" />
    <Badge label="danger" className="bg-red-500 text-white pill" />
    <Badge label="success" className="bg-green-500 text-white pill" />
    <Badge label="info" className="bg-cyan-500 text-white pill" />
    <Badge label="warning" className="bg-yellow-500 text-white pill" />
    <Badge label="Dark" className="bg-gray-800 dark:bg-gray-900 text-white pill" />
    </>
  )
}
export default RoundedBadge
`,o=`
import Badge from "@/components/ui/Badge"
const GlowBadge = () => {
  return (
    <>
      <Badge label="primary" className="bg-[#13317d] text-white hover:shadow-lg hover:shadow-indigo-500/50"/>
      <Badge label="secondary" className="bg-fuchsia-500 text-white hover:shadow-lg hover:shadow-fuchsia-500/50"/>
      <Badge label="success" className=" bg-green-500 text-white hover:shadow-lg hover:shadow-green-500/50"/>
      <Badge label="info" className=" bg-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"/>
      <Badge label="warning" className=" bg-yellow-500 text-white hover:shadow-lg hover:shadow-yellow-500/50"/>
      <Badge label="error" className=" bg-red-500 text-white hover:shadow-lg hover:shadow-red-500/50"/>
      <Badge label="Dark" className="bg-gray-800 text-white hover:shadow-lg hover:shadow-gray-800/20"/>
      <Badge label="Light" className=" bg-gray-200 text-gray-700 hover:shadow-lg hover:shadow-gray-400/30"/>
    </>
  )
}
export default GlowBadge
`,d=`
import Badge from "@/components/ui/Badge"
const SoftColorBadge = () => {
  return (
    <>
      <Badge label="primary" className="bg-[#13317d] text-indigo-700 bg-opacity-10"/>
      <Badge label="secondary" className="bg-fuchsia-500 text-fuchsia-500 bg-opacity-10"/>
      <Badge label="danger" className="bg-red-500 text-red-600 bg-opacity-10"/>
      <Badge label="success" className="bg-green-500 text-green-600 bg-opacity-10"/>
      <Badge label="info" className="bg-cyan-500 text-cyan-600 bg-opacity-10"/>
      <Badge label="warning" className="bg-yellow-500 text-yellow-400 bg-opacity-10"/>
    </>
  )
}
export default SoftColorBadge
`,c=`
import Badge from "@/components/ui/Badge"
const OutlineBadge = () => {
  return (
    <>
       <Badge label="primary" className="bg-[#13317d] text-indigo-700 bg-opacity-10"/>
       <Badge label="secondary" className="bg-fuchsia-500 text-fuchsia-500 bg-opacity-10"/>
       <Badge label="danger" className="bg-red-500 text-red-600 bg-opacity-10"/>
       <Badge label="success" className="bg-green-500 text-green-600 bg-opacity-10"/>
       <Badge label="info" className="bg-cyan-500 text-cyan-600 bg-opacity-10"/>
       <Badge label="warning" className="bg-yellow-500 text-yellow-400 bg-opacity-10"/>
    </>
  )
}
export default OutlineBadge
`,i=`
import Badge from "@/components/ui/Badge"
const BadgeWithIcon = () => {
  return (
    <>
        <Badge label="primary" className="bg-[#13317d]text-indigo-700 bg-opacity-10"/>
        <Badge label="secondary" className="bg-fuchsia-500 text-fuchsia-500 bg-opacity-10"/>
        <Badge label="danger" className="bg-red-500 text-red-600 bg-opacity-10"/>
        <Badge label="success" className="bg-green-500 text-green-600 bg-opacity-10"/>
        <Badge label="info" className="bg-cyan-500 text-cyan-600 bg-opacity-10"/>
        <Badge label="warning" className="bg-yellow-500 text-yellow-400 bg-opacity-10"/>
    </>
  )
}
export default BadgeWithIcon
`,b=()=>l("div",{className:"space-xy",children:[e(a,{label:"primary",className:"bg-[#13317d]text-white pill"}),e(a,{label:"secondary",className:"bg-fuchsia-500 text-white pill"}),e(a,{label:"danger",className:"bg-red-500 text-white pill"}),e(a,{label:"success",className:"bg-green-500 text-white pill"}),e(a,{label:"info",className:"bg-cyan-500 text-white pill"}),e(a,{label:"warning",className:"bg-yellow-500 text-white pill"}),e(a,{label:"Dark",className:"bg-gray-800 dark:bg-gray-900 text-white pill"})]}),n=()=>l("div",{className:"space-xy",children:[e(a,{label:"primary",className:"bg-[#13317d]ext-white hover:shadow-lg hover:shadow-indigo-500/50"}),e(a,{label:"secondary",className:"bg-fuchsia-500 text-white hover:shadow-lg hover:shadow-fuchsia-500/50"}),e(a,{label:"success",className:" bg-green-500 text-white hover:shadow-lg hover:shadow-green-500/50"}),e(a,{label:"info",className:" bg-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"}),e(a,{label:"warning",className:" bg-yellow-500 text-white hover:shadow-lg hover:shadow-yellow-500/50"}),e(a,{label:"error",className:" bg-red-500 text-white hover:shadow-lg hover:shadow-red-500/50"}),e(a,{label:"Dark",className:"bg-gray-800 text-white hover:shadow-lg hover:shadow-gray-800/20"}),e(a,{label:"Light",className:" bg-gray-200 text-gray-700 hover:shadow-lg hover:shadow-gray-400/30"})]}),h=()=>l("div",{className:"space-xy",children:[e(a,{label:"primary",className:"bg-[#13317d] text-indigo-700 bg-opacity-10"}),e(a,{label:"secondary",className:"bg-fuchsia-500 text-fuchsia-500 bg-opacity-10"}),e(a,{label:"danger",className:"bg-red-500 text-red-600 bg-opacity-10"}),e(a,{label:"success",className:"bg-green-500 text-green-600 bg-opacity-10"}),e(a,{label:"info",className:"bg-cyan-500 text-cyan-600 bg-opacity-10"}),e(a,{label:"warning",className:"bg-yellow-500 text-yellow-400 bg-opacity-10"})]}),m=()=>l("div",{className:"space-xy",children:[e(a,{label:"primary",className:"border-indigo-500 text-indigo-500 border rounded-full"}),e(a,{label:"secondary",className:" border-fuchsia-500 text-fuchsia-500 border rounded-full"}),e(a,{label:"danger",className:"border-red-500 text-red-500 border rounded-full"}),e(a,{label:"success",className:"border-green-500 text-green-500 border rounded-full"}),e(a,{label:"info",className:"border-green-500 text-green-500 border rounded-full"}),e(a,{label:"warning",className:"border-yellow-500 text-yellow-500 border rounded-full"}),e(a,{label:"Dark",className:"border-gray-800 text-gray-800 border rounded-full"}),e(a,{label:"light",className:"border-gray-200 text-gray-700 border rounded-full"})]}),w=()=>l("div",{className:"space-xy",children:[e(a,{label:"primary",className:"bg-[#13317d]text-white ",icon:"ph:star-four"}),e(a,{label:"secondary",className:"bg-fuchsia-500 text-white",icon:"ph:arrow-circle-up"}),e(a,{label:"danger",className:"bg-red-500 text-white",icon:"ph:cloud-arrow-down"}),e(a,{label:"success",className:"bg-green-500 text-white",icon:"ph:trend-up"}),e(a,{label:"info",className:"bg-cyan-500 text-white",icon:"ph:info"}),e(a,{label:"warning",className:"bg-yellow-500 text-white",icon:"ph:star-four"}),e(a,{label:"Dark",className:"bg-gray-800 dark:bg-gray-900 text-white",icon:"ph:star-four"})]}),p=()=>l("div",{className:" space-y-5",children:[e(t,{title:"Basic Badges",code:r,children:e(s,{})}),e(t,{title:"Rounded Badge",code:g,children:e(b,{})}),e(t,{title:"Glow Badge",code:o,children:e(n,{})}),e(t,{title:"Soft Color Badge",code:d,children:e(h,{})}),e(t,{title:"Outlined Badge",code:c,children:e(m,{})}),e(t,{title:"Badges With Icon",code:i,children:e(w,{})})]});export{p as default};
