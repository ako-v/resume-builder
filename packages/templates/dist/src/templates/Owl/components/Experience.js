"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Heading_1 = require("../../../components/Heading");
var Section_1 = require("../../../components/Section");
var ExperiencePart_1 = require("./ExperiencePart");
var Experience = function (_a) {
    var experiences = _a.experiences;
    return ((0, jsx_runtime_1.jsxs)(Section_1.default, { id: "experiences", children: [(0, jsx_runtime_1.jsx)(Heading_1.default, { className: "section-title", children: "EXPERIENCE" }), experiences.map(function (experience, index) { return ((0, jsx_runtime_1.jsx)(ExperiencePart_1.default, { startDate: experience.startDate, endDate: experience.endDate, title: experience.title, company: experience.company, location: experience.location, projects: experience.projects }, index)); })] }));
};
exports.Experience = Experience;
