import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { UserSession } from "./model/user-session";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: process.env.NODE_ENV === "production",
    secrets: ["s3cret1"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});


export async function createUserSession(
  request: Request,
  userSession: UserSession,
  redirectTo: string = "",
) {
  // console.log(
  //   "at session.server.ts we have, req",
  //   request,
  //   "userSession",
  //   userSession,
  //   "redirectTo",
  //   redirectTo,
  // );
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );

  session.set("id", userSession.data.id);
  session.set("data", userSession.data);
  session.set("lightOrDarkMode", userSession.lightOrDarkMode);
  session.set("language", userSession.language);
  session.set("CSRFToken", userSession.CSRFToken);
  session.set("metrics", userSession.metrics);
  session.set("impersonatingFromUserId", userSession.impersonatingFromUserId);
  // console.log("when session is created userId is", userSession.id);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export const { getSession, commitSession, destroySession } = sessionStorage;

