import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import socialResponsibilityImage from '@/images/socialresponsiblility_event.png';

const SocialResponsibility = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const isEnglish = language === 'en';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pageTitle = isEnglish
        ? 'Social Responsibility Projects | Our Services'
        : 'Sosyal Sorumluluk Projeleri | Hizmetlerimiz';

    const pageDescription = isEnglish
        ? 'We support social impact with responsible and sustainable project planning and event organization services.'
        : 'Sosyal sorumluluk projelerinizi sürdürülebilir ve etkili şekilde planlıyor, organizasyon sürecinde profesyonel destek sağlıyoruz.';

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <Layout>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            {/* Hero Section */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="heading-1 text-gold mb-4">
                        {isEnglish ? 'Social Responsibility Projects' : 'Sosyal Sorumluluk Projeleri'}
                    </h1>
                    <p className="text-gold-light/80 text-lg">
                        {isEnglish
                            ? 'Creating meaningful impact through powerful partnerships'
                            : 'Topluma Değer Katan Projelerde Güç Birliği!'}
                    </p>
                </div>
            </section>

            {/* Banner Image */}
            <section className="w-full h-auto">
                <img
                    src={socialResponsibilityImage}
                    alt={isEnglish ? 'Social Responsibility Event' : 'Sosyal Sorumluluk Etkinliği'}
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                />
            </section>

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-black mb-10 text-center">
                        {isEnglish
                            ? 'Our Services in Social Responsibility Projects'
                            : 'Sosyal Sorumluluk Projelerindeki Hizmetlerimiz'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '🤝 <strong>Social Responsibility Projects</strong>',
                                        '<strong>Powerful collaboration for projects that bring value to society!</strong>',
                                        '🌱 We plan and implement your projects effectively and sustainably, from environment to education, health to equality.',
                                        '📍 <strong>Our Service Scope:</strong>',
                                        '📌 <strong>Project Development & Planning</strong><br />• Social needs analysis and goal setting<br />• Collaborations with NGOs and public institutions<br />• Event calendar creation and content development<br />• Local engagement and volunteer management',
                                        '🌍 <strong>Event Organization</strong><br />• Thematic workshops, seminars, awareness walks<br />• Recycling, tree planting, cleanup campaigns<br />• Donation drives (food, clothes, books)<br />• Youth camps, social entrepreneurship events',
                                    ]
                                    : [
                                        '🤝 <strong>Sosyal Sorumluluk Projeleri</strong>',
                                        '<strong>Topluma Değer Katan Projelerde Güç Birliği!</strong>',
                                        '🌱 Çevreden eğitime, sağlıktan eşitliğe sosyal sorumluluk projelerinizi sürdürülebilir ve etkili şekilde hayata geçiriyoruz.',
                                        '📍 <strong>Hizmet İçeriğimiz:</strong>',
                                        '📌 <strong>Proje Geliştirme ve Planlama</strong><br />• Toplumsal ihtiyaç analizi ve hedef belirleme<br />• STK ve kamu iş birlikleri<br />• Etkinlik takvimi oluşturma, içerik geliştirme<br />• Yerel katılım ve gönüllü yönetimi',
                                        '🌍 <strong>Etkinlik Organizasyonu</strong><br />• Atölye, seminer, farkındalık yürüyüşü<br />• Geri dönüşüm, ağaç dikimi, temizlik kampanyaları<br />• Gıda, kıyafet, kitap bağışı<br />• Gençlik kampları, sosyal girişimcilik buluşmaları',
                                    ]
                            }
                        />
                        <ContentColumn
                            items={
                                isEnglish
                                    ? [
                                        '📣 <strong>Communication & Outreach</strong><br />• Social media campaigns<br />• Posters, brochures, digital materials<br />• Media relations, visibility strategy<br />• Post-event reporting, feedback collection',
                                        '🤲 <strong>Target Groups</strong><br />• Children & Youth<br />• Women<br />• Elderly<br />• Disadvantaged Groups<br />• NGOs and Volunteers',
                                        '✨ <strong>Together we build impactful projects for a better future.</strong><br />📍 Tell us your project — let’s take action together!',
                                    ]
                                    : [
                                        '📣 <strong>İletişim ve Yaygınlaştırma</strong><br />• Sosyal medya içerikleri<br />• Afiş, broşür ve dijital materyaller<br />• Medya ilişkileri, görünürlük stratejisi<br />• Raporlama ve geri bildirim süreçleri',
                                        '🤲 <strong>Hedef Gruplar</strong><br />• Çocuklar ve Gençler<br />• Kadınlar<br />• Yaşlılar<br />• Dezavantajlı Gruplar<br />• Gönüllüler ve STK’lar',
                                        '✨ <strong>Daha iyi bir gelecek için fark yaratan projeler tasarlıyoruz.</strong><br />📍 Projenizi paylaşın, birlikte harekete geçelim!',
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
                            ? 'Ready to make an impact with your project?'
                            : 'Projenizle fark yaratmaya hazır mısınız?'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {isEnglish
                            ? 'Let’s bring your ideas to life—contact us now!'
                            : 'Haydi projelerinizi hayata geçirelim—hemen bizimle iletişime geçin!'}
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        {isEnglish ? 'Get in Touch' : 'İletişime Geçin'}
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default SocialResponsibility;

// Reusable content column component
const ContentColumn = ({ items }: { items: string[] }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
    </div>
);
