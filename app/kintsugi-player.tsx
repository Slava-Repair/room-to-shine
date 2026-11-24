import { createElement, Fragment, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

const songUrl = 'https://www.youtube.com/watch?v=edK_j7w3_5E';
const playerUrl = 'https://www.youtube-nocookie.com/embed/edK_j7w3_5E?autoplay=1&playsinline=1';
const summary = 'השיר מחבר בין אמנות הקינטסוגי לבין החלמה אחרי משבר. דרך הדימוי של כלי שתוקן בזהב, גבריאל אפלין מתארת איך אפשר לקבל את מה שעברנו ולראות בצלקות חלק מהסיפור שלנו.';

export default function KintsugiPlayer() {
  const trigger = useRef<HTMLAnchorElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function openPlayer(event: MouseEvent<HTMLAnchorElement>) {
    const modal = dialog.current;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        !modal || typeof modal.showModal !== 'function') return;
    event.preventDefault();
    if (!modal.open) {
      modal.showModal();
      setIsPlaying(true);
    }
  }

  function closePlayer() {
    setIsPlaying(false);
    trigger.current?.focus({ preventScroll: true });
  }

  const youtubeName = createElement('bdi', { dir: 'ltr', lang: 'en' }, 'YouTube');

  return createElement(Fragment, null,
    createElement('a', {
      className: 'kintsugi-music-link',
      href: songUrl,
      ref: trigger,
      'aria-haspopup': 'dialog',
      'aria-controls': 'kintsugi-player',
      onClick: openPlayer,
    },
    createElement('span', { className: 'kintsugi-music-icon', 'aria-hidden': 'true' }, '▶'),
    createElement('span', null, 'להאזנה לשיר ״קינטסוגי״ של גבריאל אפלין ב־', youtubeName)),
    createElement('dialog', {
      id: 'kintsugi-player',
      className: 'song-dialog',
      'aria-labelledby': 'kintsugi-player-title',
      ref: dialog,
      onClose: closePlayer,
    },
    createElement('div', { className: 'song-content' },
      createElement('div', { className: 'song-header' },
        createElement('div', null,
          createElement('h2', { id: 'kintsugi-player-title', className: 'song-title' }, 'קינטסוגי'),
          createElement('p', null, 'גבריאל אפלין'),
        ),
        createElement('button', {
          className: 'song-close',
          type: 'button',
          'aria-label': 'סגירה',
          autoFocus: true,
          onClick: () => dialog.current?.close(),
        }, '×'),
      ),
      createElement('div', { className: 'song-player' },
        isPlaying ? createElement('iframe', {
          src: playerUrl,
          title: 'גבריאל אפלין – קינטסוגי',
          allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen',
          allowFullScreen: true,
          referrerPolicy: 'strict-origin-when-cross-origin',
        }) : null,
      ),
      createElement('div', { className: 'song-about' },
        createElement('h3', null, 'על השיר'),
        createElement('p', null, summary),
      ),
      createElement('a', {
        className: 'song-fallback',
        href: songUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      }, 'לפתיחה ב־', youtubeName),
    )),
  );
}
