import { staticImageSrc } from "@/lib/static-image-src";
import imgRectangle1 from "@/assets/496a261b5aa720732b83237fdd795db07be0c788.png";
import { imgRectangle } from "./svg-zb8bv";

function Group() {
  return (
    <div
      className="absolute contents inset-[0_-0.35%_-0.35%_0]"
      data-name="Group"
    >
      <div
        className="absolute css-j599nw inset-[0_-0.35%_-0.35%_0] mask-position-[0px_0px,_0px_0px] mask-size-[519.41px_169.58px,_519.41px_169.58px]"
        data-name="Rectangle"
        style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle}')` }}
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

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <ClipPathGroup1 />
    </div>
  );
}
