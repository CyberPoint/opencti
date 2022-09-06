"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
function CommentIcon(props) {
    return (react_1.default.createElement(Icon_1.default, Object.assign({}, props),
        react_1.default.createElement("path", { d: "M18 4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3l-1.586 1.586a2 2 0 0 1-2.828 0L9 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm0 2H6v10h3.828L12 18.172 14.172 16H18V6zm-5 6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h4zm2-4a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h6z" })));
}
exports.default = CommentIcon;
