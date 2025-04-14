import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import servicesData from './servicesData';

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();
    const isEnglish = language === 'en';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const service = servicesData.find((item) => item.slug === slug);

    if (!service) {
        return (
            <Layout>
                <div className="text-center py-20">
                    <h1 className="text-2xl font-semibold">
                        {isEnglish ? 'Service not found' : 'Hizmet bulunamadı'}
                    </h1>
                </div>
            </Layout>
        );
    }

    const title = isEnglish ? service.nameEn : service.nameTr;
    const description = isEnglish
        ? service.descriptionEn.slice(0, 160)
        : service.descriptionTr.slice(0, 160);
    const imageAlt = `${title} - Event Nora`;

    const canonicalUrl = `https://www.eventnora.com/${language}/services/${slug}`;

    return (
        <Layout>
            <Helmet>
                <title>{`${title} | Event Nora`}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={`${title} | Event Nora`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={service.image} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Event Nora" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${title} | Event Nora`} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={service.image} />
            </Helmet>

            {/* Hero Section */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">{title}</h1>
                    <p className="text-gold-light/80 text-lg">
                        {isEnglish ? 'Detailed service information' : 'Detaylı hizmet bilgisi'}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-lg overflow-hidden">
                            <img
                                src={service.image}
                                alt={imageAlt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-6">
                                {isEnglish ? 'About This Service' : 'Hizmet Hakkında'}
                            </h2>
                            <p className="text-textGray leading-relaxed whitespace-pre-line">
                                {isEnglish ? service.descriptionEn : service.descriptionTr}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
