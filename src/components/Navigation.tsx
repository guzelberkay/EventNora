import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Globe, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

import logo from '../images/eventnorasaydam.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const langPrefix = location.pathname.startsWith('/tr') ? 'tr' : 'en';
    setLanguage(langPrefix);
  }, [location.pathname, setLanguage]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);


  const servicesItems = [
    { nameEn: 'Engagement and Wedding Organization', nameTr: 'Nişan ve Düğün Organizasyonu', slugEn: 'engagement-wedding-organization', slugTr: 'nisan-dugun-organizasyonu' },
    { nameEn: 'Corporate Events', nameTr: 'Kurumsal Etkinlikler', slugEn: 'corporate-events', slugTr: 'kurumsal-etkinlikler' },
    { nameEn: 'Birthday and Special Day Organizations', nameTr: 'Doğum Günü ve Özel Gün Organizasyonları', slugEn: 'birthday-special-day', slugTr: 'dogum-gunu-ozel-gun' },
    { nameEn: 'Festival and Event Organization', nameTr: 'Festival ve Etkinlik Organizasyonu', slugEn: 'festival-event', slugTr: 'festival-etkinlik-organizasyonu' },
    { nameEn: 'Congress and Fair Organizations', nameTr: 'Kongre ve Fuar Organizasyonları', slugEn: 'congress-fair', slugTr: 'kongre-fuar-organizasyonu' },
    { nameEn: 'Personal Event Planning', nameTr: 'Kişisel Etkinlik Planlaması', slugEn: 'personal-event', slugTr: 'kisisel-etkinlik-planlamasi' },
    { nameEn: 'Social Responsibility Projects', nameTr: 'Sosyal Sorumluluk Projeleri', slugEn: 'social-responsibility', slugTr: 'sosyal-sorumluluk-projeleri' },
    { nameEn: 'Creative Designs and Decoration Services', nameTr: 'Yaratıcı Tasarımlar ve Süsleme Hizmetleri', slugEn: 'creative-designs', slugTr: 'yaratici-tasarim-susleme' },
    { nameEn: 'Technical and Logistics Support', nameTr: 'Teknik ve Lojistik Destek', slugEn: 'technical-support', slugTr: 'teknik-lojistik-destek' },
    { nameEn: 'Consultancy Services', nameTr: 'Danışmanlık Hizmetleri', slugEn: 'consultancy', slugTr: 'danismanlik-hizmetleri' },
  ];

  const navItems = [
    { nameEn: 'Home', nameTr: 'Ana Sayfa', pathEn: '/', pathTr: '/tr' },
    { nameEn: 'About Us', nameTr: 'Hakkımızda', pathEn: '/about', pathTr: '/tr/hakkimizda' },
    { nameEn: 'Services', nameTr: 'Hizmetler', pathEn: '/services', pathTr: '/tr/hizmetler', dropdown: true },
    { nameEn: 'Blog', nameTr: 'Blog', pathEn: '/blog', pathTr: '/tr/blog' },
    { nameEn: 'Contact', nameTr: 'İletişim', pathEn: '/contact', pathTr: '/tr/iletisim' },
    { nameEn: 'FAQ', nameTr: 'SSS', pathEn: '/faq', pathTr: '/tr/sss' },
  ];

  const handleLanguageChange = (lang: 'en' | 'tr') => {
    setLanguage(lang);
    toast({
      title: lang === 'en' ? 'Language Changed' : 'Dil Değiştirildi',
      description: lang === 'en' ? 'English is now active' : 'Türkçe şimdi aktif',
    });

    const current = location.pathname.replace(/^\/(en|tr)/, '') || '/';
    const isServicePage = location.pathname.includes('/services') || location.pathname.includes('/hizmetler');
    const slug = current.split('/').pop();

    const matchedService = servicesItems.find(
        item => item.slugEn === slug || item.slugTr === slug
    );

    if (isServicePage && matchedService) {
      const newSlug = lang === 'en' ? matchedService.slugEn : matchedService.slugTr;
      const prefix = lang === 'en' ? '/services' : '/tr/hizmetler';
      navigate(`${prefix}/${newSlug}`);
      return;
    }

    const matchedNav = navItems.find(
        item => item.pathEn === location.pathname || item.pathTr === location.pathname
    );

    if (matchedNav) {
      navigate(lang === 'en' ? matchedNav.pathEn : matchedNav.pathTr);
    } else {
      navigate(lang === 'en' ? current : `/tr${current}`);
    }
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(prev => !prev);
  };

  return (
      <header className={cn('fixed w-full top-0 z-50 transition-all duration-300', isScrolled ? 'bg-black shadow-lg py-3' : 'bg-black py-5')}>
        <div className="container-custom flex items-center justify-between">
          <Link to={language === 'tr' ? '/tr' : '/'} className="flex items-center">
            <img src={logo} alt="Event Nora Logo" className="h-24 w-auto" />
          </Link>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <div key={item.pathEn} className="relative group">
                  {item.dropdown ? (
                      <div className="flex items-center gap-1 cursor-pointer" onClick={toggleServicesDropdown}>
                  <span className={cn('nav-link', location.pathname.includes('/services') && 'after:w-full font-medium')}>
                    {language === 'en' ? item.nameEn : item.nameTr}
                  </span>
                        {servicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                  ) : (
                      <Link
                          to={language === 'en' ? item.pathEn : item.pathTr}
                          className={cn('nav-link', location.pathname === (language === 'en' ? item.pathEn : item.pathTr) && 'after:w-full font-medium')}
                      >
                        {language === 'en' ? item.nameEn : item.nameTr}
                      </Link>
                  )}

                  {item.dropdown && servicesDropdownOpen && (
                      <div
                          ref={dropdownRef}
                          className="absolute left-0 mt-2 w-64 bg-black border border-gold/20 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto scrollbar-gold"
                      >

                      <div className="py-2">
                          <Link to={language === 'en' ? '/services' : '/tr/hizmetler'}
                                className="block px-4 py-2 text-gold hover:bg-gold/10">
                            {language === 'en' ? 'All Services' : 'Tüm Hizmetler'}
                          </Link>
                          {servicesItems.map((service, index) => (
                              <Link
                                  key={index}
                                  to={language === 'en' ? `/services/${service.slugEn}` : `/tr/hizmetler/${service.slugTr}`}
                                  className="block px-4 py-2 text-gold hover:bg-gold/10"
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

            {/* Masaüstü Dil Seçici */}
            <div className="flex items-center gap-3">
              {['en', 'tr'].map((lang) => (
                  <button
                      key={lang}
                      className={cn('language-selector flex items-center gap-1', language === lang && 'text-gold font-semibold')}
                      onClick={() => handleLanguageChange(lang as 'en' | 'tr')}
                  >
                    <Globe size={16} />
                    <span>{lang.toUpperCase()}</span>
                  </button>
              ))}
            </div>
          </nav>

          {/* Mobil Menü */}
          <div className="md:hidden flex items-center text-gold w-full justify-end gap-3">
            {['en', 'tr'].map((lang) => (
                <button
                    key={lang}
                    className={cn('flex items-center gap-1 text-sm', language === lang && 'text-gold font-semibold')}
                    onClick={() => handleLanguageChange(lang as 'en' | 'tr')}
                >
                  <Globe size={14} />
                  <span>{lang.toUpperCase()}</span>
                </button>
            ))}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobil Navigation */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-black absolute top-full left-0 w-full border-t border-gold/20 transition-all duration-300 overflow-hidden">
              <div className="container-custom py-4">
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                      <div key={item.pathEn}>
                        {item.dropdown ? (
                            <>
                              <div className="flex items-center justify-between text-gold py-2 cursor-pointer" onClick={toggleServicesDropdown}>
                                <span>{language === 'en' ? item.nameEn : item.nameTr}</span>
                                {servicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </div>
                              {servicesDropdownOpen && (
                                  <div className="pl-4 mt-2 space-y-2 border-l border-gold/20 max-h-96 overflow-y-auto">
                                    <Link to={language === 'en' ? '/services' : '/tr/hizmetler'} className="block py-2 text-gold/80 hover:text-gold">
                                      {language === 'en' ? 'All Services' : 'Tüm Hizmetler'}
                                    </Link>
                                    {servicesItems.map((service, index) => (
                                        <Link
                                            key={index}
                                            to={language === 'en' ? `/services/${service.slugEn}` : `/tr/hizmetler/${service.slugTr}`}
                                            className="block py-2 text-gold/80 hover:text-gold"
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setServicesDropdownOpen(false);
                                            }}
                                        >
                                          {language === 'en' ? service.nameEn : service.nameTr}
                                        </Link>
                                    ))}
                                  </div>
                              )}
                            </>
                        ) : (
                            <Link
                                to={language === 'en' ? item.pathEn : item.pathTr}
                                className="text-gold hover:text-gold-light py-2 block"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                              {language === 'en' ? item.nameEn : item.nameTr}
                            </Link>
                        )}
                      </div>
                  ))}
                </nav>
              </div>
            </div>
        )}
      </header>
  );
};

export default Navigation;
