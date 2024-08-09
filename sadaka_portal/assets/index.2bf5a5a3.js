import{a as n,j as e}from"./index.ef1be1b9.js";import{c as t}from"./code-snippet.9dcb43e4.js";import{I as p}from"./InputGroup.49993b9a.js";const r=()=>n("div",{className:" space-y-4",children:[e(p,{type:"text",label:"Prepend Addon",placeholder:"Username",prepend:"@"}),e(p,{type:"text",placeholder:"Username",label:"Append Addon",append:"@facebook.com"}),e(p,{type:"text",placeholder:"Username",label:"Between input:",prepend:"$",append:"120"})]}),d=`
import InputGroup from "@/components/ui/InputGroup";
const BasicInputGroup = () => {
    return (
        <div className=" space-y-4">
            <InputGroup
                type="text"
                label="Prepend Addon"
                placeholder="Username"
                prepend="@"
            />
            <InputGroup
                type="text"
                placeholder="Username"
                label="Append Addon"
                append="@facebook.com"
            />
            <InputGroup
                type="text"
                placeholder="Username"
                label="Between input:"
                prepend="$"
                append="120"
            />
        </div>
    );
};
export default BasicInputGroup;
`,o=`
import InputGroup from "@/components/ui/InputGroup";
const BasicInputGroup = () => {
    return (
        <>
        <InputGroup
                type="text"
                label="Prepend Addon"
                placeholder="Username"
                prepend="@"
                merged
            />
            <InputGroup
                type="text"
                placeholder="Username"
                label="Append Addon"
                append="@facebook.com"
                merged
            />
            <InputGroup
                type="text"
                placeholder="Username"
                label="Between input:"
                prepend="$"
                append="120"
                merged
            />
        </>
    );
};
export default BasicInputGroup;
`,a=()=>n("div",{className:" space-y-4",children:[e(p,{type:"text",label:"Prepend Addon",placeholder:"Username",prepend:"@",merged:!0}),e(p,{type:"text",placeholder:"Username",label:"Append Addon",append:"@facebook.com",merged:!0}),e(p,{type:"text",placeholder:"Username",label:"Between input:",prepend:"$",append:"120",merged:!0})]}),s=()=>n("div",{className:" space-y-5",children:[e(t,{title:"Input Group",code:d,children:e(r,{})}),e(t,{title:"Merged Addon",code:o,children:e(a,{})})]});export{s as default};
