import {
  Links,
  LiveReload,
  Outlet,
  React,
  init_react
} from "/build/_shared/chunk-CHBTBQBR.js";

// browser-route-module:C:\Users\91754\Desktop\Todo-Re\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FYXJKEE2.css";

// app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix JS "), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-purple-900"
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-ERAZNMC2.js.map
