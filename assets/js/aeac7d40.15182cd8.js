"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[12792],{98146:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"reference/sources_yaml","title":"Reference for sources.yaml","description":"Reference for sources.yaml","source":"@site/versioned_docs/version-1.14/reference/sources_yaml.md","sourceDirName":"reference","slug":"/reference/sources_yaml","permalink":"/1.14/reference/sources_yaml","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.14/reference/sources_yaml.md","tags":[],"version":"1.14","lastUpdatedAt":1737465262000,"sidebarPosition":110,"frontMatter":{"sidebar_label":"sources.yaml","sidebar_position":110,"title":"Reference for sources.yaml","description":"Reference for sources.yaml","keywords":["kubewarden","kubernetes","sources.yaml"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","sources.yaml"]},"sidebar":"docs","previous":{"title":"Verification configuration format","permalink":"/1.14/reference/verification-config"},"next":{"title":"Security disclosure","permalink":"/1.14/disclosure"}}');var i=r(74848),t=r(28453);const o={sidebar_label:"sources.yaml",sidebar_position:110,title:"Reference for sources.yaml",description:"Reference for sources.yaml",keywords:["kubewarden","kubernetes","sources.yaml"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","sources.yaml"]},c=void 0,a={},l=[{value:"The <code>sources.yaml</code> file",id:"the-sourcesyaml-file",level:2},{value:"Insecure sources section",id:"insecure-sources-section",level:3},{value:"Source authorities section",id:"source-authorities-section",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/sources_yaml"})}),"\n",(0,i.jsxs)(n.h2,{id:"the-sourcesyaml-file",children:["The ",(0,i.jsx)(n.code,{children:"sources.yaml"})," file"]}),"\n",(0,i.jsxs)(n.p,{children:["You can tune the push-pull behavior of ",(0,i.jsx)(n.code,{children:"kwctl"})," and ",(0,i.jsx)(n.code,{children:"policy-server"})," using the ",(0,i.jsx)(n.code,{children:"sources.yaml"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"--sources-path"})," argument to both tools specifies the file."]}),"\n",(0,i.jsxs)(n.p,{children:["The command ",(0,i.jsx)(n.code,{children:"kwctl"})," tries to load the ",(0,i.jsx)(n.code,{children:"sources.yaml"})," file from these folders if the ",(0,i.jsx)(n.code,{children:"--sources-path"})," argument is omitted:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Linux: ",(0,i.jsx)(n.code,{children:"$HOME/.config/kubewarden/sources.yaml"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mac: ",(0,i.jsx)(n.code,{children:"$HOME/Library/Application Support/io.kubewarden.kubewarden/sources.yaml"})]}),"\n",(0,i.jsxs)(n.li,{children:["Windows: ",(0,i.jsx)(n.code,{children:"$HOME\\AppData\\Roaming\\kubewarden\\config\\sources.yaml"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Its structure is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'insecure_sources:\n  - "registry-dev.example.com"\n  - "registry-dev2.example.com:5500"\nsource_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n  "registry-pre2.example.com:5500":\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            ca-pre2 PEM cert\n            -----END CERTIFICATE-----\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This file is in either YAML or JSON format.\nAll keys are optional, so the following is a valid ",(0,i.jsx)(n.code,{children:"sources.yaml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'insecure_sources: ["dev.registry.example.com"]\n'})}),"\n",(0,i.jsx)(n.p,{children:"As is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "source_authorities": {\n        "host.k3d.internal:5000": [\n            {"type": "Data","data":"pem cert 1"},\n            {"type": "Data","data":"pem cert 2"}\n        ]\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"insecure-sources-section",children:"Insecure sources section"}),"\n",(0,i.jsxs)(n.p,{children:["Hosts in the ",(0,i.jsx)(n.code,{children:"insecure_sources"})," section behave differently to those not listed."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Hosts not listed, try:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"to connect using HTTPS, verifying the server identity"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If the connection fails, then the operation stops."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Hosts listed in ",(0,i.jsx)(n.code,{children:"insecure_sources"}),", try in order:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"to connect using HTTPS verifying the server identity"}),"\n",(0,i.jsx)(n.li,{children:"to connect using HTTPS, skipping host verification"}),"\n",(0,i.jsx)(n.li,{children:"to connect using HTTP"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The operation stops if all fail."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["It's usually fine to use ",(0,i.jsx)(n.code,{children:"insecure_sources"})," when using local registries or\nHTTP servers for development.\nIt avoids the burden of managing certificates.\nClearly, it's not for production use."]})}),"\n",(0,i.jsx)(n.h3,{id:"source-authorities-section",children:"Source authorities section"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"source_authorities"})," section contains URIs and CA certificates.\nIt forms a certificate chain for that URI.\nIt's used to verify the identity of OCI registries and HTTPS servers."]}),"\n",(0,i.jsxs)(n.p,{children:["These certificates are encoded in either PEM or DER format.\nYou specify DER format certificates as path to a file containing the certificate.\nIn PEM format you specify either a path to the certificate file, or a string with the actual certificate.\nYou specify both with a ",(0,i.jsx)(n.code,{children:"type"})," key:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'source_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            A string with the ca-pre1-3 PEM cert\n            -----END CERTIFICATE-----\n  "registry-pre2.example.com:5500":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre2-1.der\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);