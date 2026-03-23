import React from 'react';
import { motion } from 'motion/react';

export const EraY2K = () => {
  return (
    <section className="era-section w-[100vw] h-full flex-shrink-0 flex items-center justify-center p-4 md:p-8 relative">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-6 gap-6 h-[80vh]">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:col-span-12 md:row-span-2 era-surface p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
          {/* Glossy highlight */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl pointer-events-none"></div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#006064] mb-4 drop-shadow-sm">The Y2K Era</h2>
          <p className="text-xl text-[#00838f]">Frutiger Aero, glossy buttons, and boundless optimism.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:col-span-4 md:row-span-4 era-surface p-6 flex flex-col items-center justify-center gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#b2ebf2] to-[#00bcd4] shadow-inner flex items-center justify-center border-4 border-white/50">
            <span className="text-5xl">🫧</span>
          </div>
          <button className="era-button px-8 py-3 w-full text-lg">Connect</button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:col-span-8 md:row-span-4 era-surface p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
          
          <div className="space-y-4 relative z-10">
            <h3 className="text-2xl font-bold text-[#006064]">Downloading Future...</h3>
            
            {/* Glossy Progress Bar */}
            <div className="w-full h-8 bg-white/50 rounded-full p-1 shadow-inner border border-white/60">
              <div className="h-full w-[75%] bg-gradient-to-r from-[#4dd0e1] to-[#00acc1] rounded-full relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/40 rounded-t-full"></div>
              </div>
            </div>
            <p className="text-right text-sm font-bold text-[#00838f]">75% Complete</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 relative z-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="era-surface p-4 text-center rounded-xl bg-white/30 border border-white/50 shadow-sm hover:bg-white/50 transition-colors cursor-pointer">
                <span className="text-3xl block mb-2">🎵</span>
                <span className="text-sm font-bold text-[#006064]">Track 0{i}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
