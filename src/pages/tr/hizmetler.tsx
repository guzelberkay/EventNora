import React, { useEffect } from 'react';
import Services from '../Services';
import { useLanguage } from '@/contexts/LanguageContext';

const Hizmetler = () => {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage('tr');
        window.scrollTo(0, 0);
    }, []);

    return <Services />;
};

export default Hizmetler;
