"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
function AlignImageLeftIcon(props) {
    return (react_1.default.createElement(Icon_1.default, Object.assign({}, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM12 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H12V9ZM12 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H12V13ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5ZM5 9C4.44772 9 4 9.44772 4 10V14C4 14.5523 4.44772 15 5 15H9C9.55228 15 10 14.5523 10 14V10C10 9.44772 9.55228 9 9 9H5Z" })));
}
exports.default = AlignImageLeftIcon;
