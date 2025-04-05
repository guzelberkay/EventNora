import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      titleEn: 'Visit Us',
      titleTr: 'Bizi Ziyaret Edin',
      detailsEn: ['Altınşehir Mah. Şenel Cad. No:78B Ümraniye/İstanbul', 'Turkey'],
      detailsTr: ['Altınşehir Mah. Şenel Cad. No:78B Ümraniye/İstanbul', 'Türkiye']
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      titleEn: 'Call Us',
      titleTr: 'Bizi Arayın',
      detailsEn: ['+90 532 770 12 08'],
      detailsTr: ['+90 532 770 12 08']
    },
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      titleEn: 'Email Us',
      titleTr: 'E-posta Gönderin',
      detailsEn: ['yesimerdogan@eventnora.com'],
      detailsTr: ['yesimerdogan@eventnora.com']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              {language === 'en' ? 'Contact Us' : 'İletişim'}
            </h1>
            <p className="text-xl text-gold-light/80">
              {language === 'en' 
                ? "Let's discuss your next extraordinary event" 
                : "Bir sonraki olağanüstü etkinliğinizi planlamak için görüşelim"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Get in Touch' : 'Bize Ulaşın'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'en' 
                  ? "We're here to help bring your vision to life. Contact us using the information below to start planning your next event."
                  : "Vizyonunuzu hayata geçirmenize yardımcı olmak için buradayız. Bir sonraki etkinliğinizi planlamaya başlamak için aşağıdaki iletişim bilgilerimizi kullanabilirsiniz."}
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gold/10 rounded-lg inline-flex">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {language === 'en' ? item.titleEn : item.titleTr}
                  </h3>
                  <div className="space-y-2">
                    {(language === 'en' ? item.detailsEn : item.detailsTr).map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Our Location' : 'Konumumuz'}
            </h2>
            <p className="text-gray-600">
              {language === 'en' 
                ? "Visit our office in Ümraniye, Istanbul"
                : "İstanbul Ümraniye'deki ofisimizi ziyaret edebilirsiniz"}
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.123456789012!2d29.12345678901234!3d41.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzI0LjQiTiAyOcKwMDcnNDIuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'en' ? 'Our Location' : 'Konumumuz'}
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;