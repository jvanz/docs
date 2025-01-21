"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[61365],{31988:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"writing-policies/rego/open-policy-agent/distribute","title":"Distributing an OPA policy with Kubewarden","description":"Distributing an OPA policy with Kubewarden.","source":"@site/versioned_docs/version-1.10/writing-policies/rego/open-policy-agent/04-distribute.md","sourceDirName":"writing-policies/rego/open-policy-agent","slug":"/writing-policies/rego/open-policy-agent/distribute","permalink":"/1.10/writing-policies/rego/open-policy-agent/distribute","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rego/open-policy-agent/04-distribute.md","tags":[],"version":"1.10","lastUpdatedAt":1737463794000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Distribute","title":"Distributing an OPA policy with Kubewarden","description":"Distributing an OPA policy with Kubewarden.","keywords":["kubewarden","kubernetes","distributing","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","distribute"]},"sidebar":"docs","previous":{"title":"Build and run","permalink":"/1.10/writing-policies/rego/open-policy-agent/build-and-run"},"next":{"title":"Raw policies","permalink":"/1.10/writing-policies/rego/open-policy-agent/raw-policies"}}');var o=i(74848),s=i(28453);const a={sidebar_label:"Distribute",title:"Distributing an OPA policy with Kubewarden",description:"Distributing an OPA policy with Kubewarden.",keywords:["kubewarden","kubernetes","distributing","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","distribute"]},r=void 0,c={},l=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"We have written, built and run our Rego policy. Now it's time to\ndistribute the policy."}),"\n",(0,o.jsxs)(n.p,{children:["Policies have to be annotated in order for them to be executed in the\n",(0,o.jsx)(n.code,{children:"policy-server"}),", the component that executes the policies when running\nin a Kubernetes cluster."]}),"\n",(0,o.jsx)(n.h2,{id:"annotating-the-policy",children:"Annotating the policy"}),"\n",(0,o.jsx)(n.p,{children:"Annotating a policy is a process that enriches the policy metadata\nwith relevant information like authorship, license, source code\nlocation and other important metadata such as rules, that describes\nwhat kind of resources this policy can understand and evaluate."}),"\n",(0,o.jsxs)(n.p,{children:["In order to annotate our policy let's write a simple ",(0,o.jsx)(n.code,{children:"metadata.yaml"}),"\nfile:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'rules:\n- apiGroups: [""]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["CREATE"]\nmutating: false\ncontextAware: false\nexecutionMode: opa\nannotations:\n  io.kubewarden.policy.title: no-default-namespace\n  io.kubewarden.policy.description: This policy will reject any resource created inside the default namespace\n  io.kubewarden.policy.author: The Kubewarden Authors\n  io.kubewarden.policy.url: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.source: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n      This policy is just an example.\n\n      You can write interesting descriptions about the policy here.\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this case, you can see several details:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Rules: what resources this policy is targeting"}),"\n",(0,o.jsx)(n.li,{children:"Mutating: whether this policy is mutating. In this case, is just\nvalidating."}),"\n",(0,o.jsx)(n.li,{children:"Context aware: whether this policy requires context from the\ncluster in order to evaluate the request."}),"\n",(0,o.jsxs)(n.li,{children:["Execution mode: since this is a Rego policy it is mandatory to\nspecify what execution mode it expects: ",(0,o.jsx)(n.code,{children:"opa"})," or ",(0,o.jsx)(n.code,{children:"gatekeeper"}),". This\npolicy is written in the ",(0,o.jsx)(n.code,{children:"opa"})," style: returning a whole\n",(0,o.jsx)(n.code,{children:"AdmissionReview"})," object."]}),"\n",(0,o.jsx)(n.li,{children:"Annotations: metadata stored into the policy itself."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's go ahead and annotate our policy:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ kwctl annotate policy.wasm --metadata-path metadata.yaml --output-path annotated-policy.wasm\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you can ",(0,o.jsx)(n.code,{children:"inspect"})," the policy if you will by running ",(0,o.jsx)(n.code,{children:"kwctl inspect annotated-policy.wasm"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"pushing-the-policy",children:"Pushing the policy"}),"\n",(0,o.jsx)(n.p,{children:"Now that the policy is annotated we can push it to an OCI\nregistry. Let's do that:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ kwctl push annotated-policy.wasm registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\nPolicy successfully pushed\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now our Rego policy targeting the OPA framework has everything it\nneeds to be deployed in production by creating a\n",(0,o.jsx)(n.code,{children:"ClusterAdmissionPolicy"}),". Let's prepare that too. First, we have to\npull the policy into the ",(0,o.jsx)(n.code,{children:"kwctl"})," local store:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ kwctl pull registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\npulling policy...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Let's create a ",(0,o.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," out of it. This operation will\ntake into account the metadata it has about the policy:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'$ kwctl manifest registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1 --type ClusterAdmissionPolicy\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: generated-policy\nspec:\n  module: "registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - "*"\n      resources:\n        - "*"\n      operations:\n        - CREATE\n  mutating: false\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can now use this ",(0,o.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," as a base to target the\nresources that you want, or deploy to Kubernetes as is."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);