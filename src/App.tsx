import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Excom2022 from "./pages/Excom2022";
import Excom2023 from "./pages/Excom2023";
import Excom2024 from "./pages/Excom2024";
import Excom2025 from "./pages/Excom2025";
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
          <Route path="/excom-2022" element={<Excom2022 />} />
          <Route path="/excom-2023" element={<Excom2023 />} />
          <Route path="/excom-2024" element={<Excom2024 />} />
          <Route path="/excom-2025" element={<Excom2025 />} />
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
