import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService implements OnModuleDestroy {
  public browser: puppeteer.Browser;

  constructor() {
    if (!this.browser) this.initialize();
  }

  async initialize() {
    this.browser = await puppeteer.launch({
      executablePath: process.env.CHROMIUM_PATH || undefined,
      headless: true,
    });

    // Listen for shutdown signals
    process.on('SIGINT', () => this.closeBrowser());
    process.on('SIGTERM', () => this.closeBrowser());
    process.on('SIGQUIT', () => this.closeBrowser());
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async onModuleDestroy() {
    await this.closeBrowser();
  }
}
