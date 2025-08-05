import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhyJoinSection from "@/components/sections/WhyJoinSection";

const WhyJoin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <WhyJoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default WhyJoin;