import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Globe, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import logo from '../images/eventnorasaydam.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();

  // ✅ URL'den dile göre set et
  useEffect(() => {
    if (location.pathname.startsWith('/tr')) {
      setLanguage('tr');
    } else if (location.pathname.startsWith('/en')) {
      setLanguage('en');
    }
  }, [location.pathname]);

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
    { nameEn: 'Home', nameTr: 'Ana Sayfa', pathEn: '/en', pathTr: '/tr' },
    { nameEn: 'About Us', nameTr: 'Hakkımızda', pathEn: '/en/about', pathTr: '/tr/hakkimizda' },
    { nameEn: 'Services', nameTr: 'Hizmetler', pathEn: '/en/services', pathTr: '/tr/hizmetler', dropdown: true },
    { nameEn: 'Blog', nameTr: 'Blog', pathEn: '/en/blog', pathTr: '/tr/blog' },
    { nameEn: 'Contact', nameTr: 'İletişim', pathEn: '/en/contact', pathTr: '/tr/iletisim' },
    { nameEn: 'FAQ', nameTr: 'SSS', pathEn: '/en/faq', pathTr: '/tr/sss' },
  ];

  const handleLanguageChange = (lang: 'en' | 'tr') => {
    setLanguage(lang);

    toast({
      title: lang === 'en' ? 'Language Changed' : 'Dil Değiştirildi',
      description: lang === 'en' ? 'English is now active' : 'Türkçe şimdi aktif',
      duration: 2000,
    });

    const currentPath = location.pathname;
    const cleanedPath = currentPath.replace(/^\/(en|tr)/, '') || '/';

    if (cleanedPath === '/' || cleanedPath === '') {
      navigate(lang === 'en' ? '/en' : '/tr');
      return;
    }

    if (cleanedPath.includes('/services/') || cleanedPath.includes('/hizmetler/')) {
      const slug = cleanedPath.split('/').pop() || '';
      const matchedService = servicesItems.find(item => item.slugEn === slug || item.slugTr === slug);

      if (matchedService) {
        const targetSlug = lang === 'en' ? matchedService.slugEn : matchedService.slugTr;
        const prefix = lang === 'en' ? '/en/services' : '/tr/hizmetler';
        navigate(`${prefix}/${targetSlug}`);
        return;
      }
    }

    const matchedItem = navItems.find(
        (item) => item.pathEn === currentPath || item.pathTr === currentPath
    );

    if (matchedItem) {
      navigate(lang === 'en' ? matchedItem.pathEn : matchedItem.pathTr);
    } else {
      navigate(`/${lang}${cleanedPath}`);
    }
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
      <header className={cn('fixed w-full top-0 z-50 transition-all duration-300', isScrolled ? 'bg-black shadow-lg py-3' : 'bg-black py-5')}>
        <div className="container-custom flex items-center justify-between">
          <Link to={language === 'en' ? '/en' : '/tr'} className="flex items-center">
            <img src={logo} alt="EventNora Logo" className="h-24 w-auto" />
          </Link>

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
                      <div className="absolute left-0 mt-2 w-64 bg-black border border-gold/20 rounded-lg shadow-lg z-50">
                        <div className="py-2">
                          <Link
                              to={language === 'en' ? '/en/services' : '/tr/hizmetler'}
                              className="block px-4 py-2 text-gold hover:bg-gold/10 transition-colors"
                          >
                            {language === 'en' ? 'All Services' : 'Tüm Hizmetler'}
                          </Link>
                          {servicesItems.map((service, index) => (
                              <Link
                                  key={index}
                                  to={language === 'en' ? `/en/services/${service.slugEn}` : `/tr/hizmetler/${service.slugTr}`}
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

            <div className="flex items-center gap-3">
              <button
                  className={cn('language-selector flex items-center gap-1', language === 'en' && 'text-gold font-semibold')}
                  onClick={() => handleLanguageChange('en')}
              >
                <Globe size={16} />
                <span>EN</span>
              </button>
              <button
                  className={cn('language-selector flex items-center gap-1', language === 'tr' && 'text-gold font-semibold')}
                  onClick={() => handleLanguageChange('tr')}
              >
                <Globe size={16} />
                <span>TR</span>
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-3 text-gold">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
            <div className="md:hidden bg-black absolute top-full left-0 w-full border-t border-gold/20 animate-slideIn">
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                      <div key={item.pathEn}>
                        {item.dropdown ? (
                            <>
                              <div
                                  className="flex items-center justify-between text-gold hover:text-gold-light transition-colors py-2 cursor-pointer"
                                  onClick={toggleServicesDropdown}
                              >
                                <span>{language === 'en' ? item.nameEn : item.nameTr}</span>
                                {servicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </div>
                              {servicesDropdownOpen && (
                                  <div className="pl-4 mt-2 space-y-2 border-l border-gold/20">
                                    <Link
                                        to={language === 'en' ? '/en/services' : '/tr/hizmetler'}
                                        className="block py-2 text-gold/80 hover:text-gold transition-colors"
                                    >
                                      {language === 'en' ? 'All Services' : 'Tüm Hizmetler'}
                                    </Link>
                                    {servicesItems.map((service, index) => (
                                        <Link
                                            key={index}
                                            to={language === 'en' ? `/en/services/${service.slugEn}` : `/tr/hizmetler/${service.slugTr}`}
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
                            </>
                        ) : (
                            <Link
                                to={language === 'en' ? item.pathEn : item.pathTr}
                                className="text-gold hover:text-gold-light transition-colors py-2 block"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                              {language === 'en' ? item.nameEn : item.nameTr}
                            </Link>
                        )}
                      </div>
                  ))}

                  <div className="flex gap-4 pt-4">
                    <button
                        className={cn('language-selector flex items-center gap-1', language === 'en' && 'text-gold font-semibold')}
                        onClick={() => {
                          handleLanguageChange('en');
                          setMobileMenuOpen(false);
                        }}
                    >
                      <Globe size={16} />
                      <span>English</span>
                    </button>
                    <button
                        className={cn('language-selector flex items-center gap-1', language === 'tr' && 'text-gold font-semibold')}
                        onClick={() => {
                          handleLanguageChange('tr');
                          setMobileMenuOpen(false);
                        }}
                    >
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
