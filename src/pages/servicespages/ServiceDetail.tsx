import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import servicesData from './servicesData'; // servicesItems'ı ayrı bir dosyaya taşıdık

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const service = servicesData.find(item => item.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1>{language === 'en' ? 'Service not found' : 'Hizmet bulunamadı'}</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-gold mb-4">
              {language === 'en' ? service.nameEn : service.nameTr}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {language === 'en' 
                ? 'Detailed service information' 
                : 'Detaylı hizmet bilgisi'}
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={language === 'en' ? service.nameEn : service.nameTr}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                {language === 'en' ? 'About This Service' : 'Hizmet Hakkında'}
              </h2>
              <p className="text-textGray">
                {language === 'en' ? service.descriptionEn : service.descriptionTr}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer detay içeriği buraya eklenebilir */}
    </Layout>
  );
};

export default ServiceDetail;