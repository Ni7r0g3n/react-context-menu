"use strict";(self.webpackChunkrcm_docs=self.webpackChunkrcm_docs||[]).push([[379],{2775:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294),l=n(2949);function a(e){const{isDarkTheme:t}=(0,l.I)();return i.createElement("div",{style:{border:"1px solid "+(t?"white":"black"),borderRadius:7,textAlign:"center",padding:"1rem",width:200,margin:0,whiteSpace:"pre-wrap",...e.style}},e.label??"Right click here!",e.children)}},6565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>o,items:()=>m,metadata:()=>c,nestedItems:()=>p,notNestedItems:()=>k,toc:()=>u});var i=n(7462),l=(n(7294),n(3905)),a=n(1234),s=n(2775);const o={sidebar_position:1},r="Overview",c={unversionedId:"Overview",id:"Overview",title:"Overview",description:"Banner logo",source:"@site/docs/Overview.mdx",sourceDirName:".",slug:"/Overview",permalink:"/react-context-menu/docs/Overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Customization",permalink:"/react-context-menu/docs/category/customization"}},d={},u=[{value:"React Context Menu",id:"react-context-menu",level:2},{value:"Known issues:",id:"known-issues",level:3},{value:"Installation",id:"installation",level:3},{value:"npm",id:"npm",level:4},{value:"yarn",id:"yarn",level:4},{value:"Base Use",id:"base-use",level:3},{value:"Nesting",id:"nesting",level:3}],m=[{label:"Create",onClick:()=>alert("Create clicked")},{label:"Edit",onClick:()=>alert("Edit clicked")},{label:"Delete",onClick:()=>alert("Delete clicked")}],k=[{label:"Create",onClick:()=>alert("Create clicked")},{label:"Edit",onClick:()=>alert("Edit clicked")},{label:"Delete",onClick:()=>alert("Delete clicked")}],p=[{label:"Nested 1",onClick:()=>alert("Nested 1 clicked")},{label:"Nested 2",onClick:()=>alert("Nested 2 clicked")},{label:"Nested 3",onClick:()=>alert("Nested 3 clicked")}],v={toc:u,items:m,notNestedItems:k,nestedItems:p},h="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52223453/225049899-44b9e1a4-0830-415e-9707-75803e214886.png",alt:"Banner logo"})),(0,l.kt)("h2",{id:"react-context-menu"},"React Context Menu"),(0,l.kt)("p",null,"React context menu is a simple library to implement custom context menus in your react application. This package is still in development, feel free to report bugs, ask question and make suggestions."),(0,l.kt)("h3",{id:"known-issues"},"Known issues:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nested menus will open one window each without closing the previous one. Might be desireable in some cases, I'll add the possibility to choose in the next versions.")),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("h4",{id:"npm"},"npm"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npm i @ni7r0g3n/react-context-menu")),(0,l.kt)("h4",{id:"yarn"},"yarn"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yarn add @ni7r0g3n/react-context-menu")),(0,l.kt)("h3",{id:"base-use"},"Base Use"),(0,l.kt)("p",null,"The component is very easy to use."),(0,l.kt)("p",null,'Wrap the component to the area you want to use the context menu on and pass an array of options.\nThe "label" can be both a string or a component.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ContextMenu } from "@ni7r0g3n/react-context-menu";\n\nfunction App() {\n  const items = [\n    { label: "Create", onClick: () => alert("Create clicked") },\n    { label: "Edit", onClick: () => alert("Edit clicked") },\n    { label: "Delete", onClick: () => alert("Delete clicked") },\n  ];\n\n  return (\n    <ContextMenu items={items}>\n      <div> Item to right click </div>\n      <div> or items </div>\n    </ContextMenu>\n  );\n}\n')),(0,l.kt)(a.x,{items:m,mdxType:"ContextMenu"},(0,l.kt)(s.Z,{mdxType:"ClickHere"})),(0,l.kt)("h3",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"It's also possible to nest context menus inside other context menus. This is useful if you need to specify different options for a specific context menu child. Keep in mind that as of now, each context menu you place has its own window, this means that opening a different context menu will not close the previous one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const items = [\n  { label: "Create", onClick: () => alert("Create clicked") },\n  { label: "Edit", onClick: () => alert("Edit clicked") },\n  { label: "Delete", onClick: () => alert("Delete clicked") },\n];\n\nconst nestedItems = [\n  { label: "Nested 1", onClick: () => alert("Nested 1 clicked") },\n  { label: "Nested 2", onClick: () => alert("Nested 2 clicked") },\n  { label: "Nested 3", onClick: () => alert("Nested 3 clicked") },\n];\n\nreturn (\n  <ContextMenu items={items}>\n    <div> Item to right click </div>\n    <ContextMenu items={nestedItems}>\n      <div> or items </div>\n    </ContextMenu>\n  </ContextMenu>\n);\n')),(0,l.kt)("div",{style:{display:"flex",flexDirection:"row"}},(0,l.kt)(a.x,{items:k,mdxType:"ContextMenu"},(0,l.kt)(s.Z,{label:"This has different options",mdxType:"ClickHere"},(0,l.kt)(a.x,{items:p,mdxType:"ContextMenu"},(0,l.kt)(s.Z,{label:"than this",style:{width:"100%",color:"white",backgroundColor:"black"},mdxType:"ClickHere"})))),(0,l.kt)("div",null)))}b.isMDXComponent=!0}}]);