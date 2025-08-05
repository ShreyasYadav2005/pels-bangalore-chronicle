import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Network, 
  BookOpen, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Globe,
  TrendingUp,
  Shield
} from "lucide-react";

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: Network,
      title: "Global Network",
      description: "Connect with over 400,000 IEEE members worldwide and build professional relationships that last a lifetime."
    },
    {
      icon: BookOpen,
      title: "Technical Resources",
      description: "Access to IEEE Xplore Digital Library with millions of technical documents, standards, and research papers."
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Opportunities for professional recognition through IEEE awards, fellowships, and distinguished service programs."
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Enhance your career with professional development courses, certifications, and industry connections."
    },
    {
      icon: GraduationCap,
      title: "Continuing Education",
      description: "Stay current with technology through webinars, conferences, workshops, and technical seminars."
    },
    {
      icon: Globe,
      title: "Industry Standards",
      description: "Participate in developing industry standards that shape the future of power electronics technology."
    },
    {
      icon: TrendingUp,
      title: "Leadership Opportunities",
      description: "Develop leadership skills by volunteering for committees, organizing events, and mentoring others."
    },
    {
      icon: Shield,
      title: "Professional Credibility",
      description: "Enhance your professional credibility with IEEE membership and demonstrate commitment to excellence."
    }
  ];

  const membershipTypes = [
    {
      type: "Student Member",
      price: "₹500/year",
      features: [
        "Access to IEEE Xplore",
        "Student paper contests",
        "Local chapter participation",
        "Networking events",
        "Career guidance"
      ]
    },
    {
      type: "Professional Member",
      price: "₹2,500/year",
      features: [
        "Full IEEE benefits",
        "Voting rights",
        "Technical committee participation",
        "Professional development",
        "Industry recognition"
      ]
    },
    {
      type: "Senior Member",
      price: "₹2,500/year",
      features: [
        "Enhanced recognition",
        "Mentorship opportunities",
        "Review committee participation",
        "Leadership roles",
        "Industry influence"
      ]
    }
  ];

  return (
    <section id="why-join" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Join IEEE PELS?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits of joining the world's largest professional organization 
            dedicated to advancing technology for humanity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Membership Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((membership, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-primary border-2' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{membership.type}</h4>
                  <div className="text-3xl font-bold text-primary mb-6">{membership.price}</div>
                  <ul className="space-y-3 mb-6">
                    {membership.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${index === 1 ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={index === 1 ? 'default' : 'outline'}
                  >
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-lg mb-6 opacity-90">
            Take the next step in your career and become part of the global IEEE PELS family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Apply for Membership
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;