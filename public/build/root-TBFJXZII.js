import {
  styles_default
} from "/build/_shared/chunk-QHBQ2JC6.js";
import {
  Links,
  LiveReload,
  Outlet
} from "/build/_shared/chunk-FRRG5DAF.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:C:\Users\91754\Desktop\remix-todo\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix JS"), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-TBFJXZII.js.map
