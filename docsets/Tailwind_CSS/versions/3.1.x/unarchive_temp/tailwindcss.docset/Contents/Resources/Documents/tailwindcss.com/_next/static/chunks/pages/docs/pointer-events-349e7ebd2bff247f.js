(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5445],{52302:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/pointer-events",function(){return c(34892)}])},34892:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return o}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(83434),g=c(53339),h=c(50156);c(5286);var i=c(74565),j=c(68143),k=g.DocumentationLayout,l=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",Object.assign({},a))},m={Layout:k,classes:{utilities:{".pointer-events-none":{"pointer-events":"none"},".pointer-events-auto":{"pointer-events":"auto"}}},meta:{title:"Pointer Events",description:"Utilities for controlling whether an element responds to pointer events."},slug:"pointer-events",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Controlling pointer event behavior",slug:"controlling-pointer-event-behavior",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},n=h.ContentsLayout;function o(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.mdx)(n,Object.assign({},m,c,{components:b,mdxType:"MDXLayout"}),(0,d.mdx)(e.Heading,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,d.mdx)(e.Heading,{level:3,id:"controlling-pointer-event-behavior",nextElement:{type:"paragraph"}},"Controlling pointer event behavior"),(0,d.mdx)("p",null,"Use ",(0,d.mdx)("inlineCode",{parentName:"p"},"pointer-events-auto")," to revert to the default browser behavior for pointer events (like ",(0,d.mdx)("inlineCode",{parentName:"p"},":hover")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"click"),")."),(0,d.mdx)("p",null,"Use ",(0,d.mdx)("inlineCode",{parentName:"p"},"pointer-events-none")," to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are “beneath” the target."),(0,d.mdx)(f.e,{hint:"Try clicking the search icons to see the expected behaviour",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-10 px-0 sm:px-10 font-mono font-bold\">\n    <div class=\"flex flex-col\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono mb-3\">pointer-events-auto</p>\n      <div class=\"relative rounded-lg shadow-sm w-full\">\n        <div class=\"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto\">\n          <svg class=\"absolute text-gray-400 h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n            <path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\" />\n          </svg>\n        </div>\n        <input type=\"text\" placeholder=\"Search\" class=\"font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-gray-900/10 text-gray-500 rounded-lg\" />\n      </div>\n    </div>\n    <div class=\"flex flex-col\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono mb-3\">pointer-events-none</p>\n      <div class=\"relative rounded-lg shadow-sm w-full\">\n        <div class=\"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none\">\n          <svg class=\"absolute text-gray-400 h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n            <path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\" />\n          </svg>\n        </div>\n        <input type=\"text\" placeholder=\"Search\" class=\"font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-gray-900/10 text-gray-500 rounded-lg\" />\n      </div>\n    </div>\n  </div>\n"}),(0,d.mdx)("pre",Object.assign({},{className:"language-html"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"relative ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"absolute ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"pointer-events-auto")," ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"svg")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"absolute text-gray-400 h-5 w-5",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"viewBox"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"0 0 20 20",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"fill"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"currentColor",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n      ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"path")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"fill-rule"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"evenodd",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"d"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"clip-rule"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"evenodd",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"svg"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"type"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"text",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"placeholder"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"Search",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"relative ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"absolute ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"pointer-events-none")," ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"svg")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"absolute text-gray-400 h-5 w-5",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"viewBox"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"0 0 20 20",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"fill"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"currentColor",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n      ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"path")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"fill-rule"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"evenodd",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"d"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"clip-rule"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"evenodd",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"svg"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"type"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"text",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"placeholder"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"Search",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.mdx)(l,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.mdx)(l,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.mdx)(j.k,{defaultClass:"pointer-events-none",featuredClass:"pointer-events-auto",variant:"focus",mdxType:"HoverFocusAndOtherStates"}),(0,d.mdx)(l,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.mdx)(i.p,{defaultClass:"pointer-events-none",featuredClass:"pointer-events-auto",mdxType:"BreakpointsAndMediaQueries"}))}o.isMDXComponent=!0,o.layoutProps=m},83434:function(a,b,c){"use strict";c.d(b,{e:function(){return l}});var d=c(85893),e=c(86010),f=c(39043),g=c(67294);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}var j={none:"",md:"p-8"};function k(a){var b=a.as,c=a.style,f=a.padding,g=a.p,h=a.className,k=a.containerClassName,l=a.html,m=a.children,n=a.hint,o=null!=f?f:void 0===g?"md":g,p=j[o];if(void 0===p)throw Error("Invalid padding value: ".concat(JSON.stringify(o)));return(0,d.jsxs)("div",{className:k,children:[void 0!==n&&(0,d.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,d.jsx)("svg",{className:"flex-none w-5 h-5 text-gray-400",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,d.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813ZM3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium",children:n})]}),(0,d.jsxs)(void 0===b?"div":b,{style:i({backgroundPosition:"10px 10px"},c),className:"not-prose relative bg-grid-gray-100 bg-gray-50 rounded-xl overflow-hidden",children:[(0,d.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-50 opacity-60"}),(0,d.jsx)("div",i({className:(0,e.Z)("relative rounded-xl overflow-auto",p,h)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:m})),(0,d.jsx)("div",{className:"absolute inset-0 pointer-events-none border border-black/5 rounded-xl"})]})]})}function l(a){return a.resizable?(0,d.jsx)(m,i({},a)):(0,d.jsx)(k,i({},a))}function m(a){var b=(0,g.useRef)(),c=(0,f.c$)(0),e=(0,g.useRef)(),h=(0,g.useRef)();return(0,g.useEffect)(function(){var a=new window.ResizeObserver(function(){c.set(0)});return a.observe(b.current),function(){a.disconnect()}},[]),(0,g.useEffect)(function(){h.current.onselectstart=function(){return!1}},[]),(0,d.jsxs)("div",{ref:b,className:"relative",children:[(0,d.jsx)(k,i({as:f.ww.div,style:{marginRight:(0,f.Hm)(c,function(a){return-a})}},a)),(0,d.jsx)("div",{ref:e,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,d.jsx)(f.ww.div,{ref:h,drag:"x",_dragX:c,dragMomentum:!1,dragElastic:0,dragConstraints:e,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:c},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,d.jsx)("div",{className:"w-1.5 h-8 bg-gray-500/60 rounded-full"})})})]})}}},function(a){a.O(0,[9774,3430,6401,4756,6852,1350,4713,1664,2888,179],function(){return a(a.s=52302)}),_N_E=a.O()}])