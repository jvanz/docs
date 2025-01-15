"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[75927],{67921:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator-manual/verification-config","title":"","description":"Example","source":"@site/versioned_docs/version-1.7/operator-manual/verification-config.md","sourceDirName":"operator-manual","slug":"/operator-manual/verification-config","permalink":"/1.7/operator-manual/verification-config","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/operator-manual/verification-config.md","tags":[],"version":"1.7","lastUpdatedAt":1736967532000,"frontMatter":{"sidebar_label":"Verification Config","title":""},"sidebar":"docs","previous":{"title":"Custom Resources Definitions (CRDs)","permalink":"/1.7/operator-manual/CRDs"},"next":{"title":"Quickstart","permalink":"/1.7/operator-manual/ui-extension/install"}}');var s=i(74848),o=i(28453);const r={sidebar_label:"Verification Config",title:""},a="Verification Config",c={},l=[{value:"Example",id:"example",level:2},{value:"Format",id:"format",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"verification-config",children:"Verification Config"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here you can see an example of a configuration for verifying\nsignatures using the Sigstore workflow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"---\napiVersion: v1\n\nallOf:\n  - kind: githubAction\n    owner: kubewarden   # mandatory\n    repo: policy-server # optional\n    annotations:  # optional\n      env: prod\n\nanyOf: # at least `anyOf.minimumMatches` are required to match\n  minimumMatches: 2 # default is 1\n  signatures:\n  - kind: pubKey\n    owner: alice # optional\n    key: | # mandatory\n         -----BEGIN PUBLIC KEY-----\n         MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEQiTy5S+2JFvVlhUwWPLziM7iTM2j\n         byLgh2IjpNQN0Uio/9pZOTP/CsJmXoUNshfpTUHd3OxgHgz/6adtf2nBwQ==\n         -----END PUBLIC KEY-----\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://github.com/login/oauth\n    subject:\n      equal: alice@example.com\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      equal: https://github.com/bob/app-example/.github/workflows/release.yml@refs/heads/main\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      urlPrefix: https://github.com/bob # <- it will be post-fixed with `/` for security reasons\n"})}),"\n",(0,s.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,s.jsx)(n.p,{children:"The config has 2 root keys:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"allOf"}),": All verification info listed here must be satisfied for accepting a\ncontainer image as signed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"anyOf"}),": At least ",(0,s.jsx)(n.code,{children:"anyOf.minimumMatches"})," of all info listed here must be\nsatisfied for accepting a container image as signed."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These two root keys accept an array of keys of type ",(0,s.jsx)(n.code,{children:"kind"}),".\nA full list of accepted keys based on different use cases is given below."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pubKey"}),": for signatures performed with traditional public/private key\ncryptography."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"githubAction"}),": for signatures performed with Sigstore's keyless workflow\ninside GitHub Actions. Kubewarden checks this information against the x509\ncertificate extension ",(0,s.jsx)(n.code,{children:"workflow_repository"})," created by the OpenID Connect of\nGithub, and not only the ",(0,s.jsx)(n.code,{children:"issuer"})," and ",(0,s.jsx)(n.code,{children:"subject"}),". Hence, it is strongly\nrecommended to use this ",(0,s.jsx)(n.code,{children:"kind"})," if dealing with GitHub Actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"genericIssuer"}),": for signatures performed with Sigstore's keyless worfklow,\nwhere the user needs to validate the certificate ",(0,s.jsx)(n.code,{children:"issuer"})," and ",(0,s.jsx)(n.code,{children:"subject"})," on\ntheir own.\nIt accepts a ",(0,s.jsx)(n.code,{children:"subject"}),", which can be:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"equal"}),": the value passed here must match exactly against the ",(0,s.jsx)(n.code,{children:"subject"})," in\nthe signing certificate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"urlPrefix"}),": the value passed here is post-fixed with ",(0,s.jsx)(n.code,{children:"/"})," to prevent\ntypo-squatting, and must be a prefix of the ",(0,s.jsx)(n.code,{children:"subject"})," in the signing\ncertificate."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"kind"})," key optionally accepts an ",(0,s.jsx)(n.code,{children:"annotations"})," key, with a list of\nkey-values, that must be present in the signature."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);