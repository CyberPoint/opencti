"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
function BillingIcon(props) {
    return (react_1.default.createElement(Icon_1.default, Object.assign({}, props),
        react_1.default.createElement("path", { d: "M20,9 L4,9 L4,8 C4,6.8954305 4.8954305,6 6,6 L18,6 C19.1045695,6 20,6.8954305 20,8 L20,9 Z M20,11 L20,16 C20,17.1045695 19.1045695,18 18,18 L6,18 C4.8954305,18 4,17.1045695 4,16 L4,11 L20,11 Z M7,13 C6.44771525,13 6,13.4477153 6,14 C6,14.5522847 6.44771525,15 7,15 L13,15 C13.5522847,15 14,14.5522847 14,14 C14,13.4477153 13.5522847,13 13,13 L7,13 Z" })));
}
exports.default = BillingIcon;
