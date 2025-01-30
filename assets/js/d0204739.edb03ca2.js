"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[13766],{13765:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"operator-manual/policy-evaluation-timeout","title":"","description":"This feature is available starting from Kubewarden v1.5.0.","source":"@site/versioned_docs/version-1.7/operator-manual/policy-evaluation-timeout.md","sourceDirName":"operator-manual","slug":"/operator-manual/policy-evaluation-timeout","permalink":"/1.7/operator-manual/policy-evaluation-timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/operator-manual/policy-evaluation-timeout.md","tags":[],"version":"1.7","lastUpdatedAt":1738241592000,"frontMatter":{"sidebar_label":"Policy evaluation timeout","title":""},"sidebar":"docs","previous":{"title":"Rancher Fleet","permalink":"/1.7/operator-manual/Rancher-Fleet"},"next":{"title":"Security Disclosure","permalink":"/1.7/security/disclosure"}}');var o=t(74848),a=t(28453);const r={sidebar_label:"Policy evaluation timeout",title:""},s="Policy evaluation timeout protection",l={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comparison with Kubernetes Dynamic Admission Controller timeout",id:"comparison-with-kubernetes-dynamic-admission-controller-timeout",level:2},{value:"Kubewarden policy evaluation timeout is disabled",id:"kubewarden-policy-evaluation-timeout-is-disabled",level:3},{value:"Kubewarden policy evaluation timeout is enabled",id:"kubewarden-policy-evaluation-timeout-is-enabled",level:3}];function c(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"policy-evaluation-timeout-protection",children:"Policy evaluation timeout protection"})}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsx)(i.p,{children:"This feature is available starting from Kubewarden v1.5.0."})}),"\n",(0,o.jsx)(i.p,{children:"Policy evaluation timeout protection is a security feature of Policy Server.\nIt's purpose is to limit the amount of time a request evaluation can take."}),"\n",(0,o.jsx)(i.p,{children:"This feature is enabled by default from Kubewarden v1.5.0."}),"\n",(0,o.jsx)(i.h2,{id:"purpose",children:"Purpose"}),"\n",(0,o.jsxs)(i.p,{children:["Kubewarden policies can be written using both traditional programming languages\n(like ",(0,o.jsx)(i.a,{href:"/1.7/writing-policies/go/intro-go",children:"Go"}),",\n",(0,o.jsx)(i.a,{href:"/1.7/writing-policies/rust/intro-rust",children:"Rust"})," and\n",(0,o.jsx)(i.a,{href:"/1.7/writing-policies/",children:"others"}),"\n) or using the special query language ",(0,o.jsx)(i.a,{href:"/1.7/writing-policies/rego/intro-rego",children:"Rego"}),".\nWhile both approaches have their pros and cons, the goal of Kubewarden is to allow the policy\nauthors to pick the best tool to do their job."]}),"\n",(0,o.jsxs)(i.p,{children:["When using a traditional programming language (or, to be\nmore correct, a ",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Turing_completeness",children:"Turing-complete"}),"\nlanguage), it is possible to introduce mistakes like\n",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Infinite_loop",children:"infinite loops"}),",\n",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Deadlock",children:"deadlocks"})," or code that runs slowly\nbecause it lacks optimizations or simply because it performs computationally\nintense operations."]}),"\n",(0,o.jsx)(i.p,{children:"The policy evaluation timeout protection feature terminates the evaluation of\na request after a certain time. This ensures Policy Server always has compute\nresources available to process incoming requests."}),"\n",(0,o.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsxs)(i.p,{children:["Currently, policy evaluation timeout protection is capable of interrupting\nthe majority of long running evaluations.\nThere are however certain edge cases that are not yet handled. This includes\ninvoking a ",(0,o.jsx)(i.code,{children:"sleep"})," instruction from within a policy and deadlocks."]}),"\n",(0,o.jsx)(i.p,{children:"These scenarios are going to be handled by a future release of Policy Server."}),"\n",(0,o.jsx)(i.p,{children:"Finally, the policy evaluation timeout affects all the policies hosted by a\nPolicy Server instance. Currently, there's no way to tune policy evaluation timeout\non a per-policy basis."}),"\n",(0,o.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(i.p,{children:"Policy evaluation timeout is a configuration option of Policy Server which is\nenabled by default.\nBy default, a request evaluation is interrupted after 2 seconds."}),"\n",(0,o.jsx)(i.p,{children:"This behavior can be tuned by using these environment variables:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"KUBEWARDEN_DISABLE_TIMEOUT_PROTECTION"}),": this disables policy evaluation entirely.\nThe value of the environment variable is not relevant, any value will lead to the\nfeature being turned off."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"KUBEWARDEN_POLICY_TIMEOUT"}),": this allows to set a different timeout value. The\nvalue is expressed in seconds and has a default value of ",(0,o.jsx)(i.code,{children:"2"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["When using the ",(0,o.jsx)(i.a,{href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller/policies.kubewarden.io/PolicyServer/v1@v1.4.2",children:(0,o.jsx)(i.code,{children:"PolicyServer"})}),"\nKubernetes Custom Resource Definition, these environment variables can be set in\nthis way:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'# A Policy Server that has policy evaluation timeout disabled\napiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: no-policy-timeout\nspec:\n  env:\n  - name: KUBEWARDEN_DISABLE_TIMEOUT_PROTECTION\n    value: "true"\n---\n# A Policy Server that has policy evaluation timeout enabled,\n# with a 3 seconds timeout value\napiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: custom-policy-timeout\nspec:\n  env:\n  - name: KUBEWARDEN_POLICY_TIMEOUT\n    value: "3"\n'})}),"\n",(0,o.jsx)(i.h2,{id:"comparison-with-kubernetes-dynamic-admission-controller-timeout",children:"Comparison with Kubernetes Dynamic Admission Controller timeout"}),"\n",(0,o.jsxs)(i.p,{children:["Kubewarden is a ",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Webhook",children:"webook"})," implementation of  the",(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",children:" Kubernetes Dynamic Admission Controller"}),"."]}),"\n",(0,o.jsx)(i.p,{children:'Under the hood, the Kubernetes API server makes an HTTP request against  Kubewarden\'s Policy Server\ndescribing an event that is about to happen. After the HTTP request is made,\nKubernetes API Server waits for an answer to be provided. However, Kubernetes\nAPI server will not wait forever, after a certain amount of time it will\nconsider the request to be "timed-out".'}),"\n",(0,o.jsxs)(i.p,{children:["Quoting the ",(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#timeouts",children:"official Kubernetes documentation"}),":"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"Default timeout for a webhook call is 10 seconds, You can set the timeout and\nit is encouraged to use a short timeout for webhooks.\nIf the webhook call times out, the request is handled according to the\nwebhook's failure policy.\nThat means that, regardless of the policy evaluation timeout feature, each\nKubernetes admission request is subject to a timeout."}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Every Kubewarden Policy can set its own timeout value via the ",(0,o.jsx)(i.code,{children:"timeoutSeconds"}),"\nattribute of the ",(0,o.jsx)(i.code,{children:"ClusterAdmissionPolicy"})," and ",(0,o.jsx)(i.code,{children:"AdmissionPolicy"})," custom resources.\nBy default the timeout value is 10 seconds."]}),"\n",(0,o.jsxs)(i.admonition,{type:"info",children:[(0,o.jsx)(i.p,{children:"All the Kubernetes admission requests made against a Policy Server are subject\nto two different timeouts:"}),(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The Kubernetes API server timeout value. Set to 10 seconds by default, tunable\non a per-policy basis via a dedicated attribute on the Kubewarden Custom Resources."}),"\n",(0,o.jsx)(i.li,{children:"The Policy Server policy evaluation timeout"}),"\n"]})]}),"\n",(0,o.jsx)(i.p,{children:"Let's go through the following scenarios to better understand the differences\nbetween Kubernetes' Webhook timeout and Kubewarden's policy evaluation timeout."}),"\n",(0,o.jsx)(i.h3,{id:"kubewarden-policy-evaluation-timeout-is-disabled",children:"Kubewarden policy evaluation timeout is disabled"}),"\n",(0,o.jsx)(i.p,{children:"Let's assume we have a Policy Server that has the policy evaluation timeout\nfeature disabled. This server is hosting a policy that is affected by a bug\nwhich causes it to enter an infinite loop during evaluation."}),"\n",(0,o.jsx)(i.p,{children:"Kubernetes API server sends an admission request to be evaluated by this\nbugged policy. As a result, the policy evaluation will enter an infinite loop.\nIn the meantime the Kubernetes API server will be waiting for a response."}),"\n",(0,o.jsx)(i.p,{children:"After 10 seconds Kubernetes' webhoook timeout will take place, the request\nwill be handled according to the webhook's failure policy."}),"\n",(0,o.jsx)(i.p,{children:"Unfortunately, the Policy Server will be left with some computation resources stuck\ninside of this infinite loop. Over time, with more admission requests\ntriggering the bugged policy, the Policy Server will run out of computation resources\nand will be unable to respond to the Kubernetes API server. This is actually a\nDenial Of Service (DOS) attack against the Policy Server."}),"\n",(0,o.jsx)(i.h3,{id:"kubewarden-policy-evaluation-timeout-is-enabled",children:"Kubewarden policy evaluation timeout is enabled"}),"\n",(0,o.jsx)(i.p,{children:"Let's assume a scenario where the same Policy Server now has the policy evaluation timeout\nfeature enabled, and the policy evaluation timeout is set to be 2 seconds.\nKubernetes API server sends an admission request to be evaluated by this\nbugged policy. As a result, the policy evaluation will enter an infinite loop.\nIn the meantime the Kubernetes API server will be waiting for a response."}),"\n",(0,o.jsx)(i.p,{children:"After two seconds, Kubewarden's policy evaluation timeout feature will interrupt\nthe policy evaluation and will produce a rejection response.\nThe response will contain a message explaining that the rejection\nhappened because the policy evaluation didn't complete in a timely manner."}),"\n",(0,o.jsxs)(i.admonition,{type:"note",children:[(0,o.jsx)(i.p,{children:"Setting Kubewarden's policy evaluation timeout to a value higher than the\nKubernetes' webhook timeout is not a good choice."}),(0,o.jsx)(i.p,{children:"While the policy evaluation will still be interrupted, reducing the chances\nof a DOS attack, the final rejection response will not be produced by the Policy\nServer. As a matter of fact, the rejection will be produced by the Kubernetes\nAPI server by the webhook timeout."}),(0,o.jsx)(i.p,{children:"As a result, it will be harder for end users, and Kubernetes operators, to\ndetect these slow/bugged policies. The only proof of the policy evaluation\ninterruption will be inside of the Policy Server logs and trace events."})]})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var n=t(96540);const o={},a=n.createContext(o);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);