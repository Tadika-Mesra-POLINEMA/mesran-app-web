import Image from "next/image";

function HowWeWork() {
  return (
    <section id="how-we-work" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Bagaimana kami bekerja?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptatibus.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="w-64 text-center">
            <Image
              src="/path-to-icon-1.svg"
              alt="Icon 1"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Buat Acara</h3>
            <p className="text-gray-600">
              Isi formulir dan tentukan detail acara Anda dengan mudah.
            </p>
          </div>
          <div className="w-64 text-center">
            <Image
              src="/path-to-icon-2.svg"
              alt="Icon 2"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Kirim Undangan</h3>
            <p className="text-gray-600">
              Kirim undangan ke teman dan keluarga Anda untuk acara yang akan
              datang.
            </p>
          </div>
          <div className="w-64 text-center">
            <Image
              src="/path-to-icon-3.svg"
              alt="Icon 3"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Nikmati Acara</h3>
            <p className="text-gray-600">
              Nikmati acara dengan teman-teman dan buat kenangan tak terlupakan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
