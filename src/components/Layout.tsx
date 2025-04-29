import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import Canonical from './Canonical'; // ✅ Eklendi

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Global SEO ve Schema bilgileri */}
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="author" content="Event Nora" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com",
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com",
                        "logo": "https://www.eventnora.com/logo.png",
                    })}
                </script>
            </Helmet>

            {/* Canonical ve Hreflang Otomasyonu */}
            <Canonical /> {/* ✅ Burası eklendi */}

            <Navigation />
            <main className="flex-grow pt-24 md:pt-28">{children}</main>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Layout;
