import { Module } from '@nestjs/common';
import { browserProvider } from './puppeteer.service';

@Module({
  providers: [browserProvider],
  exports: [browserProvider],
})
export class PuppeteerModule {}
