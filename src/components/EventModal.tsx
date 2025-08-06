import { useState } from "react";
import { X, Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EventModalProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    fullDescription: string;
    images: string[];
    time?: string;
    attendees?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{event.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Event Images */}
            <div className="grid grid-cols-2 gap-4">
              {event.images.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${event.title} image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{event.date}</span>
              </div>
              {event.time && (
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
              )}
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.location}</span>
              </div>
              {event.attendees && (
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.attendees} Attendees</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {event.fullDescription}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Enlargement Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/90">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="relative aspect-video">
              <img 
                src={selectedImage} 
                alt="Enlarged event image"
                className="w-full h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default EventModal;