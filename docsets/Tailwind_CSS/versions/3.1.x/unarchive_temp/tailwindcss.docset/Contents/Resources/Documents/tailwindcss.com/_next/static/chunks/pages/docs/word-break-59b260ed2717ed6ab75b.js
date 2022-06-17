_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[185],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n),r=a("98BF"),o=a("Zb5r"),i=a("AOjV"),l=s.a.createElement;function c({plugin:e,name:t}){const a=r.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,((e,t,a)=>`${t} ${a.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!a.includes(e))).slice(0,2),s=`By default, ${a.length?`only ${Object(o.a)(a).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${t} utilities.`;return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:s}}),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(o.a)(n)," variants:"),l(i.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),s=a.n(n),r=(a("Btb4"),a("AI3G")),o=a("iuhU"),i=s.a.createElement;function l({value:e}){return"string"===typeof e?i("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),e.map(((t,a)=>i(n.Fragment,{key:a},i(l,{value:t}),a===e.length-1?null:i("span",{className:"token punctuation"},", ")))),i("span",{className:"token punctuation"},"]")):"boolean"===typeof e?i("span",{className:"token boolean"},e.toString()):e.toString()}function c({edits:e,indent:t="",type:a="inserted"}){return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===a,"deleted-sign deleted":"inserted"!==a})},Object.keys(e).map(((s,r)=>{return i(n.Fragment,{key:r},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===a,deleted:"inserted"!==a})},"inserted"===a?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(c=s)?c:`'${c}'`,i("span",{className:"token operator"},":")," ",i(l,{value:e[s]}),i("span",{className:"token punctuation"},","),"\n");var c})))}function p({path:e,add:t,remove:a,before:s,after:o}){return e="string"===typeof e?e.split("."):e,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",e.map(((e,t)=>i(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(r.a)(s).map(((t,a)=>i(n.Fragment,{key:a},"  ".repeat(e.length+2),i("span",{className:"token comment"},`// ${t}`),"\n")))),a&&i(c,{edits:a,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&i(c,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),i("span",{className:"token unchanged"},o&&Object(r.a)(o).map((t=>`${"  ".repeat(e.length+2)}${t}\n`)),e.map(((t,a)=>i(n.Fragment,{key:a},"  ","  ".repeat(e.length-a),"}\n"))),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),r=a("GAX2").default;e.exports=(e,t,a)=>{const o=[];return function e(t,a,i){let l;(a=a||{}).indent=a.indent||"\t",i=i||"",l=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),i).replace(new RegExp(l.indent,"g"),i+a.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const n="["+l.newLine+t.map(((n,s)=>{const r=t.length-1===s?l.newLine:","+l.newLineOrSpace;let o=e(n,a,i+a.indent);return a.transform&&(o=a.transform(t,s,o)),l.indent+o+r})).join("")+l.pad+"]";return o.pop(),c(n)}if(s(t)){let n=Object.keys(t).concat(r(t));if(a.filter&&(n=n.filter((e=>a.filter(t,e)))),0===n.length)return"{}";o.push(t);const s="{"+l.newLine+n.map(((s,r)=>{const o=n.length-1===r?l.newLine:","+l.newLineOrSpace,c="symbol"===typeof s,p=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=c||p?s:e(s,a);let d=e(t[s],a,i+a.indent);return a.transform&&(d=a.transform(t,s,d)),l.indent+String(u)+": "+d+o})).join("")+l.pad+"}";return o.pop(),c(s)}return t=String(t).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter((t=>Object.prototype.propertyIsEnumerable.call(e,t)))},SWTh:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a("HALo"),s=a("dhJC"),r=a("q1tI"),o=a.n(r),i=a("7ljp"),l=a("YFqc"),c=a.n(l),p=a("tc9R"),u=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),b=a("Yy6n"),g=a.n(b),f=a("8C7G"),h=a("wH44");o.a.createElement;const O={Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"Word Break",description:"Utilities for controlling word breaks in an element."},tableOfContents:[{title:"Normal",slug:"normal",children:[]},{title:"Break Words",slug:"break-words",children:[]},{title:"Break All",slug:"break-all",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},k=m.ContentsLayout;function j(e){let{components:t}=e,a=Object(s.a)(e,["components"]);return Object(i.a)(k,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"normal",toc:!0},"Normal"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"break-normal")," to only add line breaks at normal word break points.")),Object(i.a)(u.a,{preview:'\n  <p class="break-normal max-w-xs px-6 py-4 mx-auto bg-light-blue-200 text-light-blue-500 font-medium rounded-lg">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">break-normal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"break-words",toc:!0},"Break Words"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"break-words")," to add line breaks mid-word if needed.")),Object(i.a)(u.a,{preview:'\n  <p class="break-words max-w-xs px-6 py-4 mx-auto bg-amber-200 text-amber-500 font-medium rounded-lg">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">break-words</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"break-all",toc:!0},"Break All"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"break-all")," to add line breaks whenever necessary, without trying to preserve whole words.")),Object(i.a)(u.a,{preview:'\n  <p class="break-all max-w-xs px-6 py-4 mx-auto bg-emerald-200 text-emerald-500 font-medium rounded-lg">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">break-all</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the word breaks in an element only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing word break utility. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:break-all")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"break-all")," utility at medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"break-normal ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:break-all")," ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(i.a)(c.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(f.a,{plugin:"wordBreak",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(h.a,{plugin:"wordBreak",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=O},UYGK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/word-break",function(){return a("SWTh")}])},Yy6n:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".break-normal":{"overflow-wrap":"normal","word-break":"normal"},".break-words":{"overflow-wrap":"break-word"},".break-all":{"word-break":"break-all"}},t("wordBreak"))}}},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce(((t,a,n)=>0===n?a:n===e.length-1?`${t} and ${a}`:`${t}, ${a}`),"")}a.d(t,"a",(function(){return n}))},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a("HALo"),s=a("q1tI"),r=a.n(s),o=a("iuhU"),i=a("ZMKu"),l=r.a.createElement;const c={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){const t=Object(s.useRef)(),{0:a,1:r}=Object(s.useState)(!1),{0:o,1:i}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!a)return;function e(){i({height:t.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(t.current.contentDocument.body),()=>{n.disconnect()}}),[a]),l("iframe",Object(n.a)({},e,{ref:t,onLoad:()=>r(!0),style:o}))}function b({color:e,snippet:t}){return l("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",c[e],{"bg-gray-800":!c[e]})},l("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":c[e]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g({preview:e,src:t,snippet:a,previewClassName:n,color:s="gray"}){return l("div",{className:"relative overflow-hidden mb-8"},e?l("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):l(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",p[s])}),l(b,{color:s,snippet:a}))}function f({preview:e,src:t,previewClassName:a,snippet:n,color:r="gray",min:c=!1}){const g=Object(s.useRef)(),f=Object(i.h)(0),h=Object(s.useRef)(),{0:O,1:k}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),l("div",{className:"relative mb-8"},l("div",{ref:g,className:`relative rounded-t-xl ${u[r]}`},l("div",{className:c?"md:w-88":void 0},l(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(f,(e=>-e))}},e?l("div",{className:Object(o.a)("rounded-t-xl",a,p[r],{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):l(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",p[r],{"pointer-events-none":O})}))),l("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(i.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(c?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[r]}`,style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(b,{color:r,snippet:n}))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("cpVT"),s=a("q1tI"),r=a.n(s),o=a("AOjV"),i=a("AI3G"),l=a("Zb5r"),c=r.a.createElement;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d({plugin:e,name:t}){const a=Object(i.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,((e,t,a)=>`${t} ${a.toLowerCase()}`)),c("div",{className:"prose"},c("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",c("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(a.map((e=>`<code>${e}</code>`)))}})," ",a.length>1?"properties":"property"," to ",c("code",null,"false")," in the"," ",c("code",null,"corePlugins")," section of your config file:"),c(o.a,{path:"corePlugins",before:"...",add:a.reduce(((e,t)=>u(u({},e),{},{[t]:!1})),{})}))}}},[["UYGK",0,2,6,1,3,4,5,7]]]);