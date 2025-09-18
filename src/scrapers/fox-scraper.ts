import { BaseScraper } from '../base-scraper';
import { Article } from '../types';

export class FoxScraper extends BaseScraper {
  constructor() {
    super('Fox News', 'https://www.foxnews.com');
  }

  async scrapeArticles(): Promise<Article[]> {
    // TODO: implement scraping logic for Fox News.
    // For now, return an empty list.
    return [];
  }
}
