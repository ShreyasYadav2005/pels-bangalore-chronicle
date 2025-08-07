import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("previous");

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

  // TODO: Add upcoming events here when they become available
  const upcomingEvents = [
    // Example structure for future events:
    // {
    //   id: 4,
    //   title: "Future Energy Summit 2024",
    //   date: "March 15, 2024",
    //   location: "IISC Bangalore",
    //   attendees: "TBD",
    //   type: "Conference",
    //   description: "Next generation energy technologies and sustainable solutions.",
    //   slug: "future-energy-summit-2024"
    // }
  ];

  const renderEventCards = (events) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {events.map((event) => (
        <Card 
          key={event.id} 
          className="hover:shadow-lg transition-all duration-300 hover:scale-105 group"
        >
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="secondary" className="text-xs">{event.type}</Badge>
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {event.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {event.description}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.attendees} Attendees</span>
              </div>
            </div>
            
            <Link to={`/events/${event.slug}`} className="block">
              <Button className="w-full transition-all duration-200" variant="outline">
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="events" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            IEEE PELS Events
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our technical events, workshops, and conferences advancing power electronics in the region.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
            <TabsTrigger 
              value="previous" 
              className="transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Previous Events
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Upcoming Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="previous" className="mt-6 animate-fade-in">
            {pastEvents.length > 0 ? (
              renderEventCards(pastEvents)
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No previous events available.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6 animate-fade-in">
            {upcomingEvents.length > 0 ? (
              renderEventCards(upcomingEvents)
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No upcoming events scheduled at the moment.
                </p>
                <p className="text-sm text-muted-foreground">
                  Check back soon for announcements of future events.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EventsSection;