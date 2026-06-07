import { staticImageSrc } from "@/lib/static-image-src";
import imgRectangle from "@/assets/9a1c73ff2f662e013a6962b12c336c63b76bcf39.png";

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <div className="absolute inset-[0_-0.4%_-0.4%_0]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={staticImageSrc(imgRectangle)}
          />
        </div>
      </div>
    </div>
  );
}
