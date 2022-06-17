(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1041],{76365:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/installation/play-cdn",function(){return c(89870)}])},89870:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return l},"default":function(){return m}});var d=c(85893),e=c(41664),f=c(53339),g=c(44794),h=c(62223),i=c(69808);c.n(i);var j=c(41125);c.n(j);var k=[{title:"Add the Play CDN script to your HTML",body:function(){return(0,d.jsxs)("p",{children:["Add the Play CDN script tag to the ",(0,d.jsx)("code",{children:"<head>"})," of your HTML file, and start using Tailwind’s utility classes to style your content."]})},code:{name:"index.html",lang:"html",code:"  <!doctype html>\n  <html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n>   <script src=\"https://cdn.tailwindcss.com\"></script>\n  </head>\n  <body>\n>   <h1 class=\"text-3xl font-bold underline\">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>"}},{title:"Try customizing your config",body:function(){return(0,d.jsxs)("p",{children:["Edit the ",(0,d.jsx)("code",{children:"tailwind.config"})," object to"," ",(0,d.jsx)(e.default,{href:"/docs/configuration",children:(0,d.jsx)("a",{children:"customize your configuration"})})," ","with your own design tokens."]})},code:{name:"index.html",lang:"html",code:"  <!doctype html>\n  <html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n>   <script>\n>     tailwind.config = {\n>       theme: {\n>         extend: {\n>           colors: {\n>             clifford: '#da373d',\n>           }\n>         }\n>       }\n>     }\n>   </script>\n  </head>\n  <body>\n    <h1 class=\"text-3xl font-bold underline **text-clifford**\">\n      Hello world!\n    </h1>\n  </body>\n  </html>"}},{title:"Try adding some custom CSS",body:function(){return(0,d.jsxs)("p",{children:["Use ",(0,d.jsx)("code",{children:"type=\"text/tailwindcss\""})," to add custom CSS that supports all of Tailwind's CSS features."]})},code:{name:"index.html",lang:"html",code:"  <!doctype html>\n  <html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <script>/* ... */</script>\n>   <style type=\"text/tailwindcss\">\n>     @layer utilities {\n>       .content-auto {\n>         content-visibility: auto;\n>       }\n>     }\n>   </style>\n  </head>\n  <body>\n>   <div class=\"lg:content-auto\">\n      <!-- ... -->\n    </div>\n  </body>\n  </html>"}},],l=!0;function m(a){var b=a.code;return(0,d.jsxs)(g.InstallationLayout,{children:[(0,d.jsx)("div",{className:"relative z-10 prose mb-16 max-w-3xl",children:(0,d.jsx)("p",{children:"Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not the best choice for production."})}),(0,d.jsx)(h.Steps,{steps:k,code:b})]})}m.layoutProps={meta:{title:"Installation: Play CDN",section:"Getting Started"},Layout:f.DocumentationLayout,allowOverflow:!1}},41125:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}function f(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}function g(a){return(function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}})(a)||(function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)})(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance")})()}var h=c(75874),i=c(69808),j=c(42555),k=c(30995).default;a.exports={experimental:{optimizeUniversalDefaults:!0},content:["./src/**/*.{js,jsx,mdx,html}","./remark/**/*.js"],darkMode:"class",theme:{screens:{sm:"640px","demo-sm":"720px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:{transparent:"transparent",current:"currentColor",black:"#000",white:"#fff",amber:i.amber,blue:i.blue,cyan:i.cyan,emerald:i.emerald,fuchsia:i.fuchsia,gray:i.slate,green:i.green,indigo:i.indigo,"light-blue":i.sky,sky:i.sky,lime:i.lime,orange:e({},i.orange,{1000:"#4a2008"}),pink:e({},i.pink,{1000:"#460d25"}),purple:i.purple,red:i.red,rose:i.rose,teal:i.teal,violet:i.violet,yellow:i.yellow,code:{punctuation:"#A1E8FF",tag:"#D58FFF","attr-name":"#4BD0FB","attr-value":"#A2F679",string:"#A2F679",highlight:"rgb(125 211 252 / 0.1)"}},aspectRatio:{auto:"auto",square:"1 / 1",video:"16 / 9",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16"},extend:{typography:function(a){return{DEFAULT:{css:{maxWidth:"none",color:a("colors.gray.700"),hr:{borderColor:a("colors.gray.100"),marginTop:"3em",marginBottom:"3em"},"h1, h2, h3":{letterSpacing:"-0.025em"},h2:{marginBottom:"".concat(16/24,"em")},h3:{marginTop:"2.4em",lineHeight:"1.4"},h4:{marginTop:"2em",fontSize:"1.125em"},"h2 small, h3 small, h4 small":{fontFamily:a("fontFamily.mono").join(", "),color:a("colors.gray.500"),fontWeight:500},"h2 small":e({fontSize:a("fontSize.lg")[0]},a("fontSize.lg")[1]),"h3 small":e({fontSize:a("fontSize.base")[0]},a("fontSize.base")[1]),"h4 small":e({fontSize:a("fontSize.sm")[0]},a("fontSize.sm")[1]),"h2, h3, h4":{"scroll-margin-top":"var(--scroll-mt)"},"ul > li":{paddingLeft:"1.75em"},"ul > li::before":{width:"0.75em",height:"0.125em",top:"calc(0.875em - 0.0625em)",left:0,borderRadius:"999px",backgroundColor:a("colors.gray.300")},a:{fontWeight:a("fontWeight.semibold"),textDecoration:"none",borderBottom:"1px solid ".concat(a("colors.sky.300"))},"a:hover":{borderBottomWidth:"2px"},"a code":{color:"inherit",fontWeight:"inherit"},strong:{color:a("colors.gray.900"),fontWeight:a("fontWeight.semibold")},"a strong":{color:"inherit",fontWeight:"inherit"},code:{fontWeight:a("fontWeight.medium"),fontVariantLigatures:"none"},pre:{color:a("colors.gray.50"),borderRadius:a("borderRadius.xl"),padding:a("padding.5"),boxShadow:a("boxShadow.md"),display:"flex",marginTop:"".concat(20/14,"em"),marginBottom:"".concat(32/14,"em")},"p + pre":{marginTop:"".concat(-4/14,"em")},"pre + pre":{marginTop:"".concat(-16/14,"em")},"pre code":{flex:"none",minWidth:"100%"},table:{fontSize:a("fontSize.sm")[0],lineHeight:a("fontSize.sm")[1].lineHeight},thead:{color:a("colors.gray.700"),borderBottomColor:a("colors.gray.200")},"thead th":{paddingTop:0,fontWeight:a("fontWeight.semibold")},"tbody tr":{borderBottomColor:a("colors.gray.100")},"tbody tr:last-child":{borderBottomWidth:"1px"},"tbody code":{fontSize:a("fontSize.xs")[0]},"figure figcaption":{textAlign:"center",fontStyle:"italic"},"figure > figcaption":{marginTop:"".concat(12/14,"em")}}}}},fontFamily:{sans:["Inter var"].concat(g(h.fontFamily.sans)),mono:["Fira Code VF"].concat(g(h.fontFamily.mono)),source:["Source Sans Pro"].concat(g(h.fontFamily.sans)),"ubuntu-mono":["Ubuntu Mono"].concat(g(h.fontFamily.mono)),system:h.fontFamily.sans,flow:"Flow"},spacing:{18:"4.5rem",88:"22rem",full:"100%"},width:{xl:"36rem"},maxWidth:{"4.5xl":"60rem","8xl":"90rem"},maxHeight:function(a){return{sm:"30rem","(screen-18)":"calc(100vh - ".concat(a("spacing.18"),")")}},boxShadow:{px:"0 0 0 1px rgba(0, 0, 0, 0.5)",link:"inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)"},keyframes:{"flash-code":{"0%":{backgroundColor:"rgb(125 211 252 / 0.1)"},"100%":{backgroundColor:"transparent"}}},animation:{"flash-code":"flash-code 1s forwards","flash-code-slow":"flash-code 2s forwards"},cursor:{grab:"grab",grabbing:"grabbing"},transitionDuration:{1500:"1.5s"},backgroundImage:function(a){return{squiggle:"url(\"".concat(j("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 3\" enable-background=\"new 0 0 6 3\" width=\"6\" height=\"3\" fill=\"".concat(a("colors.yellow.400"),"\"><polygon points=\"5.5,0 2.5,3 1.1,3 4.1,0\"/><polygon points=\"4,0 6,2 6,0.6 5.4,0\"/><polygon points=\"0,2 1,3 2.4,3 0,0.6\"/></svg>")),"\")")}},scale:{80:"0.8"},skew:{"-20":"-20deg"}}},plugins:[c(54863),c(64221),function(a){var b=a.addVariant;b("supports-backdrop-blur","@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"),b("supports-scrollbars","@supports selector(::-webkit-scrollbar)"),b("children","& > *")},function(a){var b=a.addUtilities,c=a.theme,f=c("boxShadow");b(Object.keys(f).reduce(function(a,b){return e({},a,d({},".text-shadow".concat("DEFAULT"===b?"":"-".concat(b)),{textShadow:f[b].replace(/([0-9]+(px)? [0-9]+(px)? [0-9]+(px)?) [0-9]+(px)?/g,"$1")}))},{}))},function(a){var b=a.matchUtilities,c=a.theme;b({"bg-grid":function(a){return{backgroundImage:"url(\"".concat(j("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"".concat(a,"\"><path d=\"M0 .5H31.5V32\"/></svg>")),"\")")}}},{values:k(c("backgroundColor")),type:"color"})},function(a){var b=a.addUtilities,c=a.theme,d=function(a){return"linear-gradient(135deg, ".concat(a," 10%, transparent 10%, transparent 50%, ").concat(a," 50%, ").concat(a," 60%, transparent 60%, transparent 100%)")},e=Object.entries(c("backgroundColor")).filter(function(a){var b=f(a,2)[1];return"object"==typeof b&&b[400]&&b[500]});b(Object.fromEntries(e.map(function(a){var b=f(a,2),c=b[0],e=b[1],g=e[400]+"1a",h=e[500]+"80";return[".bg-stripes-".concat(c),{backgroundColor:g,backgroundImage:d(h),backgroundSize:"7.07px 7.07px"},]}))),b({".bg-stripes-white":{backgroundImage:d("rgba(255 255 255 / 0.75)"),backgroundSize:"7.07px 7.07px"}}),b({".ligatures-none":{fontVariantLigatures:"none"}})},]}}},function(a){a.O(0,[9774,9840,9808,7150,6852,4713,8055,4794,2888,179],function(){return a(a.s=76365)}),_N_E=a.O()}])