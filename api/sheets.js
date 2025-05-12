// /api/sheets.js

export default async function handler(req, res) {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbx_85W2Kdj0y5SqS9ykBjmyHvUGEl-vKj4NbmRTwNHEHNvWOrwhzrEvZUb14B_RFXfCjw/exec'
      );
      if (!response.ok) {
        throw new Error(`Upstream returned ${response.status}`);
      }
  
      const data = await response.json();
  
      return res.status(200).json(data);
    }
    catch (err) {
      console.error('🛑 /api/sheets error:', err);
      return res.status(500).json({ error: err.message });
    }
  }
  