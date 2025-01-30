"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[32673],{93860:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"explanations/comparisons/opa-comparison","title":"Kubewarden vs OPA Gatekeeper","description":"A brief comparison of the difference between Kubewarden and OPA Gatekeeper.","source":"@site/versioned_docs/version-1.18/explanations/comparisons/opa-comparison.md","sourceDirName":"explanations/comparisons","slug":"/explanations/comparisons/opa-comparison","permalink":"/1.18/explanations/comparisons/opa-comparison","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.18/explanations/comparisons/opa-comparison.md","tags":[],"version":"1.18","lastUpdatedAt":1738241592000,"frontMatter":{"sidebar_label":"Kubewarden vs OPA Gatekeeper","title":"Kubewarden vs OPA Gatekeeper","description":"A brief comparison of the difference between Kubewarden and OPA Gatekeeper.","keywords":["kubewarden","kubernetes","opa gatekeeper","comparison"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["explanations","kubewarden-vs-opa_gatekeeper"]},"sidebar":"docs","previous":{"title":"Distributing policies","permalink":"/1.18/explanations/distributing-policies"},"next":{"title":"Audit Scanner","permalink":"/1.18/explanations/audit-scanner/"}}');var s=i(74848),o=i(28453);const r={sidebar_label:"Kubewarden vs OPA Gatekeeper",title:"Kubewarden vs OPA Gatekeeper",description:"A brief comparison of the difference between Kubewarden and OPA Gatekeeper.",keywords:["kubewarden","kubernetes","opa gatekeeper","comparison"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["explanations","kubewarden-vs-opa_gatekeeper"]},a=void 0,d={},c=[{value:"Types of policies",id:"types-of-policies",level:2},{value:"Writing policies",id:"writing-policies",level:2},{value:"Context aware",id:"context-aware",level:2},{value:"Kubernetes integration",id:"kubernetes-integration",level:2},{value:"Policy distribution",id:"policy-distribution",level:2},{value:"CI/CD integration",id:"cicd-integration",level:2},{value:"Policy enforcement modes",id:"policy-enforcement-modes",level:2},{value:"Deployment mode",id:"deployment-mode",level:2},{value:"Background checks",id:"background-checks",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/comparisons/opa-comparison"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"This page has been written during August 2023. Both projects might have evolved\nsince then."}),(0,s.jsxs)(n.p,{children:["If you find something is missing or inaccurate, please\n",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/docs/",children:"file an issue"}),"\nor open a PR using the link at the bottom of the page."]})]}),"\n",(0,s.jsx)(n.p,{children:"Both OPA Gatekeeper and Kubewarden are open source projects, and part of CNCF."}),"\n",(0,s.jsx)(n.p,{children:"This table provides a comparison between OPA Gatekeeper and Kubewarden. Topics requiring more information have links to further explanation."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"OPA Gatekeeper"}),(0,s.jsx)(n.th,{children:"Kubewarden"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Validation"}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mutation"}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Policy language ",(0,s.jsx)(n.a,{href:"#writing-policies",children:"[1]"})]}),(0,s.jsx)(n.td,{children:"Rego"}),(0,s.jsx)(n.td,{children:"Rego, CEL, Go, Rust,..."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Context aware ",(0,s.jsx)(n.a,{href:"#context-aware",children:"[2]"})]}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Kubernetes integration ",(0,s.jsx)(n.a,{href:"#kubernetes-integration",children:"[3]"})]}),(0,s.jsx)(n.td,{children:"cluster wide CRD"}),(0,s.jsx)(n.td,{children:"cluster wide and namespaced CRDs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Policy distribution ",(0,s.jsx)(n.a,{href:"#policy-distribution",children:"[4]"})]}),(0,s.jsx)(n.td,{children:"embedded into Kubernetes CR"}),(0,s.jsx)(n.td,{children:"Container registry, or embeded into Kubernetes CR (CEL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["CI/CD integration ",(0,s.jsx)(n.a,{href:"#cicd-integration",children:"[5]"})]}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Policy enforcement modes"}),(0,s.jsx)(n.td,{children:"deny, warn"}),(0,s.jsx)(n.td,{children:"deny, warn"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Deployment mode ",(0,s.jsx)(n.a,{href:"#deployment-mode",children:"[6]"})]}),(0,s.jsx)(n.td,{children:"single evaluation server"}),(0,s.jsx)(n.td,{children:"multiple evaluation servers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Background checks ",(0,s.jsx)(n.a,{href:"#background-checks",children:"[7]"})]}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"types-of-policies",children:"Types of policies"}),"\n",(0,s.jsx)(n.p,{children:"Both OPA Gatekeeper and Kubernetes can write validation and mutation policies."}),"\n",(0,s.jsx)(n.p,{children:"These policies can target any kind of Kubernetes resource, including Custom Resources."}),"\n",(0,s.jsx)(n.h2,{id:"writing-policies",children:"Writing policies"}),"\n",(0,s.jsxs)(n.p,{children:["OPA Gatekeeper policies are written using ",(0,s.jsx)(n.a,{href:"https://www.openpolicyagent.org/docs/latest/#rego",children:"Rego"}),".\nRego is a query language created by the Open Policy Agent project."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Rego can only be used to write validating policies. Mutating policies do not\nuse Rego, instead using ad-hoc rules defined in YAML (see ",(0,s.jsx)(n.a,{href:"https://open-policy-agent.github.io/gatekeeper/website/docs/mutation",children:"here"}),")."]})}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden allows policies to be written using different paradigms. Policy authors\ncan use both traditional programming languages (like Go, Rust and others) or ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Domain-specific_language",children:"Domain Specific Languages"})," like Rego and CEL.\nKubewarden's validating and mutating policies are written in the same way."]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["Rego is used by the ",(0,s.jsx)(n.a,{href:"https://github.com/open-policy-agent/kube-mgmt",children:"kube-mgmt"}),"\nopen source project, which is part of the Open Policy Agent project."]}),(0,s.jsx)(n.p,{children:"Despite using the same language, policies written for kube-mgmt are\nnot compatible with OPA Gatekeeper and vice versa."}),(0,s.jsxs)(n.p,{children:["Kubewarden can use Rego policies that have been written for both Open Policy Agent and\nfor OPA Gatekeeper. More information is ",(0,s.jsx)(n.a,{href:"https://docs.kubewarden.io/writing-policies/rego/intro-rego",children:"here"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"context-aware",children:"Context aware"}),"\n",(0,s.jsx)(n.p,{children:'Sometimes a policy needs data about the current state of the cluster to make a\nvalidation/mutation decision. For example, a policy validating Ingress resources might\nneed to know the other Ingress resources already defined inside of the cluster\nto ensure no clashes happen.\nThese kind of policies are called "context aware".'}),"\n",(0,s.jsx)(n.p,{children:"Both OPA Gatekeeper and Kubewarden support these types of policies."}),"\n",(0,s.jsx)(n.p,{children:"When deploying OPA Gatekeeper, a Kubernetes administrator decides which type of\ncluster data should be made available to the policies at evaluation time."}),"\n",(0,s.jsx)(n.p,{children:"It's important to highlight how this data is then accessible by all the policies\ndeployed."}),"\n",(0,s.jsx)(n.p,{children:"For example, if an OPA Gatekeeper policy requires access to Kubernetes Secrets,\nall the other policies being deployed will be able to read this data as well."}),"\n",(0,s.jsx)(n.p,{children:"On the other hand, Kubewarden provides a granular access to cluster resources.\nEach policy has access only to the resources that the Kubernetes administrator\nspecified. Attempting to read unauthorized data is immediately blocked and\nreported to the cluster administrators."}),"\n",(0,s.jsx)(n.h2,{id:"kubernetes-integration",children:"Kubernetes integration"}),"\n",(0,s.jsx)(n.p,{children:"OPA Gatekeeper has a cluster wide Custom Resource that allows policy definition\nand how and where to enforce them."}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden has two different types of Custom Resources used\nto declare policies. One works at the Cluster level, the other is namespaced.\nThe namespaced Custom Resource is called ",(0,s.jsx)(n.code,{children:"AdmissionPolicy"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Policies deployed via a ",(0,s.jsx)(n.code,{children:"AdmissionPolicy"})," resource affect only the resources\ncreated within the Namespace they belong to.\nBecause of that, non-admin Kubernetes users could be allowed\nthe RBAC privileges to manage ",(0,s.jsx)(n.code,{children:"AdmissionPolicy"})," resources inside of the\nNamespaces they have access to."]}),"\n",(0,s.jsx)(n.p,{children:"This allows Kubernetes administrators to delegate some policy-related work."}),"\n",(0,s.jsx)(n.h2,{id:"policy-distribution",children:"Policy distribution"}),"\n",(0,s.jsx)(n.p,{children:"Both OPA Gatekeeper and Kubewarden policies have the source code of the policy (Rego code in the case of OPA Gatekeeper, and CEL code for\nKubewarden) inside the Custom Resource that defines a policy in Kubernetes."}),"\n",(0,s.jsx)(n.p,{children:"In addition, Kubewarden policies can have the source code\nof the policy managed like container images (for Rego, Go, Rust and so on). Once\nbuilt, they are pushed into container registries as OCI artifacts."}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden policies can be signed and verified using container image tools\nlike ",(0,s.jsx)(n.code,{children:"cosign"}),", from the ",(0,s.jsx)(n.a,{href:"https://sigstore.dev",children:"Sigstore project"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden policies can be distributed among geographically distributed container\nregistries using the traditional tools and processes adopted for container images."}),"\n",(0,s.jsx)(n.h2,{id:"cicd-integration",children:"CI/CD integration"}),"\n",(0,s.jsx)(n.p,{children:"Both OPA Gatekeeper and Kubewarden can be managed using GitOps methodologies."}),"\n",(0,s.jsx)(n.p,{children:"However, in the context of OPA Gatekeeper, there's a coupling between the policy's source code\n(the Rego code) and the Custom Resource used to deploy it inside of Kubernetes.\nThis introduces extra steps inside of CI/CD pipelines."}),"\n",(0,s.jsxs)(n.p,{children:["Rego has ",(0,s.jsx)(n.a,{href:"https://www.openpolicyagent.org/docs/latest/policy-testing/",children:"testing tools"}),"\nthat allow the creation of unit test suites. Writing tests and executing them inside\na CI/CD pipeline is essential to ensure policies behave as expected."]}),"\n",(0,s.jsx)(n.p,{children:"To use these testing tools, the source code of the policy must be made available\ninside of dedicated text files. It's not possible to read the source code from the YAML\nfiles used to declare the OPA Gatekeeper policy.\nThe CI/CD pipeline must keep in sync the Rego source code being tested with the code\ndefined inside of the OPA Gatekeeper Custom Resource. This can be done using some 3rd\nparty tools."}),"\n",(0,s.jsx)(n.p,{children:"Kubewarden policies have CI/CD pipelines like traditional microservices.\nUsually their source code lives inside a Git repository and then, using\ntraditional CI/CD systems, unit tests are ran against it. The unit tests are\nwritten using the testing frameworks of the language used to write the policy.\nOnce all the tests pass the policy is compiled to WebAssembly and pushed\nto a container registry.\nThis kind of pipeline is usually maintained by the policy author."}),"\n",(0,s.jsxs)(n.p,{children:["Kubernetes administrators typically maintain other automation pipelines that react to\nnew releases of the policy (leveraging automation tools like\n",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/code-security/dependabot/working-with-dependabot",children:"Dependabot"}),",\n",(0,s.jsx)(n.a,{href:"https://www.mend.io/renovate/",children:"Renovate bot"}),",\n",(0,s.jsx)(n.a,{href:"https://www.updatecli.io/",children:"updatecli"})," and others), or to changes to the\npolicy configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["The pipeline tests the policy against different types of requests. The testing can be done using\nthe ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl",children:"kwctl"})," cli tool, without requiring a running\nKubernetes cluster. kwctl uses the same evaluation engine used by the Kubewarden stack deployed\ninside of a Kubernetes cluster."]}),"\n",(0,s.jsx)(n.h2,{id:"policy-enforcement-modes",children:"Policy enforcement modes"}),"\n",(0,s.jsx)(n.p,{children:"Both OPA Gatekeeper and Kubewarden can deploy policies using two different operation modes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deny"}),": violation of a policy causes the request to be rejected"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"warn"}),": violation of a policy does not cause rejection. The\nviolation is logged for auditing purposes"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deployment-mode",children:"Deployment mode"}),"\n",(0,s.jsxs)(n.p,{children:["All the OPA Gatekeeper policies are evaluated by the same server.\nOn the other hand, Kubewarden allows multiple evaluation servers to be defined.\nThese servers are defined by a Custom Resource called ",(0,s.jsx)(n.code,{children:"PolicyServer"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When declaring a Kubewarden policy, the Kubernetes administrator decides\nwhich ",(0,s.jsx)(n.code,{children:"PolicyServer"})," will host it."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"PolicyServer"})," object is a high level abstraction introduced by Kubewarden.\nBehind the scenes a ",(0,s.jsx)(n.code,{children:"Deployment"})," with a specific replica size is created."]}),(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"PolicyServer"})," can have a different replica size from others."]})]}),"\n",(0,s.jsx)(n.p,{children:"This allows interesting scenarios like the following ones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deploy critical policies to a dedicated Policy Server pool"}),"\n",(0,s.jsx)(n.li,{children:"Deploy the policies of a noisy tenant to a dedicated Policy Server pool"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"background-checks",children:"Background checks"}),"\n",(0,s.jsx)(n.p,{children:"As policies are added, removed, and reconfigured the resources already inside\nof the cluster might become non-compliant."}),"\n",(0,s.jsx)(n.p,{children:"Both OPA Gatekeeper and Kubewarden have a scanner that operates in the background.\nThis scanner evaluates resources already defined inside\nthe cluster and flags non-compliant ones."}),"\n",(0,s.jsx)(n.p,{children:"The only difference between OPA Gatekeeper and Kubewarden is how the scanner results\nare saved."}),"\n",(0,s.jsxs)(n.p,{children:["OPA Gatekeeper adds the violation details to the ",(0,s.jsx)(n.code,{children:"status"})," field of a given ",(0,s.jsx)(n.code,{children:"Constraint"}),"\nCustom Resource (see ",(0,s.jsx)(n.a,{href:"https://open-policy-agent.github.io/gatekeeper/website/docs/audit#constraint-status",children:"here"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden instead stores the results inside of a set of the Policy Report\nCustom Resources defined by the ",(0,s.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/wg-policy-prototypes/tree/master/policy-report",children:"Policy Report working group"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);