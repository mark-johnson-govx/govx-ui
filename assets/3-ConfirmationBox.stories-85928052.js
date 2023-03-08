import{j as i,a as e}from"./jsx-runtime-ee212120.js";import{B as s,r as l,b as d,g as f}from"./Button-4bf5a721.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-serialize.browser.esm-ec6dacb8.js";import"./assertThisInitialized-9bf4def9.js";const o=({title:t="",body:p="",type:n="confirm",onClose:a,onConfirm:w})=>i("div",{className:"tw-relative tw-font-sans tw-m-4 tw-rounded tw-shadow-xl tw-p-6 tw-max-w-lg tw-text-center tw-border-2 tw-border-solid tw-border-gray-light",children:[e("button",{onClick:a,type:"button",className:"reset tw-bg-transparent tw-rounded tw-absolute tw-top-0 tw-right-0 tw-m-2 tw-cursor-pointer tw-text-xl tw-transform hover:tw-scale-[175%] hover:tw-text-gray-medium tw-transition tw-duration-150",children:"×"}),e("h3",{className:"reset tw-text-xl tw-text-gray-darkest tw-font-extrabold tw-tracking-wide",children:t}),e("p",{className:"tw-leading-8 tw-text-lg",children:p}),i("div",{className:"tw-flex tw-gap-4 tw-justify-center tw-mt-8 tw-items-center tw-border-t-2 tw-border-gray-subtle tw-border-solid tw-border-x-0 tw-border-b-0 tw-pt-3",children:[e("div",{children:e(s,{onClick:w,variant:"contained",size:"large",sx:{backgroundColor:n==="delete"?l[700]:d[700],"&:hover":{backgroundColor:n==="delete"?l[800]:d[800]}},children:n==="delete"?"Delete":"Confirm"})}),e("div",{children:e(s,{onClick:a,variant:"text",sx:{color:f[700],textDecoration:"underline"},children:"Cancel"})})]})]});try{o.displayName="ConfirmationBox",o.__docgenInfo={description:"",displayName:"ConfirmationBox",props:{title:{defaultValue:{value:""},description:"The title of the confirmation box",name:"title",required:!1,type:{name:"string"}},body:{defaultValue:{value:""},description:"The text shown for the message",name:"body",required:!1,type:{name:"string"}},type:{defaultValue:{value:"confirm"},description:"The type of confirmation box.",name:"type",required:!1,type:{name:"enum",value:[{value:'"delete"'},{value:'"confirm"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const B={title:"Confirmation Box",component:o,parameters:{},tags:["autodocs"]},r={args:{title:"Delete User",body:"Are you sure you wish to delete this user on this platform?",type:"delete"},argTypes:{type:{control:{type:"select",options:["confirm","delete"]}},onClose:{action:"close",control:!1},onConfirm:{action:"confirm",control:!1}},render:t=>e(o,{...t})};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Delete User",
    body: "Are you sure you wish to delete this user on this platform?",
    type: "delete"
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["confirm", "delete"]
      }
    },
    onClose: {
      action: "close",
      control: false
    },
    onConfirm: {
      action: "confirm",
      control: false
    }
  },
  render: args => <ConfirmationBox {...args} />
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const _=["Basic"];export{r as Basic,_ as __namedExportsOrder,B as default};
//# sourceMappingURL=3-ConfirmationBox.stories-85928052.js.map
