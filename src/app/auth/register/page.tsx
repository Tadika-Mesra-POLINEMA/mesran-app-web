import { Suspense } from "react";
import RegisterPageContent from "./client";

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterPageContent />
    </Suspense>
  );
}
