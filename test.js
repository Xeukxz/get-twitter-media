const getTwitterMedia = require('./getTwitterMedia.js');

(async () => {
  let res = await getTwitterMedia(
    //"https://twitter.com/TurnkeyPet/status/1523047586998865920",
    //"https://twitter.com/msVrXx/status/1577289590746091520",
    true
    );

  console.log(res)
})()