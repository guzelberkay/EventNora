import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import congressImage from '@/images/congressfair_event.png';

const KongreFuarTr = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/tr/iletisim');
    };

    const seoTitle = 'Kongre ve Fuar Organizasyonları | Profesyonel Etkinlik Planlama';
    const seoDescription =
        'Kongre ve fuar organizasyonlarında lojistikten teknik desteğe kadar profesyonel hizmet sunuyoruz.';

    return (
        <Layout>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta name="keywords" content="kongre organizasyonu, fuar etkinliği, iş dünyası fuarı, akademik kongre, sempozyum, Event Nora" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:image" content="https://www.eventnora.com/images/congressfair_event.png" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/kongre-fuar" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content="https://www.eventnora.com/images/congressfair_event.png" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/kongre-fuar" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/en/services/congress-fair" />
            </Helmet>


            {/* Hero */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        🏛️ Kongre ve Fuar Organizasyonları
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        İş dünyası ve bilgi paylaşım etkinlikleri için profesyonel organizasyon desteği
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="w-full h-auto">
                <img
                    src={congressImage}
                    alt="Kongre ve Fuar Organizasyonu"
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
                                {
                                    type: 'text',
                                    text: '🎓 Bilgi, iş birliği ve başarının buluştuğu noktada etkinliklerinizi profesyonellikle planlıyoruz.',
                                },
                                {
                                    title: '🗣️ Kongre Yönetimi',
                                    items: [
                                        'Akademik ve mesleki kongreler',
                                        'Bildiri gönderim ve çağrı süreçleri',
                                        'Kayıt sistemi ve yaka kartı üretimi',
                                        'Salon planlaması, simultane çeviri, teknik kurulum',
                                    ],
                                },
                                {
                                    title: '🏢 Fuar Organizasyonu',
                                    items: [
                                        'Firma stand yerleşimi planlaması',
                                        'Fuar alanı görsel tasarımı',
                                        'Ziyaretçi akış ve yönlendirme çözümleri',
                                        'Stand malzeme temini ve ürün sunum desteği',
                                    ],
                                },
                            ]}
                        />

                        <ContentColumn
                            content={[
                                {
                                    title: '📋 Lojistik ve Teknik Destek',
                                    items: [
                                        'Ulaşım, konaklama, transfer organizasyonu',
                                        'Mekân seçimi ve sözleşme süreçleri',
                                        'Ses, ışık ve projeksiyon sistemleri kurulumu',
                                        'Kayıt, bilgi işlem ve rehberlik hizmetleri',
                                    ],
                                },
                                {
                                    title: '📸 Tanıtım & Medya Yönetimi',
                                    items: [
                                        'Dijital/basılı davetiye, katalog ve banner tasarımı',
                                        'Basın bülteni ve canlı yayın koordinasyonu',
                                        'Sosyal medya içeriği planlama ve yönetim',
                                        'Fotoğraf, video ve drone çekimi',
                                    ],
                                },
                                {
                                    title: '🎯 Organizasyon Türleri',
                                    items: [
                                        'Ulusal & Uluslararası Akademik Kongreler',
                                        'Sağlık, Eğitim, Teknoloji ve Sanayi Fuarları',
                                        'Ürün Lansmanları ve İş Forumları',
                                        'Sempozyum, Panel ve Çalıştaylar',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '📍 Kurumsal prestijinizi artırmak için her detayı biz planlıyoruz.\n🧠 Siz içeriğe odaklanın, organizasyonu biz üstlenelim.',
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        Profesyonel etkinliğinizi organize etmeye hazır mısınız?
                    </h2>
                    <p className="text-gold-light/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        Uzman ekibimizle tanışın, birlikte mükemmeli planlayalım.
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

export default KongreFuarTr;

// İçerik Bileşeni
const ContentColumn = ({
                           content,
                       }: {
    content: (
        | { type: 'text'; text: string }
        | { title: string; items: string[] }
        )[];
}) => (
    <div className="space-y-6">
        {content.map((block, index) =>
            'text' in block ? (
                <p key={index} className="text-base md:text-lg whitespace-pre-line">
                    {block.text}
                </p>
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
