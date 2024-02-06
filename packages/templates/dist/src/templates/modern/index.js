"use strict";
"use-client";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var StyledTemplates = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: pink;\n"], ["\n  color: pink;\n"])));
function Modern(props) {
    return ((0, jsx_runtime_1.jsxs)(StyledTemplates, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "This is Modern template!" }), (0, jsx_runtime_1.jsx)("h2", { children: props.description })] }));
}
exports.default = Modern;
var templateObject_1;
