import{a as n}from"./jsx-runtime-ee212120.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const p=e=>{const t=["reset","tw-box-border","tw-tracking-wide","tw-h-[45px]","tw-transition-colors","tw-duration-300","tw-px-4","tw-rounded-[2px]"];let a=[];return e.fullWidth&&(a=[...a,"tw-block","tw-w-full"]),[...a,...t].join(" ")},_=({children:e,type:t="button",fullWidth:a=!1,...r})=>n("button",{type:t,...r,className:`${p({fullWidth:a})} tw-bg-blue-dark hover:tw-bg-blue-darker disabled:tw-bg-[#e0e0e0] active:tw-bg-[#527686] tw-text-white tw-font-medium`,children:e}),u=({children:e,type:t="button",fullWidth:a=!1,...r})=>n("button",{type:t,...r,className:`${p({fullWidth:a})} tw-bg-gray-dark hover:tw-bg-gray-darkest disabled:tw-bg-[#e0e0e0] active:tw-bg-[#646D85] tw-text-white tw-font-medium`,children:e}),s=({children:e,type:t="button",fullWidth:a=!1,...r})=>n("button",{type:t,...r,className:`${p({fullWidth:a})} tw-bg-white hover:tw-bg-[#EAEAEA] disabled:tw-bg-[#e0e0e0] active:tw-bg-[#f2f2f2] tw-text-blue-dark disabled:tw-text-white tw-font-medium tw-border-2 disabled:tw-border-none tw-border-solid tw-border-blue-dark`,children:e}),c=({children:e,type:t="button"})=>n("button",{type:t,children:e}),l=e=>{const{variant:t,...a}=e;return t==="secondary"?n(s,{...a,children:e.children}):t==="danger"?n(c,{...a,children:e.children}):t==="primary"?n(u,{...a,children:e.children}):n(_,{...a,children:e.children})};try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"cta"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}}}}}catch{}try{u.displayName="PrimaryButton",u.__docgenInfo={description:"",displayName:"PrimaryButton",props:{onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="SecondaryButton",s.__docgenInfo={description:"",displayName:"SecondaryButton",props:{onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="DangerButton",c.__docgenInfo={description:"",displayName:"DangerButton",props:{onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Button",component:l,argTypes:{variant:{control:!1},onClick:{action:"clicked",control:!1},children:{name:"Label"}},tags:["autodocs"]},d={args:{children:"Add to Cart",disabled:!1,type:"button"},render:({children:e,...t})=>n(l,{variant:"cta",disabled:t.disabled,onClick:t.onClick,fullWidth:t.fullWidth,type:t.type,children:e})},o={args:{children:"+ Show More Products",disabled:!1,type:"button",onClick:e=>console.log(e.currentTarget.value)},render:({children:e,...t})=>n(l,{variant:"primary",disabled:t.disabled,onClick:t.onClick,fullWidth:t.fullWidth,type:t.type,children:e})},i={args:{children:"View Cart",disabled:!1,type:"button",onClick:e=>console.log(e.currentTarget.value)},render:({children:e,...t})=>n(l,{variant:"secondary",disabled:t.disabled,onClick:t.onClick,fullWidth:t.fullWidth,type:t.type,children:e})};var m,b,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Add to Cart",
    disabled: false,
    type: "button"
  },
  render: ({
    children,
    ...args
  }) => <Button variant="cta" disabled={args.disabled} onClick={args.onClick} fullWidth={args.fullWidth} type={args.type}>
      {children}
    </Button>
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "+ Show More Products",
    disabled: false,
    type: "button",
    onClick: e => console.log(e.currentTarget.value)
  },
  render: ({
    children,
    ...args
  }) => <Button variant="primary" disabled={args.disabled} onClick={args.onClick} fullWidth={args.fullWidth} type={args.type}>
      {children}
    </Button>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,w,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "View Cart",
    disabled: false,
    type: "button",
    onClick: e => console.log(e.currentTarget.value)
  },
  render: ({
    children,
    ...args
  }) => <Button variant="secondary" disabled={args.disabled} onClick={args.onClick} fullWidth={args.fullWidth} type={args.type}>
      {children}
    </Button>
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const q=["CTA","Primary","Secondary"];export{d as CTA,o as Primary,i as Secondary,q as __namedExportsOrder,V as default};
//# sourceMappingURL=1-Buttons.stories-e4535588.js.map
