import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const FestivalEvent = () => {
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
                {language === 'en' ? 'Festival & Event Organization' : 'Festival ve Etkinlik Organizasyonu'}
              </h1>
              <p className="text-gold-light/80 text-lg">
                {language === 'en'
                    ? 'Large-scale events that create unforgettable experiences'
                    : 'Unutulmaz deneyimler yaratan büyük ölçekli etkinlikler'}
              </p>
            </div>
          </div>
        </section>

        <section className="w-full h-auto">
          <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
              alt={language === 'en' ? 'Festival organization' : 'Festival organizasyonu'}
              className="w-full h-full object-cover object-center"
          />
        </section>

        <section className="section bg-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-10 text-center">
              {language === 'en' ? 'Festival Services' : 'Festival Hizmetlerimiz'}
            </h2>
            <div className="flex flex-wrap gap-10 text-textGray justify-center">
              {language === 'en' ? (
                  <>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>🎪 <strong>Unforgettable Moments Begin with Perfect Organization!</strong></p>
                      <p>🌟 Think big, we make it happen! From music festivals to youth events and public celebrations, we deliver your vision with creativity and precision.</p>
                      <p>📍 <strong>Service Scope:</strong></p>
                      <p>🎤 <strong>Stage & Artist Management</strong><br/>
                        • Concerts, DJ sets, local & international artists<br/>
                        • Dance crews, performers, stage shows<br/>
                        • Custom music planning & flow management<br/>
                        • Professional sound, light & stage systems</p>
                      <p>🎪 <strong>Concept & Venue Design</strong><br/>
                        • Festival themes, entrance zones, signages<br/>
                        • Stand & stage decorations, themed objects<br/>
                        • Outdoor lounges, chill zones<br/>
                        • Balloons, flags, branding, and visuals</p>
                      <p>🎉 <strong>Logistics & Area Services</strong><br/>
                        • Site inspection & location selection<br/>
                        • Security, cleaning, health & tech support<br/>
                        • Permits, licenses & municipality procedures<br/>
                        • Toilets, generators, tents, portable zones</p>
                    </div>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>📸 <strong>Promotion & Media</strong><br/>
                        • Social media campaigns & visual content<br/>
                        • Posters, invites, banners<br/>
                        • Live streaming, drone, photo/video<br/>
                        • Post-event content: aftermovie, galleries</p>
                      <p>🪩 <strong>Types of Events</strong><br/>
                        • Music Festivals<br/>
                        • Public & Municipality Events<br/>
                        • Youth & University Festivals<br/>
                        • Corporate & Brand Open-Air Events<br/>
                        • Themed Nights & Fairs</p>
                      <p>🎧 We've shared the excitement at hundreds of crowd-filled events!<br/>
                        🎪 Imagine it, we design it, let's enjoy it together!<br/>
                        📍 Contact us to talk about your project.</p>
                    </div>
                  </>
              ) : (
                  <>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>🎪 <strong>Unutulmaz Anlar, Kusursuz Organizasyonlarla Başlar!</strong></p>
                      <p>🌟 Büyük düşünün, biz gerçekleştirelim! Müzik festivallerinden gençlik etkinliklerine, kamu organizasyonlarından marka tanıtımlarına kadar her ölçekte etkinliğinizi yaratıcı bir vizyonla hayata geçiriyoruz.</p>
                      <p>📍 <strong>Hizmet İçeriğimiz:</strong></p>
                      <p>🎤 <strong>Sahne & Sanatçı Organizasyonu</strong><br/>
                        • Konser, DJ performansı, yerli-yabancı sanatçılar<br/>
                        • Dans grubu, gösteri ekipleri, sahne şovları<br/>
                        • Etkinliğe özel müzik planlaması ve akış yönetimi<br/>
                        • Profesyonel ses, ışık ve sahne sistemleri kurulumu</p>
                      <p>🎪 <strong>Konsept ve Mekân Tasarımı</strong><br/>
                        • Festival teması, giriş alanı, yönlendirme tabelaları<br/>
                        • Stand ve sahne dekorları, festival objeleri<br/>
                        • Açık hava oturma alanları, chill zone kurulumu<br/>
                        • Balon, bayrak, brandalama ve görsel süslemeler</p>
                      <p>🎉 <strong>Etkinlik Alanı Lojistiği</strong><br/>
                        • Alan keşfi ve uygun yer seçimi<br/>
                        • Güvenlik, temizlik, sağlık ve teknik destek hizmetleri<br/>
                        • İzinler, ruhsatlar ve belediye süreçlerinin takibi<br/>
                        • Tuvalet, jeneratör, çadır ve portatif alan çözümleri</p>
                    </div>
                    <div className="w-full md:w-[48%] space-y-4">
                      <p>📸 <strong>Tanıtım & Medya Yönetimi</strong><br/>
                        • Sosyal medya kampanyaları ve görsel içerik üretimi<br/>
                        • Etkili afiş, davetiye ve banner tasarımları<br/>
                        • Canlı yayın, drone çekimi ve fotoğraf/video hizmeti<br/>
                        • Festival sonrası içerik hazırlığı (aftermovie, galeri, vs.)</p>
                      <p>🪩 <strong>Etkinlik Türleri</strong><br/>
                        • Müzik Festivalleri<br/>
                        • Kamu & Belediye Etkinlikleri<br/>
                        • Gençlik ve Üniversite Festivalleri<br/>
                        • Marka ve Kurumsal Açık Hava Etkinlikleri<br/>
                        • Tema Geceleri ve Panayır Konseptleri</p>
                      <p>🎧 Kalabalıkları Buluşturduğumuz Yüzlerce Etkinlikte Aynı Heyecanla Yanınızdayız!<br/>
                        🎪 Hayal edin, tasarlayalım, birlikte eğlenelim!<br/>
                        📍 Projelerinizi konuşmak için bizimle iletişime geçin.</p>
                    </div>
                  </>
              )}
            </div>
          </div>
        </section>

        <section className="section bg-black">
          <div className="container-custom text-center">
            <h2 className="heading-2 text-gold mb-4">
              {language === 'en'
                  ? 'Ready to organize your festival or large-scale event?'
                  : 'Festival veya büyük ölçekli etkinliğinizi organize etmeye hazır mısınız?'}
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                  ? 'Contact us for expert event organization services'
                  : 'Uzman etkinlik organizasyon hizmetleri için bizimle iletişime geçin'}
            </p>
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

export default FestivalEvent;