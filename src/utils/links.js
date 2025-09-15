export function openMailto(to, subject, body = '') {
  try {
    const params = [];
    if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
    if (body) params.push(`body=${encodeURIComponent(body)}`);
    const query = params.length ? `?${params.join('&')}` : '';
    const href = `mailto:${encodeURIComponent(to)}${query}`;

    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(() => {
      if (anchor && anchor.parentNode) {
        anchor.parentNode.removeChild(anchor);
      }
    }, 0);
  } catch (e) {
    try {
      window.location.assign(`mailto:${to}`);
    } catch (_) {
      // noop: if no mail client is configured, nothing else to do here
    }
  }
}


