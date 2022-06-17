_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[86],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("rePB"),s=a("q1tI"),i=a.n(s),r=a("98BF"),o=a("Zb5r"),c=a("AOjV"),l=i.a.createElement;function u(e){var t=e.plugin,a=e.name,s=r.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var i=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),u="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:u}}),l("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(i)," variants:"),l(c.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,i)}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),s=a.n(n),i=(a("Btb4"),a("AI3G")),r=a("iuhU"),o=s.a.createElement;function c(e){var t=e.value;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((function(e,a){return o(n.Fragment,{key:a},o(c,{value:e}),a===t.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,a=e.indent,s=void 0===a?"":a,i=e.type,l=void 0===i?"inserted":i;return o("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,a){return o(n.Fragment,{key:a},o("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(i=e)?i:"'".concat(i,"'"),o("span",{className:"token operator"},":")," ",o(c,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var i})))}function u(e){var t=e.path,a=e.add,s=e.remove,r=e.before,c=e.after;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return o(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),r&&Object(i.a)(r).map((function(e,a){return o(n.Fragment,{key:a},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&o(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&o(l,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},c&&Object(i.a)(c).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,a){return o(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),i=a("GAX2").default;e.exports=(e,t,a)=>{const r=[];return function e(t,a,o){let c;(a=a||{}).indent=a.indent||"\t",o=o||"",c=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),o).replace(new RegExp(c.indent,"g"),o+a.indent)};if(-1!==r.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";r.push(t);const n="["+c.newLine+t.map((n,s)=>{const i=t.length-1===s?c.newLine:","+c.newLineOrSpace;let r=e(n,a,o+a.indent);return a.transform&&(r=a.transform(t,s,r)),c.indent+r+i}).join("")+c.pad+"]";return r.pop(),l(n)}if(s(t)){let n=Object.keys(t).concat(i(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";r.push(t);const s="{"+c.newLine+n.map((s,i)=>{const r=n.length-1===i?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof s,u=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),p=l||u?s:e(s,a);let m=e(t[s],a,o+a.indent);return a.transform&&(m=a.transform(t,s,m)),c.indent+String(p)+": "+m+r}).join("")+c.pad+"}";return r.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},EmDB:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/float",function(){return a("Mh21")}])},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Mh21:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a("wx14"),s=a("Ff2n"),i=a("q1tI"),r=a.n(i),o=a("7ljp"),c=a("YFqc"),l=a.n(c),u=a("tc9R"),p=a("pOT7"),m=a("vRWG"),d=a("I6Nb"),g=a("mnQy"),f=a.n(g),b=a("8C7G"),v=a("wH44"),h=(r.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:f.a},meta:{title:"Floats",description:"Utilities for controlling the wrapping of content around an element.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Float right",slug:"float-right",children:[]},{title:"Float left",slug:"float-left",children:[]},{title:"Don't float",slug:"don-t-float",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),O=d.ContentsLayout;function j(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.a)(O,Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"float-right",toc:!0},"Float right"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"float-right")," to float an element to the right of its container.")),Object(o.a)(p.a,{preview:'\n  <img class="float-right mt-2 mr-0 mb-4 ml-10 h-32" src="/img/placeholder-emerald.svg">\n  <p class="text-emerald-500 font-flow text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">float-right</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"float-left",toc:!0},"Float left"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"float-left")," to float an element to the left of its container.")),Object(o.a)(p.a,{preview:'\n  <img class="float-left mt-2 ml-0 mb-4 mr-10 h-32" src="/img/placeholder-indigo.svg">\n  <p class="text-indigo-500 font-flow text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">float-left</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"don-t-float",toc:!0},"Don't float"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"float-none")," to reset any floats that are applied to an element. This is the default value for the float property.")),Object(o.a)(p.a,{preview:'\n  <img class="float-none mb-8 h-32" src="/img/placeholder-purple.svg">\n  <p class="text-purple-500 font-flow text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">float-none</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the float of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing float utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:float-left")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"float-left")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-gray-200 p-4",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"float-right ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:float-left")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(u.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(b.a,{plugin:"float",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(v.a,{plugin:"float",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=h},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((function(t,a,n){return 0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n),i=a("8Kt/"),r=a.n(i),o=s.a.createElement;function c(e){var t=e.suffix,a=e.children+(t?" - ".concat(t):"");return o(r.a,null,o("title",{key:"title"},a),o("meta",{key:"twitter:title",name:"twitter:title",content:a}),o("meta",{key:"og:title",property:"og:title",content:a}))}},mnQy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".float-right":{float:"right"},".float-left":{float:"left"},".float-none":{float:"none"}},t("float"))}}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return b}));var n=a("wx14"),s=a("q1tI"),i=a.n(s),r=a("iuhU"),o=a("ZMKu"),c=i.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},p={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){var t=Object(s.useRef)(),a=Object(s.useState)(!1),i=a[0],r=a[1],o=Object(s.useState)({}),l=o[0],u=o[1];return Object(s.useEffect)((function(){if(i){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function a(){u({height:t.current.contentDocument.body.scrollHeight})}}),[i]),c("iframe",Object(n.a)({},e,{ref:t,onLoad:function(){return r(!0)},style:l}))}function g(e){var t=e.color,a=e.snippet;return c("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},c("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function f(e){var t=e.preview,a=e.src,n=e.snippet,s=e.previewClassName,i=e.color,o=void 0===i?"gray":i;return c("div",{className:"relative overflow-hidden mb-8"},t?c("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",u[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):c(d,{src:a,className:Object(r.a)("w-full rounded-t-xl",u[o])}),c(g,{color:o,snippet:n}))}function b(e){var t=e.preview,a=e.src,n=e.previewClassName,i=e.snippet,l=e.color,f=void 0===l?"gray":l,b=e.min,v=void 0!==b&&b,h=Object(s.useRef)(),O=Object(o.h)(0),j=Object(s.useRef)(),N=Object(s.useState)(!1),k=N[0],y=N[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){O.set(0)}));return e.observe(h.current),function(){e.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:h,className:"relative rounded-t-xl ".concat(p[f])},c("div",{className:v?"md:w-88":void 0},c(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,(function(e){return-e}))}},t?c("div",{className:Object(r.a)("rounded-t-xl",n,u[f],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):c(d,{src:a,className:Object(r.a)("w-full rounded-t-xl",u[f],{"pointer-events-none":k})}))),c("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(v?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[f]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(g,{color:f,snippet:i}))}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return d}));var n=a("wx14"),s=a("q1tI"),i=a.n(s),r=a("ekQu"),o=a("8Kt/"),c=a.n(o),l=a("nOHt"),u=a("ap0H"),p=a("1Q1k"),m=i.a.createElement;function d(e){var t=Object(l.useRouter)();return m(i.a.Fragment,null,m(u.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(c.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(r.b,Object(n.a)({nav:p.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("rePB"),s=a("q1tI"),i=a.n(s),r=a("AOjV"),o=a("AI3G"),c=a("Zb5r"),l=i.a.createElement;function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e){var t=e.plugin,a=e.name,s=Object(o.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(r.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,t){return p(p({},e),{},Object(n.a)({},t,!1))}),{})}))}}},[["EmDB",0,2,6,1,3,4,5,7]]]);