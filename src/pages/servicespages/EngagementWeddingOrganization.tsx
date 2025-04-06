import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import weddingImage from '@/images/wedding_event.png';

const EngagementWedding = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const isEnglish = language === 'en';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const seoTitle = isEnglish
        ? 'Engagement & Wedding Organization Services | EventNora'
        : 'Nişan & Düğün Organizasyonu Hizmetleri | EventNora';

    const seoDescription = isEnglish
        ? 'Turn your dream wedding into reality with EventNora’s concept design, decoration, music, catering, and photography services.'
        : 'Hayalinizdeki düğünü gerçeğe dönüştüren konsept tasarımı, dekorasyon, müzik, catering ve fotoğrafçılık hizmetleri EventNora’da.';

    return (
        <Layout>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>

            {/* Hero Section */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">
                        {isEnglish
                            ? 'Engagement and Wedding Organization'
                            : 'Nişan ve Düğün Organizasyonu'}
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        {isEnglish
                            ? 'Your perfect wedding day starts here'
                            : 'Mükemmel düğün gününüz burada başlar'}
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="w-full h-auto">
                <img
                    src={weddingImage}
                    alt={isEnglish ? 'Wedding Event Decoration' : 'Düğün Etkinliği Görseli'}
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        {isEnglish
                            ? 'About Our Wedding Services'
                            : 'Düğün Hizmetlerimiz Hakkında'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '🎉 <strong>We’ve thought of everything for your dream engagement and wedding!</strong> 💍✨',
                                        '<strong>Make your special days unforgettable with our professional event planning service!</strong>',
                                        '📍 <strong>Engagement & Wedding Service Details:</strong>',
                                        '🌸 <strong>Concept Design & Decoration</strong><br />• Table and chair decorations matching your dream theme<br />• Custom floral arrangements (live or artificial)<br />• Backdrops, signage, lighting<br />• Aisle and ceremony setups<br />• Themes: modern, rustic, boho, romantic, vintage',
                                        '🎶 <strong>Music & Entertainment</strong><br />• Live band or DJ<br />• Sound & lighting setup<br />• Optional first dance choreography',
                                        '📷 <strong>Photography & Videography</strong><br />• Pre-shoot & event-day shooting<br />• Drone shots<br />• Memory book & memory corner',
                                    ]
                                    : [
                                        '🎉 <strong>Hayalinizdeki Nişan ve Düğün İçin Her Şeyi Düşündük!</strong> 💍✨',
                                        '<strong>Profesyonel organizasyon hizmetimizle özel günleriniz unutulmaz olsun!</strong>',
                                        '📍 <strong>Nişan & Düğün Hizmeti Detayları:</strong>',
                                        '🌸 <strong>Konsept Tasarımı & Dekorasyon</strong><br />• Tema uyumlu masa-sandalye süslemeleri<br />• Canlı veya yapay çiçek düzenlemeleri<br />• Arka fonlar, tabelalar, ışıklandırma<br />• Gelin yolu ve nikâh alanı<br />• Modern, rustik, bohem, klasik, romantik, vintage temalar',
                                        '🎶 <strong>Müzik ve Eğlence</strong><br />• Canlı müzik veya DJ performansı<br />• Ses ve ışık sistemi kurulumu<br />• İlk dans koreografisi (isteğe bağlı)',
                                        '📷 <strong>Fotoğraf ve Video</strong><br />• Dış çekim ve etkinlik günü çekimi<br />• Drone çekimleri<br />• Anı defteri & anı köşesi',
                                    ]
                            }
                        />

                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '🍽️ <strong>Catering and Treats</strong><br />• Welcome cocktail<br />• Cake & dessert buffet<br />• Menu alternatives<br />• Table service with staff',
                                        '🪄 <strong>Additional Services</strong><br />• Groom’s coffee setup<br />• Bridesmaid accessories<br />• Custom favors<br />• Personalized invitations<br />• Full-day coordination support',
                                        '💫 <strong>Enjoy your special day — we’ll handle every detail.</strong><br />📍 Contact us for more info and reservations.',
                                    ]
                                    : [
                                        '🍽️ <strong>İkram ve Catering</strong><br />• Karşılama kokteyli<br />• Pasta ve tatlı büfesi<br />• Menü alternatifleri<br />• Servis ekibiyle masa servisi',
                                        '🪄 <strong>Ekstra Hizmetler</strong><br />• Damat kahvesi sunumu<br />• Nedime aksesuarları<br />• Özel tasarım hediyelikler<br />• Kişiye özel davetiye ve menüler<br />• Günübirlik organizasyon desteği',
                                        '💫 <strong>Bu özel günün keyfini siz çıkarın, detayları biz halledelim.</strong><br />📍 Detaylı bilgi ve rezervasyon için bize ulaşın.',
                                    ]
                            }
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        {isEnglish
                            ? 'Ready to plan your dream event?'
                            : 'Hayalinizdeki organizasyonu planlamaya hazır mısınız?'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {isEnglish
                            ? 'Contact us now for a flawless engagement or wedding experience.'
                            : 'Kusursuz bir nişan veya düğün için bizimle şimdi iletişime geçin.'}
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        {isEnglish ? 'Get a Proposal' : 'Teklif Alın'}
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default EngagementWedding;

// Reusable Column Component
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
