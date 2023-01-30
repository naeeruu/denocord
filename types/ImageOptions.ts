/** https://discord.com/developers/docs/reference#image-formatting */
export type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;

/** 
* https://discord.com/developers/docs/reference#image-formatting
* type json can only be used on stickers
*/
export type ImageFormat = "jpeg" | "jpg" | "json" | "png" | "gif" | "webp";

export interface ImageOptions {
  /** whether the image is animated or not */
  forceStatic?: boolean;
  /** image format for image generation */
  format?: ImageFormat;
  /** the size of the image you want to generate */
  size?: ImageSize;
}
