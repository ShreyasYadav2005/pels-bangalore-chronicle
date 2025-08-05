import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Power Electronics Conference 2024",
      date: "March 15-17, 2024",
      location: "IISc Bangalore",
      time: "9:00 AM - 5:00 PM",
      attendees: "200+",
      type: "Conference",
      description: "Annual conference featuring latest research in power electronics and renewable energy systems."
    },
    {
      id: 2,
      title: "Workshop on Electric Vehicle Technologies",
      date: "April 8, 2024",
      location: "IISC Bangalore",
      time: "10:00 AM - 4:00 PM",
      attendees: "100+",
      type: "Workshop",
      description: "Hands-on workshop covering EV charging systems, battery management, and power conversion."
    },
    {
      id: 3,
      title: "IEEE PELS Distinguished Lecture",
      date: "April 22, 2024",
      location: "Virtual Event",
      time: "3:00 PM - 5:00 PM",
      attendees: "150+",
      type: "Lecture",
      description: "Distinguished lecture on Advanced Power Converter Topologies by Dr. John Smith."
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Smart Grid Technologies Symposium",
      date: "January 20, 2024",
      location: "IIT Bangalore",
      attendees: "180",
      type: "Symposium"
    },
    {
      id: 5,
      title: "Student Paper Contest 2023",
      date: "December 15, 2023",
      location: "PES University",
      attendees: "75",
      type: "Contest"
    },
    {
      id: 6,
      title: "Industry-Academia Meet",
      date: "November 30, 2023",
      location: "Bangalore Tech Park",
      attendees: "120",
      type: "Networking"
    }
  ];

  return (
    <section id="events" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our technical events, workshops, and networking sessions to stay updated 
            with the latest trends in power electronics.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
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
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} Expected</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="opacity-75 hover:opacity-100 transition-opacity">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{event.type}</Badge>
                  <h4 className="font-semibold text-foreground mb-3">{event.title}</h4>
                  <div className="space-y-2">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;