import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import birthdayImage from '@/images/birthday_event.png';

const DogumGunuOzelGun = () => {
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
                <title>Doğum Günü ve Özel Gün Organizasyonu | Event Nora</title>
                <meta name="description" content="Doğum günlerinden yıldönümlerine kadar her özel gününüzü özenle planlıyor, unutulmaz kılıyoruz." />
                <meta name="keywords" content="doğum günü organizasyonu, özel gün planlama, baby shower, sürpriz parti, İstanbul etkinlik" />
                <meta property="og:title" content="Doğum Günü ve Özel Gün Organizasyonu | Event Nora" />
                <meta property="og:description" content="Doğum günlerinden yıldönümlerine kadar her özel gününüzü özenle planlıyor, unutulmaz kılıyoruz." />
                <meta property="og:image" content="https://www.eventnora.com/images/birthday_event.png" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/dogum-gunu-ozel-gun" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Doğum Günü ve Özel Gün Organizasyonu | Event Nora" />
                <meta name="twitter:description" content="Doğum günlerinden yıldönümlerine kadar her özel gününüzü özenle planlıyoruz." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/birthday_event.png" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/dogum-gunu-ozel-gun" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/en/services/birthday-special-day" />
            </Helmet>


            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold text-4xl font-bold mb-4">
                        Doğum Günü ve Özel Gün Organizasyonu
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        Unutulmaz kutlamanız burada başlar
                    </p>
                </div>
            </section>

            <section className="w-full h-auto">
                <img
                    src={birthdayImage}
                    alt="Doğum Günü Etkinliği"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-black mb-10 text-center">
                            Doğum Günü ve Özel Gün Hizmetleri
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                            <div className="space-y-4">
                                <p>🎈 <strong>Hayalinizdeki Kutlamayı Gerçeğe Dönüştürüyoruz!</strong></p>
                                <p><strong>Sıradan kutlamalara elveda!</strong> Doğum günü, yıldönümü, baby shower gibi özel günlerinizi özenle planlıyoruz.</p>
                                <p>📍 <strong>Hizmet İçeriğimiz:</strong></p>
                                <p>🎉 <strong>Etkinlik Temaları</strong><br />
                                    • Çocuk, genç ve yetişkin konseptleri (Prenses, Süper Kahraman, Safari, Bohem, Retro, vs.)<br />
                                    • Renk uyumlu masa-sandalye süslemeleri<br />
                                    • Kişiye özel afişler, isim panoları, yaş tabelaları<br />
                                    • Balon süslemeleri, arka fon ve dekoratif öğeler</p>
                                <p>🎂 <strong>Lezzetli ve Şık İkramlar</strong><br />
                                    • Doğum günü pastası, cupcake, tatlı büfesi<br />
                                    • Atıştırmalık ve içecek standları<br />
                                    • Karşılama kokteyli & aperatifler<br />
                                    • Kişiye özel baskılı şekerlemeler ve paketlemeler</p>
                            </div>
                            <div className="space-y-4">
                                <p>📸 <strong>Eğlence & Hatıra Alanları</strong><br />
                                    • Anı köşeleri, fotoğraf standları<br />
                                    • Canlı müzik, DJ, palyaço veya animatör hizmeti<br />
                                    • Çocuklara özel oyun alanı veya yüz boyama<br />
                                    • Kişiselleştirilmiş hediyelikler ve sürprizler</p>
                                <p>🪄 <strong>Diğer Özel Günler</strong><br />
                                    • Baby shower & gender reveal partileri<br />
                                    • Evlilik yıldönümü & Sevgililer Günü sürprizleri<br />
                                    • Mezuniyet kutlamaları<br />
                                    • Kişiye özel sürpriz partiler</p>
                                <p>🎈 <strong>Kutlamaya Değer Her An İçin Buradayız!</strong><br />
                                    🕯️ Hayal edin, biz planlayalım, birlikte kutlayalım!<br />
                                    📍 Detaylı bilgi ve rezervasyon için bizimle iletişime geçin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="heading-2 text-gold mb-4">
                        Mükemmel kutlamanızı planlamaya hazır mısınız?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        Siz özel gününüzün tadını çıkarırken, tüm detayları biz halledelim
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        Planlamaya Başlayın
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default DogumGunuOzelGun;
