"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[28445],{92094:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"howtos/pod-security-admission-with-kubewarden","title":"Using Pod Security Admission with Kubewarden","description":"Using Pod Security Admission with Kubewarden, since the Kubernetes 1.25 release.","source":"@site/versioned_docs/version-1.16/howtos/pod-security-admission-with-kubewarden.md","sourceDirName":"howtos","slug":"/howtos/pod-security-admission-with-kubewarden","permalink":"/1.16/howtos/pod-security-admission-with-kubewarden","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/howtos/pod-security-admission-with-kubewarden.md","tags":[],"version":"1.16","lastUpdatedAt":1736948496000,"sidebarPosition":30,"frontMatter":{"sidebar_label":"Pod Security Admission","sidebar_position":30,"title":"Using Pod Security Admission with Kubewarden","description":"Using Pod Security Admission with Kubewarden, since the Kubernetes 1.25 release.","keywords":["kubewarden","pod security admission","pod security policy","kubernetes"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["pod-security-admission-with-kubewarden"]},"sidebar":"docs","previous":{"title":"PSP migration","permalink":"/1.16/howtos/psp-migration"},"next":{"title":"ValidatingAdmissionPolicy migration","permalink":"/1.16/howtos/vap-migration"}}');var t=s(74848),r=s(28453);const a={sidebar_label:"Pod Security Admission",sidebar_position:30,title:"Using Pod Security Admission with Kubewarden",description:"Using Pod Security Admission with Kubewarden, since the Kubernetes 1.25 release.",keywords:["kubewarden","pod security admission","pod security policy","kubernetes"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["pod-security-admission-with-kubewarden"]},o=void 0,l={},c=[{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s,Head:i}=n;return s||u("Details",!0),i||u("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/pod-security-admission-with-kubewarden"})}),"\n",(0,t.jsxs)(n.p,{children:["Pod Security Policies (PSP) are removed since the Kubernetes 1.25 release.\nThey're replaced by the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/",children:"Pod Security Admission"})," (PSA)."]}),"\n",(0,t.jsx)(n.p,{children:"PSA simplifies securing the Pods in Kubernetes clusters."}),"\n",(0,t.jsxs)(n.p,{children:["PSA has three profiles (described ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/",children:"in Pod Security Standards"}),") for namespaces:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"privileged"}),", providing the widest range of permissions"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"baseline"}),", to prevent new privilege escalations"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"restricted"}),", restricted to harden Pods"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A PSA controller performs actions on violation detection.\nThe actions are: ",(0,t.jsx)(n.code,{children:"enforce"}),", ",(0,t.jsx)(n.code,{children:"audit"}),", and ",(0,t.jsx)(n.code,{children:"warn"}),".\nThey can be configured."]}),"\n",(0,t.jsx)(n.p,{children:"At the time of writing, with Kubernetes 1.28, the PSA controller has  the following limitations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No mutation capabilities"}),"\n",(0,t.jsxs)(n.li,{children:["Higher level objects (like ",(0,t.jsx)(n.code,{children:"Deployment"}),", ",(0,t.jsx)(n.code,{children:"Job"}),") are evaluated only when the ",(0,t.jsx)(n.code,{children:"audit"})," or ",(0,t.jsx)(n.code,{children:"warn"})," modes are enabled"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Kubewarden can be used to ",(0,t.jsx)(n.strong,{children:"integrate"})," a PSA profile to avoid these limitations."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You could use Kubewarden to replace the old PSP configuration as shown in ",(0,t.jsx)(n.a,{href:"/1.16/howtos/psp-migration",children:"PSP migration"}),".\nHowever, the goal of this article is to show how Kubewarden can complement the new PSA."]})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"In this example we're creating a namespace and applying restrictive PSA policies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: my-namespace\n  labels:\n    pod-security.kubernetes.io/enforce: restricted\n    pod-security.kubernetes.io/enforce-version: v1.25\nEOF\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This PSA profile doesn't allow creating containers that run their application as the ",(0,t.jsx)(n.code,{children:"root"})," user.\nWhen defining this container:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.code,{children:"runAsNonRoot"})," attribute must be set to ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.code,{children:"runAsUser"})," one can't be set to ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"So, the following resource won't reach its desired state:"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("code",{children:"kubectl"})," command configuring a resource with the highlighted ",(0,t.jsx)("code",{children:"runAsUser: 0"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n// highlight-next-line\n          runAsUser: 0\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n        ports:\n        - containerPort: 80\nEOF\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"If we check the deployment, we can see the PSA prevents the pod creation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl get deploy -n my-namespace nginx-deployment -o json | jq ".status.conditions[] | select(.reason == \\"FailedCreate\\")"\n{\n  "lastTransitionTime": "2022-10-28T19:09:56Z",\n  "lastUpdateTime": "2022-10-28T19:09:56Z",\n  "message": "pods \\"nginx-deployment-5f98b4db8c-2m96l\\" is forbidden: violates PodSecurity \\"restricted:v1.25\\": runAsUser=0 (container \\"nginx\\" must not set runAsUser=0)",\n  "reason": "FailedCreate",\n  "status": "True",\n  "type": "ReplicaFailure"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can fix this by removing the ",(0,t.jsx)(n.code,{children:"runAsUser: 0"})," from the container definition:"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("code",{children:"kubectl"})," command configuring a resource without ",(0,t.jsx)("code",{children:"runAsUser: 0"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n\n        ports:\n        - containerPort: 80\nEOF\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"Now PSA allows an attempt at pod creation but it still fails."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get pods -n my-namespace\nNAME                                READY   STATUS                       RESTARTS   AGE\nnginx-deployment-57d8568bbb-h4bx7   0/1     CreateContainerConfigError   0          47s\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It's because the container definition didn't specify a user to be used when starting a program inside the container.\nThe default is to run as the root user if this is the case.\nThat's not allowed by the ",(0,t.jsx)(n.code,{children:"runAsNonRoot"})," directive:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl get pods -n my-namespace nginx-deployment-57d8568bbb-h4bx7 -o json | jq ".status.containerStatuses"\n[\n  {\n    "image": "nginx:1.14.2",\n    "imageID": "",\n    "lastState": {},\n    "name": "nginx",\n    "ready": false,\n    "restartCount": 0,\n    "started": false,\n    "state": {\n      "waiting": {\n        "message": "container has runAsNonRoot and image will run as root (pod: \\"nginx-deployment-57d8568bbb-8mvkc_my-namespace(add7bcc5-3d23-43d0-94e9-6e78f887a53f)\\", container: nginx)",\n        "reason": "CreateContainerConfigError"\n      }\n    }\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This is where Kubewarden can help.\nYou can use the ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/kubewarden/user-group-psp/user-group-psp",children:(0,t.jsx)(n.code,{children:"user-group-policy"})})," policy to mutate the Deployment definition.\nThis configures a default user for containers omitting that information."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You need the Kubewarden stack in the Kubernetes cluster for this example.\nSee the ",(0,t.jsx)(n.a,{href:"/1.16/quick-start",children:"QuickStart"})," for more details."]})}),"\n",(0,t.jsx)(n.p,{children:"It's possible to enforce a user ID range, for example, 1000\u20142000 and 4000\u20145000:"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("code",{children:"kubectl"})," command enforcing a user id range"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: user-group-psp\nspec:\n  policyServer: default\n  module: registry://ghcr.io/kubewarden/policies/user-group-psp:latest\n  rules:\n  - apiGroups: ["", "apps"]\n    apiVersions: ["v1"]\n    resources: ["pods", "deployments"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: "MustRunAs"\n      overwrite: false\n// highlight-start\n      ranges:\n        - min: 1000\n          max: 2000\n        - min: 4000\n          max: 5000\n// highlight-end\n    run_as_group:\n      rule: "RunAsAny"\n    supplemental_groups:\n      rule: "RunAsAny"\nEOF\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"Check the policy is active before continuing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get clusteradmissionpolicy.policies.kubewarden.io/user-group-psp\n"})}),"\n",(0,t.jsx)(n.p,{children:"When the policy is active, re-create the deployment:"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("code",{children:"kubectl"})," command recreating the deployment"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl delete deployment -n my-namespace nginx-deployment && \\\nkubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n\n        ports:\n        - containerPort: 80\nEOF\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["Now the deployment is mutated by Kubewarden's policy which allows the Pod to be started.\nThe container defined inside the Pod has a default ",(0,t.jsx)(n.code,{children:"runAsUser"})," value:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl get pods -n my-namespace nginx-deployment-57d8568bbb-nv8fj -o json | jq ".spec.containers[].securityContext"\n{\n  "allowPrivilegeEscalation": false,\n  "capabilities": {\n    "drop": [\n      "ALL"\n    ]\n  },\n  "runAsNonRoot": true,\n  "runAsUser": 1000,\n  "seccompProfile": {\n    "type": "RuntimeDefault"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The Kubewarden integration can do more in this scenario.\nIt can check the value of the ",(0,t.jsx)(n.code,{children:"runAsUser"})," provided."]}),"\n",(0,t.jsx)(n.p,{children:"This resource is rejected by the Kubewarden policy from earlier:"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("code",{children:"kubectl"})," command to show resource rejection"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl apply -n my-namespace -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment2\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: template-nginx\n  template:\n    metadata:\n      labels:\n        app: template-nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        securityContext:\n          runAsNonRoot: true\n// highlight-next-line\n          runAsUser: 7000\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - "ALL"\n          seccompProfile:\n            type: "RuntimeDefault"\n        ports:\n        - containerPort: 80\nEOF\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["It's rejected because the ",(0,t.jsx)(n.code,{children:"runAsUser"})," value is set to ",(0,t.jsx)(n.code,{children:"7000"}),", which is outside the ranges allowed by the policy:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl get deploy -n my-namespace nginx-deployment -o json | jq ".status.conditions[] | select(.reason == \\"FailedCreate\\")"\n{\n  "lastTransitionTime": "2022-10-28T19:22:04Z",\n  "lastUpdateTime": "2022-10-28T19:22:04Z",\n  "message": "admission webhook \\"clusterwide-user-group-psp.kubewarden.admission\\" denied the request: User ID outside defined ranges",\n  "reason": "FailedCreate",\n  "status": "True",\n  "type": "ReplicaFailure"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"PSA provides an easy way to secure Kubernetes clusters.\nThe main goal of PSA is simplicity and it doesn't have the power and flexibility of the earlier PSP."}),"\n",(0,t.jsx)(n.p,{children:"Using Kubewarden together with PSA helps fill this gap."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);