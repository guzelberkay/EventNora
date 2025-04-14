import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import birthdayImage from '@/images/birthday_event.png';

const BirthdaySpecialDay = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
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
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/dogum-gunu-ozel-gun" />

                {/* Open Graph (Facebook / LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Birthday & Special Day Organization | Event Nora" />
                <meta property="og:description" content="From birthdays to anniversaries, we plan every detail of your special day with elegance and joy." />
                <meta property="og:url" content="https://www.eventnora.com/en/services/birthday-special-day" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:image" content="https://www.eventnora.com/logo.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Birthday & Special Day Organization | Event Nora" />
                <meta name="twitter:description" content="From birthdays to anniversaries, we plan every detail of your special day with elegance and joy." />
                <meta name="twitter:image" content="https://www.eventnora.com/logo.png" />

                {/* Structured Data – WebSite */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com"
                    })}
                </script>

                {/* Structured Data – Organization */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.eventnora.com/logo.png"
                        }
                    })}
                </script>

                {/* Structured Data – Service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Birthday & Special Day Organization",
                        "provider": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "url": "https://www.eventnora.com"
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Istanbul"
                        },
                        "description": "From birthdays to anniversaries, we plan every detail of your special day with elegance and joy."
                    })}
                </script>
            </Helmet>

            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="heading-1 text-gold text-4xl font-bold mb-4">
                            Birthday and Special Day Organization
                        </h1>
                        <p className="text-gold-light/80 text-lg">
                            Your unforgettable celebration starts here
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={birthdayImage}
                    alt="Birthday Event"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-black mb-10 text-center">
                            Birthday & Special Day Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                            <div className="space-y-4">
                                <p>🎈 <strong>We Create the Celebration You Dream of!</strong></p>
                                <p><strong>Say goodbye to ordinary celebrations!</strong> We plan every detail for birthdays, anniversaries, baby showers, and more.</p>
                                <p>📍 <strong>What We Offer:</strong></p>
                                <p>🎉 <strong>Event Themes</strong><br />
                                    • Concepts for kids, teens, and adults (Princess, Superhero, Safari, Boho, Retro, etc.)<br />
                                    • Color-matched table and chair decorations<br />
                                    • Custom banners, name signs, age boards<br />
                                    • Balloon designs, backdrop, and tag elements</p>
                                <p>🎂 <strong>Delicious & Elegant Treats</strong><br />
                                    • Birthday cake, cupcakes, dessert buffets<br />
                                    • Snack and drink stands<br />
                                    • Welcome cocktails & appetizers<br />
                                    • Personalized printed candies & packaging</p>
                            </div>
                            <div className="space-y-4">
                                <p>📸 <strong>Entertainment & Memory Areas</strong><br />
                                    • Memory corners, photo booths<br />
                                    • Live music, DJs or clowns/animators<br />
                                    • Play zones or face painting for children<br />
                                    • Personalized gifts & surprises</p>
                                <p>🪄 <strong>Other Special Days</strong><br />
                                    • Baby showers & gender reveals<br />
                                    • Anniversary & Valentine’s Day surprises<br />
                                    • Graduation parties<br />
                                    • Custom surprise parties</p>
                                <p>🎈 <strong>We’re Here for Every Moment Worth Celebrating!</strong><br />
                                    🕯️ Imagine, we plan, we celebrate together!<br />
                                    📍 Contact us for detailed info and booking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="section bg-black">
                <div className="container-custom text-center">
                    <h2 className="heading-2 text-gold mb-4">
                        Ready to plan your perfect celebration?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Let us handle the details while you enjoy your special day
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        Start Planning
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default BirthdaySpecialDay;
