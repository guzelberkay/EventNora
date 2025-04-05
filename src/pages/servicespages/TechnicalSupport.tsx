import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import technicalImg from '@/images/technical_support_event.png';

const TechnicalSupportPage = () => {
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
              {language === 'en' ? '🔧 Technical & Logistics Support' : '🔧 Teknik ve Lojistik Destek'}
            </h1>
            <p className="text-gold-light/80 text-lg">
              {language === 'en'
                  ? 'Strong infrastructure for flawless events!'
                  : 'Sorunsuz Etkinlikler İçin Güçlü Altyapı!'}
            </p>
          </div>
        </section>

        {/* Image Banner */}
        <section className="w-full h-auto">
          <img src={technicalImg} alt="Technical Support" className="w-full h-full object-cover object-center" />
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
                        ? '🎯 We offer all technical and logistical services needed to ensure a safe, organized, and professional flow at every stage of your event.'
                        : '🎯 Etkinliğinizin her anında güvenli, düzenli ve profesyonel bir akış sağlamak için gerekli tüm teknik ve lojistik hizmetleri titizlikle sunuyoruz.'}
                  </p>
                  <p>
                    <strong>🔌 {language === 'en' ? 'Technical Infrastructure & Setup' : 'Teknik Altyapı ve Kurulum'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Sound, light, and video system installation<br />
                          • LED screens, projection, and live stream solutions<br />
                          • Stage, podium, tent, truss systems<br />
                          • Electrical infrastructure and generator support
                        </>
                    ) : (
                        <>
                          • Ses, ışık ve görüntü sistemlerinin kurulumu<br />
                          • LED ekranlar, projeksiyon ve canlı yayın çözümleri<br />
                          • Sahne, podyum, çadır, truss sistemleri kurulumu<br />
                          • Elektrik altyapısı ve jeneratör desteği
                        </>
                    )}
                  </p>
                  <p>
                    <strong>🚛 {language === 'en' ? 'Logistics Services' : 'Lojistik Hizmetleri'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Material transport, setup and dismantling<br />
                          • Equipment organization and placement<br />
                          • Supply and inventory tracking<br />
                          • Coordination of on-site technical staff
                        </>
                    ) : (
                        <>
                          • Malzeme taşıma, kurulum ve söküm<br />
                          • Araç-gereç organizasyonu ve yerleştirme<br />
                          • Tedarik ve stok takibi<br />
                          • Sahada görevli teknik ekip koordinasyonu
                        </>
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>🧯 {language === 'en' ? 'Safety & Support Services' : 'Güvenlik ve Destek Hizmetleri'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Fire, first aid, and emergency planning<br />
                          • Entry-exit control systems<br />
                          • Toilets, trash bins, hand sanitizers, signboards<br />
                          • Permit, license, and municipality procedures
                        </>
                    ) : (
                        <>
                          • Yangın, ilk yardım ve acil durum planlaması<br />
                          • Giriş-çıkış kontrol sistemleri<br />
                          • Tuvalet, çöp kutusu, el dezenfektanı, yönlendirme tabelaları<br />
                          • İzin, ruhsat ve belediye süreçlerinin takibi
                        </>
                    )}
                  </p>
                  <p>
                    <strong>🎤 {language === 'en' ? 'Live Technical Monitoring' : 'Etkinlik Boyunca Teknik Takip'}</strong><br />
                    {language === 'en' ? (
                        <>
                          • Real-time technical interventions & control<br />
                          • Backstage communication & time management<br />
                          • Camera, sound, light control desk<br />
                          • Rehearsal planning and performance coordination
                        </>
                    ) : (
                        <>
                          • Anlık teknik müdahale ve sistem kontrolü<br />
                          • Sahne arkası iletişim ve zaman yönetimi<br />
                          • Kamera, ses ve ışık kontrol masası desteği<br />
                          • Planlı prova ve performans koordinasyonu
                        </>
                    )}
                  </p>
                  <p>
                    {language === 'en'
                        ? '⚙️ Leave the technical details to us — just enjoy your event!'
                        : '⚙️ Tüm teknik detayları bize bırakın, siz sadece etkinliğin keyfini çıkarın!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-black">
          <div className="container-custom text-center">
            <h2 className="heading-2 text-gold mb-4">
              {language === 'en'
                  ? '📍 Contact us today to build a strong event infrastructure!'
                  : '📍 Hemen bizimle iletişime geçin, altyapınız sağlam olsun!'}
            </h2>
            <button
                onClick={handleContactClick}
                className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
            >
              {language === 'en' ? 'Get Support' : 'Destek Alın'}
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default TechnicalSupportPage;
