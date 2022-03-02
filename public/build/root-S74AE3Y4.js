import {
  Links,
  LiveReload,
  Outlet
} from "/build/_shared/chunk-XPZ6P5TY.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:C:\Users\91754\Desktop\Todo-Re\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FO3JOHFT.css";

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
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://apis.google.com/js/platform.js",
    async: true,
    defer: true
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "google-signin-client_id",
    content: "600930389454-sjq229oum7ar99jqt9nreutq4r4j8bbk.apps.googleusercontent.com"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix JS "), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "home"
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-S74AE3Y4.js.map
