'use client';

import {useRef} from 'react';

type SupportContactProps = {
  email: string;
  whatsapp: string;
};

export default function SupportContact({email, whatsapp}: SupportContactProps) {
  const formRef = useRef<HTMLFormElement>(null);

  function openDraft(channel: 'email' | 'whatsapp') {
    const form = formRef.current;
    const recipient = channel === 'email' ? email : whatsapp;
    if (!form || !recipient || !form.reportValidity()) return;

    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    const subject = 'פנייה בנושא תמיכה במיזם קינטסוגי סטייל';
    const message = [
      subject,
      '',
      'שם מלא: ' + field('name'),
      field('organization') && 'ארגון: ' + field('organization'),
      'טלפון: ' + field('phone'),
      field('message') && 'פרטים נוספים: ' + field('message'),
    ].filter((line, index) => line || index === 1).join('\n');

    if (channel === 'email') {
      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(message);
    } else {
      window.open('https://wa.me/' + whatsapp + '?text=' + encodeURIComponent(message),
        '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <form className="support-contact" ref={formRef} onSubmit={event => event.preventDefault()}
      aria-describedby="support-contact-help">
      <div className="support-contact-fields">
        <label>
          שם מלא <span className="support-field-required" aria-hidden="true">*</span>
          <input name="name" autoComplete="name" maxLength={100} pattern={'.*\\S.*'} required />
        </label>
        <label>
          ארגון <span className="support-field-optional">(לא חובה)</span>
          <input name="organization" autoComplete="organization" maxLength={120} />
        </label>
        <label className="support-contact-wide">
          טלפון <span className="support-field-required" aria-hidden="true">*</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel"
            maxLength={32} pattern={'.*[0-9].*'} dir="ltr" required />
        </label>
        <label className="support-contact-wide">
          פרטים נוספים <span className="support-field-optional">(לא חובה)</span>
          <textarea name="message" rows={3} maxLength={500}
            placeholder="איך תרצו לתמוך במיזם?" />
        </label>
      </div>
      <div className="support-contact-actions">
        <button type="button" className="support-send support-send-email"
          disabled={!email} onClick={() => openDraft('email')}>
          שליחה במייל
        </button>
        <button type="button" className="support-send support-send-whatsapp"
          disabled={!whatsapp} onClick={() => openDraft('whatsapp')}>
          שליחה ב־WhatsApp
        </button>
      </div>
      <p id="support-contact-help" className="support-contact-help">
        {email && whatsapp
          ? 'תיפתח הודעה מוכנה באפליקציה שבחרתם. השלימו שם את השליחה.'
          : 'אפשרויות השליחה יהיו זמינות לאחר עדכון פרטי הקשר.'}
      </p>
    </form>
  );
}
