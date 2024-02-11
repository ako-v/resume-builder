"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = exports.UnorderedList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
exports.UnorderedList = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style-type: disc;\n  padding: 0;\n"], ["\n  list-style-type: disc;\n  padding: 0;\n"])));
exports.ListItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 0.8125rem;\n  line-height: 1.375;\n"], ["\n  font-size: 0.8125rem;\n  line-height: 1.375;\n"])));
var UnorderedListComponent = function (_a) {
    var items = _a.items;
    return ((0, jsx_runtime_1.jsx)(exports.UnorderedList, { children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(exports.ListItem, { children: item }, index)); }) }));
};
exports.default = UnorderedListComponent;
var templateObject_1, templateObject_2;
