import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import weddingImage from '@/images/wedding_event.png';

const NisanDugun = () => {
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
                <title>Nişan & Düğün Organizasyonu Hizmetleri | Event Nora</title>
                <meta name="description" content="Hayalinizdeki düğünü gerçeğe dönüştüren konsept tasarımı, dekorasyon, müzik, catering ve fotoğrafçılık hizmetleri Event Nora’da." />
                <meta name="keywords" content="nişan organizasyonu, düğün organizasyonu, gelin yolu, düğün süsleme, düğün catering, Event Nora" />
                <meta property="og:title" content="Nişan & Düğün Organizasyonu Hizmetleri | Event Nora" />
                <meta property="og:description" content="Hayalinizdeki düğünü gerçeğe dönüştüren profesyonel hizmetler Event Nora’da." />
                <meta property="og:image" content="https://www.eventnora.com/images/wedding_event.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/nisan-dugun" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Nişan & Düğün Organizasyonu | Event Nora" />
                <meta name="twitter:description" content="Hayalinizdeki düğün organizasyonu için her şey Event Nora’da." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/wedding_event.png" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/nisan-dugun" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/en/services/engagement-wedding" />
            </Helmet>

            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">Nişan ve Düğün Organizasyonu</h1>
                    <p className="text-gold-light/80 text-lg">Mükemmel düğün gününüz burada başlar</p>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={weddingImage}
                    alt="Nişan ve düğün etkinliği dekorasyonu - Event Nora"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        Nişan & Düğün Hizmetlerimiz
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                        <ContentColumn
                            items={[
                                '🎉 <strong>Hayalinizdeki Nişan ve Düğün İçin Her Şeyi Düşündük!</strong> 💍✨',
                                '<strong>Profesyonel organizasyon hizmetimizle özel günleriniz unutulmaz olsun!</strong>',
                                '📍 <strong>Nişan & Düğün Hizmeti Detayları:</strong>',
                                '🌸 <strong>Konsept Tasarımı & Dekorasyon</strong><br />• Tema uyumlu masa-sandalye süslemeleri<br />• Canlı veya yapay çiçek düzenlemeleri<br />• Arka fonlar, tabelalar, ışıklandırma<br />• Gelin yolu ve nikâh alanı<br />• Modern, rustik, bohem, klasik, romantik, vintage temalar',
                                '🎶 <strong>Müzik ve Eğlence</strong><br />• Canlı müzik veya DJ performansı<br />• Ses ve ışık sistemi kurulumu<br />• İlk dans koreografisi (isteğe bağlı)',
                                '📷 <strong>Fotoğraf ve Video</strong><br />• Dış çekim ve etkinlik günü çekimi<br />• Drone çekimleri<br />• Anı defteri & anı köşesi',
                            ]}
                        />
                        <ContentColumn
                            items={[
                                '🍽️ <strong>İkram ve Catering</strong><br />• Karşılama kokteyli<br />• Pasta ve tatlı büfesi<br />• Menü alternatifleri<br />• Servis ekibiyle masa servisi',
                                '🪄 <strong>Ekstra Hizmetler</strong><br />• Damat kahvesi sunumu<br />• Nedime aksesuarları<br />• Özel tasarım hediyelikler<br />• Kişiye özel davetiye ve menüler<br />• Günübirlik organizasyon desteği',
                                '💫 <strong>Bu özel günün keyfini siz çıkarın, detayları biz halledelim.</strong><br />📍 Detaylı bilgi ve rezervasyon için bize ulaşın.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        Hayalinizdeki organizasyonu planlamaya hazır mısınız?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Kusursuz bir nişan veya düğün için bizimle şimdi iletişime geçin.
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                        aria-label="Nişan ve düğün organizasyonu için teklif alın"
                    >
                        Teklif Alın
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default NisanDugun;

const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
