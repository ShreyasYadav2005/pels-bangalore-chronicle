import ImageCarousel from "@/components/ImageCarousel";

const HomeSection = () => {
  return (
    <section id="home" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Image Carousel */}
        <div className="mb-16">
          <ImageCarousel />
        </div>

        {/* Content Section based on uploaded image */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Power Electronics Society</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The <strong>Power Electronics Society</strong> is one of the fastest-growing technical societies of the Institute of Electrical and 
              Electronics Engineers (IEEE). For over 20 years, PELS has facilitated and guided the development and innovation of 
              power electronics technology. This technology encompasses the effective use of electronic components, the application 
              of circuit theory and design techniques, and the development of analytical tools toward efficient conversion, control, 
              and condition of electric power. Our members include preeminent researchers, practitioners, and distinguished award 
              winners. IEEE PELS publishes the IEEE Transactions on Power Electronics, a top-referenced journal among all IEEE 
              publications.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">The Power Electronics Society is dedicated to</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 italic">
              Keeping its members around the globe up to date on state-of-the-art technological developments and advances in 
              power electronics research and upholding the vital scientific and educational aspects of power electronics and its 
              applications
            </p>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">IEEE Power Electronics Society Bangalore Chapter</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                IEEE PELS Bengaluru Chapter got its official approval on 13th March 2017. The Geo-code is CH10805 with 22 Senior Members, 23 
                Student Members, 28 Regular Members, and 73 PELS Members under the IEEE Bangalore Chapter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Inauguration Ceremony Was Held On 21st May 2017 in The Department of Electrical Engineering at IISC Bangalore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;