"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[80906],{23050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/writing-policies/rego/gatekeeper/distribute","title":"Distributing a Gatekeeper policy with Kubewarden","description":"Distributing a Gatekeeper policy with Kubewarden.","source":"@site/docs/tutorials/writing-policies/rego/gatekeeper/04-distribute.md","sourceDirName":"tutorials/writing-policies/rego/gatekeeper","slug":"/tutorials/writing-policies/rego/gatekeeper/distribute","permalink":"/next/tutorials/writing-policies/rego/gatekeeper/distribute","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/tutorials/writing-policies/rego/gatekeeper/04-distribute.md","tags":[],"version":"current","lastUpdatedAt":1736968001000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Distribute","title":"Distributing a Gatekeeper policy with Kubewarden","description":"Distributing a Gatekeeper policy with Kubewarden.","keywords":["kubewarden","kubernetes","gatekeeper","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","gatekeeper","distribute"]},"sidebar":"docs","previous":{"title":"Build and run","permalink":"/next/tutorials/writing-policies/rego/gatekeeper/build-and-run"},"next":{"title":"C#","permalink":"/next/tutorials/writing-policies/dotnet"}}');var o=n(74848),r=n(28453);const s={sidebar_label:"Distribute",title:"Distributing a Gatekeeper policy with Kubewarden",description:"Distributing a Gatekeeper policy with Kubewarden.",keywords:["kubewarden","kubernetes","gatekeeper","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","gatekeeper","distribute"]},a=void 0,c={},l=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2},{value:"Deploying on Kubernetes",id:"deploying-on-kubernetes",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rego/gatekeeper/distribute"})}),"\n",(0,o.jsxs)(t.p,{children:["Policies have to be annotated for them to be pushed,\nand eventually executed by the Kubewarden ",(0,o.jsx)(t.code,{children:"policy-server"})," in a Kubernetes cluster."]}),"\n",(0,o.jsx)(t.p,{children:"Annotating and distributing a Gatekeeper policy is similar to distributing an Open Policy Agent one."}),"\n",(0,o.jsx)(t.h2,{id:"annotating-the-policy",children:"Annotating the policy"}),"\n",(0,o.jsxs)(t.p,{children:["You're going to write a ",(0,o.jsx)(t.code,{children:"metadata.yaml"})," file in your policy directory with contents:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'rules:\n- apiGroups: [""]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["CREATE"]\nmutating: false\ncontextAware: false\nexecutionMode: gatekeeper\nannotations:\n  io.kubewarden.policy.title: no-default-namespace\n  io.kubewarden.policy.description: This policy will reject any resource created inside the default namespace\n  io.kubewarden.policy.author: The Kubewarden Authors\n  io.kubewarden.policy.url: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.source: https://github.com/kubewarden/some-policy\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n      This policy is just an example.\n\n      You can write interesting descriptions about the policy here.\n'})}),"\n",(0,o.jsxs)(t.p,{children:["you can see everything is the same as the Open Policy Agent version metadata,\nexcept for the ",(0,o.jsx)(t.code,{children:"executionMode: gatekeeper"})," bit."]}),"\n",(0,o.jsx)(t.p,{children:"Go ahead and annotate the policy:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-console",children:"$ kwctl annotate policy.wasm --metadata-path metadata.yaml --output-path annotated-policy.wasm\n"})}),"\n",(0,o.jsx)(t.h2,{id:"pushing-the-policy",children:"Pushing the policy"}),"\n",(0,o.jsx)(t.p,{children:"Push your policy to an OCI registry:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-console",children:"$ kwctl push annotated-policy.wasm registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1\nPolicy successfully pushed\n"})}),"\n",(0,o.jsx)(t.h2,{id:"deploying-on-kubernetes",children:"Deploying on Kubernetes"}),"\n",(0,o.jsxs)(t.p,{children:["You have to pull your policy to your ",(0,o.jsx)(t.code,{children:"kwctl"})," local store first:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-console",children:"$ kwctl pull registry://registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1\npulling policy...\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can now create a scaffold ",(0,o.jsx)(t.code,{children:"ClusterAdmissionPolicy"})," resource:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-console",children:'$ kwctl scaffold manifest registry://registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1 --type ClusterAdmissionPolicy\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: generated-policy\nspec:\n  module: "registry://registry.my-company.com/kubewarden/no-default-namespace-gatekeeper:v0.0.1"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - "*"\n      resources:\n        - "*"\n      operations:\n        - CREATE\n  mutating: false\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Now use this ",(0,o.jsx)(t.code,{children:"ClusterAdmissionPolicy"})," resource to deploy your policy to a Kubernetes cluster."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);