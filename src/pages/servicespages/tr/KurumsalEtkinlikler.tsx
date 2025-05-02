import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import corporateBanner from '@/images/corporate_event.webp';

const KurumsalEtkinlikler = () => {
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
                <title>Kurumsal Etkinlikler | Event Nora</title>
                <meta
                    name="description"
                    content="Marka değerinizi yansıtan kurumsal etkinlik hizmetleri ile fark yaratın. Uçtan uca çözümlerimizi keşfedin."
                />
                <meta
                    name="keywords"
                    content="kurumsal etkinlik, şirket organizasyonu, gala, lansman, bayi toplantısı, Event Nora"
                />
                <meta property="og:title" content="Kurumsal Etkinlikler | Event Nora" />
                <meta
                    property="og:description"
                    content="Marka değerinizi yansıtan kurumsal etkinlik hizmetleri ile fark yaratın."
                />
                <meta property="og:image" content="https://www.eventnora.com/images/corporate_event.webp" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/kurumsal-etkinlikler" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kurumsal Etkinlikler | Event Nora" />
                <meta
                    name="twitter:description"
                    content="Marka değerinizi yansıtan kurumsal etkinlik hizmetleri ile fark yaratın."
                />
                <meta name="twitter:image" content="https://www.eventnora.com/images/corporate_event.webp" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/kurumsal-etkinlikler" />
                <link
                    rel="alternate"
                    hrefLang="en"
                    href="https://www.eventnora.com/en/services/corporate-events"
                />
            </Helmet>

            {/* Hero */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">Kurumsal Etkinlikler</h1>
                    <p className="text-gold-light/80 text-lg">
                        Markanızı olağanüstü deneyimlerle yükseltiyoruz
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="w-full h-auto">
                <img
                    src={corporateBanner}
                    alt="Event Nora Kurumsal Etkinlik Organizasyonu"
                    loading="lazy"
                    className="w-full h-auto object-cover object-center"
                />
            </section>

            {/* Hizmetler */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        Kurumsal Etkinlik Hizmetlerimiz
                    </h2>
                    <div className="flex flex-wrap gap-10 text-textGray justify-center">
                        <ServiceColumn
                            items={[
                                '🏢 <strong>Kurumsal Etkinliklerinizde Fark Yaratın!</strong>',
                                '<strong>Marka Değerinizi Yansıtan Etkinlikler İçin Profesyonel Organizasyon Hizmeti</strong>',
                                '🔹 Kurumsal imajınızı destekleyen, modern ve etkileyici etkinlik tasarımları ile firmanız prestij kazanıyor. Biz, markanızın hedeflerini ve vizyonunu en iyi şekilde yansıtan etkinlikler planlıyoruz.',
                                '📍 <strong>Kurumsal Etkinlik Hizmet İçeriği:</strong>',
                                '💼 <strong>Etkinlik Planlama & Yönetim</strong><br />• Etkinlik konsepti oluşturma ve marka temasıyla uyumlu tasarım<br />• Mekân seçimi ve dekorasyon<br />• Etkinlik akışı planlama & anlık koordinasyon<br />• VIP konuk ağırlama ve karşılama ekipleri',
                                '🎤 <strong>Teknik Altyapı & Sunum Alanı Kurulumu</strong><br />• Sahne kurulumu, ses & ışık sistemleri<br />• LED ekranlar, barkovizyon sunumları<br />• Mikrofon ve simultane tercüme sistemleri<br />• Sunucu, MC ve protokol koordinasyonu',
                                '🍽️ <strong>İkram & Catering Hizmetleri</strong><br />• Karşılama ikramları, coffee break standları<br />• Açık büfe veya masa servisi yemek organizasyonu<br />• Kurumsal branding’li sunum alanları<br />• Vegan, vejetaryen ve özel menü seçenekleri',
                            ]}
                        />

                        <ServiceColumn
                            items={[
                                '📸 <strong>Tanıtım ve Medya Desteği</strong><br />• Profesyonel fotoğraf & video çekimi<br />• Sosyal medya içerik üretimi<br />• Anında paylaşım köşeleri ve markalı anı duvarları<br />• Etkinlik sonrası tanıtım filmi',
                                '🪄 <strong>Diğer Kurumsal Hizmetler</strong><br />• Lansman organizasyonları<br />• Açılış törenleri<br />• Yıl sonu gala & ödül törenleri<br />• Eğitim ve motivasyon kampları<br />• Bayi toplantıları, lansmanlar, konferanslar',
                                '💬 İşinizde fark yaratmak istiyorsanız, organizasyon da sıradan olmamalı!<br />🔗 Bizimle çalışın, kurumsal kimliğinize değer katalım.<br />📍 Detaylı bilgi ve kurumsal teklif için bize ulaşın.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        Kurumsal etkinliklerinizi yükseltmeye hazır mısınız?
                    </h2>
                    <p className="text-gold-light/80 mb-6 max-w-2xl mx-auto">
                        Marka değerlerinizi yansıtan unutulmaz deneyimler yaratmak için bizimle iletişime geçin.
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        Teklif Alın
                    </button>
                    <p className="text-gold-light/60 text-sm mt-2">
                        Hemen teklif almak için bizimle iletişime geçin.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default KurumsalEtkinlikler;

const ServiceColumn = ({ items }: { items: string[] }) => (
    <div className="w-full md:w-[48%] space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
