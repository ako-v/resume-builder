"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Educations = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var Section_1 = require("../../../components/Section");
var Heading_1 = require("../../../components/Heading");
var ExperienceContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  margin-bottom: 0.5rem;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  margin-bottom: 0.5rem;\n"])));
var FinishedDate = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 700;\n  grid-column: span 3 / span 3;\n"], ["\n  font-weight: 700;\n  grid-column: span 3 / span 3;\n"])));
var Description = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-column: span 11 / span 11;\n"], ["\n  grid-column: span 11 / span 11;\n"])));
var FieldofStudy = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 700;\n"], ["\n  font-weight: 700;\n"])));
var University = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var Educations = function (_a) {
    var educations = _a.educations;
    return ((0, jsx_runtime_1.jsxs)(Section_1.default, { id: "educations", children: [(0, jsx_runtime_1.jsx)(Heading_1.default, { children: "Educations" }), educations.map(function (education, index) { return ((0, jsx_runtime_1.jsxs)(ExperienceContainer, { children: [(0, jsx_runtime_1.jsx)(FinishedDate, { children: education.endDate }), (0, jsx_runtime_1.jsxs)(Description, { children: [(0, jsx_runtime_1.jsx)(FieldofStudy, { children: education.degree }), (0, jsx_runtime_1.jsxs)(University, { children: [(0, jsx_runtime_1.jsx)("strong", { children: education.institution }), " - ", education.location] })] })] }, index)); })] }));
};
exports.Educations = Educations;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
