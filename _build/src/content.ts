// Editable site content. Images are relative to public/. Replace paths and copy here.
const base = import.meta.env.BASE_URL;
export const content = {
  name: 'קינטסוגי סטייל',
  tagline: 'אופנה. יצירה. חיים.',
  heroTitle: 'קינטסוגי סטייל',
  heroDescription: [
    'בין ארון הבגדים לארון הנפש.',
    'לפעמים החיים מורידים אותנו מהמסלול.\nאני מזמינה נשים לעלות עליו מחדש.',
    'לא כדי להציג בגדים.\nאלא כדי להפסיק להסתיר את עצמן.',
  ],
  founderName: 'בתאל גרין',
  founderImage: base + 'images/batel-portrait-nov19.jpg', // Portrait supplied by the owner.
  videoUrl: base + 'video/tatzugat-hanefesh-2026.mp4',
  videoPoster: base + 'images/film-poster.jpg',
  contactEmail: 'batel@batelgreen.co.il',
  contactWhatsApp: '972555565655', // International number, digits only.
  donationUrl: '',
  artworks: [
    {src:base + 'images/artwork-1.jpg',title:'יצירה בגוני כחול',category:'יצירה'},
    {src:base + 'images/artwork-2.jpg',title:'יצירה בגוני אדום וזהב',category:'יצירה'},
    {src:base + 'images/artwork-3.jpg',title:'יצירה בגוני ורוד ואדום',category:'יצירה'},
  ],
  supportingOrganizations: [{"name": "רשת מרכזים קהילתיים מרכז־צפון נתניה", "logo": "/images/supporters/community-north.png", "website": "https://www.cnnc.org.il/index.php"}, {"name": "החברה למתנ״סים נתניה", "logo": "/images/supporters/community-centers.png", "website": "https://www.matnasim.org.il/"}, {"name": "מרכז קהילתי גלי ים", "logo": "/images/supporters/galei-yam.png", "website": "https://www.cnnc.org.il/page.php?bc=AC1&id=18&m=552&type=matClass"}, {"name": "חברה וקהילה", "logo": "", "website": ""}, {"name": "משרד הבריאות", "logo": "/images/supporters/health-ministry.png", "website": "https://www.gov.il/he/departments/ministry_of_health"}, {"name": "תוכנית עמיתים לבוגרים", "logo": "/images/supporters/amitim.png", "website": "https://www.amitim.org.il/bogrimcopy"}],
  projectSponsors: [{"name": "חני קליין", "description": "עיצוב אופנה", "logo": "/images/supporters/hanny-klein.png", "temporaryLogo": false, "website": "https://www.hannyklein.co.il/"}, {"name": "סטודיו טולה", "description": "עיצוב אופנה", "logo": "/images/supporters/tula.png", "temporaryLogo": false, "website": "https://tula-tula.com/"}, {"name": "סטודיו מונה ליזה", "description": "עיצוב אופנה", "logo": "/images/supporters/mona-liza.png", "temporaryLogo": false, "website": "https://monalizafashion.co.il/"}, {"name": "מרים יוסף", "description": "סטיילינג", "logo": "", "temporaryLogo": false, "website": ""}, {"name": "נועה גביש", "description": "איפור", "logo": "/images/supporters/noa-gavish.png", "temporaryLogo": false, "website": ""}, {"name": "מאור ישראל", "description": "איפור", "logo": "", "temporaryLogo": false, "website": ""}, {"name": "רינת אבישור", "description": "איפור", "logo": "", "temporaryLogo": false, "website": ""}, {"name": "ברנדה בן חיון", "description": "עיצוב שיער", "logo": "", "temporaryLogo": false, "website": ""}, {"name": "שירן שמש", "description": "עיצוב שיער", "logo": "/images/supporters/shiran-shemesh.png", "temporaryLogo": false, "website": "https://www.shiranshemesh.net/"}, {"name": "וידאו קומפורט", "description": "", "logo": "/images/supporters/video-comfort-primary.jpg", "temporaryLogo": false, "website": ""}],
  sponsors: [] as { name: string; description: string }[],
  gallery: [
    {src:base + "images/group.jpg", title:"יחד, על אותה במה", category:"קהילה"},
    {src:base + "images/runway-2026-green.jpg", title:"לצעוד בדרך שלך", category:"על המסלול"},
    {src:base + "images/runway-2026-rose.jpg", title:"רגע של נוכחות", category:"על המסלול"},
    {src:base + "images/runway-2026-red.jpg", title:"באור הזרקורים", category:"על המסלול"},
    {src:base + "images/runway-2026-blue.jpg", title:"לתת לעצמך מקום", category:"על המסלול"},
    {src:base + "images/runway-2026-rose-back.jpg", title:"לקבל את מחיאות הכפיים", category:"על המסלול"},
    {src:base + "images/runway-2026-white.jpg", title:"לצעוד בביטחון", category:"על המסלול"},
    {src:base + "images/meeting.jpg", title:"המפגש הוא חלק מהדרך", category:"מאחורי הקלעים"},
    {src:base + "images/community.jpg", title:"מקשיבות, משתפות, יוצרות", category:"מאחורי הקלעים"},
  ],
};
