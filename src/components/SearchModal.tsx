import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Mock search data - replace with actual search functionality
  const searchData = [
    { type: "Page", title: "Home", content: "IEEE PELS Bangalore homepage", url: "/" },
    { type: "Page", title: "Previous Events", content: "View our past events and conferences", url: "/events" },
    { type: "Page", title: "Why Join IEEE PELS", content: "Benefits of joining IEEE PELS", url: "/why-join" },
    { type: "Event", title: "EV PowerTech 2023", content: "Electric vehicle power technologies conference", url: "/events" },
    { type: "Event", title: "Smart Grid Conclave", content: "Smart grid technologies symposium", url: "/events" },
    { type: "Content", title: "Power Electronics Society", content: "Learn about IEEE Power Electronics Society", url: "/" },
    { type: "Content", title: "EXCOM Members", content: "Executive committee members information", url: "/excom-2025" },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[70vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search IEEE PELS Bangalore
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Input
            placeholder="Search for pages, events, or content..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
            className="w-full"
          />
          
          {searchResults.length > 0 && (
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              <p className="text-sm text-muted-foreground">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
              </p>
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => {
                    window.location.href = result.url;
                    onClose();
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {result.type}
                        </span>
                        <h4 className="font-medium text-foreground">{result.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{result.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No results found for "{searchQuery}"</p>
              <p className="text-sm">Try searching for events, pages, or content.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;