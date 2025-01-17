"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[99706],{46381:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"quick-start","title":"Quick start","description":"Getting started with Kubewarden, installing the Kubewarden stack and taking care of prerequisites and authentication","source":"@site/versioned_docs/version-1.19/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/1.19/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.19/quick-start.md","tags":[],"version":"1.19","lastUpdatedAt":1737080228000,"sidebarPosition":20,"frontMatter":{"sidebar_label":"Quick start","sidebar_position":20,"title":"Quick start","description":"Getting started with Kubewarden, installing the Kubewarden stack and taking care of prerequisites and authentication","keywords":["Kubewarden","installation","quick start","policyserver","clusteradmissionpolicy","admissionpolicy"],"doc-persona":["kubewarden-all"],"doc-type":["tutorial"],"doc-topic":["quick-start"]},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/1.19/"},"next":{"title":"Writing Policies","permalink":"/1.19/tutorials/writing-policies/"}}');var r=i(74848),t=i(28453);const l={sidebar_label:"Quick start",sidebar_position:20,title:"Quick start",description:"Getting started with Kubewarden, installing the Kubewarden stack and taking care of prerequisites and authentication",keywords:["Kubewarden","installation","quick start","policyserver","clusteradmissionpolicy","admissionpolicy"],"doc-persona":["kubewarden-all"],"doc-type":["tutorial"],"doc-topic":["quick-start"]},o=void 0,c={},a=[{value:"Installation",id:"installation",level:2},{value:"Main components",id:"main-components",level:2},{value:"<code>PolicyServer</code>",id:"policyserver",level:3},{value:"ClusterAdmissionPolicy",id:"clusteradmissionpolicy",level:3},{value:"AdmissionPolicy",id:"admissionpolicy",level:3},{value:"Example: Enforce your first policy",id:"example-enforce-your-first-policy",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Wrapping up",id:"wrapping-up",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:i,Head:n}=s;return i||u("Details",!0),n||u("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n,{children:[(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/quick-start"}),(0,r.jsx)("script",{async:!0,src:"https://artifacthub.io/artifacthub-widget.js"})]}),"\n",(0,r.jsx)(s.p,{children:"The Kubewarden stack comprises:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Some ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," resources: this is how policies are defined for Kubernetes clusters"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Some ",(0,r.jsxs)("div",{class:"tooltip",children:["PolicyServer",(0,r.jsxs)("span",{class:"tooltiptext",children:["A PolicyServer validates incoming requests by executing Kubewarden policies against requests. ",(0,r.jsx)(s.a,{href:"glossary#policy-server",children:"Glossary"})]})]})," resources: representing a deployment of a Kubewarden\n",(0,r.jsx)(s.code,{children:"PolicyServer"}),". Your administrator's policies are loaded and evaluated by the Kubewarden\n",(0,r.jsx)(s.code,{children:"PolicyServer"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Some ",(0,r.jsxs)("div",{class:"tooltip",children:["AdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A namespace-wide resource. The policy processes only requests targeting the namespace where the AdmissionPolicy is defined. ",(0,r.jsx)(s.a,{href:"glossary#admission-policy",children:"Glossary"})]})]})," resources: policies for a defined namespace"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["A deployment of a ",(0,r.jsx)(s.code,{children:"kubewarden-controller"}),": this controller monitors the\n",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," resources and interacts with the Kubewarden\n",(0,r.jsxs)("div",{class:"tooltip",children:["PolicyServer",(0,r.jsxs)("span",{class:"tooltiptext",children:["A PolicyServer validates incoming requests by executing Kubewarden policies against requests. ",(0,r.jsx)(s.a,{href:"glossary#policy-server",children:"Glossary"})]})]})," components."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsxs)(s.p,{children:["The Kubernetes Custom Resource Definitions (CRDs) defined by Kubewarden are\ndescribed ",(0,r.jsx)(s.a,{href:"/1.19/reference/CRDs",children:"here"}),"."]}),(0,r.jsx)(s.p,{children:"Furthermore, Kubewarden CRDs mentioned in this tutorial and in the whole\ndocumentation have short names, which are easier to use. These are the short\nnames for all the CRDs:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Resource"}),(0,r.jsx)(s.th,{children:"shortName"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AdmissionPolicies"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"ap"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ClusterAdmissionPolicies"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"cap"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AdmissionPolicyGroups"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"apg"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ClusterAdmissionPolicyGroups"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"capg"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PolicyServers"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"ps"})})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.admonition,{title:"Authentication",type:"info",children:[(0,r.jsxs)(s.p,{children:["Kubewarden policies can be retrieved from the GitHub container registry at ",(0,r.jsx)(s.a,{href:"https://ghcr.io",children:"https://ghcr.io"}),".\nYou need authentication to use the repository with the Kubewarden CLI, a ",(0,r.jsx)(s.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens",children:"GitHub personal access token"})," (PAT).\nTheir documentation guides you through creating one if you haven't already done so.\nThen you authenticate with a command like:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"echo $PAT | docker login ghcr.io --username <my-gh-username> --password-stdin\n"})})]}),"\n",(0,r.jsxs)(s.p,{children:["Deploy the Kubewarden stack using ",(0,r.jsx)(s.code,{children:"helm"})," charts as follows:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm repo add kubewarden https://charts.kubewarden.io\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm repo update kubewarden\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Install the following Helm charts inside the ",(0,r.jsx)(s.code,{children:"kubewarden"})," namespace in your Kubernetes cluster:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"kubewarden-crds"}),", which registers the ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]}),",\n",(0,r.jsxs)("div",{class:"tooltip",children:["AdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A namespace-wide resource. The policy processes only requests targeting the namespace where the AdmissionPolicy is defined. ",(0,r.jsx)(s.a,{href:"glossary#admission-policy",children:"Glossary"})]})]})," and ",(0,r.jsxs)("div",{class:"tooltip",children:["PolicyServer",(0,r.jsxs)("span",{class:"tooltiptext",children:["A PolicyServer validates incoming requests by executing Kubewarden policies against requests. ",(0,r.jsx)(s.a,{href:"glossary#policy-server",children:"Glossary"})]})]})," Custom Resource Definitions. Also,\nthe ",(0,r.jsxs)("div",{class:"tooltip",children:["PolicyReport",(0,r.jsxs)("span",{class:"tooltiptext",children:["A PolicyReport and a ClusterPolicyReport store results of policy scans. Which one is used depends on the scope of the resource. ",(0,r.jsx)(s.a,{href:"glossary#policyreport",children:"Glossary"})]})]})," Custom Resource Definitions used by the audit scanner."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"kubewarden-controller"}),", which installs the Kubewarden controller and the\naudit scanner"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["If you need to disable the audit scanner component check the audit\nscanner installation ",(0,r.jsx)(s.a,{href:"../howtos/audit-scanner",children:"documentation page"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"kubewarden-defaults"}),", which will create a ",(0,r.jsx)(s.code,{children:"PolicyServer"})," resource named ",(0,r.jsx)(s.code,{children:"default"}),". It can also install a set of\nrecommended policies to secure your cluster by enforcing some well known best practices."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm install --wait -n kubewarden --create-namespace kubewarden-crds kubewarden/kubewarden-crds\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm install --wait -n kubewarden kubewarden-controller kubewarden/kubewarden-controller\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm install --wait -n kubewarden kubewarden-defaults kubewarden/kubewarden-defaults\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"caution",children:[(0,r.jsxs)(s.p,{children:["Since ",(0,r.jsx)(s.a,{href:"https://github.com/kubewarden/kubewarden-controller/releases/tag/v0.4.0",children:(0,r.jsx)(s.code,{children:"v0.4.0"})}),", a ",(0,r.jsx)(s.code,{children:"PolicyServer"})," resource named ",(0,r.jsx)(s.code,{children:"default"})," will not be created using the ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," chart.\nNow a Helm chart called ",(0,r.jsx)(s.code,{children:"kubewarden-defaults"}),", installs\nthe default policy server."]}),(0,r.jsxs)(s.p,{children:["This means that if you aren't using the latest version of the ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," and are trying to upgrade or delete,\nyour default policy server won't be upgraded or deleted.\nSo, you might run into issues if you try to install the ",(0,r.jsx)(s.code,{children:"kubewarden-defaults"})," with some conflicting information, for example, the same policy server name.\nTo be able to take advantage of future upgrades in the ",(0,r.jsx)(s.code,{children:"kubewarden-defaults"})," Helm chart remove the\nexisting ",(0,r.jsx)(s.code,{children:"PolicyServer"})," resource created by the ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," before installing the new chart.\nNow you can update your policy server using Helm upgrades without resource conflicts.\nWhen you remove the ",(0,r.jsx)(s.code,{children:"PolicyServer"}),", all the policies bound to it will be removed as well."]})]}),"\n",(0,r.jsxs)(s.p,{children:["The default configuration values are sufficient for most deployments. All options are documented ",(0,r.jsx)(s.a,{href:"https://charts.kubewarden.io/#configuration",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"main-components",children:"Main components"}),"\n",(0,r.jsx)(s.p,{children:"Kubewarden has three main components which you will interact with:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsxs)("div",{class:"tooltip",children:["PolicyServer",(0,r.jsxs)("span",{class:"tooltiptext",children:["A PolicyServer validates incoming requests by executing Kubewarden policies against requests. ",(0,r.jsx)(s.a,{href:"glossary#policy-server",children:"Glossary"})]})]})]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsxs)("div",{class:"tooltip",children:["AdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A namespace-wide resource. The policy processes only requests targeting the namespace where the AdmissionPolicy is defined. ",(0,r.jsx)(s.a,{href:"glossary#admission-policy",children:"Glossary"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"policyserver",children:(0,r.jsx)(s.code,{children:"PolicyServer"})}),"\n",(0,r.jsxs)(s.p,{children:["A Kubewarden ",(0,r.jsx)(s.code,{children:"PolicyServer"})," is managed by the ",(0,r.jsx)(s.code,{children:"kubewarden-controller"}),".\nMultiple ",(0,r.jsxs)("div",{class:"tooltip",children:["PolicyServer",(0,r.jsxs)("span",{class:"tooltiptext",children:["A PolicyServer validates incoming requests by executing Kubewarden policies against requests. ",(0,r.jsx)(s.a,{href:"glossary#policy-server",children:"Glossary"})]})]}),"s can be deployed in the same Kubernetes cluster."]}),"\n",(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.code,{children:"PolicyServer"})," validates incoming requests by executing Kubewarden policies against them."]}),"\n",(0,r.jsxs)(s.p,{children:["This is the default ",(0,r.jsx)(s.code,{children:"PolicyServer"})," configuration:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: reserved-instance-for-tenant-a\nspec:\n  image: ghcr.io/kubewarden/policy-server:v1.3.0\n  replicas: 2\n  serviceAccountName: ~\n  env:\n    - name: KUBEWARDEN_LOG_LEVEL\n      value: debug\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Check the ",(0,r.jsxs)(s.a,{href:"https://github.com/kubewarden/policy-server/pkgs/container/policy-server",children:["latest released ",(0,r.jsx)(s.code,{children:"PolicyServer"})," version"]})," and change the tag to match."]})}),"\n",(0,r.jsxs)(s.p,{children:["Overview of the attributes of the ",(0,r.jsx)(s.code,{children:"PolicyServer"})," resource:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(s.th,{children:"Placeholder"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"image"})}),(0,r.jsx)(s.td,{children:"The name of the container image"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"replicas"})}),(0,r.jsx)(s.td,{children:"The number of desired instances"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"serviceAccountName"})}),(0,r.jsxs)(s.td,{children:["The name of the ",(0,r.jsx)(s.code,{children:"ServiceAccount"})," to use for the ",(0,r.jsx)(s.code,{children:"PolicyServer"})," deployment. If no value is provided, the default ",(0,r.jsx)(s.code,{children:"ServiceAccount"})," from the namespace, where the ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," is installed, will be used"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"env"})}),(0,r.jsx)(s.td,{children:"The list of environment variables"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"annotations"})}),(0,r.jsx)(s.td,{children:"The list of annotations"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Changing any of these attributes causes a ",(0,r.jsx)(s.code,{children:"PolicyServer"})," deployment with the new configuration."]}),"\n",(0,r.jsx)(s.h3,{id:"clusteradmissionpolicy",children:"ClusterAdmissionPolicy"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," resource is the core of the Kubewarden stack. It defines how policies evaluate requests."]}),"\n",(0,r.jsxs)(s.p,{children:["Enforcing policies is the most common operation which a Kubernetes administrator performs.\nYou can declare as many policies as you want, each targets one or more Kubernetes resources (that is, ",(0,r.jsx)(s.code,{children:"pods"}),", ",(0,r.jsx)(s.code,{children:"Custom Resource"})," and others).\nYou also specify the type of operations applied to targeted resources.\nThe operations available are ",(0,r.jsx)(s.code,{children:"CREATE"}),", ",(0,r.jsx)(s.code,{children:"UPDATE"}),", ",(0,r.jsx)(s.code,{children:"DELETE"})," and ",(0,r.jsx)(s.code,{children:"CONNECT"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Default ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," configuration:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-capabilities\nspec:\n  policyServer: reserved-instance-for-tenant-a\n  module: registry://ghcr.io/kubewarden/policies/psp-capabilities:v0.1.9\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["pods"]\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: true\n  settings:\n    allowed_capabilities:\n      - CHOWN\n    required_drop_capabilities:\n      - NET_ADMIN\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Overview of the attributes of the ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," resource:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(s.th,{children:"Placeholder"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"policy-server"})}),(0,r.jsxs)(s.td,{children:["Identifies an existing ",(0,r.jsx)(s.code,{children:"PolicyServer"})," object. The policy will be served only by this ",(0,r.jsx)(s.code,{children:"PolicyServer"})," instance. A ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," that doesn't have an explicit ",(0,r.jsx)(s.code,{children:"PolicyServer"}),", will be served by the one named ",(0,r.jsx)(s.code,{children:"default"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"module"})}),(0,r.jsx)(s.td,{children:"The location of the Kubewarden policy. The following schemes are allowed:"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["- ",(0,r.jsx)(s.code,{children:"registry"}),": The policy is downloaded from an ",(0,r.jsx)(s.a,{href:"https://github.com/opencontainers/artifacts",children:"OCI artifacts"})," compliant container registry. Example: ",(0,r.jsx)(s.code,{children:"registry://<OCI registry/policy URL>"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["- ",(0,r.jsx)(s.code,{children:"http"}),", ",(0,r.jsx)(s.code,{children:"https"}),": The policy is downloaded from a regular HTTP(s) server. Example: ",(0,r.jsx)(s.code,{children:"https://<website/policy URL>"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["- ",(0,r.jsx)(s.code,{children:"file"}),": The policy is loaded from a file in the computer file system. Example: ",(0,r.jsx)(s.code,{children:"file:///<policy WASM binary full path>"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"resources"})}),(0,r.jsx)(s.td,{children:"The Kubernetes resources evaluated by the policy"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"operations"})}),(0,r.jsx)(s.td,{children:"What operations for the previously given types should be forwarded to this admission policy by the API server for evaluation."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"mutating"})}),(0,r.jsxs)(s.td,{children:["A boolean value that must be set to ",(0,r.jsx)(s.code,{children:"true"})," for policies that can mutate incoming requests"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"settings"})}),(0,r.jsx)(s.td,{children:"A free-form object that contains the policy configuration values"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"failurePolicy"})}),(0,r.jsx)(s.td,{children:"The action to take if the request evaluated by a policy results in an error. The following options are allowed:"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["- ",(0,r.jsx)(s.code,{children:"Ignore"}),": an error calling the webhook is ignored and the API request is allowed to continue"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["- ",(0,r.jsx)(s.code,{children:"Fail"}),": an error calling the webhook causes the admission to fail and the API request to be rejected"]})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," resources are registered with a ",(0,r.jsx)(s.code,{children:"*"})," webhook ",(0,r.jsx)(s.code,{children:"scope"}),", which means that registered webhooks forward all requests matching the given ",(0,r.jsx)(s.code,{children:"resources"})," and ",(0,r.jsx)(s.code,{children:"operations"})," \u2014 either namespaced or cluster-wide resources."]})}),"\n",(0,r.jsx)(s.h3,{id:"admissionpolicy",children:"AdmissionPolicy"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("div",{class:"tooltip",children:["AdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A namespace-wide resource. The policy processes only requests targeting the namespace where the AdmissionPolicy is defined. ",(0,r.jsx)(s.a,{href:"glossary#admission-policy",children:"Glossary"})]})]})," is a namespace-wide resource.\nThe policy processes only the requests that are targeting the Namespace where the ",(0,r.jsxs)("div",{class:"tooltip",children:["AdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A namespace-wide resource. The policy processes only requests targeting the namespace where the AdmissionPolicy is defined. ",(0,r.jsx)(s.a,{href:"glossary#admission-policy",children:"Glossary"})]})]})," is defined.\nOther than that, there are no functional differences between the ",(0,r.jsxs)("div",{class:"tooltip",children:["AdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A namespace-wide resource. The policy processes only requests targeting the namespace where the AdmissionPolicy is defined. ",(0,r.jsx)(s.a,{href:"glossary#admission-policy",children:"Glossary"})]})]})," and ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," resources."]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("div",{class:"tooltip",children:["AdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A namespace-wide resource. The policy processes only requests targeting the namespace where the AdmissionPolicy is defined. ",(0,r.jsx)(s.a,{href:"glossary#admission-policy",children:"Glossary"})]})]})," requires Kubernetes 1.21.0 or greater. This is because we're using the ",(0,r.jsx)(s.code,{children:"kubernetes.io/metadata.name"})," label, which was introduced in Kubernetes 1.21.0"]})}),"\n",(0,r.jsxs)(s.p,{children:["The complete documentation of these Custom Resources can be found ",(0,r.jsx)(s.a,{href:"https://github.com/kubewarden/kubewarden-controller/blob/main/docs/crds/README.asciidoc",children:"here"})," or on ",(0,r.jsx)(s.a,{href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller",children:"docs.crds.dev"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"example-enforce-your-first-policy",children:"Example: Enforce your first policy"}),"\n",(0,r.jsxs)(s.p,{children:["We will use the ",(0,r.jsx)(s.a,{href:"https://github.com/kubewarden/pod-privileged-policy",children:(0,r.jsx)(s.code,{children:"pod-privileged"})})," policy.\nWe want to prevent the creation of privileged containers inside our Kubernetes cluster by enforcing this policy."]}),"\n",(0,r.jsxs)(s.p,{children:["Let's define a ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," to do that:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: privileged-pods\nspec:\n  module: registry://ghcr.io/kubewarden/policies/pod-privileged:v0.2.2\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\nEOF\n'})}),"\n",(0,r.jsx)(s.p,{children:"This produces the following output:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"clusteradmissionpolicy.policies.kubewarden.io/privileged-pods created\n"})}),"\n",(0,r.jsxs)(s.p,{children:["When a ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," is defined, the status is set to ",(0,r.jsx)(s.code,{children:"pending"}),", and it will force a rollout of the targeted ",(0,r.jsx)(s.code,{children:"PolicyServer"}),".\nIn our example, it's the ",(0,r.jsx)(s.code,{children:"PolicyServer"})," named ",(0,r.jsx)(s.code,{children:"default"}),". You can monitor the rollout by running the following command:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"kubectl get clusteradmissionpolicy.policies.kubewarden.io/privileged-pods\n"})}),"\n",(0,r.jsx)(s.p,{children:"You should see the following output:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"NAME              POLICY SERVER   MUTATING   STATUS\nprivileged-pods   default         false      pending\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Once the new policy is ready to be served, the ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," will register a ",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#validatingwebhookconfiguration-v1-admissionregistration-k8s-io",children:"ValidatingWebhookConfiguration"})," object."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," status will be set to ",(0,r.jsx)(s.code,{children:"active"})," once the Deployment is done for every ",(0,r.jsx)(s.code,{children:"PolicyServer"})," instance.\nShow ",(0,r.jsxs)("div",{class:"tooltip",children:["ValidatingWebhookConfiguration",(0,r.jsxs)("span",{class:"tooltiptext",children:["A Kubernetes resource created by the Kubewarden controller to let Kubernetes know where to send a ",(0,r.jsx)(s.code,{children:"AdmissionReview"}),". ",(0,r.jsx)(s.a,{href:"glossary#validatingwebhookconfiguration",children:"Glossary"})]})]}),"s with the following command:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"kubectl get validatingwebhookconfigurations.admissionregistration.k8s.io -l kubewarden\n"})}),"\n",(0,r.jsx)(s.p,{children:"You should see the following output:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"NAME                          WEBHOOKS   AGE\nclusterwide-privileged-pods   1          9s\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Once the ",(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," is active and the\n",(0,r.jsxs)("div",{class:"tooltip",children:["ValidatingWebhookConfiguration",(0,r.jsxs)("span",{class:"tooltiptext",children:["A Kubernetes resource created by the Kubewarden controller to let Kubernetes know where to send a ",(0,r.jsx)(s.code,{children:"AdmissionReview"}),". ",(0,r.jsx)(s.a,{href:"glossary#validatingwebhookconfiguration",children:"Glossary"})]})]})," is registered, you can test the policy."]}),"\n",(0,r.jsxs)(s.p,{children:["First, let's create a Pod with a Container ",(0,r.jsx)(s.em,{children:"not"})," in ",(0,r.jsx)(s.code,{children:"privileged"})," mode:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: unprivileged-pod\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\nEOF\n"})}),"\n",(0,r.jsx)(s.p,{children:"This produces the following output:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"pod/unprivileged-pod created\n"})}),"\n",(0,r.jsx)(s.p,{children:"The Pod is successfully created."}),"\n",(0,r.jsxs)(s.p,{children:["Now, let's create a Pod with at least one Container ",(0,r.jsx)(s.code,{children:"privileged"})," flag:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: privileged-pod\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n      securityContext:\n          privileged: true\nEOF\n"})}),"\n",(0,r.jsx)(s.p,{children:"The creation of the Pod has been denied by the policy and you should see the following message:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:'Error from server: error when creating "STDIN": admission webhook "clusterwide-privileged-pods.kubewarden.admission" denied the request: Privileged container is not allowed\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Both examples didn't define a ",(0,r.jsx)(s.code,{children:"namespace"}),", which means the ",(0,r.jsx)(s.code,{children:"default"})," namespace was the target.\nHowever, as you could see in the second example, the policy is still applied.\nAs stated above, this is due to the scope being cluster-wide and not targeting a specific namespace."]})}),"\n",(0,r.jsx)(s.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,r.jsxs)(s.p,{children:["You can remove the resources created by uninstalling the ",(0,r.jsx)(s.code,{children:"helm"})," charts as follows:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm uninstall --namespace kubewarden kubewarden-defaults\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm uninstall --namespace kubewarden kubewarden-controller\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"helm uninstall --namespace kubewarden kubewarden-crds\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Once the ",(0,r.jsx)(s.code,{children:"helm"})," charts have been uninstalled, remove the Kubernetes namespace that was used to deploy the Kubewarden stack:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"kubectl delete namespace kubewarden\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["Kubewarden contains a helm pre-delete hook that removes all ",(0,r.jsx)(s.code,{children:"PolicyServer"}),"s and ",(0,r.jsx)(s.code,{children:"kubewarden-controller"}),"s.\nThen the ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," will delete all resources, so it's important that ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," is running when helm uninstall is executed."]})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("div",{class:"tooltip",children:["ValidatingWebhookConfiguration",(0,r.jsxs)("span",{class:"tooltiptext",children:["A Kubernetes resource created by the Kubewarden controller to let Kubernetes know where to send a ",(0,r.jsx)(s.code,{children:"AdmissionReview"}),". ",(0,r.jsx)(s.a,{href:"glossary#validatingwebhookconfiguration",children:"Glossary"})]})]}),"s and ",(0,r.jsxs)("div",{class:"tooltip",children:["MutatingWebhookConfiguration",(0,r.jsxs)("span",{class:"tooltiptext",children:["A Kubernetes resource created by the Kubewarden controller to let Kubernetes know where to send an ",(0,r.jsx)(s.code,{children:"AdmissionReview"}),". ",(0,r.jsx)(s.a,{href:"glossary#mutatingwebhookconfiguration",children:"Glossary"})]})]}),"s created by kubewarden should be deleted, this can be checked with:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:'kubectl get validatingwebhookconfigurations.admissionregistration.k8s.io -l "kubewarden"\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:'kubectl get mutatingwebhookconfigurations.admissionregistration.k8s.io -l "kubewarden"\n'})}),"\n",(0,r.jsx)(s.p,{children:"If these resources are not automatically removed, remove them manually by using the following command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:'kubectl delete -l "kubewarden" validatingwebhookconfigurations.admissionregistration.k8s.io\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:'kubectl delete -l "kubewarden" mutatingwebhookconfigurations.admissionregistration.k8s.io\n'})}),"\n",(0,r.jsx)(s.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("div",{class:"tooltip",children:["ClusterAdmissionPolicy",(0,r.jsxs)("span",{class:"tooltiptext",children:["A ClusterAdmissionPolicy defines how policies evaluate requests. ",(0,r.jsx)(s.a,{href:"glossary#cluster-admission-policy",children:"Glossary"})]})]})," is the core resource that a cluster operator has to manage. The ",(0,r.jsx)(s.code,{children:"kubewarden-controller"})," module automatically takes care of the configuration for the rest of the resources needed to run the policies."]}),"\n",(0,r.jsx)(s.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,r.jsxs)(s.p,{children:["Now, you are ready to deploy Kubewarden! Have a look at the policies on\n",(0,r.jsx)(s.a,{href:"https://artifacthub.io/packages/search?kind=13",children:"artifacthub.io"}),", on\n",(0,r.jsx)(s.a,{href:"https://github.com/topics/kubewarden-policy",children:"GitHub"}),", or reuse existing Rego\npolicies as shown in the ",(0,r.jsx)(s.a,{href:"/1.19/tutorials/writing-policies/rego/intro-rego",children:"following\nchapters"}),"."]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Full list of available policies on ArtifactHub"}),(0,r.jsx)("div",{class:"artifacthub-widget-group","data-url":"https://artifacthub.io/packages/search?kind=13&sort=relevance&page=1","data-theme":"light","data-header":"false","data-stars":"false","data-color":"#fe7c3f","data-responsive":"true","data-loading":"true"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>o});var n=i(96540);const r={},t=n.createContext(r);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);