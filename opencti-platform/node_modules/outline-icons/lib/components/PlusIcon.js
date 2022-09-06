"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
function PlusIcon(props) {
    return (react_1.default.createElement(Icon_1.default, Object.assign({}, props),
        react_1.default.createElement("path", { d: "M13,11 L13,6 C13,5.44771525 12.5522847,5 12,5 C11.4477153,5 11,5.44771525 11,6 L11,6 L11,11 L6,11 C5.44771525,11 5,11.4477153 5,12 C5,12.5522847 5.44771525,13 6,13 L11,13 L11,18 C11,18.5522847 11.4477153,19 12,19 C12.5522847,19 13,18.5522847 13,18 L13,13 L18,13 C18.5522847,13 19,12.5522847 19,12 C19,11.4477153 18.5522847,11 18,11 L13,11 Z" })));
}
exports.default = PlusIcon;
