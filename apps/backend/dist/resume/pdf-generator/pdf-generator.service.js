"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const puppeteer_1 = require("puppeteer");
const template_renderer_service_1 = require("../template-renderer/template-renderer.service");
const http_status_message_enum_1 = require("../../shared/http-status-message.enum");
let PdfGeneratorService = class PdfGeneratorService {
    constructor(templateRendererService) {
        this.templateRendererService = templateRendererService;
    }
    async generatePdf(templateName, data) {
        const html = this.templateRendererService.render({
            name: templateName,
            data,
        });
        try {
            const pdf = await this.convertToPdf(html);
            return pdf;
        }
        catch (error) {
            throw new common_1.HttpException(http_status_message_enum_1.HttpStatusMessage.INTERNAL_SERVER_ERROR, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async convertToPdf(html) {
        try {
            const browser = await puppeteer_1.default.launch({ headless: 'new' });
            const page = await browser.newPage();
            await page.setContent(html, { waitUntil: 'networkidle0' });
            const pdf = await page.pdf({
                format: 'A4',
                printBackground: true,
            });
            await browser.close();
            return pdf;
        }
        catch (error) {
            throw new common_1.HttpException(http_status_message_enum_1.HttpStatusMessage.INTERNAL_SERVER_ERROR, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PdfGeneratorService = PdfGeneratorService;
exports.PdfGeneratorService = PdfGeneratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [template_renderer_service_1.TemplateRendererService])
], PdfGeneratorService);
//# sourceMappingURL=pdf-generator.service.js.map