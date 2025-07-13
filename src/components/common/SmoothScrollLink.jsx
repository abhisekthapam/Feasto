import React from 'react';

/**
 * Smooth Scroll Link Component
 * @param {Object} props - Component props
 * @param {string} props.to - Target element ID or pixel value
 * @param {number} props.offset - Scroll offset (default: -80px for fixed navbar)
 * @param {string} props.className - CSS classes
 * @param {React.ReactNode} props.children - Child components
 * @param {Function} props.onClick - Additional click handler
 */
export const SmoothScrollLink = ({
  to,
  offset = -80,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // Execute custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Perform smooth scroll
    const target = document.getElementById(to);
    if (target) {
      window.scrollTo({
        top: target.offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

/**
 * Native smooth scroll hook
 * @returns {Object} - Scroll utilities
 */
export const useSmoothScroll = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  const scrollToElement = (elementId, offset = -80) => {
    const target = document.getElementById(elementId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };
  return { scrollToTop, scrollToBottom, scrollToElement };
};

export default SmoothScrollLink;
