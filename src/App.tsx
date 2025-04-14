import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

import { LanguageProvider } from "./contexts/LanguageContext";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";

// EN Services
import EngagementWedding from "./pages/servicespages/EngagementWeddingOrganization";
import CorporateEvents from "./pages/servicespages/CorporateEvents";
import BirthdaySpecialDay from "./pages/servicespages/BirthdaySpecialDay";
import FestivalEvent from "./pages/servicespages/FestivalEvent";
import CongressFair from "./pages/servicespages/CongressFair";
import PersonalEvent from "./pages/servicespages/PersonalEvent";
import SocialResponsibility from "./pages/servicespages/SocialResponsibility";
import CreativeDesigns from "./pages/servicespages/CreativeDesigns";
import TechnicalSupport from "./pages/servicespages/TechnicalSupport";
import Consultancy from "./pages/servicespages/Consultancy";
import ServiceDetail from "./pages/servicespages/ServiceDetail";

// TR Pages
import TurkishIndex from "./pages/tr/index";
import Hakkimizda from "./pages/tr/hakkimizda";
import Hizmetler from "./pages/tr/hizmetler";
import Iletisim from "./pages/tr/iletisim";
import Sss from "./pages/tr/sss";
import BlogTr from "./pages/tr/blog";
import DogumGunuOzelGun from "./pages/servicespages/tr/DogumGunuOzelGun";
import KongreFuarTr from "@/pages/servicespages/tr/KongreFuarTr.tsx";
import DanismanlikTr from "@/pages/servicespages/tr/DanismanlikTr.tsx";
import KurumsalEtkinlikler from "@/pages/servicespages/tr/KurumsalEtkinlikler.tsx";
import YaraticiTasarimlar from "@/pages/servicespages/tr/YaraticiTasarimlar.tsx";
import NisanDugun from "@/pages/servicespages/tr/NisanDugun.tsx";
import FestivalEtkinligi from "@/pages/servicespages/tr/FestivalEtkinligi.tsx";
import KisiselEtkinlik from "@/pages/servicespages/tr/KisiselEtkinlik.tsx";
import SosyalSorumluluk from "@/pages/servicespages/tr/SosyalSorumluluk.tsx";
import TeknikDestek from "@/pages/servicespages/tr/TeknikDestek.tsx";
import Hizmetlerimiz from "@/pages/Hizmetlerimiz.tsx";

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

const queryClient = new QueryClient();

const App = () => (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <WhatsAppFloat />
              <Routes>
                {/* REDIRECT ROOT TO /en */}
                <Route path="/" element={<Navigate to="/en" />} />

                {/* ENGLISH ROUTES */}
                <Route path="/en" element={<Index />} />
                <Route path="/en/about" element={<About />} />
                <Route path="/en/services" element={<Services />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="/en/faq" element={<FAQ />} />
                <Route path="/en/blog" element={<Blog />} />
                <Route path="/en/blog/:slug" element={<BlogPost />} /> {/* ✅ FIXED */}

                {/* EN Service Detail Pages */}
                <Route path="/en/services/engagement-wedding-organization" element={<EngagementWedding />} />
                <Route path="/en/services/corporate-events" element={<CorporateEvents />} />
                <Route path="/en/services/birthday-special-day" element={<BirthdaySpecialDay />} />
                <Route path="/en/services/festival-event" element={<FestivalEvent />} />
                <Route path="/en/services/congress-fair" element={<CongressFair />} />
                <Route path="/en/services/personal-event" element={<PersonalEvent />} />
                <Route path="/en/services/social-responsibility" element={<SocialResponsibility />} />
                <Route path="/en/services/creative-designs" element={<CreativeDesigns />} />
                <Route path="/en/services/technical-support" element={<TechnicalSupport />} />
                <Route path="/en/services/consultancy" element={<Consultancy />} />
                <Route path="/en/services/:slug" element={<ServiceDetail />} />

                {/* TURKISH ROUTES */}
                <Route path="/tr" element={<TurkishIndex />} />
                <Route path="/tr/hakkimizda" element={<Hakkimizda />} />
                <Route path="/tr/hizmetler" element={<Hizmetlerimiz />} />
                <Route path="/tr/iletisim" element={<Iletisim />} />
                <Route path="/tr/sss" element={<Sss />} />
                <Route path="/tr/blog" element={<BlogTr />} />
                <Route path="/tr/blog/:slug" element={<BlogPost />} /> {/* ✅ FIXED */}

                {/* TR Service Detail Pages */}
                <Route path="/tr/hizmetler/nisan-dugun-organizasyonu" element={<NisanDugun />} />
                <Route path="/tr/hizmetler/kurumsal-etkinlikler" element={<KurumsalEtkinlikler />} />
                <Route path="/tr/hizmetler/dogum-gunu-ozel-gun" element={<DogumGunuOzelGun />} />
                <Route path="/tr/hizmetler/festival-etkinlik-organizasyonu" element={<FestivalEtkinligi />} />
                <Route path="/tr/hizmetler/kongre-fuar-organizasyonu" element={<KongreFuarTr />} />
                <Route path="/tr/hizmetler/kisisel-etkinlik-planlamasi" element={<KisiselEtkinlik />} />
                <Route path="/tr/hizmetler/sosyal-sorumluluk-projeleri" element={<SosyalSorumluluk />} />
                <Route path="/tr/hizmetler/yaratici-tasarim-susleme" element={<YaraticiTasarimlar />} />
                <Route path="/tr/hizmetler/teknik-lojistik-destek" element={<TeknikDestek />} />
                <Route path="/tr/hizmetler/danismanlik-hizmetleri" element={<DanismanlikTr />} />
                <Route path="/tr/hizmetler/:slug" element={<ServiceDetail />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
);

export default App;
