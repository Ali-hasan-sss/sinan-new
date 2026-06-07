import { staticImageSrc } from "@/lib/static-image-src";
import imgLayer1 from "@/assets/4d54562507a245c41ea92cde9ba44884176c7493.png";

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={staticImageSrc(imgLayer1)}
        />
      </div>
    </div>
  );
}
