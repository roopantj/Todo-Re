import {
  login_default
} from "/build/_shared/chunk-47WS36EG.js";
import {
  require_session
} from "/build/_shared/chunk-5W7FU2FW.js";
import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-GMDJKDXB.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:C:\Users\91754\Desktop\Todo-Re\app\routes\login.tsx?browser
init_react();

// app/routes/login.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
var links = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function Login() {
  var _a, _b, _c;
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("script", {
    src: "https://accounts.google.com/gsi/client",
    async: true,
    defer: true
  }), /* @__PURE__ */ React.createElement("div", {
    id: "g_id_onload",
    "data-client_id": "600930389454-sjq229oum7ar99jqt9nreutq4r4j8bbk.apps.googleusercontent.com",
    "data-login_uri": "http://localhost:3000/login",
    "data-auto_prompt": "false"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "g_id_signin",
    "data-type": "standard",
    "data-size": "large",
    "data-theme": "outline",
    "data-text": "sign_in_with",
    "data-shape": "rectangular",
    "data-logo_alignment": "left"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "login-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), (actionData == null ? void 0 : actionData.formError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.formError), (actionData == null ? void 0 : actionData.nameError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.nameError), (actionData == null ? void 0 : actionData.passwordError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.passwordError), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: true
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", {
    className: "input-fields"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-field"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.name,
    id: "username-input",
    name: "username"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-field"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    defaultValue: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.password,
    name: "password",
    type: "password"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit"))))));
}
export {
  Login as default,
  links
};
//# sourceMappingURL=/build/routes/login-VLHWVP5V.js.map
