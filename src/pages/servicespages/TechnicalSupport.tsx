import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import technicalImg from '@/images/technical_support_event.png';

const TechnicalSupport = () => {
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
                <title>Technical & Logistics Support | Event Nora</title>
                <meta
                    name="description"
                    content="We provide professional technical infrastructure and logistics services for flawless event execution."
                />
                <link rel="canonical" href="https://www.eventnora.com/en/services/technical-support" />

                {/* Open Graph for social media */}
                <meta property="og:title" content="Technical & Logistics Support | Event Nora" />
                <meta
                    property="og:description"
                    content="We provide professional technical infrastructure and logistics services for flawless event execution."
                />
                <meta property="og:image" content={technicalImg} />
                <meta property="og:url" content="https://www.eventnora.com/en/services/technical-support" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Event Nora" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Technical & Logistics Support | Event Nora" />
                <meta
                    name="twitter:description"
                    content="We provide professional technical infrastructure and logistics services for flawless event execution."
                />
                <meta name="twitter:image" content={technicalImg} />
            </Helmet>


            {/* Hero Section */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🔧 Technical & Logistics Support
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Strong infrastructure for flawless events!
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="w-full h-auto">
                <img
                    src={technicalImg}
                    alt="Technical Support"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                        <ContentColumn
                            items={[
                                '🎯 We offer all technical and logistical services needed to ensure a safe, organized, and professional flow at every stage of your event.',
                                '🔌 <strong>Technical Infrastructure & Setup</strong><br />• Sound, light, and video system installation<br />• LED screens, projection, and live stream solutions<br />• Stage, podium, tent, truss systems<br />• Electrical infrastructure and generator support',
                                '🚛 <strong>Logistics Services</strong><br />• Material transport, setup and dismantling<br />• Equipment organization and placement<br />• Supply and inventory tracking<br />• Coordination of on-site technical staff',
                            ]}
                        />
                        <ContentColumn
                            items={[
                                '🧯 <strong>Safety & Support Services</strong><br />• Fire, first aid, and emergency planning<br />• Entry-exit control systems<br />• Toilets, bins, sanitizers, signboards<br />• Permit, license, municipality procedures',
                                '🎤 <strong>Live Technical Monitoring</strong><br />• Real-time technical interventions<br />• Backstage communication<br />• Control desks for camera, sound, light<br />• Rehearsal planning and coordination',
                                '⚙️ Leave the technical details to us — just enjoy your event!',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        📍 Contact us today to build a strong event infrastructure!
                    </h2>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                    >
                        Get Support
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default TechnicalSupport;

// Reusable column component
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-6 text-base md:text-lg leading-relaxed">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
