"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[59812],{59297:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operator-manual/verification-config","title":"Verification configuration","description":"Verification configuration for Kubewarden.","source":"@site/versioned_docs/version-1.10/operator-manual/verification-config.md","sourceDirName":"operator-manual","slug":"/operator-manual/verification-config","permalink":"/1.10/operator-manual/verification-config","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/operator-manual/verification-config.md","tags":[],"version":"1.10","lastUpdatedAt":1737393510000,"frontMatter":{"sidebar_label":"Verification configuration","title":"Verification configuration","description":"Verification configuration for Kubewarden.","keywords":["kubewarden","kubernetes","verification configuration"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["tutorial","howto","reference"],"doc-topic":["operator-manual","verification-config"]},"sidebar":"docs","previous":{"title":"Custom Resources Definitions (CRD)","permalink":"/1.10/operator-manual/CRDs"},"next":{"title":"Rancher UI extension quickstart","permalink":"/1.10/operator-manual/ui-extension/install"}}');var o=i(74848),r=i(28453);const s={sidebar_label:"Verification configuration",title:"Verification configuration",description:"Verification configuration for Kubewarden.",keywords:["kubewarden","kubernetes","verification configuration"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["tutorial","howto","reference"],"doc-topic":["operator-manual","verification-config"]},a=void 0,c={},d=[{value:"Example",id:"example",level:2},{value:"Format",id:"format",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"Here you can see an example of a configuration for verifying\nsignatures using the Sigstore workflow:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"---\napiVersion: v1\n\nallOf:\n  - kind: githubAction\n    owner: kubewarden   # mandatory\n    repo: policy-server # optional\n    annotations:  # optional\n      env: prod\n\nanyOf: # at least `anyOf.minimumMatches` are required to match\n  minimumMatches: 2 # default is 1\n  signatures:\n  - kind: pubKey\n    owner: alice # optional\n    key: | # mandatory\n         -----BEGIN PUBLIC KEY-----\n         MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEQiTy5S+2JFvVlhUwWPLziM7iTM2j\n         byLgh2IjpNQN0Uio/9pZOTP/CsJmXoUNshfpTUHd3OxgHgz/6adtf2nBwQ==\n         -----END PUBLIC KEY-----\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://github.com/login/oauth\n    subject:\n      equal: alice@example.com\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      equal: https://github.com/bob/app-example/.github/workflows/release.yml@refs/heads/main\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      urlPrefix: https://github.com/bob # <- it will be post-fixed with `/` for security reasons\n"})}),"\n",(0,o.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,o.jsx)(n.p,{children:"The config has 2 root keys:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"allOf"}),": All verification info listed here must be satisfied for accepting a\ncontainer image as signed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"anyOf"}),": At least ",(0,o.jsx)(n.code,{children:"anyOf.minimumMatches"})," of all info listed here must be\nsatisfied for accepting a container image as signed."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["These two root keys accept an array of keys of type ",(0,o.jsx)(n.code,{children:"kind"}),".\nA full list of accepted keys based on different use cases is given below."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pubKey"}),": for signatures performed with traditional public/private key\ncryptography."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"githubAction"}),": for signatures performed with Sigstore's keyless workflow\ninside GitHub Actions. Kubewarden checks this information against the x509\ncertificate extension ",(0,o.jsx)(n.code,{children:"workflow_repository"})," created by the OpenID Connect of\nGithub, and not only the ",(0,o.jsx)(n.code,{children:"issuer"})," and ",(0,o.jsx)(n.code,{children:"subject"}),". Hence, it is strongly\nrecommended to use this ",(0,o.jsx)(n.code,{children:"kind"})," if dealing with GitHub Actions."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"genericIssuer"}),": for signatures performed with Sigstore's keyless worfklow,\nwhere the user needs to validate the certificate ",(0,o.jsx)(n.code,{children:"issuer"})," and ",(0,o.jsx)(n.code,{children:"subject"})," on\ntheir own.\nIt accepts a ",(0,o.jsx)(n.code,{children:"subject"}),", which can be:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"equal"}),": the value passed here must match exactly against the ",(0,o.jsx)(n.code,{children:"subject"})," in\nthe signing certificate."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"urlPrefix"}),": the value passed here is post-fixed with ",(0,o.jsx)(n.code,{children:"/"})," to prevent\ntypo-squatting, and must be a prefix of the ",(0,o.jsx)(n.code,{children:"subject"})," in the signing\ncertificate."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["the ",(0,o.jsx)(n.code,{children:"kind"})," key optionally accepts an ",(0,o.jsx)(n.code,{children:"annotations"})," key, with a list of\nkey-values, that must be present in the signature."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);