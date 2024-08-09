import{a as r,j as a,P as e,b as o,c as l,d as m,av as v,aw as c}from"./index.ef1be1b9.js";import{c as t}from"./code-snippet.9dcb43e4.js";import{A as s}from"./Avatar.976fb5a1.js";const n=()=>r("div",{className:" max-w-2xl   space-xy",children:[a(s,{src:e,alt:"avatar-one"}),a(s,{src:o,alt:"avatar-one",className:"w-10 h-10"}),a(s,{src:l,alt:"avatar-one",className:"w-12 h-12"}),a(s,{src:m,alt:"avatar-one",className:"w-16 h-16"}),a(s,{src:v,alt:"avatar-one",className:"w-20 h-20"}),a(s,{src:c,alt:"avatar-one",className:"w-24 h-24"})]}),d=`
import Avatar from "@/components/ui/Avatar"
import User1 from "@/assets/images/avatar/avatar.jpg"
import User2 from "@/assets/images/avatar/avatar-1.jpg"
import User3 from "@/assets/images/avatar/avatar-2.jpg"
import User4 from "@/assets/images/avatar/avatar-3.jpg"
import User5 from "@/assets/images/avatar/avatar-4.jpg"
import User6 from "@/assets/images/avatar/avatar-5.jpg"
const RounedAvatar = () => {
  return (
    <> 
    <Avatar src={User1} alt="avatar-one" />
    <Avatar src={User2} alt="avatar-one" className="w-10 h-10" />
    <Avatar src={User3} alt="avatar-one" className="w-12 h-12" />
    <Avatar src={User4} alt="avatar-one" className="w-16 h-16" />
    <Avatar src={User5} alt="avatar-one" className="w-20 h-20" />
    <Avatar src={User6} alt="avatar-one" className="w-24 h-24" />
    </>
  )
}
export default RounedAvatar
`,g=`
import Avatar from "@/components/ui/Avatar"
import User1 from "@/assets/images/avatar/avatar.jpg"
import User2 from "@/assets/images/avatar/avatar-1.jpg"
import User3 from "@/assets/images/avatar/avatar-2.jpg"
import User4 from "@/assets/images/avatar/avatar-3.jpg"
import User5 from "@/assets/images/avatar/avatar-4.jpg"
import User6 from "@/assets/images/avatar/avatar-5.jpg"
const SquareAvatar = () => {
  return (
    <> 
    <Avatar src={User1} alt="avatar-one" imageClass="rounded-lg" />
    <Avatar src={User2} alt="avatar-one" className="w-10 h-10" imageClass="rounded-lg"/>
    <Avatar src={User3} alt="avatar-one" className="w-12 h-12" imageClass="rounded-lg"/>
    <Avatar src={User4} alt="avatar-one" className="w-16 h-16" imageClass="rounded-lg"/>
    <Avatar src={User5} alt="avatar-one" className="w-20 h-20" imageClass="rounded-lg"/>
    <Avatar src={User6} alt="avatar-one" className="w-24 h-24" imageClass="rounded-lg"/>
    </>
  )
}
export default SquareAvatar
`,i=`
import Avatar from "@/components/ui/Avatar"
import User1 from "@/assets/images/avatar/avatar.jpg"
import User2 from "@/assets/images/avatar/avatar-1.jpg"
import User3 from "@/assets/images/avatar/avatar-2.jpg"
import User4 from "@/assets/images/avatar/avatar-3.jpg"
import User5 from "@/assets/images/avatar/avatar-4.jpg"
import User6 from "@/assets/images/avatar/avatar-5.jpg"
const AvatarDots = () => {
  return (
    <>
    <Avatar src={User1} alt="avatar-one" imageClass="rounded-lg" />
    <Avatar src={User2} alt="avatar-one" className="w-10 h-10" imageClass="rounded-lg" />
    <Avatar src={User3} alt="avatar-one" className="w-12 h-12" imageClass="rounded-lg"/>
    <Avatar src={User4} alt="avatar-one" className="w-16 h-16" imageClass="rounded-lg"/>
    <Avatar src={User5} alt="avatar-one" className="w-20 h-20" imageClass="rounded-lg"/>
    <Avatar src={User6} alt="avatar-one" className="w-24 h-24" imageClass="rounded-lg"/>
    </>
  )
}
export default AvatarDots
`,p=`
import Avatar from "@/components/ui/Avatar"
import User1 from "@/assets/images/avatar/avatar.jpg"
import User2 from "@/assets/images/avatar/avatar-1.jpg"
import User3 from "@/assets/images/avatar/avatar-2.jpg"
import User4 from "@/assets/images/avatar/avatar-3.jpg"
import User5 from "@/assets/images/avatar/avatar-4.jpg"
import User6 from "@/assets/images/avatar/avatar-5.jpg"
const AvatarDotsColor = () => {
  return (
    <>
    <Avatar src={User1} alt="avatar-one" className="w-12 h-12" dot />
    <Avatar src={User2} alt="avatar-one" className="w-12 h-12" dot dotClass="bg-fuchsia-500"/>
    <Avatar src={User3} alt="avatar-one" className="w-12 h-12" dot dotClass="bg-green-500"/>
    <Avatar src={User4} alt="avatar-one" className="w-12 h-12" dot dotClass="bg-cyan-500"/>
    <Avatar src={User5} alt="avatar-one" className="w-12 h-12" dot dotClass="bg-red-500"/>
    <Avatar src={User6} alt="avatar-one" className="w-12 h-12" dot dotClass="bg-yellow-500"/>
    </>
  )
}
export default AvatarDotsColor
`,u=()=>r("div",{className:" max-w-2xl   space-xy",children:[a(s,{src:e,alt:"avatar-one",imageClass:"rounded-lg"}),a(s,{src:o,alt:"avatar-one",className:"w-10 h-10",imageClass:"rounded-lg"}),a(s,{src:l,alt:"avatar-one",className:"w-12 h-12",imageClass:"rounded-lg"}),a(s,{src:m,alt:"avatar-one",className:"w-16 h-16",imageClass:"rounded-lg"}),a(s,{src:v,alt:"avatar-one",className:"w-20 h-20",imageClass:"rounded-lg"}),a(s,{src:c,alt:"avatar-one",className:"w-24 h-24",imageClass:"rounded-lg"})]}),h=()=>r("div",{className:" max-w-2xl   space-xy",children:[a(s,{src:e,alt:"avatar-one",dot:!0}),a(s,{src:o,alt:"avatar-one",className:"w-10 h-10",dot:!0}),a(s,{src:l,alt:"avatar-one",className:"w-12 h-12",dot:!0}),a(s,{src:m,alt:"avatar-one",className:"w-16 h-16",dot:!0,dotClass:"m-1 bg-[#13317d]"}),a(s,{src:v,alt:"avatar-one",className:"w-20 h-20 ",dot:!0,dotClass:"m-1.5 bg-[#13317d]"}),a(s,{src:c,alt:"avatar-one",className:"w-24 h-24",dot:!0,dotClass:"m-2 bg-[#13317d]"})]}),A=()=>r("div",{className:" max-w-2xl   space-xy",children:[a(s,{src:e,alt:"avatar-one",className:"w-12 h-12",dot:!0}),a(s,{src:o,alt:"avatar-one",className:"w-12 h-12",dot:!0,dotClass:"bg-fuchsia-500"}),a(s,{src:l,alt:"avatar-one",className:"w-12 h-12",dot:!0,dotClass:"bg-green-500"}),a(s,{src:m,alt:"avatar-one",className:"w-12 h-12",dot:!0,dotClass:"bg-cyan-500"}),a(s,{src:v,alt:"avatar-one",className:"w-12 h-12",dot:!0,dotClass:"bg-red-500"}),a(s,{src:c,alt:"avatar-one",className:"w-12 h-12",dot:!0,dotClass:"bg-yellow-500"})]}),f=()=>r("div",{className:" space-y-5",children:[a(t,{title:"Rounded Avatar",code:d,children:a(n,{})}),a(t,{title:"Square Avatar",code:g,children:a(u,{})}),a(t,{title:"Avatar With Dots",code:i,children:a(h,{})}),a(t,{title:"Avatar Dot colors",code:p,children:a(A,{})})]});export{f as default};
