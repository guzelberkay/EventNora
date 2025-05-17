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
import { useLanguage } from '@/contexts/LanguageContext';
import backgroundImage from '../../images/a1.webp'; // optimize edilmiş WebP formatı
import weddingTrendImage from '../../images/wedding_trend.webp';
import digitalInvitationImage from '../../images/digital_invitations.webp';
import planningMistakesImage from '../../images/event_planing_mistakes.jpg';


const IndexTr = () => {
    const { language } = useLanguage();
    const sliderRef = useRef<HTMLDivElement>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollSlider = (dir: 'left' | 'right') => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
        }
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const googleReviews = [
        { name: "Zeki Bey Bakery", comment: "Açılış mükemmeldi! Her şey en ince detayına kadar düşünülmüş. Harika ekip, teşekkür ederiz!" },
        { name: "Cansu Çiçek", comment: "Oğlumuzun doğum günü için hazırladığınız konsept harikaydı. Tüm detaylar mükemmeldi." },
        { name: "Vildan Demir", comment: "Mekan, konsept, ekip – her şey olağanüstüydü. Çok teşekkür ederiz!" },
        { name: "Sevinj Mammadli", comment: "İsteklerimi dikkatle dinlediler ve beklentimin çok üzerine çıktılar. Harika dekorasyon!" },
        { name: "Şule Gürel", comment: "Oğlumuzun doğum günü tam hayal ettiğimiz gibiydi. Yeşim Hanım çok ilgiliydi." },
        { name: "İlker Ceylan", comment: "Oğlumuzun doğum gününü burada kutladık. Her şey çok keyifliydi, personel çok yardımcıydı." },
        { name: "Hatice Danyıldız", comment: "Aile sıcaklığında karşılama. Beklentimizin çok üstündeydi!" },
        { name: "Aleyna Akdaş", comment: "Çok güzel ve organize bir etkinlikti. Her şey harikaydı. Teşekkürler!" },
        { name: "Gamze Kartal", comment: "Kızımıza unutulmaz bir doğum günü anısı yaşattınız. Minnettarız!" },
        { name: "Sedanur Yılmaz", comment: "Nişan organizasyonumuz tam bir masal gibiydi. Profesyonel ve destekleyici yaklaşımlarınız için teşekkürler." },
    ];

    return (
        <Layout>
            <Helmet>
                <title>Event Nora | Düğün Planlama, Dijital Davetiyeler & Etkinlik Organizasyonu</title>
                <meta name="description" content="Event Nora ile hayalinizdeki düğünü, doğum gününü veya kurumsal etkinliği gerçeğe dönüştürün. Dijital davetiyeler, lüks organizasyonlar ve tam hizmet planlama." />
                <meta name="keywords" content="düğün organizasyonu, dijital davetiye, etkinlik tasarımı, nişan planlama, doğum günü organizatörü, RSVP sistemi, kurumsal etkinlikler" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.eventnora.com/tr" />

                {/* Hreflang etiketleri – doğru camelCase ile */}
                <link rel="alternate" hrefLang="tr" href="https://www.eventnora.com/tr" />
                <link rel="alternate" hrefLang="en" href="https://www.eventnora.com/" />
                <link rel="alternate" hrefLang="x-default" href="https://www.eventnora.com/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Event Nora | Düğün & Etkinlik Planlama Uzmanı" />
                <meta property="og:description" content="Event Nora ile yaratıcı düğün ve etkinlik planlama, dijital davetiyeler, doğum günü ve nişan organizasyonları." />
                <meta property="og:url" content="https://www.eventnora.com/tr" />
                <meta property="og:site_name" content="Event Nora" />
                <meta property="og:locale" content="tr_TR" />
                <meta property="og:image" content="https://www.eventnora.com/og-cover.jpg" />



                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Event Nora",
                        description: "Türkiye genelinde dijital davetiye, düğün ve etkinlik planlama hizmetleri sunar. Yaratıcı dekorasyon ve kusursuz organizasyon.",
                        url: "https://www.eventnora.com",
                        logo: "https://www.eventnora.com/logo.png",
                        telephone: "+90-532-770-12-08",
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "TR",
                        },
                        sameAs: [
                            "https://www.instagram.com/eventnora",
                            "https://www.facebook.com/eventnora",
                            "https://www.linkedin.com/company/eventnora"
                        ]
                    })}
                </script>
            </Helmet>


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
              Kusursuz Etkinlik Planlama
            </span>
                        <h1 className="heading-1 mb-6 text-black">
                            Event Nora | Dijital Davetiyeler & Etkinlik Organizasyonu
                        </h1>
                        <p className="paragraph mb-8 text-black text-2xl">
                            Hayallerinizi gerçeğe dönüştüren yaratıcı etkinlik tasarımları ve eksiksiz düğün planlama hizmeti.
                        </p>
                        <p className="paragraph mb-8 text-black text-xl">
                            <strong>Event Nora</strong> ile dijital davetiyeler, RSVP sistemleri ve lüks etkinlik organizasyonu bir arada.
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

            {/* NEDEN BİZ? */}
            <section className="section bg-white">
                <div className="container-custom text-center">
                    <span className="text-gold font-medium">Neden Bizi Tercih Etmelisiniz?</span>
                    <h2 className="heading-2 text-black mt-2 mb-4">Etkinlik Planlamada Altın Standart</h2>
                    <p className="paragraph opacity-80 mb-12">
                        Event Nora, düğün planlama, kurumsal etkinlik organizasyonu ve dijital RSVP sistemlerinde tam hizmet sunarak ilk adımdan son ana kadar kusursuz bir deneyim sağlar. Türkiye’nin önde gelen etkinlik firmalarından biri olarak Event Nora; lüks düğünler, özel tasarım etkinlikler ve yenilikçi dijital davetiyeler konusunda uzmanlaşmıştır. Etkileyici tasarımlar, zamanında uygulama ve yaratıcı çözümlerle unutulmaz anlar için Event Nora’ya güvenin.                  </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{
                            icon: <Star className="w-10 h-10 text-gold" />,
                            title: 'Özel Hizmet',
                            description: 'Her müşteri ve etkinlik için kişiye özel detaylara özen gösteriyoruz.',
                        }, {
                            icon: <CheckCircle className="w-10 h-10 text-gold" />,
                            title: 'Uzman Planlama',
                            description: 'Etkinlik türlerinde deneyimli profesyonel organizasyon ekibi.',
                        }, {
                            icon: <Calendar className="w-10 h-10 text-gold" />,
                            title: 'Zamanında Teslimat',
                            description: 'Tüm süreci kusursuz şekilde koordine ederek zamanında uygulama sağlıyoruz.',
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
                    <h2 className="heading-2 text-black mt-2 mb-4">Event Nora Hakkında</h2>
                    <p className="paragraph opacity-80 max-w-4xl mx-auto">
                        Event Nora, düğün, doğum günü, kurumsal etkinlikler ve dijital RSVP davetiye tasarımı alanlarında tam kapsamlı çözümler sunan lider bir etkinlik planlama şirketidir. Uzman ekibimiz, her etkinliği estetik, profesyonellik ve yaratıcılıkla hayata geçirerek unutulmaz anılara dönüştürür.
                        Türkiye genelinde hizmet veren Event Nora, özelleştirilmiş etkinlik konseptleri, yenilikçi davetiye çözümleri ve lüks organizasyonlarla beklentilerin çok ötesine geçmeyi hedefler.
                    </p>
                </div>
            </section>

            {/* HİZMETLER */}
            <section className="section bg-[#fafafa]">
                <div className="container-custom text-center">
                    <span className="text-gold font-medium">Öne Çıkan Hizmetler</span>
                    <h2 className="heading-2 text-black mt-2 mb-8">Uzman Olduğumuz Alanlar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                icon: <HeartHandshake className="w-10 h-10 text-gold mb-3" />,
                                title: 'Nişan & Düğün',
                                link: 'nisan-dugun-organizasyonu',
                                description: 'Samimi nişanlardan ihtişamlı düğünlere kadar zamanın ötesinde kutlamalar yaratıyoruz.',
                            },
                            {
                                icon: <Building2 className="w-10 h-10 text-gold mb-3" />,
                                title: 'Kurumsal Etkinlikler',
                                link: 'kurumsal-etkinlikler',
                                description: 'Ürün lansmanları, gala geceleri ve iş toplantılarında profesyonel planlama.',
                            },
                            {
                                icon: <Cake className="w-10 h-10 text-gold mb-3" />,
                                title: 'Doğum Günleri',
                                link: 'dogum-gunu-ozel-gun',
                                description: 'Her yaşa ve tarza özel doğum günü konseptleri ve yaratıcı fikirler.',
                            },
                        ].map((service, i) => (
                            <Link
                                key={i}
                                to={`/hizmetler/${service.link}`}
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
            {/* MÜŞTERİ YORUMLARI */}
            <section className="section bg-white overflow-hidden">
                <div className="container-custom text-center relative">
                    <h2 className="heading-2 text-black mb-6">Müşterilerimiz Ne Diyor?</h2>

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
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <Star key={i} size={16} />
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slider Okları */}
                    <div className="flex justify-center gap-6 mt-6">
                        <button
                            onClick={() => scrollSlider('left')}
                            className="bg-gold p-3 rounded-full shadow hover:bg-gold-dark transition"
                            aria-label="Sola kaydır"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scrollSlider('right')}
                            className="bg-gold p-3 rounded-full shadow hover:bg-gold-dark transition"
                            aria-label="Sağa kaydır"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* BLOG ÖNİZLEME */}
            <section className="section bg-[#fdfdfd]">
                <div className="container-custom text-center">
                    <h2 className="heading-2 text-black mb-4">Blogdan Öne Çıkanlar</h2>
                    <p className="paragraph mb-10 max-w-2xl mx-auto text-textGray">
                        Düğün trendleri, dijital davetiye fikirleri ve unutulmaz etkinlikler hakkında ipuçları alın.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: '2025 Düğün Davetiye Trendleri',
                                slug: '/tr/blog/2025-wedding-invitation-trends',
                                image: weddingTrendImage,
                            },
                            {
                                title: 'Neden Dijital Davetiye Kullanmalısınız?',
                                slug: '/tr/blog/why-digital-invitations',
                                image: digitalInvitationImage,
                            },
                            {
                                title: 'Etkinlik Planlamada Yapılan 5 Hata',
                                slug: '/tr/blog/event-planning-mistakes',
                                image: planningMistakesImage,
                            },
                        ].map((post, i) => (
                            <Link key={i} to={post.slug} className="block bg-white rounded-xl shadow hover:shadow-lg transition">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <div className="p-4 text-left">
                                    <h3 className="font-semibold text-black text-lg">{post.title}</h3>
                                    <p className="text-sm text-gold mt-1">Devamını oku →</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCROLL TO TOP */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 sm:right-5 bg-gold/60 hover:bg-gold transition-all duration-300 p-3 sm:p-4 rounded-full shadow-xl z-50"
                    aria-label="Yukarı çık"
                >
                    <ChevronUp className="text-black w-7 h-7" />
                </button>
            )}
        </Layout>
    );
};

export default IndexTr;
