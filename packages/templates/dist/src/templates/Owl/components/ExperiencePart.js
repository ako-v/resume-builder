"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var react_1 = require("react");
var ExperienceContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  margin-bottom: 0.75rem;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  margin-bottom: 0.75rem;\n"])));
var Duration = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 700;\n  grid-column: span 3 / span 3;\n"], ["\n  font-weight: 700;\n  grid-column: span 3 / span 3;\n"])));
var Description = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-column: span 11 / span 11;\n"], ["\n  grid-column: span 11 / span 11;\n"])));
var Title = styled_components_1.default.h4(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 700;\n"], ["\n  font-weight: 700;\n"])));
var Company = styled_components_1.default.h5(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 400;\n"], ["\n  font-weight: 400;\n"])));
var ProjectDescription = styled_components_1.default.p(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var ProjectList = styled_components_1.default.ul(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  list-style: disc;\n  margin-left: 1.75rem;\n"], ["\n  list-style: disc;\n  margin-left: 1.75rem;\n"])));
var ProjectListItem = styled_components_1.default.li(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""])));
var ExperiencePart = function (_a) {
    var company = _a.company, endDate = _a.endDate, location = _a.location, startDate = _a.startDate, title = _a.title, projects = _a.projects;
    return ((0, jsx_runtime_1.jsxs)(ExperienceContainer, { children: [(0, jsx_runtime_1.jsxs)(Duration, { children: [startDate, " - ", endDate] }), (0, jsx_runtime_1.jsxs)(Description, { children: [(0, jsx_runtime_1.jsx)(Title, { className: "font-bold", children: title }), (0, jsx_runtime_1.jsxs)(Company, { children: [(0, jsx_runtime_1.jsx)("strong", { children: company }), " \uFF0D ", location] }), projects === null || projects === void 0 ? void 0 : projects.map(function (project, index) {
                        var _a;
                        return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ProjectDescription, { children: project.description }), (0, jsx_runtime_1.jsx)(ProjectList, { className: "list-disc ml-7", children: (_a = project === null || project === void 0 ? void 0 : project.responsibilities) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(ProjectListItem, { children: item }, "li_" + index)); }) })] }, "P_" + index));
                    })] })] }));
};
exports.default = ExperiencePart;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
