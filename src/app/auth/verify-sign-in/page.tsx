"use client";

import { verifyLogin } from "@/actions/auth.action";
import { CountdownTimer } from "@/components/countdown-timer";
import { getSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, ChangeEvent, KeyboardEvent } from "react";

export default function VerifySignInPage() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    if (!/^\d*$/.test(value)) {
      e.target.value = "";
      return;
    }

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = async () => {
    const otp = inputsRef.current.reduce((acc, input) => {
      return acc + input?.value;
    }, "");

    try {
      const response = await verifyLogin(otp);

      if (response.status === "success") {
        const redirect = searchParams.get("callbackUrl");
        if (redirect) {
          await getSession();

          router.push(redirect);
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-8 w-full min-h-[100dvh] p-12 mx-auto lg:w-2/6 md:w-1/2">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-neutral-90">
          Verifikasi Kode OTP
        </h1>
        <p className="text-sm text-neutral-40">
          Masukkan kode OTP yang telah dikirimkan ke nomor atau email Anda untuk
          melanjutkan proses verifikasi.
        </p>

        <div className="flex flex-col items-center">
          <div className="flex gap-3 mt-12">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-lg font-medium text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              ))}
          </div>
          <CountdownTimer time={60} className="mt-5" />
        </div>
      </div>
      <button
        onClick={handleSendOtp}
        className="w-full p-3 mt-3 font-semibold text-white rounded-full bg-primary-base"
      >
        Kirim
      </button>
    </div>
  );
}
