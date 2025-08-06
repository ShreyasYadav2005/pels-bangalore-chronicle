import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const pastEvents = [
    {
      id: 1,
      title: "EV PowerTech 2023",
      date: "November 15, 2023",
      location: "IISc Bangalore",
      attendees: "250",
      type: "Conference",
      description: "International conference on electric vehicle power technologies and charging infrastructure.",
      slug: "ev-powertech-2023"
    },
    {
      id: 2,
      title: "Bangalore e-Mobility Meet",
      date: "September 22, 2023",
      location: "IIIT Bangalore",
      attendees: "180",
      type: "Workshop",
      description: "Industry-academia collaboration workshop on sustainable e-mobility solutions for smart cities.",
      slug: "bangalore-e-mobility-meet"
    },
    {
      id: 3,
      title: "Smart Grid Conclave",
      date: "August 10, 2023",
      location: "IIT Bangalore",
      attendees: "300",
      type: "Symposium",
      description: "Annual symposium on smart grid technologies, renewable energy integration, and grid modernization.",
      slug: "smart-grid-conclave"
    }
  ];

  return (
    <section id="events" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Previous Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our past technical events, workshops, and conferences that have contributed 
            to the advancement of power electronics in the region.
          </p>
        </div>

        {/* Previous Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <Card 
              key={event.id} 
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{event.type}</Badge>
                </div>
                <CardTitle className="text-lg">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>
                
                <Link to={`/events/${event.slug}`}>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;