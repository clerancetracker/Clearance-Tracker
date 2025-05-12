// api/sheets.js
import fetch from 'node-fetch';         // If proxying Apps Script
// import { google } from 'googleapis'; // If using Sheets API

export default async function handler(req, res) {
  try {
    // ◼️ Example: proxying your Apps Script URL:
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbx_85W2Kdj0y5SqS9ykBjmyHvUGEl-vKj4NbmRTwNHEHNvWOrwhzrEvZUb14B_RFXfCjw/exec'
    );
    if (!response.ok) {
      throw new Error(`Upstream returned ${response.status}`);
    }
    const data = await response.json();

    // send it back
    return res.status(200).json(data);

    /* ◼️ Or, if you’re using the Google Sheets API, replace the above
       with your google.auth + sheets.spreadsheets.values.get() logic. */
  }
  catch (err) {
    console.error('🛑 /api/sheets error:', err);
    // send stack in dev; in prod you might hide it
    return res.status(500).json({ error: err.message, stack: err.stack });
  }
}