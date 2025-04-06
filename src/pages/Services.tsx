import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      nameEn: 'Engagement and Wedding Organization',
      nameTr: 'Nişan ve Düğün Organizasyonu',
      descEn: 'Complete planning and coordination for your perfect wedding day.',
      descTr: 'Mükemmel düğün gününüz için tam planlama ve organizasyon.',
      img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
      slug: 'engagement-wedding-organization',
    },
    {
      nameEn: 'Birthday and Special Day Organizations',
      nameTr: 'Doğum Günü ve Özel Gün Organizasyonları',
      descEn: 'Memorable birthday parties and milestone celebrations.',
      descTr: 'Unutulmaz doğum günü partileri ve özel gün kutlamaları.',
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
      slug: 'birthday-special-day',
    },
    {
      nameEn: 'Corporate Events',
      nameTr: 'Kurumsal Etkinlikler',
      descEn: 'Strengthen your brand with professional business events.',
      descTr: 'Markanızı güçlendiren profesyonel kurumsal organizasyonlar.',
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
      slug: 'corporate-events',
    },
    {
      nameEn: 'Festival and Public Events',
      nameTr: 'Festival ve Toplu Etkinlikler',
      descEn: 'Unforgettable large-scale public and music events.',
      descTr: 'Unutulmaz müzikli ve temalı açık hava etkinlikleri.',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      slug: 'festival-event',
    },
    {
      nameEn: 'Congress and Fair Organizations',
      nameTr: 'Kongre ve Fuar Organizasyonları',
      descEn: 'Professional fair booths and corporate congress management.',
      descTr: 'Profesyonel fuar standları ve kongre yönetimi.',
      img: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80',
      slug: 'congress-fair',
    },
    {
      nameEn: 'Personal Event Planning',
      nameTr: 'Kişisel Etkinlik Planlaması',
      descEn: 'Tailored events designed for your unique style.',
      descTr: 'Sizin stilinize özel kişisel organizasyonlar.',
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
      slug: 'personal-event',
    },
    {
      nameEn: 'Social Responsibility Projects',
      nameTr: 'Sosyal Sorumluluk Projeleri',
      descEn: 'Impactful community and environmental initiatives.',
      descTr: 'Topluma ve çevreye duyarlı sürdürülebilir projeler.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      slug: 'social-responsibility',
    },
    {
      nameEn: 'Creative Designs and Decoration Services',
      nameTr: 'Yaratıcı Tasarımlar ve Süsleme Hizmetleri',
      descEn: 'Custom themes, decor, flowers, balloons, and more.',
      descTr: 'Balon, çiçek ve konsept tasarımlarla estetik süsleme.',
      img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
      slug: 'creative-designs',
    },
    {
      nameEn: 'Technical and Logistics Support',
      nameTr: 'Teknik ve Lojistik Destek',
      descEn: 'Sound, light, stage, video and on-site setup services.',
      descTr: 'Ses, ışık, sahne ve teknik kurulum çözümleri.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      slug: 'technical-support',
    },
    {
      nameEn: 'Consultancy Services',
      nameTr: 'Danışmanlık Hizmetleri',
      descEn: 'Professional guidance for event concept and strategy.',
      descTr: 'Organizasyon sürecinde uzman danışmanlık desteği.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      slug: 'consultancy',
    },
  ];

  return (
      <Layout>
        <Helmet>
          <title>{isEn ? 'Event Services in Istanbul | Event Nora' : 'İstanbul Organizasyon Hizmetleri | Event Nora'}</title>
          <meta
              name="description"
              content={
                isEn
                    ? 'Discover premium event planning in Istanbul: weddings, corporate, festivals, birthdays, congress, and more.'
                    : 'İstanbul’da düğün, nişan, doğum günü, festival, kongre ve diğer tüm organizasyon hizmetleri.'
              }
          />
          <meta
              name="keywords"
              content="
            istanbul düğün organizasyonu, istanbul doğum günü, nişan organizasyonu, istanbul etkinlik, doğum günü partisi, kongre organizasyonu,
            fuar organizasyonu, organizasyon firması, doğum günü süsleme, kurumsal organizasyon, çocuk partisi, süsleme hizmeti,
            etkinlik planlama, sahne ışık ses, danışmanlık, evlilik teklifi organizasyonu, açık hava etkinliği, mezuniyet organizasyonu,
            kına gecesi, doğum günü organizasyon şirketi, özel gün kutlaması, istanbul etkinlik firmaları, istanbul organizasyon şirketleri
          "
          />
          <link rel="canonical" href="https://eventnora.com/services" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Event Nora | İstanbul Organizasyon Hizmetleri" />
          <meta property="og:description" content="Düğün, doğum günü, nişan, festival, kongre ve daha fazlası için profesyonel organizasyon." />
          <meta property="og:image" content="https://eventnora.com/images/seo-banner.jpg" />
          <meta property="og:url" content="https://eventnora.com/services" />
          <meta name="twitter:title" content="İstanbul Düğün & Etkinlik Organizasyonu | Event Nora" />
          <meta name="twitter:description" content="İstanbul’da profesyonel organizasyon ve etkinlik planlama hizmetleri." />
          <meta name="twitter:image" content="https://eventnora.com/images/seo-banner.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container-custom relative z-10 text-center">
            <h1 className="heading-1 text-gold mb-4">{isEn ? 'Our Services' : 'Hizmetlerimiz'}</h1>
            <p className="text-gold-light/80 text-lg max-w-xl mx-auto">
              {isEn
                  ? 'Your dream event deserves expert planning. Discover our complete service range.'
                  : 'Hayalinizdeki etkinlik için uzman planlama. Tüm hizmetlerimizi keşfedin.'}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, index) => (
                  <div
                      key={index}
                      onClick={() => navigate(`/services/${item.slug}`)}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                  >
                    <img
                        src={item.img}
                        alt={isEn ? item.nameEn : item.nameTr}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-black mb-2">{isEn ? item.nameEn : item.nameTr}</h3>
                      <p className="text-textGray text-sm mb-4">{isEn ? item.descEn : item.descTr}</p>
                      <span className="text-gold font-medium hover:text-gold-dark transition">
                    {isEn ? 'Learn More →' : 'Detaylar →'}
                  </span>
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
