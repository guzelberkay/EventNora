import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const FestivalEtkinligi = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/tr/iletisim');
    };

    return (
        <Layout>
            <Helmet>
                <title>Festival ve Büyük Ölçekli Etkinlik Organizasyonu | Event Nora</title>
                <meta
                    name="description"
                    content="Müzik festivalleri, halka açık etkinlikler ve marka tanıtımları – büyük ölçekli etkinliklerinizi yaratıcı planlama ve kusursuz uygulama ile organize ediyoruz."
                />
                <meta name="keywords" content="festival organizasyonu, büyük etkinlik, kamu etkinliği, üniversite festivali, açık hava etkinliği" />
                <meta property="og:title" content="Festival ve Büyük Ölçekli Etkinlik Organizasyonu | Event Nora" />
                <meta property="og:description" content="Festival, kamu etkinlikleri ve açık hava organizasyonlarınız için profesyonel çözümler." />
                <meta property="og:image" content="https://www.eventnora.com/images/festival_event.jpg" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/festival-etkinlik-organizasyonu" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Festival ve Büyük Ölçekli Etkinlik Organizasyonu | Event Nora" />
                <meta name="twitter:description" content="Festival, kamu etkinlikleri ve açık hava organizasyonlarınız için profesyonel çözümler." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/festival_event.jpg" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/festival-etkinlik-organizasyonu" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/en/services/festival-event" />
            </Helmet>


            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">Festival ve Etkinlik Organizasyonu</h1>
                    <p className="text-gold-light/80 text-lg">Unutulmaz deneyimler yaratan büyük ölçekli etkinlikler</p>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                    alt="Festival organizasyonu"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">Festival Hizmetlerimiz</h2>

                    <div className="flex flex-wrap gap-10 text-textGray justify-center text-sm leading-relaxed">
                        <ContentColumn
                            items={[
                                '🎪 <strong>Unutulmaz Anlar, Kusursuz Organizasyonlarla Başlar!</strong>',
                                '🌟 Büyük düşünün, biz gerçekleştirelim! Müzik festivallerinden gençlik etkinliklerine, kamu organizasyonlarından marka tanıtımlarına kadar her ölçekte etkinliğinizi yaratıcı bir vizyonla hayata geçiriyoruz.',
                                '📍 <strong>Hizmet İçeriğimiz:</strong>',
                                '🎤 <strong>Sahne & Sanatçı Organizasyonu</strong><br />• Konser, DJ performansı, yerli-yabancı sanatçılar<br />• Dans grubu, gösteri ekipleri, sahne şovları<br />• Etkinliğe özel müzik planlaması ve akış yönetimi<br />• Profesyonel ses, ışık ve sahne sistemleri kurulumu',
                                '🎪 <strong>Konsept ve Mekân Tasarımı</strong><br />• Festival teması, giriş alanı, yönlendirme tabelaları<br />• Stand ve sahne dekorları, festival objeleri<br />• Açık hava oturma alanları, chill zone kurulumu<br />• Balon, bayrak, brandalama ve görsel süslemeler',
                                '🎉 <strong>Etkinlik Alanı Lojistiği</strong><br />• Alan keşfi ve uygun yer seçimi<br />• Güvenlik, temizlik, sağlık ve teknik destek hizmetleri<br />• İzinler, ruhsatlar ve belediye süreçlerinin takibi<br />• Tuvalet, jeneratör, çadır ve portatif alan çözümleri',
                            ]}
                        />
                        <ContentColumn
                            items={[
                                '📸 <strong>Tanıtım & Medya Yönetimi</strong><br />• Sosyal medya kampanyaları ve görsel içerik üretimi<br />• Etkili afiş, davetiye ve banner tasarımları<br />• Canlı yayın, drone çekimi ve fotoğraf/video hizmeti<br />• Festival sonrası içerik hazırlığı (aftermovie, galeri, vs.)',
                                '🪩 <strong>Etkinlik Türleri</strong><br />• Müzik Festivalleri<br />• Kamu & Belediye Etkinlikleri<br />• Gençlik ve Üniversite Festivalleri<br />• Marka ve Kurumsal Açık Hava Etkinlikleri<br />• Tema Geceleri ve Panayır Konseptleri',
                                '🎧 Kalabalıkları buluşturduğumuz yüzlerce etkinlikte aynı heyecanla yanınızdayız!<br />🎪 Hayal edin, tasarlayalım, birlikte eğlenelim!<br />📍 Projenizi konuşmak için bizimle iletişime geçin.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">Festival veya büyük ölçekli etkinliğinizi organize etmeye hazır mısınız?</h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Uzman etkinlik organizasyon hizmetleri için bizimle iletişime geçin.
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        İletişime Geçin
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default FestivalEtkinligi;

const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="w-full md:w-[48%] space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
