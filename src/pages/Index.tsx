import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Authority from "@/components/landing/Authority";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import LocationCTA from "@/components/landing/LocationCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Services />
        <About />
        <LocationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
