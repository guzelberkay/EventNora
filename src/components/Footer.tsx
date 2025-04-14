import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaGoogle } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import logo from '../images/eventnorasaydam.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (lang: 'en' | 'tr') => {
    setLanguage(lang);
    if (lang === 'tr') {
      navigate('/tr');
    } else {
      navigate('/');
    }
  };

  const address = 'Altınşehir, Şenel Cd. No:78B, 34000 Ümraniye/İstanbul';
  const phone = '+90 532 770 12 08';
  const email = 'yesimerdogan@eventnora.com';

  return (
      <footer className="bg-black text-gold/90 pt-16 pb-8">
        <div className="container-custom">
          {/* Grid Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Logo & About */}
            <div className="space-y-4">
              <img src={logo} alt="EventNora Logo" className="h-36 w-auto" />
              <p className="text-sm text-gold/80 max-w-xs">
                {t(
                    'Creating unforgettable moments with meticulous planning and elegant execution for all your special occasions.',
                    'Tüm özel etkinlikleriniz için titiz planlama ve zarif uygulama ile unutulmaz anlar yaratıyoruz.'
                )}
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/905327701208" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gold-light">
                  <MessageCircle size={20} />
                </a>
                <a href="https://www.instagram.com/eventnora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold-light">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/eventnora/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold-light">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://g.co/kgs/MEC9u4e" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="hover:text-gold-light">
                  <FaGoogle size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('Quick Links', 'Hızlı Bağlantılar')}</h4>
              <ul className="space-y-2 text-sm text-gold/80">
                <li><Link to={language === 'tr' ? '/tr' : '/'} className="hover:text-gold">🏠 {t('Home', 'Ana Sayfa')}</Link></li>
                <li><Link to={language === 'tr' ? '/tr/hakkimizda' : '/about'} className="hover:text-gold">👥 {t('About Us', 'Hakkımızda')}</Link></li>
                <li><Link to={language === 'tr' ? '/tr/hizmetler' : '/services'} className="hover:text-gold">🛠️ {t('Services', 'Hizmetler')}</Link></li>
                <li><Link to={language === 'tr' ? '/tr/iletisim' : '/contact'} className="hover:text-gold">📞 {t('Contact', 'İletişim')}</Link></li>
                <li><Link to={language === 'tr' ? '/tr/sss' : '/faq'} className="hover:text-gold">❓ {t('FAQ', 'SSS')}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('Contact Info', 'İletişim Bilgileri')}</h4>
              <div className="space-y-3 text-sm text-gold/80">
                <div className="flex items-start space-x-3 cursor-pointer hover:underline" onClick={() => window.open('https://maps.app.goo.gl/vfYVa31mdXVF4wLSA', '_blank')}>
                  <MapPin size={20} className="text-gold mt-0.5" />
                  <span>{address}</span>
                </div>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 hover:text-gold">
                  <Phone size={18} className="text-gold" />
                  <span>{phone}</span>
                </a>
                <a href={`mailto:${email}`} className="flex items-center space-x-3 hover:text-gold">
                  <Mail size={18} className="text-gold" />
                  <span>{email}</span>
                </a>
              </div>
            </div>

            {/* Language Switcher */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('Language', 'Dil')}</h4>
              <div className="flex space-x-4">
                <button
                    onClick={() => handleLanguageChange('en')}
                    className={cn('hover:text-gold', language === 'en' && 'text-gold font-semibold')}
                >
                  English
                </button>
                <button
                    onClick={() => handleLanguageChange('tr')}
                    className={cn('hover:text-gold', language === 'tr' && 'text-gold font-semibold')}
                >
                  Türkçe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gold/20 pt-8 mt-8" />

          {/* Footer Bottom */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gold/70 mb-3">
              © {currentYear} EventNora. {t('All rights reserved.', 'Tüm hakları saklıdır.')}
            </p>
            <a
                href="https://www.cortexsoftdev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 group"
            >
            <span className="text-xs text-gold/60 tracking-wide uppercase font-medium group-hover:text-gold transition">
              Powered by
            </span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold group-hover:brightness-125 transition-all duration-300">
              CORTEXSOFT
            </span>
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
