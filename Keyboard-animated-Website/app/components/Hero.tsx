'use client';

import { motion } from 'framer-motion';

const IMAGES = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
];

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
            {/* Background Moving Images */}
            <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-20 overflow-hidden flex flex-col gap-6 justify-center -rotate-[8deg] scale-125 pointer-events-none">
                {/* Row 1 */}
                <motion.div 
                    className="flex gap-6 min-w-max"
                    animate={{ x: [0, -1200] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                >
                    {[...IMAGES, ...IMAGES].map((src, idx) => (
                        <div key={`r1-${idx}`} className="w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
                            <img src={src} alt="Project background" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 */}
                <motion.div 
                    className="flex gap-6 min-w-max"
                    animate={{ x: [-1200, 0] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                >
                    {[...IMAGES].reverse().concat([...IMAGES].reverse()).map((src, idx) => (
                        <div key={`r2-${idx}`} className="w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
                            <img src={src} alt="Project background" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </motion.div>

                {/* Row 3 */}
                <motion.div 
                    className="flex gap-6 min-w-max"
                    animate={{ x: [0, -1200] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                    {[...IMAGES, ...IMAGES].map((src, idx) => (
                        <div key={`r3-${idx}`} className="w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
                            <img src={src} alt="Project background" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Foreground Content */}
            <div className="text-center z-10 px-4 relative backdrop-blur-sm p-12 md:p-16 rounded-[3rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/40 shadow-2xl">
                <motion.h1 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white/95 mb-6 drop-shadow-xl"
                >
                    RANA MUZAKIR
                </motion.h1>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-xl md:text-3xl font-light text-slate-700 dark:text-white/80 tracking-wide mb-12"
                >
                    Creative Web Developer
                </motion.p>
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-6"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-500 dark:via-white/50 to-transparent animate-pulse"></div>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 uppercase tracking-[0.4em] font-semibold">Scroll to explore</p>
                </motion.div>
            </div>
        </section>
    );
}
