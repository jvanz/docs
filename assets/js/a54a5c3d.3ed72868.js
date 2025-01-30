"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8149],{59303:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"howtos/tasks","title":"Common tasks","description":"Description of some common tasks undertaken after installing Kubewarden. Provides examples of these tasks using kwctl","source":"@site/versioned_docs/version-1.20/howtos/tasks.md","sourceDirName":"howtos","slug":"/howtos/tasks","permalink":"/1.20/howtos/tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.20/howtos/tasks.md","tags":[],"version":"1.20","lastUpdatedAt":1738241592000,"sidebarPosition":10,"frontMatter":{"sidebar_label":"Common tasks","sidebar_position":10,"title":"Common tasks","description":"Description of some common tasks undertaken after installing Kubewarden. Provides examples of these tasks using kwctl","keywords":["kubewarden","kubernetes","kwctl","policy","policyserver","clusteradmissionpolicy","admissionpolicy"],"doc-persona":["kubewarden-all"],"doc-type":["howto"],"doc-topic":["common-tasks"]},"sidebar":"docs","previous":{"title":"Architecture","permalink":"/1.20/explanations/architecture"},"next":{"title":"Certificate Rotation","permalink":"/1.20/howtos/workarounds/policy-server-certificate-expiry"}}');var t=s(74848),l=s(28453);const o={sidebar_label:"Common tasks",sidebar_position:10,title:"Common tasks",description:"Description of some common tasks undertaken after installing Kubewarden. Provides examples of these tasks using kwctl",keywords:["kubewarden","kubernetes","kwctl","policy","policyserver","clusteradmissionpolicy","admissionpolicy"],"doc-persona":["kubewarden-all"],"doc-type":["howto"],"doc-topic":["common-tasks"]},r=void 0,c={},a=[{value:"Test Policies",id:"test-policies",level:2},{value:"Artifact hub",id:"artifact-hub",level:3},{value:"<code>kwctl</code> CLI tool",id:"kwctl-cli-tool",level:3},{value:"Use cases",id:"use-cases",level:4},{value:"Installation",id:"installation",level:4},{value:"Usage",id:"usage",level:4},{value:"Enforce Policies",id:"enforce-policies",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/tasks"})}),"\n",(0,t.jsxs)(n.p,{children:["This describes tasks that can be performed after you ",(0,t.jsx)(n.a,{href:"/1.20/quick-start#installation",children:"install Kubewarden"})," in your Kubernetes cluster."]}),"\n",(0,t.jsx)(n.p,{children:"Each task can be done separately; they are shown here in a logical ordering."}),"\n",(0,t.jsx)(n.h2,{id:"test-policies",children:"Test Policies"}),"\n",(0,t.jsx)(n.p,{children:"Kubewarden has two tools to help you find policies and test them locally:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/search?kind=13&sort=relevance&page=1",children:"Artifact Hub"})," using their package filter for Kubewarden policies."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl",children:(0,t.jsx)(n.code,{children:"kwctl"})})," CLI tool"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"artifact-hub",children:"Artifact hub"}),"\n",(0,t.jsxs)(n.p,{children:["Artifact hub hosts policies contributed by the community. For example, you can find substitutes to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/blog/2021/04/06/podsecuritypolicy-deprecation-past-present-and-future/",children:"deprecated Kubernetes Pod Security Policies"}),", created by the Kubewarden developers."]}),"\n",(0,t.jsxs)(n.p,{children:["As shown in the screenshot below, once you find a policy of interest, select the ",(0,t.jsx)(n.code,{children:"Install"})," button and use ",(0,t.jsx)(n.code,{children:"kwctl"})," to fetch the policy for your cluster."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Artifact Hub",src:s(89752).A+"",width:"1910",height:"1049"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Previously, Kubewarden policies could be found at the ",(0,t.jsx)(n.a,{href:"https://hub.kubewarden.io",children:"Kubewarden Policy Hub"}),". This has been ",(0,t.jsx)(n.a,{href:"https://www.kubewarden.io/blog/2022/07/artifact-hub-supports-kubewarden/",children:"retired"}),". Policies are now available from ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/search?kind=13&sort=relevance&page=1",children:"https://artifacthub.io"}),"."]})}),"\n",(0,t.jsxs)(n.h3,{id:"kwctl-cli-tool",children:[(0,t.jsx)(n.code,{children:"kwctl"})," CLI tool"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kwctl"})," is our CLI tool for policy authors and the cluster administrators to test policies before they are applied to the Kubernetes cluster."]}),"\n",(0,t.jsxs)(n.p,{children:["This tool has a similar interface to the ",(0,t.jsx)(n.code,{children:"docker"})," CLI tool."]}),"\n",(0,t.jsx)(n.h4,{id:"use-cases",children:"Use cases"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"kwctl"})," to help in these scenarios:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"As a policy author"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"End-to-end testing of your policy"}),": Test your policy against crafted Kubernetes requests and ensure your policy behaves as you expect. You can even test context-aware policies that require access to a running cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Embed metadata in your Wasm module"}),": the binary contains annotations of the permissions it needs to be executed. You can inspect and modify these annotations with ",(0,t.jsx)(n.code,{children:"kwctl"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Publish policies to OCI registries"}),": The binary is a fully compliant OCI object and can be stored in OCI registries."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"As a cluster administrator"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Inspect remote policies"}),": Given a policy in an OCI registry or in an HTTP server, show all static information about the policy."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Dry-run of a policy in your cluster"}),": Test the policy against crafted Kubernetes requests and ensure the policy behaves as you expect given the input data you provide. You can even test context-aware policies that require access to a running cluster, also in a dry-run mode."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.em,{children:["Generate initial ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," scaffolding for your policy"]}),": Generate a ",(0,t.jsx)(n.code,{children:"YAML"})," file with all the required settings, which can be applied to your Kubernetes cluster using ",(0,t.jsx)(n.code,{children:"kubectl"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kwctl"})," binaries for the stable releases are available from the ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases",children:"GitHub repository"}),". To build ",(0,t.jsx)(n.code,{children:"kwctl"})," from the GitHub ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl",children:"repo"}),", you will need a ",(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"})," development environment."]}),"\n",(0,t.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["You can list all the ",(0,t.jsx)(n.code,{children:"kwctl"})," options and sub-commands by running the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kwctl --help\nkwctl 0.2.5\nKubewarden Developers <kubewarden@suse.de>\nTool to manage Kubewarden policies\n\nUSAGE:\n    kwctl [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help       Print help information\n    -v               Increase verbosity\n    -V, --version    Print version information\n\nSUBCOMMANDS:\n    annotate       Add Kubewarden metadata to a WebAssembly module\n    completions    Generate shell completions\n    digest         Fetch the digest of its OCI manifest\n    help           Print this message or the help of the given subcommand(s)\n    inspect        Inspect Kubewarden policy\n    policies       Lists all downloaded policies\n    pull           Pulls a Kubewarden policy from a given URI\n    push           Pushes a Kubewarden policy to an OCI registry\n    rm             Removes a Kubewarden policy from the store\n    run            Runs a Kubewarden policy from a given URI\n    scaffold       Scaffold a Kubernetes resource or configuration file\n    verify         Verify a Kubewarden policy from a given URI using Sigstore\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here are a few command usage examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"List the policies"}),": lists all the policies stored in the local ",(0,t.jsx)(n.code,{children:"kwctl"})," registry"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Command: ",(0,t.jsx)(n.code,{children:"kwctl policies"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Obtain the policy"}),": download and store the policy inside the local ",(0,t.jsx)(n.code,{children:"kwctl"})," store"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Command: ",(0,t.jsx)(n.code,{children:"kwctl pull <policy URI>"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kwctl pull registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9\n\n$ kwctl policies\n+--------------------------------------------------------------+----------+---------------+--------------+----------+\n| Policy                                                       | Mutating | Context aware | SHA-256      | Size     |\n+--------------------------------------------------------------+----------+---------------+--------------+----------+\n| registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9 | no       | no            | 59e34f482b40 | 21.86 kB |\n+--------------------------------------------------------------+----------+---------------+--------------+----------+\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Understand how the policy works"}),": inspect the policy metadata"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Command: ",(0,t.jsx)(n.code,{children:"kwctl inspect <policy URI>"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'  $ kwctl inspect registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9\n  Details\n  title:              pod-privileged\n  description:        Limit the ability to create privileged containers\n  author:             Flavio Castelli\n  url:                https://github.com/kubewarden/pod-privileged-policy\n  source:             https://github.com/kubewarden/pod-privileged-policy\n  license:            Apache-2.0\n  mutating:           false\n  context aware:      false\n  execution mode:     kubewarden-wapc\n  protocol version:   1\n\n  Annotations\n  io.kubewarden.kwctl 0.1.9\n\n  Rules\n  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  ---\n  - apiGroups:\n      - ""\n    apiVersions:\n      - v1\n    resources:\n      - pods\n    operations:\n      - CREATE\n  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  Usage\n  This policy doesn\'t have a configuration. Once enforced, it will reject\n  the creation of Pods that have at least a privileged container defined.\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Evaluate the policy"}),": Assess the policy and, if available, find the right configuration values to match your requirements."]}),"\n",(0,t.jsxs)(n.p,{children:["You will need some familiarity with the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/",children:"Kubernetes REST APIs"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Command: ",(0,t.jsx)(n.code,{children:'kwctl run -r <"Kubernetes Admission request" file path> -s <"JSON document" file path> <policy URI>'})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scenario 1:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request to be evaluated: Create a pod with no 'privileged' container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ kwctl run registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9 -r unprivileged-pod-request.json\n{"uid":"C6E115F4-A789-49F8-B0C9-7F84C5961FDE","allowed":true,"status":{"message":""}}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Equivalent command with the policy binary downloaded:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'`$ kwctl run file://$PWD/pod-privileged-policy.wasm -r unprivileged-pod-request.json\n{"uid":"C6E115F4-A789-49F8-B0C9-7F84C5961FDE","allowed":true,"status":{"message":""}}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Result: The policy allows the request"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scenario 2:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request to be evaluated: Create a pod with at least one 'privileged' container"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kwctl run registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9 -r privileged-pod-request.json\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Equivalent command with the policy binary downloaded: ",(0,t.jsx)(n.code,{children:"kwctl run file://$PWD/pod-privileged-policy.wasm -r privileged-pod-request.json"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "uid": "8EE6AF8C-C8C8-45B0-9A86-CB52A70EC50D",\n  "allowed": false,\n  "status": { "message": "User \'kubernetes-admin\' cannot schedule privileged containers" }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Result: The policy denies the request"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For some more complex examples, see the blog post ",(0,t.jsxs)(n.a,{href:"https://www.kubewarden.io/blog/2021/06/kwctl-intro-for-kubernetes-administrators/",children:["Introducing ",(0,t.jsx)(n.code,{children:"kwctl"})," to Kubernetes Administrators"]}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"enforce-policies",children:"Enforce Policies"}),"\n",(0,t.jsxs)(n.p,{children:["You enforce a policy by defining a ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," and then deploy it to your cluster using ",(0,t.jsx)(n.code,{children:"kubectl"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kwctl"})," helps generate a ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," from the policy you want to enforce."]}),"\n",(0,t.jsxs)(n.p,{children:["After you have generated the ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," and applied it to your cluster, you can follow the steps described in the ",(0,t.jsx)(n.a,{href:"/1.20/quick-start#example-enforce-your-first-policy",children:"Quick Start"})," below:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Generate the ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," from the policy ",(0,t.jsx)(n.code,{children:"manifest"})," and save it to a file"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Command: ",(0,t.jsx)(n.code,{children:'kwctl scaffold manifest -t ClusterAdmissionPolicy <policy URI> > <"policy name".yaml>'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ kwctl scaffold manifest -t ClusterAdmissionPolicy registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: privileged-pods\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n  mutating: false\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.code,{children:"name"})," value is set to ",(0,t.jsx)(n.code,{children:"generated-policy"}),".\nYou might want to edit it before you deploy the ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"}),".\nThe name in the immediately previous example has been set to ",(0,t.jsx)(n.code,{children:"privileged-pods"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Deploy the ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," to your Kubernetes cluster"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Command: ",(0,t.jsx)(n.code,{children:'kubectl apply -f <"policy name".yaml>'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f pod-privileged-policy.yaml\nclusteradmissionpolicy.policies.kubewarden.io/privileged-pods created\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After the ",(0,t.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," is deployed, all requests sent to your cluster will be evaluated by the policy if they're within the policy scope."]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../tutorials/writing-policies/",children:"Writing Policies"})," explains how to write policies in different languages and generate WebAssembly binaries, so they can be used by Kubewarden."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/1.20/explanations/distributing-policies",children:"Distributing Policies"})," explains how to publish policies to ",(0,t.jsx)(n.a,{href:"https://github.com/opencontainers/distribution-spec/blob/main/spec.md",children:"OCI registries"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},89752:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tasks-artifact-hub-26e1d32653c28150f62c745fafa80f9d.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(96540);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);