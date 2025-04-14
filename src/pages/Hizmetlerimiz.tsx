import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const Hizmetler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            name: 'Nişan ve Düğün Organizasyonu',
            desc: 'Hayalinizdeki düğün günü için eksiksiz planlama ve koordinasyon.',
            img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
            link: '/tr/hizmetler/nisan-dugun-organizasyonu', // Türkçe link
        },
        {
            name: 'Doğum Günü & Özel Gün Organizasyonları',
            desc: 'Unutulmaz doğum günü partileri ve özel gün kutlamaları.',
            img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
            link: '/tr/hizmetler/dogum-gunu-ozel-gun', // Türkçe link
        },
        {
            name: 'Kurumsal Etkinlikler',
            desc: 'Markanızı güçlendiren profesyonel kurumsal organizasyonlar.',
            img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
            link: '/tr/hizmetler/kurumsal-etkinlikler', // Türkçe link
        },
        {
            name: 'Festival ve Toplu Etkinlikler',
            desc: 'Unutulmaz müzikli ve temalı açık hava etkinlikleri.',
            img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
            link: '/tr/hizmetler/festival-etkinlik-organizasyonu', // Türkçe link
        },
        {
            name: 'Kongre ve Fuar Organizasyonları',
            desc: 'Profesyonel fuar standları ve kongre yönetimi.',
            img: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80',
            link: '/tr/hizmetler/kongre-fuar-organizasyonu', // Türkçe link
        },
        {
            name: 'Kişisel Etkinlik Planlaması',
            desc: 'Sizin stilinize özel kişisel organizasyonlar.',
            img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
            link: '/tr/hizmetler/kisisel-etkinlik-planlamasi', // Türkçe link
        },
        {
            name: 'Sosyal Sorumluluk Projeleri',
            desc: 'Topluma ve çevreye duyarlı sürdürülebilir projeler.',
            img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
            link: '/tr/hizmetler/sosyal-sorumluluk-projeleri', // Türkçe link
        },
        {
            name: 'Yaratıcı Tasarımlar ve Süsleme Hizmetleri',
            desc: 'Balon, çiçek ve konsept tasarımlarla estetik süsleme.',
            img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
            link: '/tr/hizmetler/yaratici-tasarim-susleme', // Türkçe link
        },
        {
            name: 'Teknik ve Lojistik Destek',
            desc: 'Ses, ışık, sahne ve teknik kurulum çözümleri.',
            img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            link: '/tr/hizmetler/teknik-lojistik-destek', // Türkçe link
        },
        {
            name: 'Danışmanlık Hizmetleri',
            desc: 'Organizasyon sürecinde uzman danışmanlık desteği.',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
            link: '/tr/hizmetler/danismanlik-hizmetleri', // Türkçe link
        },
    ];

    return (
        <Layout>
            <Helmet>
                <title>İstanbul Organizasyon Hizmetleri | Event Nora</title>
                <meta
                    name="description"
                    content="İstanbul’da düğün, nişan, doğum günü, festival, kongre ve diğer tüm organizasyon hizmetleri."
                />
                <link rel="canonical" href="https://www.eventnora.com/tr/hizmetler" />
            </Helmet>

            {/* Hero */}
            <section className="py-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
                <div className="container-custom relative z-10 text-center">
                    <h1 className="heading-1 text-gold mb-4">Hizmetlerimiz</h1>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(item.link)}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-black mb-2">{item.name}</h3>
                                    <p className="text-textGray text-sm mb-4">{item.desc}</p>
                                    <span className="text-gold font-medium hover:text-gold-dark transition">
                    Detaylar →
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Hizmetler;
