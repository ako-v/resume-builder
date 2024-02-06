import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { TemplateRendererService } from './template-renderer/template-renderer.service';
import { PdfGeneratorService } from './pdf-generator/pdf-generator.service';

@Module({
  providers: [ResumeService, TemplateRendererService, PdfGeneratorService],
  controllers: [ResumeController],
})
export class ResumeModule {}
