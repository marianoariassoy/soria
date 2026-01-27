import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Routes from "@/components/Routes";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <div className="aspect-16/5">
        <img
          src="https://images.pexels.com/photos/1255149/pexels-photo-1255149.jpeg"
          alt="Foto"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <Services />
      <Routes />
      <Faqs />
      <Contact />
    </main>
  );
}
