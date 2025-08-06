import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, Calendar } from "lucide-react";

const StudentChaptersSection = () => {
  const chapters = [
    {
      id: 1,
      collegeName: "Indian Institute of Science",
      branchCode: "IISc-PELS-001",
      facultyAdvisor: "Dr. Rajesh Kumar",
      chair: "Ananya Sharma",
      viceChair: "Karthik Menon"
    },
    {
      id: 2,
      collegeName: "Indian Institute of Technology Bangalore",
      branchCode: "IITB-PELS-002", 
      facultyAdvisor: "Dr. Priya Nair",
      chair: "Vikram Reddy",
      viceChair: "Sneha Patel"
    },
    {
      id: 3,
      collegeName: "PES University",
      branchCode: "PESU-PELS-003",
      facultyAdvisor: "Dr. Suresh Babu",
      chair: "Arjun Krishna",
      viceChair: "Deepika Rao"
    },
    {
      id: 4,
      collegeName: "BMS College of Engineering",
      branchCode: "BMSCE-PELS-004",
      facultyAdvisor: "Dr. Lakshmi Devi",
      chair: "Rohit Singh",
      viceChair: "Preethi Kumari"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Access to IEEE Xplore",
      description: "Free access to the world's largest technical library with millions of documents."
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with professionals, researchers, and fellow students globally."
    },
    {
      icon: Award,
      title: "Scholarships & Awards",
      description: "Exclusive scholarships and recognition programs for student members."
    },
    {
      icon: Calendar,
      title: "Technical Events",
      description: "Priority access to conferences, workshops, and technical seminars."
    }
  ];

  return (
    <section id="student-chapters" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Student Branch Chapters</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of power electronics engineers through 
            active student chapters across Bangalore.
          </p>
        </div>

        {/* Student Chapters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{chapter.collegeName}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Branch Code:</p>
                  <p className="text-sm text-muted-foreground">{chapter.branchCode}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Faculty Advisor:</p>
                  <p className="text-sm text-muted-foreground">{chapter.facultyAdvisor}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Chair:</p>
                  <p className="text-sm text-muted-foreground">{chapter.chair}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Vice Chair:</p>
                  <p className="text-sm text-muted-foreground">{chapter.viceChair}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Membership Benefits */}
        <div className="bg-background rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Student Membership Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Student Membership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentChaptersSection;