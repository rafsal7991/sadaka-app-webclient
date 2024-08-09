import{a as s,j as a}from"./index.ef1be1b9.js";import{c as r}from"./code-snippet.9dcb43e4.js";import{P as e,B as l}from"./index.f6a1dc65.js";const c=()=>s("div",{className:"space-y-4  xl:w-[70%]",children:[a(e,{value:30,className:"bg-[#13317d]"}),a(e,{value:50,className:" bg-fuchsia-500"}),a(e,{value:70,className:" bg-green-500"}),a(e,{value:80,className:" bg-cyan-500"}),a(e,{value:90,className:"bg-yellow-500"}),a(e,{value:95,className:" bg-red-500"})]}),o=`import ProgressBar from "@/components/ui/ProgressBar"
const basicProgressBar = () => {
  return (
    <> 
     <ProgressBar value={30} className="bg-[#13317d]" />
     <ProgressBar value={50} className=" bg-fuchsia-500" />
     <ProgressBar value={70} className=" bg-green-500" />
     <ProgressBar value={80} className=" bg-cyan-500" />
     <ProgressBar value={90} className="bg-yellow-500" />
     <ProgressBar value={95} className=" bg-red-500" />
    </>
  )
}
export default basicProgressBar
`,u=`
import ProgressBar from "@/components/ui/ProgressBar"
const SoftColorProgressBar = () => {
  return (
    <>  
      <ProgressBar value={30} className="bg-[#13317d]" backClass="bg-[#13317d]5"/>
      <ProgressBar value={50} className=" bg-fuchsia-500" backClass="bg-fuchsia-500/25"/>
      <ProgressBar value={70} className=" bg-green-500" backClass="bg-green-500/25"/>
      <ProgressBar value={80} className=" bg-cyan-500" backClass="bg-cyan-500/25"/>
      <ProgressBar value={90} className="bg-yellow-500" backClass="bg-yellow-500/25"/>
      <ProgressBar value={95} className=" bg-red-500" backClass="bg-red-500/25"/>
    </>
  )
}
export default SoftColorProgressBar
`,t=`
import ProgressBar from "@/components/ui/ProgressBar"
const ProgressSize = () => {
  return (
   <>
     <ProgressBar value={30} />
     <ProgressBar value={50} backClass="h-[10px] rounded-full" className="bg-[#13317d]/>
     <ProgressBar value={80} backClass="h-[14px] rounded-full" className="bg-red-500"/>
     <ProgressBar value={70} backClass="h-4 rounded-full" className="bg-yellow-500"/>
    </>
  )
}
export default ProgressSize
`,g=`
import ProgressBar from "@/components/ui/ProgressBar"
const ProgressStripped = () => {
  return (
    <>  
      <ProgressBar value={30} className="bg-gray-900 " striped backClass="h-3 rounded-full"/>
      <ProgressBar value={30} className="bg-[#13317d] " striped backClass="h-3 rounded-full"/>
      <ProgressBar value={80} className="bg-red-500 " striped backClass="h-3 rounded-full"/>
      <ProgressBar value={50} className="bg-yellow-500  " striped backClass="h-3 rounded-full"/>
      <ProgressBar value={70} className=" bg-cyan-500 " striped backClass="h-3 rounded-full"/>  
    </>
  )
}
export default ProgressStripped
`,d=`
import ProgressBar from "@/components/ui/ProgressBar"
const ActiveProgress = () => {
  return (
    <>
     <ProgressBar value={30} className="bg-[#13317d]" active />
     <ProgressBar value={50} className=" bg-fuchsia-500" active />
     <ProgressBar value={70} className=" bg-green-500" active />
     <ProgressBar value={80} className=" bg-cyan-500" active />
     <ProgressBar value={90} className="bg-yellow-500" active />
     <ProgressBar value={95} className=" bg-red-500" active />  
    </>
  )
}
export default ActiveProgress
`,n=`
import ProgressBar from "@/components/ui/ProgressBar"
const AnimatedStripped = () => {
  return (
    <>
      <ProgressBar value={30} className="bg-gray-900 " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={60} className="bg-[#13317d] " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={40} className="bg-red-500 " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={50} className="bg-yellow-500  " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={70} className=" bg-cyan-500 " striped backClass="h-3 rounded-full" animate/>
    </>
  )
}
export default AnimatedStripped
`,b=`
import ProgressBar from "@/components/ui/ProgressBar"
const ProgressValue = () => {
  return (
    <>
      <ProgressBar value={30} className="bg-gray-900 " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={60} className="bg-[#13317d] " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={40} className="bg-red-500 " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={50} className="bg-yellow-500  " striped backClass="h-3 rounded-full" animate/>
      <ProgressBar value={70} className=" bg-cyan-500 " striped backClass="h-3 rounded-full" animate/>
    </>
  )
}
export default ProgressValue
`,m=`
import ProgressBar from "@/components/ui/ProgressBar"
import Bar from "@/components/ui/ProgressBar/Bar";
const MultipleBarProgressBar = () => {
  return (
    <>
    <ProgressBar backClass="h-3 rounded-full">
    <Bar value={10} className="bg-[#13317d]" />
    <Bar value={15} className=" bg-yellow-500" />
    <Bar value={20} className=" bg-red-500" />
    <Bar value={20} className="bg-cyan-500" />
    </ProgressBar>
    <ProgressBar backClass="h-3 rounded-full">
    <Bar value={10} className="bg-[#13317d]showValue />
    <Bar value={15} className=" bg-yellow-500" showValue />
    <Bar value={20} className=" bg-red-500" showValue />
    <Bar value={20} className="bg-cyan-500" showValue />
    </ProgressBar>
    </>
  )
}
export default MultipleBarProgressBar
`,i=()=>s("div",{className:"space-y-4  xl:w-[70%]",children:[a(e,{value:30,className:"bg-[#13317d]",backClass:"bg-[#13317d]"}),a(e,{value:50,className:" bg-fuchsia-500",backClass:"bg-fuchsia-500/25"}),a(e,{value:70,className:" bg-green-500",backClass:"bg-green-500/25"}),a(e,{value:80,className:" bg-cyan-500",backClass:"bg-cyan-500/25"}),a(e,{value:90,className:"bg-yellow-500",backClass:"bg-yellow-500/25"}),a(e,{value:95,className:" bg-red-500",backClass:"bg-red-500/25"})]}),v=()=>s("div",{className:"space-y-4  xl:w-[70%]",children:[a(e,{value:30}),a(e,{value:50,backClass:"h-[10px] rounded-full",className:"bg-[#13317d]"}),a(e,{value:80,backClass:"h-[14px] rounded-full",className:"bg-red-500"}),a(e,{value:70,backClass:"h-4 rounded-full",className:"bg-yellow-500"})]}),p=()=>s("div",{className:"space-y-4  xl:w-[70%]",children:[a(e,{value:30,className:"bg-gray-900 ",striped:!0,backClass:"h-3 rounded-full"})," ",a(e,{value:30,className:"bg-[#13317d] ",striped:!0,backClass:"h-3 rounded-full"}),a(e,{value:80,className:"bg-red-500 ",striped:!0,backClass:"h-3 rounded-full"}),a(e,{value:50,className:"bg-yellow-500  ",striped:!0,backClass:"h-3 rounded-full"}),a(e,{value:70,className:" bg-cyan-500 ",striped:!0,backClass:"h-3 rounded-full"})]}),N=()=>s("div",{className:"space-y-4  xl:w-[70%]",children:[a(e,{value:30,className:"bg-[#13317d]",active:!0}),a(e,{value:50,className:" bg-fuchsia-500",active:!0}),a(e,{value:70,className:" bg-green-500",active:!0}),a(e,{value:80,className:" bg-cyan-500",active:!0}),a(e,{value:90,className:"bg-yellow-500",active:!0}),a(e,{value:95,className:" bg-red-500",active:!0})]}),P=()=>s("div",{className:"space-y-4  xl:w-[70%]",children:[a(e,{value:30,className:"bg-gray-900 ",striped:!0,backClass:"h-3 rounded-full",animate:!0}),a(e,{value:60,className:"bg-[#13317d]",striped:!0,backClass:"h-3 rounded-full",animate:!0}),a(e,{value:40,className:"bg-red-500 ",striped:!0,backClass:"h-3 rounded-full",animate:!0}),a(e,{value:50,className:"bg-yellow-500  ",striped:!0,backClass:"h-3 rounded-full",animate:!0}),a(e,{value:70,className:" bg-cyan-500 ",striped:!0,backClass:"h-3 rounded-full",animate:!0})]}),B=()=>s("div",{className:"space-y-4  xl:w-[70%]",children:[a(e,{value:30,className:"bg-[#13317d]",backClass:"h-3 rounded-full",showValue:!0}),a(e,{value:50,className:"bg-yellow-500  ",backClass:"h-3 rounded-full",showValue:!0}),a(e,{value:70,className:" bg-cyan-500 ",backClass:"h-3 rounded-full",showValue:!0}),a(e,{value:90,className:"bg-red-500 ",showValue:!0,backClass:"h-3 rounded-full"})]}),h=()=>s("div",{className:" space-y-4 xl:w-[70%]",children:[s(e,{backClass:"h-3 rounded-full",children:[a(l,{value:10,className:"bg-[#13317d]"}),a(l,{value:15,className:" bg-yellow-500"}),a(l,{value:20,className:" bg-red-500"}),a(l,{value:20,className:"bg-cyan-500"})]}),s(e,{backClass:"h-3 rounded-full",children:[a(l,{value:10,className:"bg-[#13317d]",showValue:!0}),a(l,{value:15,className:" bg-yellow-500",showValue:!0}),a(l,{value:20,className:" bg-red-500",showValue:!0}),a(l,{value:20,className:"bg-cyan-500",showValue:!0})]})]}),k=()=>s("div",{className:" space-y-5",children:[a(r,{title:"Basic Progress",code:o,children:a(c,{})}),a(r,{title:"Soft Color Progress",code:u,children:a(i,{})}),a(r,{title:"Progress Sizes",code:t,children:a(v,{})}),a(r,{title:"Striped Examples",code:g,children:a(p,{})}),a(r,{title:"Active Progress",code:d,children:a(N,{})}),a(r,{title:"Animated Striped Examples",code:n,children:a(P,{})}),a(r,{title:"Value Examples",code:b,children:a(B,{})}),a(r,{title:"Multiple Bar Examples",code:m,children:a(h,{})})]});export{k as default};
