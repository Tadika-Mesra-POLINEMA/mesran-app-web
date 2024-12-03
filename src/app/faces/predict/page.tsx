"use client";

import { predictFace, getUserById } from "@/actions/ml.action";
import { Button } from "@/components/button";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function RegisterFacePage() {
  const camRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [captureResult, setCaptureResult] = useState<boolean | null>(null);
  interface User {
    email: string;
    // add other properties as needed
  }

  const [user, setUser] = useState<User | null>(null);

  const capture = useCallback(async () => {
    const screenshot = camRef.current?.getScreenshot() || null;
    setCapturedImage(screenshot);

    if (screenshot) {
      setLoading(true);
      const userId = await predictFace({ image: screenshot });
      console.log("RESPONSE", userId);
      const retrievedUser = await getUserById(userId);

      setCaptureResult(!!userId);
      setUser(retrievedUser);

      setLoading(false);
    }
  }, [camRef]);

  return (
    <div className="flex flex-col min-h-[90vh] items-center justify-between">
      {/* Bagian Kamera */}
      <section className="flex flex-col items-center">
        <h1 className="text-[28px] font-bold mb-[32px]">Cek Wajah</h1>
        <div className="w-50 h-50 px-[16px] py-[32px]">
          {!capturedImage ? (
            <Webcam
              audio={false}
              ref={camRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                width: 400,
                height: 400,
                facingMode: "user",
              }}
              className="rounded-full scale-x-[-1]"
            />
          ) : (
            !!capturedImage && (
              <img
                src={capturedImage}
                alt="Captured Image"
                className="rounded-full scale-x-[-1]"
              ></img>
            )
          )}
        </div>
        <div className="text-center mt-[24px]">
          <h2 className="text-2xl font-bold">Ambil gambar wajah Anda!</h2>
          <p className="text-gray-500">Dilakukan untuk pengujian wajah Anda</p>
        </div>
      </section>

      {/* Bagian CTA dan Interaksi */}
      <section className="min-w-full flex flex-col items-center gap-10 justify-center">
        <div>
          {captureResult === null ? (
            !loading ? (
              <span className="bg-yellow-100 px-3 py-2 rounded-2xl border-2 border-yellow-300">
                Posisikan wajah Anda dengan benar
              </span>
            ) : (
              <span className="bg-gray-100 px-3 py-2 rounded-2xl border-2 border-gray-300">
                Tunggu sebentar...
              </span>
            )
          ) : (
            <span
              className={`px-3 py-2 rounded-2xl border-2 ${
                captureResult
                  ? "bg-teal-100 border-teal-300"
                  : "bg-red-100 border-red-300"
              }`}
            >
              {captureResult && user?.email}
            </span>
          )}
        </div>
        <Button
          className="bg-primary-base rounded-full text-[16px] font-medium px-8 py-4"
          onClick={
            !capturedImage
              ? capture
              : () => {
                  setCapturedImage(null);
                  setCaptureResult(null);
                }
          }
        >
          <span>{!capturedImage ? "Ambil" : "Ambil Lagi"}</span>
        </Button>
      </section>
    </div>
  );
}
