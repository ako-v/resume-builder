"use strict";
"use-client";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var Header_1 = require("./components/Header");
var Summary_1 = require("./components/Summary");
var Skills_1 = require("./components/Skills");
var Experience_1 = require("./components/Experience");
var Educations_1 = require("./components/Educations");
var Languages_1 = require("./components/Languages");
var StyledTemplates = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: pink;\n"], ["\n  color: pink;\n"])));
function Simple(props) {
    return ((0, jsx_runtime_1.jsxs)("div", { id: "resume-container", className: "max-w-[745px] bg-white w-full min-h-screen px-12 py-7 flex flex-col gap-2", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(Summary_1.Summary, {}), (0, jsx_runtime_1.jsx)(Skills_1.Skills, {}), (0, jsx_runtime_1.jsx)(Experience_1.Experience, {}), (0, jsx_runtime_1.jsx)(Educations_1.Educations, {}), (0, jsx_runtime_1.jsx)(Languages_1.Languages, {})] }));
}
exports.default = Simple;
var templateObject_1;
