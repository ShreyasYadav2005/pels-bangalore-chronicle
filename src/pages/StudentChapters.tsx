import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StudentChaptersSection from "@/components/sections/StudentChaptersSection";

const StudentChapters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <StudentChaptersSection />
      </main>
      <Footer />
    </div>
  );
};

export default StudentChapters;