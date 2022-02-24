import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-O54OVWX3.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// empty-module:../../utils/db.server
var require_db = __commonJS({
  "empty-module:../../utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// empty-module:../../utils/session.server
var require_session = __commonJS({
  "empty-module:../../utils/session.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:C:\Users\91754\Desktop\remix-todo\app\routes\todo\index.tsx?browser
init_react();

// app/routes/todo/index.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function TodoRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("ul", null, data.todoList.map((todo) => /* @__PURE__ */ React.createElement("li", {
    key: todo.id,
    className: todo.completed ? "completed" : ""
  }, /* @__PURE__ */ React.createElement("h3", null, todo.name), /* @__PURE__ */ React.createElement(Link, {
    to: todo.id
  }, "Edit")))));
}
export {
  TodoRoute as default
};
//# sourceMappingURL=/build/routes/todo/index-6KY5ZYQQ.js.map
