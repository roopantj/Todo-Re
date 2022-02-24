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

// app/styles/index.css
var styles_default = "/build/_assets/index-AC3DKB53.css";

// route:C:\Users\91754\Desktop\Todo-Re\app\root.tsx
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
  }), /* @__PURE__ */ React.createElement("title", null, "Remix JS"), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
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
var links2 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function HomePage() {
  return /* @__PURE__ */ React.createElement("h1", null, "Homepage");
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

// app/styles/login.css
var login_default = "/build/_assets/login-MQ6LH7G2.css";

// route:C:\Users\91754\Desktop\Todo-Re\app\routes\login.tsx
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
  const form = await request.formData();
  const loginType = form.get("loginType");
  const name = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/todo";
  if (typeof loginType !== "string" || typeof name !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return badRequest({ formError: "Form not submitted correctly" });
  }
  if (name.length < 3)
    return badRequest({ nameError: "Invalid name" });
  if (password.length < 6)
    return badRequest({ passwordError: "Invalid password" });
  const fields = { name, password, loginType };
  switch (loginType) {
    case "login": {
      const user = await login({ username: name, password });
      console.log({ user });
      if (!user)
        return badRequest({ fields, formError: "Wrong username/passowrd" });
      return createUserSession(user.id, redirectTo);
    }
    case "register": {
      const userExists = await db.user.findFirst({ where: { username: name } });
      if (userExists) {
        return badRequest({ fields, formError: "Username already exists" });
      }
      const user = await register({ username: name, password });
      if (!user) {
        return badRequest({
          fields,
          formError: `Something went wrong trying to create a new user.`
        });
      }
      return createUserSession(user.id, redirectTo);
    }
    default: {
      return badRequest({
        fields,
        formError: "Login type invalid"
      });
    }
  }
};
function Login() {
  var _a, _b;
  const actionData = (0, import_remix6.useActionData)();
  const [searchParams] = (0, import_remix6.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
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
  }), " Register")), /* @__PURE__ */ React.createElement("div", {
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
  }, "Submit")))));
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
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/todo"
  }, "Todo List"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/todo/new"
  }, "Add new Todo"), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout"))));
};
var Header_default = Header;

