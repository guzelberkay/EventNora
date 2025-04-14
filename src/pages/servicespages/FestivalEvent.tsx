import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const FestivalEvent = () => {
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
                <title>Festival & Large-Scale Event Organization | Event Nora</title>
                <meta
                    name="description"
                    content="Music festivals, public events, and brand activations – we organize large-scale events with creative planning and perfect execution."
                />
                <link rel="canonical" href="https://www.eventnora.com/en/services/festival-event" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/festival-etkinlik-organizasyonu" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Festival & Large-Scale Event Organization | Event Nora" />
                <meta property="og:description" content="Music festivals, public events, and brand activations – we organize large-scale events with creative planning and perfect execution." />
                <meta property="og:url" content="https://www.eventnora.com/en/services/festival-event" />
                <meta property="og:image" content="https://www.eventnora.com/images/festival_banner.jpg" />
                <meta property="og:site_name" content="Event Nora" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Festival & Large-Scale Event Organization | Event Nora" />
                <meta name="twitter:description" content="Music festivals, public events, and brand activations – we organize large-scale events with creative planning and perfect execution." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/festival_banner.jpg" />

                {/* Structured Data (Schema.org) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Festival & Large-Scale Event Organization",
                        "provider": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "url": "https://www.eventnora.com"
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Istanbul"
                        },
                        "description": "Music festivals, public events, and brand activations – we organize large-scale events with creative planning and perfect execution."
                    })}
                </script>
            </Helmet>


            {/* Hero Section */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">Festival & Event Organization</h1>
                    <p className="text-gold-light/80 text-lg">Large-scale events that create unforgettable experiences</p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="w-full h-auto">
                <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                    alt="Festival organization"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">Festival Services</h2>

                    <div className="flex flex-wrap gap-10 text-textGray justify-center text-sm leading-relaxed">
                        <ContentColumn
                            items={[
                                '🎪 <strong>Unforgettable Moments Begin with Perfect Organization!</strong>',
                                '🌟 Think big, we make it happen! From music festivals to youth events and public celebrations, we deliver your vision with creativity and precision.',
                                '📍 <strong>Service Scope:</strong>',
                                '🎤 <strong>Stage & Artist Management</strong><br />• Concerts, DJ sets, local & international artists<br />• Dance crews, performers, stage shows<br />• Custom music planning & flow management<br />• Professional sound, light & stage systems',
                                '🎪 <strong>Concept & Venue Design</strong><br />• Festival themes, entrance zones, signages<br />• Stand & stage decorations, themed objects<br />• Outdoor lounges, chill zones<br />• Balloons, flags, branding, and visuals',
                                '🎉 <strong>Logistics & Area Services</strong><br />• Site inspection & location selection<br />• Security, cleaning, health & tech support<br />• Permits, licenses & municipality procedures<br />• Toilets, generators, tents, portable zones',
                            ]}
                        />

                        <ContentColumn
                            items={[
                                '📸 <strong>Promotion & Media</strong><br />• Social media campaigns & visual content<br />• Posters, invites, banners<br />• Live streaming, drone, photo/video<br />• Post-event content: aftermovie, galleries',
                                '🪩 <strong>Types of Events</strong><br />• Music Festivals<br />• Public & Municipality Events<br />• Youth & University Festivals<br />• Corporate & Brand Open-Air Events<br />• Themed Nights & Fairs',
                                '🎧 We’ve shared the excitement at hundreds of crowd-filled events!<br />🎪 Imagine it, we design it — let’s enjoy it together!<br />📍 Contact us to talk about your project.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        Ready to organize your festival or large-scale event?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Contact us for expert event organization services.
                    </p>
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

export default FestivalEvent;

const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="w-full md:w-[48%] space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
