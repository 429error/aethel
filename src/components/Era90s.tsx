import React from 'react';
import { motion } from 'motion/react';

export const Era90s = () => {
  return (
    <section className="era-section w-[100vw] h-full flex-shrink-0 flex items-center justify-center p-4 md:p-8 relative">
      <div className="w-full max-w-5xl h-[80vh] era-surface p-1 flex flex-col">
        {/* Window Header */}
        <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center font-bold text-sm select-none">
          <span>Aethel_Web_History.exe</span>
          <div className="flex gap-1">
            <button className="era-button w-5 h-5 flex items-center justify-center text-[10px] leading-none">_</button>
            <button className="era-button w-5 h-5 flex items-center justify-center text-[10px] leading-none">□</button>
            <button className="era-button w-5 h-5 flex items-center justify-center text-[10px] leading-none">X</button>
          </div>
        </div>
        
        {/* Window Content - Bento Grid */}
        <div className="flex-1 p-4 bg-[#c0c0c0] grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-3 gap-4 overflow-y-auto overflow-x-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="era-surface md:col-span-2 md:row-span-2 p-6 flex flex-col justify-center items-center text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the 90s</h1>
            <p className="text-lg md:text-xl max-w-md">The era of dial-up, table layouts, and under construction GIFs.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="era-surface p-4 flex flex-col items-center justify-center gap-2 cursor-pointer active:translate-y-[1px]"
          >
            <div className="w-16 h-16 bg-[#008080] era-surface flex items-center justify-center">
              <span className="text-3xl">🌐</span>
            </div>
            <span className="font-bold">Netscape</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="era-surface p-4 flex flex-col items-center justify-center gap-2 cursor-pointer active:translate-y-[1px]"
          >
            <div className="w-16 h-16 bg-[#008080] era-surface flex items-center justify-center">
              <span className="text-3xl">📁</span>
            </div>
            <span className="font-bold">My Documents</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="era-surface md:col-span-3 p-2 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <button className="era-button px-4 py-2 font-bold flex items-center gap-2 text-lg">
              <span className="text-red-600">⊞</span> Start
            </button>
            <div className="era-surface px-4 py-2 inset-shadow font-bold bg-white/20">
              12:00 PM
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
