import cron from 'node-cron';
import fetchNews from './newsFetcher';
import rankNews from './newsRanker';
import sendEmail from './emailSender';

const scheduleDailySummary = () => {
  cron.schedule('0 17 * * *', async () => {
    const newsItems = await fetchNews();
    const rankedNews = rankNews(newsItems);
    const significantNews = rankedNews.filter(item => item.significance > 5.5);

    const summary = significantNews.map(item => `${item.title} (${item.source})`).join('\n');
    sendEmail('subscribers@example.com', 'Daily News Summary', summary);
  }, {
    scheduled: true,
    timezone: "Europe/Istanbul"
  });
};

export default scheduleDailySummary;