"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[81349],{20647:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"reference/spec/host-capabilities/net","title":"Network capabilities","description":"Network capabilities.","source":"@site/versioned_docs/version-1.15/reference/spec/host-capabilities/04-net.md","sourceDirName":"reference/spec/host-capabilities","slug":"/reference/spec/host-capabilities/net","permalink":"/1.15/reference/spec/host-capabilities/net","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.15/reference/spec/host-capabilities/04-net.md","tags":[],"version":"1.15","lastUpdatedAt":1737463794000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Network capabilities","title":"Network capabilities","description":"Network capabilities.","keywords":["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},"sidebar":"docs","previous":{"title":"Container registry capabilities","permalink":"/1.15/reference/spec/host-capabilities/container-registry"},"next":{"title":"Cryptographic capabilities","permalink":"/1.15/reference/spec/host-capabilities/crypto"}}');var n=t(74848),s=t(28453);const c={sidebar_label:"Network capabilities",title:"Network capabilities",description:"Network capabilities.",keywords:["kubewarden","kubernetes","policy specification","network capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","network-capabilities"]},r=void 0,a={},l=[{value:"DNS host lookup",id:"dns-host-lookup",level:2},{value:"Caching",id:"caching",level:3},{value:"Communication protocol",id:"communication-protocol",level:3},{value:"waPC function - <code>v1/dns_lookup_host</code> input",id:"wapc-function---v1dns_lookup_host-input",level:4},{value:"waPC function - <code>v1/dns_lookup_host</code> output",id:"wapc-function---v1dns_lookup_host-output",level:4}];function p(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/host-capabilities/net"})}),"\n",(0,n.jsx)(i.p,{children:"Kubewarden policies cannot make network request from within the WebAssembly execution context."}),"\n",(0,n.jsx)(i.p,{children:"Network operations can be done by leveraging a series of capabilities exposed by the host."}),"\n",(0,n.jsx)(i.h2,{id:"dns-host-lookup",children:"DNS host lookup"}),"\n",(0,n.jsx)(i.p,{children:"This function performs a DNS lookup starting from the FQDN given by the policy."}),"\n",(0,n.jsx)(i.h3,{id:"caching",children:"Caching"}),"\n",(0,n.jsx)(i.p,{children:"Lookup results are cached for 1 minute."}),"\n",(0,n.jsx)(i.h3,{id:"communication-protocol",children:"Communication protocol"}),"\n",(0,n.jsx)(i.p,{children:"This is the description of the waPC protocol used to expose this capability:"}),"\n",(0,n.jsxs)(i.h4,{id:"wapc-function---v1dns_lookup_host-input",children:["waPC function - ",(0,n.jsx)(i.code,{children:"v1/dns_lookup_host"})," input"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:"# hostname - JSON encoded string\nstring\n"})}),"\n",(0,n.jsxs)(i.h4,{id:"wapc-function---v1dns_lookup_host-output",children:["waPC function - ",(0,n.jsx)(i.code,{children:"v1/dns_lookup_host"})," output"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:'\n{\n  # list of IPs\n  "ips": [string]\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"All the IP addresses associated with the given FQDN,\nare going to be returned as strings in the response.\nBoth IPv4 and IPv6 entries are returned as part of the same response."}),"\n",(0,n.jsxs)(i.p,{children:["For example, when requesting the manifest digest of the\n",(0,n.jsx)(i.code,{children:"busybox:latest"})," image,\nthe payloads would be:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Input payload: ",(0,n.jsx)(i.code,{children:'"google.com"'})]}),"\n",(0,n.jsxs)(i.li,{children:["Output payload: ",(0,n.jsx)(i.code,{children:'{ "ips": ["127.0.0.1"]}'})]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>r});var o=t(96540);const n={},s=o.createContext(n);function c(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);