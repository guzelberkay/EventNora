import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import personalImage from '@/images/personal_event.png';

const PersonalEvent = () => {
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
        ? 'Personal Event Planning Services | EventNora'
        : 'Kişisel Etkinlik Planlama Hizmetleri | EventNora';

    const seoDescription = isEnglish
        ? 'From birthdays to engagements and baby showers – we design your most special memories with elegant concepts and professional execution.'
        : 'Doğum gününden nişana, baby shower’dan mezuniyete kadar en özel anlarınızı profesyonelce ve yaratıcı konseptlerle planlıyoruz.';

    return (
        <Layout>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>

            {/* Hero Section */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">
                        {isEnglish ? '🎈 Personal Event Planning' : '🎈 Kişisel Etkinlik Planlaması'}
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        {isEnglish
                            ? 'Your most special moments, perfected with professional touches!'
                            : 'Hayatınızın En Özel Anları, Profesyonel Dokunuşlarla Mükemmelleşir!'}
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="w-full h-auto">
                <img
                    src={personalImage}
                    alt={isEnglish ? 'Personal Event' : 'Kişisel Etkinlik'}
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Services Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        {isEnglish
                            ? 'Our Personal Event Services'
                            : 'Kişisel Etkinlik Hizmetlerimiz'}
                    </h2>

                    <div className="flex flex-wrap gap-10 text-textGray justify-center text-sm leading-relaxed">
                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '🌟 From birthdays to engagements, baby showers to graduations — we plan every detail of your special moments to perfection.',
                                        '📍 <strong>Our Service Content:</strong>',
                                        '🎉 <strong>Event Planning</strong><br />• Event concept planning<br />• Guest list, invitations, seating<br />• Music, entertainment, and activities<br />• Scheduling & time management',
                                        '🎨 <strong>Decoration & Design</strong><br />• Personalized themes<br />• Venue and backdrop decoration<br />• Balloons, flowers, table setups<br />• Photo booth & entrance design',
                                        '🍰 <strong>Food & Beverage</strong><br />• Menu planning & catering<br />• Cake & snack tables<br />• Drink bar setups<br />• Special dietary options',
                                    ]
                                    : [
                                        '🌟 Doğum gününden nişana, baby shower’dan mezuniyete kadar özel anlarınızı sizin için mükemmel şekilde planlıyoruz.',
                                        '📍 <strong>Hizmet İçeriğimiz:</strong>',
                                        '🎉 <strong>Organizasyon Planlaması</strong><br />• Konsept belirleme<br />• Davetli listesi, davetiye ve oturma düzeni<br />• Müzik, eğlence ve aktiviteler<br />• Zaman yönetimi ve günlük akış',
                                        '🎨 <strong>Dekorasyon & Tasarım</strong><br />• Kişiye özel temalar<br />• Mekân & arka plan süslemeleri<br />• Balon, çiçek ve masa düzenlemeleri<br />• Fotoğraf köşesi ve giriş tasarımı',
                                        '🍰 <strong>Yiyecek & İkram</strong><br />• Menü & catering hizmeti<br />• Pasta, kurabiye, özel atıştırmalıklar<br />• Kokteyl bar sunumu<br />• Diyet ve özel menüler',
                                    ]
                            }
                        />

                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '📸 <strong>Memory Creation</strong><br />• Photo & video coverage<br />• Drone & live stream<br />• Event aftermovie & gallery<br />• Souvenirs & custom prints',
                                        '🎈 <strong>Event Types</strong><br />• Birthday Parties<br />• Engagement & Henna<br />• Baby Shower & Gender Reveal<br />• Graduation & Private Celebrations<br />• Marriage Proposals',
                                        '💫 We plan your dream moment — you just enjoy it!<br />📍 Contact us now for details.',
                                    ]
                                    : [
                                        '📸 <strong>Anı Yaratımı</strong><br />• Fotoğraf & video çekimi<br />• Canlı yayın ve drone görüntüleri<br />• Etkinlik sonrası video & galeri<br />• Anı defteri ve özel hediyelikler',
                                        '🎈 <strong>Etkinlik Türleri</strong><br />• Doğum Günleri<br />• Nişan & Kına<br />• Baby Shower & Cinsiyet Partisi<br />• Mezuniyet & Özel Kutlamalar<br />• Evlilik Teklifi Organizasyonları',
                                        '💫 Hayal ettiğiniz anı sizin için planlıyoruz — size sadece keyfini çıkarmak kalıyor!<br />📍 Detaylar için bizimle iletişime geçin.',
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
                            ? 'Let’s Make It Unforgettable!'
                            : 'Haydi, Bu Anı Unutulmaz Kılalım!'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {isEnglish
                            ? 'Contact us today to begin planning your event!'
                            : 'Etkinliğinizi planlamaya başlamak için hemen bizimle iletişime geçin!'}
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        {isEnglish ? 'Contact Us' : 'İletişime Geçin'}
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default PersonalEvent;

// Reusable content column component
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="w-full md:w-[48%] space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
