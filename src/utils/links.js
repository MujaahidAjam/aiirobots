// src/utils/links.js
const enc = encodeURIComponent;

export const setEmailProviderPreference = (provider) => {
  try { localStorage.setItem('emailProvider', provider); } catch { }
};

export const getEmailProviderPreference = () => {
  try { return localStorage.getItem('emailProvider') || 'gmail'; }
  catch { return 'gmail'; }
};

export const openEmailCompose = (to, subject = '', body = '', explicitProvider) => {
  const provider = explicitProvider || getEmailProviderPreference();
  const urls = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`,
    outlook: `https://outlook.live.com/owa/?path=/mail/action/compose&to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`,
    default: `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`,
  };
  const win = window.open(urls[provider] || urls.gmail, '_blank', 'noopener');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = urls.default; // popup blocked fallback
  }
};

export const openMailto = (to, subject = '', body = '') => {
  window.location.href = `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`;
};
