"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[96884],{50203:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"howtos/ui-extension/metrics","title":"Monitoring","description":"Monitoring and metrics for Kubewarden.","source":"@site/versioned_docs/version-1.14/howtos/ui-extension/02-metrics.md","sourceDirName":"howtos/ui-extension","slug":"/howtos/ui-extension/metrics","permalink":"/1.14/howtos/ui-extension/metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.14/howtos/ui-extension/02-metrics.md","tags":[],"version":"1.14","lastUpdatedAt":1736968001000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Monitoring","title":"Monitoring","description":"Monitoring and metrics for Kubewarden.","keywords":["kubewarden","kubernetes","user interface extension","metrics","monitoring"],"doc-type":["howto"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-topic":["operator-manual","metrics-and-monitoring"]},"sidebar":"docs","previous":{"title":"Quickstart","permalink":"/1.14/howtos/ui-extension/install"},"next":{"title":"Tracing","permalink":"/1.14/howtos/ui-extension/tracing"}}');var o=r(74848),i=r(28453);const s={sidebar_label:"Monitoring",title:"Monitoring",description:"Monitoring and metrics for Kubewarden.",keywords:["kubewarden","kubernetes","user interface extension","metrics","monitoring"],"doc-type":["howto"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-topic":["operator-manual","metrics-and-monitoring"]},a=void 0,c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"Create the ServiceMonitors",id:"create-the-servicemonitors",level:3},{value:"Enable telemetry for your <code>rancher-kubewarden-controller</code> resource",id:"enable-telemetry-for-your-rancher-kubewarden-controller-resource",level:3},{value:"Create the Grafana dashboard ConfigMap for Policies and Policy Server",id:"create-the-grafana-dashboard-configmap-for-policies-and-policy-server",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/ui-extension/metrics"})}),"\n",(0,o.jsx)(n.p,{children:"Rancher has a Cluster Tool for monitoring that leverages Grafana and Prometheus.\nYou can use this tool,\nintegrating it with Kubewarden,\nto view overall metrics for a Policy Server or metrics for a given policy."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Issues with Rancher Manager ",(0,o.jsx)(n.code,{children:"v2.7.1"})," can cause issues with the Metrics dashboard view. The project recommends version ",(0,o.jsx)(n.code,{children:"v2.7.2"})," or greater."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You need a cluster with at least 4 cores to install the Monitoring tool."}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["The Prometheus Operator is required.\nFollow\n",(0,o.jsx)(n.a,{href:"/1.14/howtos/telemetry/metrics-qs#install-prometheus",children:"these instructions"}),"\nto install it."]}),"\n",(0,o.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,o.jsx)(n.h3,{id:"create-the-servicemonitors",children:"Create the ServiceMonitors"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Import the manifest to create the ServiceMonitors"}),"\n",(0,o.jsx)(n.li,{children:"You need to specify the namespace where Kubewarden is installed"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This is adapted from ",(0,o.jsx)(n.a,{href:"/1.14/howtos/telemetry/metrics-qs",children:"here"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: kubewarden-controller\n  namespace: cattle-kubewarden-system\nspec:\n  endpoints:\n    - interval: 10s \n      port: metrics\n  namespaceSelector:\n    matchNames:\n      - cattle-kubewarden-system\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: kubewarden-controller\n---\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: kubewarden-policy-server\n  namespace: cattle-kubewarden-system\nspec:\n  endpoints:\n    - interval: 10s\n      port: metrics\n  namespaceSelector:\n    matchNames:\n      - cattle-kubewarden-system\n  selector:\n    matchLabels:\n      app: kubewarden-policy-server-default\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"enable-telemetry-for-your-rancher-kubewarden-controller-resource",children:["Enable telemetry for your ",(0,o.jsx)(n.code,{children:"rancher-kubewarden-controller"})," resource"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Navigate to Apps & Marketplace \u2192 Installed Apps."}),"\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.code,{children:"Edit/Upgrade"})," action for your ",(0,o.jsx)(n.code,{children:"rancher-kubewarden-controller"})," resource."]}),"\n",(0,o.jsxs)(n.li,{children:["Edit the YAML for ",(0,o.jsx)(n.code,{children:"telemetry"})," to be ",(0,o.jsx)(n.code,{children:'enabled: "true"'})," and ensure the metrics port is correct."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"telemetry:\n  metrics:\n    enabled: True\n    port: 8080\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You may need to redeploy your Monitoring resources for the new ConfigMap to load.\nYou can do this from Workloads \u2192 Deployments.\nSelect all the resources in the ",(0,o.jsx)(n.code,{children:"cattle-monitoring-system"})," namespace and select the ",(0,o.jsx)(n.code,{children:"Redeploy"})," action."]})}),"\n",(0,o.jsx)(n.h3,{id:"create-the-grafana-dashboard-configmap-for-policies-and-policy-server",children:"Create the Grafana dashboard ConfigMap for Policies and Policy Server"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This method is suitable for air gap installations"})}),"\n",(0,o.jsx)(n.p,{children:"The dashboards are unique between Policy Server and Policies,\nso need separate creation."}),"\n",(0,o.jsx)(n.p,{children:"Within the detail view for a Policy Server or a specific Policy:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Navigate to the "Metrics" tab.'}),"\n",(0,o.jsx)(n.li,{children:"Follow the prompt to create the ConfigMap."}),"\n",(0,o.jsx)(n.li,{children:"Reload the page to update the Grafana view\n(Grafana may be slow to acknowledge the new dashboard)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You should be able to view the metrics for a Policy Server,\nor any given Policy on the detail page for each respective resource.\nYou can also view the Kubewarden dashboards within the Grafana UI,\nor the events from the Prometheus UI."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);