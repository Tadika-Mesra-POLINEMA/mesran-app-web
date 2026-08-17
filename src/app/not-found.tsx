import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-10 px-4 text-center">
      <h1 className="text-6xl font-bold text-neutral-80 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-neutral-70 mb-2">
        Halaman atau Undangan Tidak Ditemukan
      </h2>
      <p className="text-neutral-50 mb-6 max-w-md">
        Maaf, halaman atau undangan acara yang Anda cari tidak tersedia atau sudah tidak berlaku.
      </p>
      <Link
        href="/"
        className="bg-primary-base text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
