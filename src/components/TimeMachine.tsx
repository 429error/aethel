import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimeMachineProps {
  children: React.ReactNode;
  onEraChange: (era: string) => void;
}

export const TimeMachine: React.FC<TimeMachineProps> = ({ children, onEraChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !containerRef.current) return;

    const sections = gsap.utils.toArray('.era-section') as HTMLElement[];
    if (sections.length === 0) return;

    // Calculate total scroll distance based on number of sections
    // We want each section to take up exactly 100vw
    const totalWidth = sections.length * 100;

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        scrub: 1,
        // The end value determines how long the scroll lasts.
        // Making it proportional to the number of sections ensures a consistent scroll speed.
        end: () => "+=" + wrapperRef.current!.offsetWidth * (sections.length - 1),
        onUpdate: (self) => {
          const progress = self.progress;
          // Split progress into equal chunks for each era
          if (progress < 0.33) {
            onEraChange('90s');
          } else if (progress < 0.66) {
            onEraChange('y2k');
          } else {
            onEraChange('modern');
          }
        }
      }
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [onEraChange]);

  return (
    <div ref={wrapperRef} className="overflow-hidden w-full h-screen bg-transparent">
      {/* The container is wide enough to hold all sections side-by-side */}
      <div ref={containerRef} className="flex h-full w-[300vw]">
        {children}
      </div>
    </div>
  );
};
