import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import { Feature } from "@/components/feature";
import Hero from "@/components/hero";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <Feature />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
