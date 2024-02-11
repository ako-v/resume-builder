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
exports.TemplateRendererService = void 0;
const common_1 = require("@nestjs/common");
const React = require("react");
const server_1 = require("react-dom/server");
const styled_components_1 = require("styled-components");
const templates_1 = require("@ui/templates");
const http_status_message_enum_1 = require("../../shared/http-status-message.enum");
let TemplateRendererService = class TemplateRendererService {
    constructor() {
        this.renderToHtml = (name, data) => {
            if (templates_1.templates[name]) {
                try {
                    const html = (0, server_1.renderToString)(this.stylecsheet.collectStyles(React.createElement(templates_1.templates[name], data)));
                    const css = this.stylecsheet.getStyleTags();
                    return this.converToHtml(html, css);
                }
                catch (error) {
                    console.error(`Failed to render HTML for template ${name}: ${error.message}`);
                    throw new common_1.HttpException(http_status_message_enum_1.HttpStatusMessage.INTERNAL_SERVER_ERROR, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
            return this.converToHtml('', '');
        };
        this.converToHtml = (html, css) => {
            return `
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${css}
      </head>
      <body>
        ${html}
      </body>
    </html>`;
        };
        this.stylecsheet = new styled_components_1.ServerStyleSheet();
    }
    render({ name, data }) {
        return this.renderToHtml(name, data);
    }
};
exports.TemplateRendererService = TemplateRendererService;
exports.TemplateRendererService = TemplateRendererService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TemplateRendererService);
//# sourceMappingURL=template-renderer.service.js.map