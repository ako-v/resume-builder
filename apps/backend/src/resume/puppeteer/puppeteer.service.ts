import puppeteer from 'puppeteer';

export const browserProvider = {
  provide: 'BROWSER',
  useFactory: async () =>
    await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--font-render-hinting=none'],
    }),
};
