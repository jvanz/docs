"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[19552],{62280:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorials/writing-policies/rego/open-policy-agent/distribute","title":"Distributing an OPA policy with Kubewarden","description":"Distributing an OPA policy with Kubewarden.","source":"@site/versioned_docs/version-1.15/tutorials/writing-policies/rego/open-policy-agent/04-distribute.md","sourceDirName":"tutorials/writing-policies/rego/open-policy-agent","slug":"/tutorials/writing-policies/rego/open-policy-agent/distribute","permalink":"/1.15/tutorials/writing-policies/rego/open-policy-agent/distribute","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.15/tutorials/writing-policies/rego/open-policy-agent/04-distribute.md","tags":[],"version":"1.15","lastUpdatedAt":1737553641000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Distribute","title":"Distributing an OPA policy with Kubewarden","description":"Distributing an OPA policy with Kubewarden.","keywords":["kubewarden","kubernetes","distributing","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","distribute"]},"sidebar":"docs","previous":{"title":"Build and run","permalink":"/1.15/tutorials/writing-policies/rego/open-policy-agent/build-and-run"},"next":{"title":"Raw policies","permalink":"/1.15/tutorials/writing-policies/rego/open-policy-agent/raw-policies"}}');var o=i(74848),s=i(28453);const r={sidebar_label:"Distribute",title:"Distributing an OPA policy with Kubewarden",description:"Distributing an OPA policy with Kubewarden.",keywords:["kubewarden","kubernetes","distributing","open policy agent","opa","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","open-policy-agent","distribute"]},a=void 0,c={},l=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rego/open-policy-agent/distribute"})}),"\n",(0,o.jsx)(n.p,{children:"You have written, built and run your Rego policy.\nNow it's time to distribute the policy."}),"\n",(0,o.jsxs)(n.p,{children:["Policies have to be annotated, so they can run in the ",(0,o.jsx)(n.code,{children:"policy-server"}),".\nThe ",(0,o.jsx)(n.code,{children:"policy-server"})," is the part that executes the policies,\nwhen running in a Kubernetes cluster."]}),"\n",(0,o.jsx)(n.h2,{id:"annotating-the-policy",children:"Annotating the policy"}),"\n",(0,o.jsx)(n.p,{children:"Annotating a policy is a process that enriches the policy metadata with relevant information.\nInformation like authorship, license, source code location, rules,\nthat describe what kind of resources this policy understands and evaluates."}),"\n",(0,o.jsxs)(n.p,{children:["To annotate your policy you need to write a ",(0,o.jsx)(n.code,{children:"metadata.yaml"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'rules:\n- apiGroups: [""]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["CREATE"]\nmutating: false\ncontextAware: false\nexecutionMode: opa\nannotations:\n  io.kubewarden.policy.title: no-default-namespace\n  io.kubewarden.policy.description: This policy will reject any resource created inside the default namespace\n  io.kubewarden.policy.author: The Kubewarden Authors\n  io.kubewarden.policy.url: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.source: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n      This policy is just an example.\n\n      You can write interesting descriptions about the policy here.\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can see several details:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Rules:\nWhat resources this policy is targeting."}),"\n",(0,o.jsx)(n.li,{children:"Mutating:\nWhether this policy is mutating.\nIn this case, it is just validating."}),"\n",(0,o.jsx)(n.li,{children:"Context aware:\nWhether this policy requires context from the cluster to evaluate the request."}),"\n",(0,o.jsxs)(n.li,{children:["Execution mode:\nSince this is a Rego policy it's mandatory to specify what execution mode it expects,\n",(0,o.jsx)(n.code,{children:"opa"})," or ",(0,o.jsx)(n.code,{children:"gatekeeper"}),".\nThis policy is written in the ",(0,o.jsx)(n.code,{children:"opa"})," style, returning a whole ",(0,o.jsx)(n.code,{children:"AdmissionReview"})," object."]}),"\n",(0,o.jsx)(n.li,{children:"Annotations: Metadata stored in the policy itself."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Go ahead and annotate your policy:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ kwctl annotate policy.wasm --metadata-path metadata.yaml --output-path annotated-policy.wasm\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you can inspect the policy by running ",(0,o.jsx)(n.code,{children:"kwctl inspect annotated-policy.wasm"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"pushing-the-policy",children:"Pushing the policy"}),"\n",(0,o.jsx)(n.p,{children:"Now that the policy is annotated you can push it to an OCI registry."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ kwctl push annotated-policy.wasm registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\nPolicy successfully pushed\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Your Rego policy, targeting the OPA framework,\nhas everything it needs, to be deployed in production,\nby creating a ",(0,o.jsx)(n.code,{children:"ClusterAdmissionPolicy"}),".\nYou can prepare that as well.\nFirst you need to pull the policy into the ",(0,o.jsx)(n.code,{children:"kwctl"})," local store:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ kwctl pull registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1\npulling policy...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," from it.\nThis operation takes into account the metadata it has about the policy:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'$ kwctl manifest registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1 --type ClusterAdmissionPolicy\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: generated-policy\nspec:\n  module: "registry://registry.my-company.com/kubewarden/no-default-namespace:v0.0.1"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - "*"\n      resources:\n        - "*"\n      operations:\n        - CREATE\n  mutating: false\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can now use this ",(0,o.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," as a base to target the resources that you want,\nor deploy to Kubernetes as is."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);