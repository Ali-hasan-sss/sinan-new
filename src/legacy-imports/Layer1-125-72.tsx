import svgPaths from "./svg-bg79vjyxez";
import { imgGroup } from "./svg-dseh4";

function Group() {
  return (
    <div className="absolute inset-[18.59%_69.48%_57.31%_19.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-237.08px_-110.67px] mask-size-[1189.82px_595.28px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126.02 143.48">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pb1e3100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2d6f6200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p27015000} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p37230e00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p178aa500} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1cbeab00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p36824a00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2aa75000} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p29856680} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1459a400} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p13c6c800} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p29889300} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1c1462c0} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p684de80} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p1f339c00} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p1c7f5300} fill="var(--fill-0, white)" id="Vector_16" />
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

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <ClipPathGroup />
    </div>
  );
}