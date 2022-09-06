"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
function InputIcon(props) {
    return (react_1.default.createElement(Icon_1.default, Object.assign({}, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4ZM9 9H8V7H12V9H11V15H12V17H8V15H9V9Z" })));
}
exports.default = InputIcon;
