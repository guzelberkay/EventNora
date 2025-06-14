import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import corporateBanner from '@/images/corporate_event.webp';

const CorporateEn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const seoTitle = 'Corporate Events | Professional Event Planning - Event Nora';
    const seoDescription = 'Stand out with corporate event services reflecting your brand value. Discover our comprehensive event management solutions.';

    return (
        <Layout>
            <Helmet>
                {/* SEO Meta */}
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href="https://www.eventnora.com/services/corporate-events" />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/services/corporate-events" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/kurumsal-etkinlikler" />
                <link rel="alternate" hrefLang="x-default" href="https://www.eventnora.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content="https://www.eventnora.com/services/corporate-events" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:image" content="https://www.eventnora.com/logo.png" />

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
                        "serviceType": "Corporate Event Planning",
                        "provider": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "url": "https://www.eventnora.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.eventnora.com/logo.png"
                            }
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": "Istanbul"
                        },
                        "description": seoDescription
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">Corporate Events</h1>
                    <p className="text-gold-light/80 text-lg">
                        Elevating your brand through exceptional experiences
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="w-full h-auto">
                <img
                    src={corporateBanner}
                    alt="Corporate event setup by Event Nora with branding and lighting"
                    loading="lazy"
                    className="w-full h-auto object-cover object-center"
                />
            </section>

            {/* Services Content */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        Corporate Event Services
                    </h2>
                    <div className="flex flex-wrap gap-10 text-textGray justify-center">
                        <ServiceColumn
                            items={[
                                '🏢 <strong>Stand out with your corporate events!</strong>',
                                '<strong>Professional event organization service for events that reflect your brand value</strong>',
                                '🔹 Modern and impressive event designs that support your corporate image add prestige to your brand. We plan events that best reflect your brand\'s goals and vision.',
                                '📍 <strong>Corporate Event Service Content:</strong>',
                                '💼 <strong>Event Planning & Management</strong><br />• Creating event concept & brand-compatible design<br />• Venue selection and decoration<br />• Planning event flow & real-time coordination<br />• VIP guest reception and welcome teams',
                                '🎤 <strong>Technical Infrastructure & Stage Setup</strong><br />• Stage setup, sound & lighting systems<br />• LED screens, projection presentations<br />• Microphone and simultaneous translation systems<br />• Host, MC and protocol coordination',
                                '🍽️ <strong>Catering Services</strong><br />• Welcome treats, coffee break stands<br />• Buffet or table service meals<br />• Corporate branded presentation areas<br />• Vegan, vegetarian and special menu options',
                            ]}
                        />
                        <ServiceColumn
                            items={[
                                '📸 <strong>Promotion & Media Support</strong><br />• Professional photo & video shooting<br />• Social media content production<br />• Instant sharing corners & branded memory walls<br />• Post-event promotional film',
                                '🪄 <strong>Other Corporate Services</strong><br />• Product launch events<br />• Opening ceremonies<br />• Year-end gala & award ceremonies<br />• Training and motivation camps<br />• Dealer meetings, launches, conferences',
                                '💬 If you want to stand out in your business, your event should not be ordinary!<br />🔗 Work with us to add value to your corporate identity.<br />📍 Contact us for detailed information and corporate proposal.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        Ready to elevate your corporate events?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Contact us to create memorable experiences that reflect your brand values.
                    </p>
                    <button
                        onClick={handleContactClick}
                        aria-label="Contact Event Nora for corporate event planning"
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        Get a Proposal
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default CorporateEn;

// Reusable service content
const ServiceColumn = ({ items }: { items: string[] }) => (
    <div className="w-full md:w-[48%] space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
