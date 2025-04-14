import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import consultancyImg from '@/images/Consultancy_event.jpg';

const DanismanlikTr = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/tr/iletisim');
    };

    const seoTitle = 'Danışmanlık Hizmetleri | Etkinlik Stratejisi ve Planlama';
    const seoDescription =
        'Etkinlik planlamasından uygulamaya ve değerlendirmeye kadar her aşamada danışmanlık hizmeti sunuyoruz.';

    return (
        <Layout>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/danismanlik-hizmetleri" />

                {/* Open Graph (Facebook, LinkedIn, etc.) */}
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:image" content={consultancyImg} />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/danismanlik-hizmetleri" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Event Nora" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content={consultancyImg} />
            </Helmet>


            {/* Hero */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🧭 Danışmanlık Hizmetleri
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Etkinliklerinizde Doğru Adımlar, Doğru Stratejilerle Atılır!
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="w-full h-auto">
                <img
                    src={consultancyImg}
                    alt="Profesyonel Etkinlik Danışmanlık Hizmetleri"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
            </section>

            {/* İçerik */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Hizmet İçeriğimiz
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-textGray text-lg leading-relaxed">
                        <ContentColumn
                            content={[
                                '💼 Etkinlik planlama sürecinden son değerlendirmeye kadar profesyonel danışmanlık hizmetimizle yanınızdayız.',
                                {
                                    title: '📋 Etkinlik Öncesi Stratejik Planlama',
                                    items: [
                                        'Hedef kitle analizi ve ihtiyaç belirleme',
                                        'Etkinlik konsepti, tema ve içerik danışmanlığı',
                                        'Bütçe planlaması ve kaynak yönetimi',
                                        'Lokasyon seçimi ve zamanlama planı',
                                    ],
                                },
                                {
                                    title: '🤝 Kurumsal & Bireysel Danışmanlık',
                                    items: [
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
                                    title: '📈 Uygulama Sürecinde Danışmanlık',
                                    items: [
                                        'Tedarikçi ve ekip seçimi yönlendirmesi',
                                        'Lojistik süreçler için koordinasyon desteği',
                                        'Zaman çizelgesi ve görev dağılımı takibi',
                                        'Prova, teknik detay ve sahne arkasında rehberlik',
                                    ],
                                },
                                {
                                    title: '📊 Etkinlik Sonrası Değerlendirme',
                                    items: [
                                        'Katılımcı memnuniyet analizi',
                                        'Raporlama ve performans ölçümleme',
                                        'İyileştirme ve tekrar planlaması için öneriler',
                                        'Marka algısı ve etkinlik başarısı üzerine geri bildirim',
                                    ],
                                },
                                '🔍 Doğru planlama ve uzman bakış açısı ile etkinliklerinizi en etkili şekilde yönetmenizi sağlıyoruz.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        📍 Danışalım, planlayalım, birlikte başarıya ulaşalım!
                    </h2>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-semibold text-lg py-4 px-10 rounded-full transition-colors shadow-md"
                    >
                        Danışmanlık Alın
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default DanismanlikTr;

// İçerik bileşeni
const ContentColumn = ({
                           content,
                       }: {
    content: (string | { title: string; items: string[] })[];
}) => (
    <div className="space-y-6">
        {content.map((block, index) =>
            typeof block === 'string' ? (
                <p key={index} className="text-base md:text-lg">{block}</p>
            ) : (
                <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
                    <ul className="space-y-1 pl-4 list-disc marker:text-gold">
                        {block.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )
        )}
    </div>
);
