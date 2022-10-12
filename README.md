<!-- <p align="center">
<!doctype html>
<svg viewBox="426 195.549 25 10" width="500" height="250">
  <line x1="427.113" y1="195.549" x2="432.813" y2="201.249" style="stroke:white;stroke-width:2"></line>
  <line x1="432.113" y1="200.549" x2="427.113" y2="205.549" style="stroke:white;stroke-width:2"></line>
  <line x1="437.113" y1="205.549" x2="447.113" y2="205.549" style="stroke:white;stroke-width:2"></line>
</svg>
</p> -->

# Installation:
```
> npm i get-twitter-media
````

# Usage:

`Params:`
- __url__ - | `type: string` | - The twitter url you want to get media from
- __buffer__ - | `type: boolean` | - Whether or not you want to also receive the media as a buffer (`default: false`)

```js
const getTwitterMedia = require('get-twitter-media');
getTwitterMedia(url, buffer)
```

# Video Examples:

`Example with buffer:`
```js
const getTwitterMedia = require('get-twitter-media');
let media = await getTwitterMedia("https://twitter.com/msVrXx/status/1577289590746091520", true);
console.log(media);
```

`Output with buffer:`
```js
{
  found: true,
  type: 'Video',
  instances: [
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/aHR0cHM6Ly92aWRlby50d2ltZy5jb20vZXh0X3R3X3ZpZGVvLzE1NzcyODk1NjE4OTc2NzI3MDQvcHUvdmlkLzMyMHg1NjgvdndYR2NwV0NRbjBKdS1kLS5tcDQ/dGFnPTEy',
      resolution: '320x568',
      width: '320',
      height: '568',
      bufferData: {
        buffer: ​<Buffer 00 00 00 1c 66 74 79 70 6d 70 ... 384532 more bytes>,
        sizeB: 384542,
        sizeKB: 375.53,
        sizeMB: 0.37,
        sizeGB: 0.01
      }
    },
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/aHR0cHM6Ly92aWRlby50d2ltZy5jb20vZXh0X3R3X3ZpZGVvLzE1NzcyODk1NjE4OTc2NzI3MDQvcHUvdmlkLzQ4MHg4NTIvaXc5dWE2MGJQTUpyYkI4Qi5tcDQ/dGFnPTEy',
      resolution: '480x852',
      width: '480',
      height: '852',
      bufferData: {
        buffer: ​<Buffer 00 00 00 1c 66 74 79 70 6d 70 ... 680059 more bytes>,
        sizeB: 680069,
        sizeKB: 664.13,
        sizeMB: 0.65,
        sizeGB: 0.01
      }
    },
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/aHR0cHM6Ly92aWRlby50d2ltZy5jb20vZXh0X3R3X3ZpZGVvLzE1NzcyODk1NjE4OTc2NzI3MDQvcHUvdmlkLzU3NngxMDI0L1JPa3ZiUUdrRFd4aC15NFAubXA0P3RhZz0xMg==',
      resolution: '576x1024',
      width: '576',
      height: '1024',
      bufferData: {
        buffer: ​<Buffer 00 00 00 1c 66 74 79 70 6d 70 ... 976570 more bytes>,
        sizeB: 976580,
        sizeKB: 953.7,
        sizeMB: 0.94,
        sizeGB: 0.01
      }
    }
  ]
}
```


`Example without buffer:`
```js
const getTwitterMedia = require('get-twitter-media');
let media = await getTwitterMedia("https://twitter.com/msVrXx/status/1577289590746091520", false);
console.log(media);
```

`Output without buffer:`
```js
{
  found: true,
  type: 'Video',
  instances: [
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/aHR0cHM6Ly92aWRlby50d2ltZy5jb20vZXh0X3R3X3ZpZGVvLzE1NzcyODk1NjE4OTc2NzI3MDQvcHUvdmlkLzMyMHg1NjgvdndYR2NwV0NRbjBKdS1kLS5tcDQ/dGFnPTEy',
      resolution: '320x568',
      width: '320',
      height: '568'
    },
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/aHR0cHM6Ly92aWRlby50d2ltZy5jb20vZXh0X3R3X3ZpZGVvLzE1NzcyODk1NjE4OTc2NzI3MDQvcHUvdmlkLzQ4MHg4NTIvaXc5dWE2MGJQTUpyYkI4Qi5tcDQ/dGFnPTEy',
      resolution: '480x852',
      width: '480',
      height: '852'
    },
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/aHR0cHM6Ly92aWRlby50d2ltZy5jb20vZXh0X3R3X3ZpZGVvLzE1NzcyODk1NjE4OTc2NzI3MDQvcHUvdmlkLzU3NngxMDI0L1JPa3ZiUUdrRFd4aC15NFAubXA0P3RhZz0xMg==',
      resolution: '576x1024',
      width: '576',
      height: '1024'
    }
  ]
}
```

# Image Examples:

`Example with buffer:`
```js
const getTwitterMedia = require('get-twitter-media');
let media = await getTwitterMedia("https://twitter.com/TurnkeyPet/status/1523047586998865920", true);
console.log(media);
```

`Output with buffer:`
```js
{
  found: true,
  type: 'Image',
  instances: [
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/p/aHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0ZTTHp0U01WY0FBODRuUC5qcGc=',
      bufferData: {
        sourceURL: 'https://ssscdn.io/ssstwitter/p/aHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0ZTTHp0U01WY0FBODRuUC5qcGc=',
        bufferData: {
          buffer: ​<Buffer 3c 21 44 4f 43 54 59 50 45 20 ... 50755 more bytes>,
          sizeB: 50765,
          sizeKB: 49.58,
          sizeMB: 0.05,
          sizeGB: 0.01
        }
      }
    }
  ]
}
```

`Example without buffer:`
```js
const getTwitterMedia = require('get-twitter-media');
let media = await getTwitterMedia("https://twitter.com/TurnkeyPet/status/1523047586998865920", false);
console.log(media);
```

`Output without buffer:`
```js
{
  found: true,
  type: 'Image',
  instances: [
    {
      sourceURL: 'https://ssscdn.io/ssstwitter/p/aHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0ZTTHp0U01WY0FBODRuUC5qcGc='
    }
  ]
}
```