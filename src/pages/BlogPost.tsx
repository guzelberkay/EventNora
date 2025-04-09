import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
    const { lang, slug } = useParams();
    const navigate = useNavigate();
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        if ((lang === 'en' || lang === 'tr') && lang !== language) {
            setLanguage(lang);
        }
    }, [lang]);

    useEffect(() => {
        if ((language === 'en' || language === 'tr') && lang !== language && slug) {
            navigate(`/blog/${language}/${slug}`, { replace: true });
        }
    }, [language]);

    const isEnglish = lang === 'en';
    const index = blogPosts.findIndex((p) => p.slug === slug);
    const post = blogPosts[index];

    if (!post) {
        return (
            <Layout>
                <div className="py-20 text-center text-gray-800">
                    <h1 className="text-2xl font-bold">Blog post not found</h1>
                </div>
            </Layout>
        );
    }

    const pageTitle = isEnglish ? post.titleEn : post.titleTr;
    const pageDescription = (isEnglish ? post.contentEn : post.contentTr).slice(0, 160);
    const content = isEnglish ? post.contentEn : post.contentTr;
    const canonicalUrl = `https://eventnora.com/blog/${lang}/${post.slug}`;
    const postDate = new Date(post.date).toISOString();
    const previousPost = blogPosts[index - 1];
    const nextPost = blogPosts[index + 1];

    return (
        <Layout>
            <Helmet>
                <title>{pageTitle} | Event Nora Blog</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />
                {/* Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={post.image} />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={post.image} />
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": canonicalUrl
                        },
                        "headline": pageTitle,
                        "description": pageDescription,
                        "image": post.image,
                        "author": {
                            "@type": "Organization",
                            "name": "Event Nora"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Event Nora",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://eventnora.com/logo.png"
                            }
                        },
                        "datePublished": postDate,
                    })}
                </script>
            </Helmet>

            <section className="py-20 px-4 max-w-4xl mx-auto">
                <img
                    src={post.image}
                    alt={`${pageTitle} - Event Nora Blog`}
                    className="w-full rounded-lg mb-8"
                    loading="lazy"
                />

                <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">{pageTitle}</h1>

                <div className="prose prose-lg text-gray-800">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>

                {/* Etiketler */}
                <div className="mt-12">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                        {isEnglish ? 'Tags:' : 'Etiketler:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, i) => (
                            <Link
                                key={i}
                                to={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                className="bg-gold/10 text-gold text-xs font-medium px-2 py-1 rounded hover:underline"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Önceki / Sonraki Yazı */}
                <div className="flex justify-between mt-16 pt-6 border-t border-gray-200 text-sm">
                    {previousPost ? (
                        <Link
                            to={`/blog/${lang}/${previousPost.slug}`}
                            className="text-gold hover:underline"
                        >
                            👈 {isEnglish ? previousPost.titleEn : previousPost.titleTr}
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextPost ? (
                        <Link
                            to={`/blog/${lang}/${nextPost.slug}`}
                            className="text-gold hover:underline text-right"
                        >
                            {isEnglish ? nextPost.titleEn : nextPost.titleTr} 👉
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default BlogPost;
