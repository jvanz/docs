"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7572],{62710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"howtos/audit-scanner","title":"Audit Scanner installation","description":"How-to do an Audit Scanner installation.","source":"@site/versioned_docs/version-1.12/howtos/audit-scanner.md","sourceDirName":"howtos","slug":"/howtos/audit-scanner","permalink":"/1.12/howtos/audit-scanner","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.12/howtos/audit-scanner.md","tags":[],"version":"1.12","lastUpdatedAt":1734954129000,"sidebarPosition":70,"frontMatter":{"sidebar_label":"Audit Scanner installation","sidebar_position":70,"title":"Audit Scanner installation","description":"How-to do an Audit Scanner installation.","keywords":["kubewarden","kubernetes","audit scanner"],"doc-persona":["kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["howto","audit-scanner-installation"]},"sidebar":"docs","previous":{"title":"Raw policies","permalink":"/1.12/howtos/raw-policies"},"next":{"title":"Using Custom CAs","permalink":"/1.12/howtos/policy-servers/custom-cas"}}');var o=t(74848),i=t(28453);const a={sidebar_label:"Audit Scanner installation",sidebar_position:70,title:"Audit Scanner installation",description:"How-to do an Audit Scanner installation.",keywords:["kubewarden","kubernetes","audit scanner"],"doc-persona":["kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["howto","audit-scanner-installation"]},s=void 0,l={},c=[{value:"Installation",id:"installation",level:2},{value:"Optional: Installation of Policy Reporter UI",id:"optional-installation-of-policy-reporter-ui",level:2},{value:"Ingress",id:"ingress",level:4},{value:"Port-forwarding",id:"port-forwarding",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/audit-scanner"})}),"\n",(0,o.jsxs)(n.p,{children:["Beginning with version ",(0,o.jsx)(n.code,{children:"v1.7.0"}),', Kubewarden has a new feature called "Audit Scanner".\nA new component, called "audit-scanner", constantly checks the resources declared in the\ncluster, flagging the ones that do not adhere with the deployed Kubewarden policies.']}),"\n",(0,o.jsx)(n.p,{children:"Policies evolve over the time: new ones are deployed and the existing ones can be\nupdated, both in terms of version and configuration settings.\nThis can lead to situations where resources already inside of the cluster\nare no longer compliant."}),"\n",(0,o.jsx)(n.p,{children:"The audit scanner feature provides Kubernetes administrators\nwith a tool to consistently verify the compliance state of their clusters."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["The audit scanner component is available since Kubewarden ",(0,o.jsx)(n.code,{children:"v1.7.0"}),". Therefore,\nmake sure you are installing the Helm chart with app version ",(0,o.jsx)(n.code,{children:"v1.7.0"})," or\nhigher."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install the ",(0,o.jsx)(n.code,{children:"kubewarden-crds"})," Helm chart. The chart install the needed\n",(0,o.jsx)(n.code,{children:"PolicyReport"})," CRDs by default."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"helm install kubewarden-crds kubewarden/kubewarden-crds\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["To store the results of policy reports, you need to have the PolicyReport\nCustom Resource Definitions (CRDs) available. If the necessary\nPolicyReport CRDs are already in the cluster, you cannot install them\nusing the kubewarden-crds chart. In such case, you can disable the\ninstallation of PolicyReport CRDs by setting ",(0,o.jsx)(n.code,{children:"installPolicyReportCRDs"})," to\n",(0,o.jsx)(n.code,{children:"false"})," in the chart. This means that the Kubewarden stack will not manage\nthose CRDs, and the responsibility will be with the administrator."]}),(0,o.jsxs)(n.p,{children:["See more info about the CRDs at the ",(0,o.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/wg-policy-prototypes",children:"policy work group\nrepository"})]})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install the ",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," Helm chart."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"helm install kubewarden-controller kubewarden/kubewarden-controller\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The audit scanner is enabled by default. If you want to disable it, set the\n",(0,o.jsx)(n.code,{children:"auditScanner.enable=false"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["For more information about the installation of Kubewarden see the ",(0,o.jsx)(n.a,{href:"/1.12/quick-start",children:"Quick Start guide"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By default, the Audit Scanner is implemented as a\n",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs",children:"Cronjob"}),"\nthat will be triggered every 60 minutes. You can adjust this and other audit\nscanner settings by changing the kubewarden-controller chart\n",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/helm-charts/blob/main/charts/kubewarden-controller/values.yaml",children:"values.yaml"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"../explanations/audit-scanner",children:"here"})," more information about the Audit\nScanner."]}),"\n",(0,o.jsx)(n.h2,{id:"optional-installation-of-policy-reporter-ui",children:"Optional: Installation of Policy Reporter UI"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," chart comes with a subchart of the ",(0,o.jsx)(n.a,{href:"https://kyverno.github.io/policy-reporter",children:"Policy Reporter"}),".\nIt is disabled by default, and can be enabled by setting ",(0,o.jsx)(n.code,{children:"auditScanner.policyReporter=true"}),".\nThe values of the Policy Reporter subchart are exposed under the ",(0,o.jsx)(n.code,{children:"policyReporter"})," key of\nthe ",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," values."]}),"\n",(0,o.jsxs)(n.p,{children:["This will install only part of the Policy Reporter upstream chart, the UI, which provides a visualization\nof the PolicyReports and ClusterPolicyReports in cluster.\nSee ",(0,o.jsx)(n.a,{href:"../explanations/audit-scanner",children:"here"})," more information about the Policy Reporter UI."]}),"\n",(0,o.jsxs)(n.p,{children:["By default, the Policy Reporter UI is only exposed as a ClusterIP service with\nname ",(0,o.jsx)(n.code,{children:"kubewarden-controller-ui"})," in the namespace where the\n",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," chart was installed."]}),"\n",(0,o.jsx)(n.h4,{id:"ingress",children:"Ingress"}),"\n",(0,o.jsxs)(n.p,{children:["Users can provide their own Ingress configuration, or enable an Ingress via the subchart configuration (see the ",(0,o.jsx)(n.code,{children:"ingress"}),"\nconfig of the UI subchart\n",(0,o.jsx)(n.a,{href:"https://github.com/kyverno/policy-reporter/blob/policy-reporter-2.19.4/charts/policy-reporter/charts/ui/values.yaml#L172-L189",children:"here"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"See this example of an Ingress configuration via the subchart:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'auditScanner:\n  policyReporter: true\npolicy-reporter: # subchart values settings\n  ui:\n    enabled: true\n    ingress:\n      enabled: true\n      hosts:\n        - host: "*.local" # change this to your appropriate domain\n          paths:\n            - path: /\n              pathType: ImplementationSpecific\n'})}),"\n",(0,o.jsx)(n.h4,{id:"port-forwarding",children:"Port-forwarding"}),"\n",(0,o.jsx)(n.p,{children:"For a quick look or debugging, one can setup a port-forwarding to the service with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl port-forward service/kubewarden-controller-ui 8082:8080 -n kubewarden\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Which will make the Policy Reporter UI available at ",(0,o.jsx)(n.a,{href:"http://localhost:8082",children:"http://localhost:8082"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);