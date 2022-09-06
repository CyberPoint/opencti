"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
function ProfileIcon(props) {
    return (react_1.default.createElement(Icon_1.default, Object.assign({}, props),
        react_1.default.createElement("path", { d: "M6,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,16 C21,17.1045695 20.1045695,18 19,18 L6,18 C4.8954305,18 4,17.1045695 4,16 L4,8 L4,8 C4,6.8954305 4.8954305,6 6,6 L6,6 Z M13,14 L13,16 L19,16 L19,14 L13,14 Z M13,11 L13,13 L17,13 L17,11 L13,11 Z M6,8 L6,16 L11,16 L11,8 L6,8 Z M13,8 L13,10 L19,10 L19,8 L13,8 Z" })));
}
exports.default = ProfileIcon;
