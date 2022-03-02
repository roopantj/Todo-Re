import {
  login_default
} from "/build/_shared/chunk-47WS36EG.js";
import {
  require_session
} from "/build/_shared/chunk-YWO6DYDP.js";
import {
  require_db
} from "/build/_shared/chunk-UZVQQSMG.js";
import {
  React,
  __toModule,
  init_react,
  useActionData
} from "/build/_shared/chunk-CHBTBQBR.js";

// browser-route-module:C:\Users\91754\Desktop\Todo-Re\app\routes\todo\new.tsx?browser
init_react();

// app/routes/todo/new.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
var links = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function NewTodo() {
  const actionData = useActionData();
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
export {
  NewTodo as default,
  links
};
//# sourceMappingURL=/build/routes/todo/new-625B7YR6.js.map
