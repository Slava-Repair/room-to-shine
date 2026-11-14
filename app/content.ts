// Editable site content. Images are relative to public/. Replace paths and copy here.
export const content = {
  name: 'מקום לזרוח',
  tagline: 'אופנה. יצירה. חיים.',
  heroTitle: 'לכל אישה מגיע\nמקום לזרוח.',
  heroDescription: 'מיזם של אופנה, יצירה וקהילה, שמזמין נשים המתמודדות עם אתגרים נפשיים לעלות על המסלול — ולתת מקום לעצמן.',
  founderName: 'בתאל גרין',
  founderImage: '/images/batel.jpg', // Temporary photo selected by the owner.
  videoUrl: '/video/tatzugat-hanefesh-2026.mp4',
  videoPoster: '/images/film-poster.jpg',
  contactEmail: '',
  donationUrl: '',
  artworks: [
    {src:'/images/artwork-1.jpg',title:'יצירה בגוני כחול',category:'יצירה'},
    {src:'/images/artwork-2.jpg',title:'יצירה בגוני אדום וזהב',category:'יצירה'},
    {src:'/images/artwork-3.jpg',title:'יצירה בגוני ורוד ואדום',category:'יצירה'},
  ],
  sponsors: [] as { name: string; description: string }[],
  gallery: [
    {src:'/images/group.jpg', title:'יחד, על אותה במה', category:'קהילה'},
    {src:'/images/runway-rose.jpg', title:'רגע של נוכחות', category:'על המסלול'},
    {src:'/images/runway-green.jpg', title:'לצעוד בדרך שלך', category:'על המסלול'},
    {src:'/images/meeting.jpg', title:'המפגש הוא חלק מהדרך', category:'מאחורי הקלעים'},
    {src:'/images/runway-blue.jpg', title:'לתת לעצמך מקום', category:'על המסלול'},
    {src:'/images/community.jpg', title:'מקשיבות, משתפות, יוצרות', category:'מאחורי הקלעים'},
  ],
};
