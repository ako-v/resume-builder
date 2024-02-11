"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var SectionHeader_1 = require("./SectionHeader");
var StyledP = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 0.875rem /* 14px */;\n  line-height: 1.25rem /* 20px */;\n"], ["\n  font-size: 0.875rem /* 14px */;\n  line-height: 1.25rem /* 20px */;\n"])));
var Summary = function () {
    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)(SectionHeader_1.default, { children: "Summary" }), (0, jsx_runtime_1.jsx)(StyledP, { children: "Experienced Front-End Developer with 5 years of expertise in delivering dynamic and responsive web applications. Proficient in TypeScript, React (and it's ecosystem), Redux and Material-UI (MUI). Adept at tackling complex challenges with a strategic problem-solving approach, coupled with critical thinking skills. Skilled in working with RESTful APIs and Websocket for seamless integration between front-end and back-end systems." })] }));
};
exports.Summary = Summary;
var templateObject_1;
