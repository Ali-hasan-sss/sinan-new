import { staticImageSrc } from "@/lib/static-image-src";
import imgRectangle2 from "@/assets/49e016a03875abc4be61e33972360523674b4cae.png";
import { imgRectangle, imgRectangle1 } from "./svg-hzp10";

function Group() {
  return (
    <div className="absolute contents inset-[0_-1%_0.01%_0]" data-name="Group">
      <div
        className="absolute css-1qkn30 inset-[0_-1%_0.01%_0] mask-position-[182.79px_0px,_0px_0px] mask-size-[1190.55px_595.28px,_1683.78px_595.28px]"
        data-name="Rectangle"
        style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={staticImageSrc(imgRectangle2)}
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
    <div
      className="absolute contents inset-[0_18.44%_0_10.86%]"
      data-name="Clip path group"
    >
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
