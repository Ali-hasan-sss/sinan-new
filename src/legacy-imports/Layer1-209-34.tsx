import svgPaths from "./svg-eq7mgv8xwc";
import { imgGroup } from "./svg-4srd8";

function Group() {
  return (
    <div className="absolute inset-[0_-0.01%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[96.01px_132.49px] opacity-80" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.02 132.49">
        <g id="Group">
          <path d={svgPaths.p6074900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p311a5a90} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pab1ba00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1bc0ca00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p196f0e00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p21b9a200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1eb57af0} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1ab83300} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p24a81b00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p10f63a80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p16be5f00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p18747000} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p125d200} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2a5c1a00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p22198200} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p34ea6700} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.pf8d5700} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p2eed6340} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.pab41d00} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p394d4ca0} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p214bfb80} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p2300db00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p2675f9f0} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p31b3f180} fill="var(--fill-0, white)" id="Vector_24" />
        </g>
      </svg>
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

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <Group1 />
    </div>
  );
}