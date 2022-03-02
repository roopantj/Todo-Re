import { LiveReload, Outlet, Links, Meta, Scripts } from "remix";
import type { LinksFunction } from "remix";
import tailwindURL from "~/tailwind.css";
//import styleUrl from "~/styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindURL }];
};
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="google-signin-client_id"
          content="600930389454-sjq229oum7ar99jqt9nreutq4r4j8bbk.apps.googleusercontent.com"
        ></meta>
        <title>Remix JS </title>
        <Links />
      </head>
      <body className="home">
        <Outlet />
        <LiveReload />
        <Scripts />
        <Meta />
      </body>
    </html>
  );
}
