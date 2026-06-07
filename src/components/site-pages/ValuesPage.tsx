import { motion } from "motion/react";
import { Settings, TrendingUp, Brain } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SINAN_SITE_PX } from "@/components/site/sinan-app/constants";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

function ValueCard({
  icon: Icon,
  title,
  description,
  delay,
  isInView,
}: ValueCardProps) {
  return (
    <motion.div
      className="relative p-3 sm:p-4 md:p-6 lg:p-9 xl:p-10 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center h-full min-h-0 md:min-h-[220px] lg:min-h-[260px] xl:min-h-[280px] bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/55 hover:border-white/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      initial={false}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <div className="text-white">
        <div className="mb-2 sm:mb-4 md:mb-6 lg:mb-7 flex justify-center">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[4.5rem] xl:h-[4.5rem] stroke-[1.5] text-white" />
        </div>
        <h3
          className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2 lg:mb-3"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed lg:leading-relaxed text-white/90"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

type ValuesPageProps = { isInView?: boolean };

export default function ValuesPage({ isInView = false }: ValuesPageProps) {
  const { t } = useLanguage();
  const values = [
    {
      icon: Settings,
      title: t.values.sustainability,
      description: t.values.sustainabilityDesc,
    },
    {
      icon: TrendingUp,
      title: t.values.economic,
      description: t.values.economicDesc,
    },
    {
      icon: Brain,
      title: t.values.knowledge,
      description: t.values.knowledgeDesc,
    },
  ];

  return (
    <div className="w-full h-full min-h-[calc(100vh-50px)] flex overflow-hidden relative">
      {/* Background - keep current */}
      <img
        src="/ourvalue.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* موبايل: لا سكرول، محتوى كامل | ديسكتوب: محتوى في المنتصف */}
      <div className={`relative z-10 flex flex-1 min-h-0 overflow-hidden md:overflow-y-visible items-center justify-center ${SINAN_SITE_PX} py-3 sm:py-6 md:py-8`}>
        <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl flex flex-col items-center gap-2 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14 flex-1 min-h-0">
          {/* العنوان */}
          <motion.div
            className="text-center"
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1
              className="text-white font-bold text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-[2.75rem]"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.values.title}
            </h1>
          </motion.div>
          {/* ثلاث حاويات — موبايل: مضغوط | ديسكتوب: موحد الطول */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-12 items-stretch flex-1 min-h-0 lg:flex-none">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={0.15 + index * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
