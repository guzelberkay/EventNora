import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import weddingImage from '@/images/wedding_event.png';

const EngagementWedding = () => {
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
                <title>Engagement & Wedding Organization Services | Event Nora</title>
                <meta
                    name="description"
                    content="Turn your dream wedding into reality with Event Nora’s concept design, decoration, music, catering, and photography services."
                />
                <link rel="canonical" href="https://www.eventnora.com/en/services/engagement-wedding-organization" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/nisan-dugun-organizasyonu" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Engagement & Wedding Organization Services | Event Nora" />
                <meta property="og:description" content="Turn your dream wedding into reality with Event Nora’s concept design, decoration, music, catering, and photography services." />
                <meta property="og:url" content="https://www.eventnora.com/en/services/engagement-wedding-organization" />
                <meta property="og:image" content="https://www.eventnora.com/images/wedding_event.png" />
                <meta property="og:site_name" content="Event Nora" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Engagement & Wedding Organization Services | Event Nora" />
                <meta name="twitter:description" content="Turn your dream wedding into reality with Event Nora’s concept design, decoration, music, catering, and photography services." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/wedding_event.png" />

                {/* Schema.org - WebSite */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com"
                    })}
                </script>

                {/* Schema.org - Organization */}
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

                {/* Schema.org - Service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Engagement & Wedding Organization",
                        "provider": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "url": "https://www.eventnora.com"
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Istanbul"
                        },
                        "description": "Turn your dream wedding into reality with Event Nora’s concept design, decoration, music, catering, and photography services."
                    })}
                </script>
            </Helmet>


            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">Engagement and Wedding Organization</h1>
                    <p className="text-gold-light/80 text-lg">Your perfect wedding day starts here</p>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={weddingImage}
                    alt="Wedding Event Decoration"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">About Our Wedding Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                        <ContentColumn
                            items={[
                                '🎉 <strong>We’ve thought of everything for your dream engagement and wedding!</strong> 💍✨',
                                '<strong>Make your special days unforgettable with our professional event planning service!</strong>',
                                '📍 <strong>Engagement & Wedding Service Details:</strong>',
                                '🌸 <strong>Concept Design & Decoration</strong><br />• Table and chair decorations matching your dream theme<br />• Custom floral arrangements (live or artificial)<br />• Backdrops, signage, lighting<br />• Aisle and ceremony setups<br />• Themes: modern, rustic, boho, romantic, vintage',
                                '🎶 <strong>Music & Entertainment</strong><br />• Live band or DJ<br />• Sound & lighting setup<br />• Optional first dance choreography',
                                '📷 <strong>Photography & Videography</strong><br />• Pre-shoot & event-day shooting<br />• Drone shots<br />• Memory book & memory corner',
                            ]}
                        />

                        <ContentColumn
                            items={[
                                '🍽️ <strong>Catering and Treats</strong><br />• Welcome cocktail<br />• Cake & dessert buffet<br />• Menu alternatives<br />• Table service with staff',
                                '🪄 <strong>Additional Services</strong><br />• Groom’s coffee setup<br />• Bridesmaid accessories<br />• Custom favors<br />• Personalized invitations<br />• Full-day coordination support',
                                '💫 <strong>Enjoy your special day — we’ll handle every detail.</strong><br />📍 Contact us for more info and reservations.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">Ready to plan your dream event?</h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Contact us now for a flawless engagement or wedding experience.
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        Get a Proposal
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default EngagementWedding;

const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
