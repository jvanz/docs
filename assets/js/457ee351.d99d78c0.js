"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[37432],{88647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"tutorials/writing-policies/go/validation","title":"Writing the validation logic","description":"A tutorial on writing validation logic for a Kubewarden policy using Go.","source":"@site/versioned_docs/version-1.14/tutorials/writing-policies/go/04-validation.md","sourceDirName":"tutorials/writing-policies/go","slug":"/tutorials/writing-policies/go/validation","permalink":"/1.14/tutorials/writing-policies/go/validation","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.14/tutorials/writing-policies/go/04-validation.md","tags":[],"version":"1.14","lastUpdatedAt":1737553641000,"sidebarPosition":32,"frontMatter":{"sidebar_label":"Validation logic","sidebar_position":32,"title":"Writing the validation logic","description":"A tutorial on writing validation logic for a Kubewarden policy using Go.","keywords":["kubewarden","kubernetes","writing policies","golang","go"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","golang","validation-logic"],"doc-persona":["kubewarden-developer"]},"sidebar":"docs","previous":{"title":"Defining policy settings","permalink":"/1.14/tutorials/writing-policies/go/policy-settings"},"next":{"title":"End-to-end testing","permalink":"/1.14/tutorials/writing-policies/go/e2e-tests"}}');var i=t(74848),a=t(28453);const o={sidebar_label:"Validation logic",sidebar_position:32,title:"Writing the validation logic",description:"A tutorial on writing validation logic for a Kubewarden policy using Go.",keywords:["kubewarden","kubernetes","writing policies","golang","go"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","golang","validation-logic"],"doc-persona":["kubewarden-developer"]},l=void 0,d={},r=[{value:"The <code>validate</code> function",id:"the-validate-function",level:2},{value:"Testing the validation code",id:"testing-the-validation-code",level:2},{value:"Fix the broken unit test",id:"fix-the-broken-unit-test",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:t,Head:s}=n;return t||g("Details",!0),s||g("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/go/validation"})}),"\n",(0,i.jsxs)(n.p,{children:["The validation logic goes be in the ",(0,i.jsx)(n.code,{children:"validate.go"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"Your validation logic needs to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Extract the relevant information from the incoming ",(0,i.jsx)(n.code,{children:"payload"})," object."]}),"\n",(0,i.jsx)(n.li,{children:"Return a response based on the input and the policy settings."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The incoming payload is a JSON object, described\n",(0,i.jsx)(n.a,{href:"../../../reference/spec/validating-policies",children:"in this document"}),",\nand you can get the data from it in two ways:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Unmarshal the JSON data into Go types."}),"\n",(0,i.jsxs)(n.li,{children:["Perform JSON queries (something similar to ",(0,i.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:(0,i.jsx)(n.code,{children:"jq"})}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This section of the documentation focuses on the first approach, using Go types.\nA description of the second approach is in a later ",(0,i.jsx)(n.a,{href:"validation-with-queries",children:"validation with queries"})," section."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Relying on Kubernetes objects,\ninstead of doing jq-like searches,\nleads to generation of bigger WebAssembly modules.\nA policy using Kubernetes objects can be around 1.5\xa0MB\nwhile one using ",(0,i.jsx)(n.code,{children:"gjson"})," is around 300\xa0KB."]}),(0,i.jsxs)(n.p,{children:["Apart from size,\nthe policy using Kubernetes objects take much more time during first execution.\nFollowing invocations are fast because Kubewarden uses Wasmtime's cache feature.\nThe first execution can take about 20 seconds with ",(0,i.jsx)(n.code,{children:"kwctl"}),", later executions, 1 to 2 seconds.\nSo, Kubewarden Policy Server has a slower start-up time but then policy evaluation times aren't usually effected by the usage of Kubernetes objects."]})]}),"\n",(0,i.jsxs)(n.h2,{id:"the-validate-function",children:["The ",(0,i.jsx)(n.code,{children:"validate"})," function"]}),"\n",(0,i.jsxs)(n.p,{children:["The policy provided by the scaffold template, in ",(0,i.jsx)(n.code,{children:"validate.go"}),", already has a ",(0,i.jsx)(n.code,{children:"validate"})," function.\nYou need to make few changes to it for this tutorial."]}),"\n",(0,i.jsx)(n.p,{children:"This is how the function should be when complete:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n    // highlight-next-line\n    // NOTE 1\n    // Create a ValidationRequest instance from the incoming payload\n    validationRequest := kubewarden_protocol.ValidationRequest{}\n    err := json.Unmarshal(payload, &validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // highlight-next-line\n    // NOTE 2\n    // Create a Settings instance from the ValidationRequest object\n    settings, err := NewSettingsFromValidationReq(&validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // highlight-next-line\n    // NOTE 3\n    // Access the **raw** JSON that describes the object\n    podJSON := validationRequest.Request.Object\n\n    // highlight-next-line\n    // NOTE 4\n    // Try to create a Pod instance using the RAW JSON we got from the\n    // ValidationRequest.\n    pod := &corev1.Pod{}\n    if err := json.Unmarshal([]byte(podJSON), pod); err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(\n                fmt.Sprintf("Cannot decode Pod object: %s", err.Error())),\n            kubewarden.Code(400))\n    }\n\n    logger.DebugWithFields("validating pod object", func(e onelog.Entry) {\n        e.String("name", pod.Metadata.Name)\n        e.String("namespace", pod.Metadata.Namespace)\n    })\n\n    // highlight-next-line\n    // NOTE 5\n    for label, value := range pod.Metadata.Labels {\n        if err := validateLabel(label, value, &settings); err != nil {\n            return kubewarden.RejectRequest(\n                kubewarden.Message(err.Error()),\n                kubewarden.NoCode)\n        }\n    }\n\n    return kubewarden.AcceptRequest()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The code has ",(0,i.jsx)(n.code,{children:"NOTE"})," sections:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"kubewarden_protocol.ValidationRequest"})," by unmarshaling the JSON payload."]}),"\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"Settings"})," object by using the function you earlier defined in the ",(0,i.jsx)(n.code,{children:"settings.go"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:["Access the raw JSON representation of the Pod that's part of the ",(0,i.jsx)(n.code,{children:"ValidationRequest"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Unmarshal the Pod object."}),"\n",(0,i.jsxs)(n.li,{children:["Iterate over the labels of the Pod.\nYou use a new function called ",(0,i.jsx)(n.code,{children:"validateLabel"})," to identify labels violating the policy."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You also need to define the ",(0,i.jsx)(n.code,{children:"validateLabel"})," function in the ",(0,i.jsx)(n.code,{children:"validate.go"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func validateLabel(label, value string, settings *Settings) error {\n    if settings.DeniedLabels.Contains(label) {\n        return fmt.Errorf("Label %s is on the deny list", label)\n    }\n\n    regExp, found := settings.ConstrainedLabels[label]\n    if found {\n        // This is a constrained label\n        if !regExp.Match([]byte(value)) {\n            return fmt.Errorf("The value of %s doesn\'t pass user-defined constraint", label)\n        }\n    }\n\n    return nil\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"testing-the-validation-code",children:"Testing the validation code"}),"\n",(0,i.jsxs)(n.p,{children:["Now you can write unit tests to check the validation code is behaving.\nLocate the tests in the ",(0,i.jsx)(n.code,{children:"validate_test.go"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"You should replace the contents of the scaffolding file to match this:"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"validate_test.go"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "regexp"\n    "testing"\n\n    "encoding/json"\n\n    mapset "github.com/deckarep/golang-set/v2"\n    corev1 "github.com/kubewarden/k8s-objects/api/core/v1"\n    metav1 "github.com/kubewarden/k8s-objects/apimachinery/pkg/apis/meta/v1"\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n    kubewarden_testing "github.com/kubewarden/policy-sdk-go/testing"\n)\n\nfunc TestValidateLabel(t *testing.T) {\n    // highlight-next-line\n    // NOTE 1\n    cases := []struct {\n        podLabels         map[string]string\n        deniedLabels      mapset.Set[string]\n        constrainedLabels map[string]*RegularExpression\n        expectedIsValid   bool\n    }{\n        {\n            // highlight-next-line\n            // Pod has no labels -> should be accepted\n            podLabels:         map[string]string{},\n            deniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n            constrainedLabels: map[string]*RegularExpression{},\n            expectedIsValid:   true,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, none is denied -> should be accepted\n            podLabels: map[string]string{\n                "hello": "world",\n            },\n            deniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n            constrainedLabels: map[string]*RegularExpression{},\n            expectedIsValid:   true,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, one is denied -> should be rejected\n            podLabels: map[string]string{\n                "hello": "world",\n            },\n            deniedLabels:      mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{},\n            expectedIsValid:   false,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, one has constraint that is respected -> should be accepted\n            podLabels: map[string]string{\n                "cc-center": "team-123",\n            },\n            deniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{\n                "cc-center": {\n                    Regexp: regexp.MustCompile(`team-\\d+`),\n                },\n            },\n            expectedIsValid: true,\n        },\n        {\n            // highlight-next-line\n            // Pod has labels, one has constraint that are not respected -> should be rejected\n            podLabels: map[string]string{\n                "cc-center": "team-kubewarden",\n            },\n            deniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{\n                "cc-center": {\n                    Regexp: regexp.MustCompile(`team-\\d+`),\n                },\n            },\n            expectedIsValid: false,\n        },\n        {\n            // highlight-next-line\n            // Settings have a constraint, pod doesn\'t have this label -> should be rejected\n            podLabels: map[string]string{\n                "owner": "team-kubewarden",\n            },\n            deniedLabels: mapset.NewThreadUnsafeSet[string]("hello"),\n            constrainedLabels: map[string]*RegularExpression{\n                "cc-center": {\n                    Regexp: regexp.MustCompile(`team-\\d+`),\n                },\n            },\n            expectedIsValid: false,\n        },\n    }\n\n    // highlight-next-line\n    // NOTE 2\n    for _, testCase := range cases {\n        settings := Settings{\n            DeniedLabels:      testCase.deniedLabels,\n            ConstrainedLabels: testCase.constrainedLabels,\n        }\n\n        pod := corev1.Pod{\n            Metadata: &metav1.ObjectMeta{\n                Name:      "test-pod",\n                Namespace: "default",\n                Labels:    testCase.podLabels,\n            },\n        }\n\n        payload, err := kubewarden_testing.BuildValidationRequest(&pod, &settings)\n        if err != nil {\n            t.Errorf("Unexpected error: %+v", err)\n        }\n\n        responsePayload, err := validate(payload)\n        if err != nil {\n            t.Errorf("Unexpected error: %+v", err)\n        }\n\n        var response kubewarden_protocol.ValidationResponse\n        if err := json.Unmarshal(responsePayload, &response); err != nil {\n            t.Errorf("Unexpected error: %+v", err)\n        }\n\n        if testCase.expectedIsValid && !response.Accepted {\n            t.Errorf("Unexpected rejection: msg %s - code %d with pod labels: %v, denied labels: %v, constrained labels: %v",\n                *response.Message, *response.Code, testCase.podLabels, testCase.deniedLabels, testCase.constrainedLabels)\n        }\n\n        if !testCase.expectedIsValid && response.Accepted {\n            t.Errorf("Unexpected acceptance with pod labels: %v, denied labels: %v, constrained labels: %v",\n                testCase.podLabels, testCase.deniedLabels, testCase.constrainedLabels)\n        }\n    }\n}\n'})})]}),"\n",(0,i.jsxs)(n.p,{children:['The test uses a "test-case driven" approach.\nYou start by defining a ',(0,i.jsx)(n.code,{children:"struct"})," that holds the data needed by a test case, see ",(0,i.jsx)(n.code,{children:"NOTE 1"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"struct {\n        podLabels         map[string]string\n        deniedLabels      mapset.Set[string]\n        constrainedLabels map[string]*RegularExpression\n        expectedIsValid   bool\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"You then declare several test cases.\nThey have the start lines highlighted in the code block above."}),"\n",(0,i.jsx)(n.p,{children:"For example,\nyou should consider a Pod that has no labels to be valid.\nYou can test this with these input values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'{\n  podLabels:         map[string]string{},\n  deniedLabels:      mapset.NewThreadUnsafeSet[string]("owner"),\n  constrainedLabels: map[string]*RegularExpression{},\n  expectedIsValid:   true,\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The test defines new scenarios in this way until ",(0,i.jsx)(n.code,{children:"NOTE 2"}),".\nThis is where you iterate over the different test cases using the following code:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"BasicSettings"})," object by using the data provided by the ",(0,i.jsx)(n.code,{children:"testCase"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"Pod"})," object, assign to it the labels defined in ",(0,i.jsx)(n.code,{children:"testCase"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"payload"})," object. Do this using a helper function of the Kubewarden SDK: ",(0,i.jsx)(n.code,{children:"kubewarden_testing.BuildValidationRequest"}),".\nThis function takes as input the object the request is about, the ",(0,i.jsx)(n.code,{children:"Pod"}),",\nand the object that describes the settings, the ",(0,i.jsx)(n.code,{children:"BasicSettings"})," instance."]}),"\n",(0,i.jsxs)(n.li,{children:["Finally, the code invokes your ",(0,i.jsx)(n.code,{children:"validate"})," function and performs a check on the result."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can now run all the unit tests,\nincluding the one defined in ",(0,i.jsx)(n.code,{children:"settings_test.go"}),",\nby using:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"make test\n"})}),"\n",(0,i.jsx)(n.p,{children:"This produces the following output:"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:["Output from ",(0,i.jsx)(n.code,{children:"make test"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'make test\ngo test -v\n=== RUN   TestParsingSettingsWithNoValueProvided\n--- PASS: TestParsingSettingsWithNoValueProvided (0.00s)\n=== RUN   TestIsNameDenied\n--- PASS: TestIsNameDenied (0.00s)\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n    validate_test.go:126: Unexpected acceptance with pod labels: map[owner:team-kubewarden], denied labels: Set{hello}, constrained labels: map[cc-center:team-\\d+]\n--- FAIL: TestValidateLabel (0.00s)\nFAIL\nexit status 1\nFAIL    github.com/kubewarden/go-policy-template        0.003s\nmake: *** [Makefile:29: test] Error 1\n'})})]}),"\n",(0,i.jsxs)(n.p,{children:["As you can see all the ",(0,i.jsx)(n.code,{children:"Settings"})," tests are passing, but there's one test case of the\n",(0,i.jsx)(n.code,{children:"TestValidateLabel"})," that isn't:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"validate_test.go:126: Unexpected acceptance with pod labels: map[owner:team-kubewarden], denied labels: Set{hello}, constrained labels: map[cc-center:team-\\d+]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this scenario, your policy settings says that Pods must have a label,\nwith a key ",(0,i.jsx)(n.code,{children:"cc-center"}),",\nthat satisfies the ",(0,i.jsx)(n.code,{children:"team-\\d+"})," regular expression.\nThe Pod tested doesn't have this label, so you should reject it.\nThis isn't happening however, so you can fix this in the next section."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["You might be wondering why the output of the unit tests features lines like\n",(0,i.jsx)(n.code,{children:'NATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}'})]}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"logger"})," statements in the policy produce this output.\nThis happens only when the code runs outside the WebAssembly context.\nThis doesn't happen when the policy evaluates in Kubewarden,\nin that context the ",(0,i.jsx)(n.code,{children:"logger"})," statements emit OpenTelemetry events instead."]})]}),"\n",(0,i.jsx)(n.h3,{id:"fix-the-broken-unit-test",children:"Fix the broken unit test"}),"\n",(0,i.jsxs)(n.p,{children:["To fix the broken test you discovered you have to make a change in your validation function, ",(0,i.jsx)(n.code,{children:"validate"})," in ",(0,i.jsx)(n.code,{children:"validate.go"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Currently, the core of your validation logic is the following lines:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"for label, value := range pod.Metadata.Labels {\n    if err := validateLabel(label, value, &settings); err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.NoCode)\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here you iterate over each label to check that it's not denied\nand that it doesn't violate one of the constraints specified by the user.\nHowever, you're not making sure that the Pod has all the labels specified in ",(0,i.jsx)(n.code,{children:"Settings.ConstrainedLabels"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Add the new code, right after the ",(0,i.jsx)(n.code,{children:"for"})," loop:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'for requiredLabel := range settings.ConstrainedLabels {\n    _, found := pod.Metadata.Labels[requiredLabel]\n    if !found {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(fmt.Sprintf(\n                "Constrained label %s not found inside of Pod",\n                requiredLabel),\n            ),\n            kubewarden.NoCode)\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Run the unit tests again:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"make test\n"})}),"\n",(0,i.jsx)(n.p,{children:"This outputs:"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:["Output from final ",(0,i.jsx)(n.code,{children:"make test"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'make test\ngo test -v\n=== RUN   TestParsingSettingsWithNoValueProvided\n--- PASS: TestParsingSettingsWithNoValueProvided (0.00s)\n=== RUN   TestIsNameDenied\n--- PASS: TestIsNameDenied (0.00s)\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n--- PASS: TestValidateLabel (0.00s)\nPASS\nok      github.com/kubewarden/go-policy-template        0.003s\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"As you can see, this time all the tests pass.\nYou can now move to the next step, writing the end-to-end tests."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);