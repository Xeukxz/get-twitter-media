"use strict";
// const getTwitterMedia = require('./dist/getTwitterMedia.js');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import getTwitterMedia from './getTwitterMedia';
const getTwitterMedia_js_1 = __importDefault(require("./getTwitterMedia.js"));
const testURLs = {
    image: "https://twitter.com/TurnkeyPet/status/1523047586998865920",
    video: "https://twitter.com/CursedVideos/status/1687071264848879616?s=20",
    gif: "https://twitter.com/archillect/status/1687161588854243343?s=20",
    multiMedia: "https://twitter.com/0xgaut/status/1698724639260688661?s=20",
    xDomain: "https://x.com/CursedVideos/status/1687071264848879616?s=20", // x.com 
    fail: "https://twitter.com/tsaminaminaehehwakawakaehehtsaminaminazangalewaitstimeforafrica",
};
function test(url = "all") {
    return __awaiter(this, void 0, void 0, function* () {
        if (url === "all") {
            let testResults = [];
            for (let url in testURLs) {
                testResults.push(yield test(url));
            }
            return testResults.join("\n");
        }
        else {
            let res = yield (0, getTwitterMedia_js_1.default)(testURLs[url], {
                text: true,
            }).then((res) => {
                return `Test ${res.found ? 'passed 🟢' : 'failed 🔴'} for ${url}: ${JSON.stringify(res, null, 2)}\n`;
            }).catch((err) => {
                return `Test failed for ${url}\n\n${err}\n`;
            });
            return res;
        }
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield test("all");
    console.log(res);
}))();
