"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[17578],{5825:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"writing-policies/rego/gatekeeper/create-policy","title":"","description":"Let\'s implement the same policy that [we wrote with Open Policy","source":"@site/versioned_docs/version-1.9/writing-policies/rego/gatekeeper/02-create-policy.md","sourceDirName":"writing-policies/rego/gatekeeper","slug":"/writing-policies/rego/gatekeeper/create-policy","permalink":"/1.9/writing-policies/rego/gatekeeper/create-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/rego/gatekeeper/02-create-policy.md","tags":[],"version":"1.9","lastUpdatedAt":1738241592000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Create a New Policy","title":""},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/1.9/writing-policies/rego/gatekeeper/intro"},"next":{"title":"Build and Run","permalink":"/1.9/writing-policies/rego/gatekeeper/build-and-run"}}');var o=i(74848),s=i(28453);const r={sidebar_label:"Create a New Policy",title:""},a="Create a new policy",c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"The policy",id:"the-policy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"create-a-new-policy",children:"Create a new policy"})}),"\n",(0,o.jsxs)(n.p,{children:["Let's implement the same policy that ",(0,o.jsx)(n.a,{href:"../open-policy-agent/create-policy",children:"we wrote with Open Policy\nAgent"}),": a policy that\nrejects a resource if it's targeting the ",(0,o.jsx)(n.code,{children:"default"})," namespace."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"We also provide a GitHub repository template\nthat you can use to quickly port an existing policy."}),(0,o.jsxs)(n.p,{children:["Check it out: ",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/gatekeeper-policy-template",children:"kubewarden/gatekeeper-policy-template"})]})]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"As in the previous section, we will require the following tools:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"opa"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"kwctl"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-policy",children:"The policy"}),"\n",(0,o.jsx)(n.p,{children:"Gatekeeper policies must return none or more violation objects. If no\nviolations are reported, the request will be accepted. If one, or more\nviolations are reported, the request will be rejected."}),"\n",(0,o.jsxs)(n.p,{children:["We create a new folder, named ",(0,o.jsx)(n.code,{children:"rego-policy"}),". Inside of it, we create a\n",(0,o.jsx)(n.code,{children:"policy.rego"})," file with contents:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rego",children:'package policy\n\nviolation[{"msg": msg}] {\n        input.review.object.metadata.namespace == "default"\n        msg := "it is forbidden to use the default namespace"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, our entrypoint is ",(0,o.jsx)(n.code,{children:"policy/violation"}),", and because of how\nRego works, the policy can have the following outcomes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"return 1 violation: the object being reviewed is targeting the\ndefault namespace."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"return 0 violations: the object being reviewed is compliant with the\npolicy."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Take a moment to compare this policy with the one we wrote in the Open\nPolicy Agent section. That one had to build the whole\n",(0,o.jsx)(n.code,{children:"AdmissionReview"})," response, and the inputs were slightly\ndifferent. In the Gatekeeper mode, the ",(0,o.jsx)(n.code,{children:"AdmissionRequest"})," object is\nprovided at the ",(0,o.jsx)(n.code,{children:"input.review"})," attribute. All attributes of the\n",(0,o.jsx)(n.code,{children:"AdmissionRequest"})," are readable along with ",(0,o.jsx)(n.code,{children:"object"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Now, let's create the requests that we are going to evaluate in the\nnext section."}),"\n",(0,o.jsxs)(n.p,{children:["Let us first create a ",(0,o.jsx)(n.code,{children:"default-ns.json"})," file with the following\ncontents inside the ",(0,o.jsx)(n.code,{children:"data"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "default",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's create another ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," object that this time is\ntargeting a namespace different than the ",(0,o.jsx)(n.code,{children:"default"})," one. Let us name\nthis file ",(0,o.jsx)(n.code,{children:"other-ns.json"}),". It has the following contents:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n    "operation": "CREATE",\n    "object": {\n      "kind": "Pod",\n      "apiVersion": "v1",\n      "metadata": {\n        "name": "nginx",\n        "namespace": "other",\n        "uid": "04dc7a5e-e1f1-4e34-8d65-2c9337a43e64"\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, this simulates another pod creation request, this time\nunder a namespace called ",(0,o.jsx)(n.code,{children:"other"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);