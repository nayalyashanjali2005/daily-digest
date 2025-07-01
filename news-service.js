import News from "../models/news.js";
import { URL } from "../utils/config.js";
import { getNews } from "./api-clients.js";

/*
  NewsService - Responsible for:
  - Fetching news from the API
  - Creating News model objects
  - (Optionally) marking news as read or read later
*/

export const newsService = {
  async readNews() {
    try {
      // Fetch raw data from API
      const response = await getNews(URL);
      const articles = response.articles || [];

      // Convert each article into a News object
      return articles.map(article =>
        new News(
          article.title || "No Title",
          article.description || "No Description",
          article.url || "#",
          article.urlToImage || "https://via.placeholder.com/300x200?text=No+Image"
        )
      );
    } catch (err) {
      console.error("❌ Error fetching news in newsService:", err);
      return []; // Return empty array on error
    }
  },

  markRead(newsItem) {
    newsItem.isRead = true;
  },

  markReadLater(newsItem) {
    newsItem.isReadLater = true;
  }
};
