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
    fail: "https://twitter.com/tsaminaminaehehwakawakaehehtsaminaminazangalewaitstimeforafrica"
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield (0, getTwitterMedia_js_1.default)(testURLs.video, {
        text: true,
    });
    console.log(res);
}))();
