import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Star,
  HeartHandshake,
  Building2,
  Cake,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import backgroundImage from '../images/a1.png';

const IndexEn = () => {
  const { language } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleReviews = [
    { name: "Zeki Bey Bakery", comment: "The grand opening was flawless! Every detail was perfectly thought out. Huge thanks to the amazing team!" },
    { name: "Cansu Çiçek", comment: "Thank you for the beautifully crafted birthday concept for our son. Every detail was perfect!" },
    { name: "Vildan Demir", comment: "The venue, the concept, the team—everything was beyond perfect. Thank you so much!" },
    { name: "Sevinj Mammadli", comment: "They listened to my needs carefully and exceeded all expectations. Beautiful decoration!" },
    { name: "Şule Gürel", comment: "Our son's birthday party was exactly what we hoped for. Yeşim Hanım was very attentive." },
    { name: "İlker Ceylan", comment: "We celebrated our son's birthday here. Smooth and joyful experience thanks to the staff." },
    { name: "Hatice Danyıldız", comment: "Warm and welcoming like family. Even better than expected!" },
    { name: "Aleyna Akdaş", comment: "Such a lovely and well-organized event. We absolutely loved everything. Thank you!" },
    { name: "Gamze Kartal", comment: "You created an unforgettable birthday memory for my daughter. Truly grateful!" },
    { name: "Sedanur Yılmaz", comment: "Our engagement event was magical. Very grateful for your support and professionalism." },
  ];

  return (
      <Layout>
        <Helmet>
          <title>Event Nora | Wedding Planning, Digital Invitations & Corporate Events</title>
          <meta name="description" content="Event Nora offers expert wedding planning, digital invitations, birthday celebrations, and corporate event services to turn your moments into memories." />
          <meta name="keywords" content="Event Nora, wedding planning, digital invitations, event organizer, birthday planning, event management services, corporate events" />
          <link rel="canonical" href="https://www.eventnora.com/" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Event Nora | Wedding Planning & Event Services" />
          <meta property="og:description" content="Plan unforgettable weddings and professional events with Event Nora – your creative event partner." />
          <meta property="og:url" content="https://www.eventnora.com/" />
          <meta property="og:site_name" content="Event Nora" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Event Nora | Weddings, Events & Invitations" />
          <meta name="twitter:description" content="Creative and professional planning for weddings, birthdays, and corporate events." />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Event Nora",
            url: "https://www.eventnora.com",
            logo: {
              "@type": "ImageObject",
              url: "https://www.eventnora.com/logo.png"
            }
          })}</script>
        </Helmet>

        {/* HERO SECTION */}
        <section
            className="relative py-20 md:py-32 overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 80%, rgba(255,255,255,0) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
        >
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="container-custom relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-black text-gold text-sm font-medium rounded-full mb-6">
              Premier Event Planning
            </span>
              <h1 className="heading-1 mb-6 text-black">Event Nora | Digital Invitations & Event Planning</h1>
              <p className="paragraph mb-8 text-black text-2xl">
                We transform your vision into reality with meticulous planning, creative design, and flawless execution.
              </p>
              <p className="paragraph mb-8 text-black text-xl">
                At <strong>Event Nora</strong>, we specialize in full-service wedding planning and creative event design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="gold-button text-xl">Get in Touch</Link>
                <Link to="/services" className="flex items-center justify-center gap-2 px-6 py-2.5 text-black hover:text-gold transition-colors duration-300 text-xl">
                  Our Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section bg-white">
          <div className="container-custom text-center">
            <span className="text-gold font-medium">Why Choose Us</span>
            <h2 className="heading-2 text-black mt-2 mb-4">The Golden Standard in Event Planning</h2>
            <p className="paragraph opacity-80 mb-12">
              We bring expertise, creativity, and precision to every event, ensuring a seamless experience from concept to execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                icon: <Star className="w-10 h-10 text-gold" />,
                title: 'Premium Service',
                description: 'Exceptional attention to detail and personalized care for every client and event.',
              }, {
                icon: <CheckCircle className="w-10 h-10 text-gold" />,
                title: 'Expert Planning',
                description: 'Professional event coordinators with years of experience in various event types.',
              }, {
                icon: <Calendar className="w-10 h-10 text-gold" />,
                title: 'Timely Execution',
                description: 'Precise scheduling and coordination to ensure your event runs flawlessly.',
              }].map((item, idx) => (
                  <div key={idx} className="p-8 border border-gold/10 shadow-sm rounded-lg">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                    <p className="text-textGray">{item.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section className="section bg-[#fdfdfd]">
          <div className="container-custom text-center">
            <h2 className="heading-2 text-black mt-2 mb-4">About Event Nora</h2>
            <p className="paragraph opacity-80 max-w-4xl mx-auto">
              Event Nora is a global event planning and design company offering full-service event management
              for weddings, birthdays, corporate functions, and special celebrations. Our creative team transforms
              visions into stunning realities, delivering bespoke experiences with elegance and precision.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section bg-[#fafafa]">
          <div className="container-custom text-center">
            <span className="text-gold font-medium">Featured Services</span>
            <h2 className="heading-2 text-black mt-2 mb-8">What We’re Known For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  icon: <HeartHandshake className="w-10 h-10 text-gold mb-3" />,
                  title: 'Engagement & Wedding',
                  link: 'engagement-wedding-organization',
                  description: 'From intimate engagements to grand weddings, we create timeless celebrations.',
                },
                {
                  icon: <Building2 className="w-10 h-10 text-gold mb-3" />,
                  title: 'Corporate Events',
                  link: 'corporate-events',
                  description: 'Professional planning for product launches, galas, and business gatherings.',
                },
                {
                  icon: <Cake className="w-10 h-10 text-gold mb-3" />,
                  title: 'Birthday Celebrations',
                  link: 'birthday-special-day',
                  description: 'Unique birthday concepts and designs tailored for every age and style.',
                },
              ].map((service, i) => (
                  <Link
                      key={i}
                      to={`/services/${service.link}`}
                      className="p-6 border border-gold/10 rounded-lg shadow-sm bg-white hover:shadow-md transition"
                  >
                    {service.icon}
                    <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                    <p className="text-sm text-textGray">{service.description}</p>
                  </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section bg-white overflow-hidden">
          <div className="container-custom text-center relative">
            <h2 className="heading-2 text-black mb-6">What Our Clients Say</h2>

            {/* Yorumlar kaydırılabilir alan */}
            <div
                ref={sliderRef}
                className="flex gap-4 overflow-x-auto scroll-smooth px-4 touch-pan-x snap-x snap-mandatory scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory' }}
            >
              {googleReviews.map((review, index) => (
                  <div
                      key={index}
                      className="min-w-[270px] sm:min-w-[300px] max-w-[90%] sm:max-w-sm bg-[#f9f9f9] p-5 rounded shadow text-left flex-shrink-0 snap-start"
                  >
                    <p className="italic mb-2">"{review.comment}"</p>
                    <p className="font-semibold text-black">– {review.name}</p>
                    <div className="flex text-gold mt-2">
                      {Array(5).fill(0).map((_, i) => (
                          <Star key={i} size={16} />
                      ))}
                    </div>
                  </div>
              ))}
            </div>

            {/* Oklar — hem mobil hem masaüstü için yorumların altında ortalanmış */}
            <div className="flex justify-center gap-6 mt-6">
              <button
                  onClick={() => scrollSlider('left')}
                  className="bg-gold p-3 rounded-full shadow hover:bg-gold-dark transition"
                  aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                  onClick={() => scrollSlider('right')}
                  className="bg-gold p-3 rounded-full shadow hover:bg-gold-dark transition"
                  aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>


        {/* SCROLL TO TOP */}
        {showScrollTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-24 right-6 sm:right-5 bg-gold/60 hover:bg-gold transition-all duration-300 p-3 sm:p-4 rounded-full shadow-xl z-50"
                aria-label="Scroll to top"
            >
              <ChevronUp className="text-black w-7 h-7" /> {/* eşit boyutlu */}
            </button>
        )}




      </Layout>
  );
};

export default IndexEn;
