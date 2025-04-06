import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const FestivalEvent = () => {
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
        ? 'Festival & Large-Scale Event Organization | EventNora'
        : 'Festival ve Büyük Ölçekli Etkinlik Organizasyonu | EventNora';

    const seoDescription = isEnglish
        ? 'Music festivals, public events, and brand activations – we organize large-scale events with creative planning and perfect execution.'
        : 'Müzik festivalleri, halka açık etkinlikler ve marka tanıtımları – büyük ölçekli etkinliklerinizi yaratıcı planlama ve kusursuz uygulama ile organize ediyoruz.';

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
                        {isEnglish
                            ? 'Festival & Event Organization'
                            : 'Festival ve Etkinlik Organizasyonu'}
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        {isEnglish
                            ? 'Large-scale events that create unforgettable experiences'
                            : 'Unutulmaz deneyimler yaratan büyük ölçekli etkinlikler'}
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="w-full h-auto">
                <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                    alt={isEnglish ? 'Festival organization' : 'Festival organizasyonu'}
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        {isEnglish ? 'Festival Services' : 'Festival Hizmetlerimiz'}
                    </h2>

                    <div className="flex flex-wrap gap-10 text-textGray justify-center text-sm leading-relaxed">
                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '🎪 <strong>Unforgettable Moments Begin with Perfect Organization!</strong>',
                                        '🌟 Think big, we make it happen! From music festivals to youth events and public celebrations, we deliver your vision with creativity and precision.',
                                        '📍 <strong>Service Scope:</strong>',
                                        '🎤 <strong>Stage & Artist Management</strong><br />• Concerts, DJ sets, local & international artists<br />• Dance crews, performers, stage shows<br />• Custom music planning & flow management<br />• Professional sound, light & stage systems',
                                        '🎪 <strong>Concept & Venue Design</strong><br />• Festival themes, entrance zones, signages<br />• Stand & stage decorations, themed objects<br />• Outdoor lounges, chill zones<br />• Balloons, flags, branding, and visuals',
                                        '🎉 <strong>Logistics & Area Services</strong><br />• Site inspection & location selection<br />• Security, cleaning, health & tech support<br />• Permits, licenses & municipality procedures<br />• Toilets, generators, tents, portable zones',
                                    ]
                                    : [
                                        '🎪 <strong>Unutulmaz Anlar, Kusursuz Organizasyonlarla Başlar!</strong>',
                                        '🌟 Büyük düşünün, biz gerçekleştirelim! Müzik festivallerinden gençlik etkinliklerine, kamu organizasyonlarından marka tanıtımlarına kadar her ölçekte etkinliğinizi yaratıcı bir vizyonla hayata geçiriyoruz.',
                                        '📍 <strong>Hizmet İçeriğimiz:</strong>',
                                        '🎤 <strong>Sahne & Sanatçı Organizasyonu</strong><br />• Konser, DJ performansı, yerli-yabancı sanatçılar<br />• Dans grubu, gösteri ekipleri, sahne şovları<br />• Etkinliğe özel müzik planlaması ve akış yönetimi<br />• Profesyonel ses, ışık ve sahne sistemleri kurulumu',
                                        '🎪 <strong>Konsept ve Mekân Tasarımı</strong><br />• Festival teması, giriş alanı, yönlendirme tabelaları<br />• Stand ve sahne dekorları, festival objeleri<br />• Açık hava oturma alanları, chill zone kurulumu<br />• Balon, bayrak, brandalama ve görsel süslemeler',
                                        '🎉 <strong>Etkinlik Alanı Lojistiği</strong><br />• Alan keşfi ve uygun yer seçimi<br />• Güvenlik, temizlik, sağlık ve teknik destek hizmetleri<br />• İzinler, ruhsatlar ve belediye süreçlerinin takibi<br />• Tuvalet, jeneratör, çadır ve portatif alan çözümleri',
                                    ]
                            }
                        />
                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '📸 <strong>Promotion & Media</strong><br />• Social media campaigns & visual content<br />• Posters, invites, banners<br />• Live streaming, drone, photo/video<br />• Post-event content: aftermovie, galleries',
                                        '🪩 <strong>Types of Events</strong><br />• Music Festivals<br />• Public & Municipality Events<br />• Youth & University Festivals<br />• Corporate & Brand Open-Air Events<br />• Themed Nights & Fairs',
                                        '🎧 We’ve shared the excitement at hundreds of crowd-filled events!<br />🎪 Imagine it, we design it — let’s enjoy it together!<br />📍 Contact us to talk about your project.',
                                    ]
                                    : [
                                        '📸 <strong>Tanıtım & Medya Yönetimi</strong><br />• Sosyal medya kampanyaları ve görsel içerik üretimi<br />• Etkili afiş, davetiye ve banner tasarımları<br />• Canlı yayın, drone çekimi ve fotoğraf/video hizmeti<br />• Festival sonrası içerik hazırlığı (aftermovie, galeri, vs.)',
                                        '🪩 <strong>Etkinlik Türleri</strong><br />• Müzik Festivalleri<br />• Kamu & Belediye Etkinlikleri<br />• Gençlik ve Üniversite Festivalleri<br />• Marka ve Kurumsal Açık Hava Etkinlikleri<br />• Tema Geceleri ve Panayır Konseptleri',
                                        '🎧 Kalabalıkları buluşturduğumuz yüzlerce etkinlikte aynı heyecanla yanınızdayız!<br />🎪 Hayal edin, tasarlayalım, birlikte eğlenelim!<br />📍 Projenizi konuşmak için bizimle iletişime geçin.',
                                    ]
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        {isEnglish
                            ? 'Ready to organize your festival or large-scale event?'
                            : 'Festival veya büyük ölçekli etkinliğinizi organize etmeye hazır mısınız?'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {isEnglish
                            ? 'Contact us for expert event organization services.'
                            : 'Uzman etkinlik organizasyon hizmetleri için bizimle iletişime geçin.'}
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

export default FestivalEvent;

// Reusable content column
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="w-full md:w-[48%] space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
