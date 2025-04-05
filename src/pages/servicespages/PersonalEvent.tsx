import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import personalImage from '@/images/personal_event.png';

const PersonalEvent = () => {
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
                            {language === 'en' ? '🎈 Personal Event Planning' : '🎈 Kişisel Etkinlik Planlaması'}
                        </h1>
                        <p className="text-gold-light/80 text-lg">
                            {language === 'en'
                                ? 'Your most special moments, perfected with professional touches!'
                                : 'Hayatınızın En Özel Anları, Profesyonel Dokunuşlarla Mükemmelleşir!'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={personalImage}
                    alt={language === 'en' ? 'Personal Event' : 'Kişisel Etkinlik'}
                    className="w-full h-full object-cover object-center"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        {language === 'en' ? 'Our Personal Event Services' : 'Kişisel Etkinlik Hizmetlerimiz'}
                    </h2>
                    <div className="flex flex-wrap gap-10 text-textGray justify-center">
                        {language === 'en' ? (
                            <>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>🌟 From birthdays to engagements, baby showers to graduations — we plan every detail of your special moments to perfection.</p>
                                    <p>📍 <strong>Our Service Content:</strong></p>
                                    <p>🎉 <strong>Event Planning</strong><br/>
                                        • Determination of event concept<br/>
                                        • Guest list, invitation and table planning<br/>
                                        • Music, entertainment and activity selection<br/>
                                        • Daily schedule and time management</p>
                                    <p>🎨 <strong>Decoration & Design</strong><br/>
                                        • Personalized concepts and themes<br/>
                                        • Venue decoration and backdrop design<br/>
                                        • Balloon, flower and table decorations<br/>
                                        • Photo booth and entrance area design</p>
                                    <p>🍰 <strong>Food & Beverage Service</strong><br/>
                                        • Menu planning and catering service<br/>
                                        • Cake, cookie and special snack corners<br/>
                                        • Cocktail bar and beverage presentations<br/>
                                        • Diet and special nutrition alternatives</p>
                                </div>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>📸 <strong>Memory Creation</strong><br/>
                                        • Photography and videography<br/>
                                        • Live stream and drone footage<br/>
                                        • Post-event video collage and gallery<br/>
                                        • Memory book, souvenirs and custom prints</p>
                                    <p>🎈 <strong>Types of Events</strong><br/>
                                        • Birthday Parties<br/>
                                        • Engagement & Henna Organizations<br/>
                                        • Baby Shower & Gender Reveal Parties<br/>
                                        • Graduation and Special Celebrations<br/>
                                        • Marriage Proposal Organizations</p>
                                    <p>💫 We plan your dream moment for you, so all you have to do is enjoy it!</p>
                                    <p>📍 Contact us for all the details.</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>🌟 Doğum gününden nişana, baby shower'dan mezuniyete, küçük kutlamalardan büyük davetlere kadar tüm özel anlarınızı sizin için en ince ayrıntısına kadar planlıyoruz.</p>
                                    <p>📍 <strong>Hizmet İçeriğimiz:</strong></p>
                                    <p>🎉 <strong>Organizasyon Planlaması</strong><br/>
                                        • Etkinlik konseptinin belirlenmesi<br/>
                                        • Davetli listesi, davetiye ve masa planlaması<br/>
                                        • Müzik, eğlence ve aktivite seçimi<br/>
                                        • Günlük akış planı ve zaman yönetimi</p>
                                    <p>🎨 <strong>Dekorasyon & Tasarım</strong><br/>
                                        • Kişiye özel konsept ve temalar<br/>
                                        • Mekân süsleme, arka plan tasarımı<br/>
                                        • Balon, çiçek ve masa dekorasyonları<br/>
                                        • Fotoğraf köşesi ve giriş alanı tasarımı</p>
                                    <p>🍰 <strong>Yiyecek & İkram Hizmeti</strong><br/>
                                        • Menü planlaması ve catering hizmeti<br/>
                                        • Pasta, kurabiye ve özel ikram köşeleri<br/>
                                        • Kokteyl bar, içecek sunumları<br/>
                                        • Diyet ve özel beslenme alternatifleri</p>
                                </div>
                                <div className="w-full md:w-[48%] space-y-4">
                                    <p>📸 <strong>Anı Yaratımı</strong><br/>
                                        • Fotoğraf ve video çekimi<br/>
                                        • Canlı yayın ve drone görüntüleri<br/>
                                        • Etkinlik sonrası video kolaj ve galeri hazırlığı<br/>
                                        • Anı defteri, hediyelikler ve özel baskılar</p>
                                    <p>🎈 <strong>Etkinlik Türleri</strong><br/>
                                        • Doğum Günü Partileri<br/>
                                        • Nişan & Kına Organizasyonları<br/>
                                        • Baby Shower & Cinsiyet Partisi<br/>
                                        • Mezuniyet ve Özel Kutlamalar<br/>
                                        • Evlilik Teklifi Organizasyonları</p>
                                    <p>💫 Hayalinizdeki anı, sizin yerinize planlıyor; size sadece keyfini yaşamak kalıyor!</p>
                                    <p>📍 Tüm detaylar için bizimle iletişime geçin.</p>
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
                            ? 'Let’s Make It Unforgettable!'
                            : 'Haydi, Bu Anı Unutulmaz Kılalım!'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Contact us today to begin planning your event!'
                            : 'Etkinliğinizi planlamaya başlamak için hemen bizimle iletişime geçin!'}
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

export default PersonalEvent;