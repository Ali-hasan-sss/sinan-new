import backgroundImage from "@/assets/ec2255b245be1b14c6256c754172023bc421a0d8.png";
import { staticImageSrc } from "@/lib/static-image-src";

export function LowPolyBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Background Image - No colors */}
      <div
        className="absolute inset-0 w-full h-full bg-black pointer-events-none"
        style={{
          backgroundImage: `url(${staticImageSrc(backgroundImage)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
