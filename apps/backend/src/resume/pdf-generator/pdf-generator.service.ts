import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

import { TemplateRendererService } from '../template-renderer/template-renderer.service';
import { HttpStatusMessage } from '../../shared/http-status-message.enum';

@Injectable()
export class PdfGeneratorService {
  constructor(
    private readonly templateRendererService: TemplateRendererService,
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
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
      });
      await browser.close();
      return pdf;
    } catch (error) {
      throw new HttpException(
        HttpStatusMessage.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
