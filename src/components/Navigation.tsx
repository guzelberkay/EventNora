import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import logo from '../images/eventnorasaydam.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const { language } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setMobileServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  return (
      <header className={cn('fixed w-full top-0 z-50 transition-all duration-300', isScrolled ? 'bg-black shadow-lg py-3' : 'bg-black py-5')}>
        <div className="container-custom flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="EventNora Logo" className="h-24 w-auto" />
          </Link>

          {/* Desktop Menü */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => !item.dropdown && (
                <Link key={item.path} to={item.path} className={cn('nav-link', location.pathname === item.path && 'after:w-full font-medium')}>
                  {language === 'en' ? item.nameEn : item.nameTr}
                </Link>
            ))}
          </nav>

          {/* Mobil Menü Butonu */}
          <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(prev => !prev)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobil Menü */}
        {mobileMenuOpen && (
            <div ref={mobileMenuRef} className="md:hidden bg-black absolute top-full left-0 w-full border-t border-gold/20 animate-slideIn">
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map(item => item.dropdown ? (
                      <div key={item.path}>
                        <button className="flex items-center justify-between w-full text-gold" onClick={() => setMobileServicesDropdownOpen(prev => !prev)}>
                          {language === 'en' ? item.nameEn : item.nameTr}
                          {mobileServicesDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        {mobileServicesDropdownOpen && (
                            <div className="mt-2 pl-2 max-h-60 overflow-y-auto border-l border-gold/20">
                              {servicesItems.map(service => (
                                  <Link key={service.slug} to={`/services/${service.slug}`} className="block px-3 py-2 text-gold hover:bg-gold/10 rounded transition">
                                    {language === 'en' ? service.nameEn : service.nameTr}
                                  </Link>
                              ))}
                            </div>
                        )}
                      </div>
                  ) : (
                      <Link key={item.path} to={item.path} className="text-gold">
                        {language === 'en' ? item.nameEn : item.nameTr}
                      </Link>
                  ))}
                </nav>
              </div>
            </div>
        )}
      </header>
  );
};

export default Navigation;
