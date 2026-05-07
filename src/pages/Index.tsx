import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import Benefits from "../components/landing/Benefits";
import Authority from "../components/landing/Authority";
import About from "../components/landing/About";
import LocationCTA from "../components/landing/LocationCTA";
import Footer from "../components/landing/Footer";
import Treatments from "../components/landing/Treatments";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Treatments />
        <Authority />
        <Benefits />
        <About />
        <LocationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
