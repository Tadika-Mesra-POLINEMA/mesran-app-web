"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
      <h1>MAU REGISTER WAJAH KESINI BANG</h1>
      <button
        className="px-8 py-4 rounded-full text-white bg-red-500"
        onClick={() => router?.push("/faces/register")}
      >
        Kesini Bro
      </button>
    </div>
  );
}
