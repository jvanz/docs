"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9175],{63627:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorials/writing-policies/metadata","title":"Policy metadata","description":"Using policy metadata when developing a Kubewarden policy.","source":"@site/versioned_docs/version-1.11/tutorials/writing-policies/metadata.md","sourceDirName":"tutorials/writing-policies","slug":"/tutorials/writing-policies/metadata","permalink":"/1.11/tutorials/writing-policies/metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/tutorials/writing-policies/metadata.md","tags":[],"version":"1.11","lastUpdatedAt":1737394843000,"sidebarPosition":90,"frontMatter":{"sidebar_label":"Policy metadata","sidebar_position":90,"title":"Policy metadata","description":"Using policy metadata when developing a Kubewarden policy.","keywords":["kubewarden","kubernetes policy development","policy metadata"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-polices","policy-metadata"],"doc-persona":["kubewarden-developer"]},"sidebar":"docs","previous":{"title":"Raw policies","permalink":"/1.11/tutorials/writing-policies/wasi/raw-policies"},"next":{"title":"Policy testing","permalink":"/1.11/tutorials/testing-policies/"}}');var a=t(74848),o=t(28453);const s={sidebar_label:"Policy metadata",sidebar_position:90,title:"Policy metadata",description:"Using policy metadata when developing a Kubewarden policy.",keywords:["kubewarden","kubernetes policy development","policy metadata"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-polices","policy-metadata"],"doc-persona":["kubewarden-developer"]},r=void 0,c={},l=[{value:"Enabling background audit checks",id:"enabling-background-audit-checks",level:2},{value:"Defining Kubernetes resources that policies can access",id:"defining-kubernetes-resources-that-policies-can-access",level:2},{value:"Specifying policies as mutating or non-mutating",id:"specifying-policies-as-mutating-or-non-mutating",level:2},{value:"Specify policy type as Kubernetes or Raw",id:"specify-policy-type-as-kubernetes-or-raw",level:2},{value:"Defining resource type targets",id:"defining-resource-type-targets",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/metadata"})}),"\n",(0,a.jsxs)(i.p,{children:["The Kubewarden metadata file, ",(0,a.jsx)(i.code,{children:"metadata.yaml"}),",\nis a configuration file containing important information and settings\nrelated to the policies used within Kubewarden.\nThis documentation is overview of the purpose and usage of the metadata file."]}),"\n",(0,a.jsxs)(i.p,{children:["The policy ",(0,a.jsx)(i.code,{children:"metadata.yaml"})," file has defaults for the policy,\nas well as metadata such as author and description,\nset by the policy author.\nThe ",(0,a.jsx)(i.code,{children:"kwctl annotate"})," command uses the file to annotate the ",(0,a.jsx)(i.code,{children:".wasm"})," file containing the policy.\nTherefore, all the relevant information required to run the policy is available.\nMore information about how to annotate the policy is in the\n",(0,a.jsx)(i.a,{href:"/1.11/explanations/distributing-policies",children:"Distributing Policies"})," guide."]}),"\n",(0,a.jsxs)(i.p,{children:["When policy users want to use a policy, they generate a YAML manifest using ",(0,a.jsx)(i.code,{children:"kwctl scaffold"}),".\nThis command reads the policy metadata embedded in the shipped Wasm module,\nperforms checks, and returns a YAML manifest that the author can use as-is or modify."]}),"\n",(0,a.jsxs)(i.p,{children:["As a policy author, you can adapt the ",(0,a.jsx)(i.code,{children:"metadata.yaml"})," file provided during the\nscaffolding of your policy."]}),"\n",(0,a.jsxs)(i.p,{children:["See the following example of a ",(0,a.jsx)(i.code,{children:"metadata.yaml"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-yaml",children:'rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations: ["CREATE"]\nmutating: false\ncontextAwareResources: []\nexecutionMode: kubewarden-wapc\npolicyType: kubernetes\nbackgroundAudit: true\nannotations:\n  # artifacthub specific:\n  io.artifacthub.displayName: Policy Name\n  io.artifacthub.resources: Pod\n  io.artifacthub.keywords: pod, cool policy, kubewarden\n  io.kubewarden.policy.ociUrl: ghcr.io/myorg/my-policy\n  # kubewarden specific:\n  io.kubewarden.policy.title: My policy\n  io.kubewarden.policy.description: Short description\n  io.kubewarden.policy.author: myself\n  io.kubewarden.policy.url: https://github.com/yourorg/my-policy\n  io.kubewarden.policy.source: https://github.com/yourorg/my-policy\n  io.kubewarden.policy.license: Apache-2.0\n  # The next two annotations are used in the policy report generated by the\n  # Audit scanner. Severity indicates policy check result criticality and\n  # Category indicates policy category. See more here at docs.kubewarden.io\n  io.kubewarden.policy.severity: medium\n  io.kubewarden.policy.category: Resource validation\n'})}),"\n",(0,a.jsx)(i.h2,{id:"enabling-background-audit-checks",children:"Enabling background audit checks"}),"\n",(0,a.jsxs)(i.p,{children:["The metadata file includes a flag, ",(0,a.jsx)(i.code,{children:"backgroundAudit"}),",\nthat enables the background audit checks for a specific policy.\nBy default, this flag is set to ",(0,a.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["There are policies that, due to the way they work or to the type of events they're concerned with,\nshould have this field set to ",(0,a.jsx)(i.code,{children:"false"}),".\nYou can find more information in the\n",(0,a.jsx)(i.a,{href:"../../../explanations/audit-scanner/limitations",children:"audit scanner documentation"}),",\nunder the limitations section."]}),"\n",(0,a.jsx)(i.h2,{id:"defining-kubernetes-resources-that-policies-can-access",children:"Defining Kubernetes resources that policies can access"}),"\n",(0,a.jsxs)(i.p,{children:["Within the metadata file,\nusing the ",(0,a.jsx)(i.code,{children:"contextAwareResources"})," field,\nusers can define which Kubernetes resources the policy can access.\nFor example, if the policy needs access to the ",(0,a.jsx)(i.code,{children:"Namespace"})," resource.\nThe policy author can define the ",(0,a.jsx)(i.code,{children:"contextAwareResources"})," as:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-yaml",children:"[...]\ncontextAwareResources:\n  - apiVersion: v1 kind: Namespace\n[...]\n"})}),"\n",(0,a.jsx)(i.h2,{id:"specifying-policies-as-mutating-or-non-mutating",children:"Specifying policies as mutating or non-mutating"}),"\n",(0,a.jsxs)(i.p,{children:["The metadata file has a flag, ",(0,a.jsx)(i.code,{children:"mutating"}),",\nthat lets users configure a policy as either mutating or non-mutating.\nA mutating policy modifies the incoming requests or the resources being managed.\nA non-mutating policy observes and enforces restrictions without making any changes.\nThis distinction is crucial in determining how policies interact with the Kubernetes resources and their impact on the cluster."]}),"\n",(0,a.jsx)(i.h2,{id:"specify-policy-type-as-kubernetes-or-raw",children:"Specify policy type as Kubernetes or Raw"}),"\n",(0,a.jsxs)(i.p,{children:["The metadata file has a flag, ",(0,a.jsx)(i.code,{children:"policyType"}),", that lets users to mark a policy as either ",(0,a.jsx)(i.code,{children:"kubernetes"})," or ",(0,a.jsx)(i.code,{children:"raw"}),".\nA Kubernetes policy is a policy that validates Kubernetes resources.\nA Raw policy is a policy that validates arbitrary JSON documents.\nBy default, if not specified by the user, this field is set to ",(0,a.jsx)(i.code,{children:"kubernetes"})," when annotating a policy.\nRefer to the ",(0,a.jsx)(i.a,{href:"/1.11/howtos/raw-policies",children:"Raw Policies"})," section for more information."]}),"\n",(0,a.jsx)(i.h2,{id:"defining-resource-type-targets",children:"Defining resource type targets"}),"\n",(0,a.jsxs)(i.p,{children:["The metadata file provides users with the ability to define the rules within the ",(0,a.jsx)(i.code,{children:"rules"})," field,\nwhich determines the resource types to which the policy applies.\nThis feature empowers users to exercise precise control over policy enforcement,\nguaranteeing that policies are only applied to the intended resource types.\nWith this fine-grained control, users can guarantee that policies are targeted accurately,\naligning with their specific requirements and avoiding any unintended application of policies to unrelated resource types."]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>r});var n=t(96540);const a={},o=n.createContext(a);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);