"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[83074],{4723:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"distributing-policies/oci-registries-support","title":"OCI registry support for Kubewarden","description":"OCI registry support for Kubewarden.","source":"@site/versioned_docs/version-1.10/distributing-policies/oci-registries-support.md","sourceDirName":"distributing-policies","slug":"/distributing-policies/oci-registries-support","permalink":"/1.10/distributing-policies/oci-registries-support","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/distributing-policies/oci-registries-support.md","tags":[],"version":"1.10","lastUpdatedAt":1737080429000,"frontMatter":{"sidebar_label":"OCI registry support","title":"OCI registry support for Kubewarden","description":"OCI registry support for Kubewarden.","keywords":["kubewarden","kubernetes","oci registry support"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["distributing-policies","oci-registries-support"]},"sidebar":"docs","previous":{"title":"Kubernetes capabilities","permalink":"/1.10/writing-policies/spec/host-capabilities/kubernetes"},"next":{"title":"Threat Model","permalink":"/1.10/security/threat-model"}}');var s=i(74848),o=i(28453);const n={sidebar_label:"OCI registry support",title:"OCI registry support for Kubewarden",description:"OCI registry support for Kubewarden.",keywords:["kubewarden","kubernetes","oci registry support"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["distributing-policies","oci-registries-support"]},c=void 0,a={},d=[{value:"Projects implementing OCI registries",id:"projects-implementing-oci-registries",level:2},{value:"Hosted OCI registries",id:"hosted-oci-registries",level:2},{value:"Tools that work with OCI registries",id:"tools-that-work-with-oci-registries",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Docker Hub",id:"docker-hub",level:3},{value:"JFrog",id:"jfrog",level:3}];function h(e){const r={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Kubewarden policies are distributed as\n",(0,s.jsx)(r.a,{href:"https://github.com/opencontainers/artifacts",children:"OCI Artifacts"}),"\nusing regular Open Container Initiative (OCI) registries."]}),"\n",(0,s.jsx)(r.p,{children:"Policies are stored alongside container images.\nThey don't require extra setup or maintenance\nother than that needed for regular container images."}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["You can add a registry that works with Kubewarden or\ncorrect any registry inaccuracies with a pull request against\n",(0,s.jsx)(r.a,{href:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/oci-registries-support.md",children:"this document"}),"\nto fix it."]})}),"\n",(0,s.jsx)(r.h2,{id:"projects-implementing-oci-registries",children:"Projects implementing OCI registries"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://goharbor.io/",children:"Harbor"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/distribution/distribution",children:"Distribution"})," (",(0,s.jsx)(r.a,{href:"https://github.com/distribution/distribution/releases/tag/v2.7.0",children:">= 2.7.0"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://access.redhat.com/products/red-hat-quay/",children:"Quay"}),": Supported, but ",(0,s.jsx)(r.a,{href:"https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/use_red_hat_quay/oci-intro#other-oci-artifacts-with-quay",children:"disabled by default in v3.6"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"hosted-oci-registries",children:"Hosted OCI registries"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/container-registry/",children:"GitHub Container Registry"}),". See ",(0,s.jsx)(r.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",children:"here"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://quay.io",children:"Quay.io"}),". See projects list above."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://aws.amazon.com/ecr/",children:"Amazon ECR"}),": See ",(0,s.jsx)(r.a,{href:"https://aws.amazon.com/blogs/containers/oci-artifact-support-in-amazon-ecr/",children:"here"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://cloud.google.com/artifact-registry",children:"Google Artifact Registry"}),". See ",(0,s.jsx)(r.a,{href:"https://cloud.google.com/anthos-config-management/docs/how-to/sync-oci-artifacts-from-artifact-registry",children:"here"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://azure.microsoft.com/en-us/products/container-registry/",children:"Azure Container Registry"}),". See ",(0,s.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/container-registry/container-registry-oci-artifacts",children:"here"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://hub.docker.com/",children:"Docker Hub"}),". See ",(0,s.jsx)(r.a,{href:"https://docs.docker.com/docker-hub/oci-artifacts/",children:"here"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://cloud.ibm.com/docs/Registry",children:"IBM Cloud Container Registry"}),". See ",(0,s.jsx)(r.a,{href:"https://cloud.ibm.com/docs/Registry?topic=Registry-registry_helm_charts",children:"here"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://jfrog.com/artifactory/",children:"JFrog Artifactory"}),". See ",(0,s.jsx)(r.a,{href:"https://jfrog.com/help/r/jfrog-artifactory-documentation/docker-registry",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"tools-that-work-with-oci-registries",children:"Tools that work with OCI registries"}),"\n",(0,s.jsx)(r.p,{children:"We recommend:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/kubewarden/kwctl",children:"Kwctl"})," (our cli tool)."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/containers/skopeo",children:"Skopeo"})," (",(0,s.jsx)(r.a,{href:"https://github.com/containers/skopeo/pull/1705",children:">= 1.9.0"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane/README.md",children:"Crane"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,s.jsx)(r.h3,{id:"docker-hub",children:"Docker Hub"}),"\n",(0,s.jsxs)(r.p,{children:["Currently, Docker Hub doesn't support OCI artifacts so can't be used to store Kubewarden policies.\nDocker Inc. has announced that Docker Hub will support OCI artifacts in the\n",(0,s.jsx)(r.a,{href:"https://www.docker.com/blog/announcing-docker-hub-oci-artifacts-support/",children:"future"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"jfrog",children:"JFrog"}),"\n",(0,s.jsxs)(r.p,{children:["Although JFrog supports OCI artifacts,\nit's only partially possible to push to it, when following their specification.\n",(0,s.jsx)(r.a,{href:"https://github.com/kubewarden/kwctl/issues/59",children:"Read more here"}),"."]})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>c});var t=i(96540);const s={},o=t.createContext(s);function n(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);