(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4442],{99383:function(e,n,l){"use strict";l.d(n,{_:function(){return s}});var t=l(79980),i=l(85893);function s({description:e,href:n,label:l}){return(0,i.jsxs)("p",{className:"flex flex-wrap sm:flex-nowrap lg:flex-wrap xl:flex-nowrap items-center py-6 px-4 sm:p-6 lg:p-10 ring-1 ring-slate-900/5 shadow rounded-lg dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5",children:[(0,i.jsxs)("span",{className:"flex-auto flex items-start mb-8 sm:mb-0 lg:mb-8 xl:mb-0",children:[(0,i.jsx)("svg",{viewBox:"0 -4 16 24",fill:"currentColor",className:"flex-none w-4 h-6 mr-4","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 7a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V7Z"})}),(0,i.jsx)("span",{className:"flex-auto text-sm leading-6 text-slate-600 xl:max-w-2xl dark:text-slate-400",children:e})]}),(0,i.jsx)("span",{className:"flex-none flex justify-center w-full sm:w-auto sm:ml-6 md:ml-8 lg:w-full lg:ml-0 xl:w-auto xl:ml-8",children:(0,i.jsx)(t.z,{href:n,darkColor:"sky",children:l})})]})}},18866:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSG:function(){return r},default:function(){return o}});var t=l(27606),i=l(48600),s=(l(99383),l(78917)),a=l(85893);let d=[{title:"Install Tailwind CSS",body:()=>(0,a.jsxs)("p",{children:["Install ",(0,a.jsx)("code",{children:"tailwindcss"})," via npm, and create your ",(0,a.jsx)("code",{children:"tailwind.config.js"})," ","file."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss\nnpx tailwindcss init"}},{title:"Configure your template paths",body:()=>(0,a.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,a.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"js",code:'  module.exports = {\n>   content: ["./src/**/*.{html,js}"],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }'}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,a.jsxs)("p",{children:["Add the ",(0,a.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind\u2019s layers to your main CSS file."]}),code:{name:"src/input.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start the Tailwind CLI build process",body:()=>(0,a.jsx)("p",{children:"Run the CLI tool to scan your template files for classes and build your CSS."}),code:{name:"Terminal",lang:"terminal",code:"npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"}},{title:"Start using Tailwind in your HTML",body:()=>(0,a.jsxs)("p",{children:["Add your compiled CSS file to the ",(0,a.jsx)("code",{children:"<head>"})," and start using Tailwind\u2019s utility classes to style your content."]}),code:{name:"src/index.html",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n>   <link href="/dist/output.css" rel="stylesheet">\n  </head>\n  <body>\n>   <h1 class="text-3xl font-bold underline">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>'}}];var r=!0;function o({code:e}){return(0,a.jsxs)(i.l,{children:[(0,a.jsxs)("div",{id:"content-wrapper",className:"relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark",children:[(0,a.jsx)("h3",{className:"sr-only",children:"Installing Tailwind CLI"}),(0,a.jsx)("p",{children:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool."})]}),(0,a.jsx)(s.R,{level:4,steps:d,code:e})]})}o.layoutProps={meta:{title:"Installation: Tailwind CLI"},Layout:t.L,allowOverflow:!1}},74159:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/installation",function(){return l(18866)}])}},function(e){e.O(0,[9774,4327,946,2418,8600,2888,179],(function(){return n=74159,e(e.s=n);var n}));var n=e.O();_N_E=n}]);