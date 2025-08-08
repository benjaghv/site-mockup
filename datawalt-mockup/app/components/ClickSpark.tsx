'use client';

import { useEffect, useState, useCallback } from 'react';

interface Spark {
  id: string;
  x: number;
  y: number;
  angle: number;
  scale: number;
}

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    // Use clientX and clientY directly for viewport coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Create multiple sparks at click position
    const newSparks: Spark[] = [];
    for (let i = 0; i < 8; i++) {
      newSparks.push({
        id: `${Date.now()}-${i}-${Math.random()}`,
        x,
        y,
        angle: (360 / 8) * i + Math.random() * 20 - 10, // Add some randomness
        scale: Math.random() * 0.4 + 0.6,
      });
    }

    setSparks(prev => [...prev, ...newSparks]);

    // Remove sparks after animation
    setTimeout(() => {
      setSparks(prev => prev.filter(spark => !newSparks.some(ns => ns.id === spark.id)));
    }, 800);
  }, []);

  useEffect(() => {
    // Add event listener to document
    document.addEventListener('click', handleClick, true); // Use capture phase
    return () => document.removeEventListener('click', handleClick, true);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="absolute"
          style={{
            left: spark.x,
            top: spark.y,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <div 
            className="animate-spark-particle"
            style={{
              transform: `rotate(${spark.angle}deg) scale(${spark.scale})`,
              '--spark-angle': `${spark.angle}deg`,
            } as React.CSSProperties}
          >
            <div className="w-1.5 h-1.5 rounded-full shadow-sm" 
                 style={{ backgroundColor: 'var(--datawalt-red)' }} />
          </div>
        </div>
      ))}
    </div>
  );
}