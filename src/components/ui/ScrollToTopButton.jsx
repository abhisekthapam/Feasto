import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from '../common/SmoothScrollLink';

/**
 * Scroll to Top Button with smooth animation
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.showAfter - Show button after scrolling this many pixels
 */
export const ScrollToTopButton = ({ 
  className = '', 
  showAfter = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const handleClick = () => {
    scrollToTop({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  };

  return (
    <button
      className={`
        fixed bottom-6 right-6 z-40
        w-12 h-12 bg-primary hover:bg-yellow-400
        text-black rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        flex items-center justify-center
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        ${className}
      `}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
