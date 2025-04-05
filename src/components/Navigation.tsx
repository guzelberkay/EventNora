import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Globe, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import logo from '../images/eventnorasaydam.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // ✅ Mobil menü açıkken dış tıklamayı algıla
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
          mobileMenuOpen &&
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleLanguageChange = (lang: 'en' | 'tr') => {
    setLanguage(lang);
    toast({
      title: lang === 'en' ? 'Language Changed' : 'Dil Değiştirildi',
      description: lang === 'en' ? 'English is now active' : 'Türkçe şimdi aktif',
      duration: 2000,
    });
  };

  const servicesItems = [
    { nameEn: 'Engagement and Wedding Organization', nameTr: 'Nişan ve Düğün Organizasyonu', slug: 'engagement-wedding-organization' },
    { nameEn: 'Corporate Events', nameTr: 'Kurumsal Etkinlikler', slug: 'corporate-events' },
    { nameEn: 'Birthday and Special Day Organizations', nameTr: 'Doğum Günü ve Özel Gün Organizasyonları', slug: 'birthday-special-day' },
    { nameEn: 'Festival and Event Organization', nameTr: 'Festival ve Etkinlik Organizasyonu', slug: 'festival-event' },
    { nameEn: 'Congress and Fair Organizations', nameTr: 'Kongre ve Fuar Organizasyonları', slug: 'congress-fair' },
    { nameEn: 'Personal Event Planning', nameTr: 'Kişisel Etkinlik Planlaması', slug: 'personal-event' },
    { nameEn: 'Social Responsibility Projects', nameTr: 'Sosyal Sorumluluk Projeleri', slug: 'social-responsibility' },
    { nameEn: 'Creative Designs and Decoration Services', nameTr: 'Yaratıcı Tasarımlar ve Süsleme Hizmetleri', slug: 'creative-designs' },
    { nameEn: 'Technical and Logistics Support', nameTr: 'Teknik ve Lojistik Destek', slug: 'technical-support' },
    { nameEn: 'Consultancy Services', nameTr: 'Danışmanlık Hizmetleri', slug: 'consultancy' },
    { nameEn: 'All Services', nameTr: 'Tüm Hizmetler', slug: '' },
  ];

  const navItems = [
    { nameEn: 'Home', nameTr: 'Ana Sayfa', path: '/' },
    { nameEn: 'About Us', nameTr: 'Hakkımızda', path: '/about' },
    { nameEn: 'Services', nameTr: 'Hizmetler', path: '/services', dropdown: true },
    { nameEn: 'Contact', nameTr: 'İletişim', path: '/contact' },
    { nameEn: 'FAQ', nameTr: 'SSS', path: '/faq' },
  ];

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
      <header className={cn(
          'fixed w-full top-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-black shadow-lg py-3' : 'bg-black py-5'
      )}>
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="EventNora Logo" className="h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.dropdown ? (
                      <div className="flex items-center gap-1 cursor-pointer" onClick={toggleServicesDropdown}>
                  <span className={cn(
                      'nav-link',
                      (location.pathname === item.path || location.pathname.startsWith('/services')) && 'after:w-full font-medium'
                  )}>
                    {language === 'en' ? item.nameEn : item.nameTr}
                  </span>
                        {servicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                  ) : (
                      <Link to={item.path} className={cn(
                          'nav-link',
                          location.pathname === item.path && 'after:w-full font-medium'
                      )}>
                        {language === 'en' ? item.nameEn : item.nameTr}
                      </Link>
                  )}

                  {item.dropdown && servicesDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-64 bg-black border border-gold/20 rounded-lg shadow-lg z-50">
                        <div className="py-2">
                          {servicesItems.map((service, index) => (
                              <Link
                                  key={index}
                                  to={`/services/${service.slug}`}
                                  className="block px-4 py-2 text-gold hover:bg-gold/10 transition-colors"
                                  onClick={() => setServicesDropdownOpen(false)}
                              >
                                {language === 'en' ? service.nameEn : service.nameTr}
                              </Link>
                          ))}
                        </div>
                      </div>
                  )}
                </div>
            ))}

            <div className="flex items-center gap-4">
              <button className={cn("language-selector", language === 'en' && "text-gold font-medium")} onClick={() => handleLanguageChange('en')}>
                <Globe size={16} />
                <span>EN</span>
              </button>
              <button className={cn("language-selector", language === 'tr' && "text-gold font-medium")} onClick={() => handleLanguageChange('tr')}>
                <Globe size={16} />
                <span>TR</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
            <div
                ref={mobileMenuRef}
                className="md:hidden bg-black absolute top-full left-0 w-full border-t border-gold/20 animate-slideIn"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                      <div key={item.path}>
                        {item.dropdown ? (
                            <div>
                              <div
                                  className="flex items-center justify-between text-gold hover:text-gold-light transition-colors py-2 cursor-pointer"
                                  onClick={toggleServicesDropdown}
                              >
                        <span className={cn(location.pathname === item.path && 'font-medium')}>
                          {language === 'en' ? item.nameEn : item.nameTr}
                        </span>
                                {servicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </div>

                              {servicesDropdownOpen && (
                                  <div className="pl-4 mt-2 space-y-2 border-l border-gold/20">
                                    {servicesItems.map((service, index) => (
                                        <Link
                                            key={index}
                                            to={`/services/${service.slug}`}
                                            className="block py-2 text-gold/80 hover:text-gold transition-colors"
                                            onClick={() => {
                                              setServicesDropdownOpen(false);
                                              setMobileMenuOpen(false);
                                            }}
                                        >
                                          {language === 'en' ? service.nameEn : service.nameTr}
                                        </Link>
                                    ))}
                                  </div>
                              )}
                            </div>
                        ) : (
                            <Link
                                to={item.path}
                                className={cn(
                                    'text-gold hover:text-gold-light transition-colors py-2 block',
                                    location.pathname === item.path && 'font-medium'
                                )}
                            >
                              {language === 'en' ? item.nameEn : item.nameTr}
                            </Link>
                        )}
                      </div>
                  ))}
                  <div className="flex gap-4 py-2">
                    <button className={cn("language-selector", language === 'en' && "text-gold font-medium")} onClick={() => handleLanguageChange('en')}>
                      <Globe size={16} />
                      <span>English</span>
                    </button>
                    <button className={cn("language-selector", language === 'tr' && "text-gold font-medium")} onClick={() => handleLanguageChange('tr')}>
                      <Globe size={16} />
                      <span>Türkçe</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
        )}
      </header>
  );
};

export default Navigation;
