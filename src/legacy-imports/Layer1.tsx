import svgPaths from "./svg-no4iw2gnge";

function Group() {
  return (
    <div className="absolute inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2088.82 1289">
        <g id="Group" opacity="0.05">
          <path d={svgPaths.p24d44800} fill="white" id="Vector" />
          <path d={svgPaths.p6eae00} fill="white" id="Vector_2" />
          <path d={svgPaths.p3d994280} fill="white" id="Vector_3" />
          <path d={svgPaths.p19125a00} fill="white" id="Vector_4" />
          <path d={svgPaths.p108c500} fill="white" id="Vector_5" />
          <path d={svgPaths.p1d4e5380} fill="white" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

export default function Layer() {
  return (
    <div className="absolute inset-0 w-full h-full" data-name="Layer_1">
      <ClipPathGroup />
    </div>
  );
}