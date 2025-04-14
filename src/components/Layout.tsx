import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async'; // Eklendi: Helmet

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            {/* ✅ Global SEO ve Schema bilgileri */}
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="author" content="Event Nora" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Site adı → Google aramalarında "Event Nora" olarak gösterilsin */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com",
                    })}
                </script>

                {/* Organizasyon ve logo bilgisi */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com",
                        "logo": "https://www.eventnora.com/logo.png", // ✅ Bu logo erişilebilir olmalı
                    })}
                </script>
            </Helmet>

            <Navigation />
            <main className="flex-grow pt-24 md:pt-28">{children}</main>
            <Footer />
            <Toaster />

            <div className="fixed bottom-8 left-8 text-xs text-gold/40 pointer-events-none"></div>
        </div>
    );
};

export default Layout;
