"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[53197],{8788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"writing-policies/go/validation","title":"","description":"It\'s now time to write the actual validation logic. This is done","source":"@site/versioned_docs/version-1.7/writing-policies/go/04-validation.md","sourceDirName":"writing-policies/go","slug":"/writing-policies/go/validation","permalink":"/1.7/writing-policies/go/validation","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/04-validation.md","tags":[],"version":"1.7","lastUpdatedAt":1736966480000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Write the Validation Logic","title":""},"sidebar":"docs","previous":{"title":"Define Policy Settings","permalink":"/1.7/writing-policies/go/policy-settings"},"next":{"title":"End-to-end testing","permalink":"/1.7/writing-policies/go/e2e-tests"}}');var a=n(74848),i=n(28453);const o={sidebar_label:"Write the Validation Logic",title:""},d="Writing the validation logic",l={},r=[{value:"The <code>validate</code> function",id:"the-validate-function",level:2},{value:"Testing the validation code",id:"testing-the-validation-code",level:2},{value:"Fix the broken unit test",id:"fix-the-broken-unit-test",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"writing-the-validation-logic",children:"Writing the validation logic"})}),"\n",(0,a.jsxs)(t.p,{children:["It's now time to write the actual validation logic. This is done\ninside of the ",(0,a.jsx)(t.code,{children:"validate.go"})," file."]}),"\n",(0,a.jsxs)(t.p,{children:["The validation logic needs to extract the relevant information\nfrom the incoming ",(0,a.jsx)(t.code,{children:"payload"})," object and then, based on the input\nand the policy settings, return a response."]}),"\n",(0,a.jsxs)(t.p,{children:["The incoming payload is a JSON object (as described ",(0,a.jsx)(t.a,{href:"../spec/validating-policies",children:"here"}),") and\nthe relevant data can be extracted from it in two ways:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Unmarshal the JSON data into native Go types"}),"\n",(0,a.jsxs)(t.li,{children:["Perform JSON queries (something similar to ",(0,a.jsx)(t.a,{href:"https://stedolan.github.io/jq/",children:(0,a.jsx)(t.code,{children:"jq"})}),")"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This section of the documentation focuses on the first approach: relying on native\nGo types. The second approach is described ",(0,a.jsx)(t.a,{href:"validation-with-queries",children:"later"}),"."]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"Relying on Kubernetes objects instead of doing jq-like searches\nleads to bigger WebAssembly modules being produced.\nA policy using Kubernetes objects can be around 1.5 Mb versus the 300 Kb of\na policy that uses gjson."}),(0,a.jsx)(t.p,{children:"Leaving the WebAssembly module dimension aside, the policy using Kubernetes\nobjects will take significantly more time during its first execution.\nSubsequent invocations will be fast because Kubewarden leverages Wasmtime's\ncache feature.\nThe first execution can take approximatively 21 seconds with kwctl, later executions\ntake close to 1.5 seconds.\nKubewarden Policy Server will just have a slower start-up time, policy evaluation times are not going to be affected by the usage of Kubernetes objects."})]}),"\n",(0,a.jsxs)(t.h2,{id:"the-validate-function",children:["The ",(0,a.jsx)(t.code,{children:"validate"})," function"]}),"\n",(0,a.jsxs)(t.p,{children:["The scaffolded policy already has a ",(0,a.jsx)(t.code,{children:"validate"})," function and we will need to make\nvery few changes to it."]}),"\n",(0,a.jsx)(t.p,{children:"This is how the function has to look like:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n\t// highlight-next-line\n\t// NOTE 1\n\t// Create a ValidationRequest instance from the incoming payload\n\tvalidationRequest := kubewarden_protocol.ValidationRequest{}\n\terr := json.Unmarshal(payload, &validationRequest)\n\tif err != nil {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(err.Error()),\n\t\t\tkubewarden.Code(400))\n\t}\n\n\t// highlight-next-line\n\t// NOTE 2\n\t// Create a Settings instance from the ValidationRequest object\n\tsettings, err := NewSettingsFromValidationReq(&validationRequest)\n\tif err != nil {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(err.Error()),\n\t\t\tkubewarden.Code(400))\n\t}\n\n\t// highlight-next-line\n\t// NOTE 3\n\t// Access the **raw** JSON that describes the object\n\tpodJSON := validationRequest.Request.Object\n\n\t// highlight-next-line\n\t// NOTE 4\n\t// Try to create a Pod instance using the RAW JSON we got from the\n\t// ValidationRequest.\n\tpod := &corev1.Pod{}\n\tif err := json.Unmarshal([]byte(podJSON), pod); err != nil {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(\n\t\t\t\tfmt.Sprintf("Cannot decode Pod object: %s", err.Error())),\n\t\t\tkubewarden.Code(400))\n\t}\n\n\tlogger.DebugWithFields("validating pod object", func(e onelog.Entry) {\n\t\te.String("name", pod.Metadata.Name)\n\t\te.String("namespace", pod.Metadata.Namespace)\n\t})\n\n\t// highlight-next-line\n\t// NOTE 5\n\tfor label, value := range pod.Metadata.Labels {\n\t\tif err := validateLabel(label, value, &settings); err != nil {\n\t\t\treturn kubewarden.RejectRequest(\n\t\t\t\tkubewarden.Message(err.Error()),\n\t\t\t\tkubewarden.NoCode)\n\t\t}\n\t}\n\n\treturn kubewarden.AcceptRequest()\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The code has some ",(0,a.jsx)(t.code,{children:"NOTE"})," sections inside of it, let's get through them:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["We create a ",(0,a.jsx)(t.code,{children:"kubewarden_protocol.ValidationRequest"})," by unmarshaling the\nJSON payload"]}),"\n",(0,a.jsxs)(t.li,{children:["We create a ",(0,a.jsx)(t.code,{children:"Settings"})," object by using the function we previously defined\ninside of the ",(0,a.jsx)(t.code,{children:"settings.go"})," file."]}),"\n",(0,a.jsxs)(t.li,{children:["We access the raw JSON representation of the Pod that is part of the ",(0,a.jsx)(t.code,{children:"ValidationRequest"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"We unmarshal the Pod object"}),"\n",(0,a.jsxs)(t.li,{children:["We iterate over the labels of the Pod. We use a new function called ",(0,a.jsx)(t.code,{children:"validateLabel"}),"\nto identify labels that are violating the policy"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Let's define the ",(0,a.jsx)(t.code,{children:"validateLabel"})," function at the bottom of the ",(0,a.jsx)(t.code,{children:"validate.go"})," file:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'func validateLabel(label, value string, settings *Settings) error {\n\tif settings.DeniedLabels.Contains(label) {\n\t\treturn fmt.Errorf("Label %s is on the deny list", label)\n\t}\n\n\tregExp, found := settings.ConstrainedLabels[label]\n\tif found {\n\t\t// This is a constrained label\n\t\tif !regExp.Match([]byte(value)) {\n\t\t\treturn fmt.Errorf("The value of %s doesn\'t pass user-defined constraint", label)\n\t\t}\n\t}\n\n\treturn nil\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"testing-the-validation-code",children:"Testing the validation code"}),"\n",(0,a.jsxs)(t.p,{children:["It's now time to write some unit tests to ensure the validation code is behaving\nproperly. These tests are going to be located inside of the ",(0,a.jsx)(t.code,{children:"validate_test.go"}),"\nfile."]}),"\n",(0,a.jsx)(t.p,{children:"We will replace the contents of the generated file to match the following\nones:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"regexp"\n\t"testing"\n\n\t"encoding/json"\n\n\tmapset "github.com/deckarep/golang-set/v2"\n\tcorev1 "github.com/kubewarden/k8s-objects/api/core/v1"\n\tmetav1 "github.com/kubewarden/k8s-objects/apimachinery/pkg/apis/meta/v1"\n\tkubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n\tkubewarden_testing "github.com/kubewarden/policy-sdk-go/testing"\n)\n\nfunc TestValidateLabel(t *testing.T) {\n\t// highlight-next-line\n\t// NOTE 1\n\tcases := []struct {\n\t\tpodLabels         map[string]string\n\t\tdeniedLabels      mapset.Set[string]\n\t\tconstrainedLabels map[string]*RegularExpression\n\t\texpectedIsValid   bool\n\t}{\n\t\t{\n\t\t\t// highlight-next-line\n\t\t\t// Pod has no labels -> should be accepted\n\t\t\tpodLabels:         map[string]string{},\n\t\t\tdeniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n\t\t\tconstrainedLabels: map[string]*RegularExpression{},\n\t\t\texpectedIsValid:   true,\n\t\t},\n\t\t{\n\t\t\t// highlight-next-line\n\t\t\t// Pod has labels, none is denied -> should be accepted\n\t\t\tpodLabels: map[string]string{\n\t\t\t\t"hello": "world",\n\t\t\t},\n\t\t\tdeniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n\t\t\tconstrainedLabels: map[string]*RegularExpression{},\n\t\t\texpectedIsValid:   true,\n\t\t},\n\t\t{\n\t\t\t// highlight-next-line\n\t\t\t// Pod has labels, one is denied -> should be rejected\n\t\t\tpodLabels: map[string]string{\n\t\t\t\t"hello": "world",\n\t\t\t},\n\t\t\tdeniedLabels:      mapset.NewThreadUnsafeSet[string]("hello"),\n\t\t\tconstrainedLabels: map[string]*RegularExpression{},\n\t\t\texpectedIsValid:   false,\n\t\t},\n\t\t{\n\t\t\t// highlight-next-line\n\t\t\t// Pod has labels, one has constraint that is respected -> should be accepted\n\t\t\tpodLabels: map[string]string{\n\t\t\t\t"cc-center": "team-123",\n\t\t\t},\n\t\t\tdeniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n\t\t\tconstrainedLabels: map[string]*RegularExpression{\n\t\t\t\t"cc-center": {\n\t\t\t\t\tRegexp: regexp.MustCompile(`team-\\d+`),\n\t\t\t\t},\n\t\t\t},\n\t\t\texpectedIsValid: true,\n\t\t},\n\t\t{\n\t\t\t// highlight-next-line\n\t\t\t// Pod has labels, one has constraint that are not respected -> should be rejected\n\t\t\tpodLabels: map[string]string{\n\t\t\t\t"cc-center": "team-kubewarden",\n\t\t\t},\n\t\t\tdeniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n\t\t\tconstrainedLabels: map[string]*RegularExpression{\n\t\t\t\t"cc-center": {\n\t\t\t\t\tRegexp: regexp.MustCompile(`team-\\d+`),\n\t\t\t\t},\n\t\t\t},\n\t\t\texpectedIsValid: false,\n\t\t},\n\t\t{\n\t\t\t// highlight-next-line\n\t\t\t// Settings have a constraint, pod doesn\'t have this label -> should be rejected\n\t\t\tpodLabels: map[string]string{\n\t\t\t\t"owner": "team-kubewarden",\n\t\t\t},\n\t\t\tdeniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n\t\t\tconstrainedLabels: map[string]*RegularExpression{\n\t\t\t\t"cc-center": {\n\t\t\t\t\tRegexp: regexp.MustCompile(`team-\\d+`),\n\t\t\t\t},\n\t\t\t},\n\t\t\texpectedIsValid: false,\n\t\t},\n\t}\n\n\t// highlight-next-line\n\t// NOTE 2\n\tfor _, testCase := range cases {\n\t\tsettings := Settings{\n\t\t\tDeniedLabels:      testCase.deniedLabels,\n\t\t\tConstrainedLabels: testCase.constrainedLabels,\n\t\t}\n\n\t\tpod := corev1.Pod{\n\t\t\tMetadata: &metav1.ObjectMeta{\n\t\t\t\tName:      "test-pod",\n\t\t\t\tNamespace: "default",\n\t\t\t\tLabels:    testCase.podLabels,\n\t\t\t},\n\t\t}\n\n\t\tpayload, err := kubewarden_testing.BuildValidationRequest(&pod, &settings)\n\t\tif err != nil {\n\t\t\tt.Errorf("Unexpected error: %+v", err)\n\t\t}\n\n\t\tresponsePayload, err := validate(payload)\n\t\tif err != nil {\n\t\t\tt.Errorf("Unexpected error: %+v", err)\n\t\t}\n\n\t\tvar response kubewarden_protocol.ValidationResponse\n\t\tif err := json.Unmarshal(responsePayload, &response); err != nil {\n\t\t\tt.Errorf("Unexpected error: %+v", err)\n\t\t}\n\n\t\tif testCase.expectedIsValid && !response.Accepted {\n\t\t\tt.Errorf("Unexpected rejection: msg %s - code %d with pod labels: %v, denied labels: %v, constrained labels: %v",\n\t\t\t\t*response.Message, *response.Code, testCase.podLabels, testCase.deniedLabels, testCase.constrainedLabels)\n\t\t}\n\n\t\tif !testCase.expectedIsValid && response.Accepted {\n\t\t\tt.Errorf("Unexpected acceptance with pod labels: %v, denied labels: %v, constrained labels: %v",\n\t\t\t\ttestCase.podLabels, testCase.deniedLabels, testCase.constrainedLabels)\n\t\t}\n\t}\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:['The test uses a "test-case driven" approach. We start by defining a ',(0,a.jsx)(t.code,{children:"struct"})," that\nholds the data needed by a test case, see ",(0,a.jsx)(t.code,{children:"NOTE 1"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"struct {\n\t\tpodLabels         map[string]string\n\t\tdeniedLabels      mapset.Set[string]\n\t\tconstrainedLabels map[string]*RegularExpression\n\t\texpectedIsValid   bool\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"We then declare several test cases, each one is highlighted in the code\nsnippet from above."}),"\n",(0,a.jsx)(t.p,{children:"For example, a Pod that has no labels should always be considered valid. This is tested\nwith these input values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'{\n  podLabels:         map[string]string{},\n  deniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n  constrainedLabels: map[string]*RegularExpression{},\n  expectedIsValid:   true,\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The test keeps defining new scenarios in this way until we reach ",(0,a.jsx)(t.code,{children:"NOTE 2"}),".\nThis is where we iterate over the different test cases and perform the following code:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Create a ",(0,a.jsx)(t.code,{children:"BasicSettings"})," object by using the data provided by the ",(0,a.jsx)(t.code,{children:"testCase"})]}),"\n",(0,a.jsxs)(t.li,{children:["Create a ",(0,a.jsx)(t.code,{children:"Pod"})," object, assign to it the labels defined inside of the ",(0,a.jsx)(t.code,{children:"testCase"})]}),"\n",(0,a.jsxs)(t.li,{children:["Create a ",(0,a.jsx)(t.code,{children:"payload"})," object. This is done using a helper function of the Kubewarden SDK:\n",(0,a.jsx)(t.code,{children:"kubewarden_testing.BuildValidationRequest"}),". This function takes as input the object\nthe request is about (the ",(0,a.jsx)(t.code,{children:"Pod"})," in our case) and the object that describes the settings (the\n",(0,a.jsx)(t.code,{children:"BasicSettings"})," instance in our case)"]}),"\n",(0,a.jsxs)(t.li,{children:["Finally, the code invokes our ",(0,a.jsx)(t.code,{children:"validate"})," function and performs a check against its\noutcome"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["We can now run all the unit tests, including the one defined inside of ",(0,a.jsx)(t.code,{children:"settings_test.go"}),",\nby using this simple command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"make test\n"})}),"\n",(0,a.jsx)(t.p,{children:"This will produce the following output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n    validate_test.go:134: Unexpected acceptance with pod labels: map[owner:team-kubewarden], denied labels: Set{hello}, constrained labels: map[cc-center:team-\\d+]\n--- FAIL: TestValidateLabel (0.00s)\nFAIL\nexit status 1\nFAIL    github.com/kubewarden/go-policy-template        0.003s\nmake: *** [Makefile:29: test] Error 1\n'})}),"\n",(0,a.jsxs)(t.p,{children:["As we can see all the ",(0,a.jsx)(t.code,{children:"Settings"})," tests are passing, but there's one test case of the\n",(0,a.jsx)(t.code,{children:"TestValidateLabel"})," that is not:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"validate_test.go:134: Unexpected acceptance with pod labels: map[owner:team-kubewarden], denied labels: Set{hello}, constrained labels: map[cc-center:team-\\d+]\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this scenario, our policy settings dictate that Pods must have a label with\na key ",(0,a.jsx)(t.code,{children:"cc-center"})," that satisfies the ",(0,a.jsx)(t.code,{children:"team-\\d+"})," regular expression.\nThe Pod being tested doesn't have this label, hence it should be rejected. This\nisn't happening however."]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsxs)(t.p,{children:["You might be wondering why the output of the unit tests features\nlines like ",(0,a.jsx)(t.code,{children:'NATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}'})]}),(0,a.jsxs)(t.p,{children:["This output is produced by the ",(0,a.jsx)(t.code,{children:"logger"})," statements used inside of the policy. This happens\nonly when the code is run outside of the WebAssembly context. This does not happen when\nthe policy is evaluated by Kubewarden, in that context the ",(0,a.jsx)(t.code,{children:"logger"})," statements will emit\nOpenTelemetry events instead."]})]}),"\n",(0,a.jsx)(t.h3,{id:"fix-the-broken-unit-test",children:"Fix the broken unit test"}),"\n",(0,a.jsx)(t.p,{children:"To fix the broken test we just discovered we have to make a small change inside\nof our validation function."}),"\n",(0,a.jsx)(t.p,{children:"Currently the core of our validation logic is made by the following lines:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:"for label, value := range pod.Metadata.Labels {\n\tif err := validateLabel(label, value, &settings); err != nil {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(err.Error()),\n\t\t\tkubewarden.NoCode)\n\t}\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Here we iterate over each label to ensure that it is not denied and\nthat it doesn't violate one of the constraints specified by the user.\nHowever, we are not making sure that the Pod has all the labels specified inside\nof the ",(0,a.jsx)(t.code,{children:"Settings.ConstrainedLabels"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Let's add some new code, right after the ",(0,a.jsx)(t.code,{children:"for"})," loop shown above:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'for requiredLabel := range settings.ConstrainedLabels {\n\t_, found := pod.Metadata.Labels[requiredLabel]\n\tif !found {\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(fmt.Sprintf(\n\t\t\t\t"Constrained label %s not found inside of Pod",\n\t\t\t\trequiredLabel),\n\t\t\t),\n\t\t\tkubewarden.NoCode)\n\t}\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Let's run the unit tests again:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"make test\n"})}),"\n",(0,a.jsx)(t.p,{children:"This will produce the following output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:'go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n--- PASS: TestValidateLabel (0.00s)\nPASS\nok      github.com/kubewarden/go-policy-template        0.003s\n'})}),"\n",(0,a.jsx)(t.p,{children:"As you can see, this time all the tests are passing.\nWe can now move to the next step, write some end-to-end tests."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);