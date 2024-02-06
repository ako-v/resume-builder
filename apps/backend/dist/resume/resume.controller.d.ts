import { StreamableFile } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator/pdf-generator.service';
import { Response } from 'express';
export declare class ResumeController {
    private readonly pdfGeneratorService;
    constructor(pdfGeneratorService: PdfGeneratorService);
    createResume(body: {
        name: string;
        data: any;
    }, response: Response): Promise<StreamableFile>;
}
