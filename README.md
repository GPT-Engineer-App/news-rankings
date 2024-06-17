# news-rankings

Using React and Chakra UI, we will create a news site as shown in the image.

The site will read 1000 news items collected from different sources and rank them according to their importance on a scale from 0 to 10 using ChatGPT. The importance will be estimated based on the following seven factors:

Scale: how many people the event affected;
Magnitude: how big the impact is
novelty: how unexpected or unique the event is;
Proximity: how close the event is in time;
Actionability: the likelihood that a reader will act on the news story for personal benefit;
Positivity: how positive the event is - used to correct the media's Negativity bias;
Probability: the likelihood that the events speculated in the news story will actually happen;
Credibility: how reliable the source is.

In addition, summaries of all news stories with a significance above 5.5 will be sent every evening at 17:00 Turkish time to the e-mail addresses of those who subscribe to the site.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/news-rankings.git
cd news-rankings
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
