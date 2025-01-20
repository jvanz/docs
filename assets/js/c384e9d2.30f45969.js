"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[873],{54994:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"explanations/policy-groups","title":"Policy Groups","description":"A description of Kubewarden policy groups","source":"@site/versioned_docs/version-1.20/explanations/policy-groups.md","sourceDirName":"explanations","slug":"/explanations/policy-groups","permalink":"/explanations/policy-groups","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.20/explanations/policy-groups.md","tags":[],"version":"1.20","lastUpdatedAt":1737395608000,"sidebarPosition":21,"frontMatter":{"sidebar_label":"Policy Groups","sidebar_position":21,"title":"Policy Groups","description":"A description of Kubewarden policy groups","keywords":["kubewarden","policy groups","clusteradmissionpolicygroup","admissionpolicygroup"],"doc-persona":["kubewarden-operator"],"doc-type":["explanation"],"doc-topic":["explanations","policy-group"]},"sidebar":"docs","previous":{"title":"Context aware policies","permalink":"/explanations/context-aware-policies"},"next":{"title":"Certificate rotation","permalink":"/explanations/certificates"}}');var o=n(74848),t=n(28453);const r={sidebar_label:"Policy Groups",sidebar_position:21,title:"Policy Groups",description:"A description of Kubewarden policy groups",keywords:["kubewarden","policy groups","clusteradmissionpolicygroup","admissionpolicygroup"],"doc-persona":["kubewarden-operator"],"doc-type":["explanation"],"doc-topic":["explanations","policy-group"]},a=void 0,l={},c=[{value:"Main configuration fields",id:"main-configuration-fields",level:2},{value:"The <code>policies</code> attribute",id:"the-policies-attribute",level:3},{value:"The <code>expression</code> attribute",id:"the-expression-attribute",level:3},{value:"The <code>message</code> attribute and the response format",id:"the-message-attribute-and-the-response-format",level:3},{value:"Context-Aware Policies",id:"context-aware-policies",level:2},{value:"Settings Validation",id:"settings-validation",level:2},{value:"Audit Scanner",id:"audit-scanner",level:2},{value:"Policy Server",id:"policy-server",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:n,Head:s}=i;return n||u("Details",!0),s||u("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/policy-groups"})}),"\n",(0,o.jsx)(i.p,{children:"The policy group feature allows users to create complex policies by combining\nsimpler ones. It introduces two new Custom Resource Definitions\n(CRDs):"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"AdmissionPolicyGroup"}),": For admission policies that apply to specific\nnamespaces."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"ClusterAdmissionPolicyGroup"}),": For admission policies that apply across the\nentire cluster."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"These policy groups enable users to use existing policies, reducing the\nneed for custom policy creation and enhancing reusability. By avoiding\nduplication of policy logic, users can simplify management and create custom\npolicies with a DSL-like configuration."}),"\n",(0,o.jsx)(i.p,{children:"Policy groups enable the combined evaluation of\nmultiple policies using logical operators. This allows the definition of\ncomplex logic. However, it is important to note that while ordinary policies\ncan include mutation logic to modify resources during admission, policy groups\nare limited to validation only."}),"\n",(0,o.jsxs)(i.p,{children:["Configuration for policy groups is similar to that of ordinary\npolicies. The difference is the addition of the ",(0,o.jsx)(i.code,{children:"expression"}),",\n",(0,o.jsx)(i.code,{children:"message"}),", and ",(0,o.jsx)(i.code,{children:"policies"})," fields, as well as the declaration of context-aware\nrules in a different location."]}),"\n",(0,o.jsxs)(i.p,{children:["This is an example of a ",(0,o.jsx)(i.code,{children:"ClusterAdmissionPolicyGroup"})," that we will use in\nthe next sections to explain the different fields:"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)(i.p,{children:["A ",(0,o.jsx)(i.code,{children:"ClusterAdmissionPolicyGroup"})," that rejects Pods that use images with the ",(0,o.jsx)(i.code,{children:"latest"})," tag,\nunless the images are signed by two trusted parties: Alice and Bob."]})}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicyGroup # or AdmissionPolicyGroup\nmetadata:\n  name: demo\nspec:\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["pods"]\n      operations:\n        - CREATE\n        - UPDATE\n  policies:\n    signed_by_alice:\n      module: ghcr.io/kubewarden/policies/verify-image-signatures:v0.3.0\n      settings:\n        modifyImagesWithDigest: false\n        signatures:\n          - image: "*"\n            pubKeys:\n              - |\n                -----BEGIN PUBLIC KEY-----\n                MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEyg65hiNHt8FXTamzCn34IE3qMGcV\n                yQz3gPlhoKq3yqa1GIofcgLjUZtcKlUSVAU2/S5gXqyDnsW6466Jx/ZVlg==\n                -----END PUBLIC KEY-----\n    signed_by_bob:\n      module: ghcr.io/kubewarden/policies/verify-image-signatures:v0.3.0\n      settings:\n        modifyImagesWithDigest: false\n        signatures:\n          - image: "*"\n            pubKeys:\n              - |\n                -----BEGIN PUBLIC KEY-----\n                MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEswA3Ec4w1ErOpeLPfCdkrh8jvk3X\n                urm8ZrXi4S3an70k8bf1OlGnI/aHCcGleewHbBk1iByySMwr8BabchXGSg==\n                -----END PUBLIC KEY-----\n    reject_latest:\n      module: registry://ghcr.io/kubewarden/policies/trusted-repos:v0.2.0\n      settings:\n        tags:\n          reject:\n            - latest\n  expression: "reject_latest() || (signed_by_alice() && signed_by_bob())"\n  message: "the image is using the latest tag or is not signed by Alice and Bob"\n'})})]}),"\n",(0,o.jsx)(i.h2,{id:"main-configuration-fields",children:"Main configuration fields"}),"\n",(0,o.jsx)(i.p,{children:"This section covers the main configuration fields of a policy group."}),"\n",(0,o.jsxs)(i.h3,{id:"the-policies-attribute",children:["The ",(0,o.jsx)(i.code,{children:"policies"})," attribute"]}),"\n",(0,o.jsxs)(i.p,{children:["The policies field is a map of ordinary policies. Kubewarden\npolicies are called by the policy group, to determine whether the resource under\nevaluation is accepted or rejected. The definitions of these policies are a\nsimplified version of ordinary Kubewarden policies, containing only the\n",(0,o.jsx)(i.code,{children:"module"}),", ",(0,o.jsx)(i.code,{children:"settings"})," and ",(0,o.jsx)(i.code,{children:"contextAwareResources"})," attributes. These\nelements are necessary for the policies to function within a policy group."]}),"\n",(0,o.jsxs)(i.p,{children:["Each policy of the group policy is identified by a unique name. For example,\nthe following snippet defines two policies: ",(0,o.jsx)(i.code,{children:"signed_by_alice"}),", ",(0,o.jsx)(i.code,{children:"signed_by_bob"})," and ",(0,o.jsx)(i.code,{children:"reject_latest_tag"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:"policies:\n  signed_by_alice:\n    module: ghcr.io/kubewarden/policies/verify-image-signatures:v0.2.8\n    settings: {} # settings for the policy\n  signed_by_bob:\n    module: ghcr.io/kubewarden/policies/verify-image-signatures:v0.2.8\n    settings: {} # settings for the policy\n  reject_latest_tag:\n    module: ghcr.io/kubewarden/policies/trusted-repos-policy:v0.2.0\n    settings: {} # settings for the policy\n"})}),"\n",(0,o.jsx)(i.admonition,{type:"tip",children:(0,o.jsx)(i.p,{children:"The same policy can be included multiple times in the same policy group, with\ndifferent settings."})}),"\n",(0,o.jsxs)(i.h3,{id:"the-expression-attribute",children:["The ",(0,o.jsx)(i.code,{children:"expression"})," attribute"]}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"expression"})," attribute contains a statement made of the policy\nidentifiers joined together by logical operators."]}),"\n",(0,o.jsxs)(i.p,{children:["The evaluation of the ",(0,o.jsx)(i.code,{children:"expression"})," statement must evaluate to a boolean value."]}),"\n",(0,o.jsxs)(i.p,{children:["Each policy is represented as a function named after the identifier specified\ninside of the ",(0,o.jsx)(i.code,{children:".spec.policies"})," map. The results produced\nby the evaluation of the policies are then evaluated using the logical operators\nprovided by the user."]}),"\n",(0,o.jsx)(i.p,{children:"These are the supported operators:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"&&"}),": used to perform ",(0,o.jsx)(i.code,{children:"AND"})," operations"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"||"}),": used to perform ",(0,o.jsx)(i.code,{children:"OR"})," operations"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"!"}),": used to perform ",(0,o.jsx)(i.code,{children:"NOT"})," operations"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Round brackets ",(0,o.jsx)(i.code,{children:"( )"})," can be used to define evaluation priorities."]}),"\n",(0,o.jsx)(i.p,{children:"For example, given the following expression:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:"reject_latest() || (signed_by_alice() && signed_by_bob())\n"})}),"\n",(0,o.jsxs)(i.p,{children:["The policy will reject workloads that have images using the ",(0,o.jsx)(i.code,{children:"latest"})," tag, unless\nthese images are signed both by Alice and Bob."]}),"\n",(0,o.jsxs)(i.h3,{id:"the-message-attribute-and-the-response-format",children:["The ",(0,o.jsx)(i.code,{children:"message"})," attribute and the response format"]}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"message"})," field specifies the message returned when the evaluation of the\n",(0,o.jsx)(i.code,{children:"expression"})," results in a rejection. The message is included in the response,\ntogether with the results of the individual policies evaluation."]}),"\n",(0,o.jsxs)(i.admonition,{type:"info",children:[(0,o.jsx)(i.p,{children:"The policies that belong to the group are evaluated only\nif necessary."}),(0,o.jsx)(i.p,{children:"For example, given the following expression:"}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:"reject_latest() || (signed_by_alice() && signed_by_bob())\n"})}),(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"signed_by_bob"})," and ",(0,o.jsx)(i.code,{children:"signed_by_alice"})," policies are not evaluated when\nthe ",(0,o.jsx)(i.code,{children:"reject_latest"})," policy returns ",(0,o.jsx)(i.code,{children:"true"}),"."]}),(0,o.jsxs)(i.p,{children:["In the same way, the ",(0,o.jsx)(i.code,{children:"signed_by_bob"})," policy is not evaluated if the ",(0,o.jsx)(i.code,{children:"signed_by_alice"}),"\nand the ",(0,o.jsx)(i.code,{children:"reject_latest"})," policies return ",(0,o.jsx)(i.code,{children:"false"}),"."]}),(0,o.jsx)(i.p,{children:"This avoids unnecessary evaluations of policies in the group and grants\nfast responses to the admission requests."})]}),"\n",(0,o.jsxs)(i.p,{children:["When a group policy performs a rejection, all the evaluation details of the\ngroup policies are sent as part of the AdmissionResponse ",(0,o.jsx)(i.code,{children:".status.details.causes"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["The full details of a rejected admission request can be obtained by increasing the verbosity\nlevel of ",(0,o.jsx)(i.code,{children:"kubectl"}),":"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-shell",children:'kubectl -v4 apply -f signed-pod.yml\nI0919 18:29:40.251332    4330 helpers.go:246] server response object: [{\n  "kind": "Status",\n  "apiVersion": "v1",\n  "metadata": {},\n  "status": "Failure",\n  "message": "error when creating \\"signed-pod.yml\\": admission webhook \\"clusterwide-demo.kubewarden.admission\\" denied the request: the image is using the latest tag or is not signed by Alice and Bob",\n  "details": {\n    "causes": [\n      {\n        "message": "Resource signed is not accepted: verification of image testing.registry.svc.lan/busybox:latest failed: Host error: Callback evaluation failure: Image verification failed: missing signatures\\nThe following constraints were not satisfied:\\nkind: pubKey\\nowner: null\\nkey: |\\n  -----BEGIN PUBLIC KEY-----\\n  MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEswA3Ec4w1ErOpeLPfCdkrh8jvk3X\\n  urm8ZrXi4S3an70k8bf1OlGnI/aHCcGleewHbBk1iByySMwr8BabchXGSg==\\n  -----END PUBLIC KEY-----\\nannotations: null\\n",\n        "field": "spec.policies.signed_by_bob"\n      },\n      {\n        "message": "not allowed, reported errors: tags not allowed: latest",\n        "field": "spec.policies.reject_latest"\n      }\n    ]\n  },\n  "code": 400\n}]\nError from server: error when creating "signed-pod.yml": admission webhook "clusterwide-demo.kubewarden.admission" denied the request: the image is using the latest tag or is not signed by Alice and Bob\n'})}),"\n",(0,o.jsx)(i.p,{children:"The full admission response is available in the logs of the Policy Server\nwhen running in debug mode.\nMoreover, the evaluation details are always part of the OpenTelemetry traces emitted by Policy Server."}),"\n",(0,o.jsx)(i.h2,{id:"context-aware-policies",children:"Context-Aware Policies"}),"\n",(0,o.jsxs)(i.p,{children:["Another distinction between policy groups and ordinary policies is the location\nwhere context-aware resource rules are defined. Each policy in a group\naccepts an optional ",(0,o.jsx)(i.code,{children:"contextAwareResources"})," field to specify the resources that\nthe policy is allowed to access during evaluation."]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"An example of a policy group that makes use of a context-aware policy."})}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicyGroup # or AdmissionPolicyGroup\nmetadata:\n  name: demo-ctx-aware\nspec:\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - services\n      operations:\n        - CREATE\n        - UPDATE\n  policies:\n    unique_service_selector:\n      module: registry://ghcr.io/kubewarden/policies/unique-service-selector-policy:v0.1.0\n      contextAwareResources:\n        - apiVersion: v1\n          kind: Service\n      settings:\n        app.kubernetes.io/name: MyApp\n    owned_by_foo_team:\n      module: registry://ghcr.io/kubewarden/policies/safe-annotations:v0.2.9\n      settings:\n        mandatory_annotations:\n          - owner\n        constrained_annotations:\n          owner: "foo-team"\n  expression: "unique_service_selector() || (!unique_service_selector() && owned_by_foo_team())"\n  message: "the service selector is not unique or the service is not owned by the foo team"\n'})})]}),"\n",(0,o.jsxs)(i.p,{children:["In the previous example, the ",(0,o.jsx)(i.code,{children:"unique_service_selector"})," policy is allowed to\naccess the ",(0,o.jsx)(i.code,{children:"Service"})," resource. On the other hand, the ",(0,o.jsx)(i.code,{children:"owned_by_foo_team"}),"\nhas no access to Kubernetes resources."]}),"\n",(0,o.jsx)(i.h2,{id:"settings-validation",children:"Settings Validation"}),"\n",(0,o.jsx)(i.p,{children:"When the policy server starts, it will validate the settings of both policy\ngroups and ordinary policies. However, policy groups undergo an additional\nvalidation step to ensure that the expression is valid and evaluates to a\nboolean value."}),"\n",(0,o.jsx)(i.h2,{id:"audit-scanner",children:"Audit Scanner"}),"\n",(0,o.jsxs)(i.p,{children:["Similar to the AdmissionPolicy and ClusterAdmissionPolicy CRDs, the\n",(0,o.jsx)(i.code,{children:"backgroundAudit"})," field indicates if the policy group should be included\nduring ",(0,o.jsx)(i.a,{href:"/explanations/audit-scanner/",children:"audit checks"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"policy-server",children:"Policy Server"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"policies.yml"})," settings file is extended to include policy groups\nalongside ordinary policies. As with ordinary policies, modules are\ndownloaded once. The same policy module is used in both a policy\ngroup and an ordinary policy."]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(96540);const o={},t=s.createContext(o);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);