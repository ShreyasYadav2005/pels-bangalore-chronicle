import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";

const EventDetails = () => {
  const { eventId } = useParams();

  const events = {
    "ev-powertech-2023": {
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
    "bangalore-e-mobility-meet": {
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
    "smart-grid-conclave": {
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
  };

  const event = events[eventId as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested event could not be found.</p>
            <Link to="/events">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link to="/events">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Previous Events
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {event.type}
            </span>
            <h1 className="text-4xl font-bold text-primary mb-4">{event.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{event.attendees} Attendees</span>
              </div>
            </div>
          </div>

          {/* Event Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {event.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${event.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => window.open(image, '_blank')}
                />
              </div>
            ))}
          </div>

          {/* Event Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">{event.description}</p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Event Details</h3>
              <p className="text-foreground leading-relaxed">{event.fullDescription}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;