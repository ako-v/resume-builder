export declare class TemplateRendererService {
    private stylecsheet;
    constructor();
    render({ name, data }: {
        name: any;
        data: any;
    }): string;
    private renderToHtml;
    private converToHtml;
}
