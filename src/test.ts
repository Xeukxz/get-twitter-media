// const getTwitterMedia = require('./dist/getTwitterMedia.js');

// import getTwitterMedia from './getTwitterMedia';

import getTwitterMedia from './getTwitterMedia.js';

type URLType = "image" | "video" | "gif" | "multiMedia" | "xDomain" | "fail"; // Add more types as needed

const testURLs: Record<URLType, string> = {
  image: "https://twitter.com/TurnkeyPet/status/1523047586998865920",
  video: "https://twitter.com/CursedVideos/status/1687071264848879616?s=20",
  gif: "https://twitter.com/archillect/status/1687161588854243343?s=20",
  multiMedia: "https://twitter.com/0xgaut/status/1698724639260688661?s=20",
  xDomain: "https://x.com/CursedVideos/status/1687071264848879616?s=20", // x.com 
  fail: "https://twitter.com/tsaminaminaehehwakawakaehehtsaminaminazangalewaitstimeforafrica",
};

async function test(url: URLType | "all" = "all"): Promise<string> {
  if (url === "all") {
    let testResults = []
    for (let url in testURLs) {
      testResults.push(await test(url as URLType))
    }
    return testResults.join("\n")
  } else {
    let res = await getTwitterMedia(testURLs[url], {
      text: true,
    }).then((res) => {
      return `Test ${res.found ? 'passed 🟢' : 'failed 🔴'} for ${url}: ${JSON.stringify(res, null, 2)}\n`;
    }).catch((err) => {
      return `Test failed for ${url}\n\n${err}\n`;
    })
    return res;
  }
}

(async () => {
  let res = await test("all")
  console.log(res)
})()