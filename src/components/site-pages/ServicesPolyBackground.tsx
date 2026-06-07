import servicesBackground from "@/assets/0bd645c07c5e3382e72a710ffcebe26e5e42ee99.png";
import { staticImageSrc } from "@/lib/static-image-src";

export function ServicesPolyBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none bg-white">
      <img
        src={staticImageSrc(servicesBackground)}
        alt=""
        className="w-full h-full object-cover opacity-20"
        style={{ filter: "grayscale(100%) brightness(1.5)" }}
      />
    </div>
  );
}
