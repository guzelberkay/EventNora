// src/components/Canonical.tsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://www.eventnora.com';

const Canonical = () => {
    const { pathname } = useLocation();

    // Eğer /en ile başlıyorsa / olarak normalize et
    const canonicalPath = pathname === '/en' ? '/' : pathname;
    const canonical = `${siteUrl}${canonicalPath}`;

    // Hreflang karşılıkları
    const hreflangMap: Record<string, { en: string; tr: string }> = {
        '/': { en: '/', tr: '/tr' },
        '/tr': { en: '/', tr: '/tr' },
        '/about': { en: '/about', tr: '/tr/hakkimizda' },
        '/tr/hakkimizda': { en: '/about', tr: '/tr/hakkimizda' },
        '/services': { en: '/services', tr: '/tr/hizmetler' },
        '/tr/hizmetler': { en: '/services', tr: '/tr/hizmetler' },
        '/contact': { en: '/contact', tr: '/tr/iletisim' },
        '/tr/iletisim': { en: '/contact', tr: '/tr/iletisim' },
        '/faq': { en: '/faq', tr: '/tr/sss' },
        '/tr/sss': { en: '/faq', tr: '/tr/sss' },
        '/blog': { en: '/blog', tr: '/tr/blog' },
        '/tr/blog': { en: '/blog', tr: '/tr/blog' },

        // Hizmet Sayfaları (EN ↔ TR)
        '/services/engagement-wedding-organization': {
            en: '/services/engagement-wedding-organization',
            tr: '/tr/hizmetler/nisan-dugun-organizasyonu',
        },
        '/tr/hizmetler/nisan-dugun-organizasyonu': {
            en: '/services/engagement-wedding-organization',
            tr: '/tr/hizmetler/nisan-dugun-organizasyonu',
        },
        '/services/corporate-events': {
            en: '/services/corporate-events',
            tr: '/tr/hizmetler/kurumsal-etkinlikler',
        },
        '/tr/hizmetler/kurumsal-etkinlikler': {
            en: '/services/corporate-events',
            tr: '/tr/hizmetler/kurumsal-etkinlikler',
        },
        '/services/birthday-special-day': {
            en: '/services/birthday-special-day',
            tr: '/tr/hizmetler/dogum-gunu-ozel-gun',
        },
        '/tr/hizmetler/dogum-gunu-ozel-gun': {
            en: '/services/birthday-special-day',
            tr: '/tr/hizmetler/dogum-gunu-ozel-gun',
        },
        '/services/festival-event': {
            en: '/services/festival-event',
            tr: '/tr/hizmetler/festival-etkinlik-organizasyonu',
        },
        '/tr/hizmetler/festival-etkinlik-organizasyonu': {
            en: '/services/festival-event',
            tr: '/tr/hizmetler/festival-etkinlik-organizasyonu',
        },
        '/services/congress-fair': {
            en: '/services/congress-fair',
            tr: '/tr/hizmetler/kongre-fuar-organizasyonu',
        },
        '/tr/hizmetler/kongre-fuar-organizasyonu': {
            en: '/services/congress-fair',
            tr: '/tr/hizmetler/kongre-fuar-organizasyonu',
        },
        '/services/personal-event': {
            en: '/services/personal-event',
            tr: '/tr/hizmetler/kisisel-etkinlik-planlamasi',
        },
        '/tr/hizmetler/kisisel-etkinlik-planlamasi': {
            en: '/services/personal-event',
            tr: '/tr/hizmetler/kisisel-etkinlik-planlamasi',
        },
        '/services/social-responsibility': {
            en: '/services/social-responsibility',
            tr: '/tr/hizmetler/sosyal-sorumluluk-projeleri',
        },
        '/tr/hizmetler/sosyal-sorumluluk-projeleri': {
            en: '/services/social-responsibility',
            tr: '/tr/hizmetler/sosyal-sorumluluk-projeleri',
        },
        '/services/creative-designs': {
            en: '/services/creative-designs',
            tr: '/tr/hizmetler/yaratici-tasarim-susleme',
        },
        '/tr/hizmetler/yaratici-tasarim-susleme': {
            en: '/services/creative-designs',
            tr: '/tr/hizmetler/yaratici-tasarim-susleme',
        },
        '/services/technical-support': {
            en: '/services/technical-support',
            tr: '/tr/hizmetler/teknik-lojistik-destek',
        },
        '/tr/hizmetler/teknik-lojistik-destek': {
            en: '/services/technical-support',
            tr: '/tr/hizmetler/teknik-lojistik-destek',
        },
        '/services/consultancy': {
            en: '/services/consultancy',
            tr: '/tr/hizmetler/danismanlik-hizmetleri',
        },
        '/tr/hizmetler/danismanlik-hizmetleri': {
            en: '/services/consultancy',
            tr: '/tr/hizmetler/danismanlik-hizmetleri',
        },
    };

    const current = hreflangMap[canonicalPath];
    const hreflangs = current
        ? [
            { lang: 'en', href: `${siteUrl}${current.en}` },
            { lang: 'tr', href: `${siteUrl}${current.tr}` },
        ]
        : [];

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
            {hreflangs.map((link, i) => (
                <link key={i} rel="alternate" hrefLang={link.lang} href={link.href} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
        </Helmet>
    );
};

export default Canonical;
