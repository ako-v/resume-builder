"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ExperiencePart = function (props) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-14 mb-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "font-bold col-span-3", children: props.time }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-11", children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-bold", children: props.position }), (0, jsx_runtime_1.jsxs)("h5", { children: [(0, jsx_runtime_1.jsx)("strong", { children: props.company }), " \uFF0D ", props.location] }), props.projects.map(function (project, index) {
                        return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { children: project.description }), (0, jsx_runtime_1.jsx)("ul", { className: "list-disc ml-7", children: project.listItems.map(function (item, index) { return ((0, jsx_runtime_1.jsx)("li", { children: item }, "li_" + index)); }) })] }, "P_" + index));
                    })] })] }));
};
exports.default = ExperiencePart;
