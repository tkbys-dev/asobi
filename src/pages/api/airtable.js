// require('dotenv').config();
// const Airtable = require('airtable');
import Airtable from 'airtable';
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appHb8vwuPHtV35AW'
);

// const table = base('meta');

// export { table };
export async function getMeta() {
  const records = await base('meta').select({ view: 'master' }).firstPage();
  const items = {};
  records.forEach((record) => {
    items[record.get('key')] = record.get('value');
  });

  return {
    meta: items,
  };
}
