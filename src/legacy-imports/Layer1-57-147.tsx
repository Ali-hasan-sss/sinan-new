import { staticImageSrc } from "@/lib/static-image-src";
import svgPaths from "./svg-etmxpnha5b";
import imgRectangle1 from "@/assets/6361bdb9bfba5f30f5c0c8a84044844a6e47b954.png";
import { imgRectangle } from "./svg-rtx2s";

function Group() {
  return (
    <div
      className="absolute contents inset-[12.44%_0.05%_0_1.64%]"
      data-name="Group"
    >
      <div className="absolute flex inset-[12.44%_0.05%_0_1.64%] items-center justify-center">
        <div className="flex-none h-[568.32px] rotate-[180deg] w-[1889.28px]">
          <div
            className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-31.43px_-80.73px] mask-size-[1921.75px_502.81px] relative size-full"
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
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute contents inset-[0_0_22.53%_0]"
      data-name="Clip path group"
    >
      <Group />
    </div>
  );
}

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <ClipPathGroup />
      <div
        className="absolute inset-[44.29%_6.45%_22.77%_80.85%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 244 213.77"
        >
          <path
            d={svgPaths.p2a4fcf00}
            fill="var(--fill-0, #2E3191)"
            id="Vector"
            opacity="0.4"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[56.94%_73.32%_22.99%_15.96%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 206 130.21"
        >
          <path
            d={svgPaths.pcbdc780}
            fill="var(--fill-0, #808B42)"
            id="Vector"
            opacity="0.4"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[28.4%_38.4%_55.56%_58.48%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 60 104.17"
        >
          <path
            d={svgPaths.p3af35600}
            fill="var(--fill-0, #00ADEE)"
            id="Vector"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}
