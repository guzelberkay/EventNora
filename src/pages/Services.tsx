import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesItems = [
    { 
      nameEn: 'Engagement and Wedding Organization', 
      nameTr: 'Nişan ve Düğün Organizasyonu',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
      descriptionEn: 'Complete planning and coordination for your perfect wedding day.',
      descriptionTr: 'Mükemmel düğün gününüz için tam planlama ve koordinasyon.',
      slug: 'engagement-wedding-organization'
    },
    { 
      nameEn: 'Corporate Events', 
      nameTr: 'Kurumsal Etkinlikler',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
      descriptionEn: 'Professional events that strengthen your corporate identity.',
      descriptionTr: 'Kurumsal kimliğinizi güçlendiren profesyonel etkinlikler.',
      slug: 'corporate-events'
    },
    { 
      nameEn: 'Birthday and Special Day Organizations', 
      nameTr: 'Doğum Günü ve Özel Gün Organizasyonları',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
      descriptionEn: 'Memorable celebrations tailored to your special moments.',
      descriptionTr: 'Özel anlarınıza özel hazırlanmış unutulmaz kutlamalar.',
      slug: 'birthday-special-day'
    },
    { 
      nameEn: 'Festival and Event Organization', 
      nameTr: 'Festival ve Etkinlik Organizasyonu',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      descriptionEn: 'Large-scale events that create unforgettable experiences.',
      descriptionTr: 'Unutulmaz deneyimler yaratan büyük ölçekli etkinlikler.',
      slug: 'festival-event'
    },
    { 
      nameEn: 'Congress and Fair Organizations', 
      nameTr: 'Kongre ve Fuar Organizasyonları',
      image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe',
      descriptionEn: 'Professional organization for business and knowledge-sharing events.',
      descriptionTr: 'İş ve bilgi paylaşım etkinlikleri için profesyonel organizasyon.',
      slug: 'congress-fair'
    },
    { 
      nameEn: 'Personal Event Planning', 
      nameTr: 'Kişisel Etkinlik Planlaması',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
      descriptionEn: 'Customized events that reflect your personal style.',
      descriptionTr: 'Kişisel tarzınızı yansıtan özelleştirilmiş etkinlikler.',
      slug: 'personal-event'
    },
    { 
      nameEn: 'Social Responsibility Projects', 
      nameTr: 'Sosyal Sorumluluk Projeleri',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
      descriptionEn: 'Meaningful events that make a difference in society.',
      descriptionTr: 'Toplumda fark yaratan anlamlı etkinlikler.',
      slug: 'social-responsibility'
    },
    { 
      nameEn: 'Creative Designs and Decoration Services', 
      nameTr: 'Yaratıcı Tasarımlar ve Süsleme Hizmetleri',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
      descriptionEn: 'Unique visual concepts that transform your events.',
      descriptionTr: 'Etkinliklerinizi dönüştüren eşsiz görsel konseptler.',
      slug: 'creative-designs'
    },
    { 
      nameEn: 'Technical and Logistics Support', 
      nameTr: 'Teknik ve Lojistik Destek',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      descriptionEn: 'Comprehensive technical solutions for flawless execution.',
      descriptionTr: 'Kusursuz uygulama için kapsamlı teknik çözümler.',
      slug: 'technical-support'
    },
    { 
      nameEn: 'Consultancy Services', 
      nameTr: 'Danışmanlık Hizmetleri',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      descriptionEn: 'Expert guidance for all your event planning needs.',
      descriptionTr: 'Etkinlik planlama ihtiyaçlarınız için uzman rehberlik.',
      slug: 'consultancy'
    },
  ];

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <Layout>
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center page-transition">
            <h1 className="heading-1 text-gold mb-4">
              {language === 'en' ? 'Our Services' : 'Hizmetlerimiz'}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {language === 'en' 
                ? 'Crafting unforgettable experiences for every occasion'
                : 'Her türlü etkinlik için unutulmaz deneyimler yaratıyoruz'}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesItems.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 page-transition cursor-pointer"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                onClick={() => handleServiceClick(service.slug)}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={language === 'en' ? service.nameEn : service.nameTr}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {language === 'en' ? service.nameEn : service.nameTr}
                  </h3>
                  <p className="text-textGray mb-4">
                    {language === 'en' ? service.descriptionEn : service.descriptionTr}
                  </p>
                  <div className="text-gold font-medium hover:text-gold-dark transition-colors inline-flex items-center">
                    {language === 'en' ? 'Learn More →' : 'Daha Fazla Bilgi →'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;