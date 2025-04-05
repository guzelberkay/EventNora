import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = {
    en: [
      {
        question: "What types of events do you organize?",
        answer: "We specialize in corporate events, weddings, private parties, and product launches.",
      },
      {
        question: "How far in advance should I book your services?",
        answer: "We recommend booking at least 3-6 months in advance for large events.",
      },
      {
        question: "Do you provide services outside of Istanbul?",
        answer: "Yes, we organize events throughout Turkey and can travel internationally.",
      },
      {
        question: "What is included in your basic event package?",
        answer: "Our basic package includes event planning, venue selection, and coordination on the day.",
      },
      {
        question: "Can you help with event branding and design?",
        answer: "Absolutely! We offer full creative services including branding, visuals, and theme development.",
      },
      {
        question: "Do you work with vendors or provide in-house services?",
        answer: "We have a trusted network of vendors but also offer in-house solutions for many services.",
      },
    ],
    tr: [
      {
        question: "Ne tür etkinlikler düzenliyorsunuz?",
        answer: "Kurumsal etkinlikler, düğünler, özel partiler ve ürün lansmanları konusunda uzmanız.",
      },
      {
        question: "Hizmetlerinizi ne kadar önceden ayarlamalıyım?",
        answer: "Büyük etkinlikler için en az 3-6 ay önceden rezervasyon yapmanızı öneririz.",
      },
      {
        question: "İstanbul dışında hizmet veriyor musunuz?",
        answer: "Evet, tüm Türkiye'de ve yurtdışında etkinlikler düzenliyoruz.",
      },
      {
        question: "Temel etkinlik paketinize neler dahildir?",
        answer: "Temel paketimiz; etkinlik planlaması, mekan seçimi ve etkinlik günü koordinasyonunu içerir.",
      },
      {
        question: "Etkinlik tasarımı ve marka kimliği oluşturma hizmeti veriyor musunuz?",
        answer: "Kesinlikle! Yaratıcı hizmetler kapsamında marka tasarımı, görseller ve tema geliştirme sunuyoruz.",
      },
      {
        question: "Kendi ekipmanınızı mı kullanıyorsunuz, yoksa dışarıdan mı alıyorsunuz?",
        answer: "Güvenilir iş ortaklarımızla çalışıyoruz ancak birçok hizmeti kendi bünyemizde de sağlıyoruz.",
      },
    ]
  };

  const selectedFaqs = faqs[language];

  return (
      <Layout>
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center page-transition">
              <h1 className="heading-1 text-gold mb-4">
                {language === 'en' ? 'FAQ' : 'SSS'}
              </h1>
              <p className="text-gold-light/80 text-lg">
                {language === 'en' ? 'Frequently Asked Questions' : 'Sıkça Sorulan Sorular'}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {selectedFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm px-6">
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
