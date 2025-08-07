import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExecomSection from "@/components/sections/ExecomSection";

const Execom2022 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <ExecomSection year="2022" />
      </main>
      <Footer />
    </div>
  );
};

export default Execom2022;