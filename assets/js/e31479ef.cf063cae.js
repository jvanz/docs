"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6769],{12696:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorials/writing-policies/CEL/reusing-vap","title":"Reusing ValidatingAdmissionPolicies","description":"Example: Reusing ValidatingAdmissionPolicies","source":"@site/versioned_docs/version-1.16/tutorials/writing-policies/CEL/02-reusing-vap.md","sourceDirName":"tutorials/writing-policies/CEL","slug":"/tutorials/writing-policies/CEL/reusing-vap","permalink":"/1.16/tutorials/writing-policies/CEL/reusing-vap","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/tutorials/writing-policies/CEL/02-reusing-vap.md","tags":[],"version":"1.16","lastUpdatedAt":1737078991000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Reusing VAPs","title":"Reusing ValidatingAdmissionPolicies","description":"Example: Reusing ValidatingAdmissionPolicies","keywords":["kubewarden","kubernetes","writing policies","ValidatingAdmissionPolicies"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","cel","ValidatingAdmissionPolicies"],"doc-persona":["kubewarden-policy-developer","kubewarden-operator"]},"sidebar":"docs","previous":{"title":"Intro","permalink":"/1.16/tutorials/writing-policies/CEL/intro-cel"},"next":{"title":"Context-aware policies","permalink":"/1.16/tutorials/writing-policies/CEL/context-aware"}}');var t=n(74848),a=n(28453);const r={sidebar_label:"Reusing VAPs",title:"Reusing ValidatingAdmissionPolicies",description:"Example: Reusing ValidatingAdmissionPolicies",keywords:["kubewarden","kubernetes","writing policies","ValidatingAdmissionPolicies"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","cel","ValidatingAdmissionPolicies"],"doc-persona":["kubewarden-policy-developer","kubewarden-operator"]},o=void 0,l={},c=[{value:"ValidatingAdmissionPolicy",id:"validatingadmissionpolicy",level:3},{value:"Kubewarden&#39;s <code>cel-policy</code>",id:"kubewardens-cel-policy",level:3},{value:"Yet to be implemented equivalences",id:"yet-to-be-implemented-equivalences",level:3},{value:"Applying the policy",id:"applying-the-policy",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/cel/resuing-vap"})}),"\n",(0,t.jsxs)(i.p,{children:["Kubernetes vanilla ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy",children:"Validating\npolicies"}),"\nconsist of the following resources:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["ValidatingAdmissionPolicy: describes the logic in CEL. It optionally accepts\nalso parameters in ",(0,t.jsx)(i.code,{children:"spec.paramKind"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"ValidatingAdmissionPolicyBinding: scopes the policy."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Let's see a concrete example. These and others can be reused with Kubewarden's\n",(0,t.jsx)(i.code,{children:"cel-policy"})," with little effort."]}),"\n",(0,t.jsxs)(i.p,{children:["The following ValidatingAdmissionPolicy comes from the ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/#creating-a-validatingadmissionpolicy",children:"Kubernetes\ndocs"}),".\nThis policy checks that the number of Replicas in Deployments is less or equal\nto 5. It is bound with a ValidatingAdmissionPolicyBinding so it only affects\nNamespaces that havel a label ",(0,t.jsx)(i.code,{children:"environment"})," set to ",(0,t.jsx)(i.code,{children:"test"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"validatingadmissionpolicy",children:"ValidatingAdmissionPolicy"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",metastring:"{6,7,13,16,26,27}",children:'apiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingAdmissionPolicy\nmetadata:\n  name: "replicalimit-policy.example.com"\nspec:\n  failurePolicy: Fail # (1)\n  matchConstraints: # (2)\n    resourceRules:\n      - apiGroups: ["apps"]\n        apiVersions: ["v1"]\n        operations: ["CREATE", "UPDATE"]\n        resources: ["deployments"]\n  variables: # (3)\n    - name: maxreplicas\n      expression: int(5)\n  validations: # (4)\n    - expression: "object.spec.replicas <= variables.maxreplicas"\n      messageExpression: "\'the number of replicast must be less than or equal to \' + string(variables.maxreplicas)"\n---\napiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingAdmissionPolicyBinding\nmetadata:\n  name: "replicalimit-binding-test.example.com"\nspec:\n  policyName: "replicalimit-policy.example.com"\n  validationActions: [Deny] # (5)\n  matchResources: # (6)\n    namespaceSelector:\n      matchLabels:\n        environment: test\n'})}),"\n",(0,t.jsx)(i.p,{children:"Here we have an equivalent Kubewarden policy:"}),"\n",(0,t.jsxs)(i.h3,{id:"kubewardens-cel-policy",children:["Kubewarden's ",(0,t.jsx)(i.code,{children:"cel-policy"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",metastring:'title="./cel-policy-example.yaml" {10,11,12,18,23,27}',children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  annotations:\n    io.kubewarden.policy.category: Resource validation # (7)\n    io.kubewarden.policy.severity: low # (7)\n  name: "cel-policy-replica-example"\nspec:\n  module: registry://ghcr.io/kubewarden/policies/cel-policy:v1.0.0\n  failurePolicy: Fail # (1). Defaults to "Fail"\n  mode: protect # (5). Defaults to "protect"\n  rules: # (2)\n    - apiGroups: ["apps"]\n      apiVersions: ["v1"]\n      operations: ["CREATE", "UPDATE"]\n      resources: ["deployments"]\n  settings:\n    variables: # (3)\n      - name: "replicas"\n        expression: "object.spec.replicas"\n      - name: maxreplicas\n        expression: int(5)\n    validations: # (4)\n      - expression: "variables.replicas <= variables.maxreplicas"\n        messageExpression: "\'the number of replicast must be less than or equal to \' + string(variables.maxreplicas)"\n  backgroundAudit: true # (7). Defaults to "true"\n  namespaceSelector: # (6)\n    matchLabels:\n      environment: test\n'})}),"\n",(0,t.jsx)(i.p,{children:"Notice the commented numbers on both the YAML manifests. Let's expand on them:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"#"}),(0,t.jsx)(i.th,{children:"VAP field"}),(0,t.jsxs)(i.th,{children:[(0,t.jsx)(i.code,{children:"cel-policy"})," field"]}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"1"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"failurePolicy"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"failurePolicy"})}),(0,t.jsx)(i.td,{children:"Both inform on behaviour when the policy server errors. Not to confuse with (5)."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"2"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"matchConstraints"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"rules"})}),(0,t.jsxs)(i.td,{children:["Both accept the same ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#rulewithoperations-v1-admissionregistration",children:"RuleWithOperations"})," that informs on what kind of Resource the policy applies to."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"3"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"variables"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"settings.variables"})}),(0,t.jsxs)(i.td,{children:["In Kubewarden's ",(0,t.jsx)(i.code,{children:"cel-policy"}),", expressions that define variables are separated into ",(0,t.jsx)(i.code,{children:"settings.variables"}),". Apart from that, they are equivalent."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"4"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"validations"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"settings.validations"})}),(0,t.jsxs)(i.td,{children:["In Kubewarden's ",(0,t.jsx)(i.code,{children:"cel-policy"}),", expressions that define validations are separated into ",(0,t.jsx)(i.code,{children:"settings.validations"}),". Apart from that, they are equivalent."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"5"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"validationActions"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"mode"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"mode"})," has as options ",(0,t.jsx)(i.code,{children:"protect"})," and ",(0,t.jsx)(i.code,{children:"monitor"}),". Auditing is more full featured in Kubewarden, see (7)."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"6"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"matchResources"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"namespaceSelector"}),", ",(0,t.jsx)(i.code,{children:"objectSelector"})]}),(0,t.jsxs)(i.td,{children:["Define ways to constraint using Selectors. Kubewarden's policies have them as ",(0,t.jsx)(i.code,{children:"namespaceSelector"})," and ",(0,t.jsx)(i.code,{children:"objectSelector"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"7"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"auditAnnotations"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"backgroundAudit"}),", annotations"]}),(0,t.jsxs)(i.td,{children:["These Kubewarden fields set the policy usage in ",(0,t.jsx)(i.a,{href:"../../../explanations/audit-scanner",children:"Audit Scanner"}),", and its category and severity for PolicyReports."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"matchConditions"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"matchConditions"})}),(0,t.jsxs)(i.td,{children:["Kubewarden's policies have ",(0,t.jsx)(i.code,{children:"matchConditions"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"---"})}),(0,t.jsx)(i.td,{children:"Kubewarden-only features"}),(0,t.jsx)(i.td,{children:"For other features, see the rest of tutorial CEL examples."})]})]})]}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"kwctl"})," tool can be used to migrate a VAP policy to Kubewarden."]}),(0,t.jsxs)(i.p,{children:["This is described inside of ",(0,t.jsx)(i.a,{href:"../../../howtos/vap-migration",children:"this howto"}),"."]})]}),"\n",(0,t.jsx)(i.h3,{id:"yet-to-be-implemented-equivalences",children:"Yet to be implemented equivalences"}),"\n",(0,t.jsx)(i.p,{children:"There are some VAP features that aren't yet implemented. If look forward to them, please get in contact with us. These are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["VAP ",(0,t.jsx)(i.a,{href:"https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz",children:"authorizer library"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["VAP ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/#parameter-resources",children:"Parameters"}),"\n(ValidatingAdmissionPolicy ",(0,t.jsx)(i.code,{children:"spec.paramKind"})," & ValidatingAdmissionPolicyBinding ",(0,t.jsx)(i.code,{children:"spec.paramRef"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["VAP ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/labels-annotations-taints/audit-annotations/",children:"Audit Annotations"}),"\n(ValidatingAdmissionPolicy ",(0,t.jsx)(i.code,{children:"spec.auditAnnotations"})," when ValidatingAdmissionPolicyBinding ",(0,t.jsx)(i.code,{children:"spec.validationActions"}),' is set to "Audit").\nThis is covered by Kubewarden\'s ',(0,t.jsx)(i.a,{href:"../../../explanations/audit-scanner",children:"Audit Scanner"})," and PolicyReports, which allows\nto audit resources already in the cluster."]}),"\n",(0,t.jsxs)(i.li,{children:["CEL ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/using-api/cel/#resource-constraints",children:"resource constraints and estimated cost\nlimit"}),".\nThis is partially covered by Kubewarden's general ",(0,t.jsx)(i.a,{href:"../../../reference/policy-evaluation-timeout",children:"policy timeout\nprotection"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"applying-the-policy",children:"Applying the policy"}),"\n",(0,t.jsx)(i.p,{children:"As normal, we can deploy our policy by instantiating its manifest:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-console",children:"$ kubectl apply -f ./cel-policy-example.yaml\n"})}),"\n",(0,t.jsx)(i.p,{children:"And then test it by instantiating a deployment:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-console",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: test\n  labels:\n    environment: test\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: test\nspec:\n  replicas: 6\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\nEOF\n\nnamespace/test created\nError from server: error when creating "STDIN":\n  admission webhook "clusterwide-cel-policy-replica-example.kubewarden.admission" denied the request:\n  The number of replicas must be less than or equal to 5\n'})})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(96540);const t={},a=s.createContext(t);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);