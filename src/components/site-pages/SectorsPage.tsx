import { motion } from 'motion/react';

export default function SectorsPage() {
  return (
    <div className="w-full h-full relative overflow-hidden flex">
      {/* Left Half - Cyan/Light Blue Background */}
      <div className="w-1/2 h-full relative flex items-center justify-center px-16" style={{ backgroundColor: '#00C3FF' }}>
        <div className="relative z-10 max-w-xl flex flex-col items-center text-center">
          {/* SINAN DYNAMICS Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col items-center">
              {/* Triangle Icon */}
              <div className="mb-4">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 10 L50 35 L40 30 L30 35 Z" fill="white"/>
                  <path d="M30 35 L40 60 L50 35" stroke="white" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              {/* Text */}
              <h1 className="text-white text-4xl tracking-wider mb-1">SINAN</h1>
              <h2 className="text-white text-2xl tracking-widest">DYNAMICS</h2>
            </div>
          </motion.div>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xl leading-relaxed"
          >
            Next-generation unmanned aerial systems for surveillance, delivery, and defense operations.
          </motion.p>
        </div>
      </div>

      {/* Right Half - White/Light Gray Background */}
      <div className="w-1/2 h-full bg-gray-50 relative flex items-center justify-center px-16">
        {/* Background Drone Image - Faded */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simple drone illustration */}
            <rect x="180" y="140" width="40" height="20" fill="#00C3FF" rx="4"/>
            <ellipse cx="160" cy="150" rx="30" ry="8" fill="#00C3FF" opacity="0.5"/>
            <ellipse cx="240" cy="150" rx="30" ry="8" fill="#00C3FF" opacity="0.5"/>
            <path d="M200 140 L200 100 L210 90" stroke="#00C3FF" strokeWidth="2"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-xl">
          {/* Top Description */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-cyan-500 text-base leading-relaxed mb-12"
          >
            Operating as an integrated production line specializing in unmanned aerial systems and autonomous systems, the company offers a wide range of products, including UAVs for various applications and anti-UAV capabilities.
          </motion.p>

          {/* Key Objectives Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-gray-400 text-sm mb-6">Key Objectives</h3>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                • Oman-based builder of advanced autonomy and defense systems.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                • Manufacture and integrates UAVs, counter-UAV, and secure AI platforms.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                • Manufacturing footprint: defense products and docking stations, built and supported locally.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                • Expert team: licensed, experienced pilots; AI developers; drone-maintenance engineers; data scientists; IoT and defense manufacturing specialists.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                • Core applications: land/sea border surveillance, building fire-rescue, search & rescue, critical-infrastructure inspection, and secure logistics
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}