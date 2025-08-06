import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchModal from "@/components/SearchModal";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const topNavLinks = [
    "IEEE.org",
    "IEEE Xplore Digital Library", 
    "IEEE Standards",
    "IEEE Spectrum",
    "More Sites"
  ];

  return (
    <header className="w-full bg-white border-b border-border">
      {/* Top Navigation */}
      <div className="w-full py-2" style={{ backgroundColor: 'hsl(195 100% 39%)' }}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-start space-x-6">
            {topNavLinks.map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: IEEE PELS Logo Placeholder */}
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base">PELS</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-primary">
                IEEE PELS Bangalore
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">Power Electronics Society</p>
            </div>
          </div>

          {/* Right: Search and IEEE Logo */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <div className="w-20 h-16 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">IEEE</span>
            </div>
          </div>
        </div>
      </div>
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
};

export default Header;