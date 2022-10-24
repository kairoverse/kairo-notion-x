import * as cheerio from 'cheerio';
import axios from 'axios';

export const opengraph = async (url: string) => {
  try {
    const { data } = await axios.get(url, {});

    if (typeof data !== 'string') {
      throw new Error('Data is not typeof string');
    }

    const $ = cheerio.load(data);
    const metadata = {
      title: $('title').text(),
      meta: {
        tilte: $("meta[name='title']").attr('content'),
        description: $("meta[name='description']").attr('content'),
      },
      og: {
        title: $("meta[property='og:title']").attr('content'),
        description: $("meta[property='og:description']").attr('content'),
        url: $("meta[property='og:url']").attr('content'),
        type: $("meta[property='og:type']").attr('content'),
        image: $("meta[property='og:image']").attr('content'),
      },
      twitter: {
        card: $("meta[property='twitter:card']").attr('content'),
        title: $("meta[property='twitter:title']").attr('content'),
        url: $("meta[property='twitter:url']").attr('content'),
        description: $("meta[property='twitter:description']").attr('content'),
        image: $("meta[property='twitter:image']").attr('content'),
      },
    };
    return {
      metadata
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};


