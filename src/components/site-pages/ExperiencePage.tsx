"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Users, Network, Rocket, Ship, Radio, Handshake } from "lucide-react";
import experienceBg from "@/assets/9e521f678de3df6a9461a54fb3ceb227c2600346.png";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { staticImageSrc } from "@/lib/static-image-src";

interface ExperienceCardProps {
  title: string;
  items: { icon: React.ElementType; text: string; subtext?: string }[];
  delay: number;
}

function ExperienceCard({ title, items, delay }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-4 md:p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-300"
      style={{
        border: isHovered
          ? "2px solid rgba(156, 163, 175, 1)"
          : "2px solid transparent",
        backgroundColor: isHovered ? "rgba(156, 163, 175, 0.3)" : "transparent",
        backdropFilter: isHovered ? "blur(4px)" : "none",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="flex flex-col">
        <h3
          className="text-white text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-center"
          style={{ fontWeight: 600 }}
        >
          {title}
        </h3>

        <div className="space-y-3 md:space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white stroke-[1.5] flex-shrink-0 mt-0.5 md:mt-1" />
              <div>
                <p
                  className="text-white text-xs md:text-sm lg:text-[14pt]"
                  style={{
                    fontWeight: 400,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {item.text}
                </p>
                {item.subtext && (
                  <p
                    className="text-white/80 text-xs md:text-sm lg:text-[14pt]"
                    style={{
                      fontWeight: 400,
                      fontFamily: "DIN Arabic, sans-serif",
                    }}
                  >
                    {item.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const { t } = useLanguage();
  const teamSkills = [
    { icon: Users, text: t.experience.skill1 },
    { icon: Users, text: t.experience.skill2 },
    { icon: Network, text: t.experience.skill3 },
    { icon: Users, text: t.experience.skill4 },
    { icon: Users, text: t.experience.skill5 },
    { icon: Users, text: t.experience.skill6 },
  ];
  const domainExperience = [
    {
      icon: Network,
      text: t.experience.domain1,
      subtext: t.experience.domain1Sub,
    },
    {
      icon: Rocket,
      text: t.experience.domain2,
      subtext: t.experience.domain2Sub,
    },
    {
      icon: Ship,
      text: t.experience.domain3,
      subtext: t.experience.domain3Sub,
    },
    {
      icon: Radio,
      text: t.experience.domain4,
      subtext: t.experience.domain4Sub,
    },
    {
      icon: Handshake,
      text: t.experience.domain5,
      subtext: t.experience.domain5Sub,
    },
  ];

  return (
    <div className="w-full h-full min-h-0 relative">
      <div className="absolute inset-0 w-full h-full min-h-0" style={{ zIndex: 0 }}>
        <img
          src={staticImageSrc(experienceBg)}
          alt=""
          className="w-full h-full min-h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900/50" />
      </div>
      <div className="relative h-full min-h-0 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12 lg:mb-16 text-center"
        >
          <h1
            className="text-white mb-3 md:mb-4 text-lg md:text-xl lg:text-[21pt]"
            style={{
              fontWeight: 400,
              fontFamily: "DIN Arabic, sans-serif",
            }}
          >
            {t.experience.title}
          </h1>
          <p
            className="text-white/80 text-sm md:text-base lg:text-lg"
            style={{ fontWeight: 300 }}
          >
            {t.experience.subtitle}
          </p>
        </motion.div>
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <ExperienceCard
            title={t.experience.teamSkills}
            items={teamSkills}
            delay={0.2}
          />
          <ExperienceCard
            title={t.experience.domainExperience}
            items={domainExperience}
            delay={0.3}
          />
        </div>
      </div>
    </div>
  );
}
