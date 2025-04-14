import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import personalImage from '@/images/personal_event.png';

const KisiselEtkinlikTr = () => {
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
                <title>Kişisel Etkinlik Planlama Hizmetleri | Event Nora</title>
                <meta
                    name="description"
                    content="Doğum günü, nişan, baby shower gibi en özel anlarınızı profesyonel konseptler ve şık dokunuşlarla planlıyoruz."
                />
                <meta
                    name="keywords"
                    content="kişisel etkinlik, doğum günü organizasyonu, baby shower, nişan, kına gecesi, mezuniyet organizasyonu"
                />
                <meta property="og:title" content="Kişisel Etkinlik Planlama Hizmetleri | Event Nora" />
                <meta
                    property="og:description"
                    content="Hayatınızın en özel anlarını profesyonelce planlıyor ve unutulmaz hâle getiriyoruz."
                />
                <meta
                    property="og:image"
                    content="https://www.eventnora.com/images/personal_event.png"
                />
                <meta
                    property="og:url"
                    content="https://www.eventnora.com/tr/hizmetler/kisisel-etkinlik"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kişisel Etkinlik Planlama Hizmetleri | Event Nora" />
                <meta
                    name="twitter:description"
                    content="Hayatınızın en özel anlarını profesyonelce planlıyor ve unutulmaz hâle getiriyoruz."
                />
                <meta name="twitter:image" content="https://www.eventnora.com/images/personal_event.png" />
                <link
                    rel="canonical"
                    href="https://www.eventnora.com/tr/hizmetler/kisisel-etkinlik"
                />
                <link
                    rel="alternate"
                    hrefLang="en"
                    href="https://www.eventnora.com/en/services/personal-events"
                />
            </Helmet>


            {/* Hero Section */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🎈 Kişisel Etkinlik Planlaması
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Hayatınızın en özel anları, profesyonel dokunuşlarla mükemmelleşir!
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="w-full h-auto">
                <img
                    src={personalImage}
                    alt="Kişisel Etkinlik"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Services Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Kişisel Etkinlik Hizmetlerimiz
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-textGray">
                        <ContentColumn
                            items={[
                                '🌟 Doğum günü, nişan, baby shower, mezuniyet gibi özel anlarınızı en ince detayına kadar planlıyoruz.',
                                '📍 <strong>Hizmet İçeriğimiz:</strong>',
                                '🎉 <strong>Etkinlik Planlama</strong><br />• Konsept belirleme<br />• Davetli listesi, davetiye ve oturma düzeni<br />• Müzik, eğlence, aktiviteler<br />• Günlük akış ve zaman yönetimi',
                                '🎨 <strong>Dekorasyon & Tasarım</strong><br />• Kişiye özel temalar<br />• Mekân ve arka fon düzenlemeleri<br />• Balon, çiçek, masa süslemeleri<br />• Fotoğraf köşesi ve giriş tasarımı',
                                '🍰 <strong>İkram & Catering</strong><br />• Menü planlama ve sunum<br />• Pasta ve atıştırmalık köşeleri<br />• İçecek barı kurulumu<br />• Özel diyet seçenekleri',
                            ]}
                        />

                        <ContentColumn
                            items={[
                                '📸 <strong>Anı Yaratımı</strong><br />• Fotoğraf ve video çekimi<br />• Drone ve canlı yayın hizmeti<br />• Etkinlik sonrası video ve galeri<br />• Özel baskılar ve hatıralar',
                                '🎈 <strong>Etkinlik Türleri</strong><br />• Doğum Günleri<br />• Nişan & Kına<br />• Baby Shower & Cinsiyet Partisi<br />• Mezuniyet & Özel Kutlamalar<br />• Evlilik Teklifi Organizasyonları',
                                '💫 Hayalinizdeki anı planlayalım, siz sadece keyfini çıkarın!<br />📍 Detaylar için bizimle iletişime geçin.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        Hadi, Bu Anı Unutulmaz Kılalım!
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Etkinliğinizi planlamaya başlamak için hemen bizimle iletişime geçin!
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                    >
                        İletişime Geçin
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default KisiselEtkinlikTr;

const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-6 text-base md:text-lg leading-relaxed">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
