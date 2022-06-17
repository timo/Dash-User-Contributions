(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{40185:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/headless-ui-v1-4",function(){return c(5651)}])},5651:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return y},"default":function(){return z}}),c(67294);var d=c(3905);c(41664);var e,f=c(5679),g=c(85225),h=c(61006),i=c(60857),j=c(59871),k=c(2207),l=c(66311),m=c(57100),n=c(53359),o=c(97292),p=c(27209),q=c(12822),r=c(54716),s=c(8598),t=c(7065),u={title:"Headless UI v1.4: The One With Tabs",description:"We just released Headless UI v1.4, which includes a brand new `Tab` component, and new APIs for manually closing `Popover` and `Disclosure` components more easily.",date:"2021-07-29T12:00:00.000Z",authors:[h.Oq,h.ff],image:i.Z},v=(e="Footer",function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),w={meta:u,slug:"headless-ui-v1-4",tableOfContents:[{title:"Tabs",slug:"tabs",children:[{title:"Closing Disclosures and Popovers",slug:"closing-disclosures-and-popovers",children:[]}]},{title:"Try it out",slug:"try-it-out",children:[]}]},x=g.B,y=!0;function z(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(x,Object.assign({},w,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"We just released Headless UI v1.4, which includes a brand new ",(0,d.kt)("inlineCode",{parentName:"p"},"Tab")," component, and new APIs for manually closing ",(0,d.kt)("inlineCode",{parentName:"p"},"Popover")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"Disclosure")," components more easily."),(0,d.kt)("a",{href:"https://headlessui.dev"},(0,d.kt)("img",{src:j.Z,alt:"Headless UI v1.4"})),(0,d.kt)(f.X,{level:2,id:"tabs",nextElement:{type:"paragraph"}},"Tabs"),(0,d.kt)("p",null,"Earlier this year we started working on ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindui.com/ecommerce"}),"Tailwind UI Ecommerce"),", and we realized pretty quickly we were going to need to support tabs in Headless UI to be able to build the new interfaces we were designing."),(0,d.kt)("a",{href:"https://tailwindui.com/ecommerce"},(0,d.kt)("img",{src:k.Z,alt:"Product details interface design from Tailwind UI Ecommerce."})),(0,d.kt)("p",null,"Here’s what we ended up with:"),(0,d.kt)(l.O.Group,{as:"div",className:"my-6 bg-slate-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(l.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"React"),(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(l.O.Panels,null,(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(m.default,{mdxType:"ReactExample1"})),(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(q.default,{mdxType:"VueExample1"})))),(0,d.kt)("p",null,"And yep, those are tabs!"),(0,d.kt)("p",null,"Like all Headless UI components, this totally abstracts away stuff like keyboard navigation for you so you can create custom tabs in a completely declarative way, without having to think about any of the tricky accessibility details."),(0,d.kt)("p",null,(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev/react/tabs"}),"Check out the documentation")," to learn more."),(0,d.kt)(f.X,{level:3,id:"closing-disclosures-and-popovers",nextElement:{type:"paragraph"}},"Closing Disclosures and Popovers"),(0,d.kt)("p",null,"Up until now, there was no way to close a ",(0,d.kt)("inlineCode",{parentName:"p"},"Disclosure")," without clicking the actual button used to open it. For typical disclosure use cases this isn’t a big deal, but it often makes sense to use disclosures for things like mobile navigation, where you want to close it when someone clicks a link ",(0,d.kt)("em",{parentName:"p"},"inside")," of it."),(0,d.kt)("p",null,"Now you can use ",(0,d.kt)("inlineCode",{parentName:"p"},"Disclosure.Button")," or (",(0,d.kt)("inlineCode",{parentName:"p"},"DisclosureButton")," in Vue) within your disclosure panel to close the panel, making it easy to wrap up things like links or other buttons so the panel doesn’t stay open:"),(0,d.kt)(l.O.Group,{as:"div",className:"my-6 bg-slate-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(l.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"React"),(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(l.O.Panels,null,(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(n.default,{mdxType:"ReactExample2"})),(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(r.default,{mdxType:"VueExample2"})))),(0,d.kt)("p",null,"The same thing works with ",(0,d.kt)("inlineCode",{parentName:"p"},"Popover")," components, too:"),(0,d.kt)(l.O.Group,{as:"div",className:"my-6 bg-slate-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(l.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"React"),(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(l.O.Panels,null,(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(o.default,{mdxType:"ReactExample3"})),(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(s.default,{mdxType:"VueExample3"})))),(0,d.kt)("p",null,"If you need finer control, we also pass a ",(0,d.kt)("inlineCode",{parentName:"p"},"close")," function via the render prop/scoped slot, so you can imperatively close the panel when you need to:"),(0,d.kt)(l.O.Group,{as:"div",className:"my-6 bg-slate-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(l.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"React"),(0,d.kt)(l.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-slate-700":"bg-transparent hover:bg-slate-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(l.O.Panels,null,(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(p.default,{mdxType:"ReactExample4"})),(0,d.kt)(l.O.Panel,{className:"prose prose-slate focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(t.default,{mdxType:"VueExample4"})))),(0,d.kt)("p",null,"For more details, check out the updated ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev/react/popover#closing-popovers-manually"}),"Popover")," and ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev/react/disclosure#closing-disclosures-manually"}),"Disclosure")," documentation."),(0,d.kt)(f.X,{level:2,id:"try-it-out",nextElement:{type:"paragraph"}},"Try it out"),(0,d.kt)("p",null,"Headless UI v1.4 is a minor update so there are no breaking changes. To upgrade, just install the latest version via npm:"),(0,d.kt)("pre",Object.assign({},{className:"language-shell"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# For React"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," @headlessui/react\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# For Vue"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," @headlessui/vue")),(0,d.kt)("p",null,"Check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev"}),"the official website")," for the latest documentation, and check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindui.com"}),"Tailwind UI")," if you want to play tons of styled examples."),(0,d.kt)(v,{mdxType:"Footer"},"Ready to try it out? ",(0,d.kt)("a",{href:"https://headlessui.dev"},"Visit the Headless UI website →")))}z.isMDXComponent=!0,z.layoutProps=w}},function(a){a.O(0,[3430,6401,4756,6259,6852,2474,3942,5225,9774,2888,179],function(){return a(a.s=40185)}),_N_E=a.O()}])