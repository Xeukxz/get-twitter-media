"use strict";
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
const axios_1 = __importDefault(require("axios"));
module.exports = function getTwitterMedia(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let input = {};
        if (typeof url === 'object')
            if (url.url)
                input = url;
            else
                return { found: false, error: 'No URL provided' };
        else if (typeof url === 'string')
            input.url = url;
        else
            return { found: false, error: 'Invalid first argument' };
        if (options)
            Object.keys(options).forEach((key) => input[key] = options[key]);
        if (/twitter\.com|x\.com/.test(input.url)) {
            let apiURL = input.url.replace(/twitter\.com|x\.com/g, 'api.vxtwitter.com');
            let result = yield axios_1.default.get(apiURL).then((res) => res.data).catch((err) => {
                return { found: false, error: 'An issue occured. Make sure the twitter link is valid.' };
            });
            if (!result.media_extended)
                return { found: false, error: 'No media found' };
            let media = [];
            result.media_extended.forEach((mediaItem, i) => __awaiter(this, void 0, void 0, function* () {
                media[i] = {
                    url: mediaItem.url
                };
                if (input.buffer)
                    media[i].buffer = yield axios_1.default.get(mediaItem.url, { responseType: 'arraybuffer' }).then((res) => {
                        return Buffer.from(res.data, 'binary');
                    }).catch((err) => {
                        console.warn('Error getting buffer: ', err);
                        return undefined;
                    });
            }));
            let output = {
                found: true,
                type: result.media_extended[0].type,
                media: media
            };
            if (input.text)
                output.text = result.text;
            return output;
        }
        else
            return { found: false, error: `Invalid URL: ${input.url}` };
    });
};
