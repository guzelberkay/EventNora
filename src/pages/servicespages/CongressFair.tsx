import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import congressImage from '@/images/congressfair_event.png';

const CongressFairEn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/en/contact');
    };

    const seoTitle = 'Congress and Fair Organizations | Professional Event Planning - Event Nora';
    const seoDescription =
        'We offer expert services for congress and fair organizations, including logistics, media, and technical support.';

    return (
        <Layout>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href="https://www.eventnora.com/en/services/congress-fair" />
                <link
                    rel="alternate"
                    hrefLang="tr"
                    href="https://www.eventnora.com/tr/hizmetler/kongre-fuar-organizasyonu"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content="https://www.eventnora.com/en/services/congress-fair" />
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
                        "@type": "WebSite",
                        name: "Event Nora",
                        url: "https://www.eventnora.com",
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Event Nora",
                        url: "https://www.eventnora.com",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://www.eventnora.com/logo.png",
                        },
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        serviceType: "Congress and Fair Organization",
                        provider: {
                            "@type": "Organization",
                            name: "Event Nora",
                            url: "https://www.eventnora.com",
                        },
                        areaServed: {
                            "@type": "Place",
                            name: "Istanbul",
                        },
                        description: seoDescription,
                    })}
                </script>
            </Helmet>

            {/* Hero */}
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

            {/* Service Content */}
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
                                    text: '🎓 Where knowledge, collaboration and success meet — we plan and execute every scale of congress and fair with professionalism.',
                                },
                                {
                                    title: '🗣️ Congress Management',
                                    items: [
                                        'Academic and professional congresses',
                                        'Abstract submission and call management',
                                        'Participant registration and badge system',
                                        'Hall planning, simultaneous translation, technical setup',
                                    ],
                                },
                                {
                                    title: '🏢 Fair Organization',
                                    items: [
                                        'Booth layout planning for companies',
                                        'Visual setup and design of fairgrounds',
                                        'Visitor flow and navigation systems',
                                        'Support for booth materials and product display',
                                    ],
                                },
                            ]}
                        />

                        <ContentColumn
                            content={[
                                {
                                    title: '📋 Logistics & Technical Support',
                                    items: [
                                        'Transportation, accommodation and transfers',
                                        'Venue selection and contract processes',
                                        'Sound, light and projection systems',
                                        'Registration, IT and guidance services',
                                    ],
                                },
                                {
                                    title: '📸 Promotion & Media Management',
                                    items: [
                                        'Printed/digital invitations, catalogs, banners',
                                        'Press releases, livestreams, post-event content',
                                        'Social media content planning and management',
                                        'Photography, videography, drone shots',
                                    ],
                                },
                                {
                                    title: '🎯 Types of Events',
                                    items: [
                                        'National & International Academic Congresses',
                                        'Health, Education, Technology & Industry Fairs',
                                        'Product Launches & Business Forums',
                                        'Symposiums, Panels, and Workshops',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '📍 We handle every detail to enhance your corporate image.\n🧠 You focus on the content, we’ll take care of the rest.',
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
                        Contact us today for strategic and effective event planning.
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
