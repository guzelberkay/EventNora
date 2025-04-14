import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = isEnglish ? 'FAQ | Event Nora' : 'SSS | Event Nora';
  const pageDescription = isEnglish
      ? 'Get answers to frequently asked questions about our event planning services.'
      : 'Etkinlik planlama hizmetlerimizle ilgili sıkça sorulan sorulara göz atın.';

  const faqs = {
    en: [
      {
        question: 'What types of events do you organize?',
        answer: 'We specialize in corporate events, weddings, private parties, and product launches.',
      },
      {
        question: 'How far in advance should I book your services?',
        answer: 'We recommend booking at least 3–6 months in advance for large events.',
      },
      {
        question: 'Do you provide services outside of Istanbul?',
        answer: 'Yes, we organize events throughout Turkey and can travel internationally.',
      },
      {
        question: 'What is included in your basic event package?',
        answer: 'Our basic package includes event planning, venue selection, and day-of coordination.',
      },
      {
        question: 'Can you help with event branding and design?',
        answer: 'Absolutely! We offer full creative services including branding, visuals, and theme development.',
      },
      {
        question: 'Do you work with vendors or provide in-house services?',
        answer: 'We have a trusted network of vendors but also offer in-house solutions for many services.',
      },
    ],
    tr: [
      {
        question: 'Ne tür etkinlikler düzenliyorsunuz?',
        answer: 'Kurumsal etkinlikler, düğünler, özel partiler ve ürün lansmanları konusunda uzmanız.',
      },
      {
        question: 'Hizmetlerinizi ne kadar önceden ayarlamalıyım?',
        answer: 'Büyük etkinlikler için en az 3–6 ay önceden rezervasyon yapmanızı öneririz.',
      },
      {
        question: 'İstanbul dışında hizmet veriyor musunuz?',
        answer: 'Evet, Türkiye genelinde ve yurtdışında etkinlikler düzenliyoruz.',
      },
      {
        question: 'Temel etkinlik paketinize neler dahildir?',
        answer: 'Temel paketimiz; etkinlik planlaması, mekan seçimi ve etkinlik günü koordinasyonunu içerir.',
      },
      {
        question: 'Etkinlik tasarımı ve marka kimliği oluşturma hizmeti veriyor musunuz?',
        answer: 'Evet! Marka tasarımı, görsel çalışmalar ve tema geliştirme gibi yaratıcı hizmetler sunuyoruz.',
      },
      {
        question: 'Kendi ekipmanınızı mı kullanıyorsunuz, yoksa dışarıdan mı alıyorsunuz?',
        answer: 'Güvenilir iş ortaklarımızla çalışıyor, ayrıca birçok hizmeti kendi ekibimizle sağlıyoruz.',
      },
    ],
  };

  const selectedFaqs = faqs[language];

  return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={`https://www.eventnora.com/${isEnglish ? 'en' : 'tr'}/faq`} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.eventnora.com/${isEnglish ? 'en' : 'tr'}/faq`} />
          <meta property="og:site_name" content="Event Nora" />
          <meta property="og:image" content="https://www.eventnora.com/logo.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content="https://www.eventnora.com/logo.png" />

          {/* WebSite Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Event Nora",
              "url": "https://www.eventnora.com"
            })}
          </script>

          {/* Organization Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Event Nora",
              "url": "https://www.eventnora.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.eventnora.com/logo.png"
              }
            })}
          </script>

          {/* FAQ Schema – Rich Results için (otomatik oluşturulmuş) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": selectedFaqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        </Helmet>


        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-gold mb-4">{isEnglish ? 'FAQ' : 'SSS'}</h1>
            <p className="text-gold-light/80 text-lg">
              {isEnglish ? 'Frequently Asked Questions' : 'Sıkça Sorulan Sorular'}
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section">
          <div className="container-custom max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {selectedFaqs.map((faq, index) => (
                  <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white rounded-lg shadow-sm px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-black">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 pt-2">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </Layout>
  );
};

export default FAQ;
