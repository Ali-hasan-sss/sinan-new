import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/site-pages/figma/ImageWithFallback";
import droneImage from "@/assets/55a2196589266d18316c2d363a2ddb4a22740648.png";

export function FloatingDrone() {
  return (
    <div
      className="fixed top-8 right-8 pointer-events-none"
      style={{
        zIndex: 15,
      }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Glow effect under drone */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 80, 0, 0.6), rgba(255, 120, 0, 0.4), transparent)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Drone Image */}
        <div
          className="relative w-72 h-72 flex items-center justify-center"
          style={{
            filter: "drop-shadow(0 10px 30px rgba(255, 80, 0, 0.6))",
          }}
        >
          <ImageWithFallback
            src={droneImage}
            alt="Security Drone"
            className="w-full h-full object-contain"
            style={{
              filter: "brightness(1.1) contrast(1.1)",
            }}
          />

          {/* Rotating Propellers Overlay */}
          {/* Top Left Propeller */}
          <motion.div
            className="absolute"
            style={{
              top: "15%",
              left: "15%",
              width: "15%",
              height: "15%",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <rect
                x="18"
                y="2"
                width="4"
                height="36"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
              <rect
                x="2"
                y="18"
                width="36"
                height="4"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
            </svg>
          </motion.div>

          {/* Top Right Propeller */}
          <motion.div
            className="absolute"
            style={{
              top: "15%",
              right: "15%",
              width: "15%",
              height: "15%",
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <rect
                x="18"
                y="2"
                width="4"
                height="36"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
              <rect
                x="2"
                y="18"
                width="36"
                height="4"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
            </svg>
          </motion.div>

          {/* Bottom Left Propeller */}
          <motion.div
            className="absolute"
            style={{
              bottom: "15%",
              left: "15%",
              width: "15%",
              height: "15%",
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <rect
                x="18"
                y="2"
                width="4"
                height="36"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
              <rect
                x="2"
                y="18"
                width="36"
                height="4"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
            </svg>
          </motion.div>

          {/* Bottom Right Propeller */}
          <motion.div
            className="absolute"
            style={{
              bottom: "15%",
              right: "15%",
              width: "15%",
              height: "15%",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <rect
                x="18"
                y="2"
                width="4"
                height="36"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
              <rect
                x="2"
                y="18"
                width="36"
                height="4"
                fill="#666"
                opacity="0.3"
                rx="2"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
