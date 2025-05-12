// /api/sheets.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    // 1) Call your Apps Script web app URL
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbx_85W2Kdj0y5SqS9ykBjmyHvUGEl-vKj4NbmRTwNHEHNvWOrwhzrEvZUb14B_RFXfCjw/exec'
    );
    
    // 2) Parse JSON
    const data = await response.json();
    
    // 3) Return it to the browser
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sheet data' });
  }
}
