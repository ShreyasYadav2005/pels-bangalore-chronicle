import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IEEE PELS Bangalore</h3>
            <p className="text-sm opacity-90 mb-4">
              Advancing power electronics technology through education, research, 
              and professional development in the Bangalore region.
            </p>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <Globe className="h-4 w-4" />
              <span>www.ieee-pels-bangalore.org</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#events" className="opacity-90 hover:opacity-100 transition-opacity">Events</a></li>
              <li><a href="#student-chapters" className="opacity-90 hover:opacity-100 transition-opacity">Student Chapters</a></li>
              <li><a href="#why-join" className="opacity-90 hover:opacity-100 transition-opacity">Membership</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Publications</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">IEEE Xplore</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">IEEE Standards</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">IEEE Spectrum</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Technical Committees</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Conference Papers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">pels.bangalore@ieee.org</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">+91-80-2345-6789</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  IEEE Bangalore Section<br />
                  Bangalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 IEEE Power Electronics Society, Bangalore Section. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;