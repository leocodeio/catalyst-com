import { LoaderFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { commitSession, getSession } from "~/session.server";
export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("id", null);
  session.set("data", { id: "" });
  return new Response(null, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
export default function Logout() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center font-sans p-4">
      You have sucessfully Logged out-<b>@leocodeio</b>
      <Link
        className="border border-2 border-black px-2 py-1 rounded"
        to="/home"
      >
        Home
      </Link>
    </div>
  );
}
