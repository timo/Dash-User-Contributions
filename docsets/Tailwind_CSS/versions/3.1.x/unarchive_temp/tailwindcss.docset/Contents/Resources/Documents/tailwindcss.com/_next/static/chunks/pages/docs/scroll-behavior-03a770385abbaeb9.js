(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6674],{71407:function(a){a.exports=function(a,b){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!=typeof b)throw new Error("expected a function for second argument");for(var c={},d=0;d<a.length;d++){var e=a[d],f=b(e),g=c[f];Array.isArray(g)?c[f].push(e):c[f]=[e]}return c}},27020:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/scroll-behavior",function(){return c(93045)}])},93045:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return n}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(53339),g=c(74296);c(83629),c(38139);var h=c(89934),i=c(28368),j=f.DocumentationLayout,k=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},l={Layout:j,classes:{utilities:{".scroll-auto":{"scroll-behavior":"auto"},".scroll-smooth":{"scroll-behavior":"smooth"}}},meta:{title:"Scroll Behavior",description:"Utilities for controlling the scroll behavior of an element."},slug:"scroll-behavior",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Adding smooth scrolling",slug:"adding-smooth-scrolling",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},m=g.X_;function n(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(m,Object.assign({},l,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(e.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,d.kt)(e.X,{level:3,id:"adding-smooth-scrolling",nextElement:{type:"paragraph"}},"Adding smooth scrolling"),(0,d.kt)("p",null,"Use the ",(0,d.kt)("inlineCode",{parentName:"p"},"scroll-smooth")," utilities to enable smooth scrolling within an element."),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"html")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"scroll-smooth",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"html"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("hr",null),(0,d.kt)(k,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.kt)(k,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.kt)(i.k,{defaultClass:"scroll-smooth",featuredClass:"scroll-auto",element:"html",mdxType:"HoverFocusAndOtherStates"}),(0,d.kt)(k,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.kt)(h.p,{defaultClass:"scroll-smooth",featuredClass:"scroll-auto",element:"html",mdxType:"BreakpointsAndMediaQueries"}))}n.isMDXComponent=!0,n.layoutProps=l},83629:function(a,b,c){"use strict";c.d(b,{nR:function(){return f},Pg:function(){return g}});var d=c(71407);function e(a){return(function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}})(a)||(function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)})(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance")})()}function f(a){return e(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?1:isNaN(d)?-1:c-d})}function g(a){return e(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?-1:isNaN(d)?1:c-d})}c.n(d)}},function(a){a.O(0,[9774,6401,6852,2474,4713,2428,2888,179],function(){return a(a.s=27020)}),_N_E=a.O()}])