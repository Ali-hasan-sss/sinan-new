"use client";

import { motion } from "motion/react";
import droneImage from "@/assets/a8104aab23faf58bd70c6dc79239cdb987fb521b.png";
import { staticImageSrc } from "@/lib/static-image-src";

export function DroneOverlay() {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        zIndex: 15,
        width: "55%",
        left: "25%",
        top: "25%",
        transform: "translateY(-50%)",
      }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 0.6, x: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <img
        src={staticImageSrc(droneImage)}
        alt="Drone"
        className="w-full h-auto"
        style={{
          objectFit: "contain",
          filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.3))",
        }}
      />
    </motion.div>
  );
}
