import React, { useEffect } from 'react';
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
} from 'lucide-react';
import Layout from '@/components/Layout';
import backgroundImage from '@/images/a1.png'; // ✅ src altındaysa bu şekilde

const IndexTr = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Etkinlik Planlama ve Organizasyon | Event Nora</title>
                <meta
                    name="description"
                    content="Yaratıcılık, strateji ve kusursuz uygulama ile unutulmaz etkinlikler tasarlıyoruz."
                />
                <link rel="canonical" href="https://www.eventnora.com/tr" />
            </Helmet>

            {/* Hero */}
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
          <span className="inline-block px-3 py-1 bg-black text-gold text-sm font-medium rounded-full mb-6">
            Premium Etkinlik Planlama
          </span>
                    <h1 className="heading-1 mb-6 text-black">
                        Event Nora | Dijital Davetiyeler & Etkinlik Planlama
                    </h1>
                    <p className="paragraph mb-8 text-black text-2xl">
                        Tüm etkinlik türleri için detaylı planlama, yaratıcı tasarım ve kusursuz uygulama ile vizyonunuzu gerçeğe dönüştürüyoruz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/tr/iletisim" className="gold-button text-xl">
                            İletişime Geçin
                        </Link>
                        <Link
                            to="/tr/hizmetler"
                            className="flex items-center justify-center gap-2 px-6 py-2.5 text-black hover:text-gold transition-colors duration-300 text-xl"
                        >
                            Hizmetlerimiz <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Neden Biz */}
            <section className="section bg-white text-center">
                <div className="container-custom">
                    <span className="text-gold font-medium">Neden Bizi Seçmelisiniz?</span>
                    <h2 className="heading-2 text-black mt-2 mb-4">Etkinlik Planlamada Altın Standart</h2>
                    <p className="paragraph opacity-80 mb-12">
                        Her etkinlikte uzmanlık, yaratıcılık ve hassasiyetle sorunsuz bir deneyim sunuyoruz.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Star className="w-10 h-10 text-gold" />,
                                title: 'Premium Hizmet',
                                description: 'Her müşteri ve etkinlik için detaylara gösterilen özen ve kişiye özel yaklaşım.',
                            },
                            {
                                icon: <CheckCircle className="w-10 h-10 text-gold" />,
                                title: 'Uzman Planlama',
                                description: 'Farklı etkinlik türlerinde yılların deneyimine sahip profesyonel organizatörler.',
                            },
                            {
                                icon: <Calendar className="w-10 h-10 text-gold" />,
                                title: 'Zamanında Uygulama',
                                description: 'Etkinliğinizin kusursuz geçmesi için hassas zamanlama ve koordinasyon.',
                            },
                        ].map((feature, index) => (
                            <div key={index} className="p-8 border border-gold/10 shadow-sm rounded-lg">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                                <p className="text-textGray">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hizmetler */}
            <section className="section bg-[#fafafa] text-left">
                <div className="container-custom text-center">
                    <span className="text-gold font-medium">Hizmetlerimizden Seçmeler</span>
                    <h2 className="heading-2 text-black mt-2 mb-8">Öne Çıkan Organizasyonlar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <HeartHandshake className="w-10 h-10 text-gold mb-3" />,
                                title: 'Nişan & Düğün Organizasyonu',
                                link: 'nisan-dugun-organizasyonu',
                                description: 'Hayalinizdeki nişan ve düğünleri zarif detaylarla kusursuz şekilde planlıyoruz.',
                            },
                            {
                                icon: <Building2 className="w-10 h-10 text-gold mb-3" />,
                                title: 'Kurumsal Etkinlikler',
                                link: 'kurumsal-etkinlikler',
                                description: 'Şirket lansmanları, yıl sonu partileri ve motivasyon etkinliklerinde yanınızdayız.',
                            },
                            {
                                icon: <Cake className="w-10 h-10 text-gold mb-3" />,
                                title: 'Doğum Günü & Özel Gün',
                                link: 'dogum-gunu-ozel-gun',
                                description: 'Çocuk ve yetişkin doğum günlerine özel konsept ve temalarla unutulmaz anlar sunuyoruz.',
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

                    <div className="mt-10">
                        <Link
                            to="/tr/hizmetler"
                            className="inline-block px-6 py-3 bg-gold text-black rounded font-medium hover:bg-gold-dark transition-all"
                        >
                            Tüm Hizmetlerimizi Gör
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/95 z-0" />
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Unutulmaz <span className="text-gold">Bir Etkinlik</span> İçin Hazır Mısınız?
                    </h2>
                    <p className="text-white/80 text-lg mb-8">
                        Etkinlik ihtiyaçlarınızı konuşmak ve hayalinizi gerçeğe dönüştürmek için bugün bizimle iletişime geçin.
                    </p>
                    <Link
                        to="/tr/iletisim"
                        className="inline-block bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded transition-all duration-300"
                    >
                        Başlayalım
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default IndexTr;
