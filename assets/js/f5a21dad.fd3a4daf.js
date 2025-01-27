"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[66293],{14058:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"operator-manual/policy-servers/private-registry","title":"","description":"It is possible to configure PolicyServers to use credentials of private OCI","source":"@site/versioned_docs/version-1.7/operator-manual/policy-servers/02-private-registry.md","sourceDirName":"operator-manual/policy-servers","slug":"/operator-manual/policy-servers/private-registry","permalink":"/1.7/operator-manual/policy-servers/private-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/operator-manual/policy-servers/02-private-registry.md","tags":[],"version":"1.7","lastUpdatedAt":1738000707000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Using private registries","title":""},"sidebar":"docs","previous":{"title":"Using Custom CAs","permalink":"/1.7/operator-manual/policy-servers/custom-cas"},"next":{"title":"Open Telemetry Quickstart","permalink":"/1.7/operator-manual/telemetry/opentelemetry/quickstart"}}');var i=t(74848),n=t(28453);const c={sidebar_label:"Using private registries",title:""},o="Configuring PolicyServers to use private registries",a={},l=[{value:"Creating the Secret",id:"creating-the-secret",level:2},{value:"Consuming the Secret in PolicyServers",id:"consuming-the-secret-in-policyservers",level:2},{value:"Consuming the Secret in Helm charts",id:"consuming-the-secret-in-helm-charts",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"configuring-policyservers-to-use-private-registries",children:"Configuring PolicyServers to use private registries"})}),"\n",(0,i.jsx)(r.p,{children:"It is possible to configure PolicyServers to use credentials of private OCI\nregistries. This will allow those PolicyServers to download policies from\npublic and private registries."}),"\n",(0,i.jsx)(r.p,{children:"Once a PolicyServer is configured to access private registries, policies running\non it and using the defined SDKs and lower level host capabilities APIs will be\nable to access private registries too. This is because PolicyServers expose that\nfunctionality through the defined policy SDKs and lower level host capability\nAPI. This is the case, for example, in policies that verify signatures of\ncontainer images."}),"\n",(0,i.jsx)(r.p,{children:"To achieve this, we will create a Secret containing the private registry\ncredentials, and configure our PolicyServers' resources, and/or our Helm chart\nto use it."}),"\n",(0,i.jsx)(r.h2,{id:"creating-the-secret",children:"Creating the Secret"}),"\n",(0,i.jsxs)(r.p,{children:["PolicyServers support the usual\n",(0,i.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/#docker-config-secrets",children:"Docker config Secrets"}),"\n, either of type ",(0,i.jsx)(r.code,{children:"kubernetes.io/dockercfg"})," or type ",(0,i.jsx)(r.code,{children:"kubernetes.io/dockerconfigjson"}),".\nThese secrets can be created with ",(0,i.jsx)(r.code,{children:"kubectl create secret docker-registry"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["For configuring your PolicyServer instance, store the credentials\nused to access the registry in a ",(0,i.jsx)(r.code,{children:"docker-registry"})," Secret. The secret should be\ncreated in the same namespace where you run your PolicyServer. This can be done\nwith the following command:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"kubectl --namespace kubewarden create secret docker-registry secret-ghcr-docker \\\n  --docker-username=myuser \\\n  --docker-password=mypass123 \\\n  --docker-server=myregistry.io\n"})}),"\n",(0,i.jsxs)(r.p,{children:["For more information on how to create the Docker Secrets, see the ",(0,i.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/#docker-config-secrets",children:"Kubernetes documentation"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"consuming-the-secret-in-policyservers",children:"Consuming the Secret in PolicyServers"}),"\n",(0,i.jsxs)(r.p,{children:["Once you have the Secret created, it is necessary to configure the PolicyServer\ninstance by setting the ",(0,i.jsx)(r.code,{children:"spec.imagePullSecret"})," field with the name of the Secret that\ncontains the credentials:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'# Example of a PolicyServer using a private registry\napiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: default\nspec:\n  image: ghcr.io/kubewarden/policy-server:v1.1.1\n  serviceAccountName: policy-server\n  replicas: 1\n  annotations:\n  imagePullSecret: "secret-ghcr-docker"\n'})}),"\n",(0,i.jsx)(r.h2,{id:"consuming-the-secret-in-helm-charts",children:"Consuming the Secret in Helm charts"}),"\n",(0,i.jsxs)(r.p,{children:["When deployed from the ",(0,i.jsx)(r.code,{children:"kubewarden-defaults"})," Helm chart, you can set the\n",(0,i.jsx)(r.code,{children:"policyServer.imagePullSecret"})," value with the Secret name. Thus,\nthe created default policy server will be able to download policies from your\nprivate registry as well:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"# values file example\npolicyServer:\n  telemetry:\n    enabled: False\n  imagePullSecret: secret-ghcr-docker\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>o});var s=t(96540);const i={},n=s.createContext(i);function c(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);