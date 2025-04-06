import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import congressImage from '@/images/congressfair_event.png';

const CongressFair = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const isEnglish = language === 'en';

    const seoTitle = isEnglish
        ? 'Congress and Fair Organizations | Professional Event Planning'
        : 'Kongre ve Fuar Organizasyonları | Profesyonel Etkinlik Planlama';

    const seoDescription = isEnglish
        ? 'We offer expert services for congress and fair organizations, including logistics, media, and technical support.'
        : 'Kongre ve fuar organizasyonlarında lojistikten teknik desteğe kadar profesyonel hizmet sunuyoruz.';

    return (
        <Layout>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>

            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">
                        {isEnglish ? 'Congress and Fair Organizations' : 'Kongre ve Fuar Organizasyonları'}
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        {isEnglish
                            ? 'Professional organization for business and knowledge-sharing events'
                            : 'İş ve bilgi paylaşım etkinlikleri için profesyonel organizasyon'}
                    </p>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={congressImage}
                    loading="lazy"
                    alt={isEnglish ? 'Congress and Fair Organization' : 'Kongre ve Fuar Organizasyonu'}
                    className="w-full h-full object-cover object-center"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        {isEnglish ? 'Our Services' : 'Hizmetlerimiz'}
                    </h2>
                    <div className="flex flex-wrap gap-10 text-textGray justify-center">
                        {isEnglish ? (
                            <>
                                <ServiceColumn
                                    items={[
                                        '🎓 Where Knowledge, Collaboration, and Success Meet!',
                                        '🌟 From scientific congresses to industry fairs, academic meetings to product launches — we plan and execute every event with professionalism.',
                                        '📍 Our Service Scope Includes:',
                                        '🗣️ Congress Management\n• Academic and professional congresses\n• Abstract submission and call management\n• Participant registration and badge system\n• Hall planning, simultaneous translation, technical setup',
                                        '🏢 Fair Organization\n• Booth layout planning for companies\n• Visual setup of fairgrounds\n• Visitor flow and guidance system\n• Booth material, brochures, and product display support',
                                        '📋 Logistics and Technical Support\n• Transportation, accommodation, and transfer\n• Venue selection and contract processes\n• Sound, light, projection systems\n• Registration, IT, and guidance services',
                                    ]}
                                />
                                <ServiceColumn
                                    items={[
                                        '📸 Promotion & Media Management\n• Printed & digital invitations, catalogs, banners\n• Press releases, livestreams, post-event content\n• Social media content planning & management\n• Photography, videography, drone shots',
                                        '🎯 Types of Events\n• National & International Academic Congresses\n• Health, Education, Technology & Industrial Fairs\n• Product Launches & Business Forums\n• Symposiums, Panels, and Workshops',
                                        '📍 We handle every detail to enhance your corporate prestige.\n🧠 You focus on the content, we’ll handle the rest!',
                                    ]}
                                />
                            </>
                        ) : (
                            <>
                                <ServiceColumn
                                    items={[
                                        '🎓 Bilgi, İş Birliği ve Başarının Buluşma Noktası!',
                                        '🌟 Bilimsel kongrelerden sektörel fuarlara, akademik toplantılardan ürün lansmanlarına kadar her ölçekte organizasyonu profesyonelce planlıyoruz.',
                                        '📍 Hizmet İçeriğimiz:',
                                        '🗣️ Kongre Yönetimi\n• Akademik ve mesleki kongre organizasyonları\n• Bildiri yönetimi ve çağrı takibi\n• Katılımcı kayıt sistemi ve yaka kartı\n• Salon planlaması, simultane çeviri ve teknik altyapı',
                                        '🏢 Fuar Organizasyonu\n• Firma stand yerleşimi\n• Fuar alanı kurulumu ve görselliği\n• Ziyaretçi yönlendirme sistemleri\n• Stand malzeme ve ürün sunum desteği',
                                        '📋 Lojistik ve Teknik Destek\n• Ulaşım, konaklama ve transfer\n• Mekân seçimi ve sözleşme süreçleri\n• Ses, ışık, projeksiyon sistemleri\n• Kayıt ve bilgi işlem hizmetleri',
                                    ]}
                                />
                                <ServiceColumn
                                    items={[
                                        '📸 Tanıtım & Medya Yönetimi\n• Basılı/dijital davetiyeler, kataloglar\n• Basın bülteni, canlı yayın, içerik üretimi\n• Sosyal medya planlama ve yönetim\n• Fotoğraf, video ve drone çekimi',
                                        '🎯 Organizasyon Türleri\n• Ulusal & Uluslararası Akademik Kongreler\n• Sağlık, Eğitim, Teknoloji & Sanayi Fuarları\n• Ürün Lansmanları & İş Forumları\n• Sempozyum, Panel, Çalıştaylar',
                                        '📍 Kurumsal prestijinize değer katacak her detayı biz düşünüyoruz.\n🧠 Siz içeriğe odaklanın, organizasyonu biz üstlenelim!',
                                    ]}
                                />
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        {isEnglish
                            ? 'Ready to organize your professional event?'
                            : 'Profesyonel etkinliğinizi organize etmeye hazır mısınız?'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {isEnglish
                            ? 'Contact us for expert event organization services'
                            : 'Uzman etkinlik organizasyon hizmetleri için bizimle iletişime geçin'}
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

// Reusable service column component
const ServiceColumn = ({ items }: { items: string[] }) => (
    <div className="w-full md:w-[48%] space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br />') }}></p>
        ))}
    </div>
);

export default CongressFair;
