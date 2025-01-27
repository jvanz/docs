"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4045],{33156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"writing-policies/rust/write-validation-logic","title":"","description":"It\'s time to write the actual validation code. This is defined inside of the","source":"@site/versioned_docs/version-1.8/writing-policies/rust/04-write-validation-logic.md","sourceDirName":"writing-policies/rust","slug":"/writing-policies/rust/write-validation-logic","permalink":"/1.8/writing-policies/rust/write-validation-logic","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/rust/04-write-validation-logic.md","tags":[],"version":"1.8","lastUpdatedAt":1737978766000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Writing Validation Logic","title":""},"sidebar":"docs","previous":{"title":"Defining Policy Settings","permalink":"/1.8/writing-policies/rust/define-policy-settings"},"next":{"title":"Creating a new mutation policy","permalink":"/1.8/writing-policies/rust/mutation-policy"}}');var s=n(74848),a=n(28453);const o={sidebar_label:"Writing Validation Logic",title:""},r="Writing the validation logic",d={},l=[{value:"Unit tests",id:"unit-tests",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"writing-the-validation-logic",children:"Writing the validation logic"})}),"\n",(0,s.jsxs)(t.p,{children:["It's time to write the actual validation code. This is defined inside of the\n",(0,s.jsx)(t.code,{children:"src/lib.rs"})," file. Inside of this file you will find a function called ",(0,s.jsx)(t.code,{children:"validate"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The scaffolded function is already doing something:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'fn validate(payload: &[u8]) -> CallResult {\n    // NOTE 1\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    // NOTE 2\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            // NOTE 3\n            if pod.metadata.name == Some("invalid-pod-name".to_string()) {\n                kubewarden::reject_request(\n                    Some(format!("pod name {:?} is not accepted", pod.metadata.name)),\n                    None,\n                )\n            } else {\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // NOTE 4\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            kubewarden::accept_request()\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This is a walk-through the code described above:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Parse the incoming ",(0,s.jsx)(t.code,{children:"payload"})," into a ",(0,s.jsx)(t.code,{children:"ValidationRequest<Setting>"})," object. This\nautomatically populates the ",(0,s.jsx)(t.code,{children:"Settings"})," instance inside of ",(0,s.jsx)(t.code,{children:"ValidationRequest"})," with\nthe params provided by the user."]}),"\n",(0,s.jsxs)(t.li,{children:["Convert the Kubernetes raw JSON object embedded into the request\ninto an instance of the ",(0,s.jsx)(t.a,{href:"https://arnavion.github.io/k8s-openapi/v0.11.x/k8s_openapi/api/core/v1/struct.Pod.html",children:"Pod struct"})]}),"\n",(0,s.jsxs)(t.li,{children:["The request contains a Pod object, the code approves only the requests\nthat do not have ",(0,s.jsx)(t.code,{children:"metadata.name"})," equal to the hard-coded value ",(0,s.jsx)(t.code,{children:"invalid-pod-name"})]}),"\n",(0,s.jsx)(t.li,{children:"The request doesn't contain a Pod object, hence the policy accepts the request"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As you can see the code is already doing a validation that resembles the one we\nwant to implement. We just have to get rid of the hard-coded value and use the\nvalues provided by the user via the policy settings."}),"\n",(0,s.jsx)(t.p,{children:"This can be done with the following code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'fn validate(payload: &[u8]) -> CallResult {\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            let pod_name = pod.metadata.name.unwrap_or_default();\n            if validation_request\n                .settings\n                .invalid_names\n                .contains(&pod_name)\n            {\n                kubewarden::reject_request(\n                    Some(format!("pod name {:?} is not accepted", pod_name)),\n                    None,\n                )\n            } else {\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            kubewarden::accept_request()\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,s.jsx)(t.p,{children:"Finally, we will create some unit tests to ensure the validation code works as\nexpected."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"lib.rs"})," file has already some tests defined at the bottom of the file, as\nyou can see Kubewarden's Rust SDK provides some test helpers too."]}),"\n",(0,s.jsxs)(t.p,{children:["Moreover, the scaffolded project already ships with some default\n",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Test_fixture#Software",children:"test fixtures"})," inside of\nthe ",(0,s.jsx)(t.code,{children:"test_data"})," directory. We are going to take advantage of these recorded\nadmission requests to write our unit tests."]}),"\n",(0,s.jsxs)(t.p,{children:["Change the contents of the test section inside of ",(0,s.jsx)(t.code,{children:"src/lib.rs"})," to look like that:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[cfg(test)]\nmod tests {\n    use super::*;\n\n    use kubewarden_policy_sdk::test::Testcase;\n    use std::collections::HashSet;\n\n    #[test]\n    fn accept_pod_with_valid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("bad_name1"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with valid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn reject_pod_with_invalid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("nginx"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with invalid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: false,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn accept_request_with_non_pod_resource() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("prod"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/ingress_creation.json";\n        let tc = Testcase {\n            name: String::from("Ingress creation"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"We now have three unit tests defined inside of this file:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"accept_pod_with_valid_name"}),": ensures a Pod with a valid\nname is accepted"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reject_pod_with_invalid_name"}),": ensures a Pod with an invalid\nname is rejected"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"accept_request_with_non_pod_resource"}),": ensure the policy accepts\nrequest that do not have a ",(0,s.jsx)(t.code,{children:"Pod"})," as object"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"We can run the unit tests again:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ cargo test\n   Compiling demo v0.1.0 (/home/flavio/hacking/kubernetes/kubewarden/demo)\n    Finished test [unoptimized + debuginfo] target(s) in 3.45s\n     Running target/debug/deps/demo-24670dd6a538fd72\n\nrunning 5 tests\ntest settings::tests::accept_settings_with_a_list_of_invalid_names ... ok\ntest settings::tests::reject_settings_without_a_list_of_invalid_names ... ok\ntest tests::accept_request_with_non_pod_resource ... ok\ntest tests::accept_pod_with_valid_name ... ok\ntest tests::reject_pod_with_invalid_name ... ok\n\ntest result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n"})}),"\n",(0,s.jsx)(t.p,{children:"That's all if you want to write a simple validating policy."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);