"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[82098],{93201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"explanations/certificates","title":"Certificate rotation","description":"How Kubewarden controller manages its certificates","source":"@site/versioned_docs/version-1.17/explanations/certificates.md","sourceDirName":"explanations","slug":"/explanations/certificates","permalink":"/1.17/explanations/certificates","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.17/explanations/certificates.md","tags":[],"version":"1.17","lastUpdatedAt":1737394843000,"sidebarPosition":25,"frontMatter":{"sidebar_label":"Certificate rotation","sidebar_position":25,"title":"Certificate rotation","description":"How Kubewarden controller manages its certificates","keywords":["kubewarden","certificate","controller","reconciliation"],"doc-persona":["kubewarden-operator"],"doc-type":["explanation"],"doc-topic":["explanations","certificates"]},"sidebar":"docs","previous":{"title":"Policy Groups","permalink":"/1.17/explanations/policy-groups"},"next":{"title":"Distributing policies","permalink":"/1.17/explanations/distributing-policies"}}');var i=n(74848),r=n(28453);const a={sidebar_label:"Certificate rotation",sidebar_position:25,title:"Certificate rotation",description:"How Kubewarden controller manages its certificates",keywords:["kubewarden","certificate","controller","reconciliation"],"doc-persona":["kubewarden-operator"],"doc-type":["explanation"],"doc-topic":["explanations","certificates"]},s=void 0,c={},l=[];function d(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/certificates"})}),"\n",(0,i.jsx)(t.p,{children:"Since Kubewarden v1.17.0, the cert-manager dependency was removed. The\ncontroller is able to manage all the certificates used by all the components.\nThis means that the controller has a new reconciliation loop that ensures the\ncertificates are always up-to-date and the webhook configuration is correct."}),"\n",(0,i.jsx)(t.p,{children:"The first certificate generation is done by the Helm chart installation. It\nwill generate the root CA with ten years until expiration. The Helm chart\ninstallation also generates the controller webhook webserver certificate,\nsigned by the root CA. This is used by the API server to communicate with the\nKubewarden controller to validate the CRDs. It has a one year expiration."}),"\n",(0,i.jsx)(t.p,{children:"Once the controller starts, its reconciler renews the certificates\nautomatically when they are about to expire. It also updates all the\ncertificates and webhook configurations used by the entire Kubewarden stack."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"All the certificates generated by the Helm chart and later by the controller uses\nECDSA P256 keys."})}),"\n",(0,i.jsx)(t.p,{children:"The reconciliation loop renews certificates 60 days before expiration. The\ncertificates are rotated without downtime.\nThe reconciliation loop takes care of renewing the root CA too. 60 days before\nits expiration, a new root CA is generated and the CA bundled used by all the\nwebhooks is updated with one that includes both the new root CA and\nthe old one.\nThe change of the root CA leads the reconciler to recreate the certificates\nissued to the webhooks.\nThe propagation of the new certificates requires some time. However during this\ntime the updated CA bundle allows the API server to continue to communicate\nwith all the webhooks without any downtime."}),"\n",(0,i.jsx)(t.p,{children:"Once the new certificate is ready and the old one is invalid, the controller\nwill update the CA bundle used by the webhooks to include only the latest root CA."}),"\n",(0,i.jsx)(t.p,{children:"When a policy server certificate or the controller webserver certificate is\nrenewed, the controller updates the secret with the new certificate signed by\nthe root CA. Due to this reload feature, the controller, and the policy server,\nuse the new certificate with no need to restart processes, hence no downtime."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);