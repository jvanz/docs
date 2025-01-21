"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[23289],{17711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorials/verifying-kubewarden","title":"Verifying Kubewarden","description":"Verifying Kubewarden.","source":"@site/versioned_docs/version-1.18/tutorials/verifying-kubewarden.md","sourceDirName":"tutorials","slug":"/tutorials/verifying-kubewarden","permalink":"/1.18/tutorials/verifying-kubewarden","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.18/tutorials/verifying-kubewarden.md","tags":[],"version":"1.18","lastUpdatedAt":1737463692000,"sidebarPosition":30,"frontMatter":{"sidebar_label":"Verifying Kubewarden","sidebar_position":30,"title":"Verifying Kubewarden","description":"Verifying Kubewarden.","keywords":["kubewarden","kubernetes","security","verification"],"doc-persona":["kubewarden-operator","kubewarden-policy-developer","kubewarden-integrator"],"doc-type":["tutorial"],"doc-topic":["security","verifying-kubewarden"]},"sidebar":"docs","previous":{"title":"Cluster operators","permalink":"/1.18/tutorials/testing-policies/cluster-operators"},"next":{"title":"Publish to Artifact Hub","permalink":"/1.18/tutorials/publish-policy-to-artifact-hub"}}');var s=t(74848),r=t(28453);const a={sidebar_label:"Verifying Kubewarden",sidebar_position:30,title:"Verifying Kubewarden",description:"Verifying Kubewarden.",keywords:["kubewarden","kubernetes","security","verification"],"doc-persona":["kubewarden-operator","kubewarden-policy-developer","kubewarden-integrator"],"doc-type":["tutorial"],"doc-topic":["security","verifying-kubewarden"]},o=void 0,c={},d=[{value:"Container images",id:"container-images",level:2},{value:"Helm charts",id:"helm-charts",level:2},{value:"kwctl",id:"kwctl",level:2},{value:"Policies",id:"policies",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/verifying-kubewarden"})}),"\n",(0,s.jsx)(n.p,{children:"The Kubewarden stack provides different attestations and assurances:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Provenance attestations: Inform of the build process, build dependencies,\nand aids in replicating the builds. Implement\n",(0,s.jsx)(n.a,{href:"https://slsa.dev/spec/v1.0/",children:"SLSA"})," Standard (level 3 in our case)."]}),"\n",(0,s.jsx)(n.li,{children:"SBOMs attestations: Contain the software dependencies. Help downstream\nconsumers ascertain vulnerabilities of Kubewarden and its dependencies."}),"\n",(0,s.jsx)(n.li,{children:"Signed artifacts: Indicate if an artifact is authentic or not, providing\nsupply chain security. This includes the deliverables, but also the provenance\nand SBOM attestations."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden artifacts, provenance attestations and SBOMs are signed using\n",(0,s.jsx)(n.a,{href:"https://docs.sigstore.dev",children:"Sigstore"}),", with the keyless workflow. This means\nthat the signing certificate contains the following info, where ",(0,s.jsx)(n.code,{children:"*"})," matches any\nfollowing characters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["issuer: ",(0,s.jsx)(n.code,{children:"https://token.actions.githubusercontent.com"})]}),"\n",(0,s.jsxs)(n.li,{children:["subject: ",(0,s.jsx)(n.code,{children:"https://github.com/kubewarden/*"})]}),"\n",(0,s.jsxs)(n.li,{children:['x509 certificate extension for GHA, "github_workflow_repository": ',(0,s.jsx)(n.code,{children:"kubewarden/*"})]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.p,{children:["The subject used in the ",(0,s.jsx)(n.code,{children:"--certificate-identity-regexp"})," cosign CLI flag in this\ntutorial utilizes the ",(0,s.jsx)(n.code,{children:"https://github.com/kubewarden/*"})," values to simplify the\nexplanation. However, this allows artifacts from repositories with the same prefix to\nbypass validation. For example: ",(0,s.jsx)(n.code,{children:"github.com/kubewarden/policy-server1"}),"."]}),(0,s.jsx)(n.p,{children:"If you want a more secure check, you need to use a full URL:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://github.com/kubewarden/policy-server/.github/workflows/container-image.yml@refs/tags/v1.18.0\n"})}),(0,s.jsxs)(n.p,{children:["Note that the URL includes the full repository path, the workflow file path,\nand the version tag. If you follow this best practice, you can use the cosign\nCLI flag ",(0,s.jsx)(n.code,{children:"--certificate-identity"})," with the full URL."]})]}),"\n",(0,s.jsx)(n.h2,{id:"container-images",children:"Container images"}),"\n",(0,s.jsxs)(n.p,{children:["To verify the keyless-signed container images produced by the Kubewarden team,\nyou can use the ",(0,s.jsx)(n.code,{children:"cosign"})," CLI tool. For example, to verify the\n",(0,s.jsx)(n.code,{children:"kubewarden/policy-server"})," image, you can execute the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cosign verify ghcr.io/kubewarden/policy-server:v1.18.0 \\\n  --certificate-identity-regexp 'https://github.com/kubewarden/*' \\\n  --certificate-oidc-issuer https://token.actions.githubusercontent.com\n\nVerification for ghcr.io/kubewarden/policy-server:v1.18.0 --\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - The code-signing certificate was verified using trusted certificate authority certificates\n\n<snipped json>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can then verify that the certificate in the returned JSON contains the\ncorrect issuer, subject, and ",(0,s.jsx)(n.code,{children:"github_workflow_repository"})," extensions."]}),"\n",(0,s.jsxs)(n.p,{children:["The same applies to all other images produced by the Kubewarden team, such as\n",(0,s.jsx)(n.code,{children:"kubewarden/kubewarden-controller"})," and ",(0,s.jsx)(n.code,{children:"kubewarden/audit-scanner"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"All container images also have SBOM and provenance files that can be used to\nensure the secure supply chain of the images. You can find attestation files on\nthe release page of the component or attached to the container image in the OCI\nregistry."}),"\n",(0,s.jsxs)(n.p,{children:["We use Docker to build the images and their attestations. However, the cosign\ncommand ",(0,s.jsx)(n.a,{href:"https://github.com/sigstore/cosign/issues/2688",children:"does not yet support"}),"\nthe verification of the attestations generated by Docker from the OCI registry.\nFor this reason, you need to download the files from the release page or the\nregistry and verify them locally. If you want to download the attestation files\nfrom the OCI registry, you can follow the ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/build/metadata/attestations/attestation-storage/",children:"Docker\ndocumentation"}),"\nand use tools like ",(0,s.jsx)(n.code,{children:"crane"})," or ",(0,s.jsx)(n.code,{children:"docker"})," itself to download the files from the\nregistry."]}),"\n",(0,s.jsx)(n.p,{children:"When downloading the tarball with attestation files from the release page of\nthe Kubewarden components, extract them, verify the signature for the checksum\nfile, and then check the attestation files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'$ tar -xvf attestation-amd64.tar.gz\n\n$ cosign verify-blob --bundle audit-scanner-attestation-amd64-checksum-cosign.bundle \\\n    --certificate-oidc-issuer=https://token.actions.githubusercontent.com \\\n    --certificate-identity="https://github.com/kubewarden/audit-scanner/.github/workflows/attestation.yml@refs/tags/v1.18.0" \\\n    audit-scanner-attestation-amd64-checksum.txt\nVerified OK\n\n$ sha256sum -c audit-scanner-attestation-amd64-checksum.txt\naudit-scanner-attestation-amd64-provenance.json: OK\naudit-scanner-attestation-amd64-sbom-451fac2e52226302ff449bfe053b3831fd93409b4dad24581b6121cc24daa2c2.json: OK\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now that the files integrity is verified, you can inspect the SBOM and Provenance files."}),"\n",(0,s.jsx)(n.h2,{id:"helm-charts",children:"Helm charts"}),"\n",(0,s.jsxs)(n.p,{children:["You can find our Helm charts in our ",(0,s.jsx)(n.code,{children:"https://"})," traditional Helm repository under\n",(0,s.jsx)(n.a,{href:"https://charts.kubewarden.io",children:"https://charts.kubewarden.io"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The same Helm charts are signed via Sigstore's keyless signing, and pushed to an\nOCI repository that holds both the Helm chart, its signature, and its\nprovenance attestation as OCI artifacts."}),"\n",(0,s.jsxs)(n.p,{children:["Since Helm 3.8.0, Helm has support for OCI registries, but because of\nconstraints in them, they can't be searched via ",(0,s.jsx)(n.code,{children:"helm"}),". You can find the\n",(0,s.jsx)(n.a,{href:"https://github.com/orgs/kubewarden/packages?tab=packages&q=charts",children:"list of charts in GitHub Container Registry"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To verify a Helm chart, you need ",(0,s.jsx)(n.code,{children:"cosign"})," installed. Then execute the following\ncommand, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cosign verify ghrc.io/kubewarden/charts/kubewarden-defaults:1.5.4 \\\n  --certificate-identity-regexp 'https://github.com/kubewarden/*' \\\n  --certificate-oidc-issuer https://token.actions.githubusercontent.com\n\nVerification for ghcr.io/kubewarden/charts/kubewarden-defaults:1.5.4 --\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - The code-signing certificate was verified using trusted certificate authority certificates\n\n<snipped json>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can then verify that the cert in the returned json contains the correct\nissuer, subject, and ",(0,s.jsx)(n.code,{children:"github_workflow_repository"})," extensions."]}),"\n",(0,s.jsxs)(n.p,{children:["The chart attestations are pushed to the OCI registry as an artifact layer. See the\n",(0,s.jsx)(n.a,{href:"#container-images",children:"container images"})," section on how to verify them."]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden charts ship ",(0,s.jsx)(n.code,{children:"imagelist.txt"})," and (",(0,s.jsx)(n.code,{children:"policylist.txt"})," when relevant) inside\nof the chart. Hence, if you already verified the chart, you can use those lists\nto verify the consumed container images and policies."]}),"\n",(0,s.jsxs)(n.p,{children:["Kubewarden also follows the usual practices with regards to Helm charts. Hence, one\ncan also find all the images in the Helm charts with a plugin such as\n",(0,s.jsx)(n.a,{href:"https://github.com/cvila84/helm-image",children:"helm-image"}),", or with the following script:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/usr/bin/env bash\nhelm pull --untar kubewarden/kubewarden-controller && \\\nhelm pull --untar kubewarden/kubewarden-defaults && \\\n{ helm template ./kubewarden-controller; helm template ./kubewarden-defaults } \\\n    | yq '..|.image? | select(.)' \\\n    | sort -u | sed 's/\"//g'\n"})}),"\n",(0,s.jsx)(n.p,{children:"which gives us:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ghcr.io/kubewarden/kubewarden-controller:v0.5.5\nghcr.io/kubewarden/policy-server:v0.3.1\nghcr.io/kubewarden/kubectl:v1.21.4\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, for each image in that list you can verify their Sigstore signatures following the\ninstructions from the ",(0,s.jsx)(n.a,{href:"#container-images",children:"previous section"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"kwctl",children:"kwctl"}),"\n",(0,s.jsxs)(n.p,{children:["kwctl binaries are signed using ",(0,s.jsx)(n.a,{href:"https://docs.sigstore.dev/signing/signing_with_blobs/",children:"Sigstore's blog signing"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When you download a ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases/",children:"kwctl\nrelease"})," each zip file contains\ntwo files that can be used for verification: ",(0,s.jsx)(n.code,{children:"kwctl.sig"})," and ",(0,s.jsx)(n.code,{children:"kwctl.pem"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In order to verify kwctl you need cosign installed, and then execute the\nfollowing command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cosign verify-blob \\\n  --signature kwctl-linux-x86_64.sig \\\n  --cert kwctl-linux-x86_64.pem kwctl-linux-x86_64\n  --certificate-identity-regexp 'https://github.com/kubewarden/*' \\\n  --certificate-oidc-issuer https://token.actions.githubusercontent.com\n\nVerified OK\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can then verify that the cert in the returned json contains the correct\nissuer, subject, and ",(0,s.jsx)(n.code,{children:"github_workflow_repository"})," extensions."]}),"\n",(0,s.jsxs)(n.p,{children:["The SBOMs are signed and published in the ",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/releases",children:"GitHub\nRelease"})," of the project."]}),"\n",(0,s.jsxs)(n.p,{children:["The provenance attestation for ",(0,s.jsx)(n.code,{children:"kwctl"})," is verified by using ",(0,s.jsx)(n.a,{href:"https://cli.github.com/manual/gh_attestation_verify",children:(0,s.jsx)(n.code,{children:"gh attestation verify"})}),". For\nexample with ",(0,s.jsx)(n.code,{children:" gh attestation verify kwctl-linux-x86_64 --repo kubewarden/kwctl"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"policies",children:"Policies"}),"\n",(0,s.jsxs)(n.p,{children:["Policies maintained by the Kubewarden team are also signed using the Sigstore project. Similar to\nusual container images, one can verify them using ",(0,s.jsx)(n.code,{children:"cosign"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cosign verify ghcr.io/kubewarden/policies/verify-image-signatures:v0.2.5 \\\n  --certificate-identity-regexp 'https://github.com/kubewarden/*' \\\n  --certificate-oidc-issuer https://token.actions.githubusercontent.com\n\nVerification for ghcr.io/kubewarden/policies/verify-image-signatures:v0.2.5 --\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - The code-signing certificate was verified using trusted certificate authority certificates\n\n  <snipped json>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can then verify that the cert in the returned json contains the correct\nissuer, subject, and ",(0,s.jsx)(n.code,{children:"github_workflow_repository"})," extensions."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);