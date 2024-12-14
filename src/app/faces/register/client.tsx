"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/button";
import { BoxLoader } from "@/components/box-loader";
import { CircularProgress } from "@/components/circular-progress";
import { RegisterFaceAlert } from "@/components/register-face-alert";
import { verifyFace, registerFace } from "@/actions/ml.action";
import { useRouter, useSearchParams } from "next/navigation";
import { User } from "@/types";
import Swal from "sweetalert2";

interface RegisterFaceContentProps {
  user: User;
}

export default function RegisterFaceContent({
  user,
}: RegisterFaceContentProps) {
  const camRef = useRef<Webcam>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useSearchParams();

  if (user.is_face_registered) {
    const redirect = params.get("callbackUrl");

    if (redirect) {
      router.replace(redirect);
    } else {
      router.replace("/");
    }
  }

  //==> Capture Image State <==//
  const [captureCount, setCaptureCount] = useState<number>(0);
  const [captureResult, setCaptureResult] = useState<boolean | null>(null);
  const [capturedImage, setCapturedImage] = useState<string[] | null>(null);

  //==> Constant <==//
  const MAXIMAL_CAPTURE = 5;

  //==> Event Handler <==//
  const capture = useCallback(async () => {
    if (captureCount < MAXIMAL_CAPTURE) {
      const screenshot = camRef.current?.getScreenshot() || null;

      if (screenshot) {
        setLoading(true);

        setTimeout(async () => {
          try {
            const faceValidated = await verifyFace({ image: screenshot });

            if (faceValidated) {
              setCaptureResult(true);
              setCaptureCount((prev) => prev + 1);

              setCapturedImage((prev) => [...(prev || []), screenshot]);
            } else {
              setCaptureResult(false);
              setError("Wajah Anda tidak terdeteksi, silahkan coba lagi.");
            }
          } catch (error) {
            setCaptureResult(false);
            setError("Terjadi kesalahan dalam memverifikasi wajah.");
          }

          setLoading(false);
        }, 1500);
      }
    }
  }, [captureCount]);

  useEffect(() => {
    if (capturedImage?.length === MAXIMAL_CAPTURE) {
      const register = async () => {
        setLoading(true);
        const isFaceRegistered = await registerFace({
          images: capturedImage as [string, ...string[]],
        });

        if (isFaceRegistered) {
          const redirect = params.get("callbackUrl");

          Swal.fire({
            title: "Berhasil mendaftar",
            text: "Kamu berhasil mendaftar pada acara ini",
            icon: "success",
            confirmButtonColor: "#FE4F34",
            customClass: {
              confirmButton: "px-8 py-2 rounded-full",
            },
          });

          setTimeout(() => {
            if (redirect) {
              router.replace(redirect);
            } else {
              router.replace("/");
            }
          }, 2000);
        } else {
          setError("Gagal mendaftarkan wajah.");
        }

        setLoading(false);
      };

      register();
    }
  }, [capturedImage]);

  return (
    <div className="flex flex-col justify-between w-full min-h-[100dvh] px-12 py-8  mx-auto lg:w-2/6 md:w-1/2">
      <div>
        <section className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold mb-[32px]">Registrasi Wajah</h1>

          <div className="relative w-[400px] h-[400px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Webcam
                audio={false}
                ref={camRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  width: 400,
                  height: 400,
                  facingMode: "user",
                }}
                className={`w-full h-full object-cover scale-x-[-1] mx-auto transition-all duration-150 ${
                  loading && "brightness-50"
                }`}
              />
            </div>

            <div className="absolute -top-6 -left-6 w-full h-full">
              <CircularProgress
                capturedCount={captureCount}
                totalCount={MAXIMAL_CAPTURE}
                circleSize={420}
                activeColor="#FE4F34"
                inactiveColor="#E8E8E8"
              />
            </div>

            {loading && (
              <BoxLoader className="absolute inset-0 mx-auto my-auto w-full h-full transition-all duration-150" />
            )}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-lg font-bold mb-1">
            Hai {user.profile.firstname}, Kami akan ambil gambar wajah Anda!
          </h2>
          <p className="text-neutral-40 text-sm">
            Kami akan mengambil wajah Anda sekarang agar nanti bisa digunakan
            untuk masuk ke acara saat hadir!
          </p>
        </section>
      </div>

      <section className="min-w-full flex flex-col items-center gap-10 justify-center">
        <div>
          {loading ? (
            <RegisterFaceAlert type="secondary">
              Tunggu kami sedang memproses wajah Anda
            </RegisterFaceAlert>
          ) : captureResult === null ? (
            <RegisterFaceAlert type="warning">
              Posisikan wajah Anda tepat di dalam lingkaran
            </RegisterFaceAlert>
          ) : (
            <RegisterFaceAlert type={captureResult ? "success" : "error"}>
              {captureResult
                ? "Wajah Anda berhasil terambil"
                : error || "Wajah tidak valid"}
            </RegisterFaceAlert>
          )}
        </div>

        <div className="text-neutral-60">
          Wajah yang sudah diambil{" "}
          <span className="font-bold">{captureCount} dari 5</span>
        </div>

        <Button
          className={`${
            loading || captureCount >= MAXIMAL_CAPTURE
              ? "bg-neutral-20 text-neutral-40"
              : "bg-primary-base text-white"
          } rounded-full text-[16px] font-semibold px-8 py-4`}
          onClick={capture}
          disabled={loading || captureCount >= MAXIMAL_CAPTURE}
        >
          <span>
            {!capturedImage
              ? "Ambil"
              : capturedImage.length === MAXIMAL_CAPTURE
              ? "Tunggu Sebentar"
              : "Ambil Lagi"}
          </span>
        </Button>
      </section>
    </div>
  );
}
