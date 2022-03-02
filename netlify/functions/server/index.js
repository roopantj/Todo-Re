var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
__export(exports, {
  handler: () => handler
});
init_react();
var import_netlify = __toModule(require("@remix-run/netlify"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\91754\Desktop\Todo-Re\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-OWGT5SR3.css";

// route:C:\Users\91754\Desktop\Todo-Re\app\root.tsx
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
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "google-signin-client_id",
    content: "600930389454-sjq229oum7ar99jqt9nreutq4r4j8bbk.apps.googleusercontent.com"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix JS "), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "home"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.Meta, null)));
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  default: () => LogoutRoute,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/utils/session.server.ts
init_react();
var import_bcryptjs = __toModule(require("bcryptjs"));
var import_remix3 = __toModule(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/utils/session.server.ts
async function login({ username, password }) {
  const user = await db.user.findFirst({ where: { username } });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcryptjs.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return { id: user.id, username };
}
var sessionSecret = "some-secret";
if (!sessionSecret) {
  throw new Error("Session secret must be set");
}
var storage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "Client_Session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function register({ username, password }) {
  const passwordHash = await import_bcryptjs.default.hash(password, 10);
  const user = await db.user.create({
    data: { username, passwordHash }
  });
  return { id: user.id, username };
}
async function loginWithGoogle({ username, password }) {
  const user = await db.user.findFirst({
    where: { username },
    select: { id: true }
  });
  if (!user) {
    const passwordHash = await import_bcryptjs.default.hash(password, 10);
    const newuser = await db.user.create({
      data: { username, passwordHash }
    });
    return { id: newuser.id };
  } else {
    return { id: user.id };
  }
}
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix3.redirect)(redirectTo, {
    headers: { "Set-Cookie": await storage.commitSession(session) }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  return userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix3.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function logout(request) {
  const session = await getUserSession(request);
  return (0, import_remix3.redirect)("/login", {
    headers: { "Set-Cookie": await storage.destroySession(session) }
  });
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\logout.tsx
var action = ({ request }) => {
  return logout(request);
};
var loader = ({ request }) => {
  return (0, import_remix4.redirect)("/todo");
};
function LogoutRoute() {
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => HomePage,
  links: () => links2
});
init_react();

// app/styles/login.css
var login_default = "/build/_assets/login-4256ZQXN.css";

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\index.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function HomePage() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "login-container content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login to add your Todo"), /* @__PURE__ */ React.createElement("form", {
    method: "get",
    action: "/login"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn-primary",
    type: "submit"
  }, "Login")));
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
var import_remix6 = __toModule(require_remix());
var import_jwt_decode = __toModule(require("jwt-decode"));
var links3 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
var badRequest = (data) => {
  return (0, import_remix5.json)(data, { status: 400 });
};
var loader2 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return (0, import_remix5.redirect)("/todo");
  }
  return null;
};
var action2 = async ({ request }) => {
  const handleLogin = async (fields2) => {
    switch (fields2.loginType) {
      case "login": {
        const user = await login({
          username: fields2.name,
          password: fields2.password
        });
        if (!user)
          return badRequest({ fields: fields2, formError: "Wrong username/passowrd" });
        return createUserSession(user.id, fields2.redirectTo);
      }
      case "register": {
        const userExists = await db.user.findFirst({
          where: { username: fields2.name }
        });
        if (userExists) {
          return badRequest({ fields: fields2, formError: "Username already exists" });
        }
        const user = await register({
          username: fields2.name,
          password: fields2.password
        });
        if (!user) {
          return badRequest({
            fields: fields2,
            formError: `Something went wrong trying to create a new user.`
          });
        }
        return createUserSession(user.id, fields2.redirectTo);
      }
      default: {
        return badRequest({
          fields: fields2,
          formError: "Login type invalid"
        });
      }
    }
  };
  const CLIENT_ID = "600930389454-sjq229oum7ar99jqt9nreutq4r4j8bbk.apps.googleusercontent.com";
  const form = await request.formData();
  const credential = form.get("credential");
  const loginType = form.get("loginType");
  const name = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/todo";
  if (credential != null) {
    if (typeof credential !== "string" || typeof redirectTo !== "string")
      return badRequest({ formError: "Google sign in TypeError" });
    const decoded = (0, import_jwt_decode.default)(credential);
    console.log(decoded);
    if ((decoded.iss === "https://accounts.google.com" || decoded.iss === "accounts.google.com") && decoded.aud === CLIENT_ID) {
      const user = await loginWithGoogle({
        username: decoded.sub + decoded.name,
        password: decoded.sub
      });
      if (!user)
        return badRequest({ formError: "Google sign in failed in Login" });
      return createUserSession(user.id, redirectTo);
    } else
      return badRequest({ formError: "Google sign in auth failed" });
  }
  if (typeof loginType !== "string" || typeof name !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return badRequest({ formError: "Form not submitted correctly" });
  }
  if (name.length < 3)
    return badRequest({ nameError: "Invalid name" });
  if (password.length < 6)
    return badRequest({ passwordError: "Invalid password" });
  const fields = { name, password, loginType, redirectTo };
  return handleLogin(fields);
};
function Login() {
  var _a, _b;
  const actionData = (0, import_remix6.useActionData)();
  const [searchParams] = (0, import_remix6.useSearchParams)();
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
    value: searchParams.get("redirectTo") ?? void 0
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
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    id: "username-input",
    name: "username"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-field"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    defaultValue: (_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password,
    name: "password",
    type: "password"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit"))))));
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\todo.tsx
var todo_exports = {};
__export(todo_exports, {
  action: () => action3,
  default: () => Todo,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_remix8 = __toModule(require_remix());

// app/components/Header.tsx
init_react();
var import_remix7 = __toModule(require_remix());
var Header = ({ user }) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "brand"
  }, /* @__PURE__ */ React.createElement("h2", null, "Welcome ", user)), /* @__PURE__ */ React.createElement("div", {
    className: "actions"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/todo"
  }, "Todo List")), /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/todo/new"
  }, "Add new Todo")), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout"))));
};
var Header_default = Header;

