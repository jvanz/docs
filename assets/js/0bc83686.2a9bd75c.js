"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[70757],{97727:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"reference/verification-config","title":"Verification configuration format","description":"Verification configuration for Kubewarden.","source":"@site/versioned_docs/version-1.15/reference/verification-config.md","sourceDirName":"reference","slug":"/reference/verification-config","permalink":"/1.15/reference/verification-config","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.15/reference/verification-config.md","tags":[],"version":"1.15","lastUpdatedAt":1737393799000,"sidebarPosition":100,"frontMatter":{"sidebar_label":"Verification configuration format","sidebar_position":100,"title":"Verification configuration format","description":"Verification configuration for Kubewarden.","keywords":["kubewarden","kubernetes","verification configuration"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","verification-config"]},"sidebar":"docs","previous":{"title":"Policy evaluation timeout","permalink":"/1.15/reference/policy-evaluation-timeout"},"next":{"title":"sources.yaml","permalink":"/1.15/reference/sources_yaml"}}');var s=i(74848),o=i(28453);const r={sidebar_label:"Verification configuration format",sidebar_position:100,title:"Verification configuration format",description:"Verification configuration for Kubewarden.",keywords:["kubewarden","kubernetes","verification configuration"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","verification-config"]},a=void 0,c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2},{value:"Signature configuration reference",id:"signature-configuration-reference",level:2},{value:"Signature validation",id:"signature-validation",level:3},{value:"Public key validation",id:"public-key-validation",level:3},{value:"Keyless signature validation",id:"keyless-signature-validation",level:3},{value:"GitHub actions signature verification",id:"github-actions-signature-verification",level:3},{value:"Signature annotations validation",id:"signature-annotations-validation",level:3},{value:"Using a signature verification configuration file to check a policy OCI artifact",id:"using-a-signature-verification-configuration-file-to-check-a-policy-oci-artifact",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:i,Head:t}=n;return i||h("Details",!0),t||h("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/verification-config"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"The verification-config format is used by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"policy-server"})," to verify policy modules provenance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verify-image-signatures"})," policy to verify cluster images provenance"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/1.15/howtos/secure-supply-chain",children:"secure supply chain"})," for more info."]}),"\n",(0,s.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,s.jsx)(n.p,{children:"The config has 2 root keys:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"allOf"}),": All verification info listed here must be satisfied for accepting a\ncontainer image as signed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"anyOf"}),": At least ",(0,s.jsx)(n.code,{children:"anyOf.minimumMatches"})," of all info listed here must be\nsatisfied for accepting a container image as signed."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These two root keys accept an array of keys of type ",(0,s.jsx)(n.code,{children:"kind"}),".\nA full list of accepted keys based on different use cases is given below."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pubKey"}),": for signatures performed with traditional public/private key\ncryptography."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"githubAction"}),": for signatures performed with Sigstore's keyless workflow\ninside GitHub Actions. Kubewarden checks this information against the x509\ncertificate extension ",(0,s.jsx)(n.code,{children:"workflow_repository"})," created by the OpenID Connect of\nGithub, and not only the ",(0,s.jsx)(n.code,{children:"issuer"})," and ",(0,s.jsx)(n.code,{children:"subject"}),". Hence, it is strongly\nrecommended to use this ",(0,s.jsx)(n.code,{children:"kind"})," if dealing with GitHub Actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"genericIssuer"}),": for signatures performed with Sigstore's keyless worfklow,\nwhere the user needs to validate the certificate ",(0,s.jsx)(n.code,{children:"issuer"})," and ",(0,s.jsx)(n.code,{children:"subject"})," on\ntheir own.\nIt accepts a ",(0,s.jsx)(n.code,{children:"subject"}),", which can be:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"equal"}),": the value passed here must match exactly against the ",(0,s.jsx)(n.code,{children:"subject"})," in\nthe signing certificate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"urlPrefix"}),": the value passed here is post-fixed with ",(0,s.jsx)(n.code,{children:"/"})," to prevent\ntypo-squatting, and must be a prefix of the ",(0,s.jsx)(n.code,{children:"subject"})," in the signing\ncertificate."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"kind"})," key optionally accepts an ",(0,s.jsx)(n.code,{children:"annotations"})," key, with a list of\nkey-values, that must be present in the signature."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here you can see an example of a configuration for verifying\nsignatures using the Sigstore workflow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"---\napiVersion: v1\n\nallOf:\n  - kind: githubAction\n    owner: kubewarden   # mandatory\n    repo: policy-server # optional\n    annotations:  # optional\n      env: prod\n\nanyOf: # at least `anyOf.minimumMatches` are required to match\n  minimumMatches: 2 # default is 1\n  signatures:\n  - kind: pubKey\n    owner: alice # optional\n    key: | # mandatory\n         -----BEGIN PUBLIC KEY-----\n         MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEQiTy5S+2JFvVlhUwWPLziM7iTM2j\n         byLgh2IjpNQN0Uio/9pZOTP/CsJmXoUNshfpTUHd3OxgHgz/6adtf2nBwQ==\n         -----END PUBLIC KEY-----\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://github.com/login/oauth\n    subject:\n      equal: alice@example.com\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      equal: https://github.com/bob/app-example/.github/workflows/release.yml@refs/heads/main\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      urlPrefix: https://github.com/bob # <- it will be post-fixed with `/` for security reasons\n"})}),"\n",(0,s.jsx)(n.h2,{id:"signature-configuration-reference",children:"Signature configuration reference"}),"\n",(0,s.jsx)(n.p,{children:"You can validate signature requirements contained in a file. Here is an example:"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:"A file of signature requirements"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\n\n//highlight-next-line\nallOf:\n  - kind: githubAction\n    owner: kubewarden   # mandatory\n    annotations:\n      env: prod\n\n//highlight-next-line\nanyOf: # at least `anyOf.minimumMatches` are required to match\n  minimumMatches: 2 # default is 1\n  signatures:\n  - kind: pubKey\n    owner: flavio # optional\n    key: .... # mandatory\n    annotations:  # optional\n      env: prod\n      foo: bar\n  - kind: pubKey\n    owner: victor # optional\n    key: .... # mandatory\n  - kind: genericIssuer\n    issuer: https://github.com/login/oauth\n    subject:\n      equal: alice@example.com\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      equal: https://github.com/flavio/policy-secure-pod-images/.github/workflows/release.yml@refs/heads/main\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      urlPrefix: https://github.com/flavio/\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      urlPrefix: https://github.com/kubewarden # <- it will be post-fixed with `/` for security reasons\n  - kind: githubAction\n    owner: flavio   # mandatory\n    repo: policy1 # optional\n  - kind: pubKey\n    owner: alice # optional\n    key: .... # mandatory\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"signature-validation",children:"Signature validation"}),"\n",(0,s.jsxs)(n.p,{children:["The configuration above contains the two highlighted sections, ",(0,s.jsx)(n.code,{children:"allOf"})," and ",(0,s.jsx)(n.code,{children:"anyOf"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"allOf"}),": The policy is trusted only if all signature requirements here are valid."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"anyOf"}),":  The policy is trusted if the ",(0,s.jsx)(n.code,{children:"minimumMatches"})," criterion is met.\nAbove, the ",(0,s.jsx)(n.code,{children:"minimumMatches"})," field is 2.\nSo, at least two of the signature requirements must be met.\nThe default value for ",(0,s.jsx)(n.code,{children:"minimumMatches"})," field is ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All the signatures requirements from ",(0,s.jsx)(n.code,{children:"allOf"})," ",(0,s.jsx)(n.strong,{children:"and"})," the minimum number from ",(0,s.jsx)(n.code,{children:"anyOf"})," must be met."]}),"\n",(0,s.jsx)(n.h3,{id:"public-key-validation",children:"Public key validation"}),"\n",(0,s.jsxs)(n.p,{children:["To check a policy is signed with the correct public key, you specify the key data and the owner of the key.\nIn this example, ",(0,s.jsx)(n.code,{children:"kind"})," is set to ",(0,s.jsx)(n.code,{children:"pubKey"})," and the ",(0,s.jsx)(n.code,{children:"key"})," has the public key.\nThe owner field is optional, but can be useful to clarify who owns the key."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  - kind: pubKey\n    owner: bob # optional\n    key: |\n      -----BEGIN PUBLIC KEY-----\n      MBFKHFDGHKIJH0CAQYIKoZIzj0DAQcDQgAEX0HFTtCfTtPmkx5p1RbDE6HJSGAVD\n      BVDF6SKFSF87AASUspkQsN3FO4iyWodCy5j3o0CdIJD/KJHDJFHDFIu6sA==\n      -----END PUBLIC KEY-----\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keyless-signature-validation",children:"Keyless signature validation"}),"\n",(0,s.jsxs)(n.p,{children:["A policy signed in keyless mode doesn't have a public key we can verify.\nYou can still verify the policy with the OIDC data used during the signing process.\nFor that, it's necessary to define the signature validation as ",(0,s.jsx)(n.code,{children:"genericIssuer"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"It's possible to verify information from the signature:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"issuer"}),"(mandatory): this matches the ",(0,s.jsx)(n.code,{children:"Issuer"})," attribute in the certificate generated by Fulcio.\nThis shows the OIDC used to sign the policy."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subject"}),": field used to match the ",(0,s.jsx)(n.code,{children:"Subject"})," attribute in Fulcio's certificate.\nThe ",(0,s.jsx)(n.code,{children:"Subject"})," (Fulcio) field contains the user used to authenticate against the OIDC provider.\nThe verification field, ",(0,s.jsx)(n.code,{children:"subject"}),", can have one of two sub fields:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"equal"}),": the ",(0,s.jsx)(n.code,{children:"Subject"})," (Fulcio) from the certificate must be equal to the value in the signature validation;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"urlPrefix"}),": the certificate's ",(0,s.jsx)(n.code,{children:"Subject"})," (Fulcio) field value must be prefixed by the value defined in the signature validation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Both the ",(0,s.jsx)(n.code,{children:"cosign verify"})," and the ",(0,s.jsx)(n.code,{children:"kwctl inspect"})," can show information about keyless signatures."]})}),"\n",(0,s.jsx)(n.p,{children:"For example, this configuration means the policy must have a keyless signature from Alice using the GitHub OIDC:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- kind: genericIssuer\n  issuer: https://github.com/login/oauth\n  subject:\n    equal: alice@example.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This configuration needs the policy to be signed in GitHub actions,\nfrom a repository owned by the GitHub user ",(0,s.jsx)(n.code,{children:"flavio"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- kind: genericIssuer\n  issuer: https://token.actions.githubusercontent.com\n  subject:\n    urlPrefix: https://github.com/flavio\n"})}),"\n",(0,s.jsx)(n.h3,{id:"github-actions-signature-verification",children:"GitHub actions signature verification"}),"\n",(0,s.jsxs)(n.p,{children:['The "kind", ',(0,s.jsx)(n.code,{children:"githubAction"})," is to validate policies signed in GitHub Actions.\nYou can do this with the ",(0,s.jsx)(n.code,{children:"genericIssuer"})," kind as well.\nTo simplify the signature requirement process, use two extra fields for ",(0,s.jsx)(n.code,{children:"githubAction"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"owner"})," (mandatory): GitHub ID of the user or organization to trust"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"repo"}),": the name of the repository to trust"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the last snippet, using ",(0,s.jsx)(n.code,{children:"genericIssuer"}),", could be rewritten as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- kind: githubAction\n  owner: flavio\n"})}),"\n",(0,s.jsx)(n.h3,{id:"signature-annotations-validation",children:"Signature annotations validation"}),"\n",(0,s.jsxs)(n.p,{children:["All signature types can have other optional validation fields, ",(0,s.jsx)(n.code,{children:"annotations"}),".\nThese fields are key/value data added by during the signing process."]}),"\n",(0,s.jsxs)(n.p,{children:["With Kubewarden, you can ensure policies are signed by trusted users\n",(0,s.jsx)(n.strong,{children:"and"})," have specific annotations."]}),"\n",(0,s.jsx)(n.p,{children:"The next validation checks 2 conditions for the policy:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"that it's signed with a specific key"}),"\n",(0,s.jsx)(n.li,{children:"it has a production environment annotation."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- kind: pubKey\n  key: |\n    -----BEGIN PUBLIC KEY-----\n    MBFKHFDGHKIJH0CAQYIKoZIzj0DAQcDQgAEX0HFTtCfTtPmkx5p1RbDE6HJSGAVD\n    BVDF6SKFSF87AASUspkQsN3FO4iyWodCy5j3o0CdIJD/KJHDJFHDFIu6sA==\n    -----END PUBLIC KEY-----\n  annotations:\n    environment: production\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-a-signature-verification-configuration-file-to-check-a-policy-oci-artifact",children:"Using a signature verification configuration file to check a policy OCI artifact"}),"\n",(0,s.jsxs)(n.p,{children:["You can test if a policy passes verification using the verification config file.\nUse the ",(0,s.jsx)(n.code,{children:"--verification-config-path"}),"  flag of the ",(0,s.jsx)(n.code,{children:"kwctl verify"})," command"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ cat signatures_requirements.yaml\napiVersion: v1\nallOf:\n  - kind: pubKey\n    key: |\n      -----BEGIN PUBLIC KEY-----\n      MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5Q+cN1Jj2S7N05J4AXnqwP2DyzSg\n      Mc+raYce2Wthrd30MSgFtoh5ADAkCd/nML2Nx8UD9KBuASRb0gG5jXqgMQ==\n      -----END PUBLIC KEY-----\n\n$ kwctl verify --verification-config-path signatures_requirements.yaml ghcr.io/kubewarden/policies/user-group-psp:latest\n2022-03-29T17:34:37.847169Z  INFO kwctl::verify: Policy successfully verified\n"})}),"\n",(0,s.jsx)(n.p,{children:"This last example tests if a given policy came from the Kubewarden organization:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ cat kubewarden_signatures.yaml\napiVersion: v1\nallOf:\n  - kind: githubAction\n    owner: kubewarden\n\n$ kwctl verify --verification-config-path kubewarden_signatures.yaml ghcr.io/kubewarden/policies/user-group-psp:latest\n2022-03-29T18:07:39.062292Z  INFO kwctl::verify: Policy successfully verified\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);