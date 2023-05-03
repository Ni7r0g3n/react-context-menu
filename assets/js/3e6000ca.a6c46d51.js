"use strict";(self.webpackChunkrcm_docs=self.webpackChunkrcm_docs||[]).push([[121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,v=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?o.createElement(v,a(a({ref:t},c),{},{components:n})):o.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},a=void 0,l={unversionedId:"Events",id:"Events",title:"Events",description:"There are some events that get fired during use",source:"@site/docs/Events.mdx",sourceDirName:".",slug:"/Events",permalink:"/docs/Events",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Events.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Animations",permalink:"/docs/Customization/Animations"},next:{title:"Additional Props",permalink:"/docs/Additional Props"}},u={},p=[{value:"onOpen",id:"onopen",level:3},{value:"onClose",id:"onclose",level:3},{value:"onItemHoverIn",id:"onitemhoverin",level:3},{value:"onItemHoverOut",id:"onitemhoverout",level:3},{value:"onInAnimationEnd",id:"oninanimationend",level:3},{value:"onOutAnimationEnd",id:"onoutanimationend",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are some events that get fired during use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"onOpen?: () => void;\nonClose?: () => void;\nonItemHoverIn?: (item: ContextMenuItem) => void;\nonItemHoverOut?: (item: ContextMenuItem) => void;\nonInAnimationEnd?: () => void;\nonOutAnimationEnd?: () => void;\n")),(0,r.kt)("h3",{id:"onopen"},"onOpen"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("p",null,"It fires before setting the state to open the context menu."),(0,r.kt)("h3",{id:"onclose"},"onClose"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("p",null,"It fires during unmount cleanup function"),(0,r.kt)("h3",{id:"onitemhoverin"},"onItemHoverIn"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Accepts: ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextMenuItem"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("p",null,"It fires while hovering an item. Receives the hovered ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextMenuItem"),"."),(0,r.kt)("h3",{id:"onitemhoverout"},"onItemHoverOut"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Accepts: ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextMenuItem"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("p",null,"It fires when the cursor stops hovering an item. Receives the hovered ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextMenuItem"),"."),(0,r.kt)("h3",{id:"oninanimationend"},"onInAnimationEnd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("p",null,"It fires when the opening animation ends."),(0,r.kt)("h3",{id:"onoutanimationend"},"onOutAnimationEnd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("p",null,"It fires when the closing animation ends."))}d.isMDXComponent=!0}}]);