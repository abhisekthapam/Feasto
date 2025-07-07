import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext();

/**
 * Lenis Context Provider for smooth scrolling throughout the app
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Object} props.options - Lenis configuration options
 */
export const LenisProvider = ({ children, options = {} }) => {
  const lenisRef = useRef();

  const defaultOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    ...options
  };

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis(defaultOptions);

    // Animation loop for Lenis
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Optional: Listen to scroll events
    lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // Custom scroll event handling can be added here
    });

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Utility functions
  const scrollTo = (target, options = {}) => {
    lenisRef.current?.scrollTo(target, options);
  };

  const start = () => {
    lenisRef.current?.start();
  };

  const stop = () => {
    lenisRef.current?.stop();
  };

  const contextValue = {
    lenis: lenisRef.current,
    scrollTo,
    start,
    stop
  };

  return (
    <LenisContext.Provider value={contextValue}>
      {children}
    </LenisContext.Provider>
  );
};

/**
 * Hook to access Lenis context
 * @returns {Object} - Lenis instance and utility functions
 */
export const useLenisContext = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenisContext must be used within a LenisProvider');
  }
  return context;
};

export default LenisProvider;
