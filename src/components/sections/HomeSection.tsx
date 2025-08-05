import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, BookOpen } from "lucide-react";

const HomeSection = () => {
  return (
    <section id="home" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Welcome to IEEE PELS Bangalore
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The IEEE Power Electronics Society (PELS) Bangalore Section is committed to advancing 
            the field of power electronics through education, research, and professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join IEEE PELS
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Active Members</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Events Annually</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
              <p className="text-muted-foreground">Awards Won</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Research Papers</p>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">About IEEE PELS Bangalore</h3>
            <p className="text-muted-foreground mb-6">
              The IEEE Power Electronics Society (PELS) is dedicated to the advancement of power 
              electronics technology. Our Bangalore section serves as a hub for professionals, 
              researchers, and students in the field of power electronics.
            </p>
            <p className="text-muted-foreground mb-6">
              We organize technical conferences, workshops, seminars, and networking events to 
              foster collaboration and knowledge sharing among our members. Our activities span 
              across various domains including renewable energy systems, electric vehicles, 
              power converters, and smart grid technologies.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Explore Our Mission
            </Button>
          </div>
          
          <div className="bg-muted rounded-lg p-8">
            <h4 className="text-xl font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  → Membership Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  → Technical Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  → Conference Proceedings
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  → Student Activities
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  → Industry Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;