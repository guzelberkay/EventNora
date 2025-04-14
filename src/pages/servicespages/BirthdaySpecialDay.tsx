import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import birthdayImage from '@/images/birthday_event.png';

const BirthdaySpecialDay = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/en/contact');
    };

    return (
        <Layout>
            <Helmet>
                <title>Birthday & Special Day Organization | Event Nora</title>
                <meta
                    name="description"
                    content="From birthdays to anniversaries, we plan every detail of your special day with elegance and joy."
                />
                <link rel="canonical" href="https://www.eventnora.com/en/services/birthday-special-day" />
                <link
                    rel="alternate"
                    hrefLang="tr"
                    href="https://www.eventnora.com/tr/hizmetler/dogum-gunu-ozel-gun"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Birthday & Special Day Organization | Event Nora" />
                <meta
                    property="og:description"
                    content="From birthdays to anniversaries, we plan every detail of your special day with elegance and joy."
                />
                <meta property="og:url" content="https://www.eventnora.com/en/services/birthday-special-day" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:image" content="https://www.eventnora.com/logo.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Birthday & Special Day Organization | Event Nora" />
                <meta
                    name="twitter:description"
                    content="From birthdays to anniversaries, we plan every detail of your special day with elegance and joy."
                />
                <meta name="twitter:image" content="https://www.eventnora.com/logo.png" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Birthday & Special Day Organization",
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
                        "description":
                            "From birthdays to anniversaries, we plan every detail of your special day with elegance and joy.",
                    })}
                </script>
            </Helmet>

            {/* Hero */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center">
                    <h1 className="heading-1 text-gold mb-4">
                        Birthday and Special Day Organization
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        Your unforgettable celebration starts here
                    </p>
                </div>
            </section>

            {/* Image */}
            <section className="w-full h-auto">
                <img
                    src={birthdayImage}
                    alt="Birthday celebration setup by Event Nora"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Service Details */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        Birthday & Special Day Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                        <div className="space-y-4">
                            <p>🎈 <strong>We Create the Celebration You Dream of!</strong></p>
                            <p><strong>No more ordinary celebrations!</strong> We plan every detail for birthdays, anniversaries, baby showers, and more.</p>
                            <p>📍 <strong>What We Offer:</strong></p>
                            <ul className="list-disc list-inside">
                                <li>🎉 <strong>Event Themes:</strong> Custom concepts for kids, teens & adults</li>
                                <li>Decor: Banners, age boards, balloons, themed tables</li>
                                <li>🎂 <strong>Treats:</strong> Cake, cupcakes, welcome snacks, printed candies</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <ul className="list-disc list-inside">
                                <li>📸 <strong>Entertainment:</strong> DJs, clowns, photo corners, memory booths</li>
                                <li>🪄 <strong>Other Events:</strong> Gender reveals, anniversaries, graduations</li>
                                <li>🎁 Personalized surprises & return gifts</li>
                            </ul>
                            <p>
                                🎈 <strong>Every moment deserves a celebration</strong><br />
                                Let’s plan yours today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        Ready to plan your perfect celebration?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Let us handle the details while you enjoy your special day.
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition"
                        aria-label="Contact Event Nora"
                    >
                        Start Planning
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default BirthdaySpecialDay;
