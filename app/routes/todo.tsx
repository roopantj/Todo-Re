import { Outlet, useLoaderData } from "remix";
import { requireUserId, logout } from "~/utils/session.server";
import { db } from "~/utils/db.server";
import Header from "~/components/Header";
import type { LinksFunction, LoaderFunction, ActionFunction } from "remix";
import stylesUrl from "~/styles/Header.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, username: true },
  });
  if (user?.username && user?.username.length > 21)
    return [...user.username].slice(21).join("");
  return user?.username;
};
export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};
export default function Todo() {
  const username = useLoaderData();
  return (
    <div>
      <Header user={username} />
      <Outlet />
    </div>
  );
}
