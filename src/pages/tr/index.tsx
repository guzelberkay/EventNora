import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Calendar,
    CheckCircle,
    Star,
    HeartHandshake,
    Building2,
    Cake,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
} from 'lucide-react';
import Layout from '@/components/Layout';
import backgroundImage from '@/images/a1.png';

const IndexTr = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const googleReviews = [
        { name: "Zeki Bey Fırını", comment: "Açılışımız kusursuz geçti! Her detay düşünülmüştü. Harika ekibe çok teşekkürler!" },
        { name: "Cansu Çiçek", comment: "Oğlumun doğum günü için hazırlanan konsept harikaydı. Her detay mükemmeldi!" },
        { name: "Vildan Demir", comment: "Mekan, konsept ve ilgi harikaydı. Çok teşekkür ederim!" },
        { name: "Sevinj Mammadli", comment: "Tüm isteklerimi dikkatle dinlediler, beklentimin çok üstündeydi. Dekor mükemmeldi!" },
        { name: "Şule Gürel", comment: "Oğlumun doğum günü tam hayal ettiğimiz gibi geçti. Yeşim Hanım çok ilgiliydi." },
        { name: "İlker Ceylan", comment: "Etkinlik çok düzenliydi. Tüm süreç sorunsuz geçti. Teşekkürler!" },
        { name: "Hatice Danyıldız", comment: "Sıcacık ve samimi bir ortam. Beklentimizin üstündeydi!" },
        { name: "Aleyna Akdaş", comment: "Çok güzel bir organizasyondu. Her şey dört dörtlüktü. Bayıldık!" },
        { name: "Gamze Kartal", comment: "Kızım için unutulmaz bir doğum günü yaşattınız. Çok teşekkür ederiz!" },
        { name: "Sedanur Yılmaz", comment: "Nişanımız rüya gibiydi. Profesyonellikleriyle her şey çok güzeldi." },
    ];

    return (
        <Layout>
            <Helmet>
                <title>Event Nora | Düğün Organizasyonu, Dijital Davetiye ve Etkinlik Yönetimi</title>
                <meta
                    name="description"
                    content="Event Nora ile hayalinizdeki düğün, doğum günü ve kurumsal etkinlikler için profesyonel planlama ve yaratıcı tasarım hizmeti alın."
                />
                <meta
                    name="keywords"
                    content="Event Nora, düğün organizasyonu, etkinlik yönetimi, dijital davetiye, doğum günü organizasyonu, kurumsal etkinlikler, düğün planlayıcısı, nişan organizasyonu, gala etkinlikleri"
                />
                <link rel="canonical" href="https://www.eventnora.com/tr" />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Event Nora | Düğün ve Etkinlik Hizmetleri" />
                <meta
                    property="og:description"
                    content="Event Nora ile unutulmaz düğünler ve kurumsal etkinlikler planlayın – yaratıcı organizasyon ortağınız."
                />
                <meta property="og:url" content="https://www.eventnora.com/tr" />
                <meta property="og:site_name" content="Event Nora" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Event Nora | Davetler, Etkinlikler ve Organizasyonlar" />
                <meta
                    name="twitter:description"
                    content="Düğün, doğum günü ve kurumsal etkinlikleriniz için yaratıcı ve profesyonel çözümler."
                />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Event Nora",
                    url: "https://www.eventnora.com/tr",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://www.eventnora.com/logo.png"
                    },
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+90-532-770-12-08",
                        contactType: "Customer Service",
                        areaServed: "TR",
                        availableLanguage: ["Turkish", "English"]
                    }
                })}</script>
            </Helmet>

            {/* Google için doğru hreflang etiketleri */}
            <div
                dangerouslySetInnerHTML={{
                    __html: `
      <link rel="alternate" hreflang="tr" href="https://www.eventnora.com/tr" />
      <link rel="alternate" hreflang="en" href="https://www.eventnora.com/" />
      <link rel="alternate" hreflang="x-default" href="https://www.eventnora.com/" />
    `
                }}
            />


            {/* HERO BÖLÜMÜ */}
            <section
                className="relative py-20 md:py-32 overflow-hidden"
                style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 80%, rgba(255,255,255,0) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/10 z-0" />
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-black text-gold text-sm font-medium rounded-full mb-6">
              Premium Etkinlik Planlama
            </span>
                        <h1 className="heading-1 mb-6 text-black">Event Nora | Dijital Davetiyeler & Etkinlik Planlama</h1>
                        <p className="paragraph mb-8 text-black text-2xl">
                            Vizyonunuzu gerçeğe dönüştürüyoruz: detaylı planlama, yaratıcı tasarım ve kusursuz uygulama.
                        </p>
                        <p className="paragraph mb-8 text-black text-xl">
                            <strong>Event Nora</strong>, tam kapsamlı düğün planlama ve yaratıcı etkinlik tasarımında uzmandır.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/tr/iletisim" className="gold-button text-xl">İletişime Geçin</Link>
                            <Link to="/tr/hizmetler" className="flex items-center justify-center gap-2 px-6 py-2.5 text-black hover:text-gold transition-colors duration-300 text-xl">
                                Hizmetlerimiz <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEDEN BİZ */}
            <section className="section bg-white">
                <div className="container-custom text-center">
                    <span className="text-gold font-medium">Neden Event Nora?</span>
                    <h2 className="heading-2 text-black mt-2 mb-4">Etkinlik Planlamada Altın Standart</h2>
                    <p className="paragraph opacity-80 mb-12">
                        Her etkinlikte uzmanlık, yaratıcılık ve hassasiyetle baştan sona sorunsuz bir deneyim sunuyoruz.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{
                            icon: <Star className="w-10 h-10 text-gold" />,
                            title: 'Premium Hizmet',
                            description: 'Her müşteri ve etkinlik için detaylara özen gösteren kişisel yaklaşım.',
                        }, {
                            icon: <CheckCircle className="w-10 h-10 text-gold" />,
                            title: 'Uzman Planlama',
                            description: 'Farklı etkinlik türlerinde deneyimli profesyonel organizatörler.',
                        }, {
                            icon: <Calendar className="w-10 h-10 text-gold" />,
                            title: 'Zamanında Teslim',
                            description: 'Etkinliğinizin kusursuz geçmesi için hassas zamanlama ve koordinasyon.',
                        }].map((item, idx) => (
                            <div key={idx} className="p-8 border border-gold/10 shadow-sm rounded-lg">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                                <p className="text-textGray">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HAKKIMIZDA */}
            <section className="section bg-[#fdfdfd]">
                <div className="container-custom text-center">
                    <h2 className="heading-2 text-black mt-2 mb-4">Hakkımızda</h2>
                    <p className="paragraph opacity-80 max-w-4xl mx-auto">
                        Event Nora, düğünlerden kurumsal toplantılara kadar özel etkinlikler için yaratıcı planlama ve tasarım hizmetleri sunan uluslararası bir organizasyon firmasıdır. Profesyonel ekibimiz, vizyonunuzu estetik ve zarafetle gerçeğe dönüştürür.
                    </p>
                </div>
            </section>
            {/* HİZMETLER */}
            <section className="section bg-[#fafafa]">
                <div className="container-custom text-center">
                    <span className="text-gold font-medium">Hizmetlerimiz</span>
                    <h2 className="heading-2 text-black mt-2 mb-8">Neler Sunuyoruz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                icon: <HeartHandshake className="w-10 h-10 text-gold mb-3" />,
                                title: 'Nişan & Düğün',
                                link: 'nisan-dugun-organizasyonu',
                                description: 'Samimi nişanlardan görkemli düğünlere kadar unutulmaz anlar tasarlıyoruz.',
                            },
                            {
                                icon: <Building2 className="w-10 h-10 text-gold mb-3" />,
                                title: 'Kurumsal Etkinlikler',
                                link: 'kurumsal-etkinlikler',
                                description: 'Ürün lansmanlarından gala gecelerine profesyonel organizasyon çözümleri.',
                            },
                            {
                                icon: <Cake className="w-10 h-10 text-gold mb-3" />,
                                title: 'Doğum Günü Kutlamaları',
                                link: 'dogum-gunu-ozel-gun',
                                description: 'Her yaş ve stile uygun özgün doğum günü temaları ve konseptleri.',
                            },
                        ].map((service, i) => (
                            <Link
                                key={i}
                                to={`/tr/hizmetler/${service.link}`}
                                className="p-6 border border-gold/10 rounded-lg shadow-sm bg-white hover:shadow-md transition"
                            >
                                {service.icon}
                                <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                                <p className="text-sm text-textGray">{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* YORUMLAR */}
            <section className="section bg-white overflow-hidden">
                <div className="container-custom text-center relative">
                    <h2 className="heading-2 text-black mb-6">Müşterilerimiz Ne Diyor?</h2>
                    <div className="relative">
                        {/* Slider */}
                        <div
                            ref={sliderRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth px-4 touch-pan-x snap-x snap-mandatory scrollbar-hide"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {googleReviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="min-w-[270px] sm:min-w-[300px] max-w-[90%] sm:max-w-sm bg-[#f9f9f9] p-5 rounded shadow text-left flex-shrink-0 snap-start"
                                >
                                    <p className="italic mb-2">"{review.comment}"</p>
                                    <p className="font-semibold text-black">– {review.name}</p>
                                    <div className="flex text-gold mt-2">
                                        {Array(5).fill(0).map((_, i) => <Star key={i} size={16} />)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* HER EKRANDA ALTTA GÖRÜNEN OKLAR */}
                        <div className="flex justify-center gap-6 mt-6">
                            <button
                                onClick={() => scrollSlider('left')}
                                className="bg-gold p-3 rounded-full shadow hover:bg-gold-dark transition"
                                aria-label="Sola Kaydır"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scrollSlider('right')}
                                className="bg-gold p-3 rounded-full shadow hover:bg-gold-dark transition"
                                aria-label="Sağa Kaydır"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* YUKARI KAYDIR BUTONU */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 sm:right-4 bg-gold/60 hover:bg-gold transition-all duration-300 p-3 sm:p-4 rounded-full shadow-xl z-50"
                    aria-label="Sayfa başına dön"
                >
                    <ChevronUp className="text-black w-8 h-8" />
                </button>
            )}

        </Layout>
    );
};

export default IndexTr;
