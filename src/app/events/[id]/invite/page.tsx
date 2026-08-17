import { invitationDetail } from "@/lib/events";
import { notFound } from "next/navigation";
import InvitationClientPage from "./client";

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invitation = await invitationDetail(id);

  if (!invitation) {
    notFound();
  }

  return <InvitationClientPage id={id} invitation={invitation} />;
}
