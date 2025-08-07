import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Execom2022 from "./pages/Execom2022";
import Execom2023 from "./pages/Execom2023";
import Execom2024 from "./pages/Execom2024";
import Execom2025 from "./pages/Execom2025";
import StudentChapters from "./pages/StudentChapters";
import WhyJoin from "./pages/WhyJoin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/execom-2022" element={<Execom2022 />} />
          <Route path="/execom-2023" element={<Execom2023 />} />
          <Route path="/execom-2024" element={<Execom2024 />} />
          <Route path="/execom-2025" element={<Execom2025 />} />
          <Route path="/student-chapters" element={<StudentChapters />} />
          <Route path="/why-join" element={<WhyJoin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
