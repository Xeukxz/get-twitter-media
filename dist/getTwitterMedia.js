var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Axios from 'axios';
/**
 *
 * @param {string | MediaOptionsWithUrl} url A URL or an object with a URL property, and optionally a buffer and/or text property
 * @param {MediaOptions} [options] An object with a buffer and/or text property
 * @returns {Promise<Output | ErrorOutput>}
 */
export default function getTwitterMedia(url, options) {
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
        if (/\/\/twitter.com/.test(input.url)) {
            let apiURL = input.url.replace('//twitter.com', '//api.vxtwitter.com');
            let result = yield Axios.get(apiURL).then((res) => res.data).catch((err) => {
                return { found: false, error: 'An issue occured. Make sure the twitter link is valid.' };
            });
            let output = {
                found: true,
                type: result.media_extended[0].type,
                url: result.media_extended[0].url
            };
            if (input.text)
                output.text = result.text;
            if (input.buffer)
                output.buffer = yield Axios.get(output.url, { responseType: 'arraybuffer' }).then((res) => {
                    return Buffer.from(res.data, 'binary');
                }).catch((err) => {
                    console.log('Error getting buffer: ', err);
                    return undefined;
                });
            return output;
        }
        else
            return { found: false, error: `Invalid URL: ${input.url}` };
    });
}
