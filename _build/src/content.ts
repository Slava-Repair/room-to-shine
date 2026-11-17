// Editable site content. Images are relative to public/. Replace paths and copy here.
const base = import.meta.env.BASE_URL;
export const content = {
  name: 'מקום לזרוח',
  tagline: 'אופנה. יצירה. חיים.',
  heroTitle: 'קינטסוגי סטייל',
  heroDescription: 'מיזם של אופנה, יצירה וקהילה, שמזמין נשים המתמודדות עם אתגרים נפשיים לעלות על המסלול — ולתת מקום לעצמן.',
  founderName: 'בתאל גרין',
  founderImage: base + 'images/batel.jpg', // Temporary photo selected by the owner.
  videoUrl: base + 'video/tatzugat-hanefesh-2026.mp4',
  videoPoster: base + 'images/film-poster.jpg',
  contactEmail: '',
  donationUrl: '',
  artworks: [
    {src:base + 'images/artwork-1.jpg',title:'יצירה בגוני כחול',category:'יצירה'},
    {src:base + 'images/artwork-2.jpg',title:'יצירה בגוני אדום וזהב',category:'יצירה'},
    {src:base + 'images/artwork-3.jpg',title:'יצירה בגוני ורוד ואדום',category:'יצירה'},
  ],
  sponsors: [] as { name: string; description: string }[],
  gallery: [
    {src:base + 'images/group.jpg', title:'יחד, על אותה במה', category:'קהילה'},
    {src:base + 'images/runway-rose.jpg', title:'רגע של נוכחות', category:'על המסלול'},
    {src:base + 'images/runway-green.jpg', title:'לצעוד בדרך שלך', category:'על המסלול'},
    {src:base + 'images/meeting.jpg', title:'המפגש הוא חלק מהדרך', category:'מאחורי הקלעים'},
    {src:base + 'images/runway-blue.jpg', title:'לתת לעצמך מקום', category:'על המסלול'},
    {src:base + 'images/community.jpg', title:'מקשיבות, משתפות, יוצרות', category:'מאחורי הקלעים'},
  ],
};
