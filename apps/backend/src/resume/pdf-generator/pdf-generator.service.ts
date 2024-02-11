import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Browser } from 'puppeteer';

import { TemplateRendererService } from '../template-renderer/template-renderer.service';
import { HttpStatusMessage } from '../../shared/http-status-message.enum';
import { Providers } from 'src/shared/constants';

@Injectable()
export class PdfGeneratorService {
  constructor(
    private readonly templateRendererService: TemplateRendererService,
    @Inject(Providers.BROWSER) private browser: Browser,
  ) {}

  async generatePdf(templateName: string, data: any) {
    const html = this.templateRendererService.render({
      name: templateName,
      data,
    });

    try {
      const pdf = await this.convertToPdf(html);
      return pdf;
    } catch (error) {
      throw new HttpException(
        HttpStatusMessage.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async convertToPdf(html: string) {
    try {
      const page = await this.browser.newPage();
      await page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      );

      await page.setContent(html, { waitUntil: 'networkidle0' });
      const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: false,
        margin: {
          top: '0.3in',
          bottom: '0.3in',
          left: '0',
          right: '0',
        },
      });
      await page.close();
      return pdf;
    } catch (error) {
      throw new HttpException(
        HttpStatusMessage.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
