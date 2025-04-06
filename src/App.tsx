import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ HelmetProvider eklendi

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";
import EngagementWedding from "./pages/servicespages/EngagementWeddingOrganization";
import ServiceDetail from "./pages/servicespages/ServiceDetail";
import CorporateEvents from "./pages/servicespages/CorporateEvents";
import BirthdaySpecialDay from "./pages/servicespages/BirthdaySpecialDay";
import FestivalEvent from "./pages/servicespages/FestivalEvent";
import CongressFair from "./pages/servicespages/CongressFair";
import PersonalEvent from "./pages/servicespages/PersonalEvent";
import SocialResponsibility from "./pages/servicespages/SocialResponsibility";
import CreativeDesigns from "./pages/servicespages/CreativeDesigns";
import TechnicalSupport from "./pages/servicespages/TechnicalSupport";
import Consultancy from "./pages/servicespages/Consultancy";

const queryClient = new QueryClient();

// WhatsApp Floating Button Component
const WhatsAppFloat = () => {
  const phoneNumber = "+905327701208";
  const message =
      "📩 Merhaba, EventNora Sizden organizasyon hizmetleri hakkında bilgi almak istiyorum.";

  return (
      <div className="fixed bottom-6 right-6 z-50">
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
  );
};

const App = () => (
    <HelmetProvider> {/* ✅ HelmetProvider eklendi */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <WhatsAppFloat />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/engagement-wedding-organization" element={<EngagementWedding />} />
                <Route path="/services/corporate-events" element={<CorporateEvents />} />
                <Route path="/services/birthday-special-day" element={<BirthdaySpecialDay />} />
                <Route path="/services/festival-event" element={<FestivalEvent />} />
                <Route path="/services/congress-fair" element={<CongressFair />} />
                <Route path="/services/personal-event" element={<PersonalEvent />} />
                <Route path="/services/social-responsibility" element={<SocialResponsibility />} />
                <Route path="/services/creative-designs" element={<CreativeDesigns />} />
                <Route path="/services/technical-support" element={<TechnicalSupport />} />
                <Route path="/services/consultancy" element={<Consultancy />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
);

export default App;
