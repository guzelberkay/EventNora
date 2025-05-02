import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import socialResponsibilityImage from '@/images/socialresponsiblility_event.webp';

const SosyalSorumlulukTr = () => {
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
                <title>Sosyal Sorumluluk Projeleri | Event Nora</title>
                <meta
                    name="description"
                    content="Sosyal sorumluluk projelerinizi sürdürülebilir ve etkili şekilde planlıyor, organizasyon sürecinde profesyonel destek sağlıyoruz."
                />
                <meta name="keywords" content="sosyal sorumluluk, etkinlik organizasyonu, STK iş birliği, sosyal proje, Event Nora" />
                <meta property="og:title" content="Sosyal Sorumluluk Projeleri | Event Nora" />
                <meta property="og:description" content="Sosyal etki yaratan projeleriniz için profesyonel organizasyon ve danışmanlık hizmetleri." />
                <meta property="og:image" content="https://www.eventnora.com/images/socialresponsiblility_event.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eventnora.com/tr/hizmetler/sosyal-sorumluluk" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sosyal Sorumluluk Projeleri | Event Nora" />
                <meta name="twitter:description" content="Topluma değer katan projeler için yaratıcı planlama ve sürdürülebilir çözümler." />
                <meta name="twitter:image" content="https://www.eventnora.com/images/socialresponsiblility_event.webp" />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler/sosyal-sorumluluk" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/en/services/social-responsibility" />
            </Helmet>


            {/* Hero */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-gold text-4xl md:text-5xl font-extrabold mb-6">
                        Sosyal Sorumluluk Projeleri
                    </h1>
                    <p className="text-gold-light/90 text-xl leading-relaxed font-light">
                        Topluma Değer Katan Projelerde Güç Birliği!
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="w-full h-auto">
                <img
                    src={socialResponsibilityImage}
                    alt="Sosyal Sorumluluk Etkinliği"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
                        Sosyal Sorumluluk Projelerindeki Hizmetlerimiz
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray">
                        <ContentColumn
                            items={[
                                '🤝 <strong>Sosyal Sorumluluk Projeleri</strong>',
                                '<strong>Topluma Değer Katan Projelerde Güç Birliği!</strong>',
                                '🌱 Çevreden eğitime, sağlıktan eşitliğe sosyal sorumluluk projelerinizi sürdürülebilir ve etkili şekilde hayata geçiriyoruz.',
                                '📍 <strong>Hizmet İçeriğimiz:</strong>',
                                '📌 <strong>Proje Geliştirme ve Planlama</strong><br />• Toplumsal ihtiyaç analizi ve hedef belirleme<br />• STK ve kamu iş birlikleri<br />• Etkinlik takvimi oluşturma, içerik geliştirme<br />• Yerel katılım ve gönüllü yönetimi',
                                '🌍 <strong>Etkinlik Organizasyonu</strong><br />• Atölye, seminer, farkındalık yürüyüşü<br />• Geri dönüşüm, ağaç dikimi, temizlik kampanyaları<br />• Gıda, kıyafet, kitap bağışı<br />• Gençlik kampları, sosyal girişimcilik buluşmaları',
                            ]}
                        />

                        <ContentColumn
                            items={[
                                '📣 <strong>İletişim ve Yaygınlaştırma</strong><br />• Sosyal medya içerikleri<br />• Afiş, broşür ve dijital materyaller<br />• Medya ilişkileri, görünürlük stratejisi<br />• Raporlama ve geri bildirim süreçleri',
                                '🤲 <strong>Hedef Gruplar</strong><br />• Çocuklar ve Gençler<br />• Kadınlar<br />• Yaşlılar<br />• Dezavantajlı Gruplar<br />• Gönüllüler ve STK’lar',
                                '✨ <strong>Daha iyi bir gelecek için fark yaratan projeler tasarlıyoruz.</strong><br />📍 Projenizi paylaşın, birlikte harekete geçelim!',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-black text-center">
                <div className="container-custom">
                    <h2 className="text-gold text-3xl md:text-4xl font-extrabold mb-6">
                        Projenizle fark yaratmaya hazır mısınız?
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Haydi projelerinizi hayata geçirelim—hemen bizimle iletişime geçin!
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

export default SosyalSorumlulukTr;

// İçerik sütunu bileşeni
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-6 text-base md:text-lg leading-relaxed">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
