import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Challenges from "@/components/Challenges";
import Apps from "@/components/Apps";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Testimonials />
      <Challenges />
      <Apps />
      <Features />
      <About />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
