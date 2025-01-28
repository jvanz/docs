"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[65599],{87436:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"writing-policies/go/automate","title":"","description":"This section describes how we can use GitHub Actions to automate as many tasks","source":"@site/versioned_docs/version-1.7/writing-policies/go/07-automate.md","sourceDirName":"writing-policies/go","slug":"/writing-policies/go/automate","permalink":"/1.7/writing-policies/go/automate","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/07-automate.md","tags":[],"version":"1.7","lastUpdatedAt":1738068799000,"sidebarPosition":7,"frontMatter":{"sidebar_label":"GitHub Action Integration","title":""},"sidebar":"docs","previous":{"title":"Logging","permalink":"/1.7/writing-policies/go/logging"},"next":{"title":"Distributing Policy","permalink":"/1.7/writing-policies/go/distribute"}}');var s=i(74848),o=i(28453);const l={sidebar_label:"GitHub Action Integration",title:""},c="Automations",a={},r=[{value:"Testing",id:"testing",level:2},{value:"Release",id:"release",level:2},{value:"A concrete example",id:"a-concrete-example",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"automations",children:"Automations"})}),"\n",(0,s.jsx)(n.p,{children:"This section describes how we can use GitHub Actions to automate as many tasks\nas possible."}),"\n",(0,s.jsxs)(n.p,{children:["The scaffolded project already includes all the GitHub actions you need.\nThese Actions can be found in the ",(0,s.jsx)(n.code,{children:".github/workflows/ci.yml.template"})," file;\nrename it to ",(0,s.jsx)(n.code,{children:"github/workflows.ci/yml"})," to enable them."]}),"\n",(0,s.jsx)(n.p,{children:"The same principles can be adapted to use a different CI system."}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["Automation of the unit tests and of the end-to-end tests is working out of the\nbox thanks to the ",(0,s.jsx)(n.code,{children:"unit-tests"})," and ",(0,s.jsx)(n.code,{children:"e2e-tests"})," jobs defined in\n",(0,s.jsx)(n.code,{children:".github/workflows/ci.yml.template"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"release",children:"Release"}),"\n",(0,s.jsxs)(n.p,{children:["The scaffolded project contains a ",(0,s.jsx)(n.code,{children:"release"})," job in\n",(0,s.jsx)(n.code,{children:".github/workflows/ci.yml.template"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This job performs the following steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Checkout code"}),"\n",(0,s.jsx)(n.li,{children:"Build the WebAssembly policy"}),"\n",(0,s.jsx)(n.li,{children:"Push the policy to an OCI registry"}),"\n",(0,s.jsx)(n.li,{children:"Eventually create a new GitHub Release"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To enable the job you need to rename it to ",(0,s.jsx)(n.code,{children:"ci.yml"})," and change the value of the\n",(0,s.jsx)(n.code,{children:"OCI_TARGET"})," to match your preferences."]}),"\n",(0,s.jsx)(n.p,{children:"The job will act differently based on the commit that triggered its execution."}),"\n",(0,s.jsxs)(n.p,{children:["Regular commits will lead to the creation of an OCI artifact called ",(0,s.jsx)(n.code,{children:"<policy-name>:latest"}),".\nNo GitHub Release will be created for these commits."]}),"\n",(0,s.jsxs)(n.p,{children:["On the other hand, creating a tag that matches the ",(0,s.jsx)(n.code,{children:"v*"})," pattern, will lead\nto:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Creation of an OCI artifact called ",(0,s.jsx)(n.code,{children:"<policy-name>:<tag>"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Creation of a GitHub Release named ",(0,s.jsx)(n.code,{children:"Release <full tag name>"}),". The release\nwill include the following assets: the source code of the policy and the WebAssembly\nbinary."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"a-concrete-example",children:"A concrete example"}),"\n",(0,s.jsxs)(n.p,{children:["Let's assume we have a policy named ",(0,s.jsx)(n.code,{children:"safe-labels"})," and we want to publish\nit as ",(0,s.jsx)(n.code,{children:"ghcr.io/kubewarden/policies/safe-labels"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The contents of the ",(0,s.jsx)(n.code,{children:"jobs.push-to-oci-registry.env"})," section of ",(0,s.jsx)(n.code,{children:"ci.yml"})," should\nlook like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  push-to-oci-registry:\n    runs-on: ubuntu-latest\n    env:\n      WASM_BINARY_NAME: policy.wasm\n      OCI_TARGET: ghcr.io/kubewarden/policies/safe-labels\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Pushing a tag named ",(0,s.jsx)(n.code,{children:"v0.1.0"})," will lead to the creation and publishing of the\nOCI artifact called ",(0,s.jsx)(n.code,{children:"ghcr.io/kubewarden/policies/safe-labels:v0.1.0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A GitHub Release named ",(0,s.jsx)(n.code,{children:"Release v0.1.0"})," will be created. The release will\ninclude the following assets:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Source code compressed as ",(0,s.jsx)(n.code,{children:"zip"})," and ",(0,s.jsx)(n.code,{children:"tar.gz"})]}),"\n",(0,s.jsxs)(n.li,{children:["A file named ",(0,s.jsx)(n.code,{children:"policy.wasm"})," that is the actual WebAssembly policy"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(96540);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);