"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[19514],{35711:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"writing-policies/typescript","title":"","description":"As stated on the official website:","source":"@site/versioned_docs/version-1.7/writing-policies/typescript.md","sourceDirName":"writing-policies","slug":"/writing-policies/typescript","permalink":"/1.7/writing-policies/typescript","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/typescript.md","tags":[],"version":"1.7","lastUpdatedAt":1737080429000,"frontMatter":{"sidebar_label":"TypeScript","title":""},"sidebar":"docs","previous":{"title":"Swift","permalink":"/1.7/writing-policies/swift"},"next":{"title":"WASI","permalink":"/1.7/writing-policies/wasi"}}');var n=i(74848),r=i(28453);const c={sidebar_label:"TypeScript",title:""},o="TypeScript",l={},a=[{value:"Current State",id:"current-state",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"typescript",children:"TypeScript"})}),"\n",(0,n.jsxs)(t.p,{children:["As stated on the ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"official website"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"TypeScript extends JavaScript by adding types."}),"\n",(0,n.jsx)(t.p,{children:"By understanding JavaScript, TypeScript saves you time catching errors and\nproviding fixes before you run code."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript ",(0,n.jsx)(t.strong,{children:"cannot"})," be converted to WebAssembly, however\n",(0,n.jsx)(t.a,{href:"https://www.assemblyscript.org/",children:"AssemblyScript"})," is a ",(0,n.jsx)(t.strong,{children:"subset"})," of TypeScript\ndesigned explicitly for WebAssembly."]}),"\n",(0,n.jsx)(t.h2,{id:"current-state",children:"Current State"}),"\n",(0,n.jsx)(t.p,{children:"Currently there's no Kubewarden SDK for AssemblyScript. We haven't created it\nbecause of lack of time. We will do that in the near future."}),"\n",(0,n.jsx)(t.p,{children:"In the meantime, there seem to be some limitatations affecting AssemblyScript:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["There's no built-in way to serialize and deserialize Classes to\nand from JSON. See ",(0,n.jsx)(t.a,{href:"https://github.com/AssemblyScript/assemblyscript/issues/292",children:"this issue"})]}),"\n",(0,n.jsxs)(t.li,{children:["It ",(0,n.jsx)(t.em,{children:"seems"})," there's no JSON path library for AssemblyScript"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/kubewarden/pod-privileged-policy",children:"This GitHub repository"}),"\ncontains a Kubewarden Policy written in AssemblyScript."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Worth noting:"})," this repository has a series of GitHub Actions that automate\nthe following tasks:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Run unit tests and code linting on pull requests and after code is merged\ninto the main branch"}),"\n",(0,n.jsxs)(t.li,{children:["Build the policy in ",(0,n.jsx)(t.code,{children:"release"})," mode and push it to an OCI registry as an\nartifact"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>o});var s=i(96540);const n={},r=s.createContext(n);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);