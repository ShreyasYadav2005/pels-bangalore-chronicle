import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventsSection from "@/components/sections/EventsSection";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Events;