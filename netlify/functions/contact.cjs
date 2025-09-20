// netlify/functions/contact.cjs
const { Resend } = require('resend');

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS, body: 'ok' };
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: CORS,
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, service, message } = JSON.parse(event.body || '{}');
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: CORS,
        body: JSON.stringify({ ok: false, error: 'Missing fields' }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || 'aiirobotsaiweb@gmail.com';
    const fromEmail = process.env.FROM_EMAIL; // REQUIRED, no hard-coded fallback

    if (!apiKey || !fromEmail) {
      return {
        statusCode: 500,
        headers: CORS,
        body: JSON.stringify({
          ok: false,
          error: 'Missing server config (RESEND_API_KEY or FROM_EMAIL)',
        }),
      };
    }

    const resend = new Resend(apiKey);

    // Send to you
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New Contact: ${name} — ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service || 'General Inquiry'}</p>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap">${message}</pre>
      `,
    });

    // Optional auto-reply (best effort)
    try {
      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: 'Thanks — we received your request',
        html: `<p>Hi ${name},</p><p>Thanks for contacting AiiRobots. We'll reply within 24 hours.</p>`,
      });
    } catch { }

    return { statusCode: 200, headers: CORS, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return {
      statusCode: 500,
      headers: CORS,
      body: JSON.stringify({ ok: false, error: e.message }),
    };
  }
};
