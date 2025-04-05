import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (en: string, tr: string) => string;
  toggleLanguage: () => void; // Yeni eklenen fonksiyon
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr'); // Varsayılan dil artık 'tr'

  // Simple translation function that returns text based on current language
  const t = (en: string, tr: string) => language === 'en' ? en : tr;

  // Yeni eklenen dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};