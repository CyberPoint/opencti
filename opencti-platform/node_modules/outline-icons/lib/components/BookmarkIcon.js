"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
function BookmarkIcon(props) {
    return (react_1.default.createElement(Icon_1.default, Object.assign({}, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V19C18 19.3603 17.8062 19.6927 17.4927 19.8702C17.1792 20.0477 16.7944 20.0429 16.4855 19.8575L12 17.1662L7.5145 19.8575C7.20557 20.0429 6.82081 20.0477 6.5073 19.8702C6.19379 19.6927 6 19.3603 6 19V6ZM16 6L8 6V17.2338L11.4855 15.1425C11.8022 14.9525 12.1978 14.9525 12.5145 15.1425L16 17.2338V6Z" })));
}
exports.default = BookmarkIcon;
