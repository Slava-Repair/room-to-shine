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
      <p>עמוד זה נמצא בבנייה.</p>
      <a className="underline-link" href="/#past-seasons">
        חזרה לעונות קודמות <span aria-hidden="true">←</span>
      </a>
    </main>
  );
}
