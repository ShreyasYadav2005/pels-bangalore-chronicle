import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExcomSection from "@/components/sections/ExcomSection";

const Excom2024 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <ExcomSection year="2024" />
      </main>
      <Footer />
    </div>
  );
};

export default Excom2024;