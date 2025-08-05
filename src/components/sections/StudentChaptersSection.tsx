import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, Calendar } from "lucide-react";

const StudentChaptersSection = () => {
  const chapters = [
    {
      id: 1,
      name: "IISc Bangalore IEEE PELS Student Branch",
      university: "Indian Institute of Science",
      members: 45,
      established: "2018",
      achievements: ["Best Student Chapter Award 2023", "Outstanding Activity Award 2022"],
      activities: ["Technical Workshops", "Research Seminars", "Industry Visits"],
      contact: "iiscpels@ieee.org"
    },
    {
      id: 2,
      name: "IIT Bangalore IEEE PELS Student Branch",
      university: "Indian Institute of Technology",
      members: 38,
      established: "2019",
      achievements: ["Innovation Award 2023", "Research Excellence Award 2022"],
      activities: ["Project Competitions", "Guest Lectures", "Lab Sessions"],
      contact: "iitbpels@ieee.org"
    },
    {
      id: 3,
      name: "PES University IEEE PELS Student Branch",
      university: "PES University",
      members: 52,
      established: "2020",
      achievements: ["Most Active Chapter 2023", "Student Engagement Award 2022"],
      activities: ["Coding Competitions", "Technical Talks", "Internship Programs"],
      contact: "pespels@ieee.org"
    },
    {
      id: 4,
      name: "BMS College IEEE PELS Student Branch",
      university: "BMS College of Engineering",
      members: 33,
      established: "2021",
      achievements: ["Emerging Chapter Award 2023"],
      activities: ["Study Groups", "Conference Participation", "Community Outreach"],
      contact: "bmspels@ieee.org"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">Est. {chapter.established}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{chapter.members} Members</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{chapter.name}</CardTitle>
                <p className="text-muted-foreground">{chapter.university}</p>
              </CardHeader>
              <CardContent>
                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-primary mb-2">Recent Achievements</h4>
                  <div className="space-y-1">
                    {chapter.achievements.map((achievement, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-1">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-primary mb-2">Key Activities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {chapter.activities.map((activity, index) => (
                      <li key={index}>• {activity}</li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground mb-3">
                    Contact: {chapter.contact}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
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