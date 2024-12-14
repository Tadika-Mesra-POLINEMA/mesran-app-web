import { fetchUser } from "@/actions/user.action";
import RegisterFaceContent from "./client";

export default async function RegisterPage() {
  const user = await fetchUser();

  return <RegisterFaceContent user={user} />;
}
