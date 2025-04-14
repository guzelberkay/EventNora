import React, { useEffect } from 'react';
import Blog from '../blog'; // İngilizce içeriği gösteren bileşen
import { useLanguage } from '@/contexts/LanguageContext';

const BlogTr = () => {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage('tr');
        window.scrollTo(0, 0);
    }, []);

    return <Blog />;
};

export default BlogTr;
