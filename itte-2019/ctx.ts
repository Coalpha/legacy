import { css_pixel, device_pixel } from "./pixel_types"

export default class ctx {
   public ctx: CanvasRenderingContext2D;
   private css_width: css_pixel;
   private css_height: css_pixel;
   private ctx_width: device_pixel;
   private ctx_height: device_pixel;

   update_size(width: css_pixel, height: css_pixel) {
      this.c.style.width = (this.css_height = height).value + "px";
      this.c.style.height = (this.css_width = width).value + "px";
      this.c.width = (this.ctx_width = width.to_device_pixels()).value;
      this.c.height = (this.ctx_height = height.to_device_pixels()).value;
   }

   private bg: string;
   set_bg(bg: string) {
      this.bg = bg;
   }

   /**
    * Hey! Don't touch this! It's mine~
    *
    * \- ctx.fillStyle
    */
   private _fillStyle_: string;
   set fillStyle(s: string) {
      if (this._fillStyle_ !== s) {
         this.ctx.fillStyle = s;
      }
   }

   clear() {
      this.fillStyle = this.bg;
      this.ctx.fillRect(0, 0, this.ctx_width.value, this.ctx_height.value);
   }

   constructor (
      public c: HTMLCanvasElement,
      o = {
         bg: "black",
         image_smoothing: false,
      },
      cs: CanvasRenderingContext2DSettings = { alpha: false },
   ) {
      this.ctx = c.getContext("2d", cs);
      this.ctx.imageSmoothingEnabled = o.image_smoothing;
   }
}
