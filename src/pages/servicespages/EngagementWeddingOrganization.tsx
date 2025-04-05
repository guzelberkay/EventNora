import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import weddingImage from '@/images/wedding_event.png';

const EngagementWedding = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
      <Layout>
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 text-gold mb-4">
                {language === 'en' ? 'Engagement and Wedding Organization' : 'Nişan ve Düğün Organizasyonu'}
              </h1>
              <p className="text-gold-light/80 text-lg">
                {language === 'en'
                    ? 'Your perfect wedding day starts here'
                    : 'Mükemmel düğün gününüz burada başlar'}
              </p>
            </div>
          </div>
        </section>

        {/* Full-width Image Banner */}
          <section className="w-full h-auto">
              <img src={weddingImage} alt="Wedding Event" className="w-full h-full object-cover object-center"/>


          </section>

          {/* Content Section with Two Columns */}
          <section className="section bg-white">
              <div className="container-custom">
                  <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-10 text-center">
                {language === 'en' ? 'About Our Wedding Services' : 'Düğün Hizmetlerimiz Hakkında'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                {language === 'en' ? (
                    <>
                      <div className="space-y-4">
                        <p>🎉 <strong>We’ve thought of everything for your dream engagement and wedding!</strong> 💍✨</p>
                        <p><strong>Make your special days unforgettable with our professional event planning service!</strong></p>
                        <p>📍 <strong>Engagement & Wedding Service Details:</strong></p>
                        <p>🌸 <strong>Concept Design & Decoration</strong><br/>
                          • Table and chair decorations matching your dream theme<br/>
                          • Custom floral arrangements (live or artificial options)<br/>
                          • Backdrops, signage, and special lighting<br/>
                          • Aisle decorations and wedding ceremony setups<br/>
                          • Various themes: modern, rustic, boho, classic, romantic, vintage</p>
                        <p>🎶 <strong>Music and Entertainment</strong><br/>
                          • Live band or DJ performance<br/>
                          • Sound and lighting system setup<br/>
                          • Optional choreography for the first dance</p>
                        <p>📷 <strong>Photography and Videography</strong><br/>
                          • Pre-shoot and event-day shooting<br/>
                          • Drone footage<br/>
                          • Memory book and memory corner</p>
                      </div>
                      <div className="space-y-4">
                        <p>🍽️ <strong>Catering and Treats</strong><br/>
                          • Welcome cocktail (Turkish delight, cologne, drinks)<br/>
                          • Cake and dessert buffet<br/>
                          • Menu alternatives<br/>
                          • Serving team and table service</p>
                        <p>🪄 <strong>Additional Services</strong><br/>
                          • Groom’s coffee & tray<br/>
                          • Bridesmaid bracelets & accessories<br/>
                          • Custom favors<br/>
                          • Personalized invitations and menu cards<br/>
                          • On-day coordination and assistant support</p>
                        <p>💫 <strong>Enjoy your special day — we’ll plan every detail.</strong><br/>
                          📍 Contact us for more information and reservations.</p>
                      </div>
                    </>
                ) : (
                    <>
                      <div className="space-y-4">
                        <p>🎉 <strong>Hayalinizdeki Nişan ve Düğün İçin Her Şeyi Düşündük!</strong> 💍✨</p>
                        <p><strong>Profesyonel Organizasyon Hizmetimizle Özel Günleriniz Unutulmaz Olsun!</strong></p>
                        <p>📍 <strong>Nişan & Düğün Organizasyon Hizmeti İçeriği:</strong></p>
                        <p>🌸 <strong>Konsept Tasarımı & Dekorasyon</strong><br/>
                          • Tema uyumlu masa-sandalye süslemeleri<br/>
                          • Canlı veya yapay çiçek aranjmanları<br/>
                          • Arka fon, tag, özel ışıklandırma<br/>
                          • Gelin yolu süslemeleri, nikâh kürsüsü<br/>
                          • Modern, rustik, bohem, klasik, romantik, vintage ve daha fazlası</p>
                        <p>🎶 <strong>Müzik ve Eğlence</strong><br/>
                          • Canlı müzik veya DJ performansı<br/>
                          • Ses ve ışık sistemleri kurulumu<br/>
                          • İlk dans için özel koreografi (isteğe bağlı)</p>
                        <p>📷 <strong>Fotoğraf ve Video Çekimi</strong><br/>
                          • Dış çekim ve etkinlik günü çekimi<br/>
                          • Drone çekimleri<br/>
                          • Anı defteri ve köşe hazırlığı</p>
                      </div>
                      <div className="space-y-4">
                        <p>🍽️ <strong>İkram ve Catering</strong><br/>
                          • Karşılama kokteyli (lokum, kolonya, içecek)<br/>
                          • Nişan/düğün pastası, tatlı büfesi<br/>
                          • Menü alternatifleri<br/>
                          • Sunum ekibi ve masa servisi</p>
                        <p>🪄 <strong>Diğer Hizmetler</strong><br/>
                          • Damat kahvesi ve tepsi temini<br/>
                          • Nedime bileklikleri & aksesuarları<br/>
                          • Hediyelik tasarımları<br/>
                          • Kişiye özel davetiye ve menü kartları<br/>
                          • Organizasyon günü koordinasyon ve asistanlık</p>
                        <p>💫 <strong>Siz sadece bu özel günün keyfini çıkarın, biz her detayı planlayalım.</strong><br/>
                          📍 Detaylı bilgi ve rezervasyon için bizimle iletişime geçin.</p>
                      </div>
                    </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="section bg-black">
          <div className="container-custom text-center">
            <h2 className="heading-2 text-gold mb-4">
              {language === 'en'
                  ? 'Are you ready to organize your Engagement and Wedding Organizations?'
                  : 'Nişan ve Düğün Organizasyonlarınızı düzenlemeye hazır mısınız?'}
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                  ? 'Contact us now for a perfect organization.'
                  : 'Mükemmel bir organizasyon için hemen iletişime geçin'}
            </p>
            <button
                onClick={handleContactClick}
                className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
            >
              {language === 'en' ? 'Get a Proposal' : 'Teklif Alın'}
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default EngagementWedding;