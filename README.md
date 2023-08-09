# Installation:
```
> npm i get-twitter-media
```

# Usage:

`Params:`
- __url__ - | `type: string | MediaOptionsWithUrl` | - A URL or an object with a URL property, and optionally a buffer and/or text property
- __options__ - | `type: MediaOptions` | - An object with a buffer and/or text property

```js
const getTwitterMedia = require('get-twitter-media');
getTwitterMedia(url, options)
```

# Examples:

`Example with buffer:`
```js
const getTwitterMedia = require('get-twitter-media');
let media = await getTwitterMedia("https://twitter.com/CursedVideos/status/1687071264848879616?s=20", {
                    buffer: true
                  });
console.log(media);
```

`Output with buffer:`
```js
{
  found: true,
  type: 'Video',
  url: 'https://video.twimg.com/amplify_video/1687071206959177728/vid/854x480/SlOcOcqfwdfNhtdk.mp4?tag=14',
  buffer: <Buffer 00 00 00 1c 66 74 79 70 6d 70  ... 3522918 more bytes> 
}
```


`Example with text:`
```js
const getTwitterMedia = require('get-twitter-media');
let media = await getTwitterMedia("https://twitter.com/TurnkeyPet/status/1523047586998865920", {
              text: true,
            });
console.log(media);
```

`Output without buffer:`
```js
{
  found: true,
  type: 'image',
  url: 'https://pbs.twimg.com/media/FSLztSMVcAA84nP.jpg',
  text: "My little rescue dog..Iris who is blind now due to cruel treatment, we have had her a year now had one eye taken out and lots of other things done and she's now a little monkey!! https://t.co/BKqd0ruHzc"
}
```

# Types (d.ts reference):
```ts
export interface MediaOptions {
    buffer?: boolean
    text?: boolean
}

export interface MediaOptionsWithUrl extends MediaOptions {
    url: string
}

export interface Output {
    found: true
    type: "video" | "image" | "gif"
    url: string
    buffer?: Buffer
    text?: string
}
export interface ErrorOutput {
    found: false
    error: string
}

export function getTwitterMedia(url: string | MediaOptionsWithUrl, options?: MediaOptions): Promise<Output>

```