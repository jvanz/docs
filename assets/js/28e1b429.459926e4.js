"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[86202],{54067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"operator-manual/dependency-matrix","title":"Dependency matrix","description":"Dependency matrix of Kubewarden.","source":"@site/versioned_docs/version-1.10/operator-manual/dependency-matrix.md","sourceDirName":"operator-manual","slug":"/operator-manual/dependency-matrix","permalink":"/1.10/operator-manual/dependency-matrix","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/operator-manual/dependency-matrix.md","tags":[],"version":"1.10","lastUpdatedAt":1737557249000,"frontMatter":{"sidebar_label":"Dependency matrix","title":"Dependency matrix","description":"Dependency matrix of Kubewarden.","keywords":["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},"sidebar":"docs","previous":{"title":"Upgrade path","permalink":"/1.10/operator-manual/upgrade-path"},"next":{"title":"Metrics reference","permalink":"/1.10/operator-manual/telemetry/metrics/reference"}}');var d=n(74848),s=n(28453);const c={sidebar_label:"Dependency matrix",title:"Dependency matrix",description:"Dependency matrix of Kubewarden.",keywords:["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},i=void 0,l={},a=[{value:"Opentelemetry, metrics and tracing dependencies",id:"opentelemetry-metrics-and-tracing-dependencies",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"This page lists the dependencies of Kubewarden, with their relevant\nversion constraints. Versions outside of the provided ranges may work but are\nnot tested."}),"\n",(0,d.jsx)(t.h3,{id:"opentelemetry-metrics-and-tracing-dependencies",children:"Opentelemetry, metrics and tracing dependencies"}),"\n",(0,d.jsxs)(t.p,{children:["At the time of writing, the ",(0,d.jsx)(t.a,{href:"https://opentelemetry.io",children:"Opentelemetry"})," stack\nkeeps improving. Still, is not yet stable, and unannounced\nbackwards-incompatible changes still happen. Kubewarden devs do their best to\ntrack Opentelemetry stack changes and adjust to them. Kubewarden is tested against a known working\nrange of Opentelemetry, metrics and tracing stack."]}),"\n",(0,d.jsx)(t.h1,{id:"hard-dependencies",children:"Hard dependencies"}),"\n",(0,d.jsx)(t.p,{children:"Needed for Kubewarden deployments."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Chart dependency"}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"appVersion"})]}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"version"})]}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Comments"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"jetstack/cert-manager"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= 1.13 < 2"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(t.code,{children:"v1.13.2"})]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Plans to make optional"})]})})]}),"\n",(0,d.jsx)(t.h1,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,d.jsx)(t.p,{children:"Needed for specific features."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Chart dependency"}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"appVersion"})]}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"version"})]}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"open-telemetry/opentelemetry-operator"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= 0.85"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(t.code,{children:"0.39.2"})]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"OTLM"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"prometheus-community/kube-prometheus-stack"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= v0.69"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(t.code,{children:"51.5.3"})]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Metrics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"jaegertracing/jaeger-operator"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= 1.49 < 2"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(t.code,{children:"2.49.0"})]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Tracing"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"kyverno/policy-reporter"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= 2 < 3"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["In ",(0,d.jsx)(t.code,{children:"kubewarden-controller"})," chart as subchart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Policy Reports UI"})]})]})]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"CRD dependency"}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Version"}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"version"})]}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"policyreports.wgpolicyk8s.io"})," CRDs"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:"v1alpha1"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["In ",(0,d.jsx)(t.code,{children:"kubewarden-defaults"})," chart or manually installed"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Audit Scanner"})]})})]}),"\n",(0,d.jsx)(t.h1,{id:"rancher",children:"Rancher"}),"\n",(0,d.jsx)(t.p,{children:"For downstream consumers such as Rancher, Kubewarden is tested against the\nmonitoring and tracing Helm charts provided in the Rancher charts repository."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const d={},s=r.createContext(d);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);