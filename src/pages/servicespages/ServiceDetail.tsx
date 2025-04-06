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

  const service = servicesData.find(item => item.slug === slug);

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

  const pageTitle = isEnglish ? `${service.nameEn} | EventNora` : `${service.nameTr} | EventNora`;
  const pageDescription = isEnglish
      ? service.descriptionEn.slice(0, 160) // SEO için max 160 karakter
      : service.descriptionTr.slice(0, 160);

  return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
        </Helmet>

        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-gold mb-4">
              {isEnglish ? service.nameEn : service.nameTr}
            </h1>
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
                    alt={isEnglish ? service.nameEn : service.nameTr}
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

        {/* Ek detaylar buraya eklenebilir */}
      </Layout>
  );
};

export default ServiceDetail;
