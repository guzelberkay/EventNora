import React, { useEffect } from 'react';
import FAQ from '../FAQ';
import { useLanguage } from '@/contexts/LanguageContext';

const Sss = () => {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage('tr');
        window.scrollTo(0, 0);
    }, []);

    return <FAQ />;
};

export default Sss;
