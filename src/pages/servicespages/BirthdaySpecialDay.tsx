import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import birthdayImage from '@/images/birthday_event.png';

const BirthdaySpecialDay = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        // SEO Başlık ve Açıklama
        document.title = language === 'en'
            ? 'Birthday & Special Day Organization | Event Services'
            : 'Doğum Günü ve Özel Gün Organizasyonu | Etkinlik Hizmetleri';

        const metaDesc = document.querySelector("meta[name='description']");
        const description = language === 'en'
            ? 'From birthdays to anniversaries, we plan every detail of your special day with elegance and joy.'
            : 'Doğum günlerinden yıldönümlerine kadar her özel gününüzü özenle planlıyor, unutulmaz kılıyoruz.';

        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [language]);

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <Layout>
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="heading-1 text-gold text-4xl font-bold mb-4">
                            {language === 'en'
                                ? 'Birthday and Special Day Organization'
                                : 'Doğum Günü ve Özel Gün Organizasyonu'}
                        </h1>
                        <p className="text-gold-light/80 text-lg">
                            {language === 'en'
                                ? 'Your unforgettable celebration starts here'
                                : 'Unutulmaz kutlamanız burada başlar'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto">
                <img src={birthdayImage} alt="Birthday Event" className="w-full h-full object-cover object-center" />
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-black mb-10 text-center">
                            {language === 'en'
                                ? 'Birthday & Special Day Services'
                                : 'Doğum Günü ve Özel Gün Hizmetleri'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                            {language === 'en' ? (
                                <>
                                    <div className="space-y-4">
                                        <p>🎈 <strong>We Create the Celebration You Dream of!</strong></p>
                                        <p><strong>Say goodbye to ordinary celebrations!</strong> We plan every detail for birthdays, anniversaries, baby showers, and more.</p>
                                        <p>📍 <strong>What We Offer:</strong></p>
                                        <p>🎉 <strong>Event Themes</strong><br />
                                            • Concepts for kids, teens, and adults (Princess, Superhero, Safari, Boho, Retro, etc.)<br />
                                            • Color-matched table and chair decorations<br />
                                            • Custom banners, name signs, age boards<br />
                                            • Balloon designs, backdrop, and tag elements</p>
                                        <p>🎂 <strong>Delicious & Elegant Treats</strong><br />
                                            • Birthday cake, cupcakes, dessert buffets<br />
                                            • Snack and drink stands<br />
                                            • Welcome cocktails & appetizers<br />
                                            • Personalized printed candies & packaging</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p>📸 <strong>Entertainment & Memory Areas</strong><br />
                                            • Memory corners, photo booths<br />
                                            • Live music, DJs or clowns/animators<br />
                                            • Play zones or face painting for children<br />
                                            • Personalized gifts & surprises</p>
                                        <p>🪄 <strong>Other Special Days</strong><br />
                                            • Baby showers & gender reveals<br />
                                            • Anniversary & Valentine’s Day surprises<br />
                                            • Graduation parties<br />
                                            • Custom surprise parties</p>
                                        <p>🎈 <strong>We’re Here for Every Moment Worth Celebrating!</strong><br />
                                            🕯️ Imagine, we plan, we celebrate together!<br />
                                            📍 Contact us for detailed info and booking.</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        <p>🎈 <strong>Doğum Günü ve Özel Gün Organizasyonları</strong></p>
                                        <p><strong>Kutlamaya Değer Anlar İçin Hayalinizdeki Etkinliği Gerçekleştiriyoruz!</strong></p>
                                        <p>🌟 Sıradan kutlamalara veda edin! Doğum günleri, evlilik yıl dönümleri, baby shower, diş buğdayı ve daha fazlası için her detayı sizin yerinize biz düşünüyoruz.</p>
                                        <p>📍 <strong>Hizmet İçeriğimiz:</strong></p>
                                        <p>🎉 <strong>Doğum Günü ve Özel Gün Temaları</strong><br />
                                            • Çocuk, genç ve yetişkin konseptleri (Prenses, Süper Kahraman, Safari, Bohem, Retro, vs.)<br />
                                            • Renk uyumlu masa-sandalye süslemeleri<br />
                                            • Kişiye özel afiş, isim panosu, yaş tabelası<br />
                                            • Arka fon dekoru, balon süslemeleri, tag tasarımı</p>
                                        <p>🎂 <strong>Lezzetli ve Şık İkramlar</strong><br />
                                            • Doğum günü pastası, cupcake ve tatlı büfesi<br />
                                            • Atıştırmalıklar ve içecek standı<br />
                                            • Karşılama kokteyli & ikramlıklar<br />
                                            • Kişiye özel baskılı şekerlemeler ve paketler</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p>📸 <strong>Eğlence & Hatıra Alanları</strong><br />
                                            • Anı köşesi, fotoğraf standı<br />
                                            • Canlı müzik, DJ veya palyaço-animatör hizmeti<br />
                                            • Çocuklar için oyun alanı veya yüz boyama köşesi<br />
                                            • Özel hediyelikler ve sürprizli detaylar</p>
                                        <p>🪄 <strong>Diğer Özel Gün Organizasyonları</strong><br />
                                            • Baby shower & gender reveal<br />
                                            • Evlilik yıldönümü & sevgililer günü sürprizleri<br />
                                            • Mezuniyet kutlaması<br />
                                            • Sürpriz parti planlaması (mekâna özel konsept)</p>
                                        <p>🎈 <strong>Kutlamaya Değer Her An İçin Buradayız!</strong><br />
                                            🕯️ Hayal edin, planlayalım, birlikte kutlayalım!<br />
                                            📍 Rezervasyon ve detaylı bilgi için bize ulaşın.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="section bg-black">
                <div className="container-custom text-center">
                    <h2 className="heading-2 text-gold mb-4">
                        {language === 'en'
                            ? 'Ready to plan your perfect celebration?'
                            : 'Mükemmel kutlamanızı planlamaya hazır mısınız?'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Let us handle the details while you enjoy your special day'
                            : 'Siz özel gününüzün tadını çıkarırken, detayları biz hallederiz'}
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        {language === 'en' ? 'Start Planning' : 'Planlamaya Başlayın'}
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default BirthdaySpecialDay;
