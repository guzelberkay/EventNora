import React, { useEffect } from 'react';
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
} from 'lucide-react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import backgroundImage from '../images/a1.png';

const IndexEn = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = 'Event Planning & Organization | Event Nora';
  const pageDescription = 'We design unforgettable events through creativity, strategy, and flawless execution.';
  const canonicalUrl = 'https://www.eventnora.com/';

  return (
      <Layout>
        <Helmet>
          <title>Event Nora | Wedding Planning, Digital Invitations & Corporate Events</title>
          <meta name="description" content="Event Nora offers expert wedding planning, digital invitations, birthday celebrations, and corporate event services to turn your moments into memories." />
          <meta name="keywords" content="Event Nora, eventnora, wedding planning, event organization, digital invitations, corporate events, birthday planning, event management" />
          <link rel="canonical" href="https://www.eventnora.com/" />

          {/* SEO: Botlara açıkça tarama izni */}
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Event Nora | Wedding Planning & Event Services" />
          <meta property="og:description" content="Plan unforgettable weddings and professional events with Event Nora – your creative event partner." />
          <meta property="og:url" content="https://www.eventnora.com/" />
          <meta property="og:site_name" content="Event Nora" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Event Nora | Weddings, Events & Invitations" />
          <meta name="twitter:description" content="Creative and professional planning for weddings, birthdays, and corporate events." />

          {/* Schema - WebSite */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Event Nora",
              url: "https://www.eventnora.com",
            })}
          </script>

          {/* Schema - Organization */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Event Nora",
              url: "https://www.eventnora.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.eventnora.com/logo.png",
              },
            })}
          </script>
        </Helmet>



        {/* Hero */}
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
              <h1 className="heading-1 mb-6 text-black">
                Event Nora | Digital Invitations & Event Planning
              </h1>
              <p className="paragraph mb-8 text-black text-2xl">
                We transform your vision into reality with meticulous planning, creative design, and flawless execution
                for all types of events.
              </p>
              <p className="paragraph mb-8 text-black text-xl">
                At <strong>Event Nora</strong>, we specialize in full-service wedding planning and creative event
                design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/contact`} className="gold-button text-xl">
                  Get in Touch
                </Link>
                <Link
                    to={`/services`}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 text-black hover:text-gold transition-colors duration-300 text-xl"
                >
                  Our Services <ArrowRight size={16}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-white">
          <div className="container-custom text-center">
            <span className="text-gold font-medium">Why Choose Us</span>
            <h2 className="heading-2 text-black mt-2 mb-4">The Golden Standard in Event Planning</h2>
            <p className="paragraph opacity-80 mb-12">
              We bring expertise, creativity, and precision to every event, ensuring a seamless experience from concept to execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-10 h-10 text-gold" />,
                  title: 'Premium Service',
                  description: 'Exceptional attention to detail and personalized care for every client and event.',
                },
                {
                  icon: <CheckCircle className="w-10 h-10 text-gold" />,
                  title: 'Expert Planning',
                  description: 'Professional event coordinators with years of experience in various event types.',
                },
                {
                  icon: <Calendar className="w-10 h-10 text-gold" />,
                  title: 'Timely Execution',
                  description: 'Precise scheduling and coordination to ensure your event runs flawlessly.',
                },
              ].map((feature, index) => (
                  <div key={index} className="p-8 border border-gold/10 shadow-sm rounded-lg">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                    <p className="text-textGray">{feature.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
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
                      to={`/services/${service.link}`} // Updated link
                      className="p-6 border border-gold/10 rounded-lg shadow-sm bg-white hover:shadow-md transition"
                  >
                    {service.icon}
                    <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                    <p className="text-sm text-textGray">{service.description}</p>
                  </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link
                  to="/services"
                  className="inline-block px-6 py-3 bg-gold text-black rounded font-medium hover:bg-gold-dark transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/95 z-0" />
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your <span className="text-gold">Memorable</span> Event?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today to discuss your event needs and let us bring your vision to life.
            </p>
            <Link
                to={`/contact`} // Updated link
                className="inline-block bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </section>
      </Layout>
  );
};

export default IndexEn;
