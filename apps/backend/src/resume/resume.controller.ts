import { Body, Controller, Post, Res, StreamableFile } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator/pdf-generator.service';
import { Response } from 'express';

@Controller('resume')
export class ResumeController {
  constructor(private readonly pdfGeneratorService: PdfGeneratorService) {
    //
  }

  @Post()
  async createResume(
    @Body() body: { name: string; data: any },
    @Res({ passthrough: true }) response: Response,
  ) {
    const pdf = await this.pdfGeneratorService.generatePdf(
      body.name,
      body.data,
    );
    response.contentType('application/pdf');
    response.attachment();
    response.attachment('resume.pdf');
    return new StreamableFile(pdf);
  }
}
