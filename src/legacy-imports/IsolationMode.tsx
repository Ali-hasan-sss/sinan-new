import { staticImageSrc } from "@/lib/static-image-src";
import imgRectangle1 from "@/assets/8521f681fdc085877b87fe4fff3165bcf8240b73.png";
import { imgRectangle } from "./svg-8pz15";

function Group() {
  return (
    <div className="absolute contents inset-[0_-1%_0.01%_0]" data-name="Group">
      <div
        className="absolute inset-[0_-1%_0.01%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1683.78px_595.28px]"
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

export default function IsolationMode() {
  return (
    <div className="relative size-full" data-name="Isolation_Mode">
      <ClipPathGroup />
    </div>
  );
}
