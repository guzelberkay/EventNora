import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useEffect(() => {
    console.error("404 Error: User attempted to access:", location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const pageTitle = isEnglish
      ? "404 - Page Not Found | Event Nora"
      : "404 - Sayfa Bulunamadı | Event Nora";

  const pageDescription = isEnglish
      ? "The page you are looking for does not exist or has been moved."
      : "Aradığınız sayfa bulunamadı ya da taşınmış olabilir.";

  const homeLink = `/${language}`;

  return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={`https://www.eventnora.com/404`} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.eventnora.com/404`} />
          <meta property="og:image" content="https://www.eventnora.com/logo.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.eventnora.com/logo.png" />
        </Helmet>

        <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-6xl font-bold text-gold mb-6">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              {isEnglish ? "Oops! Page not found" : "Sayfa Bulunamadı"}
            </p>
            <p className="text-gray-600 mb-8">
              {isEnglish
                  ? "The page you’re looking for doesn’t exist or might have been moved."
                  : "Aradığınız sayfa mevcut değil ya da taşınmış olabilir."}
            </p>
            <a
                href={homeLink}
                className="inline-block bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded transition-all font-medium"
            >
              {isEnglish ? "Go to Homepage" : "Anasayfaya Dön"}
            </a>
          </div>
        </section>
      </Layout>
  );
};

export default NotFound;
