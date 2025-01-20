"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7906],{91037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"explanations/mutating-policies","title":"Mutating policies","description":"Explains mutating policies in the context of Kubewarden","source":"@site/versioned_docs/version-1.11/explanations/mutating-policies.md","sourceDirName":"explanations","slug":"/explanations/mutating-policies","permalink":"/1.11/explanations/mutating-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/explanations/mutating-policies.md","tags":[],"version":"1.11","lastUpdatedAt":1737395608000,"sidebarPosition":10,"frontMatter":{"sidebar_label":"Mutating policies","sidebar_position":10,"title":"Mutating policies","description":"Explains mutating policies in the context of Kubewarden","keywords":["kubewarden","policy mutating","kubernetes","clusteradmissionpolicy","admissionpolicy"],"doc-persona":["kubewarden-policy-developer","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["mutating-policies"]},"sidebar":"docs","previous":{"title":"Publish to Artifact Hub","permalink":"/1.11/tutorials/publish-policy-to-artifact-hub"},"next":{"title":"Context aware policies","permalink":"/1.11/explanations/context-aware-policies"}}');var s=i(74848),o=i(28453);const r={sidebar_label:"Mutating policies",sidebar_position:10,title:"Mutating policies",description:"Explains mutating policies in the context of Kubewarden",keywords:["kubewarden","policy mutating","kubernetes","clusteradmissionpolicy","admissionpolicy"],"doc-persona":["kubewarden-policy-developer","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["mutating-policies"]},a=void 0,l={},u=[{value:"Why mutating policies can be dangerous",id:"why-mutating-policies-can-be-dangerous",level:2},{value:"Unreviewed mutating policies can introduce vulnerabilities",id:"unreviewed-mutating-policies-can-introduce-vulnerabilities",level:3},{value:"Solution",id:"solution",level:4},{value:"Misconfigured mutating policies together with 3rd party Kubernetes Controllers can get stuck in an infinite loop",id:"misconfigured-mutating-policies-together-with-3rd-party-kubernetes-controllers-can-get-stuck-in-an-infinite-loop",level:3},{value:"Solution",id:"solution-1",level:4},{value:"Examples",id:"examples",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/mutating-policies"})}),"\n",(0,s.jsx)(n.p,{children:"Mutating policies receive an object request and rebuild this incoming object\n(mutate it) into a new request, according to the defined values in the settings\nof the policy. The request will proceed through the Kubernetes API, potentially being\nevaluated by other policies."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to allow the behavior of mutating requests,\nset the ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy.mutating"})," field to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["However, if you set the ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy.mutating"})," field to ",(0,s.jsx)(n.code,{children:"false"}),",\nthe mutated requests will be rejected."]}),"\n",(0,s.jsx)(n.h2,{id:"why-mutating-policies-can-be-dangerous",children:"Why mutating policies can be dangerous"}),"\n",(0,s.jsx)(n.h3,{id:"unreviewed-mutating-policies-can-introduce-vulnerabilities",children:"Unreviewed mutating policies can introduce vulnerabilities"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"To prevent system abuse, Kubewarden administrators should review mutating\npolicies: mutating policies could for example modify a workload, such that it\nallows for privileged container creation."})}),"\n",(0,s.jsx)(n.h4,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"If in doubt, split policies into mutating and validating policies, instead of\nwriting or deploying policies that both validate and mutate. This is particularly\nimportant when using a DSL (such as Rego) to build complex policies."}),"\n",(0,s.jsx)(n.h3,{id:"misconfigured-mutating-policies-together-with-3rd-party-kubernetes-controllers-can-get-stuck-in-an-infinite-loop",children:"Misconfigured mutating policies together with 3rd party Kubernetes Controllers can get stuck in an infinite loop"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Mutating policies return requests that proceed through the Kubernetes API. If\nthere are other Kubernetes Controllers that listen for those same resources,\nthey may mutate them back in a follow-up request. This could lead to an\ninfinite feedback loop of mutations."})}),"\n",(0,s.jsx)(n.h4,{id:"solution-1",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"Perform the mutation against:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The lower type of resource (e.g: Pod)."}),"\n",(0,s.jsx)(n.li,{children:"The highest type of resource (e.g: Deployment). Note: this could still lead\nto loops if a controller is managing those resources. For example\ncontrollers of GitOps solutions (like fleet, flux, argo, ...) or other 3rd\nparty controllers that translate their own CRDs into Deployment objects."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Let's see a mutating policy at work. Create the following\n",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," with the ",(0,s.jsx)(n.code,{children:"mutating"})," field set to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny"\nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group created\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/user-group-psp-policy",children:(0,s.jsx)(n.code,{children:"psp-user-group"})})," policy is used to control users and groups in containers and can mutate the requests.\nIn the example above, the ",(0,s.jsx)(n.code,{children:"runAsUser"})," field is set and it will be added to the container ",(0,s.jsx)(n.code,{children:"securityContext"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:["As the ",(0,s.jsx)(n.code,{children:"mutating"})," field is set to ",(0,s.jsx)(n.code,{children:"true"}),", the following request will be applied successfully:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\npod/pause-user-group created\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once the request is applied, you can see the results of the container's ",(0,s.jsx)(n.code,{children:"securityContext"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Command\nkubectl get pods pause-user-group -o jsonpath='{ .spec.containers[].securityContext }'\n\n# Output\n{\"runAsUser\":1000}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, modify the ",(0,s.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," by setting the field ",(0,s.jsx)(n.code,{children:"mutating"})," to ",(0,s.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Command\nkubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/user-group-psp:v0.1.5"\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 3000\n          max: 4000\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny"\nEOF\n\n# Output\nclusteradmissionpolicy.policies.kubewarden.io/psp-user-group configured\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As the ",(0,s.jsx)(n.code,{children:"mutating"})," field is set to ",(0,s.jsx)(n.code,{children:"false"}),", the following request will fail:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Command\nkubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pause-user-group\nspec:\n  containers:\n    - name: pause\n      image: registry.k8s.io/pause\nEOF\n\n# Output\nError from server: error when creating ".\\\\pause-user-group.yaml": admission webhook "psp-user-group.kubewarden.admission" denied the request: Request rejected by policy psp-user-group. The policy attempted to mutate the request, but it is currently configured to not allow mutations.\n'})}),"\n",(0,s.jsx)(n.p,{children:"In conclusion, you can see Kubewarden replicates the same behavior as the deprecated Kubernetes Pod Security Polices (PSP)."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);