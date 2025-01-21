"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[69928],{66375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"writing-policies/go/raw-policies","title":"Raw policies","description":"Raw policies are policies that can evaluate arbitrary JSON documents.","source":"@site/versioned_docs/version-1.9/writing-policies/go/10-raw-policies.md","sourceDirName":"writing-policies/go","slug":"/writing-policies/go/raw-policies","permalink":"/1.9/writing-policies/go/raw-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/go/10-raw-policies.md","tags":[],"version":"1.9","lastUpdatedAt":1737463692000,"sidebarPosition":10,"frontMatter":{"sidebar_label":"Raw policies","title":"Raw policies"},"sidebar":"docs","previous":{"title":"Validate doing JSON queries","permalink":"/1.9/writing-policies/go/validation-with-queries"},"next":{"title":"Introduction to Rego","permalink":"/1.9/writing-policies/rego/intro-rego"}}');var s=n(74848),r=n(28453);const a={sidebar_label:"Raw policies",title:"Raw policies"},o="Writing raw policies",l={},d=[{value:"Examples",id:"examples",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"writing-raw-policies",children:"Writing raw policies"})}),"\n",(0,s.jsxs)(t.p,{children:["Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the ",(0,s.jsx)(t.a,{href:"/1.9/howtos/raw-policies",children:"raw policies"})," page."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["The following examples should look familiar if you completed the ",(0,s.jsx)(t.a,{href:"/1.9/writing-policies/go/validation",children:"validation"})," page of this tutorial."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Remember to mark the policy as ",(0,s.jsx)(t.code,{children:"raw"})," by using the ",(0,s.jsx)(t.code,{children:"policyType"})," field in the ",(0,s.jsx)(t.code,{children:"metadata.yml"})," configuration.\nPlease refer to the ",(0,s.jsx)(t.a,{href:"/1.9/writing-policies/metadata",children:"metadata"})," specification for more information."]})}),"\n",(0,s.jsx)(t.h3,{id:"validation",children:"Validation"}),"\n",(0,s.jsx)(t.p,{children:"Let's write a policy that accepts a request in the following format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "request": {\n    "user": "alice",\n    "action": "delete",\n    "resource": "products"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"and validates that:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"user"})," is in the list of valid users"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"action"})," is in the list of valid actions"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"resource"})," is in the list of valid resources"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Start by scaffolding the policy by using the ",(0,s.jsx)(t.a,{href:"https://github.com/kubewarden/go-policy-template",children:"go policy template"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"First, we define the types that represent the payload of the request."}),"\n",(0,s.jsxs)(t.p,{children:["We will declare a custom ",(0,s.jsx)(t.code,{children:"RawValidationRequest"})," type that contains the ",(0,s.jsx)(t.code,{children:"Request"})," and the ",(0,s.jsx)(t.code,{children:"Settings"}),",\ninstead of using the ",(0,s.jsx)(t.code,{children:"ValidationRequest"})," type that is provided by the SDK:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// RawValidationRequest represents the request that is sent to the validate function by the Policy Server.\ntype RawValidationRequest struct {\n\tRequest Request `json:"request"`\n\t// Raw policies can have settings.\n\tSettings Settings `json:"settings"`\n}\n\n// Request represents the payload of the request.\ntype Request struct {\n\tUser     string `json:"user"`\n\tAction   string `json:"action"`\n\tResource string `json:"resource"`\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Then we need to define the ",(0,s.jsx)(t.code,{children:"Settings"})," type and the ",(0,s.jsx)(t.code,{children:"validateSettings"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Settings represents the settings of the policy.\ntype Settings struct {\n\tValidUsers     []string `json:"validUsers"`\n\tValidActions   []string `json:"validActions"`\n\tValidResources []string `json:"validResources"`\n}\n\n// Valid returns true if the settings are valid.\nfunc (s *Settings) Valid() (bool, error) {\n\tif len(s.ValidUsers) == 0 {\n\t\treturn false, fmt.Errorf("validUsers cannot be empty")\n\t}\n\n\tif len(s.ValidActions) == 0 {\n\t\treturn false, fmt.Errorf("validActions cannot be empty")\n\t}\n\n\tif len(s.ValidResources) == 0 {\n\t\treturn false, fmt.Errorf("validResources cannot be empty")\n\t}\n\n\treturn true, nil\n}\n\n// validateSettings validates the settings.\nfunc validateSettings(payload []byte) ([]byte, error) {\n\tlogger.Info("validating settings")\n\n\tsettings := Settings{}\n\terr := json.Unmarshal(payload, &settings)\n\tif err != nil {\n\t\treturn kubewarden.RejectSettings(kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n\t}\n\n\tvalid, err := settings.Valid()\n\tif err != nil {\n\t\treturn kubewarden.RejectSettings(kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n\t}\n\tif valid {\n\t\treturn kubewarden.AcceptSettings()\n\t}\n\n\tlogger.Warn("rejecting settings")\n\treturn kubewarden.RejectSettings(kubewarden.Message("Provided settings are not valid"))\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, we define the ",(0,s.jsx)(t.code,{children:"validate"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n\t// Unmarshal the payload into a RawValidationRequest instance\n\tvalidationRequest := RawValidationRequest{}\n\terr := json.Unmarshal(payload, &validationRequest)\n\tif err != nil {\n\t\t// If the payload is not valid, reject the request\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(err.Error()),\n\t\t\tkubewarden.Code(400))\n\t}\n\n\trequest := validationRequest.Request\n\tsettings := validationRequest.Settings\n\n\t// Validate the payload\n\tif slices.Contains(settings.ValidUsers, request.User) &&\n\t\tslices.Contains(settings.ValidActions, request.Action) &&\n\t\tslices.Contains(settings.ValidResources, request.Resource) {\n\t\treturn kubewarden.AcceptRequest()\n\t}\n\n\treturn kubewarden.RejectRequest(\n\t\tkubewarden.Message("The request cannot be accepted."),\n\t\tkubewarden.Code(400))\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"mutation",children:"Mutation"}),"\n",(0,s.jsxs)(t.p,{children:["Let's modify the previous example to mutate the request instead of rejecting it.\nIn this case, the settings will contain the ",(0,s.jsx)(t.code,{children:"defaultUser"}),", ",(0,s.jsx)(t.code,{children:"defaultAction"})," and ",(0,s.jsx)(t.code,{children:"defaultRequest"})," that will be used to mutate the request if the user, the action or the resource is not valid."]}),"\n",(0,s.jsxs)(t.p,{children:["We need to update the ",(0,s.jsx)(t.code,{children:"Settings"})," type with the new fields:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Settings defines the settings of the policy.\ntype Settings struct {\n\tValidUsers      []string `json:"validUsers"`\n\tValidActions    []string `json:"validActions"`\n\tValidResources  []string `json:"validResources"`\n\tDefaultUser     string   `json:"defaultUser"`\n\tDefaultAction   string   `json:"defaultAction"`\n\tDefaultResource string   `json:"defaultResource"`\n}\n\n// Valid returns true if the settings are valid.\nfunc (s *Settings) Valid() (bool, error) {\n\tif len(s.ValidUsers) == 0 {\n\t\treturn false, fmt.Errorf("validUsers cannot be empty")\n\t}\n\n\tif len(s.ValidActions) == 0 {\n\t\treturn false, fmt.Errorf("validActions cannot be empty")\n\t}\n\n\tif len(s.ValidResources) == 0 {\n\t\treturn false, fmt.Errorf("validResources cannot be empty")\n\t}\n\n\tif s.DefaultUser == "" {\n\t\treturn false, fmt.Errorf("defaultUser cannot be empty")\n\t}\n\n\tif s.DefaultAction == "" {\n\t\treturn false, fmt.Errorf("defaultUser cannot be empty")\n\t}\n\n\tif s.DefaultResource == "" {\n\t\treturn false, fmt.Errorf("defaultResource cannot be empty")\n\t}\n\n\treturn true, nil\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["and the ",(0,s.jsx)(t.code,{children:"validate"})," function to introduce the mutation:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n\t// Unmarshal the payload into a RawValidationRequest instance\n\tvalidationRequest := RawValidationRequest{}\n\terr := json.Unmarshal(payload, &validationRequest)\n\tif err != nil {\n\t\t// If the payload is not valid, reject the request\n\t\treturn kubewarden.RejectRequest(\n\t\t\tkubewarden.Message(err.Error()),\n\t\t\tkubewarden.Code(400))\n\t}\n\n\trequest := validationRequest.Request\n\tsettings := validationRequest.Settings\n\n\tlogger.Info("validating request")\n\n\t// Accept the request without mutating it if it is valid\n\tif slices.Contains(settings.ValidUsers, request.User) &&\n\t\tslices.Contains(settings.ValidActions, request.Action) &&\n\t\tslices.Contains(settings.ValidResources, request.Resource) {\n\t\treturn kubewarden.AcceptRequest()\n\t}\n\n\tlogger.Info("mutating request")\n\n\t// Mutate the request if it is not valid\n\tif !slices.Contains(settings.ValidUsers, request.User) {\n\t\trequest.User = settings.DefaultUser\n\t}\n\n\tif !slices.Contains(settings.ValidActions, request.Action) {\n\t\trequest.Action = settings.DefaultAction\n\t}\n\n\tif !slices.Contains(settings.ValidResources, request.Resource) {\n\t\trequest.Resource = settings.DefaultResource\n\t}\n\n\treturn kubewarden.MutateRequest(request)\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);