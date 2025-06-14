import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

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
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import Iletisim from "./pages/tr/iletisim";
import Sss from "./pages/tr/sss";
import BlogTr from "./pages/tr/blog";

// TR Services
import DogumGunuOzelGun from "@/pages/servicespages/tr/DogumGunuOzelGun";
import KongreFuarTr from "@/pages/servicespages/tr/KongreFuarTr";
import DanismanlikTr from "@/pages/servicespages/tr/DanismanlikTr";
import KurumsalEtkinlikler from "@/pages/servicespages/tr/KurumsalEtkinlikler";
import YaraticiTasarimlar from "@/pages/servicespages/tr/YaraticiTasarimlar";
import NisanDugun from "@/pages/servicespages/tr/NisanDugun";
import FestivalEtkinligi from "@/pages/servicespages/tr/FestivalEtkinligi";
import KisiselEtkinlik from "@/pages/servicespages/tr/KisiselEtkinlik";
import SosyalSorumluluk from "@/pages/servicespages/tr/SosyalSorumluluk";
import TeknikDestek from "@/pages/servicespages/tr/TeknikDestek";

// 🟢 WhatsApp Button
const WhatsAppFloat = () => {
  const { language } = useLanguage();
  const phoneNumber = "+905327701208";
  const message =
      language === "tr"
          ? "📩 Merhaba, EventNora'dan organizasyon hizmetleri hakkında bilgi almak istiyorum."
          : "📩 Hi, I'd like to get information about event services from EventNora.";

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
            <BrowserRouter>
              <WhatsAppFloat />
              <Routes>
                {/* ✅ EN ROUTES — now under `/` */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* EN Services */}
                <Route path="/services/:slug" element={<ServiceDetail />} />
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

                {/* 🇹🇷 TR ROUTES under `/tr` */}
                <Route path="/tr" element={<TurkishIndex />} />
                <Route path="/tr/hakkimizda" element={<Hakkimizda />} />
                <Route path="/tr/hizmetler" element={<Hizmetlerimiz />} />
                <Route path="/tr/iletisim" element={<Iletisim />} />
                <Route path="/tr/sss" element={<Sss />} />
                <Route path="/tr/blog" element={<BlogTr />} />
                <Route path="/tr/blog/:slug" element={<BlogPost />} />

                {/* TR Services */}
                <Route path="/tr/hizmetler/:slug" element={<ServiceDetail />} />
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

                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
);

export default App;
