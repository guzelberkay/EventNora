import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import creativeImg from '@/images/creative_event.png';

const CreativeDesigns = () => {
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
                <title>Creative Designs & Decoration | Visual Event Styling - Event Nora</title>
                <meta
                    name="description"
                    content="Aesthetic event spaces and custom decoration services. Transform your dream concept into a visual reality."
                />
                <link rel="canonical" href="https://www.eventnora.com/en/services/creative-designs" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/yaratici-tasarim-susleme" />

                {/* Open Graph (Facebook / LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Creative Designs & Decoration | Visual Event Styling - Event Nora" />
                <meta property="og:description" content="Aesthetic event spaces and custom decoration services. Transform your dream concept into a visual reality." />
                <meta property="og:url" content="https://www.eventnora.com/en/services/creative-designs" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:image" content="https://www.eventnora.com/logo.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Creative Designs & Decoration | Visual Event Styling - Event Nora" />
                <meta name="twitter:description" content="Aesthetic event spaces and custom decoration services. Transform your dream concept into a visual reality." />
                <meta name="twitter:image" content="https://www.eventnora.com/logo.png" />

                {/* Structured Data - WebSite */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Event Nora",
                        "url": "https://www.eventnora.com"
                    })}
                </script>

                {/* Structured Data - Organization */}
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

                {/* Structured Data - Service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Creative Design & Event Decoration",
                        "provider": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "url": "https://www.eventnora.com"
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Istanbul"
                        },
                        "description": "We offer aesthetic and customized decoration services for all types of events from birthdays to weddings."
                    })}
                </script>
            </Helmet>


            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">
                        🎨 Creative Designs & Decoration Services
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        Aesthetic spaces beyond your imagination!
                    </p>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={creativeImg}
                    alt="Creative Decoration Event Banner"
                    loading="lazy"
                    className="w-full h-auto object-cover object-center"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">Our Service Scope</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                        <ContentColumn
                            items={[
                                '🌟 We bring a visual feast to your events with original decoration solutions that fit every concept and put creativity at the forefront.',
                                '🌈 <strong>Concept Design</strong><br />• Theme selection and style consulting<br />• Creating color palettes and visual harmony<br />• Custom logos, symbols, and icon designs<br />• Venue and purpose-focused creative planning',
                                '🎀 <strong>Venue Decoration Services</strong><br />• Table and chair decorations<br />• Balloon arches, floral arrangements, lighting<br />• Entrance, stage, and photo corner setups<br />• Ceiling, floor, and wall decorations',
                            ]}
                        />
                        <ContentColumn
                            items={[
                                '🖌️ <strong>Handmade & Custom Designs</strong><br />• Custom panels, signage, and directional signs<br />• Personalized gifts, menu, and label designs<br />• Decoration in rustic, modern, vintage, boho styles<br />• Live production through workshops',
                                '📸 <strong>Visual Setup & Atmosphere</strong><br />• Light effects and stage visuals<br />• Background designs and photo areas<br />• Branding zones and product display areas<br />• Eye-catching visuals for social media',
                                '🎯 <strong>Events We Cover</strong><br />• Birthdays, engagements, weddings<br />• Corporate events and openings<br />• Graduations and award ceremonies<br />• Launches and themed parties',
                                '✨ We transform your dream designs into stunning reality.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        📍 Contact us for aesthetics-driven solutions!
                    </h2>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default CreativeDesigns;

const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