// app/styles/Header.css
var Header_default2 = "/build/_assets/Header-BJDNNE2G.css";

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
  return user;
};
var action3 = async ({ request }) => {
  return logout(request);
};
function Todo() {
  const user = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, {
    user: user.username
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
var assets_manifest_default = { "version": "ad520ca3", "entry": { "module": "/build/entry.client-XTL2TAA5.js", "imports": ["/build/_shared/chunk-XPZ6P5TY.js", "/build/_shared/chunk-YZVLR6ER.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-A64V57KB.js", "imports": ["/build/_shared/chunk-QHBQ2JC6.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EPSKBSOP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-B2WLCNNW.js", "imports": ["/build/_shared/chunk-47WS36EG.js", "/build/_shared/chunk-5W7FU2FW.js", "/build/_shared/chunk-TUDQCPYG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-CBZMTRPJ.js", "imports": ["/build/_shared/chunk-5W7FU2FW.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo": { "id": "routes/todo", "parentId": "root", "path": "todo", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo-66G5S3H7.js", "imports": ["/build/_shared/chunk-5W7FU2FW.js", "/build/_shared/chunk-TUDQCPYG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/$todoId": { "id": "routes/todo/$todoId", "parentId": "routes/todo", "path": ":todoId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/$todoId-DCM2EMLZ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/index": { "id": "routes/todo/index", "parentId": "routes/todo", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/todo/index-ECGJ3HAT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/new": { "id": "routes/todo/new", "parentId": "routes/todo", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/new-XPTULICD.js", "imports": ["/build/_shared/chunk-47WS36EG.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-AD520CA3.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXDkxNzU0XFxEZXNrdG9wXFxUb2RvLVJlXFxhcHBcXHJvdXRlc1xcbG9nb3V0LnRzeCIsICIuLi8uLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZTpDOlxcVXNlcnNcXDkxNzU0XFxEZXNrdG9wXFxUb2RvLVJlXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcOTE3NTRcXERlc2t0b3BcXFRvZG8tUmVcXGFwcFxccm91dGVzXFxsb2dpbi50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb3V0ZXNcXHRvZG8udHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb3V0ZXNcXHRvZG9cXCR0b2RvSWQudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcOTE3NTRcXERlc2t0b3BcXFRvZG8tUmVcXGFwcFxccm91dGVzXFx0b2RvXFxpbmRleC50c3giLCAicm91dGU6QzpcXFVzZXJzXFw5MTc1NFxcRGVza3RvcFxcVG9kby1SZVxcYXBwXFxyb3V0ZXNcXHRvZG9cXG5ldy50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcOTE3NTRcXFxcRGVza3RvcFxcXFxUb2RvLVJlXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXDkxNzU0XFxcXERlc2t0b3BcXFxcVG9kby1SZVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcOTE3NTRcXFxcRGVza3RvcFxcXFxUb2RvLVJlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcdG9kby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcOTE3NTRcXFxcRGVza3RvcFxcXFxUb2RvLVJlXFxcXGFwcFxcXFxyb3V0ZXNcXFxcdG9kb1xcXFwkdG9kb0lkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFx0b2RvXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTc1NFxcXFxEZXNrdG9wXFxcXFRvZG8tUmVcXFxcYXBwXFxcXHJvdXRlc1xcXFx0b2RvXFxcXG5ldy50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy90b2RvXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRvZG9cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8vJHRvZG9JZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdG9kby8kdG9kb0lkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvdG9kb1wiLFxuICAgICAgcGF0aDogXCI6dG9kb0lkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy90b2RvL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvdG9kb1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8vbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3RvZG9cIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGl2ZVJlbG9hZCwgT3V0bGV0LCBMaW5rcyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVVcmwgZnJvbSBcIn4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZVVybCB9XTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8dGl0bGU+UmVtaXggSlM8L3RpdGxlPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcclxuICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIHJldHVybiByZWRpcmVjdChcIi90b2RvXCIpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvdXRSb3V0ZSgpIHt9XHJcbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XHJcbnR5cGUgTG9naW5Gb3JtID0ge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuLy9jb25zdCBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xyXG4gIC8vY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHsgd2hlcmU6IHsgdXNlcm5hbWUgfSB9KTtcclxuICAvL2F3YWl0IGRiLiRjb25uZWN0KCk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHsgd2hlcmU6IHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0gfSk7XHJcbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XHJcbiAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiB7IGlkOiB1c2VyLmlkLCB1c2VybmFtZSB9O1xyXG59XHJcbmNvbnN0IHNlc3Npb25TZWNyZXQgPSBcInNvbWUtc2VjcmV0XCI7XHJcbmlmICghc2Vzc2lvblNlY3JldCkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIlNlc3Npb24gc2VjcmV0IG11c3QgYmUgc2V0XCIpO1xyXG59XHJcbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XHJcbiAgY29va2llOiB7XHJcbiAgICBuYW1lOiBcIkNsaWVudF9TZXNzaW9uXCIsXHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIHNlY3JldHM6IFtzZXNzaW9uU2VjcmV0XSxcclxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcclxuICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xyXG4gIC8vYXdhaXQgZGIuJGNvbm5lY3QoKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VybmFtZSwgcGFzc3dvcmRIYXNoIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgaWQ6IHVzZXIuaWQsIHVzZXJuYW1lIH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJJZDogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XHJcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbywge1xyXG4gICAgaGVhZGVyczogeyBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XHJcbiAgcmV0dXJuIHVzZXJJZDtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVVzZXJJZChcclxuICByZXF1ZXN0OiBSZXF1ZXN0LFxyXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXHJcbikge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcclxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcclxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSk7XHJcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xyXG4gIH1cclxuICByZXR1cm4gdXNlcklkO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWQocmVxdWVzdCk7XHJcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIC8vYXdhaXQgZGIuJGNvbm5lY3QoKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdXNlcm5hbWU6IHRydWUgfSxcclxuICB9KTtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIsIHtcclxuICAgIGhlYWRlcnM6IHsgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbikgfSxcclxuICB9KTtcclxufVxyXG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgZGIuJGNvbm5lY3QoKTtcclxufSBlbHNlIHtcclxuICBpZiAoIWdsb2JhbC5fX2RiKSB7XHJcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KCk7XHJcbiAgfVxyXG4gIGRiID0gZ2xvYmFsLl9fZGI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRiIH07XHJcbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2luZGV4LmNzc1wiO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICByZXR1cm4gPGgxPkhvbWVwYWdlPC9oMT47XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTGlua3NGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHtcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgdXNlQWN0aW9uRGF0YSxcclxuICBMb2FkZXJGdW5jdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHN0eWxlVXJsIGZyb20gXCJ+L3N0eWxlcy9sb2dpbi5jc3NcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVVc2VyU2Vzc2lvbixcclxuICBsb2dpbixcclxuICBnZXRVc2VySWQsXHJcbiAgcmVnaXN0ZXIsXHJcbn0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVVcmwgfV07XHJcbn07XHJcbnR5cGUgQWN0aW9uRGF0YSA9IHtcclxuICBmb3JtRXJyb3I/OiBzdHJpbmc7XHJcbiAgbmFtZUVycm9yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHBhc3N3b3JkRXJyb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgZmllbGRzPzoge1xyXG4gICAgbG9naW5UeXBlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ge1xyXG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xyXG4gIGlmICh1c2VySWQpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi90b2RvXCIpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IGxvZ2luVHlwZSA9IGZvcm0uZ2V0KFwibG9naW5UeXBlXCIpO1xyXG4gIGNvbnN0IG5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcclxuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIHx8IFwiL3RvZG9cIjtcclxuICAvL0ZpbHRlciA6IDEgVHlwZXNhZmV0eVxyXG4gIGlmIChcclxuICAgIHR5cGVvZiBsb2dpblR5cGUgIT09IFwic3RyaW5nXCIgfHxcclxuICAgIHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8XHJcbiAgICB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHxcclxuICAgIHR5cGVvZiByZWRpcmVjdFRvICE9PSBcInN0cmluZ1wiXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZvcm1FcnJvcjogXCJGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5XCIgfSk7XHJcbiAgfVxyXG4gIC8vRmlsdGVyIDogMiBJbnZhbGlkIHVzZXJuYW1lIGFuZCBwYXNzd29yZFxyXG4gIGlmIChuYW1lLmxlbmd0aCA8IDMpIHJldHVybiBiYWRSZXF1ZXN0KHsgbmFtZUVycm9yOiBcIkludmFsaWQgbmFtZVwiIH0pO1xyXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KVxyXG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBwYXNzd29yZEVycm9yOiBcIkludmFsaWQgcGFzc3dvcmRcIiB9KTtcclxuICBjb25zdCBmaWVsZHMgPSB7IG5hbWUsIHBhc3N3b3JkLCBsb2dpblR5cGUgfTtcclxuICAvL0ZpbHRlciA6IDMgTG9naW4gb3IgUmVnaXN0ZXJcclxuICBzd2l0Y2ggKGxvZ2luVHlwZSkge1xyXG4gICAgY2FzZSBcImxvZ2luXCI6IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWU6IG5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcclxuICAgICAgY29uc29sZS5sb2coeyB1c2VyIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpXHJcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZHMsIGZvcm1FcnJvcjogXCJXcm9uZyB1c2VybmFtZS9wYXNzb3dyZFwiIH0pO1xyXG4gICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgcmVkaXJlY3RUbyk7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwicmVnaXN0ZXJcIjoge1xyXG4gICAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3QoeyB3aGVyZTogeyB1c2VybmFtZTogbmFtZSB9IH0pO1xyXG4gICAgICBpZiAodXNlckV4aXN0cykge1xyXG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRzLCBmb3JtRXJyb3I6IFwiVXNlcm5hbWUgYWxyZWFkeSBleGlzdHNcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXIoeyB1c2VybmFtZTogbmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XHJcbiAgICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgICBmb3JtRXJyb3I6IGBTb21ldGhpbmcgd2VudCB3cm9uZyB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IHVzZXIuYCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgcmVkaXJlY3RUbyk7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgZm9ybUVycm9yOiBcIkxvZ2luIHR5cGUgaW52YWxpZFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yICYmIDxoMj57YWN0aW9uRGF0YT8uZm9ybUVycm9yfTwvaDI+fVxyXG4gICAgICAgIHthY3Rpb25EYXRhPy5uYW1lRXJyb3IgJiYgPGgyPnthY3Rpb25EYXRhPy5uYW1lRXJyb3J9PC9oMj59XHJcbiAgICAgICAge2FjdGlvbkRhdGE/LnBhc3N3b3JkRXJyb3IgJiYgPGgyPnthY3Rpb25EYXRhPy5wYXNzd29yZEVycm9yfTwvaDI+fVxyXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb2dpblR5cGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxvZ2luVHlwZVwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPiBSZWdpc3RlclxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQsIGxvZ291dCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvSGVhZGVyLmNzc1wiO1xyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlc1VybCB9XTtcclxufTtcclxudHlwZSBMb2FkZXJEYXRhID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgc2VsZWN0OiB7IGlkOiB0cnVlLCB1c2VybmFtZTogdHJ1ZSB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB1c2VyO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8oKSB7XHJcbiAgY29uc3QgdXNlcjogTG9hZGVyRGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB1c2VyPXt1c2VyLnVzZXJuYW1lfSAvPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgdXNlcjogc3RyaW5nO1xyXG59XHJcbmNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfTogcHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlxyXG4gICAgICAgIDxoMj5XZWxjb21lIHt1c2VyfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICA8TGluayB0bz1cIi90b2RvXCI+VG9kbyBMaXN0PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL3RvZG8vbmV3XCI+QWRkIG5ldyBUb2RvPC9MaW5rPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy90b2RvL3RvZG9JdGVtLmNzc1wiO1xyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlc1VybCB9XTtcclxufTtcclxudHlwZSBBY3Rpb25EYXRhID0ge1xyXG4gIGVycj86IHN0cmluZztcclxuICBzdGF0dXM/OiBib29sZWFuO1xyXG59O1xyXG50eXBlIExvYWRlckRhdGEgPSB7XHJcbiAgdG9kbzogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGNvbXBsZXRlZDogYm9vbGVhbjsgY3JlYXRlZEF0PzogYW55IH07XHJcbn07XHJcbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ge1xyXG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB0b2RvID0gYXdhaXQgZGIudG9kby5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhcmFtcy50b2RvSWQgfSB9KTtcclxuICBpZiAoIXRvZG8pIHRocm93IG5ldyBFcnJvcihcIlRvZG8gaXRlbSBub3QgZm91bmRcIik7XHJcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHsgdG9kbyB9O1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgaWQgPSBmb3JtLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IHVwZGF0ZWRTdGF0dXMgPSBmb3JtLmdldChcInN0YXR1c1wiKTtcclxuICBpZiAodHlwZW9mIGlkICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB1cGRhdGVkU3RhdHVzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGVycjogXCJXcm9uZyB0eXBlXCIgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGRiLnRvZG8udXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkOiBpZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBjb21wbGV0ZWQ6IHVwZGF0ZWRTdGF0dXMgPT09IFwieWVzXCIgPyB0cnVlIDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSXRlbSgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDM+e2RhdGEudG9kby5uYW1lfTwvaDM+XHJcbiAgICAgIHtkYXRhLnRvZG8uY29tcGxldGVkID8gKFxyXG4gICAgICAgIDxwPlN0YXR1cyA6IENvbXBsZXRlZCE8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+U3RhdHVzIDogTm90IENvbXBsZXRlZCE8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxwPkNyZWF0ZWQgQXQ6IHtkYXRhLnRvZG8uY3JlYXRlZEF0fTwvcD5cclxuICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxoMz5FZGl0IHN0YXR1czwvaDM+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17ZGF0YS50b2RvLmlkfSBuYW1lPVwiaWRcIiAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e2RhdGEudG9kby5uYW1lfSBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgQ29tcGxldGVkXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtkYXRhLnRvZG8uY29tcGxldGVkfVxyXG4gICAgICAgICAgICB2YWx1ZT1cInllc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgTm90IENvbXBsZXRlZFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17IWRhdGEudG9kby5jb21wbGV0ZWR9XHJcbiAgICAgICAgICAgIHZhbHVlPVwibm9cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xyXG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xyXG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy90b2RvL3RvZG9saXN0LmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xyXG59O1xyXG50eXBlIExvYWRlckRhdGEgPSB7XHJcbiAgdG9kb0xpc3Q6IEFycmF5PHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBjb21wbGV0ZWQ6IGJvb2xlYW4gfT47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xyXG4gICAgdG9kb0xpc3Q6IGF3YWl0IGRiLnRvZG8uZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyB1c2VyaWQ6IHVzZXJJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIG5hbWU6IHRydWUsIGNvbXBsZXRlZDogdHJ1ZSB9LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1JvdXRlKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7ZGF0YS50b2RvTGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgZGF0YS50b2RvTGlzdC5tYXAoKHRvZG8pID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0gY2xhc3NOYW1lPXt0b2RvLmNvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICA8aDM+e3RvZG8ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXt0b2RvLmlkfT5FZGl0PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGgzPk5vIHRvZG8gaXRlbXM8L2gzPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgcmVkaXJlY3QsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2xvZ2luLmNzc1wiO1xyXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlc1VybCB9XTtcclxufTtcclxudHlwZSBBY3Rpb25EYXRhID0ge1xyXG4gIGZvcm1FcnJvcj86IHN0cmluZztcclxuICBuYW1lPzogc3RyaW5nO1xyXG59O1xyXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IHtcclxuICByZXR1cm4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCB0b2RvTmFtZSA9IGZvcm0uZ2V0KFwibmFtZVwiKTtcclxuICBpZiAodHlwZW9mIHRvZG9OYW1lICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZvcm1FcnJvcjogXCJJbnZhbGlkIHRvZG9cIiB9KTtcclxuICB9XHJcbiAgaWYgKHRvZG9OYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgbmFtZTogdG9kb05hbWUsIGZvcm1FcnJvcjogXCJUb2RvIHRvbyBzaG9ydFwiIH0pO1xyXG4gIH1cclxuICBjb25zdCB0b2RvID0gYXdhaXQgZGIudG9kby5jcmVhdGUoe1xyXG4gICAgZGF0YTogeyB1c2VyaWQ6IHVzZXJJZCwgbmFtZTogdG9kb05hbWUsIGNvbXBsZXRlZDogZmFsc2UgfSxcclxuICB9KTtcclxuICByZXR1cm4gcmVkaXJlY3QoYC90b2RvLyR7dG9kby5pZH1gKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3VG9kbygpIHtcclxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZHNcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/Lm5hbWV9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyB0b2RvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3Bhbj57YWN0aW9uRGF0YT8uZm9ybUVycm9yfTwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidhZDUyMGNhMycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtWFRMMlRBQTUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhQWjZQNVRZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVpWTFI2RVIuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUE2NFY1N0tCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RSEJRMkpDNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtRVBTS0JTT1AuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1CMldMQ05OVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNDdXUzM2RUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01VzdGVTJGVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRVRFFDUFlHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUNCWk1UUlBKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01VzdGVTJGVy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RvZG8nOnsnaWQnOidyb3V0ZXMvdG9kbycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0b2RvJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3RvZG8tNjZHNVMzSDcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVXN0ZVMkZXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFVEUUNQWUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90b2RvLyR0b2RvSWQnOnsnaWQnOidyb3V0ZXMvdG9kby8kdG9kb0lkJywncGFyZW50SWQnOidyb3V0ZXMvdG9kbycsJ3BhdGgnOic6dG9kb0lkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3RvZG8vJHRvZG9JZC1EQ00yRU1MWi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90b2RvL2luZGV4Jzp7J2lkJzoncm91dGVzL3RvZG8vaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy90b2RvJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3RvZG8vaW5kZXgtRUNHSjNIQVQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RvZG8vbmV3Jzp7J2lkJzoncm91dGVzL3RvZG8vbmV3JywncGFyZW50SWQnOidyb3V0ZXMvdG9kbycsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG9kby9uZXctWFBUVUxJQ0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTQ3V1MzNkVHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1BRDUyMENBMy5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDdE9sQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxQzs7O0FDQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUdiLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ2xCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMEM7Ozs7OztBQUluQyxJQUFNLFFBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUV0QixlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM5QixvQ0FBQyxTQUFELE1BQU8sYUFDUCxvQ0FBQyxxQkFBRCxRQUVGLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLDBCQUFEO0FBQUE7OztBQ2xCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF5RDs7O0FDQXpEO0FBQ0Esc0JBQW1CO0FBQ25CLG9CQUFxRDs7O0FDRnJEO0FBQUEsb0JBQTZCO0FBRTdCLElBQUk7QUFNSixJQUFJLE9BQXVDO0FBQ3pDLE9BQUssSUFBSTtBQUNULEtBQUc7QUFBQSxPQUNFO0FBQ0wsTUFBSSxDQUFDLE9BQU8sTUFBTTtBQUNoQixXQUFPLE9BQU8sSUFBSTtBQUNsQixXQUFPLEtBQUs7QUFBQTtBQUVkLE9BQUssT0FBTztBQUFBOzs7QURQZCxxQkFBNEIsRUFBRSxVQUFVLFlBQXVCO0FBRzdELFFBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxVQUFVLEVBQUUsT0FBTyxFQUFFO0FBQ2hELE1BQUksQ0FBQztBQUFNLFdBQU87QUFDbEIsUUFBTSxvQkFBb0IsTUFBTSx3QkFBTyxRQUFRLFVBQVUsS0FBSztBQUM5RCxNQUFJLENBQUM7QUFBbUIsV0FBTztBQUUvQixTQUFPLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFBQTtBQUV4QixJQUFNLGdCQUFnQjtBQUN0QixJQUFJLENBQUMsZUFBZTtBQUNsQixRQUFNLElBQUksTUFBTTtBQUFBO0FBRWxCLElBQU0sVUFBVSw4Q0FBMkI7QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixTQUFTLENBQUM7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFFBQVEsS0FBSyxLQUFLLEtBQUs7QUFBQSxJQUN2QixVQUFVO0FBQUE7QUFBQTtBQUdkLHdCQUErQixFQUFFLFVBQVUsWUFBdUI7QUFDaEUsUUFBTSxlQUFlLE1BQU0sd0JBQU8sS0FBSyxVQUFVO0FBRWpELFFBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxPQUFPO0FBQUEsSUFDaEMsTUFBTSxFQUFFLFVBQVU7QUFBQTtBQUVwQixTQUFPLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFBQTtBQUV4QixpQ0FBd0MsUUFBZ0IsWUFBb0I7QUFDMUUsUUFBTSxVQUFVLE1BQU0sUUFBUTtBQUM5QixVQUFRLElBQUksVUFBVTtBQUN0QixTQUFPLDRCQUFTLFlBQVk7QUFBQSxJQUMxQixTQUFTLEVBQUUsY0FBYyxNQUFNLFFBQVEsY0FBYztBQUFBO0FBQUE7QUFJekQsd0JBQXdCLFNBQWtCO0FBQ3hDLFNBQU8sUUFBUSxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBQUE7QUFHaEQseUJBQWdDLFNBQWtCO0FBQ2hELFFBQU0sVUFBVSxNQUFNLGVBQWU7QUFDckMsUUFBTSxTQUFTLFFBQVEsSUFBSTtBQUMzQixTQUFPO0FBQUE7QUFFVCw2QkFDRSxTQUNBLGFBQXFCLElBQUksSUFBSSxRQUFRLEtBQUssVUFDMUM7QUFDQSxRQUFNLFVBQVUsTUFBTSxlQUFlO0FBQ3JDLFFBQU0sU0FBUyxRQUFRLElBQUk7QUFDM0IsTUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXLFVBQVU7QUFDekMsVUFBTSxlQUFlLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxjQUFjO0FBQ3pELFVBQU0sNEJBQVMsVUFBVTtBQUFBO0FBRTNCLFNBQU87QUFBQTtBQWNULHNCQUE2QixTQUFrQjtBQUM3QyxRQUFNLFVBQVUsTUFBTSxlQUFlO0FBQ3JDLFNBQU8sNEJBQVMsVUFBVTtBQUFBLElBQ3hCLFNBQVMsRUFBRSxjQUFjLE1BQU0sUUFBUSxlQUFlO0FBQUE7QUFBQTs7O0FEcEZuRCxJQUFNLFNBQXlCLENBQUMsRUFBRSxjQUFjO0FBQ3JELFNBQU8sT0FBTztBQUFBO0FBRVQsSUFBTSxTQUF5QixDQUFDLEVBQUUsY0FBYztBQUNyRCxTQUFPLDRCQUFTO0FBQUE7QUFFSCx1QkFBdUI7QUFBQTs7O0FHUnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRXRCLG9CQUFvQjtBQUNqQyxTQUFPLG9DQUFDLE1BQUQsTUFBSTtBQUFBOzs7QUNOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQThDO0FBQzlDLG9CQUtPOzs7Ozs7QUFVQSxJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQVlyQyxJQUFNLGFBQWEsQ0FBQyxTQUFxQjtBQUN2QyxTQUFPLHdCQUFLLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFFdkIsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLFNBQVMsTUFBTSxVQUFVO0FBQy9CLE1BQUksUUFBUTtBQUNWLFdBQU8sNEJBQVM7QUFBQTtBQUVsQixTQUFPO0FBQUE7QUFFRixJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzNELFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsUUFBTSxZQUFZLEtBQUssSUFBSTtBQUMzQixRQUFNLE9BQU8sS0FBSyxJQUFJO0FBQ3RCLFFBQU0sV0FBVyxLQUFLLElBQUk7QUFDMUIsUUFBTSxhQUFhLEtBQUssSUFBSSxpQkFBaUI7QUFFN0MsTUFDRSxPQUFPLGNBQWMsWUFDckIsT0FBTyxTQUFTLFlBQ2hCLE9BQU8sYUFBYSxZQUNwQixPQUFPLGVBQWUsVUFDdEI7QUFDQSxXQUFPLFdBQVcsRUFBRSxXQUFXO0FBQUE7QUFHakMsTUFBSSxLQUFLLFNBQVM7QUFBRyxXQUFPLFdBQVcsRUFBRSxXQUFXO0FBQ3BELE1BQUksU0FBUyxTQUFTO0FBQ3BCLFdBQU8sV0FBVyxFQUFFLGVBQWU7QUFDckMsUUFBTSxTQUFTLEVBQUUsTUFBTSxVQUFVO0FBRWpDLFVBQVE7QUFBQSxTQUNELFNBQVM7QUFDWixZQUFNLE9BQU8sTUFBTSxNQUFNLEVBQUUsVUFBVSxNQUFNO0FBQzNDLGNBQVEsSUFBSSxFQUFFO0FBQ2QsVUFBSSxDQUFDO0FBQ0gsZUFBTyxXQUFXLEVBQUUsUUFBUSxXQUFXO0FBQ3pDLGFBQU8sa0JBQWtCLEtBQUssSUFBSTtBQUFBO0FBQUEsU0FFL0IsWUFBWTtBQUNmLFlBQU0sYUFBYSxNQUFNLEdBQUcsS0FBSyxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVU7QUFDaEUsVUFBSSxZQUFZO0FBQ2QsZUFBTyxXQUFXLEVBQUUsUUFBUSxXQUFXO0FBQUE7QUFFekMsWUFBTSxPQUFPLE1BQU0sU0FBUyxFQUFFLFVBQVUsTUFBTTtBQUM5QyxVQUFJLENBQUMsTUFBTTtBQUNULGVBQU8sV0FBVztBQUFBLFVBQ2hCO0FBQUEsVUFDQSxXQUFXO0FBQUE7QUFBQTtBQUdmLGFBQU8sa0JBQWtCLEtBQUssSUFBSTtBQUFBO0FBQUEsYUFFM0I7QUFDUCxhQUFPLFdBQVc7QUFBQSxRQUNoQjtBQUFBLFFBQ0EsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0osaUJBQWlCO0FBMUZoQztBQTJGRSxRQUFNLGFBQWE7QUFDbkIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQsTUFBSSxVQUNILDBDQUFZLGNBQWEsb0NBQUMsTUFBRCxNQUFLLHlDQUFZLFlBQzFDLDBDQUFZLGNBQWEsb0NBQUMsTUFBRCxNQUFLLHlDQUFZLFlBQzFDLDBDQUFZLGtCQUFpQixvQ0FBQyxNQUFELE1BQUsseUNBQVksZ0JBQy9DLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU8sYUFBYSxJQUFJLGlCQUFpQjtBQUFBLE1BRTNDLG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxTQUFELE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sZ0JBQWM7QUFBQSxNQUNiLEtBQUksVUFHVCxvQ0FBQyxTQUFELE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVEsTUFBSztBQUFBLElBQVksT0FBTTtBQUFBLE1BQWEsZUFHNUQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQWlCLGFBQ2hDLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLGNBQWMsK0NBQVksV0FBWixtQkFBb0I7QUFBQSxJQUNsQyxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsT0FHVCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBaUIsYUFDaEMsb0NBQUMsU0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsY0FBYywrQ0FBWSxXQUFaLG1CQUFvQjtBQUFBLElBQ2xDLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxPQUdULG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxLQUFTO0FBQUE7OztBQzNJbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFzQzs7O0FDQXRDO0FBQUEsb0JBQXFCO0FBSXJCLElBQU0sU0FBUyxDQUFDLEVBQUUsV0FBa0I7QUFDbEMsU0FDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRCxNQUFJLFlBQVMsUUFFZixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQVEsY0FDakIsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFZLGlCQUNyQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBVSxRQUFPO0FBQUEsS0FDNUIsb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLEtBQVM7QUFBQTtBQU1oQyxJQUFPLGlCQUFROzs7Ozs7QURkUixJQUFNLFNBQXVCLE1BQU07QUFDeEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQU05QixJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzNELFFBQU0sU0FBUyxNQUFNLGNBQWM7QUFDbkMsUUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLLFdBQVc7QUFBQSxJQUNwQyxPQUFPLEVBQUUsSUFBSTtBQUFBLElBQ2IsUUFBUSxFQUFFLElBQUksTUFBTSxVQUFVO0FBQUE7QUFFaEMsU0FBTztBQUFBO0FBRUYsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxTQUFPLE9BQU87QUFBQTtBQUVELGdCQUFnQjtBQUM3QixRQUFNLE9BQW1CO0FBQ3pCLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLGdCQUFEO0FBQUEsSUFBUSxNQUFNLEtBQUs7QUFBQSxNQUNuQixvQ0FBQyxzQkFBRDtBQUFBOzs7QUU3Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFvRTs7Ozs7O0FBSTdELElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBU3JDLElBQU0sY0FBYSxDQUFDLFNBQXFCO0FBQ3ZDLFNBQU8sd0JBQUssTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUV2QixJQUFNLFVBQXlCLE9BQU8sRUFBRSxhQUFhO0FBQzFELFFBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksT0FBTztBQUM1RCxNQUFJLENBQUM7QUFBTSxVQUFNLElBQUksTUFBTTtBQUMzQixRQUFNLE9BQW1CLEVBQUU7QUFDM0IsU0FBTztBQUFBO0FBRUYsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sS0FBSyxLQUFLLElBQUk7QUFDcEIsUUFBTSxnQkFBZ0IsS0FBSyxJQUFJO0FBQy9CLE1BQUksT0FBTyxPQUFPLFlBQVksT0FBTyxrQkFBa0IsVUFBVTtBQUMvRCxXQUFPLFlBQVcsRUFBRSxLQUFLO0FBQUE7QUFFM0IsUUFBTSxNQUFNLE1BQU0sR0FBRyxLQUFLLE9BQU87QUFBQSxJQUMvQixPQUFPLEVBQUU7QUFBQSxJQUNULE1BQU07QUFBQSxNQUNKLFdBQVcsa0JBQWtCLFFBQVEsT0FBTztBQUFBO0FBQUE7QUFHaEQsU0FBTztBQUFBO0FBRU0sb0JBQW9CO0FBQ2pDLFFBQU0sT0FBTztBQUNiLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRCxNQUFLLEtBQUssS0FBSyxPQUNkLEtBQUssS0FBSyxZQUNULG9DQUFDLEtBQUQsTUFBRyx5QkFFSCxvQ0FBQyxLQUFELE1BQUcsNEJBRUwsb0NBQUMsS0FBRCxNQUFHLGdCQUFhLEtBQUssS0FBSyxZQUMxQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxNQUFELE1BQUksZ0JBQ0osb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsT0FBTyxLQUFLLEtBQUs7QUFBQSxJQUFJLE1BQUs7QUFBQSxNQUMvQyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxPQUFPLEtBQUssS0FBSztBQUFBLElBQU0sTUFBSztBQUFBLE1BQ2pELG9DQUFDLFNBQUQsTUFBTyxhQUVMLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLGdCQUFnQixLQUFLLEtBQUs7QUFBQSxJQUMxQixPQUFNO0FBQUEsT0FHVixvQ0FBQyxTQUFELE1BQU8saUJBRUwsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsZ0JBQWdCLENBQUMsS0FBSyxLQUFLO0FBQUEsSUFDM0IsT0FBTTtBQUFBLE9BR1Ysb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLEtBQVM7QUFBQTs7O0FDdkU5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFvRDs7Ozs7O0FBTTdDLElBQU0sU0FBdUIsTUFBTTtBQUN4QyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBTTlCLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxTQUFTLE1BQU0sVUFBVTtBQUMvQixRQUFNLE9BQW1CO0FBQUEsSUFDdkIsVUFBVSxNQUFNLEdBQUcsS0FBSyxTQUFTO0FBQUEsTUFDL0IsT0FBTyxFQUFFLFFBQVE7QUFBQSxNQUNqQixRQUFRLEVBQUUsSUFBSSxNQUFNLE1BQU0sTUFBTSxXQUFXO0FBQUE7QUFBQTtBQUcvQyxTQUFPO0FBQUE7QUFFTSxxQkFBcUI7QUFDbEMsUUFBTSxPQUFPO0FBQ2IsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFELE1BQ0csS0FBSyxTQUFTLFNBQVMsSUFDdEIsS0FBSyxTQUFTLElBQUksQ0FBQyxTQUNqQixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxLQUFLLEtBQUs7QUFBQSxJQUFJLFdBQVcsS0FBSyxZQUFZLGNBQWM7QUFBQSxLQUMxRCxvQ0FBQyxNQUFELE1BQUssS0FBSyxPQUNWLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFJLEtBQUs7QUFBQSxLQUFJLFlBSXZCLG9DQUFDLE1BQUQsTUFBSTtBQUFBOzs7QUNwQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOEQ7QUFLdkQsSUFBTSxTQUF1QixNQUFNO0FBQ3hDLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFNckMsSUFBTSxjQUFhLENBQUMsU0FBcUI7QUFDdkMsU0FBTyx5QkFBSyxNQUFNLEVBQUUsUUFBUTtBQUFBO0FBR3ZCLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxTQUFTLE1BQU0sVUFBVTtBQUMvQixRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sV0FBVyxLQUFLLElBQUk7QUFDMUIsTUFBSSxPQUFPLGFBQWEsVUFBVTtBQUNoQyxXQUFPLFlBQVcsRUFBRSxXQUFXO0FBQUE7QUFFakMsTUFBSSxTQUFTLFNBQVMsR0FBRztBQUN2QixXQUFPLFlBQVcsRUFBRSxNQUFNLFVBQVUsV0FBVztBQUFBO0FBRWpELFFBQU0sT0FBTyxNQUFNLEdBQUcsS0FBSyxPQUFPO0FBQUEsSUFDaEMsTUFBTSxFQUFFLFFBQVEsUUFBUSxNQUFNLFVBQVUsV0FBVztBQUFBO0FBRXJELFNBQU8sNkJBQVMsU0FBUyxLQUFLO0FBQUE7QUFFakIsbUJBQW1CO0FBQ2hDLFFBQU0sYUFBYTtBQUNuQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLGNBQWMseUNBQVk7QUFBQSxJQUMxQixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsTUFFZCxvQ0FBQyxRQUFELE1BQU8seUNBQVksWUFDbkIsb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLEtBQVM7QUFBQTs7O0FDNUNoQztBQUFBLElBQU8sMEJBQVEsRUFBQyxXQUFVLFlBQVcsU0FBUSxFQUFDLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsdUNBQXFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsTUFBSyxRQUFPLFlBQVcsUUFBVSxRQUFPLElBQUcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkJBQTBCLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGlCQUFnQixFQUFDLE1BQUssaUJBQWdCLFlBQVcsUUFBTyxRQUFPLFVBQVMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsb0NBQW1DLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxlQUFjLEVBQUMsTUFBSyxlQUFjLFlBQVcsUUFBTyxRQUFPLFFBQU8sU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0NBQWlDLFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sdUJBQXNCLEVBQUMsTUFBSyx1QkFBc0IsWUFBVyxlQUFjLFFBQU8sV0FBVSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywwQ0FBeUMsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8scUJBQW9CLEVBQUMsTUFBSyxxQkFBb0IsWUFBVyxlQUFjLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyx3Q0FBdUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sbUJBQWtCLEVBQUMsTUFBSyxtQkFBa0IsWUFBVyxlQUFjLFFBQU8sT0FBTSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxzQ0FBcUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBYldwL0UsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlCQUFpQjtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosdUJBQXVCO0FBQUEsSUFDbkIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQkFBcUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1CQUFtQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRGhFZCx3QkFBd0IsT0FBTyxTQUFTO0FBQ3RDLE1BQUk7QUFDSixNQUFJO0FBRUosTUFBSSxNQUFNLGlCQUFpQixNQUFNO0FBQy9CLHdCQUFvQixNQUFNO0FBQUE7QUFHNUIsUUFBTSxhQUFhLE1BQU0sUUFBUTtBQUNqQyxRQUFNLHVCQUF1QixNQUFNLFFBQVE7QUFFM0MsTUFBSSxjQUFjLFFBQVEsWUFBWSxLQUFLLGFBQWE7QUFDdEQsNkJBQXlCLFdBQVcsTUFBTSxLQUFLO0FBQUE7QUFHakQsUUFBTSxjQUFjO0FBQUEsSUFDbEIsK0JBQStCO0FBQUEsSUFDL0I7QUFBQSxJQUNBLHVCQUF1QjtBQUFBO0FBSXpCLFNBQU8sS0FBSyxhQUFhLFFBQVEsU0FBTztBQUN0QyxRQUFJLFlBQVksUUFBUSxNQUFNO0FBQzVCLGFBQU8sWUFBWTtBQUFBO0FBQUE7QUFJdkIsU0FBTztBQUFBO0FBR0YsSUFBTSxVQUFVLHlDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQTtBQUFBLEVBQ0EsTUFBTTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
