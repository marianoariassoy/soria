import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Routes from "@/components/Routes";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Banner />
      <Services />
      <Routes />
      <Faqs />
      <Contact />
    </main>
  );
}
