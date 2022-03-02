import stylesUrl from "~/styles/login.css";
import type { LinksFunction } from "remix";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
//className="relative top-1/2 left-1/2 -translate-y-1/2	-translate-x-1/2	"
export default function HomePage() {
  return (
    <div className="login-container content">
      <h1>Login to add your Todo</h1>
      <form method="get" action="/login">
        <button className="btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
