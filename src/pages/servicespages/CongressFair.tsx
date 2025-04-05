import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import congressImage from '@/images/congressfair_event.png';

const CongressFair = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <Layout>
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="heading-1 text-gold mb-4">
                            {language === 'en' ? 'Congress and Fair Organizations' : 'Kongre ve Fuar Organizasyonları'}
                        </h1>
                        <p className="text-gold-light/80 text-lg">
                            {language === 'en'
                                ? 'Professional organization for business and knowledge-sharing events'
                                : 'İş ve bilgi paylaşım etkinlikleri için profesyonel organizasyon'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={congressImage}
                    alt={language === 'en' ? 'Congress and Fair Organization' : 'Kongre ve Fuar Organizasyonu'}
                    className="w-full h-full object-cover object-center"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        {language === 'en' ? 'Our Services' : 'Hizmetlerimiz'}
                    </h2>
                    <div className="flex flex-wrap gap-10 text-textGray justify-center">
                        {language === 'en' ? (
                            <>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>🎓 <strong>Where Knowledge, Collaboration, and Success Meet!</strong></p>
                                    <p>🌟 From scientific congresses to industry fairs, academic meetings to product launches — we plan and execute every event with professionalism.</p>
                                    <p>📍 <strong>Our Service Scope Includes:</strong></p>
                                    <p>🗣️ <strong>Congress Management</strong><br/>
                                        • Academic and professional congresses<br/>
                                        • Abstract submission and call management<br/>
                                        • Participant registration and badge system<br/>
                                        • Hall planning, simultaneous translation, technical setup</p>
                                    <p>🏢 <strong>Fair Organization</strong><br/>
                                        • Booth layout planning for companies<br/>
                                        • Visual setup of fairgrounds<br/>
                                        • Visitor flow and guidance system<br/>
                                        • Booth material, brochures, and product display support</p>
                                    <p>📋 <strong>Logistics and Technical Support</strong><br/>
                                        • Transportation, accommodation, and transfer<br/>
                                        • Venue selection and contract processes<br/>
                                        • Sound, light, projection systems<br/>
                                        • Registration, IT, and guidance services</p>
                                </div>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>📸 <strong>Promotion & Media Management</strong><br/>
                                        • Printed & digital invitations, catalogs, banners<br/>
                                        • Press releases, livestreams, post-event content<br/>
                                        • Social media content planning & management<br/>
                                        • Photography, videography, drone shots</p>
                                    <p>🎯 <strong>Types of Events</strong><br/>
                                        • National & International Academic Congresses<br/>
                                        • Health, Education, Technology & Industrial Fairs<br/>
                                        • Product Launches & Business Forums<br/>
                                        • Symposiums, Panels, and Workshops</p>
                                    <p>📍 We handle every detail to enhance your corporate prestige.<br/>
                                        🧠 You focus on the content, we’ll handle the rest!</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>🎓 <strong>Bilgi, İş Birliği ve Başarının Buluşma Noktası!</strong></p>
                                    <p>🌟 Bilimsel kongrelerden sektörel fuarlara, akademik toplantılardan ürün lansmanlarına kadar her ölçekte organizasyonu profesyonel bir bakış açısıyla planlıyor ve uyguluyoruz.</p>
                                    <p>📍 <strong>Hizmet İçeriğimiz:</strong></p>
                                    <p>🗣️ <strong>Kongre Yönetimi</strong><br/>
                                        • Akademik ve mesleki kongre organizasyonları<br/>
                                        • Bildiri yönetimi ve çağrı takibi<br/>
                                        • Katılımcı kayıt sistemi ve yaka kartı düzenlemesi<br/>
                                        • Salon planlaması, simultane çeviri ve teknik altyapı</p>
                                    <p>🏢 <strong>Fuar Organizasyonu</strong><br/>
                                        • Firma stand alanı yerleşim planı<br/>
                                        • Fuar alanı kurulum ve görsel tasarımı<br/>
                                        • Ziyaretçi akış yönetimi ve yönlendirme sistemi<br/>
                                        • Stand malzeme, broşür, ürün sunum destekleri</p>
                                    <p>📋 <strong>Lojistik ve Teknik Destek</strong><br/>
                                        • Ulaşım, konaklama ve transfer organizasyonu<br/>
                                        • Mekân seçimi ve sözleşme süreçleri<br/>
                                        • Ses, ışık, projeksiyon sistemleri kurulumu<br/>
                                        • Kayıt, bilgi işlem ve rehberlik hizmetleri</p>
                                </div>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>📸 <strong>Tanıtım & Medya Yönetimi</strong><br/>
                                        • Basılı ve dijital davetiyeler, katalog ve banner tasarımı<br/>
                                        • Basın bülteni, canlı yayın ve etkinlik sonrası içerikler<br/>
                                        • Sosyal medya içerik planlaması ve yönetimi<br/>
                                        • Fotoğraf, video ve drone çekimi</p>
                                    <p>🎯 <strong>Organizasyon Türleri</strong><br/>
                                        • Ulusal & Uluslararası Akademik Kongreler<br/>
                                        • Sağlık, Eğitim, Teknoloji ve Sanayi Fuarları<br/>
                                        • Ürün Lansmanları & İş Forumu Toplantıları<br/>
                                        • Sempozyum, Panel ve Çalıştaylar</p>
                                    <p>📍 Kurumsal Prestijinize Değer Katacak Her Detayı Biz Düşünüyoruz.<br/>
                                        🧠 Siz sadece içeriğe odaklanın, organizasyonunuzu biz üstlenelim!</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="section bg-black">
                <div className="container-custom text-center">
                    <h2 className="heading-2 text-gold mb-4">
                        {language === 'en'
                            ? 'Ready to organize your professional event?'
                            : 'Profesyonel etkinliğinizi organize etmeye hazır mısınız?'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Contact us for expert event organization services'
                            : 'Uzman etkinlik organizasyon hizmetleri için bizimle iletişime geçin'}
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        {language === 'en' ? 'Contact Us' : 'İletişime Geçin'}
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default CongressFair;
