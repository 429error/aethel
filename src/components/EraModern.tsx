import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

export const EraModern = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="era-section w-[100vw] h-full flex-shrink-0 flex items-center justify-center p-4 md:p-8 relative"
    >
      {/* Mouse Follower Glow */}
      <div 
        className="absolute pointer-events-none w-96 h-96 bg-white/5 rounded-full blur-[100px] transition-opacity duration-500"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-6 gap-6 h-[85vh] z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:col-span-8 md:row-span-3 era-surface p-10 flex flex-col justify-center relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
            The Modern Web
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
            Minimalism, dark mode, bento grids, and subtle interactions. The web has matured into a sleek, focused experience.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 md:row-span-3 era-surface p-8 flex flex-col items-center justify-center gap-6 group"
        >
          <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-white/90">Performance</h3>
            <p className="text-sm text-white/50 mt-2">Lightning fast delivery</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 md:row-span-3 era-surface p-8 flex flex-col justify-between group"
        >
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-white/80">⌘</span>
            </div>
            <span className="text-xs font-mono text-white/40 px-2 py-1 rounded-full bg-white/5">v14.0</span>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white/90 mb-2">Command Center</h3>
            <button className="era-button w-full py-3 mt-4 text-sm font-medium">
              Initialize System
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-8 md:row-span-3 era-surface p-8 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Architecture</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['Components', 'State', 'Animations'].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
