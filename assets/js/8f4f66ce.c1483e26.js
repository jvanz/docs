"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[21467],{51148:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"explanations/context-aware-policies","title":"Context aware policies","description":"A description of Kubewarden context aware policies, what they are and how they are useful.","source":"@site/versioned_docs/version-1.7/explanations/context-aware-policies.md","sourceDirName":"explanations","slug":"/explanations/context-aware-policies","permalink":"/1.7/explanations/context-aware-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/explanations/context-aware-policies.md","tags":[],"version":"1.7","lastUpdatedAt":1734954129000,"frontMatter":{"sidebar_label":"Context aware policies","title":"Context aware policies","description":"A description of Kubewarden context aware policies, what they are and how they are useful.","keywords":["kubewarden","context-aware policy","clusteradmissionpolicy","admissionpolicy","admissionrequest","cluster administrator"]},"sidebar":"docs","previous":{"title":"Distributing policies","permalink":"/1.7/distributing-policies"},"next":{"title":"Kubewarden vs OPA Gatekeeper","permalink":"/1.7/explanations/opa-comparison"}}');var i=s(74848),t=s(28453);const r={sidebar_label:"Context aware policies",title:"Context aware policies",description:"A description of Kubewarden context aware policies, what they are and how they are useful.",keywords:["kubewarden","context-aware policy","clusteradmissionpolicy","admissionpolicy","admissionrequest","cluster administrator"]},c=void 0,a={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/context-aware-policies"})}),"\n",(0,i.jsxs)(n.p,{children:["Developers can create policies that fetch information from a Kubernetes cluster at run time.\nThese are context aware policies.\nContext aware policies can determine whether an ",(0,i.jsx)(n.code,{children:"AdmissionRequest"})," is acceptable using information from resources deployed in the cluster."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Context aware policies are only available in Kubewarden versions \u2265 v1.6.0."})}),"\n",(0,i.jsxs)(n.p,{children:["Resources a policy can access in the cluster is controlled by the policy server's ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/service-accounts/",children:"Service Account"}),".\nA cluster administrator controls what a policy can access via Kubernetes RBAC rules.\nContext aware policies have only ",(0,i.jsx)(n.strong,{children:"read"})," access to the requested resources."]}),"\n",(0,i.jsxs)(n.p,{children:["For security reasons, only ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," policies can fetch information from the Kubernetes cluster.\nThis is because ",(0,i.jsx)(n.code,{children:"AdmissionPolicy"})," resources can be deployed by unprivileged users.\nIf a context aware policy is deployed as an ",(0,i.jsx)(n.code,{children:"AdmissionPolicy"})," all attempts to access Kubernetes resources are blocked and reported to the cluster administrator."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, all the cluster resources are blocked.\nA Kubewarden administrator defines which Kubernetes resources each context aware policy is allowed to read.\nThis is done in the ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," definition using the field ",(0,i.jsx)(n.code,{children:"contextAwareResources"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:["The following example deploys a policy that requires access to the ",(0,i.jsx)(n.code,{children:"Deployment"})," and ",(0,i.jsx)(n.code,{children:"Pod"})," resources:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: context-aware-policy\n  namespace: default\nspec:\n  policyServer: default\n  module: "registry://ghcr.io/kubewarden/policies/context-aware-policy:v1.0.0"\n  settings: {}\n  contextAwareResources:\n    - apiVersion: "apps/v1"\n      kind: "deployment"\n    - apiVersion: "v1"\n      kind: "pod"\n  rules:\n    - apiGroups: ["apps"]\n      apiVersions: ["v1"]\n      resources: ["deployment"]\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Once deployed, this policy can read the data of the ",(0,i.jsx)(n.code,{children:"deployment"})," and ",(0,i.jsx)(n.code,{children:"pod"})," resources."]}),"\n",(0,i.jsxs)(n.p,{children:["Policy authors provide lists of Kubernetes resources for their context aware policy.\nThis is done by annotating the policy.\nKubewarden administrators view policy metadata using the ",(0,i.jsx)(n.code,{children:"kwctl inspect"})," command.\nThey can get a list of resources the policy needs access to.\nAn administrator uses this list to populate the ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," definition."]}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsx)(n.p,{children:"To prevent system abuse, Kubewarden administrators must review the resources the policy will access."}),(0,i.jsxs)(n.p,{children:["For example, a policy evaluating ingress objects would have good reasons to read the ",(0,i.jsx)(n.code,{children:"Ingress"})," resources defined in the cluster.\nThe same policy can't justify having access to ",(0,i.jsx)(n.code,{children:"Secret"})," resources."]}),(0,i.jsx)(n.p,{children:"Policies should have the least access needed to function correctly."})]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Kubernetes resources are identified by ",(0,i.jsx)(n.code,{children:"apiVersion"})," and ",(0,i.jsx)(n.code,{children:"kind"}),"."]}),(0,i.jsxs)(n.p,{children:["Usually, ",(0,i.jsx)(n.code,{children:"apiVersion"})," is a string in the format ",(0,i.jsx)(n.code,{children:"<api>/<version>"}),".\nResources from the ",(0,i.jsx)(n.code,{children:"core"})," API group (Pod, Service, and others) should not define the group name, ",(0,i.jsx)(n.code,{children:"<api>"}),".\nThey should only define the ",(0,i.jsx)(n.code,{children:"<version>"})," (for example, ",(0,i.jsx)(n.code,{children:"v1"}),")."]}),(0,i.jsx)(n.p,{children:"For a core resource, the first will not work, the second will."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'- apiVersion: "core/v1"\n  kind: "pod"\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'- apiVersion: "v1"\n  kind: "pod"\n'})}),(0,i.jsxs)(n.p,{children:["All other Kubernetes resources need the full definition: ",(0,i.jsx)(n.code,{children:"<api>/<version>"}),"."]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var o=s(96540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);