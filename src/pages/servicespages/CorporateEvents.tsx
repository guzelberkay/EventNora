import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import corporateBanner from '@/images/corporate_event.png';

const CorporateEvents = () => {
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
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 text-gold mb-4">
                {language === 'en' ? 'Corporate Events' : 'Kurumsal Etkinlikler'}
              </h1>
              <p className="text-gold-light/80 text-lg">
                {language === 'en'
                    ? 'Elevating your brand through exceptional experiences'
                    : 'Markanızı olağanüstü deneyimlerle yükseltiyoruz'}
              </p>
            </div>
          </div>
        </section>

        {/* Banner Image */}
        <section className="w-full h-auto">
          <img
              src={corporateBanner}
              alt={language === 'en' ? 'Corporate Event Banner' : 'Kurumsal Etkinlik Görseli'}
              className="w-full h-auto object-cover object-center"
          />
        </section>

        {/* Services Section */}
        <section className="section bg-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-10 text-center">
              {language === 'en' ? 'Corporate Event Services' : 'Kurumsal Etkinlik Hizmetlerimiz'}
            </h2>
            <div className="flex flex-wrap gap-10 text-textGray justify-center">
              {language === 'en' ? (
                  <>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>🏢 <strong>Stand out with your corporate events!</strong></p>
                      <p><strong>Professional event organization service for events that reflect your brand value</strong></p>
                      <p>🔹 Modern and impressive event designs that support your corporate image add prestige to your brand. We plan events that best reflect your brand's goals and vision.</p>
                      <p>📍 <strong>Corporate Event Service Content:</strong></p>
                      <p>💼 <strong>Event Planning & Management</strong><br/>
                        • Creating event concept & brand-compatible design<br/>
                        • Venue selection and decoration<br/>
                        • Planning event flow & real-time coordination<br/>
                        • VIP guest reception and welcome teams</p>
                      <p>🎤 <strong>Technical Infrastructure & Stage Setup</strong><br/>
                        • Stage setup, sound & lighting systems<br/>
                        • LED screens, projection presentations<br/>
                        • Microphone and simultaneous translation systems<br/>
                        • Host, MC and protocol coordination</p>
                      <p>🍽️ <strong>Catering Services</strong><br/>
                        • Welcome treats, coffee break stands<br/>
                        • Buffet or table service meals<br/>
                        • Corporate branded presentation areas<br/>
                        • Vegan, vegetarian and special menu options</p>
                    </div>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>📸 <strong>Promotion & Media Support</strong><br/>
                        • Professional photo & video shooting<br/>
                        • Social media content production<br/>
                        • Instant sharing corners & branded memory walls<br/>
                        • Post-event promotional film</p>
                      <p>🪄 <strong>Other Corporate Services</strong><br/>
                        • Product launch events<br/>
                        • Opening ceremonies<br/>
                        • Year-end gala & award ceremonies<br/>
                        • Training and motivation camps<br/>
                        • Dealer meetings, launches, conferences</p>
                      <p>💬 If you want to stand out in your business, your event should not be ordinary!<br/>
                        🔗 Work with us to add value to your corporate identity.<br/>
                        📍 Contact us for detailed information and corporate proposal.</p>
                    </div>
                  </>
              ) : (
                  <>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>🏢 <strong>Kurumsal Etkinliklerinizde Fark Yaratın!</strong></p>
                      <p><strong>Marka Değerinizi Yansıtan Etkinlikler İçin Profesyonel Organizasyon Hizmeti</strong></p>
                      <p>🔹 Kurumsal imajınızı destekleyen, modern ve etkileyici etkinlik tasarımları ile firmanız prestij kazanıyor. Biz, markanızın hedeflerini ve vizyonunu en iyi şekilde yansıtan etkinlikler planlıyoruz.</p>
                      <p>📍 <strong>Kurumsal Etkinlik Hizmet İçeriği:</strong></p>
                      <p>💼 <strong>Etkinlik Planlama & Yönetim</strong><br/>
                        • Etkinlik konsepti oluşturma ve marka temasıyla uyumlu tasarım<br/>
                        • Mekân seçimi ve dekorasyon<br/>
                        • Etkinlik akışı planlama & anlık koordinasyon<br/>
                        • VIP konuk ağırlama ve karşılama ekipleri</p>
                      <p>🎤 <strong>Teknik Altyapı & Sunum Alanı Kurulumu</strong><br/>
                        • Sahne kurulumu, ses & ışık sistemleri<br/>
                        • LED ekranlar, barkovizyon sunumları<br/>
                        • Mikrofon ve simultane tercüme sistemleri<br/>
                        • Sunucu, MC ve protokol koordinasyonu</p>
                      <p>🍽️ <strong>İkram & Catering Hizmetleri</strong><br/>
                        • Karşılama ikramları, coffee break standları<br/>
                        • Açık büfe veya masa servisi yemek organizasyonu<br/>
                        • Kurumsal branding’li sunum alanları<br/>
                        • Vegan, vejetaryen ve özel menü seçenekleri</p>
                    </div>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>📸 <strong>Tanıtım ve Medya Desteği</strong><br/>
                        • Profesyonel fotoğraf & video çekimi<br/>
                        • Sosyal medya içerik üretimi<br/>
                        • Anında paylaşım köşeleri ve markalı anı duvarları<br/>
                        • Etkinlik sonrası tanıtım filmi</p>
                      <p>🪄 <strong>Diğer Kurumsal Hizmetler</strong><br/>
                        • Lansman organizasyonları<br/>
                        • Açılış törenleri<br/>
                        • Yıl sonu gala & ödül törenleri<br/>
                        • Eğitim ve motivasyon kampları<br/>
                        • Bayi toplantıları, lansmanlar, konferanslar</p>
                      <p>💬 İşinizde fark yaratmak istiyorsanız, organizasyon da sıradan olmamalı!<br/>
                        🔗 Bizimle çalışın, kurumsal kimliğinize değer katalım.<br/>
                        📍 Detaylı bilgi ve kurumsal teklif için bize ulaşın.</p>
                    </div>
                  </>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-black">
          <div className="container-custom text-center">
            <h2 className="heading-2 text-gold mb-4">
              {language === 'en'
                  ? 'Ready to elevate your corporate events?'
                  : 'Kurumsal etkinliklerinizi yükseltmeye hazır mısınız?'}
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                  ? 'Contact us to create memorable experiences that reflect your brand values.'
                  : 'Marka değerlerinizi yansıtan unutulmaz deneyimler yaratmak için bizimle iletişime geçin.'}
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

export default CorporateEvents;