// app/styles/Header.css
var Header_default2 = "/build/_assets/Header-NZMIGGVQ.css";

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\todo.tsx
var links4 = () => {
  return [{ rel: "stylesheet", href: Header_default2 }];
};
var loader3 = async ({ request }) => {
  const userId = await requireUserId(request);
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, username: true }
  });
  if ((user == null ? void 0 : user.username) && (user == null ? void 0 : user.username.length) > 21)
    return [...user.username].slice(21).join("");
  return user == null ? void 0 : user.username;
};
var action3 = async ({ request }) => {
  return logout(request);
};
function Todo() {
  const username = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, {
    user: username
  }), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null));
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\todo\$todoId.tsx
var todoId_exports = {};
__export(todoId_exports, {
  action: () => action4,
  default: () => TodoItem,
  links: () => links5,
  loader: () => loader4
});
init_react();
var import_remix9 = __toModule(require_remix());

// app/styles/todo/todoItem.css
var todoItem_default = "/build/_assets/todoItem-6LEYNL7X.css";

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\todo\$todoId.tsx
var links5 = () => {
  return [{ rel: "stylesheet", href: todoItem_default }];
};
var badRequest2 = (data) => {
  return (0, import_remix9.json)(data, { status: 400 });
};
var loader4 = async ({ params }) => {
  const todo = await db.todo.findUnique({ where: { id: params.todoId } });
  if (!todo)
    throw new Error("Todo item not found");
  const data = { todo };
  return data;
};
var action4 = async ({ request }) => {
  const form = await request.formData();
  const id = form.get("id");
  const updatedStatus = form.get("status");
  if (typeof id !== "string" || typeof updatedStatus !== "string") {
    return badRequest2({ err: "Wrong type" });
  }
  const res = await db.todo.update({
    where: { id },
    data: {
      completed: updatedStatus === "yes" ? true : false
    }
  });
  return null;
};
function TodoItem() {
  const data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h3", null, data.todo.name), data.todo.completed ? /* @__PURE__ */ React.createElement("p", null, "Status : Completed!") : /* @__PURE__ */ React.createElement("p", null, "Status : Not Completed!"), /* @__PURE__ */ React.createElement("p", null, "Created At: ", data.todo.createdAt), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("h3", null, "Edit status"), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: data.todo.id,
    name: "id"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: data.todo.name,
    name: "name"
  }), /* @__PURE__ */ React.createElement("label", null, "Completed", /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "status",
    defaultChecked: data.todo.completed,
    value: "yes"
  })), /* @__PURE__ */ React.createElement("label", null, "Not Completed", /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "status",
    defaultChecked: !data.todo.completed,
    value: "no"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Update")));
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\todo\index.tsx
var todo_exports2 = {};
__export(todo_exports2, {
  default: () => TodoRoute,
  links: () => links6,
  loader: () => loader5
});
init_react();
var import_remix10 = __toModule(require_remix());

// app/styles/todo/todolist.css
var todolist_default = "/build/_assets/todolist-WV7IR4ZJ.css";

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\todo\index.tsx
var links6 = () => {
  return [{ rel: "stylesheet", href: todolist_default }];
};
var loader5 = async ({ request }) => {
  const userId = await getUserId(request);
  const data = {
    todoList: await db.todo.findMany({
      where: { userid: userId },
      select: { id: true, name: true, completed: true }
    })
  };
  return data;
};
function TodoRoute() {
  const data = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("ul", null, data.todoList.length > 0 ? data.todoList.map((todo) => /* @__PURE__ */ React.createElement("li", {
    key: todo.id,
    className: todo.completed ? "completed" : ""
  }, /* @__PURE__ */ React.createElement("h3", null, todo.name), /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: todo.id
  }, "Edit"))) : /* @__PURE__ */ React.createElement("h3", null, "No todo items")));
}

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\todo\new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action5,
  default: () => NewTodo,
  links: () => links7
});
init_react();
var import_remix11 = __toModule(require_remix());
var links7 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
var badRequest3 = (data) => {
  return (0, import_remix11.json)(data, { status: 400 });
};
var action5 = async ({ request }) => {
  const userId = await getUserId(request);
  const form = await request.formData();
  const todoName = form.get("name");
  if (typeof todoName !== "string") {
    return badRequest3({ formError: "Invalid todo" });
  }
  if (todoName.length < 3) {
    return badRequest3({ name: todoName, formError: "Todo too short" });
  }
  const todo = await db.todo.create({
    data: { userid: userId, name: todoName, completed: false }
  });
  return (0, import_remix11.redirect)(`/todo/${todo.id}`);
};
function NewTodo() {
  const actionData = (0, import_remix11.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-fields"
  }, /* @__PURE__ */ React.createElement("input", {
    defaultValue: actionData == null ? void 0 : actionData.name,
    type: "text",
    name: "name",
    placeholder: "Enter new todo"
  }), /* @__PURE__ */ React.createElement("span", null, actionData == null ? void 0 : actionData.formError), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Add"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "dd5aedef", "entry": { "module": "/build/entry.client-BG2CX47R.js", "imports": ["/build/_shared/chunk-GMDJKDXB.js", "/build/_shared/chunk-YZVLR6ER.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-KREO6EYO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-NAY32XM7.js", "imports": ["/build/_shared/chunk-47WS36EG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-SPGC72AW.js", "imports": ["/build/_shared/chunk-47WS36EG.js", "/build/_shared/chunk-5W7FU2FW.js", "/build/_shared/chunk-TUDQCPYG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-5Z7DK6QS.js", "imports": ["/build/_shared/chunk-5W7FU2FW.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo": { "id": "routes/todo", "parentId": "root", "path": "todo", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo-OEZQKMVX.js", "imports": ["/build/_shared/chunk-5W7FU2FW.js", "/build/_shared/chunk-TUDQCPYG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/$todoId": { "id": "routes/todo/$todoId", "parentId": "routes/todo", "path": ":todoId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/$todoId-X4ZBQ4CU.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/index": { "id": "routes/todo/index", "parentId": "routes/todo", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/todo/index-SQDEEDKR.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/new": { "id": "routes/todo/new", "parentId": "routes/todo", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/new-MBMULLFC.js", "imports": ["/build/_shared/chunk-47WS36EG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-DD5AEDEF.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/todo": {
    id: "routes/todo",
    parentId: "root",
    path: "todo",
    index: void 0,
    caseSensitive: void 0,
    module: todo_exports
  },
  "routes/todo/$todoId": {
    id: "routes/todo/$todoId",
    parentId: "routes/todo",
    path: ":todoId",
    index: void 0,
    caseSensitive: void 0,
    module: todoId_exports
  },
  "routes/todo/index": {
    id: "routes/todo/index",
    parentId: "routes/todo",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: todo_exports2
  },
  "routes/todo/new": {
    id: "routes/todo/new",
    parentId: "routes/todo",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXDkxNzU0XFxEZXNrdG9wXFxUb2RvLVJlXFxhcHBcXHJvdXRlc1xcbG9nb3V0LnRzeCIsICIuLi8uLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZTpDOlxcVXNlcnNcXDkxNzU0XFxEZXNrdG9wXFxUb2RvLVJlXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcOTE3NTRcXERlc2t0b3BcXFRvZG8tUmVcXGFwcFxccm91dGVzXFxsb2dpbi50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb3V0ZXNcXHRvZG8udHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb3V0ZXNcXHRvZG9cXCR0b2RvSWQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcOTE3NTRcXERlc2t0b3BcXFRvZG8tUmVcXGFwcFxccm91dGVzXFx0b2RvXFxpbmRleC50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb3V0ZXNcXHRvZG9cXG5ldy50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcOTE3NTRcXFxcRGVza3RvcFxcXFxUb2RvLVJlXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXDkxNzU0XFxcXERlc2t0b3BcXFxcVG9kby1SZVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcOTE3NTRcXFxcRGVza3RvcFxcXFxUb2RvLVJlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcdG9kby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcOTE3NTRcXFxcRGVza3RvcFxcXFxUb2RvLVJlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcdG9kb1xcXFwkdG9kb0lkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFx0b2RvXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFx0b2RvXFxcXG5ldy50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy90b2RvXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRvZG9cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8vJHRvZG9JZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdG9kby8kdG9kb0lkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvdG9kb1wiLFxuICAgICAgcGF0aDogXCI6dG9kb0lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy90b2RvL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvdG9kb1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8vbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3RvZG9cIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGl2ZVJlbG9hZCwgT3V0bGV0LCBMaW5rcywgTWV0YSwgU2NyaXB0cyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHRhaWx3aW5kVVJMIGZyb20gXCJ+L3RhaWx3aW5kLmNzc1wiO1xyXG4vL2ltcG9ydCBzdHlsZVVybCBmcm9tIFwifi9zdHlsZXMvYXBwLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiB0YWlsd2luZFVSTCB9XTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJnb29nbGUtc2lnbmluLWNsaWVudF9pZFwiXHJcbiAgICAgICAgICBjb250ZW50PVwiNjAwOTMwMzg5NDU0LXNqcTIyOW91bTdhcjk5anF0OW5yZXV0cTRyNGo4YmJrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICAgICA+PC9tZXRhPlxyXG4gICAgICAgIDx0aXRsZT5SZW1peCBKUyA8L3RpdGxlPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgcmV0dXJuIGxvZ291dChyZXF1ZXN0KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcclxuICByZXR1cm4gcmVkaXJlY3QoXCIvdG9kb1wiKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nb3V0Um91dGUoKSB7fVxyXG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xyXG50eXBlIExvZ2luRm9ybSA9IHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcblxyXG4vL2NvbnN0IGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XHJcbiAgLy9jb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3QoeyB3aGVyZTogeyB1c2VybmFtZSB9IH0pO1xyXG4gIC8vYXdhaXQgZGIuJGNvbm5lY3QoKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3QoeyB3aGVyZTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSB9KTtcclxuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcclxuICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIHsgaWQ6IHVzZXIuaWQsIHVzZXJuYW1lIH07XHJcbn1cclxuY29uc3Qgc2Vzc2lvblNlY3JldCA9IFwic29tZS1zZWNyZXRcIjtcclxuaWYgKCFzZXNzaW9uU2VjcmV0KSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiU2Vzc2lvbiBzZWNyZXQgbXVzdCBiZSBzZXRcIik7XHJcbn1cclxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcclxuICBjb29raWU6IHtcclxuICAgIG5hbWU6IFwiQ2xpZW50X1Nlc3Npb25cIixcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxyXG4gICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxyXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXHJcbiAgICBodHRwT25seTogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xyXG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XHJcbiAgLy9hd2FpdCBkYi4kY29ubmVjdCgpO1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJuYW1lLCBwYXNzd29yZEhhc2ggfSxcclxuICB9KTtcclxuICByZXR1cm4geyBpZDogdXNlci5pZCwgdXNlcm5hbWUgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5XaXRoR29vZ2xlKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XHJcbiAgICB3aGVyZTogeyB1c2VybmFtZTogdXNlcm5hbWUgfSxcclxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSB9LFxyXG4gIH0pO1xyXG4gIGlmICghdXNlcikge1xyXG4gICAgY29uc3QgcGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuICAgIGNvbnN0IG5ld3VzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZEhhc2g6IHBhc3N3b3JkSGFzaCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBpZDogbmV3dXNlci5pZCB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4geyBpZDogdXNlci5pZCB9O1xyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcclxuICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XHJcbiAgICBoZWFkZXJzOiB7IFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbikgfSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIHJldHVybiBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcclxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcclxuICByZXR1cm4gdXNlcklkO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgcmVkaXJlY3RUbzogc3RyaW5nID0gbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWVcclxuKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpO1xyXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJlZGlyZWN0VG9cIiwgcmVkaXJlY3RUb11dKTtcclxuICAgIHRocm93IHJlZGlyZWN0KGAvbG9naW4/JHtzZWFyY2hQYXJhbXN9YCk7XHJcbiAgfVxyXG4gIHJldHVybiB1c2VySWQ7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgLy9hd2FpdCBkYi4kY29ubmVjdCgpO1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgc2VsZWN0OiB7IGlkOiB0cnVlLCB1c2VybmFtZTogdHJ1ZSB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcclxuICByZXR1cm4gcmVkaXJlY3QoXCIvbG9naW5cIiwge1xyXG4gICAgaGVhZGVyczogeyBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSB9LFxyXG4gIH0pO1xyXG59XHJcbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmxldCBkYjogUHJpc21hQ2xpZW50O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICBkYi4kY29ubmVjdCgpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcclxuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcclxuICB9XHJcbiAgZGIgPSBnbG9iYWwuX19kYjtcclxufVxyXG5cclxuZXhwb3J0IHsgZGIgfTtcclxuIiwgImltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2xvZ2luLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuLy9jbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteS0xLzJcdC10cmFuc2xhdGUteC0xLzJcdFwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lciBjb250ZW50XCI+XG4gICAgICA8aDE+TG9naW4gdG8gYWRkIHlvdXIgVG9kbzwvaDE+XG4gICAgICA8Zm9ybSBtZXRob2Q9XCJnZXRcIiBhY3Rpb249XCIvbG9naW5cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBMb2dpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uLCBMaW5rc0Z1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxuICBBY3Rpb25GdW5jdGlvbixcclxuICB1c2VBY3Rpb25EYXRhLFxyXG4gIExvYWRlckZ1bmN0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCBzdHlsZVVybCBmcm9tIFwifi9zdHlsZXMvbG9naW4uY3NzXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlVXNlclNlc3Npb24sXHJcbiAgbG9naW4sXHJcbiAgZ2V0VXNlcklkLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGxvZ2luV2l0aEdvb2dsZSxcclxufSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZVVybCB9XTtcclxufTtcclxudHlwZSBBY3Rpb25EYXRhID0ge1xyXG4gIGZvcm1FcnJvcj86IHN0cmluZztcclxuICBuYW1lRXJyb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcGFzc3dvcmRFcnJvcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBmaWVsZHM/OiB7XHJcbiAgICBsb2dpblR5cGU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XHJcbiAgaWYgKHVzZXJJZCkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL3RvZG9cIik7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGZpZWxkczoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGxvZ2luVHlwZTogc3RyaW5nO1xyXG4gICAgcmVkaXJlY3RUbzogc3RyaW5nO1xyXG4gIH0pID0+IHtcclxuICAgIHN3aXRjaCAoZmllbGRzLmxvZ2luVHlwZSkge1xyXG4gICAgICBjYXNlIFwibG9naW5cIjoge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7XHJcbiAgICAgICAgICB1c2VybmFtZTogZmllbGRzLm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogZmllbGRzLnBhc3N3b3JkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdXNlcilcclxuICAgICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRzLCBmb3JtRXJyb3I6IFwiV3JvbmcgdXNlcm5hbWUvcGFzc293cmRcIiB9KTtcclxuICAgICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgZmllbGRzLnJlZGlyZWN0VG8pO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJyZWdpc3RlclwiOiB7XHJcbiAgICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7IHVzZXJuYW1lOiBmaWVsZHMubmFtZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh1c2VyRXhpc3RzKSB7XHJcbiAgICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkcywgZm9ybUVycm9yOiBcIlVzZXJuYW1lIGFscmVhZHkgZXhpc3RzXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZWdpc3Rlcih7XHJcbiAgICAgICAgICB1c2VybmFtZTogZmllbGRzLm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogZmllbGRzLnBhc3N3b3JkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYFNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgdXNlci5gLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCBmaWVsZHMucmVkaXJlY3RUbyk7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcclxuICAgICAgICAgIGZpZWxkcyxcclxuICAgICAgICAgIGZvcm1FcnJvcjogXCJMb2dpbiB0eXBlIGludmFsaWRcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgQ0xJRU5UX0lEID1cclxuICAgIFwiNjAwOTMwMzg5NDU0LXNqcTIyOW91bTdhcjk5anF0OW5yZXV0cTRyNGo4YmJrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCI7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCBjcmVkZW50aWFsID0gZm9ybS5nZXQoXCJjcmVkZW50aWFsXCIpO1xyXG4gIGNvbnN0IGxvZ2luVHlwZSA9IGZvcm0uZ2V0KFwibG9naW5UeXBlXCIpO1xyXG4gIGNvbnN0IG5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcclxuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIHx8IFwiL3RvZG9cIjtcclxuICAvL0NoZWNraW5nIGZvciBnb29nbGUgc2lnbiBpblxyXG4gIGlmIChjcmVkZW50aWFsICE9IG51bGwpIHtcclxuICAgIGlmICh0eXBlb2YgY3JlZGVudGlhbCAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcmVkaXJlY3RUbyAhPT0gXCJzdHJpbmdcIilcclxuICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmb3JtRXJyb3I6IFwiR29vZ2xlIHNpZ24gaW4gVHlwZUVycm9yXCIgfSk7XHJcbiAgICBjb25zdCBkZWNvZGVkOiBhbnkgPSBqd3REZWNvZGUoY3JlZGVudGlhbCk7XHJcbiAgICBjb25zb2xlLmxvZyhkZWNvZGVkKTtcclxuICAgIGlmIChcclxuICAgICAgKGRlY29kZWQuaXNzID09PSBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbVwiIHx8XHJcbiAgICAgICAgZGVjb2RlZC5pc3MgPT09IFwiYWNjb3VudHMuZ29vZ2xlLmNvbVwiKSAmJlxyXG4gICAgICBkZWNvZGVkLmF1ZCA9PT0gQ0xJRU5UX0lEXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luV2l0aEdvb2dsZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IGRlY29kZWQuc3ViICsgZGVjb2RlZC5uYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBkZWNvZGVkLnN1YixcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghdXNlcilcclxuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZvcm1FcnJvcjogXCJHb29nbGUgc2lnbiBpbiBmYWlsZWQgaW4gTG9naW5cIiB9KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIHJlZGlyZWN0VG8pO1xyXG4gICAgfSBlbHNlIHJldHVybiBiYWRSZXF1ZXN0KHsgZm9ybUVycm9yOiBcIkdvb2dsZSBzaWduIGluIGF1dGggZmFpbGVkXCIgfSk7XHJcbiAgfVxyXG4gIC8vQ2hlY2tpbmcgZm9yIEZvcm0gc2lnblxyXG4gIC8vRmlsdGVyIDogMSBUeXBlc2FmZXR5XHJcbiAgaWYgKFxyXG4gICAgdHlwZW9mIGxvZ2luVHlwZSAhPT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcclxuICAgIHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgdHlwZW9mIHJlZGlyZWN0VG8gIT09IFwic3RyaW5nXCJcclxuICApIHtcclxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZm9ybUVycm9yOiBcIkZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHlcIiB9KTtcclxuICB9XHJcbiAgLy9GaWx0ZXIgOiAyIEludmFsaWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkXHJcbiAgaWYgKG5hbWUubGVuZ3RoIDwgMykgcmV0dXJuIGJhZFJlcXVlc3QoeyBuYW1lRXJyb3I6IFwiSW52YWxpZCBuYW1lXCIgfSk7XHJcbiAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYpXHJcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IHBhc3N3b3JkRXJyb3I6IFwiSW52YWxpZCBwYXNzd29yZFwiIH0pO1xyXG4gIGNvbnN0IGZpZWxkcyA9IHsgbmFtZSwgcGFzc3dvcmQsIGxvZ2luVHlwZSwgcmVkaXJlY3RUbyB9O1xyXG4gIC8vTG9naW4gb3IgUmVnaXN0ZXJcclxuICByZXR1cm4gaGFuZGxlTG9naW4oZmllbGRzKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vZ3NpL2NsaWVudFwiIGFzeW5jIGRlZmVyPjwvc2NyaXB0PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJnX2lkX29ubG9hZFwiXHJcbiAgICAgICAgZGF0YS1jbGllbnRfaWQ9XCI2MDA5MzAzODk0NTQtc2pxMjI5b3VtN2FyOTlqcXQ5bnJldXRxNHI0ajhiYmsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgIGRhdGEtbG9naW5fdXJpPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luXCJcclxuICAgICAgICBkYXRhLWF1dG9fcHJvbXB0PVwiZmFsc2VcIlxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJnX2lkX3NpZ25pblwiXHJcbiAgICAgICAgZGF0YS10eXBlPVwic3RhbmRhcmRcIlxyXG4gICAgICAgIGRhdGEtc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBkYXRhLXRoZW1lPVwib3V0bGluZVwiXHJcbiAgICAgICAgZGF0YS10ZXh0PVwic2lnbl9pbl93aXRoXCJcclxuICAgICAgICBkYXRhLXNoYXBlPVwicmVjdGFuZ3VsYXJcIlxyXG4gICAgICAgIGRhdGEtbG9nb19hbGlnbm1lbnQ9XCJsZWZ0XCJcclxuICAgICAgPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3IgJiYgPGgyPnthY3Rpb25EYXRhPy5mb3JtRXJyb3J9PC9oMj59XHJcbiAgICAgICAgICB7YWN0aW9uRGF0YT8ubmFtZUVycm9yICYmIDxoMj57YWN0aW9uRGF0YT8ubmFtZUVycm9yfTwvaDI+fVxyXG4gICAgICAgICAge2FjdGlvbkRhdGE/LnBhc3N3b3JkRXJyb3IgJiYgPGgyPnthY3Rpb25EYXRhPy5wYXNzd29yZEVycm9yfTwvaDI+fVxyXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpID8/IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibG9naW5UeXBlXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxvZ2luVHlwZVwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZHNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCwgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9IZWFkZXIuY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgc2VsZWN0OiB7IGlkOiB0cnVlLCB1c2VybmFtZTogdHJ1ZSB9LFxyXG4gIH0pO1xyXG4gIGlmICh1c2VyPy51c2VybmFtZSAmJiB1c2VyPy51c2VybmFtZS5sZW5ndGggPiAyMSlcclxuICAgIHJldHVybiBbLi4udXNlci51c2VybmFtZV0uc2xpY2UoMjEpLmpvaW4oXCJcIik7XHJcbiAgcmV0dXJuIHVzZXI/LnVzZXJuYW1lO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8oKSB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgdXNlcj17dXNlcm5hbWV9IC8+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICB1c2VyOiBzdHJpbmc7XHJcbn1cclxuY29uc3QgSGVhZGVyID0gKHsgdXNlciB9OiBwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCI+XHJcbiAgICAgICAgPGgyPldlbGNvbWUge3VzZXJ9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL3RvZG9cIj5Ub2RvIExpc3Q8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvdG9kby9uZXdcIj5BZGQgbmV3IFRvZG88L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL3RvZG8vdG9kb0l0ZW0uY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xyXG59O1xyXG50eXBlIEFjdGlvbkRhdGEgPSB7XHJcbiAgZXJyPzogc3RyaW5nO1xyXG4gIHN0YXR1cz86IGJvb2xlYW47XHJcbn07XHJcbnR5cGUgTG9hZGVyRGF0YSA9IHtcclxuICB0b2RvOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgY29tcGxldGVkOiBib29sZWFuOyBjcmVhdGVkQXQ/OiBhbnkgfTtcclxufTtcclxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBkYi50b2RvLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogcGFyYW1zLnRvZG9JZCB9IH0pO1xyXG4gIGlmICghdG9kbykgdGhyb3cgbmV3IEVycm9yKFwiVG9kbyBpdGVtIG5vdCBmb3VuZFwiKTtcclxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0geyB0b2RvIH07XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCBpZCA9IGZvcm0uZ2V0KFwiaWRcIik7XHJcbiAgY29uc3QgdXBkYXRlZFN0YXR1cyA9IGZvcm0uZ2V0KFwic3RhdHVzXCIpO1xyXG4gIGlmICh0eXBlb2YgaWQgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHVwZGF0ZWRTdGF0dXMgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZXJyOiBcIldyb25nIHR5cGVcIiB9KTtcclxuICB9XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZGIudG9kby51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IGlkIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGNvbXBsZXRlZDogdXBkYXRlZFN0YXR1cyA9PT0gXCJ5ZXNcIiA/IHRydWUgOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9JdGVtKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMz57ZGF0YS50b2RvLm5hbWV9PC9oMz5cclxuICAgICAge2RhdGEudG9kby5jb21wbGV0ZWQgPyAoXHJcbiAgICAgICAgPHA+U3RhdHVzIDogQ29tcGxldGVkITwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5TdGF0dXMgOiBOb3QgQ29tcGxldGVkITwvcD5cclxuICAgICAgKX1cclxuICAgICAgPHA+Q3JlYXRlZCBBdDoge2RhdGEudG9kby5jcmVhdGVkQXR9PC9wPlxyXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPGgzPkVkaXQgc3RhdHVzPC9oMz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPXtkYXRhLnRvZG8uaWR9IG5hbWU9XCJpZFwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17ZGF0YS50b2RvLm5hbWV9IG5hbWU9XCJuYW1lXCIgLz5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICBDb21wbGV0ZWRcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2RhdGEudG9kby5jb21wbGV0ZWR9XHJcbiAgICAgICAgICAgIHZhbHVlPVwieWVzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICBOb3QgQ29tcGxldGVkXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXshZGF0YS50b2RvLmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgdmFsdWU9XCJub1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XHJcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL3RvZG8vdG9kb2xpc3QuY3NzXCI7XHJcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXNVcmwgfV07XHJcbn07XHJcbnR5cGUgTG9hZGVyRGF0YSA9IHtcclxuICB0b2RvTGlzdDogQXJyYXk8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGNvbXBsZXRlZDogYm9vbGVhbiB9PjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xyXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XHJcbiAgICB0b2RvTGlzdDogYXdhaXQgZGIudG9kby5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJpZDogdXNlcklkIH0sXHJcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgY29tcGxldGVkOiB0cnVlIH0sXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvUm91dGUoKSB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtkYXRhLnRvZG9MaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBkYXRhLnRvZG9MaXN0Lm1hcCgodG9kbykgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfSBjbGFzc05hbWU9e3RvZG8uY29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgIDxoMz57dG9kby5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89e3RvZG8uaWR9PkVkaXQ8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aDM+Tm8gdG9kbyBpdGVtczwvaDM+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvbG9naW4uY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xyXG59O1xyXG50eXBlIEFjdGlvbkRhdGEgPSB7XHJcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbn07XHJcbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ge1xyXG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IHRvZG9OYW1lID0gZm9ybS5nZXQoXCJuYW1lXCIpO1xyXG4gIGlmICh0eXBlb2YgdG9kb05hbWUgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZm9ybUVycm9yOiBcIkludmFsaWQgdG9kb1wiIH0pO1xyXG4gIH1cclxuICBpZiAodG9kb05hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBuYW1lOiB0b2RvTmFtZSwgZm9ybUVycm9yOiBcIlRvZG8gdG9vIHNob3J0XCIgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBkYi50b2RvLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7IHVzZXJpZDogdXNlcklkLCBuYW1lOiB0b2RvTmFtZSwgY29tcGxldGVkOiBmYWxzZSB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiByZWRpcmVjdChgL3RvZG8vJHt0b2RvLmlkfWApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdUb2RvKCkge1xyXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkc1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8ubmFtZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHRvZG9cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPnthY3Rpb25EYXRhPy5mb3JtRXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2RkNWFlZGVmJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1CRzJDWDQ3Ui5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR01ESktEWEIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZWlZMUjZFUi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtS1JFTzZFWU8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1OQVkzMlhNNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNDdXUzM2RUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLVNQR0M3MkFXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00N1dTMzZFRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVXN0ZVMkZXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVEUUNQWUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtNVo3REs2UVMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVXN0ZVMkZXLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kbyc6eydpZCc6J3JvdXRlcy90b2RvJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RvZG8nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG9kby1PRVpRS01WWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVc3RlUyRlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UVURRQ1BZRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RvZG8vJHRvZG9JZCc6eydpZCc6J3JvdXRlcy90b2RvLyR0b2RvSWQnLCdwYXJlbnRJZCc6J3JvdXRlcy90b2RvJywncGF0aCc6Jzp0b2RvSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG9kby8kdG9kb0lkLVg0WkJRNENVLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RvZG8vaW5kZXgnOnsnaWQnOidyb3V0ZXMvdG9kby9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3RvZG8nLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG9kby9pbmRleC1TUURFRURLUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kby9uZXcnOnsnaWQnOidyb3V0ZXMvdG9kby9uZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy90b2RvJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvL25ldy1NQk1VTExGQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNDdXUzM2RUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LURENUFFREVGLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FB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
