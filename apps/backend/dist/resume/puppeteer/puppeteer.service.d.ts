export declare const browserProvider: {
    provide: string;
    useFactory: () => Promise<import("puppeteer").Browser>;
};
