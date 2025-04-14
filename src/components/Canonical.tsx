// src/components/Canonical.tsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://www.eventnora.com';

const Canonical = () => {
    const { pathname } = useLocation();

    // Canonical link oluştur
    const canonical = `${siteUrl}${pathname}`;

    // Sayfa eşlemeleri: EN ↔ TR
    const hreflangMap: Record<string, { en: string; tr: string }> = {
        '/': { en: '/en', tr: '/tr' },
        '/en': { en: '/en', tr: '/tr' },
        '/tr': { en: '/en', tr: '/tr' },
        '/en/about': { en: '/en/about', tr: '/tr/hakkimizda' },
        '/tr/hakkimizda': { en: '/en/about', tr: '/tr/hakkimizda' },
        '/en/services': { en: '/en/services', tr: '/tr/hizmetler' },
        '/tr/hizmetler': { en: '/en/services', tr: '/tr/hizmetler' },
        '/en/contact': { en: '/en/contact', tr: '/tr/iletisim' },
        '/tr/iletisim': { en: '/en/contact', tr: '/tr/iletisim' },
        '/en/faq': { en: '/en/faq', tr: '/tr/sss' },
        '/tr/sss': { en: '/en/faq', tr: '/tr/sss' },
        '/en/blog': { en: '/en/blog', tr: '/tr/blog' },
        '/tr/blog': { en: '/en/blog', tr: '/tr/blog' },

        // EN Service Pages
        '/en/services/engagement-wedding-organization': {
            en: '/en/services/engagement-wedding-organization',
            tr: '/tr/hizmetler/nisan-dugun-organizasyonu',
        },
        '/en/services/corporate-events': {
            en: '/en/services/corporate-events',
            tr: '/tr/hizmetler/kurumsal-etkinlikler',
        },
        '/en/services/birthday-special-day': {
            en: '/en/services/birthday-special-day',
            tr: '/tr/hizmetler/dogum-gunu-ozel-gun',
        },
        '/en/services/festival-event': {
            en: '/en/services/festival-event',
            tr: '/tr/hizmetler/festival-etkinlik-organizasyonu',
        },
        '/en/services/congress-fair': {
            en: '/en/services/congress-fair',
            tr: '/tr/hizmetler/kongre-fuar-organizasyonu',
        },
        '/en/services/personal-event': {
            en: '/en/services/personal-event',
            tr: '/tr/hizmetler/kisisel-etkinlik-planlamasi',
        },
        '/en/services/social-responsibility': {
            en: '/en/services/social-responsibility',
            tr: '/tr/hizmetler/sosyal-sorumluluk-projeleri',
        },
        '/en/services/creative-designs': {
            en: '/en/services/creative-designs',
            tr: '/tr/hizmetler/yaratici-tasarim-susleme',
        },
        '/en/services/technical-support': {
            en: '/en/services/technical-support',
            tr: '/tr/hizmetler/teknik-lojistik-destek',
        },
        '/en/services/consultancy': {
            en: '/en/services/consultancy',
            tr: '/tr/hizmetler/danismanlik-hizmetleri',
        },

        // TR Service Pages
        '/tr/hizmetler/nisan-dugun-organizasyonu': {
            en: '/en/services/engagement-wedding-organization',
            tr: '/tr/hizmetler/nisan-dugun-organizasyonu',
        },
        '/tr/hizmetler/kurumsal-etkinlikler': {
            en: '/en/services/corporate-events',
            tr: '/tr/hizmetler/kurumsal-etkinlikler',
        },
        '/tr/hizmetler/dogum-gunu-ozel-gun': {
            en: '/en/services/birthday-special-day',
            tr: '/tr/hizmetler/dogum-gunu-ozel-gun',
        },
        '/tr/hizmetler/festival-etkinlik-organizasyonu': {
            en: '/en/services/festival-event',
            tr: '/tr/hizmetler/festival-etkinlik-organizasyonu',
        },
        '/tr/hizmetler/kongre-fuar-organizasyonu': {
            en: '/en/services/congress-fair',
            tr: '/tr/hizmetler/kongre-fuar-organizasyonu',
        },
        '/tr/hizmetler/kisisel-etkinlik-planlamasi': {
            en: '/en/services/personal-event',
            tr: '/tr/hizmetler/kisisel-etkinlik-planlamasi',
        },
        '/tr/hizmetler/sosyal-sorumluluk-projeleri': {
            en: '/en/services/social-responsibility',
            tr: '/tr/hizmetler/sosyal-sorumluluk-projeleri',
        },
        '/tr/hizmetler/yaratici-tasarim-susleme': {
            en: '/en/services/creative-designs',
            tr: '/tr/hizmetler/yaratici-tasarim-susleme',
        },
        '/tr/hizmetler/teknik-lojistik-destek': {
            en: '/en/services/technical-support',
            tr: '/tr/hizmetler/teknik-lojistik-destek',
        },
        '/tr/hizmetler/danismanlik-hizmetleri': {
            en: '/en/services/consultancy',
            tr: '/tr/hizmetler/danismanlik-hizmetleri',
        },
    };

    const current = hreflangMap[pathname];
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
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en`} />
        </Helmet>
    );
};

export default Canonical;
