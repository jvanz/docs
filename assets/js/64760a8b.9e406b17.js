"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[33405],{33106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"writing-policies/spec/mutating-policies","title":"","description":"Mutating policies are structured in the very same way as validating ones:","source":"@site/versioned_docs/version-1.8/writing-policies/spec/04-mutating-policies.md","sourceDirName":"writing-policies/spec","slug":"/writing-policies/spec/mutating-policies","permalink":"/1.8/writing-policies/spec/mutating-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/spec/04-mutating-policies.md","tags":[],"version":"1.8","lastUpdatedAt":1737463692000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Mutating Policies","title":""},"sidebar":"docs","previous":{"title":"Validating Policies","permalink":"/1.8/writing-policies/spec/validating-policies"},"next":{"title":"Context Aware Policies","permalink":"/1.8/writing-policies/spec/context-aware-policies"}}');var s=t(74848),o=t(28453);const c={sidebar_label:"Mutating Policies",title:""},r="Mutating policies",a={},d=[{value:"A concrete example",id:"a-concrete-example",level:2},{value:"Recap",id:"recap",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"mutating-policies",children:"Mutating policies"})}),"\n",(0,s.jsx)(n.p,{children:"Mutating policies are structured in the very same way as validating ones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["They have to register ",(0,s.jsx)(n.code,{children:"validate"})," and ",(0,s.jsx)(n.code,{children:"validate_settings"})," waPC functions"]}),"\n",(0,s.jsx)(n.li,{children:"The communication API used between the host and the policy is the very same\nas the one used by validating policies."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Mutating policies can accept a request and propose a mutation of the incoming\nobject by returning a ",(0,s.jsx)(n.code,{children:"ValidationResponse"})," object that looks like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "accepted": true,\n  "mutated_object": <object to be created>\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"mutated_object"})," field contains the object the policy wants to be created\ninside of the Kubernetes cluster serialized to JSON."]}),"\n",(0,s.jsx)(n.h2,{id:"a-concrete-example",children:"A concrete example"}),"\n",(0,s.jsxs)(n.p,{children:["Let's assume the policy received this ",(0,s.jsx)(n.code,{children:"ValidationRequest"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {},\n  "request": {\n    "operation": "CREATE",\n    "object": {\n      "apiVersion": "v1",\n      "kind": "Pod",\n      "metadata": {\n        "name": "security-context-demo-4"\n      },\n      "spec": {\n        "containers": [\n        {\n          "name": "sec-ctx-4",\n          "image": "gcr.io/google-samples/node-hello:1.0",\n          "securityContext": {\n            "capabilities": {\n              "add": ["NET_ADMIN", "SYS_TIME"]\n            }\n          }\n        }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We left some irrelevant fields out of the ",(0,s.jsx)(n.code,{children:"request"})," object."]})}),"\n",(0,s.jsx)(n.p,{children:"This request is generated because someone tried to create a Pod that would\nlook like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: security-context-demo-4\nspec:\n  containers:\n  - name: sec-ctx-4\n    image: gcr.io/google-samples/node-hello:1.0\n    securityContext:\n      capabilities:\n        add:\n        - NET_ADMIN\n        - SYS_TIME\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's assume our policy replies with the following ",(0,s.jsx)(n.code,{children:"ValidationResponse"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "accepted": true,\n  "mutated_object": {\n    "apiVersion": "v1",\n    "kind": "Pod",\n    "metadata": {\n      "name": "security-context-demo-4"\n    },\n    "spec": {\n      "containers": [\n        {\n          "name": "sec-ctx-4",\n          "image": "gcr.io/google-samples/node-hello:1.0",\n          "securityContext": {\n            "capabilities": {\n              "add": [\n                "NET_ADMIN",\n                "SYS_TIME"\n              ],\n              "drop": [\n                "BPF"\n              ]\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"That would lead to the request being accepted, but the final Pod would look like\nthis:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: security-context-demo-4\nspec:\n  containers:\n  - name: sec-ctx-4\n    image: gcr.io/google-samples/node-hello:1.0\n    securityContext:\n      capabilities:\n        add:\n        - NET_ADMIN\n        - SYS_TIME\n        drop:\n        - BPF\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, the policy altered the ",(0,s.jsx)(n.code,{children:"securityContext.capabilities.drop"}),"\nsection of the only container declared inside of the Pod."]}),"\n",(0,s.jsxs)(n.p,{children:["The container is now dropping the ",(0,s.jsx)(n.code,{children:"BPF"})," capability thanks to our policy."]}),"\n",(0,s.jsx)(n.h2,{id:"recap",children:"Recap"}),"\n",(0,s.jsx)(n.p,{children:"These are the functions a mutating policy must implement:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"waPC function name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Input payload"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Output payload"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"validate"})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:["{",(0,s.jsx)("br",{}),'  "request": {',(0,s.jsx)("br",{}),"    // AdmissionReview.request data",(0,s.jsx)("br",{}),"  },",(0,s.jsx)("br",{}),'  "settings": {',(0,s.jsx)("br",{}),"    // your policy configuration",(0,s.jsx)("br",{}),"  }",(0,s.jsx)("br",{}),"}"]})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:["{",(0,s.jsx)("br",{}),"  ",(0,s.jsx)(n.strong,{children:"// mandatory"}),(0,s.jsx)("br",{}),'  "accepted": boolean,',(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"  // optional, ignored if accepted",(0,s.jsx)("br",{}),"  // recommended for rejections",(0,s.jsx)("br",{}),'  "message": string,',(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"  // optional, ignored if accepted",(0,s.jsx)("br",{}),'  "code": integer, ',(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"  // JSON Object to be created",(0,s.jsx)("br",{}),"  // Can be used only when the",(0,s.jsx)("br",{}),"  // request is accepted",(0,s.jsx)("br",{}),'  "mutated_object": object',(0,s.jsx)("br",{}),"}"]})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"validate_settings"})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:["{",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"  // your policy configuration",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"}"]})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:["{",(0,s.jsx)("br",{}),"  ",(0,s.jsx)(n.strong,{children:"// mandatory"}),(0,s.jsx)("br",{}),'  "validate": boolean,',(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"  // optional, ignored if accepted",(0,s.jsx)("br",{}),"  // recommended for rejections",(0,s.jsx)("br",{}),'  "message": string,',(0,s.jsx)("br",{}),"}"]})})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);