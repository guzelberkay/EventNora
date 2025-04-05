export interface ServiceItem {
    nameEn: string;
    nameTr: string;
    image: string;
    descriptionEn: string;
    descriptionTr: string;
    slug: string;
  }
  
  const servicesItems: ServiceItem[] = [
    { 
      nameEn: 'Engagement and Wedding Organization', 
      nameTr: 'Nişan ve Düğün Organizasyonu',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
      descriptionEn: 'Complete planning and coordination for your perfect wedding day.',
      descriptionTr: 'Mükemmel düğün gününüz için tam planlama ve koordinasyon.',
      slug: 'engagement-wedding-organization'
    },
    // ... diğer servisler
  ];
  
  export default servicesItems;