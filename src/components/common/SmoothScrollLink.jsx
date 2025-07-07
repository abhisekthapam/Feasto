import React from 'react';
import { useLenisContext } from '../../context/LenisContext';

/**
 * Smooth Scroll Link Component using Lenis
 * @param {Object} props - Component props
 * @param {string} props.to - Target element ID or pixel value
 * @param {number} props.offset - Scroll offset (default: -80px for fixed navbar)
 * @param {number} props.duration - Animation duration in seconds
 * @param {Function} props.easing - Easing function
 * @param {string} props.className - CSS classes
 * @param {React.ReactNode} props.children - Child components
 * @param {Function} props.onClick - Additional click handler
 */
export const SmoothScrollLink = ({
  to,
  offset = -80,
  duration = 1.2,
  easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  className = '',
  children,
  onClick,
  ...props
}) => {
  const { scrollTo } = useLenisContext();

  const handleClick = (e) => {
    e.preventDefault();
    
    // Execute custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Perform smooth scroll
    scrollTo(to, {
      offset,
      duration,
      easing
    });
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Hook for programmatic smooth scrolling
 * @returns {Object} - Scroll utilities
 */
export const useSmoothScroll = () => {
  const { scrollTo, start, stop } = useLenisContext();

  const scrollToTop = (options = {}) => {
    scrollTo(0, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    });
  };

  const scrollToBottom = (options = {}) => {
    scrollTo(document.body.scrollHeight, {
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    });
  };

  const scrollToElement = (elementId, options = {}) => {
    scrollTo(elementId, {
      offset: -80,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    });
  };

  return {
    scrollTo,
    scrollToTop,
    scrollToBottom,
    scrollToElement,
    start,
    stop
  };
};

export default SmoothScrollLink;
