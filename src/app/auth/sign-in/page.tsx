import { Suspense } from "react";
import LoginPage from "./client";

export default function SignInPage() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
