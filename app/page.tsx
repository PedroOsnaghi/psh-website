import { Certifications } from "./components/sections/Certifications";
import { Footer } from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import { Services } from "./components/sections/Services";

export default function Inicio() {
  return (
    <div className="grid pb-20">
      <Hero />
      <Services />
      <Certifications />
      <Footer />
    </div>
  );
}
