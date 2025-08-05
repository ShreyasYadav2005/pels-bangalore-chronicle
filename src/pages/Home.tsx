import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeSection from "@/components/sections/HomeSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;