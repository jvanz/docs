"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[90174],{98880:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"explanations/audit-scanner/policy-reports","title":"Audit Scanner - Policy Reports","description":"The policy reports that the Audit Scanner produces.","source":"@site/versioned_docs/version-1.7/explanations/audit-scanner/policy-reports.md","sourceDirName":"explanations/audit-scanner","slug":"/explanations/audit-scanner/policy-reports","permalink":"/1.7/explanations/audit-scanner/policy-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/explanations/audit-scanner/policy-reports.md","tags":[],"version":"1.7","lastUpdatedAt":1736966480000,"frontMatter":{"sidebar_label":"Policy Reports","title":"Audit Scanner - Policy Reports","description":"The policy reports that the Audit Scanner produces.","keywords":["kubewarden","kubernetes","audit scanner"]},"sidebar":"docs","previous":{"title":"Limitations","permalink":"/1.7/explanations/audit-scanner/limitations"},"next":{"title":"PSP migration","permalink":"/1.7/tasksDir/psp-migration"}}');var r=s(74848),i=s(28453);const o={sidebar_label:"Policy Reports",title:"Audit Scanner - Policy Reports",description:"The policy reports that the Audit Scanner produces.",keywords:["kubewarden","kubernetes","audit scanner"]},a=void 0,c={},l=[{value:"Policy Reporter UI",id:"policy-reporter-ui",level:2},{value:"Cluster-Wide Audit Results example",id:"cluster-wide-audit-results-example",level:2},{value:"Namespace-Specific Audit Results example",id:"namespace-specific-audit-results-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/audit-scanner/policy-reports"})}),"\n",(0,r.jsxs)(n.p,{children:["When using the Kubewarden Audit Scanner, the results of the policy scans are stored using the\n",(0,r.jsx)(n.a,{href:"https://htmlpreview.github.io/?https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/045372e558b896695b2daae92e8c7a04d4d40282/policy-report/docs/index.html",children:"PolicyReport"}),"\nCustom Resource."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["The PolicyReport CRDs are under development in the ",(0,r.jsx)(n.code,{children:"wg-policy"})," Kubernetes group.\nTherefore, this documentation will become out of date if a new version of the CRDs is released."]}),(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.code,{children:"wg-policy"})," group\n",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/wg-policy-prototypes",children:"repository"}),"\nfor more information about the CRDs."]})]}),"\n",(0,r.jsx)(n.p,{children:"These CRDs offer a structured way to store and manage the audit results."}),"\n",(0,r.jsxs)(n.p,{children:["Each namespace scanned by the audit scanner has a dedicated ",(0,r.jsx)(n.code,{children:"PolicyReport"})," resource defined in it."]}),"\n",(0,r.jsxs)(n.p,{children:["The results of Cluster wide resources are found in a ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"})," object.\nThere will be only one ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"})," per cluster."]}),"\n",(0,r.jsx)(n.p,{children:"The audit results generated by the scanner include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the policy that was evaluated"}),"\n",(0,r.jsx)(n.li,{children:"the resource being scanned"}),"\n",(0,r.jsx)(n.li,{children:"the result of the evaluation (pass, fail, or skip)"}),"\n",(0,r.jsx)(n.li,{children:"a timestamp indicating when the evaluation took place."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can also define severity and category annotations for your policies."}),"\n",(0,r.jsxs)(n.p,{children:["Operators can access the reports via ordinary ",(0,r.jsx)(n.code,{children:"kubectl"})," commands.\nThey can also use the optional UI provided by the\n",(0,r.jsx)(n.a,{href:"https://kyverno.github.io/policy-reporter",children:"policy-reporter"}),"\nopen source project for monitoring and observability of the PolicyReport CRDs."]}),"\n",(0,r.jsx)(n.h2,{id:"policy-reporter-ui",children:"Policy Reporter UI"}),"\n",(0,r.jsxs)(n.p,{children:["The Policy Reporter is shipped as a subchart of ",(0,r.jsx)(n.code,{children:"kubewarden-controller"}),".\nRefer to the ",(0,r.jsx)(n.a,{href:"../../howtos/audit-scanner",children:"Audit Scanner Installation"}),"\npage for more information."]}),"\n",(0,r.jsxs)(n.p,{children:["The Policy Reporter UI provides a dashboard showcasing all violations\nfrom ",(0,r.jsx)(n.code,{children:"PolicyReports"})," and the ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"}),".\nThis is shown below."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Policy Reporter dashboard example",src:s(39018).A+"",width:"2543",height:"1327"})}),"\n",(0,r.jsx)(n.p,{children:"As shown below,\nit also provides a tab for PolicyReports, and a tab for ClusterPolicyReports, with expanded information."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Policy Reporter PolicyReports example",src:s(58585).A+"",width:"1920",height:"1858"})}),"\n",(0,r.jsxs)(n.p,{children:["Other features of Policy Reporter include forwarding of results to different clients\n(like Grafana Loki, Elasticsearch, chat applications),\nmetrics endpoints, and so on.\nSee the ",(0,r.jsx)(n.a,{href:"https://kyverno.github.io/policy-reporter",children:"policy-reporter's community docs"}),"\nfor more information."]}),"\n",(0,r.jsx)(n.h2,{id:"cluster-wide-audit-results-example",children:"Cluster-Wide Audit Results example"}),"\n",(0,r.jsxs)(n.p,{children:["In the next example, the audit scanner has evaluated the ",(0,r.jsx)(n.code,{children:"cap-testing-cap-policy"})," on many namespaces in the cluster.\nThe results indicate that all the namespaces passed the policy validation.\nThe ",(0,r.jsx)(n.code,{children:"summary"})," section summarizes the audit results, showing there were no errors, failures, or warnings."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: wgpolicyk8s.io/v1beta1\nkind: ClusterPolicyReport\nmetadata:\n  creationTimestamp: "2023-07-10T19:25:40Z"\n  generation: 1\n  labels:\n    app.kubernetes.io/managed-by: kubewarden\n  ...\nresults:\n- policy: cap-testing-cap-policy\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: v1\n    kind: Namespace\n    name: kube-system\n    ...\n  result: pass\n  rule: testing-cap-policy\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017140\n- policy: cap-testing-cap-policy\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: v1\n    kind: Namespace\n    name: default\n    ...\n  result: pass\n  rule: testing-cap-policy\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017140\n...\nsummary:\n  error: 0\n  fail: 0\n  pass: 6\n  skip: 0\n  warn: 0\n'})}),"\n",(0,r.jsx)(n.h2,{id:"namespace-specific-audit-results-example",children:"Namespace-Specific Audit Results example"}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the audit scanner evaluated many policies on resources within the ",(0,r.jsx)(n.code,{children:"default"})," namespace.\nThe results indicate that certain resources failed the validation for the ",(0,r.jsx)(n.code,{children:"cap-no-privilege-escalation"})," policy.\nOthers passed the validation for the ",(0,r.jsx)(n.code,{children:"cap-do-not-run-as-root"})," policy.\nThe ",(0,r.jsx)(n.code,{children:"summary"})," section shows the number of failures and passes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: wgpolicyk8s.io/v1beta1\nkind: PolicyReport\nmetadata:\n  creationTimestamp: "2023-07-10T19:28:05Z"\n  generation: 4\n  labels:\n    app.kubernetes.io/managed-by: kubewarden\n  ...\nresults:\n- message: one of the containers has privilege escalation enabled\n  policy: cap-no-privilege-escalation\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: nginx-deployment\n    namespace: default\n    ...\n  result: fail\n  rule: no-privilege-escalation\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017383\n- policy: cap-do-not-run-as-root\n  ...\n  resourceSelector: {}\n  resources:\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: nginx-deployment\n    namespace: default\n    ...\n  result: pass\n  rule: do-not-run-as-root\n  source: kubewarden\n  timestamp:\n    nanos: 0\n    seconds: 1689017383\n...\nsummary:\n  error: 0\n  fail: 8\n  pass: 10\n  skip: 0\n  warn: 0\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},39018:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/policy-reporter_dashboard-0af5059c4248e2759e0b61e48bdd2cff.png"},58585:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/policy-reporter_policyreports-d21235dcb3f5dd2d4731703f79239d9b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);