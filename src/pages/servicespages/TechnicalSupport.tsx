import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import socialResponsibilityImage from '@/images/socialresponsiblility_event.webp';

const SocialResponsibility = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const seoTitle = 'Event Nora - Social Responsibility Projects & Impact Events';
    const seoDescription =
        'We support social impact through sustainable project planning and meaningful event organization tailored to community needs.';

    return (
        <Layout>
            <Helmet>
                {/* SEO Meta */}
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href="https://www.eventnora.com/services/social-responsibility" />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/services/social-responsibility" />
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr/hizmetler/sosyal-sorumluluk-projeleri" />
                <link rel="alternate" hrefLang="x-default" href="https://www.eventnora.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:url" content="https://www.eventnora.com/services/social-responsibility" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:image" content="https://www.eventnora.com/logo.png" />
                <meta property="og:locale" content="en_US" />

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
                        "serviceType": "Social Responsibility Projects",
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
                            "@type": "Place",
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
                        Social Responsibility Projects
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Creating meaningful impact through powerful partnerships
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section>
                <img
                    src={socialResponsibilityImage}
                    alt="Social responsibility event organized by Event Nora"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Services Content */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Our Services in Social Responsibility Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-textGray text-lg leading-relaxed">
                        <ContentColumn
                            content={[
                                '🌱 We design and deliver responsible, impactful projects that serve the community and promote awareness.',
                                {
                                    title: '📌 Project Development & Planning',
                                    items: [
                                        'Social needs analysis and objective setting',
                                        'Partnerships with NGOs and institutions',
                                        'Event calendar and content planning',
                                        'Volunteer engagement and coordination',
                                    ],
                                },
                                {
                                    title: '🌍 Event Organization',
                                    items: [
                                        'Workshops, panels, awareness walks',
                                        'Environmental campaigns (cleanup, planting)',
                                        'Donation drives (books, clothes, essentials)',
                                        'Youth camps and civic initiatives',
                                    ],
                                },
                            ]}
                        />
                        <ContentColumn
                            content={[
                                {
                                    title: '📣 Communication & Visibility',
                                    items: [
                                        'Social media and outreach campaigns',
                                        'Printed and digital material production',
                                        'Press and media engagement',
                                        'Post-event reporting and measurement',
                                    ],
                                },
                                {
                                    title: '🤲 Target Groups',
                                    items: [
                                        'Children & Youth',
                                        'Women & Elderly',
                                        'Underprivileged communities',
                                        'NGOs and Volunteers',
                                    ],
                                },
                                '✨ Let’s turn your values into actions — together we create lasting change.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        Ready to make an impact with your project?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Let’s bring your ideas to life — contact us today!
                    </p>
                    <button
                        onClick={handleContactClick}
                        aria-label="Contact Event Nora for social responsibility projects"
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default SocialResponsibility;

// 🔁 Reusable Column Component
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
