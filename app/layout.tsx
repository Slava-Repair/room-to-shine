import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'מקום לזרוח | אופנה, יצירה וקהילה',
 description:'מיזם האופנה של בתאל — נשים, יצירה וקהילה. לכל אישה מגיע מקום לזרוח.',
 icons:{icon:'/favicon.svg'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="he" dir="rtl"><body>{children}</body></html>}
