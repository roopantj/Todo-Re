import {
  login_default
} from "/build/_shared/chunk-47WS36EG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:C:\Users\91754\Desktop\Todo-Re\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function HomePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "login-container content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login to add your Todo"), /* @__PURE__ */ React.createElement("form", {
    method: "GET",
    action: "/login"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn-primary",
    type: "submit"
  }, "Login")));
}
export {
  HomePage as default,
  links
};
//# sourceMappingURL=/build/routes/index-UQ65HQFW.js.map
