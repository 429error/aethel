import { useState } from 'react';
import { TimeMachine } from './components/TimeMachine';
import { useThemeEngine } from './components/ThemeEngine';
import { Era90s } from './components/Era90s';
import { EraY2K } from './components/EraY2K';
import { EraModern } from './components/EraModern';

export default function App() {
  const [era, setEra] = useState('90s');
  useThemeEngine(era);

  return (
    <main className="w-full bg-transparent">
      {/* Fixed Header / Nav */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
        <div className="font-bold text-2xl tracking-tighter transition-colors duration-1000" style={{ color: 'var(--text-color)' }}>
          AETHEL.
        </div>
        <div className="flex gap-2 transition-colors duration-1000" style={{ color: 'var(--text-color)' }}>
          {['90s', 'y2k', 'modern'].map((e) => (
            <div 
              key={e} 
              className={`text-xs font-mono uppercase px-3 py-1 border rounded-full transition-all duration-500 ${
                era === e ? 'opacity-100 font-bold' : 'opacity-50'
              }`}
              style={{ 
                borderColor: 'var(--text-color)', 
                backgroundColor: era === e ? 'var(--text-color)' : 'transparent', 
                color: era === e ? 'var(--bg-color)' : 'var(--text-color)' 
              }}
            >
              {e}
            </div>
          ))}
        </div>
      </header>

      <TimeMachine onEraChange={setEra}>
        <Era90s />
        <EraY2K />
        <EraModern />
      </TimeMachine>
    </main>
  );
}
