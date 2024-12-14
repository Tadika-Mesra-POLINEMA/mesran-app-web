import { invitationDetail } from "@/lib/events";
import InvitationClientPage from "./client";

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invitation = await invitationDetail(id);

  if (!invitation) {
    return <div>Undangan tidak ditemukan</div>;
  }

  return <InvitationClientPage id={id} invitation={invitation} />;
}
