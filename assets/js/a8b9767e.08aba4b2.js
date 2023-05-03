"use strict";(self.webpackChunkrcm_docs=self.webpackChunkrcm_docs||[]).push([[602],{2775:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(2949);function o(e){const{isDarkTheme:t}=(0,r.I)();return n.createElement("div",{style:{border:"1px solid "+(t?"white":"black"),borderRadius:7,textAlign:"center",padding:"1rem",width:200,margin:0,whiteSpace:"pre-wrap",...e.style}},e.label??"Right click here!",e.children)}},3883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,items:()=>c,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(1234),i=a(2775);const l={sidebar_position:1},d="Component variants",s={unversionedId:"Customization/Variants",id:"Customization/Variants",title:"Component variants",description:"For the laziest devs that only need a quick context menu, I packed a couple of default variants inside the component.",source:"@site/docs/Customization/Variants.mdx",sourceDirName:"Customization",slug:"/Customization/Variants",permalink:"/docs/Customization/Variants",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Customization/Variants.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/docs/category/customization"},next:{title:"Styling",permalink:"/docs/Customization/Styling"}},p={},m=[{value:"Default color values",id:"default-color-values",level:2}],c=[{label:"Create",onClick:()=>alert("Create clicked")},{label:"Edit",onClick:()=>alert("Edit clicked")},{label:"Delete",onClick:()=>alert("Delete clicked")}],k={toc:m,items:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component-variants"},"Component variants"),(0,r.kt)("p",null,"For the laziest devs that only need a quick context menu, I packed a couple of default variants inside the component.\nTo control variants you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," prop that accepts an object with three possible properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"prop"),(0,r.kt)("th",{parentName:"tr",align:null},"values"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"opacity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"transparent"')," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"or"))," ",(0,r.kt)("inlineCode",{parentName:"td"},'"solid"')),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"variant")," prop changes the opacity of the component. By default it's set to ",(0,r.kt)("inlineCode",{parentName:"td"},"transparent"),", which allows to barely see the content underneath the menu. Otherwise you can use solid, which has full opacity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"theme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"light"')," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"or"))," ",(0,r.kt)("inlineCode",{parentName:"td"},'"dark"')),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"theme")," prop changes the color of the menu. By default it's set to ",(0,r.kt)("inlineCode",{parentName:"td"},"light"),". It's suggested to tweak the colors of the menu to reflect the ones on your app, or vice versa.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"elevation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"raised"')," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"or"))," ",(0,r.kt)("inlineCode",{parentName:"td"},'"flat"')),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"elevation")," prop enables or disables the box-shadow of the menu. By default it's set to ",(0,r.kt)("inlineCode",{parentName:"td"},"raised"),".")))),(0,r.kt)("h2",{id:"default-color-values"},"Default color values"),(0,r.kt)("p",null,"The default colors for both themes are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".light {\n  background-color: rgb(240, 240, 240);\n  color: rgb(50, 50, 50);\n}\n\n.dark {\n  background-color: rgb(50, 50, 50);\n  color: rgb(240, 240, 240);\n}\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row",flexWrap:"wrap"}},(0,r.kt)(o.x,{variant:{theme:"light",opacity:"solid",elevation:"flat"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"light\nsolid\nflat",mdxType:"ClickHere"})),(0,r.kt)(o.x,{variant:{theme:"dark",opacity:"solid",elevation:"flat"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"dark\nsolid\nflat",style:{border:"none",color:"white",backgroundColor:"black"},mdxType:"ClickHere"})),(0,r.kt)(o.x,{variant:{theme:"light",opacity:"solid",elevation:"raised"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"light\nsolid\nraised",mdxType:"ClickHere"})),(0,r.kt)(o.x,{variant:{theme:"dark",opacity:"solid",elevation:"raised"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"dark\nsolid\nraised",style:{border:"none",color:"white",backgroundColor:"black"},mdxType:"ClickHere"})),(0,r.kt)(o.x,{variant:{theme:"light",opacity:"transparent",elevation:"flat"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"light\ntransparent\nflat",mdxType:"ClickHere"})),(0,r.kt)(o.x,{variant:{theme:"dark",opacity:"transparent",elevation:"flat"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"dark\ntransparent\nflat",style:{border:"none",color:"white",backgroundColor:"black"},mdxType:"ClickHere"})),(0,r.kt)(o.x,{variant:{theme:"light",opacity:"transparent",elevation:"raised"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"light\ntransparent\nraised",mdxType:"ClickHere"})),(0,r.kt)(o.x,{variant:{theme:"dark",opacity:"transparent",elevation:"raised"},items:c,mdxType:"ContextMenu"},(0,r.kt)(i.Z,{label:"dark\ntransparent\nraised",style:{border:"none",color:"white",backgroundColor:"black"},mdxType:"ClickHere"}))))}h.isMDXComponent=!0}}]);