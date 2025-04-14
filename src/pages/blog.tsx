import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Image imports
import weddingTrendImage from '../images/wedding_trend.png';
import engagement from '../images/perfect_engagement_party.png';
import digital from '../images/digital_invitations.png';
import birthdayparty from '../images/birhday_party.png';
import eventmistakes from '../images/event_planing_mistakes.jpg';
import festival from '../images/festival.jpg';
import teknikdestek from '../images/teknik-destek-hizmetleri.jpg';
import weddingcolor from '../images/wedding-color-ideas.jpg';
import rsvp from '../images/rsvp.png';

interface BlogPost {
    slug: string;
    titleTr: string;
    titleEn: string;
    excerptTr: string;
    excerptEn: string;
    image: string;
    tags: string[];
    date: string;
}

const Blog: React.FC = () => {
    const { language } = useLanguage();
    const isEnglish = language === 'en';
    const [visibleCount, setVisibleCount] = useState<number>(6);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pageTitle = isEnglish
        ? 'Event Nora Blog | Tips, Trends & Invitations'
        : 'Event Nora Blog | Etkinlik, Davetiye ve Trendler';

    const pageDescription = isEnglish
        ? 'Discover inspiring ideas on event planning, digital invitations, and wedding trends.'
        : 'Etkinlik planlama, dijital davetiye ve düğün trendleri hakkında ilham verici içerikler.';

    const keywords = isEnglish
        ? 'event blog, wedding trends, digital invitation, RSVP online, party tips, creative event design'
        : 'düğün blogu, dijital davetiye, qr kod, rsvp nedir, davetiye trendleri, etkinlik tasarımı';

    const canonicalUrl = `https://www.eventnora.com${language === 'en' ? '' : '/tr'}/blog`;

    const posts: BlogPost[] = [
        {
            slug: '2025-wedding-invitation-trends',
            titleTr: '2025 Düğün Davetiye Trendleri',
            titleEn: '2025 Wedding Invitation Trends',
            excerptTr: '2025 yılında QR kodlu, sade, dijital davetiyeler trend olacak.',
            excerptEn: 'In 2025, QR coded, minimal, digital invitations will trend.',
            image: weddingTrendImage,
            tags: ['Düğün', 'Davetiye', '2025 Trend'],
            date: '2025-04-10',
        },
        {
            slug: 'how-to-plan-perfect-engagement',
            titleTr: 'Kusursuz Bir Nişan Nasıl Planlanır?',
            titleEn: 'How to Plan the Perfect Engagement Party',
            excerptTr: 'Tüm detaylarıyla unutulmaz bir nişan töreni nasıl planlanır?',
            excerptEn: 'Everything you need to plan a perfect engagement party.',
            image: engagement,
            tags: ['Nişan', 'Planlama', 'Organizasyon'],
            date: '2025-04-02',
        },
        {
            slug: 'why-digital-invitations',
            titleTr: 'Neden Dijital Davetiye Kullanmalısınız?',
            titleEn: 'Why Use Digital Invitations?',
            excerptTr: 'Çevre dostu, hızlı ve etkili dijital davetiyelerin avantajları.',
            excerptEn: 'The eco-friendly and efficient benefits of digital invites.',
            image: digital,
            tags: ['Dijital', 'QR Kod', 'E-Davetiye'],
            date: '2025-03-10',
        },
        {
            slug: 'birthday-party-ideas',
            titleTr: 'Yaratıcı Doğum Günü Fikirleri',
            titleEn: 'Creative Birthday Party Ideas',
            excerptTr: 'Eğlenceli, temalı, farklı doğum günü organizasyon fikirleri.',
            excerptEn: 'Fun and unique birthday party concepts you’ll love.',
            image: birthdayparty,
            tags: ['Doğum Günü', 'Tema', 'Kutlama'],
            date: '2025-03-01',
        },
        {
            slug: 'event-planning-mistakes',
            titleTr: 'Etkinlik Planlamada Yapılan 5 Hata',
            titleEn: '5 Event Planning Mistakes to Avoid',
            excerptTr: 'Bu 5 kritik hatayı yapmayın: bütçe, iletişim, zamanlama...',
            excerptEn: 'Avoid these 5 deadly mistakes: timing, budget, team...',
            image: eventmistakes,
            tags: ['Etkinlik', 'Hatalar', 'İpucu'],
            date: '2025-02-18',
        },
        {
            slug: 'rsvp-guide',
            titleTr: 'RSVP Nedir ve Nasıl Kullanılır?',
            titleEn: 'What is RSVP and How to Use It?',
            excerptTr: 'Katılım takibi için RSVP sistemini neden ve nasıl kullanmalısınız?',
            excerptEn: 'Why and how to use RSVP systems for guest tracking?',
            image: rsvp,
            tags: ['RSVP', 'Katılım', 'Online Davetiye'],
            date: '2025-02-01',
        },
        {
            slug: 'festival-event-decorations',
            titleTr: 'Festival & Etkinlik Süslemeleri',
            titleEn: 'Festival & Event Decoration Tips',
            excerptTr: 'Festival havasını yansıtan dekorasyon önerileri.',
            excerptEn: 'Decor tips to bring festival vibes to your event.',
            image: festival,
            tags: ['Dekorasyon', 'Festival', 'Etkinlik'],
            date: '2025-01-22',
        },
        {
            slug: 'technical-support-for-events',
            titleTr: 'Etkinliklerde Teknik Destek Önemi',
            titleEn: 'Why Technical Support is Critical in Events',
            excerptTr: 'Ses, ışık ve görüntü sistemleri neden profesyonel olmalı?',
            excerptEn: 'Why audio, lighting and visuals must be pro level.',
            image: teknikdestek,
            tags: ['Teknik', 'Destek', 'Etkinlik Teknolojisi'],
            date: '2025-01-10',
        },
        {
            slug: 'event-colors-and-themes',
            titleTr: 'Renk ve Tema Uyumuyla Etkinlik Tasarımı',
            titleEn: 'Using Colors & Themes in Event Design',
            excerptTr: 'Renk paletiyle atmosfer yaratmak: pastel, gold, boho...',
            excerptEn: 'Set the tone using right color palettes and theme choices.',
            image: weddingcolor,
            tags: ['Renk', 'Tema', 'Tasarım'],
            date: '2024-12-29',
        },
    ];

    const visiblePosts = posts.slice(0, visibleCount);

    return (
        <Layout>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={weddingTrendImage} />
                <meta property="og:site_name" content="Event Nora" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={weddingTrendImage} />
                <meta name="twitter:site" content="@eventnora" />
            </Helmet>

            <section className="py-20 bg-black text-center text-gold">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        {isEnglish ? 'Event Nora Blog' : 'Event Nora Blogu'}
                    </h1>
                    <p className="text-lg text-gold-light/80">
                        {isEnglish
                            ? 'Tips, trends and everything about unforgettable events.'
                            : 'Unutulmaz etkinlikler için trendler, tüyolar ve yaratıcı fikirler.'}
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {visiblePosts.map((post, i) => {
                        const url = `/${language === 'en' ? 'blog' : 'tr/blog'}/${post.slug}`;
                        const title = isEnglish ? post.titleEn : post.titleTr;
                        const excerpt = isEnglish ? post.excerptEn : post.excerptTr;

                        return (
                            <Link
                                key={i}
                                to={url}
                                className="block bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all"
                            >
                                <img src={post.image} alt={title} className="w-full h-52 object-cover rounded-t-xl" />
                                <div className="p-5">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {post.tags.map((tag, j) => (
                                            <span key={j} className="bg-gold/10 text-gold text-xs font-medium px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                                    <p className="text-sm text-gray-500 mb-1">
                                        {new Date(post.date).toLocaleDateString()}
                                    </p>
                                    <p className="text-gray-700 mb-2">{excerpt}</p>
                                    <span className="text-gold font-semibold">
                                        {isEnglish ? 'Read more →' : 'Devamını oku →'}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {visibleCount < posts.length && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setVisibleCount(visibleCount + 3)}
                            className="px-6 py-3 bg-gold text-white rounded-lg shadow hover:bg-gold-dark transition-all"
                        >
                            {isEnglish ? 'Load More' : 'Daha Fazla Göster'}
                        </button>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Blog;
