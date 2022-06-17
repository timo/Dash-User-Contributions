(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[178],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),i=t("98BF"),r=t("Zb5r"),o=t("AOjV"),c=s.a.createElement;function p(e){var{plugin:a,name:t}=e,n=i.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),p="By default, ".concat(n.length?"only ".concat(Object(r.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return c("div",{className:"prose"},c("p",{dangerouslySetInnerHTML:{__html:p}}),c("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",c("code",null,a)," property in the ",c("code",null,"variants")," section of your"," ",c("code",null,"tailwind.config.js")," file."),c("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(r.a)(s)," variants:"),c(o.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},Tapg:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transformOrigin",[["origin",["transformOrigin"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pO5O:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transform-origin",function(){return t("wtb5")}])},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return f}));var n=t("wx14"),s=t("q1tI"),i=t.n(s),r=t("iuhU"),o=t("ZMKu"),c=i.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var a=Object(s.useRef)(),{0:t,1:i}=Object(s.useState)(!1),{0:r,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function n(){o({height:a.current.contentDocument.body.scrollHeight})}},[t]),c("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>i(!0),style:r}))}function b(e){var{color:a,snippet:t}=e;return c("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},c("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function d(e){var{preview:a,src:t,snippet:n,previewClassName:s,color:i="gray"}=e;return c("div",{className:"relative overflow-hidden mb-8"},a?c("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",l[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):c(g,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[i])}),c(b,{color:i,snippet:n}))}function f(e){var{preview:a,src:t,previewClassName:n,snippet:i,color:p="gray",min:d=!1}=e,f=Object(s.useRef)(),O=Object(o.h)(0),j=Object(s.useRef)(),{0:h,1:N}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{O.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),c("div",{className:"relative mb-8"},c("div",{ref:f,className:"relative rounded-t-xl ".concat(u[p])},c("div",{className:d?"md:w-88":void 0},c(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,e=>-e)}},a?c("div",{className:Object(r.a)("rounded-t-xl",n,l[p],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):c(g,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[p],{"pointer-events-none":h})}))),c("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(d?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[p]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(b,{color:p,snippet:i}))}},wtb5:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("wx14"),s=t("Ff2n"),i=t("q1tI"),r=t.n(i),o=t("7ljp"),c=t("YFqc"),p=t.n(c),l=t("tc9R"),u=t("pOT7"),m=t("vRWG"),g=t("I6Nb"),b=t("Tapg"),d=t.n(b),f=t("8C7G"),O=t("wH44"),j=(r.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:d()},meta:{title:"Transform Origin",description:"Utilities for specifying the origin for an element's transformations."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Origin values",slug:"origin-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function N(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(o.a)(h,Object(n.a)({},j,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Specify an element's transform origin using the ",Object(o.a)("inlineCode",{parentName:"p"},"origin-{keyword}")," utilities.")),Object(o.a)(u.a,{preview:'\n  <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-center transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-top-left transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-bottom-right transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-left transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-center</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-top-left</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-bottom-right</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-left</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the transform-origin of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transform-origin utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:origin-top")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"origin-top")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"origin-center ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:origin-top")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"origin-values",toc:!0},"Origin values"),Object(o.a)("p",null,"By default, Tailwind provides transform-origin utilities for all of the built-in browser keyword options. You change, add, or remove these by customizing the ",Object(o.a)("inlineCode",{parentName:"p"},"transformOrigin")," section of your Tailwind theme config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transformOrigin",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'24'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'6rem'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'full'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'100%'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(f.a,{plugin:"transformOrigin",name:"transform-origin",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"transformOrigin",name:"transform-origin",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j}},[["pO5O",0,2,6,1,3,4,5,7,8,9]]]);