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