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
        navigate('/en/contact');
    };

    return (
        <Layout>
            <Helmet>
                <title>Personal Event Planning Services | Event Nora</title>
                <meta
                    name="description"
                    content="From birthdays to engagements and baby showers – we design your most special memories with elegant concepts and professional execution."
                />
                <link rel="canonical" href="https://www.eventnora.com/en/services/personal-event" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/kisisel-etkinlik-planlamasi" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Personal Event Planning Services | Event Nora" />
                <meta property="og:description" content="From birthdays to engagements and baby showers – we design your most special memories with elegant concepts and professional execution." />
                <meta property="og:url" content="https://www.eventnora.com/en/services/personal-event" />
                <meta property="og:image" content="https://www.eventnora.com/images/personal_event.png" />
                <meta property="og:site_name" content="Event Nora" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Personal Event Planning Services | Event Nora" />
                <meta name="twitter:description" content="From birthdays to engagements and baby showers – we design your most special memories with elegant concepts and professional execution." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/personal_event.png" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Personal Event Planning",
                        "provider": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "url": "https://www.eventnora.com"
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Istanbul"
                        },
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Families, Friends, Couples"
                        },
                        "description": "From birthdays to engagements and baby showers – we design your most special memories with elegant concepts and professional execution."
                    })}
                </script>
            </Helmet>

            {/* Hero */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        <span aria-hidden="true">🎈</span> Personal Event Planning
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Your most special moments, perfected with professional touches!
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="w-full h-auto">
                <img
                    src={personalImage}
                    alt="Decorated personal celebration venue with custom design elements"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Services */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Our Personal Event Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-textGray">
                        <ContentColumn
                            items={[
                                '🌟 From birthdays to engagements, baby showers to graduations — we plan every detail of your special moments to perfection.',
                                '📍 <strong>Our Service Content:</strong>',
                                '🎉 <strong>Event Planning</strong><br />• Event concept planning<br />• Guest list, invitations, seating<br />• Music, entertainment, and activities<br />• Scheduling & time management',
                                '🎨 <strong>Decoration & Design</strong><br />• Personalized themes<br />• Venue and backdrop decoration<br />• Balloons, flowers, table setups<br />• Photo booth & entrance design',
                                '🍰 <strong>Food & Beverage</strong><br />• Menu planning & catering<br />• Cake & snack tables<br />• Drink bar setups<br />• Special dietary options',
                            ]}
                        />

                        <ContentColumn
                            items={[
                                '📸 <strong>Memory Creation</strong><br />• Photo & video coverage<br />• Drone & live stream<br />• Event aftermovie & gallery<br />• Souvenirs & custom prints',
                                '🎈 <strong>Event Types</strong><br />• Birthday Parties<br />• Engagement & Henna<br />• Baby Shower & Gender Reveal<br />• Graduation & Private Celebrations<br />• Marriage Proposals',
                                '💫 We plan your dream moment — you just enjoy it!<br />📍 Contact us now for details.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        Let’s Make It Unforgettable!
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Contact us today to begin planning your event!
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                        aria-label="Start planning your personal event with Event Nora"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default PersonalEvent;

// Reusable column for structured content
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-6 text-base md:text-lg leading-relaxed">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
