"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[12131],{88936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"howtos/telemetry/opentelemetry-qs","title":"Open Telemetry quick start","description":"An Open Telemetry quickstart for Kubewarden.","source":"@site/versioned_docs/version-1.16/howtos/telemetry/10-opentelemetry-qs.md","sourceDirName":"howtos/telemetry","slug":"/howtos/telemetry/opentelemetry-qs","permalink":"/1.16/howtos/telemetry/opentelemetry-qs","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/howtos/telemetry/10-opentelemetry-qs.md","tags":[],"version":"1.16","lastUpdatedAt":1737080708000,"sidebarPosition":10,"frontMatter":{"sidebar_label":"Open Telemetry","title":"Open Telemetry quick start","description":"An Open Telemetry quickstart for Kubewarden.","keywords":["kubewarden","kubernetes","opentelemetry","open telemetry","quickstart"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","telemetry","opentelemetry","quick-start"]},"sidebar":"docs","previous":{"title":"Tracing","permalink":"/1.16/howtos/ui-extension/tracing"},"next":{"title":"Tracing","permalink":"/1.16/howtos/telemetry/tracing-qs"}}');var i=t(74848),o=t(28453);const s={sidebar_label:"Open Telemetry",title:"Open Telemetry quick start",description:"An Open Telemetry quickstart for Kubewarden.",keywords:["kubewarden","kubernetes","opentelemetry","open telemetry","quickstart"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","telemetry","opentelemetry","quick-start"]},a=void 0,l={},c=[{value:"Setting up a Kubernetes cluster",id:"setting-up-a-kubernetes-cluster",level:2},{value:"Install OpenTelemetry",id:"install-opentelemetry",level:2},{value:"OpenTelemetry integration",id:"opentelemetry-integration",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/telemetry/opentelemetry-qs"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," is a Cloud Native Computing Foundation framework for\nobservability. It enables your microservices to provide metrics, logs and traces."]}),"\n",(0,i.jsx)(n.p,{children:"Kubewarden's components are instrumented with the OpenTelemetry SDK, reporting data to an\nOpenTelemetry collector -- called the agent."}),"\n",(0,i.jsx)(n.p,{children:"By following this documentation, we will integrate OpenTelemetry using the following architecture:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Each Pod of the Kubewarden stack will have a OpenTelemetry sidecar."}),"\n",(0,i.jsx)(n.li,{children:"The sidecar receives tracing and monitoring information from the Kubewarden component via the OpenTelemetry Protocol (OTLP)"}),"\n",(0,i.jsxs)(n.li,{children:["The OpenTelemetry collector will:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Send the trace events to a central Jaeger instance"}),"\n",(0,i.jsx)(n.li,{children:"Expose Prometheus metrics on a specific port"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the other deployment modes, please refer to the ",(0,i.jsx)(n.a,{href:"https://opentelemetry.io/docs/",children:"OpenTelemetry official\ndocumentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Let's first deploy OpenTelemetry in a Kubernetes cluster, so we can reuse it in the next sections\nthat will address specifically tracing and metrics."}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-a-kubernetes-cluster",children:"Setting up a Kubernetes cluster"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This section gives step-by-step instructions to create a\nKubernetes cluster with an ingress controller enabled."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to skip this section if you already have a Kubernetes\ncluster where you can define Ingress resources."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We are going to create a testing Kubernetes cluster using ",(0,i.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/",children:"minikube"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["minikube has many backends, in this case we will use the\n",(0,i.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/drivers/kvm2/",children:"kvm2"})," driver\nwhich relies on libvirt."]}),"\n",(0,i.jsxs)(n.p,{children:["Assuming ",(0,i.jsx)(n.code,{children:"libvirtd"})," is properly running on your machine, issue the\nfollowing command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"minikube start --driver=kvm2\n"})}),"\n",(0,i.jsx)(n.p,{children:"The command will produce an output similar to the following one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'$ minikube start --driver=kvm2\n\ud83d\ude04  minikube v1.23.2 on Opensuse-Leap 15.3\n\u2728  Using the kvm2 driver based on user configuration\n\ud83d\udc4d  Starting control plane node minikube in cluster minikube\n\ud83d\udd25  Creating kvm2 VM (CPUs=2, Memory=6000MB, Disk=20000MB) ...\n\ud83d\udc33  Preparing Kubernetes v1.22.2 on Docker 20.10.8 ...\n    \u25aa Generating certificates and keys ...\n    \u25aa Booting up control plane ...\n    \u25aa Configuring RBAC rules ...\n\ud83d\udd0e  Verifying Kubernetes components...\n    \u25aa Using image gcr.io/k8s-minikube/storage-provisioner:v5\n\ud83c\udf1f  Enabled addons: storage-provisioner, default-storageclass\n\ud83c\udfc4  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now we have to enable the Ingress addon:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"minikube addons enable ingress\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will produce an output similar to the following one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"$ minikube addons enable ingress\n    \u25aa Using image registry.k8s.io/ingress-nginx/kube-webhook-certgen:v1.0\n    \u25aa Using image registry.k8s.io/ingress-nginx/controller:v1.0.0-beta.3\n    \u25aa Using image registry.k8s.io/ingress-nginx/kube-webhook-certgen:v1.0\n\ud83d\udd0e  Verifying ingress addon...\n\ud83c\udf1f  The 'ingress' addon is enabled\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-opentelemetry",children:"Install OpenTelemetry"}),"\n",(0,i.jsxs)(n.p,{children:["We are going to use the ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-operator",children:"OpenTelemetry Operator"}),"\nto manage the automatic injection of the OpenTelemetry Collector sidecar\ninside of the PolicyServer pod."]}),"\n",(0,i.jsxs)(n.p,{children:["The OpenTelemetry Operator requires ",(0,i.jsx)(n.a,{href:"https://cert-manager.io/docs/installation/",children:"cert-manager"}),"\nto be installed inside of the cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["At the time of writing, only specific versions of OpenTelemetry are compatible\nwith Cert Manager, ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-operator#opentelemetry-operator-vs-kubernetes-vs-cert-manager",children:"see the compat chart"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We will install the latest cert-manager Helm chart:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["At time of writing the latest cert-manager chart version is ",(0,i.jsx)(n.code,{children:"v1.15.1"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"helm repo add jetstack https://charts.jetstack.io\n\nhelm install --wait \\\n    --namespace cert-manager \\\n    --create-namespace \\\n    --set crds.enabled=true \\\n    --version 1.15.1 \\\n    cert-manager jetstack/cert-manager\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once cert-manager is up and running, the OpenTelemetry operator Helm chart can be installed in this way:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["At time of writing the latest OpenTelemetry operator chart version is ",(0,i.jsx)(n.code,{children:"0.56.0"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts\n\nhelm install --wait \\\n  --namespace open-telemetry \\\n  --create-namespace \\\n  --version 0.56.0 \\\n  --set "manager.collectorImage.repository=otel/opentelemetry-collector-contrib" \\\n  my-opentelemetry-operator open-telemetry/opentelemetry-operator\n'})}),"\n",(0,i.jsx)(n.h2,{id:"opentelemetry-integration",children:"OpenTelemetry integration"}),"\n",(0,i.jsx)(n.p,{children:"We can now move to the next chapters to enable application metrics (via Prometheus\nintegration) and application tracing (via Jaeger integration)."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);