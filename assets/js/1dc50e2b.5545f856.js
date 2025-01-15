"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[28345],{45905:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorials/writing-policies/dotnet","title":"C#","description":"Kubewarden policies using C# and .NET","source":"@site/versioned_docs/version-1.17/tutorials/writing-policies/dotnet.md","sourceDirName":"tutorials/writing-policies","slug":"/tutorials/writing-policies/dotnet","permalink":"/1.17/tutorials/writing-policies/dotnet","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.17/tutorials/writing-policies/dotnet.md","tags":[],"version":"1.17","lastUpdatedAt":1736948597000,"sidebarPosition":40,"frontMatter":{"sidebar_label":"C#","sidebar_position":40,"title":"C#","description":"Kubewarden policies using C# and .NET","keywords":["kubewarden","kubernetes","writing policies","c#",".net"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","c#"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"Distribute","permalink":"/1.17/tutorials/writing-policies/rego/gatekeeper/distribute"},"next":{"title":"Swift","permalink":"/1.17/tutorials/writing-policies/swift"}}');var o=i(74848),s=i(28453);const r={sidebar_label:"C#",sidebar_position:40,title:"C#",description:"Kubewarden policies using C# and .NET",keywords:["kubewarden","kubernetes","writing policies","c#",".net"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","c#"],"doc-persona":["kubewarden-policy-developer"]},a=void 0,d={},l=[{value:"Current state",id:"current-state",level:2},{value:"Project template",id:"project-template",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/dotnet"})}),"\n",(0,o.jsxs)(t.p,{children:["Currently, .NET Core has experimental support for the WebAssembly WASI platform.\nThis is from the ",(0,o.jsx)(t.a,{href:"https://github.com/SteveSandersonMS/dotnet-wasi-sdk",children:(0,o.jsx)(t.code,{children:"dotnet-wasi-sdk"})})," project."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"You don't need a Windows installation to write or run .NET Core code.\nEverything can be done also on a Linux or on an macOS machine."})}),"\n",(0,o.jsx)(t.h2,{id:"current-state",children:"Current state"}),"\n",(0,o.jsx)(t.p,{children:"Policy authors can use the following resources:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/policy-sdk-dotnet",children:"Kubewarden .NET Core SDK"}),":\nthis provides a set of objects and functions that simplify the process of writing policies."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/policy-sdk-dotnet/tree/main/example",children:"Kubewarden policy example"}),":\nthis is an example of a working policy."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"No limitations are known.\nThe SDK enables writing both validating and mutating policies."}),"\n",(0,o.jsxs)(t.p,{children:["It's possible to use the\n",(0,o.jsx)(t.a,{href:"https://www.nuget.org/packages/KubernetesClient.Models",children:(0,o.jsx)(t.code,{children:"KubernetesClient.Models"})}),"\nlibrary to deal with the Kubernetes objects."]}),"\n",(0,o.jsx)(t.h2,{id:"project-template",children:"Project template"}),"\n",(0,o.jsx)(t.p,{children:"Currently, we don't have a project template that can scaffold a C# policy."}),"\n",(0,o.jsxs)(t.p,{children:["Please, ",(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/policy-sdk-dotnet/issues",children:"open an issue"}),"\nif interested."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);