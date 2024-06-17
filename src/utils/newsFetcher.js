import Parser from 'rss-parser';
import newsSources from './newsSources';

const parser = new Parser();

const fetchNews = async () => {
  const newsItems = [];
  for (const source of newsSources) {
    try {
      const feed = await parser.parseURL(source);
      feed.items.forEach(item => {
        newsItems.push({
          title: item.title,
          source: feed.title,
          link: item.link,
          pubDate: item.pubDate,
          content: item.contentSnippet,
        });
      });
    } catch (error) {
      console.error(`Error fetching news from ${source}:`, error);
    }
  }
  return newsItems;
};

export default fetchNews;