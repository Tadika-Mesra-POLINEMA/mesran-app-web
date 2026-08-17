import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isInvitePage =
    nextUrl.pathname.startsWith("/events/") && nextUrl.pathname.endsWith("/invite");
  const isAuthRoute = nextUrl.pathname.startsWith("/auth/");

  // Invitation page is publicly accessible without login
  if (isInvitePage || isAuthRoute) {
    return;
  }

  // Protected routes redirect to sign-in if not logged in
  if (!isLoggedIn) {
    return Response.redirect(
      new URL(`/auth/sign-in?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`, nextUrl)
    );
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg|.*\\.jpg).*)"],
};
