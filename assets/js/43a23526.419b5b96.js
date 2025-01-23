"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[54393],{23806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"howtos/Rancher-Fleet","title":"Managing Kubewarden with Rancher Fleet","description":"Managing Kubewarden with Rancher Fleet.","source":"@site/versioned_docs/version-1.20/howtos/Rancher-Fleet.md","sourceDirName":"howtos","slug":"/howtos/Rancher-Fleet","permalink":"/howtos/Rancher-Fleet","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.20/howtos/Rancher-Fleet.md","tags":[],"version":"1.20","lastUpdatedAt":1737636659000,"sidebarPosition":130,"frontMatter":{"sidebar_label":"Rancher Fleet","sidebar_position":130,"title":"Managing Kubewarden with Rancher Fleet","description":"Managing Kubewarden with Rancher Fleet.","keywords":["kubernetes","kubewarden","rancher fleet"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","rancher-fleet"]},"sidebar":"docs","previous":{"title":"Custom OpenTelemetry Collector","permalink":"/howtos/telemetry/custom-otel-collector"},"next":{"title":"Contribution guide","permalink":"/howtos/contribution-guide/"}}');var o=t(74848),a=t(28453);const s={sidebar_label:"Rancher Fleet",sidebar_position:130,title:"Managing Kubewarden with Rancher Fleet",description:"Managing Kubewarden with Rancher Fleet.",keywords:["kubernetes","kubewarden","rancher fleet"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","rancher-fleet"]},i=void 0,l={},d=[{value:"Installing",id:"installing",level:2},{value:"Removing",id:"removing",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/Rancher-Fleet"})}),"\n",(0,o.jsxs)(n.p,{children:["You can manage Kubewarden Helm charts,\nlike other Helm charts, with ",(0,o.jsx)(n.a,{href:"https://fleet.rancher.io/",children:"Rancher Fleet"}),".\nRancher Fleet uses Kubernetes CRDs\nto define a GitOps approach to managing Kubernetes clusters.\nIt does this by defining ",(0,o.jsx)(n.a,{href:"https://fleet.rancher.io/concepts",children:"Fleet Bundles"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"installing",children:"Installing"}),"\n",(0,o.jsx)(n.p,{children:"The Kubewarden charts are standard charts, they depend transitively on each\nother"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"kubewarden-crds"})," \u2190 ",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," \u2190 ",(0,o.jsx)(n.code,{children:"kubewarden-defaults"})]}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"https://docs.kubewarden.io/quick-start",children:"Quickstart docs"}),"\nfor more information."]}),"\n",(0,o.jsxs)(n.p,{children:["Using Rancher Fleet, you can code the chart dependencies using\n",(0,o.jsx)(n.code,{children:"dependsOn"})," in the ",(0,o.jsx)(n.a,{href:"https://fleet.rancher.io/ref-fleet-yaml",children:(0,o.jsx)(n.code,{children:"fleet.yaml"})})," file."]}),"\n",(0,o.jsx)(n.p,{children:"You may see transient errors until the charts are ready, such as:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"ErrApplied(1) [Cluster fleet-local/local: dependent bundle(s) are not ready:\n[kubewarden-example-helm-kubewarden-controller]]\n"})}),"\n",(0,o.jsx)(n.p,{children:"These errors don't signify a problem,\nand once the charts have finished deployment,\nthey no longer appear."}),"\n",(0,o.jsx)(n.h2,{id:"removing",children:"Removing"}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["When removing the GitRepo, all 3 Kubewarden charts get removed at once.\nThis means the ",(0,o.jsx)(n.code,{children:"kubewarden-crds"})," chart gets removed."]}),(0,o.jsxs)(n.p,{children:["Kubewarden uses a pre-delete helm hook job in ",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," chart that deletes the default policy-server.\nThis pre-delete hook is necessary to vacate the webhooks of the policies before deleting the PolicyServer.\nThis is true any Policy Engine.\nIf not, the cluster may have webhooks for policies that don't exist anymore\nso rejecting everything and being in a failed state."]}),(0,o.jsxs)(n.p,{children:["Removing the GitRepo, and hence the ",(0,o.jsx)(n.code,{children:"kubewarden-crds"})," chart,\nat the same time as the ",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," chart makes the pre-delete hook job fail.\nIt means the removal is incomplete, leaving 'debris' in the cluster."]})]}),"\n",(0,o.jsx)(n.p,{children:"Uninstalling CRDs automatically isn't normally supported by any tooling, and\nRancher Fleet is no exception."}),"\n",(0,o.jsxs)(n.p,{children:["To perform a correct removal,\nmake sure to first remove the Bundle for ",(0,o.jsx)(n.code,{children:"kubewarden-defaults"})," from the cluster.\nDo this by committing those changes to the repository holding\nthe Fleet configuration and then waiting until it's applied.\nThen remove ",(0,o.jsx)(n.code,{children:"kubewarden-controller"})," in the same way,\nand lastly, remove ",(0,o.jsx)(n.code,{children:"kubewarden-crds"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Another option is to add 2 GitRepos, one for the CRDs only,\nand another for the rest of the Kubewarden charts.\nThis lets you remove the Kubewarden charts first and the Kubewarden CRDs last."}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["For an example of Fleet bundle definitions see\n",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/fleet-example",children:"github.com/kubewarden/fleet-example"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);