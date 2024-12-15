import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Advantage from "@/components/advantage";
import HowWeWork from "@/components/work";
import Faq from "@/components/faq";
import DownloadBanner from "@/components/download-banner";
import Footer from "@/components/footer";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Advantage />
      <HowWeWork />
      <Faq />
      <DownloadBanner />
      <Footer />
    </div>
  );
}
