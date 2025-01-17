"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[40678],{83095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"reference/dependency-matrix","title":"Dependency matrix","description":"Dependency matrix of Kubewarden.","source":"@site/docs/reference/dependency-matrix.md","sourceDirName":"reference","slug":"/reference/dependency-matrix","permalink":"/next/reference/dependency-matrix","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/reference/dependency-matrix.md","tags":[],"version":"current","lastUpdatedAt":1737080228000,"sidebarPosition":10,"frontMatter":{"sidebar_label":"Dependency matrix","sidebar_position":10,"title":"Dependency matrix","description":"Dependency matrix of Kubewarden.","keywords":["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-all"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},"sidebar":"docs","previous":{"title":"Custom Resources Definitions (CRD)","permalink":"/next/reference/CRDs"},"next":{"title":"Artifacts","permalink":"/next/reference/artifacts"}}');var d=n(74848),c=n(28453);const s={sidebar_label:"Dependency matrix",sidebar_position:10,title:"Dependency matrix",description:"Dependency matrix of Kubewarden.",keywords:["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-all"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},i=void 0,l={},a=[{value:"Opentelemetry, metrics and tracing dependencies",id:"opentelemetry-metrics-and-tracing-dependencies",level:2},{value:"Optional dependencies",id:"optional-dependencies",level:2},{value:"Rancher",id:"rancher",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{children:(0,d.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/dependency-matrix"})}),"\n",(0,d.jsx)(t.p,{children:"This page lists the dependencies of Kubewarden, with their relevant\nversion constraints. Versions outside of the provided ranges may work but are\nnot tested."}),"\n",(0,d.jsx)(t.h2,{id:"opentelemetry-metrics-and-tracing-dependencies",children:"Opentelemetry, metrics and tracing dependencies"}),"\n",(0,d.jsxs)(t.p,{children:["At the time of writing, the ",(0,d.jsx)(t.a,{href:"https://opentelemetry.io",children:"Opentelemetry"})," stack\nkeeps improving. Still, is not yet stable, and unannounced\nbackwards-incompatible changes still happen. Kubewarden devs do their best to\ntrack Opentelemetry stack changes and adjust to them. Kubewarden is tested against a known working\nrange of Opentelemetry, metrics and tracing stack."]}),"\n",(0,d.jsx)(t.h2,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,d.jsx)(t.p,{children:"Needed for specific features."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Chart dependency"}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"appVersion"})]}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"version"})]}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"open-telemetry/opentelemetry-operator"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= 0.104"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(t.code,{children:"0.65.0"})]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"OTLM"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"prometheus-community/kube-prometheus-stack"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= v0.69"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(t.code,{children:"51.5.3"})]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Metrics"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"jaegertracing/jaeger-operator"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= 1.49 < 2"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(t.code,{children:"2.49.0"})]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Tracing"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"kyverno/policy-reporter"})," chart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:">= 2 < 3"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["In ",(0,d.jsx)(t.code,{children:"kubewarden-controller"})," chart as subchart"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Policy Reports UI"})]})]})]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"CRD dependency"}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Version"}),(0,d.jsxs)(t.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(t.code,{children:"version"})]}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"policyreports.wgpolicyk8s.io"})," CRDs"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:(0,d.jsx)(t.code,{children:"v1alpha1"})}),(0,d.jsxs)(t.td,{style:{textAlign:"center"},children:["In ",(0,d.jsx)(t.code,{children:"kubewarden-defaults"})," chart or manually installed"]}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"Audit Scanner"})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"rancher",children:"Rancher"}),"\n",(0,d.jsx)(t.p,{children:"For downstream consumers such as Rancher, Kubewarden is tested against the\nmonitoring and tracing Helm charts provided in the Rancher charts repository."})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const d={},c=r.createContext(d);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);