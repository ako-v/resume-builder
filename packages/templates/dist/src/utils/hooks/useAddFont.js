"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddFont = void 0;
var react_1 = require("react");
var useAddFont = function (url) {
    (0, react_1.useEffect)(function () {
        var link = document.createElement("link");
        link.href = url;
        link.rel = "stylesheet";
        document.head.appendChild(link);
        return function () {
            document.head.removeChild(link);
        };
    }, []);
};
exports.useAddFont = useAddFont;
