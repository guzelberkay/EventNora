import React, { useEffect } from 'react';
import Contact from '../Contact';
import { useLanguage } from '@/contexts/LanguageContext';

const Iletisim = () => {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage('tr');
        window.scrollTo(0, 0);
    }, []);

    return <Contact />;
};

export default Iletisim;
