"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const name_to_emoji_json_1 = __importDefault(require("gemoji/name-to-emoji.json"));
const markdown_it_emoji_1 = __importDefault(require("markdown-it-emoji"));
function emoji(md) {
    return markdown_it_emoji_1.default(md, {
        defs: name_to_emoji_json_1.default,
        shortcuts: {},
    });
}
exports.default = emoji;
//# sourceMappingURL=emoji.js.map