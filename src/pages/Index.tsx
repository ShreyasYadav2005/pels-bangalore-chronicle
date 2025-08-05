import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeSection from "@/components/sections/HomeSection";
import EventsSection from "@/components/sections/EventsSection";
import ExcomSection from "@/components/sections/ExcomSection";
import StudentChaptersSection from "@/components/sections/StudentChaptersSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "events", "excom-2022", "excom-2023", "excom-2024", "excom-2025", "student-chapters", "why-join"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <HomeSection />
        <EventsSection />
        <ExcomSection year="2022" />
        <ExcomSection year="2023" />
        <ExcomSection year="2024" />
        <ExcomSection year="2025" />
        <StudentChaptersSection />
        <WhyJoinSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
