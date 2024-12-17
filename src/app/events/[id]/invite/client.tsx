"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Invitation } from "@/types";
import { InvitationCard } from "@/components/invitation-card";
import { joinEvent } from "@/actions/event.action";
import { faceRegistered } from "@/actions/user.action";
import Swal from "sweetalert2";

interface InvitationClientPageProps {
  id: string;
  invitation: Invitation;
}

export default function InvitationClientPage({
  id,
  invitation,
}: InvitationClientPageProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleOnClickAttend = () => {
    if (session) {
      Swal.fire({
        title: "Konfirmasi Kehadiran",
        text: "Apakah kamu yakin menghadiri acara ini?",
        iconHtml: '<img src="/faq.svg"/>',
        showCancelButton: true,
        confirmButtonColor: "#FE4F34",
        cancelButtonColor: "#E8E8E8",
        confirmButtonText: "Iya",
        customClass: {
          icon: "border-0 w-72 h-72",
          confirmButton: "px-8 py-2 rounded-full",
          cancelButton: "px-8 py-2 rounded-full text-neutral-40",
          actions: "flex flex-row-reverse justify-center space-x-4",
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          const isFaceRegistered = await faceRegistered();

          if (isFaceRegistered.status == "success") {
            const response = await joinEvent(id);
            if (response.status === "success") {
              Swal.fire({
                title: "Berhasil mendaftar",
                text: "Kamu berhasil mendaftar pada acara ini",
                icon: "success",
                confirmButtonColor: "#FE4F34",
                customClass: {
                  confirmButton: "px-8 py-2 rounded-full",
                },
              });
            }
            if (response.status === "error") {
              Swal.fire({
                title: "Gagal bergabung",
                text: response.message,
                icon: "error",
                confirmButtonColor: "#FE4F34",
                customClass: {
                  confirmButton: "px-8 py-2 rounded-full",
                },
              });
            }
          } else {
            Swal.fire({
              title: "Gagal bergabung",
              text: "Kamu belum mendaftarkan wajah pada sistem, silahkan daftarkan wajah terlebih dahulu",
              icon: "error",
              confirmButtonColor: "#FE4F34",
              customClass: {
                confirmButton: "px-8 py-2 rounded-full",
              },
            });
            setTimeout(() => {
              router.push(`/faces/register?callbackUrl=/events/${id}/invite`);
            }, 4000);
          }
        }
      });
    } else {
      router.push(`/auth/sign-in?callbackUrl=/events/${id}/invite`);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full min-h-[100dvh] p-4 mx-auto lg:w-2/6 md:w-1/2">
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold text-center text-neutral-90">
          Undangan
        </h2>
        <InvitationCard invitation={invitation} />
      </section>
      <div className="flex justify-center">
        <button
          onClick={handleOnClickAttend}
          className="min-w-full px-4 py-2 font-semibold text-white rounded-full bg-primary-base"
        >
          Hadir
        </button>
      </div>
    </div>
  );
}
