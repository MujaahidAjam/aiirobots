// Open email in web providers directly (Gmail default), with fallback to OS mailto if a popup is blocked.
const enc = encodeURIComponent;

export const openEmailCompose = (to, subject = '', body = '', explicitProvider) => {
  const provider = explicitProvider || 'gmail';
  const urls = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`,
    outlook: `https://outlook.live.com/owa/?path=/mail/action/compose&to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`,
    default: `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`,
  };
  const win = window.open(urls[provider] || urls.gmail, '_blank', 'noopener');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    // Popup blocked: fall back to the OS handler
    window.location.href = urls.default;
  }
};

// (Optional) plain mailto helper if you need it elsewhere
export const openMailto = (to, subject = '', body = '') => {
  window.location.href = `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`;
};
