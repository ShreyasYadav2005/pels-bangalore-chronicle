import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/events", label: "EVENTS" },
    { path: "/student-chapters", label: "STUDENT BRANCH CHAPTERS" },
    { path: "/why-join", label: "WHY JOIN IEEE PELS?" },
  ];

  const execomYears = [
    { path: "/excom-2022", label: "EXCOM 2022" },
    { path: "/excom-2023", label: "EXCOM 2023" },
    { path: "/excom-2024", label: "EXCOM 2024" },
    { path: "/excom-2025", label: "EXCOM 2025" },
  ];

  return (
    <nav className="w-full text-white sticky top-0 z-50" style={{ backgroundColor: 'hsl(195 100% 39%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start space-x-8 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium hover:text-white/80 transition-colors px-2 py-1 rounded ${
                currentPath === item.path ? "bg-white/10" : ""
              }`}
            >
              {item.label}
            </Link>
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
                <DropdownMenuItem key={year.path} asChild>
                  <Link
                    to={year.path}
                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground w-full"
                  >
                    {year.label}
                  </Link>
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