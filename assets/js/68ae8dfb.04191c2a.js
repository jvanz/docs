"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[3027],{83466:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"writing-policies/spec/host-capabilities/container-registry","title":"","description":"Container registries can be used to distribute many types of OCI objects, going","source":"@site/versioned_docs/version-1.9/writing-policies/spec/host-capabilities/03-container-registry.md","sourceDirName":"writing-policies/spec/host-capabilities","slug":"/writing-policies/spec/host-capabilities/container-registry","permalink":"/1.9/writing-policies/spec/host-capabilities/container-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/spec/host-capabilities/03-container-registry.md","tags":[],"version":"1.9","lastUpdatedAt":1737463692000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Container Registry Capabilities","title":""},"sidebar":"docs","previous":{"title":"Signature Verifier Policies","permalink":"/1.9/writing-policies/spec/host-capabilities/signature-verifier-policies"},"next":{"title":"Network Capabilities","permalink":"/1.9/writing-policies/spec/host-capabilities/net"}}');var s=t(74848),r=t(28453);const o={sidebar_label:"Container Registry Capabilities",title:""},a="Container registry capabilities",c={},l=[{value:"Get OCI manifest digest",id:"get-oci-manifest-digest",level:2},{value:"Caching",id:"caching",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"container-registry-capabilities",children:"Container registry capabilities"})}),"\n",(0,s.jsx)(i.p,{children:"Container registries can be used to distribute many types of OCI objects, going\nfrom well-known container images to generic OCI Artifacts. OCI Artifacts are used\nto store objects such as Kubewarden Policies, Helm charts, and more."}),"\n",(0,s.jsx)(i.p,{children:"Below documented are the capabilities exposed by the Kubewarden host to interact with\ncontainer registries."}),"\n",(0,s.jsx)(i.h2,{id:"get-oci-manifest-digest",children:"Get OCI manifest digest"}),"\n",(0,s.jsxs)(i.p,{children:["This function computes the digest of an OCI manifest. This information can\nbe used to identify an object stored inside of an OCI registry in an immutable\nway, as opposed to ",(0,s.jsx)(i.code,{children:"tags"})," which are mutable."]}),"\n",(0,s.jsx)(i.h3,{id:"caching",children:"Caching"}),"\n",(0,s.jsx)(i.p,{children:"Computing the digest involves a series of network requests between the Kubewarden\npolicy host and the remote registry. These operation can be time expensive,\nbecause of that the results are going to be cached for 1 minute."}),"\n",(0,s.jsx)(i.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(i.p,{children:"Interactions with private registries require the Kubewarden policy host to\nauthenticate against the remote registry."}),"\n",(0,s.jsx)(i.p,{children:"The policy host will use the same set of credentials used to fetch policies\nfrom the remote registry."}),"\n",(0,s.jsx)(i.h3,{id:"communication-protocol",children:"Communication protocol"}),"\n",(0,s.jsx)(i.p,{children:"This is the description of the waPC protocol used to expose this capability:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:" waPC function name "}),(0,s.jsx)("th",{children:" Input payload "}),(0,s.jsx)("th",{children:" Output payload "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"v1/manifest_digest"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:"# OCI URI - JSON encoded string\nstring\n"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:'{\n  # digest of the OCI object\n  "digest": string\n}\n'})})})]})]}),"\n",(0,s.jsxs)(i.p,{children:["For example, when requesting the manifest digest of the ",(0,s.jsx)(i.code,{children:"busybox:latest"})," image,\nthe payload would be the following ones:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Input payload: ",(0,s.jsx)(i.code,{children:'"busybox:latest"'})]}),"\n",(0,s.jsxs)(i.li,{children:["Output payload: ",(0,s.jsx)(i.code,{children:'{ "digest": "sha256:69e70a79f2d41ab5d637de98c1e0b055206ba40a8145e7bddb55ccc04e13cf8f"}'})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);