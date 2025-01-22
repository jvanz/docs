"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[71384],{9757:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"testing-policies/policy-authors","title":"Testing for policy authors","description":"An introduction to testing Kubewarden policies for policy authors.","source":"@site/versioned_docs/version-1.9/testing-policies/02-policy-authors.md","sourceDirName":"testing-policies","slug":"/testing-policies/policy-authors","permalink":"/1.9/testing-policies/policy-authors","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/testing-policies/02-policy-authors.md","tags":[],"version":"1.9","lastUpdatedAt":1737553508000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Policy authors","title":"Testing for policy authors","description":"An introduction to testing Kubewarden policies for policy authors.","keywords":["kubewarden","policy testing","policy author","rust","go","assemblyscript","development environment"]},"sidebar":"docs","previous":{"title":"Policy testing","permalink":"/1.9/testing-policies/intro"},"next":{"title":"Cluster operators","permalink":"/1.9/testing-policies/cluster-operators"}}');var i=s(74848),o=s(28453);const r={sidebar_label:"Policy authors",title:"Testing for policy authors",description:"An introduction to testing Kubewarden policies for policy authors.",keywords:["kubewarden","policy testing","policy author","rust","go","assemblyscript","development environment"]},l=void 0,c={},a=[{value:"End-to-end tests",id:"end-to-end-tests",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Kubewarden policies are regular programs compiled as WebAssembly (Wasm).\nAs with any kind of program, good test coverage is important."}),"\n",(0,i.jsx)(t.p,{children:"Policy authors can use their favorite development environments. You can use familiar tools, and testing frameworks to verify development."}),"\n",(0,i.jsxs)(t.p,{children:["These two Kubewarden policies provide an example written in ",(0,i.jsx)(t.a,{href:"/1.9/writing-policies/rust/intro-rust",children:"Rust"})," and ",(0,i.jsx)(t.a,{href:"/1.9/writing-policies/go/intro-go",children:"Go"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/kubewarden/psp-apparmor",children:"psp-apparmor"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/kubewarden/ingress-policy",children:"ingress-policy"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"They both have test suites using standard testing for their development environments."}),"\n",(0,i.jsx)(t.p,{children:"The policies use GitHub Actions for their CI pipelines."}),"\n",(0,i.jsx)(t.h2,{id:"end-to-end-tests",children:"End-to-end tests"}),"\n",(0,i.jsx)(t.p,{children:"You can also write tests that execute against the Wasm binary containing your policy.\nThis can be done without having to deploy a Kubernetes cluster by using these tools:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/bats-core/bats-core",children:"bats"}),": is used to write tests and automate their execution."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/kubewarden/kwctl",children:"kwctl"}),": Kubewarden's default CLI tool that helps you with policy-related operations; pull, inspect, annotate, push, and run."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To use ",(0,i.jsx)(t.code,{children:"kwctl run"})," the following input is needed:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Wasm binary file reference of the policy to be run.\nThe Kubewarden policy can be loaded from the local filesystem (",(0,i.jsx)(t.code,{children:"file://"}),"), an HTTP(s) server (",(0,i.jsx)(t.code,{children:"https://"}),"), or an OCI registry (",(0,i.jsx)(t.code,{children:"registry://"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["The admission request object to be tested.\nYou provide it via the ",(0,i.jsx)(t.code,{children:"--request-path"})," argument.\nOr you can provide it on ",(0,i.jsx)(t.code,{children:"stdin"})," by setting ",(0,i.jsx)(t.code,{children:"--request-path"})," to ",(0,i.jsx)(t.code,{children:"-"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Provide policy settings for run time as an inline JSON via ",(0,i.jsx)(t.code,{children:"--settings-json"})," flag.\nOr a JSON, or a YAML file loaded from the filesystem via ",(0,i.jsx)(t.code,{children:"--settings-path"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["After the test ",(0,i.jsx)(t.code,{children:"kwctl"})," prints the ",(0,i.jsx)(t.code,{children:"ValidationResponse"})," object to standard output."]}),"\n",(0,i.jsxs)(t.p,{children:["This is how you use ",(0,i.jsx)(t.code,{children:"kwctl"})," to test the Wasm binary of ",(0,i.jsx)(t.code,{children:"ingress-policy"})," linked to above:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'$ curl https://raw.githubusercontent.com/kubewarden/ingress-policy/v0.1.8/test_data/ingress-wildcard.json 2> /dev/null | \\\n    kwctl run \\\n        --settings-json \'{"allowPorts": [80], "denyPorts": [3000]}\' \\\n        --request-path - \\\n        registry://ghcr.io/kubewarden/policies/ingress:v0.1.8 | jq\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.code,{children:"bats"})," you can write a test that runs this command and looks for the expected outputs:"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:["A ",(0,i.jsx)("code",{children:"bats"})," test"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'@test "all is good" {\n  run kwctl run \\\n    --request-path test_data/ingress-wildcard.json \\\n    --settings-json \'{"allowPorts": [80], "denyPorts": [3000]}\' \\\n    ingress-policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # settings validation passed\n  [[ "$output" == *"valid: true"* ]]\n\n  # request accepted\n  [[ "$output" == *"allowed: true"* ]]\n}\n'})})]}),"\n",(0,i.jsxs)(t.p,{children:["You can put the code in a file, ",(0,i.jsx)(t.code,{children:"e2e.bats"}),", for example, and then invoke ",(0,i.jsx)(t.code,{children:"bats"})," by:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ bats e2e.bats\n \u2713 all is good\n\n1 tests, 0 failures\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/1.9/writing-policies/go/e2e-tests",children:"This"})," section of the documentation has more about writing end-to-end tests of your policies."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);