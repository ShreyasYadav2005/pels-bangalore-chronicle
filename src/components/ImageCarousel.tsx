import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  // Placeholder images - replace with actual PELS images
  const images = [
    "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
    "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
    "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
    "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
    "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
    "/lovable-uploads/7fbda470-00ed-4e15-9efb-a0b5fd8a078b.png",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img 
                  src={image} 
                  alt={`PELS Event ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 sm:-left-4" />
        <CarouselNext className="right-0 sm:-right-4" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;