import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import creativeImg from '@/images/creative_event.webp';

const YaraticiTasarimlar = () => {
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
                <title>Yaratıcı Tasarımlar & Süsleme Hizmetleri | Event Nora</title>
                <meta
                    name="description"
                    content="Etkinlik konseptinizi gerçeğe dönüştüren estetik süsleme ve tasarım hizmetleri. Hayalinizdeki atmosferi yaratın."
                />
                <meta name="keywords" content="etkinlik süsleme, dekorasyon, yaratıcı tasarım, etkinlik teması, Event Nora" />
                <meta property="og:title" content="Yaratıcı Tasarımlar & Süsleme Hizmetleri | Event Nora" />
                <meta property="og:description" content="Konsept tasarımı, el yapımı detaylar ve etkileyici dekorasyonlarla etkinliğiniz estetik bir deneyime dönüşsün." />
                <meta property="og:image" content="https://www.eventnora.com/images/creative_event.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/yaratici-tasarimlar" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Yaratıcı Tasarımlar & Süsleme Hizmetleri | Event Nora" />
                <meta name="twitter:description" content="Hayal ettiğiniz görsel konsepti etkileyici süsleme detaylarıyla hayata geçiriyoruz." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/creative_event.webp" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/yaratici-tasarimlar" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/en/services/creative-design" />
            </Helmet>


            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">
                        🎨 Yaratıcı Tasarımlar ve Süsleme Hizmetleri
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        Hayallerinizin Ötesinde, Estetikle Dolu Etkinlik Alanları!
                    </p>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={creativeImg}
                    alt="Yaratıcı Etkinlik Süsleme Görseli"
                    loading="lazy"
                    className="w-full h-auto object-cover object-center"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">Hizmet İçeriğimiz</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                        <ContentColumn
                            items={[
                                '🌟 Her konsepte uygun özgün dekorasyon çözümleri ve yaratıcılığı ön planda tutan tasarımlarımızla etkinliklerinize görsel bir şölen katıyoruz.',
                                '🌈 <strong>Konsept Tasarımı</strong><br />• Tema belirleme ve stil danışmanlığı<br />• Renk paleti oluşturma ve görsel bütünlük sağlama<br />• Etkinliğe özel logo, simge ve sembol tasarımı<br />• Mekâna ve amaca uygun yaratıcılık odaklı planlama',
                                '🎀 <strong>Mekân Süsleme Hizmetleri</strong><br />• Masa ve sandalye süslemeleri<br />• Balon kemerleri, çiçek aranjmanları, ışıklandırmalar<br />• Giriş alanı, sahne ve fotoğraf köşesi tasarımları<br />• Tavan, zemin ve duvar süslemeleri',
                            ]}
                        />
                        <ContentColumn
                            items={[
                                '🖌️ <strong>El Yapımı & Özel Tasarımlar</strong><br />• Özel üretim panolar, yazı alanları ve yönlendirme tabelaları<br />• Kişiye özel hediyelikler, menü ve etiket tasarımları<br />• Doğal, rustik, modern, vintage, boho gibi farklı tarzlarda süsleme<br />• Atölye çalışmaları ile etkinlikte canlı üretim',
                                '📸 <strong>Görsel Sunum & Atmosfer Kurulumu</strong><br />• Mekâna uygun ışık oyunları ve sahne efekti<br />• Arka plan tasarımları ve çekim alanı kurulumu<br />• Branding alanları ve ürün teşhir tasarımları<br />• Sosyal medya için dikkat çekici görsel düzenlemeler',
                                '🎯 <strong>Hizmet Verilen Etkinlikler</strong><br />• Doğum günleri, nişan ve düğün organizasyonları<br />• Kurumsal davet ve açılışlar<br />• Mezuniyet ve ödül törenleri<br />• Lansmanlar ve konsept partiler',
                                '✨ Hayal ettiğiniz tasarımı göz alıcı detaylarla gerçeğe dönüştürüyoruz.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        📍 Estetikten ödün vermeyen çözümlerimiz için bizimle iletişime geçin!
                    </h2>
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

export default YaraticiTasarimlar;

const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
