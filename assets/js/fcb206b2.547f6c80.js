"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[23556],{36021:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tutorials/writing-policies/rego/builtin-support","title":"Builtin support","description":"The Kubewarden provided support for executing wasm binaries.","source":"@site/versioned_docs/version-1.15/tutorials/writing-policies/rego/02-builtin-support.md","sourceDirName":"tutorials/writing-policies/rego","slug":"/tutorials/writing-policies/rego/builtin-support","permalink":"/1.15/tutorials/writing-policies/rego/builtin-support","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.15/tutorials/writing-policies/rego/02-builtin-support.md","tags":[],"version":"1.15","lastUpdatedAt":1737554359000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Builtin Support","title":"Builtin support","description":"The Kubewarden provided support for executing wasm binaries.","keywords":["kubewarden","kubernetes","builtin wasm support"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","built-in-support"]},"sidebar":"docs","previous":{"title":"Rego","permalink":"/1.15/tutorials/writing-policies/rego/intro-rego"},"next":{"title":"Introduction","permalink":"/1.15/tutorials/writing-policies/rego/open-policy-agent/intro"}}');var o=t(74848),s=t(28453);const r={sidebar_label:"Builtin Support",title:"Builtin support",description:"The Kubewarden provided support for executing wasm binaries.",keywords:["kubewarden","kubernetes","builtin wasm support"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","built-in-support"]},l=void 0,u={},p=[{value:"Executing policies with missing built-ins",id:"executing-policies-with-missing-built-ins",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rego/builtin-support"})}),"\n",(0,o.jsxs)(i.p,{children:["Additionally, to building a policy for the ",(0,o.jsx)(i.code,{children:"wasm"})," target, it needs running."]}),"\n",(0,o.jsxs)(i.p,{children:["The Open Policy Agent (OPA) team has a page you can check for\n",(0,o.jsx)(i.a,{href:"https://www.openpolicyagent.org/docs/latest/policy-reference/#built-in-functions",children:"built-in support"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"When building a Rego policy into a WebAssembly module,\ncertain of these built-in functions are in the Wasm file itself.\nThey're the built-ins marked with a green check in the linked built-in page.\nThe WebAssembly runtime evaluating the module, provides the others."}),"\n",(0,o.jsxs)(i.p,{children:["The built-ins marked as ",(0,o.jsx)(i.code,{children:"SDK-dependent"})," are the ones that the host has to implement,\nin this case, Kubewarden.\nOPA and Gatekeeper may use them depending on the needs of the policy.\nIn any case, these built-ins are exposed to the policy and any new or existing policy could depend on them."]}),"\n",(0,o.jsx)(i.p,{children:"There are still ceratin built-ins that aren't yet provided by Kubewarden,\nhowever, based on the policies seen in the open,\nthe ones already supported should be enough for the most Kubernetes users."}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/policy-evaluator/issues/56",children:"This GitHub issue"}),"\nkeeps track of the Rego built-ins we've still to implement.\nFeel free to comment there to help prioritize our work."]}),"\n",(0,o.jsx)(i.h2,{id:"executing-policies-with-missing-built-ins",children:"Executing policies with missing built-ins"}),"\n",(0,o.jsxs)(i.p,{children:["When a policy is run with ",(0,o.jsx)(i.code,{children:"kwctl"})," or with ",(0,o.jsx)(i.code,{children:"policy-server"}),",\nthe list of built-ins used by the policy is inspected.\nIf any of the used built-ins are missing,\nthe program stops execution logging a fatal error reporting the missing built-ins."]})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var n=t(96540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);