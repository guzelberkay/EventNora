import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import consultancyImg from '@/images/Consultancy_event.jpg';

const ConsultancyPage = () => {
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
      ? 'Consultancy Services | Event Strategy & Planning'
      : 'Danışmanlık Hizmetleri | Etkinlik Stratejisi ve Planlama';

  const seoDescription = isEnglish
      ? 'We provide consultancy services for every step of event planning — from strategy to execution and evaluation.'
      : 'Etkinlik planlamasından uygulamaya ve değerlendirmeye kadar her aşamada danışmanlık hizmeti sunuyoruz.';

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
              🧭 {isEnglish ? 'Consultancy Services' : 'Danışmanlık Hizmetleri'}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {isEnglish
                  ? 'Smart strategies for successful events!'
                  : 'Etkinliklerinizde Doğru Adımlar, Doğru Stratejilerle Atılır!'}
            </p>
          </div>
        </section>

        {/* Visual Banner */}
        <section className="w-full h-auto">
          <img
              src={consultancyImg}
              alt={isEnglish ? 'Professional Event Consultancy Services' : 'Profesyonel Etkinlik Danışmanlık Hizmetleri'}
              loading="lazy"
              className="w-full h-full object-cover object-center"
          />
        </section>

        {/* Content Section */}
        <section className="section bg-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-10 text-center">
              {isEnglish ? 'Our Services' : 'Hizmet İçeriğimiz'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
              <ContentColumn
                  content={[
                    isEnglish
                        ? '💼 From planning to post-event analysis, we offer expert consultancy every step of the way. Together, we walk the path to success.'
                        : '💼 Etkinlik planlama sürecinden son değerlendirmeye kadar profesyonel danışmanlık hizmetimizle yanınızdayız.',
                    {
                      title: isEnglish
                          ? '📋 Pre-Event Strategic Planning'
                          : '📋 Etkinlik Öncesi Stratejik Planlama',
                      items: isEnglish
                          ? [
                            'Target audience analysis',
                            'Event concept, theme & content consultancy',
                            'Budgeting & resource management',
                            'Location & timing strategies',
                          ]
                          : [
                            'Hedef kitle analizi ve ihtiyaç belirleme',
                            'Etkinlik konsepti, tema ve içerik danışmanlığı',
                            'Bütçe planlaması ve kaynak yönetimi',
                            'Lokasyon seçimi ve zamanlama planı',
                          ],
                    },
                    {
                      title: isEnglish
                          ? '🤝 Corporate & Individual Consultancy'
                          : '🤝 Kurumsal & Bireysel Danışmanlık',
                      items: isEnglish
                          ? [
                            'Tailored event strategies for brands',
                            'Individual project-based event guidance',
                            'Roadmap for NGOs, public & private events',
                            'Content & event flow design support',
                          ]
                          : [
                            'Marka ve kurumlara özel etkinlik stratejileri',
                            'Proje bazlı bireysel organizasyon rehberliği',
                            'STK, kamu ve özel sektör etkinlikleri için yol haritası',
                            'Etkinlik içeriği ve akış kurgusu desteği',
                          ],
                    },
                  ]}
              />

              <ContentColumn
                  content={[
                    {
                      title: isEnglish
                          ? '📈 On-Site Execution Support'
                          : '📈 Uygulama Sürecinde Danışmanlık',
                      items: isEnglish
                          ? [
                            'Vendor & team selection guidance',
                            'Coordination of logistics',
                            'Timeline and task tracking',
                            'Backstage rehearsal & technical guidance',
                          ]
                          : [
                            'Tedarikçi ve ekip seçimi yönlendirmesi',
                            'Lojistik süreçler için koordinasyon desteği',
                            'Zaman çizelgesi ve görev dağılımı takibi',
                            'Prova, teknik detay ve sahne arkasında rehberlik',
                          ],
                    },
                    {
                      title: isEnglish
                          ? '📊 Post-Event Evaluation'
                          : '📊 Etkinlik Sonrası Değerlendirme',
                      items: isEnglish
                          ? [
                            'Participant satisfaction analysis',
                            'Reporting and performance metrics',
                            'Improvement and future planning',
                            'Feedback on branding and event impact',
                          ]
                          : [
                            'Katılımcı memnuniyet analizi',
                            'Raporlama ve performans ölçümleme',
                            'İyileştirme ve tekrar planlaması için öneriler',
                            'Marka algısı ve etkinlik başarısı üzerine geri bildirim',
                          ],
                    },
                    isEnglish
                        ? '🔍 With the right plan and expert insight, we help you manage your events effectively.'
                        : '🔍 Doğru planlama ve uzman bakış açısı ile etkinliklerinizi en etkili şekilde yönetmenizi sağlıyoruz.',
                  ]}
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-black text-center">
          <div className="container-custom">
            <h2 className="heading-2 text-gold mb-4">
              {isEnglish
                  ? '📍 Let’s consult, plan, and succeed together!'
                  : '📍 Danışalım, planlayalım, birlikte başarıya ulaşalım!'}
            </h2>
            <button
                onClick={handleContactClick}
                className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
            >
              {isEnglish ? 'Get Consultation' : 'Danışmanlık Alın'}
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default ConsultancyPage;

// Reusable content column component
const ContentColumn = ({
                         content,
                       }: {
  content: (string | { title: string; items: string[] })[];
}) => (
    <div className="space-y-4">
      {content.map((block, index) =>
          typeof block === 'string' ? (
              <p key={index}>{block}</p>
          ) : (
              <p key={index}>
                <strong>{block.title}</strong>
                <br />
                {block.items.map((item, idx) => (
                    <React.Fragment key={idx}>
                      • {item}
                      <br />
                    </React.Fragment>
                ))}
              </p>
          )
      )}
    </div>
);
