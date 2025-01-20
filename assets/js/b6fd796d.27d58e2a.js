"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[29967],{7167:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"tutorials/writing-policies/rego/open-policy-agent/intro","title":"Introduction to Open Policy Agent","description":"Introduction to Open Policy Agent and Kubewarden.","source":"@site/docs/tutorials/writing-policies/rego/open-policy-agent/01-intro.md","sourceDirName":"tutorials/writing-policies/rego/open-policy-agent","slug":"/tutorials/writing-policies/rego/open-policy-agent/intro","permalink":"/next/tutorials/writing-policies/rego/open-policy-agent/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/tutorials/writing-policies/rego/open-policy-agent/01-intro.md","tags":[],"version":"current","lastUpdatedAt":1737386152000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Introduction","title":"Introduction to Open Policy Agent","description":"Introduction to Open Policy Agent and Kubewarden.","keywords":["kubewarden","kubernetes","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","introduction"]},"sidebar":"docs","previous":{"title":"Builtin Support","permalink":"/next/tutorials/writing-policies/rego/builtin-support"},"next":{"title":"Creating a new policy","permalink":"/next/tutorials/writing-policies/rego/open-policy-agent/create-policy"}}');var n=t(74848),r=t(28453);const c={sidebar_label:"Introduction",title:"Introduction to Open Policy Agent",description:"Introduction to Open Policy Agent and Kubewarden.",keywords:["kubewarden","kubernetes","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","introduction"]},s=void 0,l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Compatibility with existing policies",id:"compatibility-with-existing-policies",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rego/open-policy-agent/intro"})}),"\n",(0,n.jsxs)(i.admonition,{type:"note",children:[(0,n.jsx)(i.p,{children:"Open Policy Agent support has been introduced starting from these releases:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"kwctl: v0.2.0"}),"\n",(0,n.jsx)(i.li,{children:"policy-server: v0.2.0"}),"\n"]})]}),"\n",(0,n.jsx)(i.p,{children:"Open Policy Agent (OPA) is a general purpose policy framework that uses the\nRego language to write policies."}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Rego policies work by receiving an input to evaluate,\nand produce an output as a response.\nIn this sense, OPA has no specific tooling for targeting writing policies for Kubernetes."}),"\n",(0,n.jsxs)(i.p,{children:["Specifically, policies in OPA receive a JSON input and produce a JSON output.\nThe OPA server is configured to receive admission review requests from Kubernetes.\nThe policies receive a Kubernetes ",(0,n.jsx)(i.code,{children:"AdmissionReview"})," object in JSON format.\nThey have to return a valid ",(0,n.jsx)(i.code,{children:"AdmissionReview"})," object as the evaluation results."]}),"\n",(0,n.jsx)(i.h2,{id:"compatibility-with-existing-policies",children:"Compatibility with existing policies"}),"\n",(0,n.jsxs)(i.p,{children:["All policies can be compiled to the ",(0,n.jsx)(i.code,{children:"wasm"})," target (WebAssembly) with the official ",(0,n.jsx)(i.code,{children:"opa"})," CLI tool."]}),"\n",(0,n.jsxs)(i.p,{children:["In terms of policy execution,\nyou can read more about the ",(0,n.jsx)(i.a,{href:"../builtin-support",children:"OPA built-in support"})," implemented in Kubewarden."]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>s});var o=t(96540);const n={},r=o.createContext(n);function c(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);