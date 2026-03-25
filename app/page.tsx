import About from "@/components/about";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <main className="bg-[#1d1f23]">
        <Hero />
        <About />
        <HowItWorks />
        <FAQ />
      </main>
    </>
  )
}