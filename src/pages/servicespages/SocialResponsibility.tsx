import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import socialResponsibilityImage from '@/images/socialresponsiblility_event.png'; // Güncel görsel import edildi

const SocialResponsibility = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="heading-1 text-gold mb-4">
                            {language === 'en' ? 'Social Responsibility Projects' : 'Sosyal Sorumluluk Projeleri'}
                        </h1>
                        <p className="text-gold-light/80 text-lg">
                            {language === 'en'
                                ? 'Creating meaningful impact through powerful partnerships'
                                : 'Topluma Değer Katan Projelerde Güç Birliği!'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section className="w-full h-auto">
                <img
                    src={socialResponsibilityImage}
                    alt="Social Responsibility Event"
                    className="w-full h-full object-cover object-center"
                />
            </section>

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-black mb-10 text-center">
                            {language === 'en'
                                ? 'Our Services in Social Responsibility Projects'
                                : 'Sosyal Sorumluluk Projelerindeki Hizmetlerimiz'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-textGray text-sm leading-relaxed">
                            {language === 'en' ? (
                                <>
                                    <div className="space-y-4">
                                        <p>🤝 <strong>Social Responsibility Projects</strong></p>
                                        <p><strong>Powerful collaboration for projects that bring value to society!</strong></p>
                                        <p>🌱 We plan and implement your projects effectively and sustainably, from environment to education, health to equality.</p>
                                        <p>📍 <strong>Our Service Scope:</strong></p>
                                        <p>📌 <strong>Project Development & Planning</strong><br />
                                            • Social needs analysis and goal setting<br />
                                            • Collaborations with NGOs and public institutions<br />
                                            • Event calendar creation and content development<br />
                                            • Local engagement and volunteer management
                                        </p>
                                        <p>🌍 <strong>Event Organization</strong><br />
                                            • Thematic workshops, seminars, and awareness walks<br />
                                            • Recycling, tree planting, beach cleanup campaigns<br />
                                            • Food, clothing, and book donation drives<br />
                                            • Youth camps, social entrepreneurship meetings
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p>📣 <strong>Communication & Outreach</strong><br />
                                            • Social media content for project promotion<br />
                                            • Posters, brochures, and digital campaigns<br />
                                            • Press releases, media relations, and visibility strategies<br />
                                            • Post-event reporting and feedback collection
                                        </p>
                                        <p>🤲 <strong>Target Groups</strong><br />
                                            • Children & Youth<br />
                                            • Women<br />
                                            • Elderly<br />
                                            • Disadvantaged Groups<br />
                                            • Volunteers and NGOs
                                        </p>
                                        <p>✨ <strong>Together we build impactful projects for a better future.</strong><br />
                                            📍 Tell us your project, let’s take action together!
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        <p>🤝 <strong>Sosyal Sorumluluk Projeleri</strong></p>
                                        <p><strong>Topluma Değer Katan Projelerde Güç Birliği!</strong></p>
                                        <p>🌱 Çevreden eğitime, sağlıktan eşitliğe uzanan her alanda sosyal sorumluluk projelerinizi planlıyor, sürdürülebilir ve etkili şekilde hayata geçiriyoruz.</p>
                                        <p>📍 <strong>Hizmet İçeriğimiz:</strong></p>
                                        <p>📌 <strong>Proje Geliştirme ve Planlama</strong><br />
                                            • Toplumsal ihtiyaç analizi ve hedef belirleme<br />
                                            • Sivil toplum kuruluşları ve kamu iş birlikleri<br />
                                            • Etkinlik takvimi oluşturma ve içerik geliştirme<br />
                                            • Yerel katılım ve gönüllü yönetimi
                                        </p>
                                        <p>🌍 <strong>Etkinlik Organizasyonu</strong><br />
                                            • Tematik atölyeler, seminerler ve farkındalık yürüyüşleri<br />
                                            • Geri dönüşüm, ağaç dikimi, sahil-temizlik kampanyaları<br />
                                            • Gıda, kıyafet ve kitap bağışı organizasyonları<br />
                                            • Gençlik kampları, sosyal girişimcilik buluşmaları
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p>📣 <strong>İletişim ve Yaygınlaştırma</strong><br />
                                            • Proje tanıtımı için sosyal medya içerikleri<br />
                                            • Afiş, broşür ve dijital kampanya hazırlığı<br />
                                            • Basın bülteni, medya ilişkileri ve görünürlük stratejileri<br />
                                            • Etkinlik sonrası raporlama ve geri bildirim çalışmaları
                                        </p>
                                        <p>🤲 <strong>Hedef Gruplar</strong><br />
                                            • Çocuklar ve Gençler<br />
                                            • Kadınlar<br />
                                            • Yaşlılar<br />
                                            • Dezavantajlı Gruplar<br />
                                            • Gönüllüler ve STK’lar
                                        </p>
                                        <p>✨ <strong>Daha iyi bir gelecek için çıktığımız bu yolda, fark yaratacak her projeyi birlikte inşa ediyoruz.</strong><br />
                                            📍 Projenizi anlatın, birlikte harekete geçelim!
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-black">
                <div className="container-custom text-center">
                    <h2 className="heading-2 text-gold mb-4">
                        {language === 'en'
                            ? 'Ready to make an impact with your project?'
                            : 'Projenizle fark yaratmaya hazır mısınız?'}
                    </h2>
                    <p className="text-gold-light/80 mb-8 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Let’s bring your ideas to life—contact us now!'
                            : 'Haydi projelerinizi hayata geçirelim—hemen bizimle iletişime geçin!'}
                    </p>
                    <button
                        onClick={handleContactClick}
                        className="bg-gold hover:bg-gold-dark text-black font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        {language === 'en' ? 'Get in Touch' : 'İletişime Geçin'}
                    </button>
                </div>
            </section>
        </Layout>
    );
};

export default SocialResponsibility;
