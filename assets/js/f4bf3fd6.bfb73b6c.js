"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[83180],{73814:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operator-manual/policy-servers/custom-cas","title":"","description":"Custom Certificate Authorities for Policy registries","source":"@site/versioned_docs/version-1.8/operator-manual/policy-servers/01-custom-cas.md","sourceDirName":"operator-manual/policy-servers","slug":"/operator-manual/policy-servers/custom-cas","permalink":"/1.8/operator-manual/policy-servers/custom-cas","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/operator-manual/policy-servers/01-custom-cas.md","tags":[],"version":"1.8","lastUpdatedAt":1737557822000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Using Custom CAs","title":""},"sidebar":"docs","previous":{"title":"Operator Manual","permalink":"/1.8/operator-manual/intro"},"next":{"title":"Using private registries","permalink":"/1.8/operator-manual/policy-servers/private-registry"}}');var s=t(74848),o=t(28453);const c={sidebar_label:"Using Custom CAs",title:""},n="Configuring PolicyServers",a={},l=[{value:"Custom Certificate Authorities for Policy registries",id:"custom-certificate-authorities-for-policy-registries",level:2},{value:"Insecure sources",id:"insecure-sources",level:3},{value:"Custom Certificate Authorities",id:"custom-certificate-authorities",level:3}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"configuring-policyservers",children:"Configuring PolicyServers"})}),"\n",(0,s.jsx)(r.h2,{id:"custom-certificate-authorities-for-policy-registries",children:"Custom Certificate Authorities for Policy registries"}),"\n",(0,s.jsxs)(r.p,{children:["It is possible to specify and configure the Certificate Authorities that a\nPolicyServer uses when pulling the ClusterAdmissionPolicy artifacts from the\npolicy registry. The following ",(0,s.jsx)(r.code,{children:"spec"})," fields will configure the deployed\n",(0,s.jsx)(r.code,{children:"policy-server"})," executable to that effect."]}),"\n",(0,s.jsx)(r.h3,{id:"insecure-sources",children:"Insecure sources"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Important"}),": the default behavior of ",(0,s.jsx)(r.code,{children:"kwctl"})," and ",(0,s.jsx)(r.code,{children:"policy-server"})," is to\nenforce HTTPS with trusted certificates matching the system CA store. You can\ninteract with registries using untrusted certificates or even without TLS, by\nusing the ",(0,s.jsx)(r.code,{children:"insecure_sources"})," setting. This approach is ",(0,s.jsx)(r.strong,{children:"highly discouraged"}),"\nfor environments closer to production."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["To configure the PolicyServer to accept insecure connections to specific\nregistries, use the ",(0,s.jsx)(r.code,{children:"spec.insecureSources"})," field of PolicyServer. This field\naccepts a list of URIs to be regarded as insecure. Example:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"spec:\n  insecureSources:\n    - localhost:5000\n    - host.k3d.internal:5000\n"})}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/1.8/distributing-policies/custom-certificate-authorities",children:"here"})," for more\ninformation on how the ",(0,s.jsx)(r.code,{children:"policy-server"})," executable treats them."]}),"\n",(0,s.jsx)(r.h3,{id:"custom-certificate-authorities",children:"Custom Certificate Authorities"}),"\n",(0,s.jsxs)(r.p,{children:["To configure the PolicyServer with a custom certificate chain of 1 or more\ncertificates for a specific URI, use the field ",(0,s.jsx)(r.code,{children:"spec.sourceAuthorities"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"This field is a map of URIs, each with its own list of strings that contain PEM\nencoded certificates. Example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'spec:\n  sourceAuthorities:\n    "registry-pre.example.com":\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre1-1 PEM cert\n        -----END CERTIFICATE-----\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre1-2 PEM cert\n        -----END CERTIFICATE-----\n    "registry-pre2.example.com:5500":\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre2 PEM cert\n        -----END CERTIFICATE-----\n'})}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/1.8/distributing-policies/custom-certificate-authorities",children:"here"})," for more\ninformation on how the ",(0,s.jsx)(r.code,{children:"policy-server"})," executable treats them."]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>n});var i=t(96540);const s={},o=i.createContext(s);function c(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);