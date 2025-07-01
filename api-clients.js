import { URL } from '../utils/config.js';

export async function getNews(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("API fetch failed:", err);
    throw err;
  }
}
