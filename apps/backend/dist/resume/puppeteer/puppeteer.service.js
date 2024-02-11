"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserProvider = void 0;
const puppeteer_1 = require("puppeteer");
exports.browserProvider = {
    provide: 'BROWSER',
    useFactory: async () => await puppeteer_1.default.launch({
        headless: 'new',
        args: ['--no-sandbox', '--font-render-hinting=none'],
    }),
};
//# sourceMappingURL=puppeteer.service.js.map