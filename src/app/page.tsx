import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ServicesContainer";
import Routes from "@/components/Routes";
import Faqs from "@/components/FaqsContainer";
import Contact from "@/components/Contact";
import Banner from "@/components/Banner";
import PorqueElegirnos from "@/components/PorqueElegirnos";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Banner />
      <Services />
      <Routes />
      <PorqueElegirnos />
      <Faqs />
      <Contact />
    </main>
  );
}
