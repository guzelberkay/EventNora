import React, { useEffect } from 'react';
import About from '../About';
import { useLanguage } from '@/contexts/LanguageContext';

const Hakkimizda = () => {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage('tr');
        window.scrollTo(0, 0);
    }, []);

    return <About />;
};

export default Hakkimizda;
