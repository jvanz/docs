"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[52292],{27466:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"introduction","title":"What is Kubewarden?","description":"Introducing Kubewarden, a CNCF Sandbox project.","source":"@site/versioned_docs/version-1.11/introduction.md","sourceDirName":".","slug":"/","permalink":"/1.11/","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/introduction.md","tags":[],"version":"1.11","lastUpdatedAt":1737080708000,"sidebarPosition":1,"frontMatter":{"slug":"/","sidebar_label":"Introduction","sidebar_position":1,"title":"What is Kubewarden?","description":"Introducing Kubewarden, a CNCF Sandbox project.","keywords":["kubewarden","cncf","cncf sandbox","kubernetes"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["introduction"]},"sidebar":"docs","next":{"title":"Quick start","permalink":"/1.11/quick-start"}}');var s=i(74848),r=i(28453);const o={slug:"/",sidebar_label:"Introduction",sidebar_position:1,title:"What is Kubewarden?",description:"Introducing Kubewarden, a CNCF Sandbox project.",keywords:["kubewarden","cncf","cncf sandbox","kubernetes"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["introduction"]},a=void 0,c={},l=[{value:"What is WebAssembly?",id:"what-is-webassembly",level:2},{value:"Why use WebAssembly?",id:"why-use-webassembly",level:2},{value:"Policy distribution",id:"policy-distribution",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io"})}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden is a Kubernetes Policy Engine.\nIt aims to be the Universal Policy Engine for Kubernetes."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can reuse policies from other policy engines without having to rewrite them."}),"\n",(0,s.jsx)(n.li,{children:"You can write your own policies in any programming language\nthat generates WebAssembly binaries,\nreusing your language tooling and libraries."}),"\n",(0,s.jsx)(n.li,{children:"You can run policies both outside the cluster and as part of your CI/CD processes."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden also provides an audit scanner to\nactively and continuously check policy enforcement over time."}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden is a ",(0,s.jsx)(n.a,{href:"https://cncf.io",children:"CNCF"})," Sandbox project, originally created by ",(0,s.jsx)(n.a,{href:"https://www.rancher.com/",children:"SUSE Rancher"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-webassembly",children:"What is WebAssembly?"}),"\n",(0,s.jsxs)(n.p,{children:["As stated on ",(0,s.jsx)(n.a,{href:"https://webassembly.org/",children:"WebAssembly's official website"}),":"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"WebAssembly (abbreviated Wasm) is a binary instruction format for a\nstack-based virtual machine. Wasm is designed as a portable\ncompilation target for programming languages, enabling deployment on\nthe web for client and server applications."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Wasm was originally conceived as a browser "extension".\nHowever, efforts are being made by the WebAssembly\ncommunity to allow the execution of Wasm code outside\nbrowsers.'}),"\n",(0,s.jsx)(n.h2,{id:"why-use-webassembly",children:"Why use WebAssembly?"}),"\n",(0,s.jsx)(n.p,{children:"Users can write Kubernetes policies using their\nfavorite programming language, provided its toolchain can generate\nWasm binaries."}),"\n",(0,s.jsx)(n.p,{children:"Wasm modules are portable, once built they can run on any kind of\nprocessor architecture and operating system. For example, a policy developed and built on Apple\nSilicon can run on AMD64/Intel64 Linux without conversion."}),"\n",(0,s.jsx)(n.p,{children:'Policy authors can reuse their skills, tools and best\npractices. Policies are "traditional" programs that can have reusable\nblocks (regular libraries), can be linted and tested, and be\nplugged into current CI and CD workflows.'}),"\n",(0,s.jsx)(n.h2,{id:"policy-distribution",children:"Policy distribution"}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden policies can be served by a regular web server or,\nbetter, be published from an OCI compliant registry."}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden policies can be stored inside an OCI compliant registry as\n",(0,s.jsx)(n.a,{href:"https://github.com/opencontainers/artifacts",children:"OCI artifacts"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);