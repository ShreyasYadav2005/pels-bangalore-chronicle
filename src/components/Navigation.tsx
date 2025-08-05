import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "events", label: "EVENTS" },
    { id: "student-chapters", label: "STUDENT BRANCH CHAPTERS" },
    { id: "why-join", label: "WHY JOIN IEEE PELS?" },
  ];

  const execomYears = [
    { id: "excom-2022", label: "EXCOM 2022" },
    { id: "excom-2023", label: "EXCOM 2023" },
    { id: "excom-2024", label: "EXCOM 2024" },
    { id: "excom-2025", label: "EXCOM 2025" },
  ];

  return (
    <nav className="w-full text-white sticky top-0 z-50" style={{ backgroundColor: 'hsl(195 100% 39%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start space-x-8 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium hover:text-accent transition-colors px-2 py-1 rounded ${
                activeSection === item.id ? "bg-white/10" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* EXCOM Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-white hover:text-white hover:bg-white/10 font-medium text-sm"
              >
                EXCOM-PELS
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-border shadow-lg">
              {execomYears.map((year) => (
                <DropdownMenuItem
                  key={year.id}
                  onClick={() => onNavigate(year.id)}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                >
                  {year.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;