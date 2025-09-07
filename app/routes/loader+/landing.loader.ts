import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { getSession } from "~/server/services/auth/db.server";

export const ROUTE_PATH = "/" as const;

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const session = await getSession(request);
  
  // Return user data if authenticated, or null if not
  return json({
    user: session ? {
      id: session.user.id,
      name: session.user.name || session.user.email?.split('@')[0] || 'User',
      email: session.user.email
    } : null
  });
}
