export { ImageFormat, ImageSize } from "../../deps.ts";

export interface ImageOptions {
  /** image format for image generation */
  format?: ImageFormat;
  /** the size of the image you want to generate */
  size?: ImageSize;
}
