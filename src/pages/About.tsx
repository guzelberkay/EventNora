import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '../images/event-nora-about.jpeg';

const About = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = isEnglish ? 'About Us | Event Nora' : 'Hakkımızda | Event Nora';
  const pageDescription = isEnglish
      ? 'Event Nora is passionate about crafting unforgettable experiences through creativity, precision, and professionalism.'
      : 'Event Nora, yaratıcılık, hassasiyet ve profesyonellik ile unutulmaz deneyimler yaratmaya tutkuyla bağlıdır.';

  const coreValues = isEnglish
      ? [
        { value: 'Excellence', description: 'We strive for perfection in every detail, no matter how small.' },
        { value: 'Creativity', description: 'We bring innovative ideas to make each event unique and memorable.' },
        { value: 'Integrity', description: 'We operate with honesty and transparency in all our dealings.' },
        { value: 'Reliability', description: 'We deliver on our promises and ensure peace of mind for our clients.' },
      ]
      : [
        { value: 'Mükemmellik', description: 'En küçük detayda bile mükemmellik için çaba gösteriyoruz.' },
        { value: 'Yaratıcılık', description: 'Her etkinliği benzersiz ve unutulmaz kılmak için yenilikçi fikirler sunuyoruz.' },
        { value: 'Dürüstlük', description: 'Tüm iş ilişkilerimizde şeffaf ve dürüst bir yaklaşım sergiliyoruz.' },
        { value: 'Güvenilirlik', description: 'Sözlerimizi tutar ve müşterilerimize gönül rahatlığı sağlarız.' },
      ];

  return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
        </Helmet>

        {/* Hero Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-gold mb-4">{isEnglish ? 'About Us' : 'Hakkımızda'}</h1>
            <p className="text-gold-light/80 text-lg">
              {isEnglish
                  ? 'Discover our passion for creating unforgettable moments'
                  : 'Unutulmaz anlar yaratma tutkumuzu keşfedin'}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <span className="text-gold font-medium">{isEnglish ? 'Our Story' : 'Hikayemiz'}</span>
                <h2 className="heading-2 text-black mt-2 mb-4">
                  {isEnglish ? 'Crafting Unforgettable Experiences' : 'Unutulmaz Deneyimler Tasarlıyoruz'}
                </h2>
                {isEnglish ? (
                    <>
                      <p>
                        Event Nora is an event and organization company that works with passion to create unforgettable moments. We offer a wide range of services from business dinners to weddings, birthdays to company openings, fashion events to boat parties.
                      </p>
                      <p>
                        We design each event with aesthetic touches to transform it into a unique experience and perfect it down to the smallest detail. With our services covering stage setup, table arrangement, decoration, music, consultancy, animation and more, we make your events more magnificent than you imagined.
                      </p>
                      <p>
                        We make a difference in the event industry by offering creative and personalized solutions to our local and international clients. For us, every detail is a work of art and every event is an unforgettable story. Ready to turn your dream event into reality with Event Nora?
                      </p>
                    </>
                ) : (
                    <>
                      <p>
                        Event Nora, unutulmaz anlar yaratmak için tutkuyla çalışan bir etkinlik ve organizasyon şirketidir. İş yemeklerinden düğünlere, doğum günlerinden şirket açılışlarına, moda etkinliklerinden tekne partilerine kadar geniş bir yelpazede hizmet sunuyoruz.
                      </p>
                      <p>
                        Her organizasyonu estetik dokunuşlarla benzersiz bir deneyime dönüştürüyor, en ince detayına kadar kusursuz hale getiriyoruz. Sahne kurulumu, masa düzeni, dekorasyon, müzik, danışmanlık, animasyon ve daha fazlasıyla hayal ettiğinizden daha görkemli organizasyonlar sunuyoruz.
                      </p>
                      <p>
                        Yerli ve uluslararası müşterilerimize özel, yaratıcı ve kişiselleştirilmiş çözümler sunarak sektörde fark yaratıyoruz. Her detay bizim için bir sanat eseri, her etkinlik ise unutulmaz bir hikâyedir. Hayalinizdeki organizasyonu gerçeğe dönüştürmek için hazır mısınız?
                      </p>
                    </>
                )}
              </div>
              <div>
                <img
                    src={aboutImage}
                    alt={isEnglish ? 'Event Nora team creating an event' : 'Event Nora ekibi bir etkinlik hazırlıyor'}
                    className="w-full h-[550px] object-cover rounded-lg"
                    loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-black/95 text-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-medium">{isEnglish ? 'Our Core Values' : 'Temel Değerlerimiz'}</span>
              <h2 className="heading-2 mt-2 mb-4">{isEnglish ? 'What Drives Us' : 'Bizi Yönlendirenler'}</h2>
              <p className="text-white/80">
                {isEnglish
                    ? 'These principles guide our approach to every event we plan and execute'
                    : 'Planladığımız ve gerçekleştirdiğimiz her etkinlikte bize rehberlik eden ilkeler'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((item, index) => (
                  <div
                      key={index}
                      className="border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gold mb-3">{item.value}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default About;
