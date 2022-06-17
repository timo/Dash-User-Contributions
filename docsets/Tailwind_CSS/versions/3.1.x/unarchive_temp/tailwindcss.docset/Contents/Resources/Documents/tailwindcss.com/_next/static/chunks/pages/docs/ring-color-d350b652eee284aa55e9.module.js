(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[154],{"9Jru":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const n=a=>Object.assign({},...Object.entries(a).flatMap(([a,e])=>"object"==typeof e?Object.entries(n(e)).map(([e,t])=>({[a+("DEFAULT"===e?"":"-"+e)]:t})):[{[""+a]:e}]));var c=n;e.default=c},X0FT:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-color",function(){return t("zBeD")}])},wgkg:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:t}){const p=(0,c.default)(e("ringColor")),i=a=>(0,o.default)({color:a,property:"--tw-ring-color",variable:"--tw-ring-opacity"});a(n.default.fromPairs(n.default.map(n.default.omit(p,"DEFAULT"),(a,e)=>[(0,s.default)("ring",e),i(a)])),t("ringColor"))}};var n=p(t("XMip")),c=p(t("9Jru")),s=p(t("dzuX")),o=p(t("kFV+"));function p(a){return a&&a.__esModule?a:{default:a}}},zBeD:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return h}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),o=t.n(s),p=t("7ljp"),i=t("YFqc"),r=t.n(i),l=t("tc9R"),b=t("pOT7"),u=t("vRWG"),m=t("I6Nb"),j=t("wgkg"),O=t.n(j),d=t("8C7G"),N=t("wH44"),g=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:O(),transformProperties:a=>{var{selector:e,properties:t}=a;return delete t["--tw-ring-opacity"],t}},meta:{title:"Ring Color",description:"Utilities for setting the color of outline rings."},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Changing opacity",slug:"changing-opacity"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=m.ContentsLayout;function h(a){var{components:e}=a,t=Object(c.a)(a,["components"]);return Object(p.a)(k,Object(n.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"ring-{color}")," utilities to set the color of an ",Object(p.a)(r.a,{href:"/docs/ring-width",passHref:!0},Object(p.a)("a",null,"outline ring")),".")),Object(p.a)(b.a,{preview:'\n  <button tabindex="-1" class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-indigo-500 ring-4 ring-indigo-300">\n    Button\n  </button>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... ring-4 <span class="code-highlight bg-code-highlight">ring-indigo-300</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Button\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-8",color:"indigo",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"changing-opacity",toc:!0},"Changing opacity"),Object(p.a)("p",null,"You can control the opacity of rings using the ",Object(p.a)("inlineCode",{parentName:"p"},"ring-opacity-{amount}")," utilities:")),Object(p.a)(b.a,{preview:'\n  <button tabindex="-1" class="focus:outline-none w-32 py-2 rounded-md font-semibold text-white bg-amber-500 ring-4 ring-amber-500 ring-opacity-50">\n    Button\n  </button>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... ring-4 <span class="code-highlight bg-code-highlight">ring-yellow-500</span> <span class="code-highlight bg-code-highlight">ring-opacity-50</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Button\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-8",color:"amber",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)("p",null,"For more information, see the ",Object(p.a)(r.a,{href:"/docs/ring-opacity",passHref:!0},Object(p.a)("a",null,"ringOpacity documentation")),"."),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the ring color at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ring color utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:ring-blue-500")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"ring-blue-500")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"ring-2 ring-blue-300 ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:ring-blue-500"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)("p",null,"You can customize which ring color utilities are generated by customizing your color palette using the ",Object(p.a)("inlineCode",{parentName:"p"},"colors")," key in the ",Object(p.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    colors",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      gray",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"blueGray"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      indigo",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"indigo"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      red",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"rose"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      yellow",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"yellow"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"If you'd like to customize only the ring color utilities without affecting your global color palette, use the ",Object(p.a)("inlineCode",{parentName:"p"},"ringColor")," key instead:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ringColor",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      white",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"white"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      pink",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"fuchsia"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Learn more about customizing the default theme in the ",Object(p.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(p.a)("a",null,"theme customization documentation")),"."),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(d.a,{plugin:"ringColor",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(N.a,{plugin:"ringColor",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=g}},[["X0FT",0,2,6,10,1,3,4,5,7,8,11]]]);