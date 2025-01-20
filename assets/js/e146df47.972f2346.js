"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2226],{37342:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"writing-policies/rego/intro-rego","title":"Rego","description":"Writing Kubewarden policies using Rego.","source":"@site/versioned_docs/version-1.10/writing-policies/rego/01-intro-rego.md","sourceDirName":"writing-policies/rego","slug":"/writing-policies/rego/intro-rego","permalink":"/1.10/writing-policies/rego/intro-rego","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rego/01-intro-rego.md","tags":[],"version":"1.10","lastUpdatedAt":1737394470000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Rego","title":"Rego","description":"Writing Kubewarden policies using Rego.","keywords":["kubewarden","kubernetes","writing policies","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","introduction"]},"sidebar":"docs","previous":{"title":"Raw policies","permalink":"/1.10/writing-policies/go/raw-policies"},"next":{"title":"Builtin Support","permalink":"/1.10/writing-policies/rego/builtin-support"}}');var o=n(74848),r=n(28453);const s={sidebar_label:"Rego",title:"Rego",description:"Writing Kubewarden policies using Rego.",keywords:["kubewarden","kubernetes","writing policies","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","introduction"]},a=void 0,l={},c=[{value:"One language. Two frameworks",id:"one-language-two-frameworks",level:2},{value:"Open Policy Agent",id:"open-policy-agent",level:3},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Looking at the differences",id:"looking-at-the-differences",level:2},{value:"Entry point",id:"entry-point",level:2},{value:"Current limitations",id:"current-limitations",level:2},{value:"Context-aware policies",id:"context-aware-policies",level:3},{value:"Mutating policies",id:"mutating-policies",level:3}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.admonition,{type:"note",children:[(0,o.jsx)(i.p,{children:"Rego support has been introduced starting from these releases:"}),(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"kwctl: v0.2.0"}),"\n",(0,o.jsx)(i.li,{children:"policy-server: v0.2.0"}),"\n"]}),(0,o.jsx)(i.p,{children:"Rego policies support context aware data starting from the Kubewarden 1.9 release."})]}),"\n",(0,o.jsxs)(i.p,{children:["The Rego language is a domain specific language designed to embrace\npolicies as\ncode. ",(0,o.jsx)(i.a,{href:"https://www.openpolicyagent.org/docs/latest/policy-language/",children:"Rego"}),"\nis a language inspired by Datalog."]}),"\n",(0,o.jsx)(i.p,{children:"There are two ways of writing Rego policies as of today in order to\nimplement policies as code in Kubernetes: Open Policy Agent and\nGatekeeper."}),"\n",(0,o.jsx)(i.p,{children:"While the next couple of sections detail how the two frameworks are different\neven though the same language is used, if you're more interested in the Kubewarden\nimplementation you may directly visit the framework-specific documentation we have linked below."}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/1.10/writing-policies/rego/open-policy-agent/intro",children:"Open Policy Agent"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/1.10/writing-policies/rego/gatekeeper/intro",children:"Gatekeeper"})}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"one-language-two-frameworks",children:"One language. Two frameworks"}),"\n",(0,o.jsx)(i.h3,{id:"open-policy-agent",children:"Open Policy Agent"}),"\n",(0,o.jsx)(i.p,{children:"Open Policy Agent is a project that allows you to implement policies\nas code in any project. You can rely on Open Policy Agent for any\npolicy based check that you might require in your own application,\nthat will in turn execute the required Rego policies."}),"\n",(0,o.jsx)(i.p,{children:"In this context, writing policies for Kubernetes is just another way\nof exercising Open Policy Agent. By using Kubernetes admission\nwebhooks, it's possible to evaluate requests using Open Policy Agent,\nthat will in turn execute the policies written in Rego."}),"\n",(0,o.jsxs)(i.p,{children:["Open Policy Agent has some optional integration with Kubernetes\nthrough its ",(0,o.jsx)(i.code,{children:"kube-mgmt"})," sidecar. When deployed on top of Kubernetes\nand next to the Open Policy Agent server evaluating the Rego policies,\nit is able to replicate the configured Kubernetes resources into Rego\n-- so those Kubernetes resources are visible to all policies. It also\nlets you define policies inside Kubernetes' ConfigMap objects. You can\nread more about it on ",(0,o.jsx)(i.a,{href:"https://github.com/open-policy-agent/kube-mgmt",children:"its project\npage"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"gatekeeper",children:"Gatekeeper"}),"\n",(0,o.jsx)(i.p,{children:"Gatekeeper is very different from Open Policy Agent in this regard. It\nis focused exclusively to be used in Kubernetes, and takes advantage\nof that as much as it can, making some Kubernetes workflows easier\nthan Open Policy Agent in many cases."}),"\n",(0,o.jsx)(i.h2,{id:"looking-at-the-differences",children:"Looking at the differences"}),"\n",(0,o.jsx)(i.p,{children:"Both Open Policy Agent and Gatekeeper policies use Rego to describe\ntheir policies as code. However, this is only one part of the\npuzzle. Each solution has differences when it comes to writing real\npolicies in Rego, and we are going to look at those differences in the\nnext sections."}),"\n",(0,o.jsx)(i.h2,{id:"entry-point",children:"Entry point"}),"\n",(0,o.jsx)(i.p,{children:"The entry point is the name of a rule within a package, and is the\nrule to be invoked by the runtime when the policy is instantiated."}),"\n",(0,o.jsx)(i.h2,{id:"current-limitations",children:"Current limitations"}),"\n",(0,o.jsx)(i.h3,{id:"context-aware-policies",children:"Context-aware policies"}),"\n",(0,o.jsxs)(i.p,{children:["Context-aware policies are policies that don't evaluate the input\nrequest in isolation. They take other factors into account in order to\ntake a decision. For example, a policy that evaluates namespaced\nresources and uses an annotation on the parent namespace to configure\nsomething on the policy. Another example would be a policy that\nevaluates ",(0,o.jsx)(i.code,{children:"Ingress"})," resources, but that in order to take a decision\nhas the list of the already existing ",(0,o.jsx)(i.code,{children:"Ingress"})," resources."]}),"\n",(0,o.jsx)(i.p,{children:"The concept of context-aware policies can also extend to custom\nresources, so your policy might want to evaluate a request based on\ncurrently persisted custom resources as well."}),"\n",(0,o.jsx)(i.p,{children:"Both Open Policy Agent and Gatekeeper support context-aware\npolicies starting from the Kubewarden 1.9 release."}),"\n",(0,o.jsxs)(i.p,{children:["More details about context aware policies can be found ",(0,o.jsx)(i.a,{href:"/1.10/writing-policies/spec/context-aware-policies",children:"here"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"mutating-policies",children:"Mutating policies"}),"\n",(0,o.jsx)(i.p,{children:"Gatekeeper has support for mutating policies, but Kubewarden has not\nyet implemented mutating policies with Gatekeeper compatibility. You\ncan use policies that use the Kubewarden SDK to write mutating\npolicies, but at the time of writing, you cannot run Gatekeeper\nmutating policies in Kubewarden yet."})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(96540);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);