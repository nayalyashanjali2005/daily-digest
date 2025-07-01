import { newsService } from "../services/news-service.js";

async function prepareNews() {
  const allNews = await newsService.readNews();
  allNews.forEach(news => printNews(news));
}

function printNews(news) {
  const newsId = document.querySelector('#news');

  const colDiv = document.createElement('div');
  colDiv.className = 'col-md-4 mb-4';

  const cardDiv = document.createElement('div');
  cardDiv.className = 'card h-100 shadow-sm';

  const img = document.createElement('img');
  img.src = news.image || 'https://via.placeholder.com/300x200?text=No+Image';
  img.className = 'card-img-top';
  img.alt = 'News Image';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.innerText = news.title;

  const pTag = document.createElement('p');
  pTag.className = 'card-text';
  pTag.innerText = news.desc;

  const aTag = document.createElement('a');
  aTag.href = news.url || "#";
  aTag.className = 'btn btn-primary';
  aTag.innerText = 'Read more';
  aTag.target = "_blank";

  cardBody.append(h5, pTag, aTag);
  cardDiv.append(img, cardBody);
  colDiv.appendChild(cardDiv);
  newsId.appendChild(colDiv);
}

prepareNews();
