import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import personalImage from '@/images/personal_event.png';

const PersonalEvent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const seoTitle = 'Event Nora - Personal Event Planning Services';
    const seoDescription =
        'From birthdays to engagements and baby showers – we design your most special memories with elegance and professionalism at Event Nora.';

    return (
        <Layout>
            <Helmet>
                {/* SEO Basics */}
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href="https://www.eventnora.com/services/personal-event" />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/services/personal-event" />
                <link
                    rel="alternate"
                    hrefLang="tr"
                    href="https://www.eventnora.com/tr/hizmetler/kisisel-etkinlik-planlamasi"
                />
                <link rel="alternate" hrefLang="x-default" href="https://www.eventnora.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content="https://www.eventnora.com/services/personal-event" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:image" content="https://www.eventnora.com/logo.png" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content="https://www.eventnora.com/logo.png" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Personal Event Planning",
                        "provider": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "url": "https://www.eventnora.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.eventnora.com/logo.png",
                            },
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Istanbul",
                        },
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Families, Friends, Couples",
                        },
                        "description": seoDescription,
                    })}
                </script>
            </Helmet>

            {/* Hero */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🎈 Personal Event Planning
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Your most special moments, perfected with professional touches!
                    </p>
                </div>
            </section>

            {/* Image */}
            <section className="w-full h-auto">
                <img
                    src={personalImage}
                    alt="Decorated personal celebration venue with custom design elements"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
            </section>

            {/* Service Content */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-textGray text-lg leading-relaxed">
                        <ContentColumn
                            content={[
                                '🌟 We design and execute every detail of your private celebrations with heart, care and style.',
                                {
                                    title: '🎉 Event Planning',
                                    items: [
                                        'Theme and concept development',
                                        'Guest list and seating arrangements',
                                        'Music, entertainment, and activity coordination',
                                        'Scheduling and timeline management',
                                    ],
                                },
                                {
                                    title: '🎨 Decoration & Design',
                                    items: [
                                        'Personalized themes and color palettes',
                                        'Balloon & floral arrangements',
                                        'Table setups, backdrops & entrance decoration',
                                        'Photo corner and customized details',
                                    ],
                                },
                            ]}
                        />

                        <ContentColumn
                            content={[
                                {
                                    title: '🍰 Food & Beverage',
                                    items: [
                                        'Menu creation & catering coordination',
                                        'Custom cakes & themed snack tables',
                                        'Beverage stations & bar setups',
                                        'Options for dietary restrictions',
                                    ],
                                },
                                {
                                    title: '📸 Memory Creation',
                                    items: [
                                        'Photography and video coverage',
                                        'Drone and live stream options',
                                        'Personalized souvenirs',
                                        'Aftermovie and gallery creation',
                                    ],
                                },
                                '🎯 From marriage proposals to birthdays, we bring your vision to life with emotion and elegance.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        📍 Let’s turn your dream celebration into reality!
                    </h2>
                    <button
                        onClick={handleContactClick}
                        aria-label="Contact Event Nora for personal event planning"
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default PersonalEvent;

// 🔁 Reusable Column Component
const ContentColumn = ({
                           content,
                       }: {
    content: (string | { title: string; items: string[] })[];
}) => (
    <div className="space-y-6">
        {content.map((block, index) =>
            typeof block === 'string' ? (
                <p key={index} className="text-base md:text-lg whitespace-pre-line">
                    {block}
                </p>
            ) : (
                <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
                    <ul className="space-y-1 pl-4 list-disc marker:text-gold">
                        {block.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )
        )}
    </div>
);
