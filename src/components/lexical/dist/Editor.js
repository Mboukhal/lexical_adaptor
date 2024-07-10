"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Editor = void 0;
require("./index.css");
var react_1 = require("react");
var react_2 = require("react");
var useMediaQuery_1 = require("./hooks/useMediaQuery");
var LexicalComposer_1 = require("@lexical/react/LexicalComposer");
var LexicalListPlugin_1 = require("@lexical/react/LexicalListPlugin");
var LexicalHorizontalRulePlugin_1 = require("@lexical/react/LexicalHorizontalRulePlugin");
var LexicalClearEditorPlugin_1 = require("@lexical/react/LexicalClearEditorPlugin");
var LexicalRichTextPlugin_1 = require("@lexical/react/LexicalRichTextPlugin");
var LexicalHistoryPlugin_1 = require("@lexical/react/LexicalHistoryPlugin");
var LexicalOnChangePlugin_1 = require("@lexical/react/LexicalOnChangePlugin");
var LexicalTablePlugin_1 = require("@lexical/react/LexicalTablePlugin");
var LexicalCheckListPlugin_1 = require("@lexical/react/LexicalCheckListPlugin");
var LexicalMarkdownShortcutPlugin_1 = require("@lexical/react/LexicalMarkdownShortcutPlugin");
var markdown_1 = require("@lexical/markdown");
var LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
var LexicalErrorBoundary_1 = require("@lexical/react/LexicalErrorBoundary");
var nodes_1 = require("./nodes");
var EditorTheme_1 = require("./themes/EditorTheme");
var DragDropPastePlugin_1 = require("./plugins/DragDropPastePlugin");
var FloatingLinkEditorPlugin_1 = require("./plugins/FloatingLinkEditorPlugin");
var LinkPlugin_1 = require("./plugins/LinkPlugin");
var ToolbarPlugin_1 = require("./plugins/ToolbarPlugin");
var ContentEditable_1 = require("./ui/ContentEditable");
var Placeholder_1 = require("./ui/Placeholder");
var index_1 = require("./plugins/AutoLinkPlugin/index");
var CodeHighlightPlugin_1 = require("./plugins/CodeHighlightPlugin");
var InlineImagePlugin_1 = require("./plugins/InlineImagePlugin");
// import CodeActionMenuPlugin from './plugins/CodeActionMenuPlugin'
var loadContent = function () {
    // 'empty' editor
    var value = '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
    return value;
};
// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
    var editor = LexicalComposerContext_1.useLexicalComposerContext()[0];
    react_2.useEffect(function () {
        // Focus the editor when the effect fires!
        editor.focus();
    }, [editor]);
    return null;
}
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
    console.error(error);
}
function Editor(_a) {
    var text = _a.text, onChange = _a.onChange;
    var isSmallWidthViewPort = useMediaQuery_1["default"]("(max-width: 1025px)");
    var _b = react_1.useState(null), floatingAnchorElem = _b[0], setFloatingAnchorElem = _b[1];
    var placeholder = React.createElement(Placeholder_1["default"], null, "Enter some rich text...");
    var initialEditorState = loadContent();
    var editorStateRef = react_1.useRef();
    var initialConfig = {
        namespace: "MyEditor",
        editorState: initialEditorState,
        theme: EditorTheme_1["default"],
        onError: onError,
        nodes: __spreadArrays(nodes_1["default"]),
        showTreeView: true
    };
    function handleOnChange(editorState) {
        editorStateRef.current = editorState;
        var newText = editorState;
        if (JSON.stringify(text) !== JSON.stringify(newText)) {
            onChange(newText);
        }
    }
    var onRef = function (_floatingAnchorElem) {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };
    return (React.createElement(LexicalComposer_1.LexicalComposer, { initialConfig: initialConfig },
        React.createElement("div", { className: "editor-shell" },
            React.createElement(ToolbarPlugin_1["default"], null),
            React.createElement("div", { className: "editor-container tree-view" },
                React.createElement(LexicalClearEditorPlugin_1.ClearEditorPlugin, null),
                React.createElement(index_1["default"], null),
                React.createElement(InlineImagePlugin_1["default"], null),
                React.createElement(LexicalCheckListPlugin_1.CheckListPlugin, null),
                React.createElement(LexicalRichTextPlugin_1.RichTextPlugin, { contentEditable: React.createElement("div", { className: "editor-scroller" },
                        React.createElement("div", { className: "editor", ref: onRef },
                            React.createElement(ContentEditable_1["default"], null))), placeholder: placeholder, ErrorBoundary: LexicalErrorBoundary_1["default"] }),
                React.createElement(LexicalOnChangePlugin_1.OnChangePlugin, { onChange: handleOnChange }),
                React.createElement(LexicalHistoryPlugin_1.HistoryPlugin, null),
                React.createElement(MyCustomAutoFocusPlugin, null),
                React.createElement(DragDropPastePlugin_1["default"], null),
                React.createElement(LexicalListPlugin_1.ListPlugin, null),
                React.createElement(CodeHighlightPlugin_1["default"], null),
                React.createElement(LexicalTablePlugin_1.TablePlugin, { hasCellMerge: true, hasCellBackgroundColor: true }),
                React.createElement(LexicalHorizontalRulePlugin_1.HorizontalRulePlugin, null),
                React.createElement(LinkPlugin_1["default"], null),
                floatingAnchorElem && !isSmallWidthViewPort && (React.createElement(FloatingLinkEditorPlugin_1["default"], { anchorElem: floatingAnchorElem })),
                React.createElement(LexicalMarkdownShortcutPlugin_1.MarkdownShortcutPlugin, { transformers: markdown_1.TRANSFORMERS })))));
}
exports.Editor = Editor;
{
    /* <Actions />
  <TreeViewPlugin /> */
}
