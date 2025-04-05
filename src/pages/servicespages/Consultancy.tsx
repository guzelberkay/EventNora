import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import consultancyImg from '@/images/Consultancy_event.jpg'; // Görsel dosyası eklendi

const ConsultancyPage = () => {
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
              {language === 'en' ? '🧭 Consultancy Services' : '🧭 Danışmanlık Hizmetleri'}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {language === 'en'
                  ? 'Smart strategies for successful events!'
                  : 'Etkinliklerinizde Doğru Adımlar, Doğru Stratejilerle Atılır!'}
            </p>
          </div>
        </section>

        {/* Görsel Banner */}
        <section className="w-full h-auto">
          <img src={consultancyImg} alt="Consultancy Service" className="w-full h-full object-cover object-center" />
        </section>

        {/* Content */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-black mb-10 text-center">
                {language === 'en' ? 'Our Services' : 'Hizmet İçeriğimiz'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                <div className="space-y-4">
                  <p>
                    {language === 'en'
                        ? '💼 From planning to post-event analysis, we offer expert consultancy every step of the way. Together, we walk the path to success.'
                        : '💼 Etkinlik planlama sürecinden son değerlendirmeye kadar, tüm aşamalarda profesyonel danışmanlık hizmetimizle yanınızdayız. Başarıya giden yolda birlikte yürüyoruz.'}
                  </p>
                  <p>
                    <strong>📋 {language === 'en' ? 'Pre-Event Strategic Planning' : 'Etkinlik Öncesi Stratejik Planlama'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Target audience analysis<br />
                          • Event concept, theme & content consultancy<br />
                          • Budgeting & resource management<br />
                          • Location & timing strategies
                        </>
                    ) : (
                        <>
                          • Hedef kitle analizi ve ihtiyaç belirleme<br />
                          • Etkinlik konsepti, tema ve içerik danışmanlığı<br />
                          • Bütçe planlaması ve kaynak yönetimi<br />
                          • Lokasyon seçimi ve zamanlama planı
                        </>
                    )}
                  </p>
                  <p>
                    <strong>🤝 {language === 'en' ? 'Corporate & Individual Consultancy' : 'Kurumsal & Bireysel Danışmanlık'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Tailored event strategies for brands<br />
                          • Individual project-based event guidance<br />
                          • Roadmap for NGOs, public & private events<br />
                          • Content & event flow design support
                        </>
                    ) : (
                        <>
                          • Marka ve kurumlara özel etkinlik stratejileri<br />
                          • Proje bazlı bireysel organizasyon rehberliği<br />
                          • STK, kamu ve özel sektör etkinlikleri için yol haritası<br />
                          • Etkinlik içeriği ve akış kurgusu desteği
                        </>
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>📈 {language === 'en' ? 'On-Site Execution Support' : 'Uygulama Sürecinde Danışmanlık'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Vendor & team selection guidance<br />
                          • Coordination of logistics<br />
                          • Timeline and task tracking<br />
                          • Backstage rehearsal & technical guidance
                        </>
                    ) : (
                        <>
                          • Tedarikçi ve ekip seçimi yönlendirmesi<br />
                          • Lojistik süreçler için koordinasyon desteği<br />
                          • Zaman çizelgesi ve görev dağılımı takibi<br />
                          • Prova, teknik detay ve sahne arkasında rehberlik
                        </>
                    )}
                  </p>
                  <p>
                    <strong>📊 {language === 'en' ? 'Post-Event Evaluation' : 'Etkinlik Sonrası Değerlendirme'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Participant satisfaction analysis<br />
                          • Reporting and performance metrics<br />
                          • Improvement and future planning<br />
                          • Feedback on branding and event impact
                        </>
                    ) : (
                        <>
                          • Katılımcı memnuniyet analizi<br />
                          • Raporlama ve performans ölçümleme<br />
                          • İyileştirme ve tekrar planlaması için öneriler<br />
                          • Marka algısı ve etkinlik başarısı üzerine geri bildirim
                        </>
                    )}
                  </p>
                  <p>
                    {language === 'en'
                        ? '🔍 With the right plan and expert insight, we help you manage your events effectively.'
                        : '🔍 Doğru planlama ve uzman bakış açısı ile etkinliklerinizi en etkili şekilde yönetmenizi sağlıyoruz.'}
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
                  ? '📍 Let’s consult, plan, and succeed together!'
                  : '📍 Danışalım, planlayalım, birlikte başarıya ulaşalım!'}
            </h2>
            <button
                onClick={handleContactClick}
                className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
            >
              {language === 'en' ? 'Get Consultation' : 'Danışmanlık Alın'}
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default ConsultancyPage;
