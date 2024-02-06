/// <reference types="node" />
import { TemplateRendererService } from '../template-renderer/template-renderer.service';
export declare class PdfGeneratorService {
    private readonly templateRendererService;
    constructor(templateRendererService: TemplateRendererService);
    generatePdf(templateName: string, data: any): Promise<Buffer>;
    private convertToPdf;
}
