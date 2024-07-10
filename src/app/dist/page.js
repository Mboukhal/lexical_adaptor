"use client";
"use strict";
exports.__esModule = true;
var Editor_1 = require("@/components/lexical/Editor");
var react_1 = require("react");
var Page = function () {
    var _a = react_1["default"].useState({}), text = _a[0], setText = _a[1];
    react_1.useEffect(function () {
        console.log(text);
    }, [text]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Editor_1.Editor, { text: text, onChange: setText })));
};
exports["default"] = Page;
