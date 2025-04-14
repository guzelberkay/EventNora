import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: isEnglish ? 'Engagement and Wedding Organization' : 'Nişan ve Düğün Organizasyonu',
      desc: isEnglish
          ? 'Complete planning and coordination for your perfect wedding day.'
          : 'Hayalinizdeki düğün günü için eksiksiz planlama ve koordinasyon.',
      img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
      link: `/${language}/services/engagement-wedding-organization`,
    },
    {
      name: isEnglish ? 'Birthday and Special Day Organizations' : 'Doğum Günü & Özel Gün Organizasyonları',
      desc: isEnglish
          ? 'Memorable birthday parties and milestone celebrations.'
          : 'Unutulmaz doğum günü partileri ve özel kutlamalar.',
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
      link: `/${language}/services/birthday-special-day`,
    },
    {
      name: isEnglish ? 'Corporate Events' : 'Kurumsal Etkinlikler',
      desc: isEnglish
          ? 'Strengthen your brand with professional business events.'
          : 'Markanızı güçlendirecek profesyonel kurumsal organizasyonlar.',
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
      link: `/${language}/services/corporate-events`,
    },
    {
      name: isEnglish ? 'Festival and Public Events' : 'Festival & Kamu Etkinlikleri',
      desc: isEnglish
          ? 'Unforgettable large-scale public and music events.'
          : 'Büyük ölçekli festival ve müzik etkinlikleri.',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      link: `/${language}/services/festival-event`,
    },
    {
      name: isEnglish ? 'Congress and Fair Organizations' : 'Kongre ve Fuar Organizasyonları',
      desc: isEnglish
          ? 'Professional fair booths and corporate congress management.'
          : 'Kurumsal fuar stantları ve kongre yönetimi.',
      img: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80',
      link: `/${language}/services/congress-fair`,
    },
    {
      name: isEnglish ? 'Personal Event Planning' : 'Kişisel Etkinlik Planlaması',
      desc: isEnglish
          ? 'Tailored events designed for your unique style.'
          : 'Size özel tarzda kişiselleştirilmiş etkinlik tasarımı.',
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
      link: `/${language}/services/personal-event`,
    },
    {
      name: isEnglish ? 'Social Responsibility Projects' : 'Sosyal Sorumluluk Projeleri',
      desc: isEnglish
          ? 'Impactful community and environmental initiatives.'
          : 'Toplumsal fayda odaklı sosyal sorumluluk projeleri.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      link: `/${language}/services/social-responsibility`,
    },
    {
      name: isEnglish ? 'Creative Designs and Decoration Services' : 'Yaratıcı Tasarım & Süsleme',
      desc: isEnglish
          ? 'Custom themes, decor, flowers, balloons, and more.'
          : 'Tema, dekor, çiçek, balon ve yaratıcı süsleme hizmetleri.',
      img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
      link: `/${language}/services/creative-designs`,
    },
    {
      name: isEnglish ? 'Technical and Logistics Support' : 'Teknik ve Lojistik Destek',
      desc: isEnglish
          ? 'Sound, light, stage, video and on-site setup services.'
          : 'Ses, ışık, sahne, video ve alan kurulumu hizmetleri.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      link: `/${language}/services/technical-support`,
    },
    {
      name: isEnglish ? 'Consultancy Services' : 'Danışmanlık Hizmetleri',
      desc: isEnglish
          ? 'Professional guidance for event concept and strategy.'
          : 'Etkinlik konsepti ve stratejisi için profesyonel danışmanlık.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      link: `/${language}/services/consultancy`,
    },
  ];

  const canonicalUrl = `https://www.eventnora.com/${language}/services`;

  return (
      <Layout>
        <Helmet>
          <title>
            {isEnglish
                ? 'Event Services in Istanbul | Event Nora'
                : 'İstanbul Etkinlik Hizmetleri | Event Nora'}
          </title>
          <meta
              name="description"
              content={
                isEnglish
                    ? 'Discover premium event planning in Istanbul: weddings, corporate, festivals, birthdays, congress, and more.'
                    : 'İstanbul’da düğün, kurumsal, festival, doğum günü, kongre ve diğer tüm etkinlikler için profesyonel planlama hizmetleri.'
              }
          />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>

        {/* Hero */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container-custom relative z-10 text-center">
            <h1 className="heading-1 text-gold mb-4">
              {isEnglish ? 'Our Services' : 'Hizmetlerimiz'}
            </h1>
            <p className="text-gold-light/80 text-lg max-w-xl mx-auto">
              {isEnglish
                  ? 'Your dream event deserves expert planning. Discover our complete service range.'
                  : 'Hayalinizdeki etkinlik için profesyonel planlama hizmetlerimizi keşfedin.'}
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, index) => (
                  <div
                      key={index}
                      onClick={() => navigate(item.link)}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                  >
                    <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-black mb-2">{item.name}</h3>
                      <p className="text-textGray text-sm mb-4">{item.desc}</p>
                      <span className="text-gold font-medium hover:text-gold-dark transition">
                    {isEnglish ? 'Learn More →' : 'Detayları Gör →'}
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
