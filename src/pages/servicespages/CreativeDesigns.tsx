import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import creativeImg from '@/images/creative_event.png';

const CreativeDesignsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isEnglish = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const seoTitle = isEnglish
      ? 'Creative Designs & Decoration | Visual Event Styling'
      : 'Yaratıcı Tasarımlar & Süsleme Hizmetleri | Etkinlik Görsel Düzenleme';

  const seoDescription = isEnglish
      ? 'Aesthetic event spaces and custom decoration services. Transform your dream concept into a visual reality.'
      : 'Etkinlik konseptinizi gerçeğe dönüştüren estetik süsleme ve tasarım hizmetleri. Hayalinizdeki atmosferi yaratın.';

  return (
      <Layout>
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
        </Helmet>

        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-gold mb-4">
              🎨 {isEnglish
                ? 'Creative Designs & Decoration Services'
                : 'Yaratıcı Tasarımlar ve Süsleme Hizmetleri'}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {isEnglish
                  ? 'Aesthetic spaces beyond your imagination!'
                  : 'Hayallerinizin Ötesinde, Estetikle Dolu Etkinlik Alanları!'}
            </p>
          </div>
        </section>

        {/* Banner Image */}
        <section className="w-full h-auto">
          <img
              src={creativeImg}
              alt={isEnglish ? 'Creative Decoration Event Banner' : 'Yaratıcı Etkinlik Süsleme Görseli'}
              loading="lazy"
              className="w-full h-auto object-cover object-center"
          />
        </section>

        {/* Content Section */}
        <section className="section bg-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-10 text-center">
              {isEnglish ? 'Our Service Scope' : 'Hizmet İçeriğimiz'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
              <ContentColumn
                  items={
                    isEnglish
                        ? [
                          '🌟 We bring a visual feast to your events with original decoration solutions that fit every concept and put creativity at the forefront.',
                          '🌈 <strong>Concept Design</strong><br />• Theme selection and style consulting<br />• Creating color palettes and visual harmony<br />• Custom logos, symbols, and icon designs<br />• Venue and purpose-focused creative planning',
                          '🎀 <strong>Venue Decoration Services</strong><br />• Table and chair decorations<br />• Balloon arches, floral arrangements, lighting<br />• Entrance, stage, and photo corner setups<br />• Ceiling, floor, and wall decorations',
                        ]
                        : [
                          '🌟 Her konsepte uygun özgün dekorasyon çözümleri ve yaratıcılığı ön planda tutan tasarımlarımızla etkinliklerinize görsel bir şölen katıyoruz.',
                          '🌈 <strong>Konsept Tasarımı</strong><br />• Tema belirleme ve stil danışmanlığı<br />• Renk paleti oluşturma ve görsel bütünlük sağlama<br />• Etkinliğe özel logo, simge ve sembol tasarımı<br />• Mekâna ve amaca uygun yaratıcılık odaklı planlama',
                          '🎀 <strong>Mekân Süsleme Hizmetleri</strong><br />• Masa ve sandalye süslemeleri<br />• Balon kemerleri, çiçek aranjmanları, ışıklandırmalar<br />• Giriş alanı, sahne ve fotoğraf köşesi tasarımları<br />• Tavan, zemin ve duvar süslemeleri',
                        ]
                  }
              />
              <ContentColumn
                  items={
                    isEnglish
                        ? [
                          '🖌️ <strong>Handmade & Custom Designs</strong><br />• Custom panels, signage, and directional signs<br />• Personalized gifts, menu, and label designs<br />• Decoration in rustic, modern, vintage, boho styles<br />• Live production through workshops',
                          '📸 <strong>Visual Setup & Atmosphere</strong><br />• Light effects and stage visuals<br />• Background designs and photo areas<br />• Branding zones and product display areas<br />• Eye-catching visuals for social media',
                          '🎯 <strong>Events We Cover</strong><br />• Birthdays, engagements, weddings<br />• Corporate events and openings<br />• Graduations and award ceremonies<br />• Launches and themed parties',
                          '✨ We transform your dream designs into stunning reality.',
                        ]
                        : [
                          '🖌️ <strong>El Yapımı & Özel Tasarımlar</strong><br />• Özel üretim panolar, yazı alanları ve yönlendirme tabelaları<br />• Kişiye özel hediyelikler, menü ve etiket tasarımları<br />• Doğal, rustik, modern, vintage, boho gibi farklı tarzlarda süsleme<br />• Atölye çalışmaları ile etkinlikte canlı üretim',
                          '📸 <strong>Görsel Sunum & Atmosfer Kurulumu</strong><br />• Mekâna uygun ışık oyunları ve sahne efekti<br />• Arka plan tasarımları ve çekim alanı kurulumu<br />• Branding alanları ve ürün teşhir tasarımları<br />• Sosyal medya için dikkat çekici görsel düzenlemeler',
                          '🎯 <strong>Hizmet Verilen Etkinlikler</strong><br />• Doğum günleri, nişan ve düğün organizasyonları<br />• Kurumsal davet ve açılışlar<br />• Mezuniyet ve ödül törenleri<br />• Lansmanlar ve konsept partiler',
                          '✨ Hayal ettiğiniz tasarımı göz alıcı detaylarla gerçeğe dönüştürüyoruz.',
                        ]
                  }
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-black text-center">
          <div className="container-custom">
            <h2 className="heading-2 text-gold mb-4">
              {isEnglish
                  ? '📍 Contact us for aesthetics-driven solutions!'
                  : '📍 Estetikten ödün vermeyen çözümlerimiz için bizimle iletişime geçin!'}
            </h2>
            <button
                onClick={handleContactClick}
                className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
            >
              {isEnglish ? 'Contact Us' : 'İletişime Geçin'}
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default CreativeDesignsPage;

// Reusable column for list content
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
      {items.map((item, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </div>
);
