import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: 'Engagement and Wedding Organization',
      desc: 'Complete planning and coordination for your perfect wedding day.',
      img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
      link: '/services/engagement-wedding-organization',
    },
    {
      name: 'Birthday and Special Day Organizations',
      desc: 'Memorable birthday parties and milestone celebrations.',
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
      link: '/services/birthday-special-day',
    },
    {
      name: 'Corporate Events',
      desc: 'Strengthen your brand with professional business events.',
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
      link: '/services/corporate-events',
    },
    {
      name: 'Festival and Public Events',
      desc: 'Unforgettable large-scale public and music events.',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      link: '/services/festival-event',
    },
    {
      name: 'Congress and Fair Organizations',
      desc: 'Professional fair booths and corporate congress management.',
      img: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80',
      link: '/services/congress-fair',
    },
    {
      name: 'Personal Event Planning',
      desc: 'Tailored events designed for your unique style.',
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
      link: '/services/personal-event',
    },
    {
      name: 'Social Responsibility Projects',
      desc: 'Impactful community and environmental initiatives.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      link: '/services/social-responsibility',
    },
    {
      name: 'Creative Designs and Decoration Services',
      desc: 'Custom themes, decor, flowers, balloons, and more.',
      img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
      link: '/services/creative-designs',
    },
    {
      name: 'Technical and Logistics Support',
      desc: 'Sound, light, stage, video and on-site setup services.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      link: '/services/technical-support',
    },
    {
      name: 'Consultancy Services',
      desc: 'Professional guidance for event concept and strategy.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      link: '/services/consultancy',
    },
  ];

  const canonicalUrl = `https://www.eventnora.com/services`;

  return (
      <Layout>
        <Helmet>
          <title>Event Services in Istanbul | Event Nora</title>
          <meta
              name="description"
              content="Discover premium event planning in Istanbul: weddings, corporate, festivals, birthdays, congress, and more."
          />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>

        {/* Hero */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          <div className="container-custom relative z-10 text-center">
            <h1 className="heading-1 text-gold mb-4">Our Services</h1>
          </div>
        </section>

        {/* Service Cards */}
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
                    Learn More →
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

export default Services;
