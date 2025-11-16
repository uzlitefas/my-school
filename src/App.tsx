import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import { Feature } from "./components/feature";
import Hero from "./components/hero";
import Footer from "./components/shared/footer";
import { Navbar } from "./components/shared/navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Feature />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
