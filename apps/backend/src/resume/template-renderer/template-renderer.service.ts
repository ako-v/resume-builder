import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { templates } from '@templates/index';
import { HttpStatusMessage } from '../../shared/http-status-message.enum';

@Injectable()
export class TemplateRendererService {
  private stylecsheet: ServerStyleSheet;
  constructor() {
    this.stylecsheet = new ServerStyleSheet();
  }

  render({ name, data }) {
    return this.renderToHtml(name, data);
  }

  private renderToHtml = (name: string, data: any) => {
    if (templates[name]) {
      try {
        const html = renderToString(
          this.stylecsheet.collectStyles(
            React.createElement(templates[name], data),
          ),
        );
        const css = this.stylecsheet.getStyleTags();
        return this.converToHtml(html, css);
      } catch (error) {
        console.error(
          `Failed to render HTML for template ${name}: ${error.message}`,
        );

        throw new HttpException(
          HttpStatusMessage.INTERNAL_SERVER_ERROR,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
    return this.converToHtml('', '');
  };

  private converToHtml = (html: string, css: string) => {
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
}
