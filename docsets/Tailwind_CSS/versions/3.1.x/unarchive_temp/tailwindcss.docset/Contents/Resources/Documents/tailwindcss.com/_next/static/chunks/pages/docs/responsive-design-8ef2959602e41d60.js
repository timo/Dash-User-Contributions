(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8919],{21370:function(a,b){"use strict";b.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},45557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/responsive-design",function(){return c(79673)}])},79673:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return n}}),c(67294);var d=c(3905),e=c(41664),f=c(59533),g=c(5679),h=c(83434),i=c(53339),j=c(74296),k=c(55390),l={Layout:i.DocumentationLayout,meta:{title:"Responsive Design",description:"Using responsive utility variants to build adaptive user interfaces."},slug:"responsive-design",tableOfContents:[{title:"Overview",slug:"overview",children:[]},{title:"Mobile First",slug:"mobile-first",children:[{title:"Targeting mobile screens",slug:"targeting-mobile-screens",children:[]},{title:"Targeting a single breakpoint",slug:"targeting-a-single-breakpoint",children:[]}]},{title:"Customizing breakpoints",slug:"customizing-breakpoints",children:[]}]},m=j.X_;function n(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(m,Object.assign({},l,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(g.X,{level:2,id:"overview",nextElement:{type:"paragraph"},hidden:!0,mdxType:"Heading"},"Overview"),(0,d.kt)("p",null,"Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML."),(0,d.kt)("p",null,"There are five breakpoints by default, inspired by common device resolutions:"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Breakpoint prefix"),(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Minimum width"),(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"CSS"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"sm")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"640px"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"@media (min-width: 640px) { ... }"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"md")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"768px"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"@media (min-width: 768px) { ... }"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"lg")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"1024px"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"@media (min-width: 1024px) { ... }"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"xl")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"1280px"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"@media (min-width: 1280px) { ... }"))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"2xl")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"1536px"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"@media (min-width: 1536px) { ... }"))))),(0,d.kt)("p",null,"To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the ",(0,d.kt)("inlineCode",{parentName:"p"},":")," character:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-16 ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:w-32")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"lg:w-48"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"This works for ",(0,d.kt)("strong",{parentName:"p"},"every utility class in the framework"),", which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles."),(0,d.kt)("p",null,"Here’s a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens ",(0,d.kt)("em",{parentName:"p"},"(resize your browser to see it in action)"),":"),(0,d.kt)(h.e,{resizable:!0,p:"none",containerClassName:"mt-4 -mb-3",html:"\n  <iframe class=\"w-full h-[496px] pointer-events-none\" src=\"/examples/responsive-design-demo\"></iframe>\n"}),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:max-w-2xl"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:shrink-0"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"h-48 w-full object-cover ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:h-full md:w-48"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"/img/store.jpg",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"alt"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"Man looking at item at a store",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"p-8",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"uppercase tracking-wide text-sm text-indigo-500 font-semibold",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Case study",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"href"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"#",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"block mt-1 text-lg leading-tight font-medium text-black hover:underline",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Finding customers for your new business",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"a"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"mt-2 text-gray-500",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Here’s how the example above works:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},"By default, the outer ",(0,d.kt)("inlineCode",{parentName:"li"},"div")," is ",(0,d.kt)("inlineCode",{parentName:"li"},"display: block"),", but by adding the ",(0,d.kt)("inlineCode",{parentName:"li"},"md:flex")," utility, it becomes ",(0,d.kt)("inlineCode",{parentName:"li"},"display: flex")," on medium screens and larger."),(0,d.kt)("li",{parentName:"ul"},"When the parent is a flex container, we want to make sure the image never shrinks, so we’ve added ",(0,d.kt)("inlineCode",{parentName:"li"},"md:shrink-0")," to prevent shrinking on medium screens and larger. Technically we could have just used ",(0,d.kt)("inlineCode",{parentName:"li"},"shrink-0")," since it would do nothing on smaller screens, but since it only matters on ",(0,d.kt)("inlineCode",{parentName:"li"},"md")," screens, it’s a good idea to make that clear in the class name."),(0,d.kt)("li",{parentName:"ul"},"On small screens the image is automatically full width by default. On medium screens and up, we’ve constrained the width to a fixed size and ensured the image is full height using ",(0,d.kt)("inlineCode",{parentName:"li"},"md:h-full md:w-48"),".")),(0,d.kt)("p",null,"We’ve only used one breakpoint in this example, but you could easily customize this component at other sizes using the ",(0,d.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"lg"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"xl"),", or ",(0,d.kt)("inlineCode",{parentName:"p"},"2xl")," responsive prefixes as well."),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"mobile-first",nextElement:{type:"paragraph"}},"Mobile First"),(0,d.kt)("p",null,"By default, Tailwind uses a mobile first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap."),(0,d.kt)("p",null,"What this means is that unprefixed utilities (like ",(0,d.kt)("inlineCode",{parentName:"p"},"uppercase"),") take effect on all screen sizes, while prefixed utilities (like ",(0,d.kt)("inlineCode",{parentName:"p"},"md:uppercase"),") only take effect at the specified breakpoint ",(0,d.kt)("em",{parentName:"p"},"and above"),"."),(0,d.kt)(g.X,{level:3,id:"targeting-mobile-screens",nextElement:{type:"paragraph"}},"Targeting mobile screens"),(0,d.kt)("p",null,"Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the ",(0,d.kt)("inlineCode",{parentName:"p"},"sm:")," prefixed version. Don’t think of ",(0,d.kt)("inlineCode",{parentName:"p"},"sm:")," as meaning “on small screens”, think of it as “at the small ",(0,d.kt)("em",{parentName:"p"},"breakpoint"),"“."),(0,d.kt)(k.qm,{mdxType:"TipBad"},"Don't use ",(0,d.kt)("code",{className:"text-sm font-bold text-gray-800"},"sm:")," to target mobile devices"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- This will only center text on screens 640px and wider, not on small screens -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"sm:text-center",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)(k.Vw,{mdxType:"TipGood"},"Use unprefixed utilities to target mobile, and override them at larger breakpoints"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- This will center text on mobile, and left align it on screens 640px and wider -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"text-center sm:text-left",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"For this reason, it’s often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for ",(0,d.kt)("inlineCode",{parentName:"p"},"sm")," screens, followed by ",(0,d.kt)("inlineCode",{parentName:"p"},"md")," screens, etc."),(0,d.kt)(g.X,{level:3,id:"targeting-a-single-breakpoint",nextElement:{type:"paragraph"}},"Targeting a single breakpoint"),(0,d.kt)("p",null,"Tailwind’s breakpoints only include a ",(0,d.kt)("inlineCode",{parentName:"p"},"min-width")," and don’t include a ",(0,d.kt)("inlineCode",{parentName:"p"},"max-width"),", which means any utilities you add at a smaller breakpoint will also be applied at larger breakpoints."),(0,d.kt)("p",null,"If you’d like to apply a utility at one breakpoint only, the solution is to ",(0,d.kt)("em",{parentName:"p"},"undo")," that utility at larger sizes by adding another utility that counteracts it."),(0,d.kt)("p",null,"Here is an example where the background color is red at the ",(0,d.kt)("inlineCode",{parentName:"p"},"md")," breakpoint, but green at every other breakpoint:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-green-500 md:bg-red-500 lg:bg-green-500",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Notice that ",(0,d.kt)("strong",{parentName:"p"},"we did not")," have to specify a background color for the ",(0,d.kt)("inlineCode",{parentName:"p"},"sm")," breakpoint or the ",(0,d.kt)("inlineCode",{parentName:"p"},"xl")," breakpoint — you only need to specify when a utility should ",(0,d.kt)("em",{parentName:"p"},"start")," taking effect, not when it should stop."),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"customizing-breakpoints",nextElement:{type:"paragraph"}},"Customizing breakpoints"),(0,d.kt)("p",null,"You can completely customize your breakpoints in your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    screens",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'tablet'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'640px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// => @media (min-width: 640px) { ... }"),"\n\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'laptop'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'1024px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// => @media (min-width: 1024px) { ... }"),"\n\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'desktop'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'1280px'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// => @media (min-width: 1280px) { ... }"),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,"Learn more in the ",(0,d.kt)(e.default,{href:"/docs/breakpoints",passHref:!0},(0,d.kt)("a",null,"customizing breakpoints documentation")),"."))}n.isMDXComponent=!0,n.layoutProps=l},59533:function(a,b,c){"use strict";c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0",children:c})]})}},83434:function(a,b,c){"use strict";c.d(b,{e:function(){return l}});var d=c(85893),e=c(86010),f=c(3605),g=c(67294);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}var j={none:"",md:"p-8"};function k(a){var b=a.as,c=a.style,f=a.padding,g=a.p,h=a.className,k=a.containerClassName,l=a.html,m=a.children,n=a.hint,o=null!=f?f:void 0===g?"md":g,p=j[o];if(void 0===p)throw Error("Invalid padding value: ".concat(JSON.stringify(o)));return(0,d.jsxs)("div",{className:k,children:[void 0!==n&&(0,d.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,d.jsx)("svg",{className:"flex-none w-5 h-5 text-gray-400",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,d.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813ZM3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium",children:n})]}),(0,d.jsxs)(void 0===b?"div":b,{style:i({backgroundPosition:"10px 10px"},c),className:"not-prose relative bg-grid-gray-100 bg-gray-50 rounded-xl overflow-hidden",children:[(0,d.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-50 opacity-60"}),(0,d.jsx)("div",i({className:(0,e.Z)("relative rounded-xl overflow-auto",p,h)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:m})),(0,d.jsx)("div",{className:"absolute inset-0 pointer-events-none border border-black/5 rounded-xl"})]})]})}function l(a){return a.resizable?(0,d.jsx)(m,i({},a)):(0,d.jsx)(k,i({},a))}function m(a){var b=(0,g.useRef)(),c=(0,f.c$)(0),e=(0,g.useRef)(),h=(0,g.useRef)();return(0,g.useEffect)(function(){var a=new window.ResizeObserver(function(){c.set(0)});return a.observe(b.current),function(){a.disconnect()}},[]),(0,g.useEffect)(function(){h.current.onselectstart=function(){return!1}},[]),(0,d.jsxs)("div",{ref:b,className:"relative",children:[(0,d.jsx)(k,i({as:f.ww.div,style:{marginRight:(0,f.Hm)(c,function(a){return-a})}},a)),(0,d.jsx)("div",{ref:e,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,d.jsx)(f.ww.div,{ref:h,drag:"x",_dragX:c,dragMomentum:!1,dragElastic:0,dragConstraints:e,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:c},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,d.jsx)("div",{className:"w-1.5 h-8 bg-gray-500/60 rounded-full"})})})]})}},6774:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),h&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:h})]})]})}},55390:function(a,b,c){"use strict";c.d(b,{Vw:function(){return e},qm:function(){return f},"$o":function(){return g}});var d=c(85893);function e(a){var b=a.children;return(0,d.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,d.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500",children:[(0,d.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,d.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full"})]}),(0,d.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-gray-900",children:b})]})}function f(a){var b=a.children;return(0,d.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,d.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400",children:[(0,d.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,d.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full"})]}),(0,d.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-gray-900",children:b})]})}function g(a){var b=a.children;return(0,d.jsxs)("div",{className:"not-prose mt-6 -mb-1 flex space-x-2",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"flex-none w-5 h-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium",children:b})]})}},53339:function(a,b,c){"use strict";c.r(b),c.d(b,{DocumentationLayout:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(21370),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Tailwind CSS",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u}},function(a){a.O(0,[9774,3430,6401,4756,6852,2474,4713,2888,179],function(){return a(a.s=45557)}),_N_E=a.O()}])