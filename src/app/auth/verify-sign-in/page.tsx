import { Suspense } from "react";
import VerifySignInPage from "./client";

export default function VerifyOtpPage() {
  return (
    <Suspense>
      <VerifySignInPage />
    </Suspense>
  );
}
