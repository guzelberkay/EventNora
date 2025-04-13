import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import logo from '../images/eventnorasaydam.png';
import { FaLinkedin, FaGoogle } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();

  return (
      <footer className="bg-black text-gold/90 pt-16 pb-8">
        <div className="container-custom">
          {/* Top Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Logo & About */}
            <div className="space-y-4">
              <img src={logo} alt="EventNora Logo" width={180} height={90} className="w-[180px] h-[90px]"/>
              <p className="text-sm text-gold/80 max-w-xs">
                {t(
                    'Creating unforgettable moments with meticulous planning and elegant execution for all your special occasions.',
                    'Tüm özel etkinlikleriniz için titiz planlama ve zarif uygulama ile unutulmaz anlar yaratıyoruz.'
                )}
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/905327701208" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gold-light transition-colors" title="WhatsApp">
                  <MessageCircle size={20}/>
                </a>
                <a href="https://www.instagram.com/eventnora/" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gold-light transition-colors" title="Instagram">
                  <Instagram size={20}/>
                </a>
                <a href="https://www.linkedin.com/company/eventnora/" target="_blank"
                   rel="noopener noreferrer" className="hover:text-gold-light transition-colors" title="LinkedIn">
                  <FaLinkedin size={20}/>
                </a>
                <a href="https://g.co/kgs/MEC9u4e" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gold-light transition-colors" title="Google Reviews">
                  <FaGoogle size={20}/>
                </a>
              </div>


            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('Quick Links', 'Hızlı Bağlantılar')}</h4>
              <ul className="space-y-2 text-sm text-gold/80">
                <li><Link to="/" className="hover:text-gold">🏠 {t('Home', 'Ana Sayfa')}</Link></li>
                <li><Link to="/about" className="hover:text-gold">👥 {t('About Us', 'Hakkımızda')}</Link></li>
                <li><Link to="/services" className="hover:text-gold">🛠️ {t('Services', 'Hizmetler')}</Link></li>
                <li><Link to="/contact" className="hover:text-gold">📞 {t('Contact', 'İletişim')}</Link></li>
                <li><Link to="/faq" className="hover:text-gold">❓ {t('FAQ', 'SSS')}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
            <h4 className="text-lg font-semibold mb-4">{t('Contact Info', 'İletişim Bilgileri')}</h4>
              <div className="space-y-3 text-sm text-gold/80">
                <div
                    onClick={() =>
                        window.open(
                            'https://maps.app.goo.gl/vfYVa31mdXVF4wLSA',
                            '_blank'
                        )
                    }
                    className="flex items-start space-x-3 cursor-pointer hover:underline"
                >
                  <MapPin size={20} className="text-gold mt-0.5" />
                  <span>Altınşehir, Şenel Cd. No:78B, 34000 Ümraniye/İstanbul</span>
                </div>
                <a href="tel:+905327701208" className="flex items-center space-x-3 hover:text-gold">
                  <Phone size={18} className="text-gold" />
                  <span>+90 532 770 12 08</span>
                </a>
                <a href="mailto:yesimerdogan@eventnora.com" className="flex items-center space-x-3 hover:text-gold">
                  <Mail size={18} className="text-gold" />
                  <span>yesimerdogan@eventnora.com</span>
                </a>
              </div>
            </div>

            {/* Language Switcher */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('Language', 'Dil')}</h4>
              <div className="flex space-x-4">
                <button onClick={() => setLanguage('en')} className={cn('hover:text-gold', language === 'en' && 'text-gold font-semibold')}>English</button>
                <button onClick={() => setLanguage('tr')} className={cn('hover:text-gold', language === 'tr' && 'text-gold font-semibold')}>Türkçe</button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gold/20 pt-8 mt-8" />

          {/* Bottom Section with CORTEXSOFT Centered */}
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
