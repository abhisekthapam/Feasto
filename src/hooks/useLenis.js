import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook for implementing Lenis smooth scrolling
 * @param {Object} options - Lenis configuration options
 * @returns {Object} - Lenis instance and utility functions
 */
export const useLenis = (options = {}) => {
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

    // Debug logs (remove in production)
    lenisRef.current.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress });
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

  return {
    lenis: lenisRef.current,
    scrollTo,
    start,
    stop
  };
};

export default useLenis;
