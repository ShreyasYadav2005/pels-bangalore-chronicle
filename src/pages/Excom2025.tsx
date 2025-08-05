import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExcomSection from "@/components/sections/ExcomSection";

const Excom2025 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <ExcomSection year="2025" />
      </main>
      <Footer />
    </div>
  );
};

export default Excom2025;