const axios = require("axios"),
  cheerio = require("cheerio");

module.exports = getTwitterMedia = (twiterURL, buffer) => {
  buffer = buffer === true ? buffer : false;
  return new Promise((resolve, reject) => {
    let url = `${twiterURL
      .replace(/\?[^]*/g, "")
      .replace("twitter", "ssstwitter")}`;

    axios({
      method: "post",
      url,
    })
      .then(async (result) => {
        let $ = cheerio.load(result.data),
          videos = {
            found: false,
            type: "Video",
            instances: []
          },
          images = {
            found: false,
            type: "Image",
            instances: []
          },
          image = {},
          media;
          
          if (result.data.includes("But it contains some image instead, so here you go:")) {
            $("div.result_overlay > img").each(async (i, element) =>
            $(element).attr("src") != "/images/no_thumb.png"
              ? (image.sourceURL = $(element).attr("src"))
              : ""
          );
          if (buffer) {
            image.bufferData = await axios({
              url,
              method: "GET",
              responseType: "arraybuffer",
            })
              .then((response) => {
                let buffer = Buffer.from(response.data);
                return {
                  buffer: buffer,
                  sizeB: buffer.length,
                  sizeKB: Math.ceil((buffer.length / 1024) * 100) / 100,
                  sizeMB: Math.ceil((buffer.length / 1024 / 1024) * 100) / 100,
                  sizeGB: Math.ceil((buffer.length / 1024 / 1024 / 1024) * 100) / 100,
                };
              })
              .catch((err) => reject(err));
          }
          images.instances.push(image);
          images.found = images.instances.length > 0
          if (images.found) resolve(images);
          else resolve({
            found: false,
          });
        } else {
          let index = 0
          await $("div.result_overlay > a").each(async (i, element) => {
            let video = {}
            video.sourceURL = $(element).attr("href");
            video.resolution = $(element).html().replace("Download ", "");
            video.width = video.resolution.split("x")[0];
            video.height = video.resolution.split("x")[1];

            let pushed = false

            if (buffer) {
              url = `${video.sourceURL}`;
              
              await axios({
                url,
                method: "GET",
                responseType: "arraybuffer",
              })
                .then((response) => {
                  let buffer = Buffer.from(response.data);
                  video.bufferData = {
                    buffer: buffer,
                    sizeB: buffer.length,
                    sizeKB: Math.ceil((buffer.length / 1024) * 100) / 100,
                    sizeMB: Math.ceil((buffer.length / 1024 / 1024) * 100) / 100,
                    sizeGB: Math.ceil((buffer.length / 1024 / 1024 / 1024) * 100) /100,
                  };
                  videos.instances.push(video);
                  pushed = true
                })
                .catch((err) => reject(err));
                
              }
              if(!pushed) {
                videos.instances.push(video);
                  pushed = true
              }
            index++
            if(index == $("div.result_overlay > a").length) {
              videos.found = videos.instances.length > 0

              if (videos.found) resolve(videos);
              else resolve({
                  found: false,
                });
            }
          })
        }
      })
      .catch((err) => reject(err));
  });
};