/// <reference types="node" />
import { Browser } from 'puppeteer';
import { TemplateRendererService } from '../template-renderer/template-renderer.service';
export declare class PdfGeneratorService {
    private readonly templateRendererService;
    private browser;
    constructor(templateRendererService: TemplateRendererService, browser: Browser);
    generatePdf(templateName: string, data: any): Promise<Buffer>;
    private convertToPdf;
}
