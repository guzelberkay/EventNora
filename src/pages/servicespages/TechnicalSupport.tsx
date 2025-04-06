import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import technicalImg from '@/images/technical_support_event.png';

const TechnicalSupportPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isEnglish = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = isEnglish
      ? 'Technical & Logistics Support | Event Services'
      : 'Teknik ve Lojistik Destek | Etkinlik Hizmetleri';

  const pageDescription = isEnglish
      ? 'We provide professional technical infrastructure and logistics services for flawless event execution.'
      : 'Etkinliklerinizde kusursuz bir deneyim için profesyonel teknik altyapı ve lojistik hizmetler sunuyoruz.';

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
        </Helmet>

        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-gold mb-4">
              {isEnglish ? '🔧 Technical & Logistics Support' : '🔧 Teknik ve Lojistik Destek'}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {isEnglish ? 'Strong infrastructure for flawless events!' : 'Sorunsuz Etkinlikler İçin Güçlü Altyapı!'}
            </p>
          </div>
        </section>

        {/* Banner Image */}
        <section className="w-full h-auto">
          <img
              src={technicalImg}
              alt={isEnglish ? 'Technical Support' : 'Teknik Destek'}
              className="w-full h-auto object-cover object-center"
              loading="lazy"
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
                  items={
                    isEnglish
                        ? [
                          '🎯 We offer all technical and logistical services needed to ensure a safe, organized, and professional flow at every stage of your event.',
                          '🔌 <strong>Technical Infrastructure & Setup</strong><br />• Sound, light, and video system installation<br />• LED screens, projection, and live stream solutions<br />• Stage, podium, tent, truss systems<br />• Electrical infrastructure and generator support',
                          '🚛 <strong>Logistics Services</strong><br />• Material transport, setup and dismantling<br />• Equipment organization and placement<br />• Supply and inventory tracking<br />• Coordination of on-site technical staff',
                        ]
                        : [
                          '🎯 Etkinliğinizin her anında güvenli, düzenli ve profesyonel bir akış sağlamak için gerekli tüm teknik ve lojistik hizmetleri titizlikle sunuyoruz.',
                          '🔌 <strong>Teknik Altyapı ve Kurulum</strong><br />• Ses, ışık ve görüntü sistemlerinin kurulumu<br />• LED ekran, projeksiyon ve canlı yayın çözümleri<br />• Sahne, podyum, çadır, truss sistemleri<br />• Elektrik altyapısı ve jeneratör desteği',
                          '🚛 <strong>Lojistik Hizmetleri</strong><br />• Malzeme taşıma, kurulum ve söküm<br />• Ekipman organizasyonu ve yerleşimi<br />• Tedarik ve stok takibi<br />• Teknik ekip koordinasyonu',
                        ]
                  }
              />

              <ContentColumn
                  items={
                    isEnglish
                        ? [
                          '🧯 <strong>Safety & Support Services</strong><br />• Fire, first aid, and emergency planning<br />• Entry-exit control systems<br />• Toilets, bins, sanitizers, signboards<br />• Permit, license, municipality procedures',
                          '🎤 <strong>Live Technical Monitoring</strong><br />• Real-time technical interventions<br />• Backstage communication<br />• Control desks for camera, sound, light<br />• Rehearsal planning and coordination',
                          '⚙️ Leave the technical details to us — just enjoy your event!',
                        ]
                        : [
                          '🧯 <strong>Güvenlik ve Destek Hizmetleri</strong><br />• Yangın, ilk yardım ve acil durum planlaması<br />• Giriş-çıkış kontrol sistemleri<br />• Tuvalet, çöp kutusu, dezenfektan, tabelalar<br />• İzin, ruhsat ve belediye işlemleri',
                          '🎤 <strong>Etkinlik Boyunca Teknik Takip</strong><br />• Anlık teknik müdahale ve kontrol<br />• Sahne arkası iletişim<br />• Kamera, ses ve ışık kontrol noktaları<br />• Prova planlaması ve koordinasyon',
                          '⚙️ Tüm teknik detayları bize bırakın, siz sadece etkinliğin keyfini çıkarın!',
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
                  ? '📍 Contact us today to build a strong event infrastructure!'
                  : '📍 Hemen bizimle iletişime geçin, altyapınız sağlam olsun!'}
            </h2>
            <button
                onClick={handleContactClick}
                className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
            >
              {isEnglish ? 'Get Support' : 'Destek Alın'}
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default TechnicalSupportPage;

// Reusable column component
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
      {items.map((item, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </div>
);
