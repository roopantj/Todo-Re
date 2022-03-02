import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:C:\Users\91754\Desktop\Todo-Re\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/styles/index.css
var styles_default = "/build/_assets/index-XTOW6FN7.css";

// app/routes/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function HomePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-linear-gradient container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login to add your Todo"), /* @__PURE__ */ React.createElement("form", {
    method: "POST",
    action: "/login"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Login")));
}
export {
  HomePage as default,
  links
};
//# sourceMappingURL=/build/routes/index-2IFTCKQZ.js.map
