import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = isEnglish ? 'Contact Us | Event Nora' : 'İletişim | Event Nora';
  const pageDescription = isEnglish
      ? "Let's talk about your next unforgettable event. Reach us anytime to bring your vision to life."
      : 'Bir sonraki unutulmaz etkinliğiniz için bizimle iletişime geçin. Hayalinizi birlikte gerçeğe dönüştürelim.';

  return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={`https://www.eventnora.com/${isEnglish ? 'en' : 'tr'}/contact`} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={`https://www.eventnora.com/${isEnglish ? 'en' : 'tr'}/contact`} />
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
        </Helmet>


        {/* Hero */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
                {isEnglish ? 'Contact Us' : 'İletişim'}
              </h1>
              <p className="text-xl text-gold-light/80">
                {isEnglish
                    ? "Let's discuss your next extraordinary event"
                    : 'Bir sonraki olağanüstü etkinliğinizi planlamak için görüşelim'}
              </p>
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Get in Touch' : 'Bize Ulaşın'}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {isEnglish
                      ? "We're here to help bring your vision to life. Contact us using the information below to start planning your next event."
                      : 'Vizyonunuzu hayata geçirmenize yardımcı olmak için buradayız. Bir sonraki etkinliğinizi planlamak için aşağıdaki bilgileri kullanabilirsiniz.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Address */}
                <a
                    href="https://maps.app.goo.gl/vfYVa31mdXVF4wLSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all block"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gold/10 rounded-lg inline-flex">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isEnglish ? 'Visit Us' : 'Bizi Ziyaret Edin'}
                  </h3>
                  <p className="text-gray-600">
                    Altınşehir Mah. Şenel Cad. No:78B Ümraniye/İstanbul
                  </p>
                  <p className="text-gray-600">{isEnglish ? 'Turkey' : 'Türkiye'}</p>
                </a>

                {/* Phone */}
                <a
                    href="tel:+905327701208"
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all block"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gold/10 rounded-lg inline-flex">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isEnglish ? 'Call Us' : 'Bizi Arayın'}
                  </h3>
                  <p className="text-gray-600">+90 532 770 12 08</p>
                </a>

                {/* Email */}
                <a
                    href="mailto:yesimerdogan@eventnora.com"
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all block"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gold/10 rounded-lg inline-flex">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isEnglish ? 'Email Us' : 'E-posta Gönderin'}
                  </h3>
                  <p className="text-gray-600">yesimerdogan@eventnora.com</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isEnglish ? 'Our Location' : 'Konumumuz'}
              </h2>
              <p className="text-gray-600">
                {isEnglish
                    ? 'Visit our office in Ümraniye, Istanbul'
                    : 'İstanbul Ümraniye’deki ofisimizi ziyaret edebilirsiniz'}
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1580108449166!2d29.15012307644102!3d41.033750171347036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8a0a5e9d7e7%3A0xd56c7b7897e1772f!2sAlt%C4%B1n%C5%9Fehir%2C%20%C5%9Eenel%20Cd.%20No%3A78B%2C%2034000%20%C3%9Cmraniye%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1712400000000!5m2!1str!2str"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={isEnglish ? 'Event Nora Location' : 'Event Nora Konumu'}
              />
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default Contact;
