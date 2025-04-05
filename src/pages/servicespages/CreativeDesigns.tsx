import React from 'react';
import Layout from '@/components/Layout';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import creativeImg from '@/images/creative_event.png'; // Görsel burada kullanılıyor

const CreativeDesignsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
      <Layout>
        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-gold mb-4">
              {language === 'en'
                  ? '🎨 Creative Designs & Decoration Services'
                  : '🎨 Yaratıcı Tasarımlar ve Süsleme Hizmetleri'}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {language === 'en'
                  ? 'Aesthetic spaces beyond your imagination!'
                  : 'Hayallerinizin Ötesinde, Estetikle Dolu Etkinlik Alanları!'}
            </p>
          </div>
        </section>

        {/* Görsel Banner */}
        <section className="w-full h-auto">
          <img src={creativeImg} alt="Creative Design" className="w-full h-full object-cover object-center" />
        </section>

        {/* İçerik */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-10 text-center">
                {language === 'en' ? 'Our Service Scope' : 'Hizmet İçeriğimiz'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                <div className="space-y-4">
                  <p>
                    {language === 'en'
                        ? '🌟 We bring a visual feast to your events with original decoration solutions that fit every concept and put creativity at the forefront.'
                        : '🌟 Her konsepte uygun özgün dekorasyon çözümleri ve yaratıcılığı ön planda tutan tasarımlarımızla etkinliklerinize görsel bir şölen katıyoruz.'}
                  </p>
                  <p>
                    <strong>🌈 {language === 'en' ? 'Concept Design' : 'Konsept Tasarımı'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Theme selection and style consulting<br />
                          • Creating color palettes and visual harmony<br />
                          • Custom logos, symbols, and icon designs<br />
                          • Venue and purpose-focused creative planning
                        </>
                    ) : (
                        <>
                          • Tema belirleme ve stil danışmanlığı<br />
                          • Renk paleti oluşturma ve görsel bütünlük sağlama<br />
                          • Etkinliğe özel logo, simge ve sembol tasarımı<br />
                          • Mekâna ve amaca uygun yaratıcılık odaklı planlama
                        </>
                    )}
                  </p>
                  <p>
                    <strong>🎀 {language === 'en' ? 'Venue Decoration Services' : 'Mekân Süsleme Hizmetleri'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Table and chair decorations<br />
                          • Balloon arches, floral arrangements, lighting<br />
                          • Entrance, stage, and photo corner setups<br />
                          • Ceiling, floor, and wall decorations
                        </>
                    ) : (
                        <>
                          • Masa ve sandalye süslemeleri<br />
                          • Balon kemerleri, çiçek aranjmanları, ışıklandırmalar<br />
                          • Giriş alanı, sahne ve fotoğraf köşesi tasarımları<br />
                          • Tavan, zemin ve duvar süslemeleri
                        </>
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>🖌️ {language === 'en' ? 'Handmade & Custom Designs' : 'El Yapımı & Özel Tasarımlar'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Custom panels, signage, and directional signs<br />
                          • Personalized gifts, menu, and label designs<br />
                          • Decoration in rustic, modern, vintage, boho styles<br />
                          • Live production through workshops
                        </>
                    ) : (
                        <>
                          • Özel üretim panolar, yazı alanları ve yönlendirme tabelaları<br />
                          • Kişiye özel hediyelikler, menü ve etiket tasarımları<br />
                          • Doğal, rustik, modern, vintage, boho gibi farklı tarzlarda süsleme<br />
                          • Atölye çalışmaları ile etkinlikte canlı üretim
                        </>
                    )}
                  </p>
                  <p>
                    <strong>📸 {language === 'en' ? 'Visual Setup & Atmosphere' : 'Görsel Sunum & Atmosfer Kurulumu'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Light effects and stage visuals<br />
                          • Background designs and photo areas<br />
                          • Branding zones and product display areas<br />
                          • Eye-catching visuals for social media
                        </>
                    ) : (
                        <>
                          • Mekâna uygun ışık oyunları ve sahne efekti<br />
                          • Arka plan tasarımları ve çekim alanı kurulumu<br />
                          • Branding alanları ve ürün teşhir tasarımları<br />
                          • Sosyal medya için dikkat çekici görsel düzenlemeler
                        </>
                    )}
                  </p>
                  <p>
                    <strong>🎯 {language === 'en' ? 'Events We Cover' : 'Hizmet Verilen Etkinlikler'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Birthdays, engagements, weddings<br />
                          • Corporate events and openings<br />
                          • Graduations and award ceremonies<br />
                          • Launches and themed parties
                        </>
                    ) : (
                        <>
                          • Doğum günleri, nişan ve düğün organizasyonları<br />
                          • Kurumsal davet ve açılışlar<br />
                          • Mezuniyet ve ödül törenleri<br />
                          • Lansmanlar ve konsept partiler
                        </>
                    )}
                  </p>
                  <p>
                    {language === 'en'
                        ? '✨ We transform your dream designs into stunning reality.'
                        : '✨ Hayal ettiğiniz tasarımı göz alıcı detaylarla gerçeğe dönüştürüyoruz.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-black">
          <div className="container-custom text-center">
            <h2 className="heading-2 text-gold mb-4">
              {language === 'en'
                  ? '📍 Contact us for aesthetics-driven solutions!'
                  : '📍 Estetikten ödün vermeyen çözümlerimiz için bizimle iletişime geçin!'}
            </h2>
            <button
                onClick={handleContactClick}
                className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
            >
              {language === 'en' ? 'Contact Us' : 'İletişime Geçin'}
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default CreativeDesignsPage;
