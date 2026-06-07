import { staticImageSrc } from "@/lib/static-image-src";
import svgPaths from "./svg-mr2xa33yje";
import imgRectangle from "@/assets/092832a615f24b1a70c16d21aa5707cdc78f23c4.png";
import { imgGroup } from "./svg-gku9j";

function Group() {
  return (
    <div
      className="absolute contents font-['Inter:Regular',sans-serif] font-normal inset-[21.15%_12.94%_36.73%_75.09%] leading-[normal] not-italic text-[12px] text-white"
      data-name="Group"
    >
      <p className="absolute css-ew64yg inset-[21.15%_12.94%_77.69%_75.09%]">{`Sinan Advanced Industries is a state-owned `}</p>
      <p className="absolute css-ew64yg inset-[24.87%_13.23%_73.97%_75.09%]">{`company, established to be the first Omani `}</p>
      <p className="absolute css-ew64yg inset-[28.6%_13.51%_70.24%_75.09%]">{`company to develop and improve defense `}</p>
      <p className="absolute css-ew64yg inset-[32.32%_15.43%_66.52%_75.09%]">{`products in the Sultanate of Oman, `}</p>
      <p className="absolute css-ew64yg inset-[36.04%_14.76%_62.79%_75.09%]">{`unlocking the latest technologies and `}</p>
      <p className="absolute css-ew64yg inset-[39.77%_13.23%_59.07%_75.09%]">{`best-in-class practices and services in this `}</p>
      <p className="absolute css-ew64yg inset-[43.49%_13.37%_55.35%_75.09%]">{`field. Our team has the longest experience `}</p>
      <p className="absolute css-ew64yg inset-[47.21%_14.61%_51.62%_75.09%]">{`in the Sultanate of Oman in operating, `}</p>
      <p className="absolute css-ew64yg inset-[50.94%_14.33%_47.9%_75.09%]">{`monitoring, and maintaining unmanned `}</p>
      <p className="absolute css-ew64yg inset-[54.66%_13.66%_44.17%_75.09%]">{`aerial crafts and artificial intelligence (AI). `}</p>
      <p className="absolute css-ew64yg inset-[58.39%_13.7%_40.45%_75.09%]">{`We have worked in multiple sectors, such `}</p>
      <p className="absolute css-ew64yg inset-[62.11%_14.13%_36.73%_75.09%]">
        as energy, minerals, and transportation.
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute contents inset-[13.37%_6.36%_7.42%_73.97%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[13.37%_6.36%_7.42%_73.97%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.1%_-0.25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 413.02 1023.02"
          >
            <path
              d={svgPaths.p644ccc0}
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeMiterlimit="10"
              strokeWidth="2.02"
            />
          </svg>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[17.59%_18.17%_81.24%_79.29%] leading-[normal] not-italic text-[12px] text-white">
        About Us
      </p>
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[62.82px_155px] mask-size-[1919px_1078px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 2088.82 1289"
      >
        <g id="Group" opacity="0.05">
          <path
            d={svgPaths.p24d44800}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p6eae00}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3d994280}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p19125a00}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p108c500}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p1d4e5380}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group2 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute contents inset-[12.02%_5.12%_4.34%_3.01%]"
      data-name="Clip path group"
    >
      <Group3 />
    </div>
  );
}

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <div
        className="absolute inset-[11.36%_5.66%_5.22%_3.34%]"
        data-name="Rectangle"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute left-0 max-w-none size-full top-0"
            src={staticImageSrc(imgRectangle)}
          />
        </div>
      </div>
      <Group1 />
      <ClipPathGroup />
    </div>
  );
}
