// const getTwitterMedia = require('./dist/getTwitterMedia.js');

// import getTwitterMedia from './getTwitterMedia';

import getTwitterMedia from './getTwitterMedia.js';

const testURLs = {
  image: "https://twitter.com/TurnkeyPet/status/1523047586998865920",
  video: "https://twitter.com/CursedVideos/status/1687071264848879616?s=20",
  gif: "https://twitter.com/archillect/status/1687161588854243343?s=20",
  fail: "https://twitter.com/tsaminaminaehehwakawakaehehtsaminaminazangalewaitstimeforafrica"
};



(async () => {
  let res = await getTwitterMedia(testURLs.video, {
        text: true,
      });

  console.log(res)
})()