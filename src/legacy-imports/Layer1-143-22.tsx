import { staticImageSrc } from "@/lib/static-image-src";
import imgRectangle1 from "@/assets/817132656e6a26c75cbe972d036896103763d89d.png";
import { imgRectangle } from "./svg-dxzzh";

function Group() {
  return (
    <div
      className="absolute contents inset-[0_-0.4%_-0.4%_0]"
      data-name="Group"
    >
      <div
        className="absolute inset-[0_-0.4%_-0.4%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[423.1px_332.56px]"
        data-name="Rectangle"
        style={{ maskImage: `url('${imgRectangle}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={staticImageSrc(imgRectangle1)}
          />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <ClipPathGroup />
    </div>
  );
}
