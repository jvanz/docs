"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[92581],{351:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"howtos/workarounds/policy-server-certificate-expiry","title":"Policy Server certificate rotation issue","description":"How-to work around Policy Server certificate expiry issue","source":"@site/versioned_docs/version-1.14/howtos/workarounds/policy-server-certificate-expiry.md","sourceDirName":"howtos/workarounds","slug":"/howtos/workarounds/policy-server-certificate-expiry","permalink":"/1.14/howtos/workarounds/policy-server-certificate-expiry","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.14/howtos/workarounds/policy-server-certificate-expiry.md","tags":[],"version":"1.14","lastUpdatedAt":1736968585000,"sidebarPosition":10,"frontMatter":{"sidebar_label":"Certificate Rotation","sidebar_position":10,"title":"Policy Server certificate rotation issue","description":"How-to work around Policy Server certificate expiry issue","keywords":["kubewarden","kubernetes","policy server certificates"],"doc-persona":["kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["howto","workarounds","policy server certificates"]},"sidebar":"docs","previous":{"title":"Common tasks","permalink":"/1.14/howtos/tasks"},"next":{"title":"PSP migration","permalink":"/1.14/howtos/psp-migration"}}');var i=t(74848),s=t(28453);const n={sidebar_label:"Certificate Rotation",sidebar_position:10,title:"Policy Server certificate rotation issue",description:"How-to work around Policy Server certificate expiry issue",keywords:["kubewarden","kubernetes","policy server certificates"],"doc-persona":["kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["howto","workarounds","policy server certificates"]},a=void 0,c={},d=[];function u(e){const r={p:"p",...(0,s.R)(),...e.components},{Head:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/policy-server-certificate-expiry"})}),"\n",(0,i.jsx)(r.p,{children:"During the release process for v1.14, a bug related to the policy server certificate rotation was discovered.\nThe Root CA is configured to expire in 10 years, but each policy-server certificate secret has a one-year expiry.\nHowever, the controller is currently unable to renew them automatically."}),"\n",(0,i.jsx)(r.p,{children:"In the v1.14 release, we have ensured that policy-server secrets are created with a 10-year expiry."}),"\n",(0,i.jsx)(r.p,{children:"For future releases we'll implement an automated renewal process."}),"\n",(0,i.jsx)(r.p,{children:"Until then, users can manually delete the expired certificate secret (policy-server-default) and trigger a controller reconciliation.\nYou do this by adding, removing, or updating a policy or by adjusting the number of replicas of a PolicyServer."})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function n(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);