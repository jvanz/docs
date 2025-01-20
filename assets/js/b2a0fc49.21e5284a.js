"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[83864],{61622:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"writing-policies/rust/intro-rust","title":"Rust","description":"An introduction to writing Kubewarden policies with Rust.","source":"@site/versioned_docs/version-1.10/writing-policies/rust/01-intro-rust.md","sourceDirName":"writing-policies/rust","slug":"/writing-policies/rust/intro-rust","permalink":"/1.10/writing-policies/rust/intro-rust","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/rust/01-intro-rust.md","tags":[],"version":"1.10","lastUpdatedAt":1737397065000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Rust","title":"Rust","description":"An introduction to writing Kubewarden policies with Rust.","keywords":["kubewarden","kubernetes","writing policies","introduction"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","introduction"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust"]},"sidebar":"docs","previous":{"title":"Writing Policies","permalink":"/1.10/writing-policies/"},"next":{"title":"Creating a policy","permalink":"/1.10/writing-policies/rust/create-policy"}}');var i=s(74848),r=s(28453);const o={sidebar_label:"Rust",title:"Rust",description:"An introduction to writing Kubewarden policies with Rust.",keywords:["kubewarden","kubernetes","writing policies","introduction"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","introduction"],"doc-persona":["kubewarden-developer","kubewarden-developer-rust"]},c=void 0,d={},a=[{value:"Getting the Rust dependencies",id:"getting-the-rust-dependencies",level:2},{value:"OSX dependencies",id:"osx-dependencies",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," is the most mature programming language that can generate WebAssembly modules.\nWebAssembly is a first-class citizen in the Rust world so many of the tools and crates from the Rust ecosystem work out of the box."]}),"\n",(0,i.jsxs)(t.p,{children:["Kubewarden provides a ",(0,i.jsx)(t.a,{href:"https://crates.io/crates/kubewarden-policy-sdk",children:"Rust SDK"})," that simplifies the process of writing policies.\nThere is also a ",(0,i.jsx)(t.a,{href:"https://github.com/kubewarden/rust-policy-template",children:"template project"})," to provide scaffolding for a policy project using the ",(0,i.jsx)(t.a,{href:"https://github.com/cargo-generate/cargo-generate",children:(0,i.jsx)(t.code,{children:"cargo-generate"})})," utility."]}),"\n",(0,i.jsxs)(t.p,{children:["This documentation shows how to use these projects to write Kubewarden policies using Rust.\nIt doesn't cover the details of Kubewarden's Rust SDK.\nThe details are in the ",(0,i.jsx)(t.a,{href:"https://docs.rs/kubewarden-policy-sdk/0.1.0",children:"crate documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-the-rust-dependencies",children:"Getting the Rust dependencies"}),"\n",(0,i.jsxs)(t.p,{children:["Install the Rust compiler and its tools using\n",(0,i.jsx)(t.a,{href:"https://github.com/rust-lang/rustup",children:"rustup"}),".\nRefer to the rustup ",(0,i.jsx)(t.a,{href:"https://rust-lang.github.io/rustup/installation/index.html",children:"install documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you have installed ",(0,i.jsx)(t.code,{children:"rustup"})," add the WebAssembly System Interface (WASI) target:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"rustup target add wasm32-wasi\n"})}),"\n",(0,i.jsx)(t.h2,{id:"osx-dependencies",children:"OSX dependencies"}),"\n",(0,i.jsxs)(t.p,{children:["To use ",(0,i.jsx)(t.code,{children:"cargo-generate"})," you need to add the Xcode tool set.\nIf it isn't installed through Xcode the following command gives you the dependencies needed:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"xcode-select --install\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);