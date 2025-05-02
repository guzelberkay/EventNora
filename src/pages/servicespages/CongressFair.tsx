import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import congressImage from '@/images/congressfair_event.webp';

const CongressFairEn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const seoTitle = 'Congress and Fair Organizations | Professional Event Planning - Event Nora';
    const seoDescription =
        'Expert congress and fair organization services in Istanbul, with logistics, media, and technical support by Event Nora.';

    return (
        <Layout>
            <Helmet>
                {/* SEO Title & Description */}
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href="https://www.eventnora.com/services/congress-fair" />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/services/congress-fair" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/kongre-fuar-organizasyonu" />
                <link rel="alternate" hrefLang="x-default" href="https://www.eventnora.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content="https://www.eventnora.com/services/congress-fair" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:image" content="https://www.eventnora.com/logo.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content="https://www.eventnora.com/logo.png" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Congress and Fair Organization",
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
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🏛️ Congress and Fair Organizations
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Professional support for business and knowledge-sharing events
                    </p>
                </div>
            </section>

            {/* Image */}
            <section className="w-full h-auto">
                <img
                    src={congressImage}
                    alt="Professional congress and fair event organized by Event Nora"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
            </section>

            {/* Service Details */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-textGray text-lg leading-relaxed">
                        <ContentColumn
                            content={[
                                {
                                    type: 'text',
                                    text: '🎓 Where knowledge, collaboration, and success meet — we professionally plan and execute congresses and fairs of all scales.',
                                },
                                {
                                    title: '🗣️ Congress Management',
                                    items: [
                                        'Academic and professional congresses',
                                        'Abstract submission and call management',
                                        'Participant registration and badge systems',
                                        'Hall planning, translation, technical setups',
                                    ],
                                },
                                {
                                    title: '🏢 Fair Organization',
                                    items: [
                                        'Booth layout planning for exhibitors',
                                        'Visual setup and branding of fairgrounds',
                                        'Visitor flow and guidance systems',
                                        'Product displays and promotional setups',
                                    ],
                                },
                            ]}
                        />
                        <ContentColumn
                            content={[
                                {
                                    title: '📋 Logistics & Technical Support',
                                    items: [
                                        'Venue selection and contracts',
                                        'Transportation, accommodation, and transfers',
                                        'Sound, light, stage, projection systems',
                                        'Registration, IT and hosting services',
                                    ],
                                },
                                {
                                    title: '📸 Media and Promotions',
                                    items: [
                                        'Press releases, social media management',
                                        'Photography, videography, drone coverage',
                                        'Livestreams and event media support',
                                        'Post-event reporting and analytics',
                                    ],
                                },
                                {
                                    title: '🎯 Types of Events',
                                    items: [
                                        'International & National Congresses',
                                        'Education, Health, Technology & Industrial Fairs',
                                        'Product Launches, Business Summits',
                                        'Symposiums, Workshops, Panels',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '📍 We handle every detail to boost your corporate prestige.\n🧠 You focus on the content — we manage the experience.',
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        Ready to organize your next professional event?
                    </h2>
                    <p className="text-gold-light/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        Contact Event Nora for a strategic and flawless event organization.
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                        aria-label="Contact Event Nora for congress or fair event"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default CongressFairEn;

// ✅ Reusable Column Block
const ContentColumn = ({
                           content,
                       }: {
    content: (
        | { type: 'text'; text: string }
        | { title: string; items: string[] }
        )[];
}) => (
    <div className="space-y-6">
        {content.map((block, index) =>
            'text' in block ? (
                <p key={index} className="text-base md:text-lg whitespace-pre-line">
                    {block.text}
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
