import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type SeasonPageProps = {
  params: Promise<{ year: string }>;
};

const seasonYears = ['2025', '2024'];

export const dynamicParams = false;

export function generateStaticParams() {
  return seasonYears.map(year => ({ year }));
}

export async function generateMetadata({ params }: SeasonPageProps): Promise<Metadata> {
  const { year } = await params;
  return { title: `עונת ${year} | קינטסוגי סטייל`, robots: { index: false } };
}

export default async function SeasonPage({ params }: SeasonPageProps) {
  const { year } = await params;
  if (!seasonYears.includes(year)) notFound();

  return (
    <main className="section season-page">
      <p className="eyebrow">קינטסוגי סטייל</p>
      <h1>עונת {year}</h1>
      {year === '2025' && (
        <a className="season-video-link" href="https://www.facebook.com/reel/4113389705616202" target="_blank" rel="noopener noreferrer" aria-label="רגעים מעונת 2025 — לצפייה ב־Facebook, נפתח בלשונית חדשה">
          <span className="season-video-play" aria-hidden="true">▶</span>
          <span className="season-video-copy"><strong>רגעים מעונת 2025</strong><span>לצפייה בסרטון ב־<bdi dir="ltr" lang="en">Facebook</bdi></span><small>נפתח בלשונית חדשה</small></span>
        </a>
      )}
      <p>עמוד זה נמצא בבנייה.</p>
      <a className="underline-link" href="/#past-seasons">
        חזרה לעונות קודמות <span aria-hidden="true">←</span>
      </a>
    </main>
  );
}
