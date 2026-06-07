import svgPaths from "./svg-qaph2i2ogz";
import { imgGroup } from "./svg-1yimb";

function Group() {
  return (
    <div className="absolute inset-[0_6.76%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[78.8px_20.94px] mask-size-[1022.9px_591.35px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1027.26 649.4">
        <g id="Group">
          <path d={svgPaths.p204c97f0} fill="var(--fill-0, #F2F2F3)" id="Vector" />
          <path d={svgPaths.p3bcd3500} fill="var(--fill-0, #F2F2F3)" id="Vector_2" />
          <path d={svgPaths.p114ad00} fill="var(--fill-0, #F2F2F3)" id="Vector_3" />
          <path d={svgPaths.p131e70c0} fill="var(--fill-0, #F2F2F3)" id="Vector_4" />
          <path d={svgPaths.p35b32f40} fill="var(--fill-0, #F2F2F3)" id="Vector_5" />
          <path d={svgPaths.p37e6b300} fill="var(--fill-0, #F2F2F3)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[3.22%_0_5.72%_7.15%]" data-name="Clip path group">
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