"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Languages = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var Heading_1 = require("../../../components/Heading");
var Section_1 = require("../../../components/Section");
var LanguagesContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  margin-bottom: 0.25rem;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  margin-bottom: 0.25rem;\n"])));
var Language = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 700;\n  grid-column: span 3 / span 3;\n"], ["\n  font-weight: 700;\n  grid-column: span 3 / span 3;\n"])));
var Proficiency = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-column: span 11 / span 11;\n"], ["\n  grid-column: span 11 / span 11;\n"])));
var Languages = function (_a) {
    var languages = _a.languages;
    return ((0, jsx_runtime_1.jsxs)(Section_1.default, { children: [(0, jsx_runtime_1.jsx)(Heading_1.default, { className: "section-title", children: "Languages" }), languages.map(function (language, index) { return ((0, jsx_runtime_1.jsxs)(LanguagesContainer, { children: [(0, jsx_runtime_1.jsx)(Language, { children: language.language }), (0, jsx_runtime_1.jsx)(Proficiency, { children: language.proficiency })] }, index)); })] }));
};
exports.Languages = Languages;
var templateObject_1, templateObject_2, templateObject_3;
