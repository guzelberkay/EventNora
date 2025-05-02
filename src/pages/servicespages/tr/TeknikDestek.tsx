import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import technicalImg from '@/images/technical_support_event.webp';

const TeknikDestek = () => {
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
                <title>Teknik ve Lojistik Destek | Event Nora</title>
                <meta
                    name="description"
                    content="Etkinliklerinizde kusursuz bir deneyim için profesyonel teknik altyapı ve lojistik hizmetler sunuyoruz."
                />
                <meta name="keywords" content="teknik destek, etkinlik teknik altyapı, ses ışık sistemleri, sahne kurulum, Event Nora" />
                <meta property="og:title" content="Teknik ve Lojistik Destek | Event Nora" />
                <meta property="og:description" content="Etkinliklerinizin teknik altyapısı için güvenilir çözüm ortağınız Event Nora." />
                <meta property="og:image" content="https://www.eventnora.com/images/technical_support_event.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/teknik-destek" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Teknik ve Lojistik Destek | Event Nora" />
                <meta name="twitter:description" content="Profesyonel etkinlikler için güçlü teknik altyapı çözümleri." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/technical_support_event.webp" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/teknik-destek" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/en/services/technical-support" />
            </Helmet>


            {/* Hero Section */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🔧 Teknik ve Lojistik Destek
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Sorunsuz Etkinlikler İçin Güçlü Altyapı!
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="w-full h-auto">
                <img
                    src={technicalImg}
                    alt="Teknik Destek"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Hizmet İçeriğimiz
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                        <ContentColumn
                            items={[
                                '🎯 Etkinliğinizin her anında güvenli, düzenli ve profesyonel bir akış sağlamak için gerekli tüm teknik ve lojistik hizmetleri titizlikle sunuyoruz.',
                                '🔌 <strong>Teknik Altyapı ve Kurulum</strong><br />• Ses, ışık ve görüntü sistemlerinin kurulumu<br />• LED ekran, projeksiyon ve canlı yayın çözümleri<br />• Sahne, podyum, çadır, truss sistemleri<br />• Elektrik altyapısı ve jeneratör desteği',
                                '🚛 <strong>Lojistik Hizmetleri</strong><br />• Malzeme taşıma, kurulum ve söküm<br />• Ekipman organizasyonu ve yerleşimi<br />• Tedarik ve stok takibi<br />• Teknik ekip koordinasyonu',
                            ]}
                        />
                        <ContentColumn
                            items={[
                                '🧯 <strong>Güvenlik ve Destek Hizmetleri</strong><br />• Yangın, ilk yardım ve acil durum planlaması<br />• Giriş-çıkış kontrol sistemleri<br />• Tuvalet, çöp kutusu, dezenfektan, tabelalar<br />• İzin, ruhsat ve belediye işlemleri',
                                '🎤 <strong>Etkinlik Boyunca Teknik Takip</strong><br />• Anlık teknik müdahale ve kontrol<br />• Sahne arkası iletişim<br />• Kamera, ses ve ışık kontrol noktaları<br />• Prova planlaması ve koordinasyon',
                                '⚙️ Tüm teknik detayları bize bırakın, siz sadece etkinliğin keyfini çıkarın!',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        📍 Hemen bizimle iletişime geçin, altyapınız sağlam olsun!
                    </h2>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                    >
                        Destek Alın
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default TeknikDestek;

// Reusable content column
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-6 text-base md:text-lg leading-relaxed">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
