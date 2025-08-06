import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import EventModal from "@/components/EventModal";

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const pastEvents = [
    {
      id: 1,
      title: "EV PowerTech 2023",
      date: "November 15, 2023",
      location: "IISc Bangalore",
      attendees: "250",
      type: "Conference",
      description: "International conference on electric vehicle power technologies and charging infrastructure.",
      fullDescription: "The EV PowerTech 2023 conference brought together leading researchers, industry experts, and academia to discuss the latest developments in electric vehicle power technologies. The event featured keynote speeches, technical sessions, and industry exhibitions covering topics such as battery management systems, wireless charging, fast charging infrastructure, and power electronics for EVs. Participants included representatives from major automotive companies, battery manufacturers, and research institutions.",
      images: [
        "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
        "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png"
      ]
    },
    {
      id: 2,
      title: "Bangalore e-Mobility Meet",
      date: "September 22, 2023",
      location: "IIIT Bangalore",
      attendees: "180",
      type: "Workshop",
      description: "Industry-academia collaboration workshop on sustainable e-mobility solutions for smart cities.",
      fullDescription: "The Bangalore e-Mobility Meet was a collaborative platform bringing together industry leaders, academic researchers, and government officials to discuss sustainable e-mobility solutions for smart cities. The workshop featured panel discussions on policy frameworks, technical presentations on charging infrastructure, and interactive sessions on future mobility trends. Key topics included autonomous electric vehicles, smart charging networks, and integration of renewable energy sources with e-mobility ecosystems.",
      images: [
        "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
        "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png"
      ]
    },
    {
      id: 3,
      title: "Smart Grid Conclave",
      date: "August 10, 2023",
      location: "IIT Bangalore",
      attendees: "300",
      type: "Symposium",
      description: "Annual symposium on smart grid technologies, renewable energy integration, and grid modernization.",
      fullDescription: "The Smart Grid Conclave 2023 was the premier event focusing on smart grid technologies and their role in India's energy transition. The symposium covered topics including grid modernization, demand response systems, microgrids, energy storage solutions, and cybersecurity in smart grids. Distinguished speakers from utilities, technology companies, and research institutions shared insights on implementing smart grid solutions, policy challenges, and future trends in grid technology. The event also featured live demonstrations of smart grid equipment and networking sessions for industry professionals.",
      images: [
        "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
        "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png"
      ]
    }
  ];

  return (
    <>
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
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedEvent(event)}
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
                  
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

export default EventsSection;