import { Invitation } from "@/types";
import Image from "next/image";

interface InvitationProps {
  invitation: Invitation;
}

export const InvitationCard = ({ invitation }: InvitationProps) => {
  return (
    <div className="flex flex-col items-center bg-neutral-10 rounded-xl">
      <Image src="/megaphone.png" width={160} height={160} alt="Megaphone" />
      <div className="text-center mt-2">
        <p className="text-neutral-40 mb-3">
          Mengundang Anda untuk menghadiri acara:
        </p>
        <h1 className="text-2xl font-bold text-neutral-60">
          {invitation.name}
        </h1>
      </div>
      <section className="p-3 m-2 mt-3 bg-white rounded-lg">
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <div className="text-gray-500">Tanggal</div>
            <div className="flex items-center gap-2 mt-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-md font-medium">
                {new Date(invitation.target_date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
          <div>
            <div className="text-gray-500">Hari & Waktu</div>
            <div className="flex items-center gap-2 mt-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-md font-medium">
                {new Date(invitation.event_start).toLocaleDateString("id-ID", {
                  weekday: "long",
                })}
                ,
                {new Date(invitation.event_start).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-3">
          <div className="text-gray-500">Alamat</div>
          <div className="mt-1 font-medium">{invitation.location}</div>
        </div>
        <hr />
        <div className="my-3 text-center text-primary-base font-medium">
          Demikian undangan kami, atas kehadiran saudara, kami ucapkan banyak
          terima kasih.
        </div>
      </section>
    </div>
  );
};
