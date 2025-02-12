import { Certifications } from "./components/sections/Certifications";
import { Footer } from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import { EMSection } from "./components/sections/EMSection";
import { Services } from "./components/sections/Services";

export default function Inicio() {
  return (
    <div className="grid pb-20">
      <Hero />
      <Services />
      <Certifications />
      <EMSection />
      <Footer />
    </div>
  );
}
