"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[94335],{42574:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=i(85893),o=i(11151);const a={sidebar_label:"Creating a new validation policy",title:""},r="Creating a new validation policy",c={id:"writing-policies/rust/create-policy",title:"",description:"We are going to create a simple validation policy that processes",source:"@site/versioned_docs/version-1.8/writing-policies/rust/02-create-policy.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/create-policy",permalink:"/1.8/writing-policies/rust/create-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/rust/02-create-policy.md",tags:[],version:"1.8",lastUpdatedAt:1725539889e3,sidebarPosition:2,frontMatter:{sidebar_label:"Creating a new validation policy",title:""},sidebar:"docs",previous:{title:"Introduction to Rust",permalink:"/1.8/writing-policies/rust/intro-rust"},next:{title:"Defining Policy Settings",permalink:"/1.8/writing-policies/rust/define-policy-settings"}},s={},l=[{value:"Scaffolding new policy project",id:"scaffolding-new-policy-project",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"creating-a-new-validation-policy",children:"Creating a new validation policy"})}),"\n",(0,t.jsx)(n.p,{children:"We are going to create a simple validation policy that processes\nPod creation requests."}),"\n",(0,t.jsxs)(n.p,{children:["The policy will look at the ",(0,t.jsx)(n.code,{children:"metadata.name"})," attribute of the Pod and reject\nthe pods that have an invalid name. We want the list of invalid names to be\nconfigurable by the end users of the policy."]}),"\n",(0,t.jsx)(n.p,{children:"To summarize, the policy settings will look like that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"invalid_names:\n- bad_name1\n- bad_name2\n"})}),"\n",(0,t.jsx)(n.p,{children:"The policy will accept the creation of a Pod like the following one:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,t.jsx)(n.p,{children:"While it will reject the creation of a Pod like the following one:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: bad_name1\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,t.jsx)(n.h2,{id:"scaffolding-new-policy-project",children:"Scaffolding new policy project"}),"\n",(0,t.jsxs)(n.p,{children:["The creation of a new policy project can be done by feeding this\n",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/rust-policy-template",children:"template project"}),"\ninto ",(0,t.jsx)(n.code,{children:"cargo generate"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["First, install ",(0,t.jsx)(n.code,{children:"cargo-generate"}),". Note, this requires ",(0,t.jsx)(n.a,{href:"https://pkgs.org/download/openssl-devel",children:"openssl-devel"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cargo install cargo-generate\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now scaffold the project as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cargo generate --git https://github.com/kubewarden/rust-policy-template \\\n               --branch main \\\n               --name demo\n"})}),"\n",(0,t.jsx)(n.p,{children:"The command will produce the following output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\ud83d\udd27   Creating project called `demo`...\n\u2728   Done! New project created /home/flavio/hacking/kubernetes/kubewarden/demo\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The new policy project can now be found inside of the ",(0,t.jsx)(n.code,{children:"demo"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["Note: if you plan to make use of the GitHub container registry\nfunctionality in the demo, you will need to\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry#enabling-the-container-registry-for-your-personal-account",children:"enable improved container support"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(67294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);