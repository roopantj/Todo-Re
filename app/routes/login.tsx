import { json, LinksFunction, redirect } from "remix";
import {
  useSearchParams,
  ActionFunction,
  useActionData,
  LoaderFunction,
} from "remix";
import jwtDecode from "jwt-decode";
import styleUrl from "~/styles/login.css";
import { db } from "~/utils/db.server";
import {
  createUserSession,
  login,
  getUserId,
  register,
  loginWithGoogle,
} from "~/utils/session.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styleUrl }];
};
type ActionData = {
  formError?: string;
  nameError?: string | undefined;
  passwordError?: string | undefined;
  fields?: {
    loginType: string;
    name: string;
    password: string;
  };
};
const badRequest = (data: ActionData) => {
  return json(data, { status: 400 });
};
export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/todo");
  }
  return null;
};
export const action: ActionFunction = async ({ request }) => {
  const handleLogin = async (fields: {
    name: string;
    password: string;
    loginType: string;
    redirectTo: string;
  }) => {
    switch (fields.loginType) {
      case "login": {
        const user = await login({
          username: fields.name,
          password: fields.password,
        });
        if (!user)
          return badRequest({ fields, formError: "Wrong username/passowrd" });
        return createUserSession(user.id, fields.redirectTo);
      }
      case "register": {
        const userExists = await db.user.findFirst({
          where: { username: fields.name },
        });
        if (userExists) {
          return badRequest({ fields, formError: "Username already exists" });
        }
        const user = await register({
          username: fields.name,
          password: fields.password,
        });
        if (!user) {
          return badRequest({
            fields,
            formError: `Something went wrong trying to create a new user.`,
          });
        }
        return createUserSession(user.id, fields.redirectTo);
      }
      default: {
        return badRequest({
          fields,
          formError: "Login type invalid",
        });
      }
    }
  };
  const CLIENT_ID =
    "600930389454-sjq229oum7ar99jqt9nreutq4r4j8bbk.apps.googleusercontent.com";
  const form = await request.formData();
  const credential = form.get("credential");
  const loginType = form.get("loginType");
  const name = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/todo";
  //Checking for google sign in
  if (credential != null) {
    if (typeof credential !== "string" || typeof redirectTo !== "string")
      return badRequest({ formError: "Google sign in TypeError" });
    const decoded: any = jwtDecode(credential);
    console.log(decoded);
    if (
      (decoded.iss === "https://accounts.google.com" ||
        decoded.iss === "accounts.google.com") &&
      decoded.aud === CLIENT_ID
    ) {
      const user = await loginWithGoogle({
        username: decoded.sub + decoded.name,
        password: decoded.sub,
      });
      if (!user)
        return badRequest({ formError: "Google sign in failed in Login" });
      return createUserSession(user.id, redirectTo);
    } else return badRequest({ formError: "Google sign in auth failed" });
  }
  //Checking for Form sign
  //Filter : 1 Typesafety
  if (
    typeof loginType !== "string" ||
    typeof name !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({ formError: "Form not submitted correctly" });
  }
  //Filter : 2 Invalid username and password
  if (name.length < 3) return badRequest({ nameError: "Invalid name" });
  if (password.length < 6)
    return badRequest({ passwordError: "Invalid password" });
  const fields = { name, password, loginType, redirectTo };
  //Login or Register
  return handleLogin(fields);
};

export default function Login() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async defer></script>

      <div className="login-container">
        <div className="content">
          <div
            id="g_id_onload"
            data-client_id="600930389454-sjq229oum7ar99jqt9nreutq4r4j8bbk.apps.googleusercontent.com"
            data-login_uri="https://todo-remix-tj.netlify.app/login"
            data-auto_prompt="false"
          ></div>
          <div
            className="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left"
          ></div>
          <h1>Login</h1>
          {actionData?.formError && <h2>{actionData?.formError}</h2>}
          {actionData?.nameError && <h2>{actionData?.nameError}</h2>}
          {actionData?.passwordError && <h2>{actionData?.passwordError}</h2>}
          <form method="post">
            <input
              type="hidden"
              name="redirectTo"
              value={searchParams.get("redirectTo") ?? undefined}
            />
            <fieldset>
              <label>
                <input
                  type="radio"
                  name="loginType"
                  value="login"
                  defaultChecked
                />{" "}
                Login
              </label>
              <label>
                <input type="radio" name="loginType" value="register" />{" "}
                Register
              </label>
            </fieldset>
            <div className="input-fields">
              <div className="input-field">
                <label htmlFor="username-input">Username</label>
                <input
                  type="text"
                  defaultValue={actionData?.fields?.name}
                  id="username-input"
                  name="username"
                />
              </div>
              <div className="input-field">
                <label htmlFor="password-input">Password</label>
                <input
                  id="password-input"
                  defaultValue={actionData?.fields?.password}
                  name="password"
                  type="password"
                />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
