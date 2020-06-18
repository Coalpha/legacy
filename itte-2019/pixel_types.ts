/**
 * Sure, both `css_pixel` and `display_pixel`
 * have the `value: number` member but don't be dumb
 * and treat them as the same thing.
 * That's why this class isn't exported.
 */
abstract class pixel_type {
   value: number;
   protected get_dpr = () => window.devicePixelRatio || 1;
}

export class css_pixel extends pixel_type {
   constructor (public value: number) { super() }
   to_device_pixels = () => new device_pixel(this.value * this.get_dpr());
}

export class device_pixel extends pixel_type {
   constructor (public value: number) { super() }
   to_css_pixels = () => new css_pixel(this.value / this.get_dpr());
}
