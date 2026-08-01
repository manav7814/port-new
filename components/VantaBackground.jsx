"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaEffectRef = useRef(null);
  const myRef = useRef(null);

  useEffect(() => {
    const initVanta = async () => {
      try {
        window.THREE = THREE;
        
        const vantaModule = await import("vanta/dist/vanta.birds.min");
        const BIRDS = vantaModule.default || (window.VANTA && window.VANTA.BIRDS);
        
        if (!BIRDS) {
          console.error("Vanta BIRDS module not found");
          return;
        }

        if (!vantaEffectRef.current && myRef.current) {
          vantaEffectRef.current = BIRDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            birdSize: 1.50,
            backgroundColor: 0x000000,
            backgroundAlpha: 0,
            color1: 0xa855f7,
            color2: 0x3b82f6,
            quantity: 4.00
          });
        }
      } catch (error) {
        console.error("Vanta initialization failed:", error);
      }
    };
    
    initVanta();

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={myRef}
      className="fixed inset-0 z-[1] h-full w-full pointer-events-none"
      style={{ minHeight: '100vh', width: '100vw' }}
    ></div>
  );
};

export default VantaBackground;
