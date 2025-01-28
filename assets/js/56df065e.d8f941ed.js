"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[38044],{92450:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"howtos/telemetry/tracing-qs","title":"Tracing quickstart","description":"A tracing quickstart for Kubewarden.","source":"@site/docs/howtos/telemetry/20-tracing-qs.md","sourceDirName":"howtos/telemetry","slug":"/howtos/telemetry/tracing-qs","permalink":"/next/howtos/telemetry/tracing-qs","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/howtos/telemetry/20-tracing-qs.md","tags":[],"version":"current","lastUpdatedAt":1738068799000,"sidebarPosition":20,"frontMatter":{"sidebar_label":"Tracing","title":"Tracing quickstart","description":"A tracing quickstart for Kubewarden.","keywords":["kubewarden","kubernetes","tracing","quickstart"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","telemetry","tracing","quick-start"]},"sidebar":"docs","previous":{"title":"Open Telemetry","permalink":"/next/howtos/telemetry/opentelemetry-qs"},"next":{"title":"Metrics","permalink":"/next/howtos/telemetry/metrics-qs"}}');var r=a(74848),s=a(28453);const o={sidebar_label:"Tracing",title:"Tracing quickstart",description:"A tracing quickstart for Kubewarden.",keywords:["kubewarden","kubernetes","tracing","quickstart"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","telemetry","tracing","quick-start"]},i=void 0,c={},l=[{value:"Install Jaeger",id:"install-jaeger",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2},{value:"Enforcing a policy",id:"enforcing-a-policy",level:2},{value:"Exploring the Jaeger UI",id:"exploring-the-jaeger-ui",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/telemetry/tracing-qs"})}),"\n",(0,r.jsx)(n.p,{children:"This section shows how to enable tracing support for\nPolicy Server."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Before continuing, make sure you completed the previous\n",(0,r.jsx)(n.a,{href:"/next/howtos/telemetry/opentelemetry-qs#install-opentelemetry",children:"OpenTelemetry"})," section\nof this documentation. Its required for this section to work correctly."]})}),"\n",(0,r.jsx)(n.p,{children:"Tracing lets you collect fine grained details about policy evaluations. It can\nbe a useful tool for debugging issues in your Kubewarden deployment and policies."}),"\n",(0,r.jsxs)(n.p,{children:["You use ",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"})," -- to receive, store and visualize trace\nevents."]}),"\n",(0,r.jsx)(n.h2,{id:"install-jaeger",children:"Install Jaeger"}),"\n",(0,r.jsxs)(n.p,{children:["You use the ",(0,r.jsx)(n.a,{href:"https://github.com/jaegertracing/jaeger-operator",children:"Jaeger Operator"}),"\nto manage the different Jaeger components. You can install the Jaeger Operator using Helm charts."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["At the time of writing (2022-06-21), only specific versions of Jaeger are compatible with\nCert Manager, ",(0,r.jsx)(n.a,{href:"https://github.com/jaegertracing/helm-charts/blob/main/charts/jaeger-operator/COMPATIBILITY.md",children:"see the compatibility chart"}),"."]}),(0,r.jsxs)(n.p,{children:["At time of writing the latest chart version is ",(0,r.jsx)(n.code,{children:"2.49.0"})]})]}),"\n",(0,r.jsx)(n.p,{children:"To install the Helm chart:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm repo add jaegertracing https://jaegertracing.github.io/helm-charts\n\nhelm upgrade -i --wait \\\n  --namespace jaeger \\\n  --create-namespace \\\n  --version 2.49.0 \\\n  jaeger-operator jaegertracing/jaeger-operator \\\n  --set rbac.clusterRole=true\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["This is ",(0,r.jsx)(n.strong,{children:"not suitable for a production deployment"}),".\nYou should consult Jaeger's ",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/docs/latest/operator/",children:"official documentation"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"To create a Jaeger resource:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: my-open-telemetry\n  namespace: jaeger\nspec:\n  ingress:\n    enabled: true\n    annotations:\n      kubernetes.io/ingress.class: nginx\nEOF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After creation of Jaeger Operator resources, you have a\nService under ",(0,r.jsx)(n.code,{children:"my-open-telemetry-collector.jaeger.svc.cluster.local"}),".\nThe Jaeger Query UI is reachable at the following address:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"echo http://`minikube ip`\n"})}),"\n",(0,r.jsx)(n.h2,{id:"install-kubewarden",children:"Install Kubewarden"}),"\n",(0,r.jsx)(n.p,{children:"Now you can proceed to the deployment of Kubewarden in the usual way."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"cert-manager is a requirement of OpenTelemetry, but you have already installed\nit in a previous section of this documentation."})}),"\n",(0,r.jsx)(n.p,{children:"As a first step, you add the Helm repository that contains Kubewarden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm repo add kubewarden https://charts.kubewarden.io\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you install the Custom Resource Definitions (CRDs) defined by\nKubewarden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm install --wait \\\n  --namespace kubewarden \\\n  --create-namespace \\\n  kubewarden-crds kubewarden/kubewarden-crds\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now you can deploy the rest of the Kubewarden stack. The official\n",(0,r.jsx)(n.code,{children:"kubewarden-defaults"})," helm chart creates a PolicyServer named ",(0,r.jsx)(n.code,{children:"default"}),". You\nwant this PolicyServer instance to have tracing enabled."]}),"\n",(0,r.jsxs)(n.p,{children:["To do that, you need to specify extra values for the\n",(0,r.jsx)(n.code,{children:"kubewarden-controller"})," chart. You should create a ",(0,r.jsx)(n.code,{children:"values.yaml"})," file with the\nfollowing contents:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'telemetry:\n  mode: sidecar\n  tracing: True\n  sidecar:\n    tracing:\n      jaeger:\n        endpoint: "my-open-telemetry-collector.jaeger.svc.cluster.local:4317"\n        tls:\n          insecure: true\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"For simplicity, there is no encryption of communication between the\nOpenTelemetry collector and the Jaeger endpoint."}),(0,r.jsxs)(n.p,{children:["Again, this is ",(0,r.jsx)(n.strong,{children:"not suitable for a production deployment"}),".\nConsult Jaeger's ",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/docs/latest/operator/",children:"official documentation"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"Then you can proceed with the installation of the helm charts:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"helm install --wait --namespace kubewarden --create-namespace \\\n  --values values.yaml \\\n  kubewarden-controller kubewarden/kubewarden-controller\n\nhelm install --wait --namespace kubewarden --create-namespace \\\n  kubewarden-defaults kubewarden/kubewarden-defaults\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This creates the ",(0,r.jsx)(n.code,{children:"default"})," instance of ",(0,r.jsx)(n.code,{children:"PolicyServer"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl get policyservers.policies.kubewarden.io\nNAME      AGE\ndefault   3m7s\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Looking closer at the Pod running the PolicyServer instance, you can see it has\ntwo containers in it. The ",(0,r.jsx)(n.code,{children:"policy-server"})," and the OpenTelemetry\nCollector sidecar ",(0,r.jsx)(n.code,{children:"otc-container"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"enforcing-a-policy",children:"Enforcing a policy"}),"\n",(0,r.jsxs)(n.p,{children:["You start by deploying the ",(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/safe-labels-policy",children:"safe-labels"}),"\npolicy."]}),"\n",(0,r.jsxs)(n.p,{children:["You want the policy enforced only in Namespaces that have a\nlabel ",(0,r.jsx)(n.code,{children:"environment"})," with a value of ",(0,r.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To create a Namespace that has such a label:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: team-alpha-prod\n  labels:\n    environment: production\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, let's define a ClusterAdmissionPolicy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: safe-labels\nspec:\n  module: registry://ghcr.io/kubewarden/policies/safe-labels:v0.1.6\n  settings:\n    mandatory_labels:\n    - owner\n  rules:\n    - apiGroups:\n        - apps\n      apiVersions:\n        - v1\n      resources:\n        - deployments\n      operations:\n        - CREATE\n        - UPDATE\n  namespaceSelector:\n    matchExpressions:\n    - key: environment\n      operator: In\n      values: ["production"]\n  mutating: false\nEOF\n'})}),"\n",(0,r.jsx)(n.p,{children:"You need wait for the policy to become active:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl wait --for=condition=PolicyActive clusteradmissionpolicy/safe-labels\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the policy is active, you can try it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: team-alpha-prod\n  labels:\n    owner: octocat\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"The policy permits the creation of this Deployment object as it doesn't violate the policy."}),"\n",(0,r.jsx)(n.p,{children:"The policy blocks this Deployment object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-without-labels\n  namespace: team-alpha-prod\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"The policy isn't enforced in another Namespace."}),"\n",(0,r.jsxs)(n.p,{children:["This command creates a new Namespace called ",(0,r.jsx)(n.code,{children:"team-alpha-staging"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: team-alpha-staging\n  labels:\n    environment: staging\nEOF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As expected, the policy permits the creation of a Deployment resource,\nwithout any labels, in the ",(0,r.jsx)(n.code,{children:"team-alpha-staging"})," Namespace:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-without-labels\n  namespace: team-alpha-staging\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 0\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        ports:\n        - containerPort: 80\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"As expected, this resource is successfully created."}),"\n",(0,r.jsx)(n.h2,{id:"exploring-the-jaeger-ui",children:"Exploring the Jaeger UI"}),"\n",(0,r.jsxs)(n.p,{children:["You can see the trace events have are sent by the PolicyServer instance to Jaeger,\nas there is a new service ",(0,r.jsx)(n.code,{children:"kubewarden-policy-server"})," listed in the UI:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Jaeger dashboard",src:a(36240).A+"",title:"The dashboard of Jaeger",width:"1908",height:"964"})}),"\n",(0,r.jsx)(n.p,{children:"The Jaeger collector is receiving the traces generated by your PolicyServer."}),"\n",(0,r.jsxs)(n.p,{children:["To access the Jaeger UI, you can create an ingress or use\n",(0,r.jsx)(n.code,{children:"kubectl -n jaeger port-forward service/my-open-telemetry-query 16686"}),"\nthen go to ",(0,r.jsx)(n.a,{href:"localhost:16686",children:"localhost:16686"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},36240:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/jaeger-ui-home-2020c53533a53c94e639d648c8c63cb5.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);