import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import consultancyImg from '@/images/Consultancy_event.webp';

const ConsultancyEn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const seoTitle = 'Event Nora - Consultancy Services | Event Strategy & Planning';
    const seoDescription =
        'Expert consultancy services for event strategy, planning, execution and evaluation to make your events successful with Event Nora.';

    return (
        <Layout>
            <Helmet>
                {/* SEO Basics */}
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href="https://www.eventnora.com/services/consultancy" />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/services/consultancy" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/danismanlik-hizmetleri" />
                <link rel="alternate" hrefLang="x-default" href="https://www.eventnora.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content="https://www.eventnora.com/services/consultancy" />
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
                        "serviceType": "Event Consultancy Services",
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

            {/* Hero */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🧭 Consultancy Services
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Smart strategies for successful events!
                    </p>
                </div>
            </section>

            {/* Image */}
            <section className="w-full h-auto">
                <img
                    src={consultancyImg}
                    alt="Consultancy services for event planning by Event Nora"
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
                                '💼 From planning to post-event analysis, we offer expert consultancy every step of the way. Together, we walk the path to success.',
                                {
                                    title: '📋 Pre-Event Strategic Planning',
                                    items: [
                                        'Target audience analysis',
                                        'Event concept, theme & content consultancy',
                                        'Budgeting & resource management',
                                        'Location & timing strategies',
                                    ],
                                },
                                {
                                    title: '🤝 Corporate & Individual Consultancy',
                                    items: [
                                        'Tailored event strategies for brands',
                                        'Individual project-based event guidance',
                                        'Roadmap for NGOs, public & private events',
                                        'Content & event flow design support',
                                    ],
                                },
                            ]}
                        />

                        <ContentColumn
                            content={[
                                {
                                    title: '📈 On-Site Execution Support',
                                    items: [
                                        'Vendor & team selection guidance',
                                        'Coordination of logistics',
                                        'Timeline and task tracking',
                                        'Backstage rehearsal & technical guidance',
                                    ],
                                },
                                {
                                    title: '📊 Post-Event Evaluation',
                                    items: [
                                        'Participant satisfaction analysis',
                                        'Reporting and performance metrics',
                                        'Improvement and future planning',
                                        'Feedback on branding and event impact',
                                    ],
                                },
                                '🔍 With the right plan and expert insight, we help you manage your events effectively.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        📍 Let’s consult, plan, and succeed together!
                    </h2>
                    <button
                        onClick={handleContactClick}
                        aria-label="Contact Event Nora for event consultancy"
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                    >
                        Get Consultation
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default ConsultancyEn;

// 🔁 Reusable Column Block
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
