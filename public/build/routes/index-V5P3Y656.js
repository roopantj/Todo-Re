import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-CHBTBQBR.js";

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
    className: "bg-linear-gradient"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login to add your Todo"), /* @__PURE__ */ React.createElement(Link, {
    to: "/login"
  }, "Login"));
}
export {
  HomePage as default,
  links
};
//# sourceMappingURL=/build/routes/index-V5P3Y656.js.map
