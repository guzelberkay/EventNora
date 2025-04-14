import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import socialResponsibilityImage from '@/images/socialresponsiblility_event.png';

const SocialResponsibility = () => {
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
                <title>Social Responsibility Projects | Event Nora</title>
                <meta
                    name="description"
                    content="We support social impact with responsible and sustainable project planning and event organization services."
                />
                <link
                    rel="canonical"
                    href="https://www.eventnora.com/en/services/social-responsibility"
                />
                <meta property="og:title" content="Social Responsibility Projects | Event Nora" />
                <meta
                    property="og:description"
                    content="We support social impact with responsible and sustainable project planning and event organization services."
                />
                <meta property="og:image" content={socialResponsibilityImage} />
                <meta property="og:url" content="https://www.eventnora.com/en/services/social-responsibility" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Event Nora" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Social Responsibility Projects | Event Nora" />
                <meta
                    name="twitter:description"
                    content="We support social impact with responsible and sustainable project planning and event organization services."
                />
                <meta name="twitter:image" content={socialResponsibilityImage} />
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

            {/* Banner */}
            <section>
                <img
                    src={socialResponsibilityImage}
                    alt="Social Responsibility Event"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Our Services in Social Responsibility Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                        <ContentColumn
                            items={[
                                '🤝 <strong>Social Responsibility Projects</strong>',
                                '<strong>Powerful collaboration for projects that bring value to society!</strong>',
                                '🌱 We plan and implement your projects effectively and sustainably, from environment to education, health to equality.',
                                '📍 <strong>Our Service Scope:</strong>',
                                '📌 <strong>Project Development & Planning</strong><br />• Social needs analysis and goal setting<br />• Collaborations with NGOs and public institutions<br />• Event calendar creation and content development<br />• Local engagement and volunteer management',
                                '🌍 <strong>Event Organization</strong><br />• Thematic workshops, seminars, awareness walks<br />• Recycling, tree planting, cleanup campaigns<br />• Donation drives (food, clothes, books)<br />• Youth camps, social entrepreneurship events',
                            ]}
                        />
                        <ContentColumn
                            items={[
                                '📣 <strong>Communication & Outreach</strong><br />• Social media campaigns<br />• Posters, brochures, digital materials<br />• Media relations, visibility strategy<br />• Post-event reporting, feedback collection',
                                '🤲 <strong>Target Groups</strong><br />• Children & Youth<br />• Women<br />• Elderly<br />• Disadvantaged Groups<br />• NGOs and Volunteers',
                                '✨ <strong>Together we build impactful projects for a better future.</strong><br />📍 Tell us your project — let’s take action together!',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        Ready to make an impact with your project?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Let’s bring your ideas to life—contact us now!
                    </p>
                    <button
                        onClick={handleContactClick}
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

// Reusable content column component
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-6 text-base md:text-lg leading-relaxed">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
