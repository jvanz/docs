"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[36005],{26060:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"reference/spec/host-capabilities/signature-verifier-policies","title":"Signature verifier policies","description":"Signature verifier policies.","source":"@site/versioned_docs/version-1.11/reference/spec/host-capabilities/02-signature-verifier-policies.md","sourceDirName":"reference/spec/host-capabilities","slug":"/reference/spec/host-capabilities/signature-verifier-policies","permalink":"/1.11/reference/spec/host-capabilities/signature-verifier-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/reference/spec/host-capabilities/02-signature-verifier-policies.md","tags":[],"version":"1.11","lastUpdatedAt":1737557822000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Signature verifier policies","title":"Signature verifier policies","description":"Signature verifier policies.","keywords":["kubewarden","kubernetes","policy specification","signature verifier"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","signature-verifier-policies"]},"sidebar":"docs","previous":{"title":"Host capabilities specification","permalink":"/1.11/reference/spec/host-capabilities/intro-host-capabilities"},"next":{"title":"Container registry capabilities","permalink":"/1.11/reference/spec/host-capabilities/container-registry"}}');var s=i(74848),r=i(28453);const a={sidebar_label:"Signature verifier policies",title:"Signature verifier policies",description:"Signature verifier policies.",keywords:["kubewarden","kubernetes","policy specification","signature verifier"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","signature-verifier-policies"]},o=void 0,c={},d=[{value:"An example",id:"an-example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/host-capabilities/signature-verifier-policies"})}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden implements support for the\n",(0,s.jsx)(n.a,{href:"https://www.sigstore.dev/",children:"Sigstore"}),'\nproject.\nThis allows implementing a "Secure Supply Chain" for your cluster.']}),"\n",(0,s.jsxs)(n.p,{children:["Part of the function of the secure supply chain is to ensure that all container images running in the cluster are signed and verified.\nThis proves that they come from their stated authors, with no tampering.\nFor further reading, check the docs on\n",(0,s.jsx)(n.a,{href:"/1.11/howtos/secure-supply-chain",children:"how we implement a Secure Supply Chain for the policies themselves"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Sigstore signatures are stored inside of container registries,\nnext to the OCI object being signed.\nThey can be a container image or a more generic OCI artifact,\nlike a Kubewarden policy.\nWhen an object is signed,\nits signatures are stored as layers of an OCI object created by Sigstore.\nPolicies needing to check signatures of containers need to check those layers,\nand need to pull the signature layers to see the signatures themselves."}),"\n",(0,s.jsxs)(n.p,{children:["Obtaining and operating with those OCI layers needs to happen outside the WebAssembly guest (the policy).\nHence, this is done by the WebAssembly runtime,\nKubewarden's ",(0,s.jsx)(n.code,{children:"policy-server"})," or ",(0,s.jsx)(n.code,{children:"kwctl"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The different language SDKs for Kubewarden policies take care of this.\nThey provide functions for verification of container image,\nKubewarden policies, Helm charts and other kinds of OCI artifact.\nThis ensures a safe and tested code path for verification."}),"\n",(0,s.jsxs)(n.p,{children:["Pulling data from a registry and cryptographically verifying signatures can be time and computationally expensive,\nso the WebAssembly runtime (PolicyServer, ",(0,s.jsx)(n.code,{children:"kwctl"}),") ensures both\nsignature pulls and verification computations are cached.\nThe cached entries are automatically expired after 60 seconds to help prevent stale data from being served."]}),"\n",(0,s.jsx)(n.p,{children:"The SDKs provide functions similar to the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"verify_pub_keys_image(\n    image_url: string,\n    vector_of_pub_keys: vector<string>,\n    vector_of_sigstore_annotations: Vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"verify_keyless_exact_match(\n    image_url: string,\n    vector_of_tuples_issuer_and_subject: vector<(issuer, subject: string)>,\n    vector_of_sigstore_annotations: vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Both functions verify that the image is signed and satisfy the constraints."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"On success, the functions return the digest of the verified image.\nIt is now policy responsibility to ensure that containers are instantiated from that digest,\nand not from a tag that may not match that checksum digest (and therefore be compromised)."})}),"\n",(0,s.jsx)(n.h2,{id:"an-example",children:"An example"}),"\n",(0,s.jsxs)(n.p,{children:["The Kubewarden team\n",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/verify-image-signatures",children:"provides a verifier policy"}),"\nthat enforces Sigstore signatures for all containers.\nIt's built using Rust and with the Rust SDK.\nThe policy ensures that the containers are signed,\nand optionally,\nmutates the requests. The mutation appends the verified checksum to the tag of the image.\nCheck the documentation for specifics."]}),"\n",(0,s.jsx)(n.p,{children:"This policy may cover all your needs, but in case you would prefer a different\nUX, of course you can build on top of it or any of the other SDKs."}),"\n",(0,s.jsx)(n.h1,{id:"wapc-protocol-contract",children:"WaPC protocol contract"}),"\n",(0,s.jsx)(n.p,{children:"In case you are implementing your own language SDK,\nthese are the functions a policy, that verifies signatures, can use:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:" waPC function name "}),(0,s.jsx)("th",{children:" Input payload "}),(0,s.jsx)("th",{children:" Output payload "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstorePubKeyVerify",\n\n  # **mandatory**: image URI to verify\n  "image": string,\n  "pub_keys": [\n    # PEM-encoded public keys\n    string\n    ],\n  # optional:\n  "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreKeylessVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless": [\n    # list of (issuer, subject) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # signature subject (mail, CI URL, ...)\n      "subject": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreKeylessPrefixVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless_prefix": [\n    # list of (issuer, url_prefix) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # URL Prefix of subject (CI URL, ...)\n      "url_prefix": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreGithubActionsVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # GitHub owner\n  "owner": string,\n  # optional:\n  # GitHub repository\n  "repo": string\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v2/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  type: "SigstoreCertificateVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # PEM-encoded certificated used to\n  # verify the signature.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate": [byte(int), ..., byte(int)],\n  # Optional - certificate chain used to\n  # verify the provided certificate.\n  # When not specified, the certificate\n  # is assumed to be trusted.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate_chain": [\n    [byte(int), ..., byte(int)],\n    ...\n    [byte(int), ..., byte(int)]\n  ],\n  # Require the signature layer to have\n  # a Rekor bundle.\n  # Having a Rekor bundle allows further\n  # checks to be performed, e.g. ensuring\n  # the signature has been produced during\n  # the validity time frame of the cert.\n  # Recommended to set to `true`\n  require_rekor_bundle: bool,\n  # Optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]})]}),"\n",(0,s.jsx)(n.p,{children:"Marked for deprecation:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:" WaPC function name "}),(0,s.jsx)("td",{children:" Input payload "}),(0,s.jsx)("td",{children:" Output payload "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v1/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  "SigstorePubKeyVerify": {\n    # **mandatory**: image URI to verify\n    "image": string,\n    "pub_keys": [\n      # PEM-encoded public keys\n      string\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"v1/verify"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n  "SigstoreKeylessVerify": {\n    # mandatory: image URI to verify\n    "image": string,\n    "keyless": [\n      # list of (issuer, subject) tuples\n      {\n        # OIDC issuer\n        "issuer": string,\n        # signature subject (mail, CI URL, ...)\n        "subject": string\n      }\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'})})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);