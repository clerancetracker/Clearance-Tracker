// /api/sheets.js

export default async function handler(req, res) {
    try {
      // 1) Proxy your Apps Script web app URL
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbx_85W2Kdj0y5SqS9ykBjmyHvUGEl-vKj4NbmRTwNHEHNvWOrwhzrEvZUb14B_RFXfCjw/exec'
      );
      if (!response.ok) {
        throw new Error(`Upstream returned ${response.status}`);
      }
  
      // 2) Parse JSON
      const data = await response.json();
  
      // 3) Return it to the browser
      return res.status(200).json(data);
    }
    catch (err) {
      console.error('🛑 /api/sheets error:', err);
      return res.status(500).json({ error: err.message });
    }
  }
  