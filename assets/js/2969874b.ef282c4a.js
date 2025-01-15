"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[28486],{19804:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"writing-policies/rego/open-policy-agent/intro","title":"","description":"Open Policy Agent support has been introduced starting from these releases:","source":"@site/versioned_docs/version-1.9/writing-policies/rego/open-policy-agent/01-intro.md","sourceDirName":"writing-policies/rego/open-policy-agent","slug":"/writing-policies/rego/open-policy-agent/intro","permalink":"/1.9/writing-policies/rego/open-policy-agent/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/rego/open-policy-agent/01-intro.md","tags":[],"version":"1.9","lastUpdatedAt":1736948496000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Introduction","title":""},"sidebar":"docs","previous":{"title":"Builtin Support","permalink":"/1.9/writing-policies/rego/builtin-support"},"next":{"title":"Create a New Policy","permalink":"/1.9/writing-policies/rego/open-policy-agent/create-policy"}}');var o=n(74848),r=n(28453);const s={sidebar_label:"Introduction",title:""},c="Open Policy Agent",l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Compatibility with existing policies",id:"compatibility-with-existing-policies",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"open-policy-agent",children:"Open Policy Agent"})}),"\n",(0,o.jsxs)(i.admonition,{type:"note",children:[(0,o.jsx)(i.p,{children:"Open Policy Agent support has been introduced starting from these releases:"}),(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"kwctl: v0.2.0"}),"\n",(0,o.jsx)(i.li,{children:"policy-server: v0.2.0"}),"\n"]})]}),"\n",(0,o.jsx)(i.p,{children:"Open Policy Agent is a general purpose policy framework that uses the\nRego language to write policies."}),"\n",(0,o.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(i.p,{children:"Rego policies work by receiving an input to evaluate, and produce an\noutput as a response. In this sense, Open Policy Agent has no specific\ntooling for targeting writing policies for Kubernetes."}),"\n",(0,o.jsxs)(i.p,{children:["Specifically, policies in Open Policy Agent receive a JSON input and\nproduce a JSON output. When the Open Policy Agent server is set up to\nreceive admission review requests from Kubernetes, policies will\nreceive a Kubernetes ",(0,o.jsx)(i.code,{children:"AdmissionReview"})," object in JSON format with the\nobject to evaluate, and they have to produce a valid ",(0,o.jsx)(i.code,{children:"AdmissionReview"}),"\nobject in return with the evaluation results."]}),"\n",(0,o.jsx)(i.h2,{id:"compatibility-with-existing-policies",children:"Compatibility with existing policies"}),"\n",(0,o.jsxs)(i.p,{children:["All policies can be compiled to the ",(0,o.jsx)(i.code,{children:"wasm"})," target (WebAssembly) with\nthe official ",(0,o.jsx)(i.code,{children:"opa"})," CLI tool."]}),"\n",(0,o.jsxs)(i.p,{children:["In terms of policy execution, you can read more about the ",(0,o.jsx)(i.a,{href:"../builtin-support",children:"Open Policy\nAgent built-in support that is implemented in\nKubewarden"}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var t=n(96540);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);