"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const Icons = __importStar(require("../index"));
const ArchiveIcon_1 = __importDefault(require("../components/ArchiveIcon"));
const CollectionIcon_1 = __importDefault(require("../components/CollectionIcon"));
const TrashIcon_1 = __importDefault(require("../components/TrashIcon"));
const names = Object.keys(Icons);
(0, react_2.storiesOf)("All", module).add("default", () => react_1.default.createElement(react_1.default.Fragment, null, names.map(name => {
    if (name === "default" || name === "Icon")
        return null;
    const Component = Icons[name];
    return react_1.default.createElement(Component, { key: name, size: 64 });
})));
for (const name of names) {
    if (name === "default") {
        continue;
    }
    const Component = Icons[name];
    (0, react_2.storiesOf)(name, module).add("default", () => react_1.default.createElement(Component, null)).add("large", () => react_1.default.createElement(Component, { size: 64 })).add("black", () => react_1.default.createElement(Component, { black: true })).add("light", () => react_1.default.createElement(Component, { light: true }));
}
;
(0, react_2.storiesOf)("CollectionIcon", module).add("expanded", () => react_1.default.createElement(CollectionIcon_1.default, { expanded: true }));
(0, react_2.storiesOf)("ArchiveIcon", module).add("open", () => react_1.default.createElement(ArchiveIcon_1.default, { open: true }));
(0, react_2.storiesOf)("TrashIcon", module).add("open", () => react_1.default.createElement(TrashIcon_1.default, { open: true }));
