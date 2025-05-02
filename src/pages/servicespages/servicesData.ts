// src/pages/servicespages/servicesData.ts

export interface ServiceItem {
    slug: string;
    nameEn: string;
    nameTr: string;
    descriptionEn: string;
    descriptionTr: string;
    image: string;
}

const servicesData: ServiceItem[] = [
    {
        slug: "engagement-wedding-organization",
        nameEn: "Engagement & Wedding Organization",
        nameTr: "Nişan & Düğün Organizasyonu",
        descriptionEn: "Turn your dream wedding into reality with EventNora’s concept design, decoration, music, catering, and photography services.",
        descriptionTr: "Hayalinizdeki düğünü gerçeğe dönüştüren konsept tasarımı, dekorasyon, müzik, catering ve fotoğrafçılık hizmetleri EventNora’da.",
        image: "/images/wedding_event.webp",
    },
    {
        slug: "corporate-events",
        nameEn: "Corporate Events",
        nameTr: "Kurumsal Etkinlikler",
        descriptionEn: "Stand out with corporate event services that reflect your brand value. Discover our end-to-end event solutions.",
        descriptionTr: "Marka değerinizi yansıtan kurumsal etkinlik hizmetleri ile fark yaratın. Uçtan uca çözümlerimizi keşfedin.",
        image: "/images/corporate_event.webp",
    },
    {
        slug: "birthday-special-day",
        nameEn: "Birthday & Special Day Events",
        nameTr: "Doğum Günü & Özel Gün Etkinlikleri",
        descriptionEn: "We make birthdays, anniversaries, and special days unforgettable with creative concepts and perfect execution.",
        descriptionTr: "Doğum günlerini, yıl dönümlerini ve özel günleri yaratıcı konseptler ve kusursuz uygulamalarla unutulmaz kılıyoruz.",
        image: "/images/birthday_event.webp",
    },
    {
        slug: "festival-event",
        nameEn: "Festival & Event Organization",
        nameTr: "Festival ve Etkinlik Organizasyonu",
        descriptionEn: "Music festivals, public events, and brand activations – we organize large-scale events with creative planning and perfect execution.",
        descriptionTr: "Müzik festivalleri, halka açık etkinlikler ve marka tanıtımları – büyük ölçekli etkinliklerinizi yaratıcı planlama ve kusursuz uygulama ile organize ediyoruz.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },
    {
        slug: "congress-fair",
        nameEn: "Congress & Fair Organization",
        nameTr: "Kongre & Fuar Organizasyonu",
        descriptionEn: "We offer expert services for congress and fair organizations, including logistics, media, and technical support.",
        descriptionTr: "Kongre ve fuar organizasyonlarında lojistikten teknik desteğe kadar profesyonel hizmet sunuyoruz.",
        image: "/images/congressfair_event.webp",
    },
    {
        slug: "personal-event",
        nameEn: "Personal Event Planning",
        nameTr: "Kişisel Etkinlik Planlaması",
        descriptionEn: "From birthdays to engagements and baby showers – we design your most special memories with elegant concepts and professional execution.",
        descriptionTr: "Doğum gününden nişana, baby shower’dan mezuniyete kadar en özel anlarınızı profesyonelce ve yaratıcı konseptlerle planlıyoruz.",
        image: "/images/personal_event.webp",
    },
    {
        slug: "social-responsibility",
        nameEn: "Social Responsibility Projects",
        nameTr: "Sosyal Sorumluluk Projeleri",
        descriptionEn: "We support social impact with responsible and sustainable project planning and event organization services.",
        descriptionTr: "Sosyal sorumluluk projelerinizi sürdürülebilir ve etkili şekilde planlıyor, organizasyon sürecinde profesyonel destek sağlıyoruz.",
        image: "/images/socialresponsiblility_event.webp",
    },
    {
        slug: "creative-designs",
        nameEn: "Creative Designs & Decoration",
        nameTr: "Yaratıcı Tasarımlar & Süsleme Hizmetleri",
        descriptionEn: "Aesthetic event spaces and custom decoration services. Transform your dream concept into a visual reality.",
        descriptionTr: "Etkinlik konseptinizi gerçeğe dönüştüren estetik süsleme ve tasarım hizmetleri. Hayalinizdeki atmosferi yaratın.",
        image: "/images/creative_event.webp",
    },
    {
        slug: "technical-support",
        nameEn: "Technical & Logistics Support",
        nameTr: "Teknik & Lojistik Destek",
        descriptionEn: "We provide professional technical infrastructure and logistics services for flawless event execution.",
        descriptionTr: "Etkinliklerinizde kusursuz bir deneyim için profesyonel teknik altyapı ve lojistik hizmetler sunuyoruz.",
        image: "/images/technical_support_event.webp",
    },
    {
        slug: "consultancy",
        nameEn: "Consultancy Services",
        nameTr: "Danışmanlık Hizmetleri",
        descriptionEn: "From strategy to implementation, we provide expert consultancy for event planning and management.",
        descriptionTr: "Etkinlik planlamasından uygulamaya ve değerlendirmeye kadar her aşamada danışmanlık hizmeti sunuyoruz.",
        image: "/images/Consultancy_event.webp",
    },
];

export default servicesData;
