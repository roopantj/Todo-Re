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
var styles_default = "/build/_assets/index-SJNCLJ7C.css";

// app/routes/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function HomePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login to add your Todo"), /* @__PURE__ */ React.createElement(Link, {
    to: "/login"
  }, "Login"));
}
export {
  HomePage as default,
  links
};
//# sourceMappingURL=/build/routes/index-BLVBLFX4.js.map
