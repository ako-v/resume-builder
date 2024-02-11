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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const puppeteer_1 = require("puppeteer");
const template_renderer_service_1 = require("../template-renderer/template-renderer.service");
const http_status_message_enum_1 = require("../../shared/http-status-message.enum");
const constants_1 = require("../../shared/constants");
let PdfGeneratorService = class PdfGeneratorService {
    constructor(templateRendererService, browser) {
        this.templateRendererService = templateRendererService;
        this.browser = browser;
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
            const page = await this.browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');
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
        }
        catch (error) {
            throw new common_1.HttpException(http_status_message_enum_1.HttpStatusMessage.INTERNAL_SERVER_ERROR, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PdfGeneratorService = PdfGeneratorService;
exports.PdfGeneratorService = PdfGeneratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constants_1.Providers.BROWSER)),
    __metadata("design:paramtypes", [template_renderer_service_1.TemplateRendererService,
        puppeteer_1.Browser])
], PdfGeneratorService);
//# sourceMappingURL=pdf-generator.service.js.map