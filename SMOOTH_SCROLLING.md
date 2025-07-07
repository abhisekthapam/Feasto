# Lenis Smooth Scrolling Implementation

This project implements smooth scrolling throughout the website using Lenis library for optimal performance and user experience.

## 🚀 Features

- **Smooth Scrolling**: Buttery smooth scrolling with easing animations
- **Performance Optimized**: Uses requestAnimationFrame for 60fps animations
- **Mobile Friendly**: Configurable touch behavior
- **Accessibility**: Maintains keyboard navigation and screen reader support
- **Scroll to Top**: Animated scroll-to-top button with show/hide functionality

## 🛠️ Implementation

### 1. Core Setup

The smooth scrolling is implemented using three main components:

#### LenisProvider (Context)
```jsx
import LenisProvider from './context/LenisContext';

<LenisProvider>
  <App />
</LenisProvider>
```

#### Lenis Hook
```jsx
import { useLenisContext } from './context/LenisContext';

const { scrollTo, start, stop } = useLenisContext();
```

### 2. Smooth Scroll Components

#### SmoothScrollLink Component
```jsx
import { SmoothScrollLink } from './components/common/SmoothScrollLink';

<SmoothScrollLink
  to="#section-id"
  offset={-80}
  duration={1.2}
  className="btn-primary"
>
  Scroll to Section
</SmoothScrollLink>
```

#### useSmoothScroll Hook
```jsx
import { useSmoothScroll } from './components/common/SmoothScrollLink';

const { scrollToTop, scrollToElement, scrollToBottom } = useSmoothScroll();

// Programmatic scrolling
scrollToElement('#hero', { duration: 1.5 });
scrollToTop({ duration: 2 });
```

### 3. Configuration Options

Default Lenis configuration:
```jsx
{
  duration: 1.2,                    // Animation duration in seconds
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  direction: 'vertical',            // Scroll direction
  gestureDirection: 'vertical',     // Gesture direction
  smooth: true,                     // Enable smooth scrolling
  mouseMultiplier: 1,               // Mouse wheel sensitivity
  smoothTouch: false,               // Smooth scrolling on touch devices
  touchMultiplier: 2,               // Touch sensitivity
  infinite: false                   // Infinite scrolling
}
```

## 📱 Responsive Design

The implementation includes responsive considerations:

- **Desktop**: Full smooth scrolling with mouse wheel and keyboard
- **Mobile**: Optimized touch behavior with `smoothTouch: false` for performance
- **Tablet**: Balanced configuration for touch and precision

## 🎯 Usage Examples

### Basic Scroll to Section
```jsx
<SmoothScrollLink to="#about">
  Learn More
</SmoothScrollLink>
```

### Programmatic Scrolling
```jsx
const handleClick = () => {
  scrollToElement('#contact', {
    offset: -100,
    duration: 1.8,
    easing: (t) => t * t * (3 - 2 * t) // Custom easing
  });
};
```

### Conditional Scrolling
```jsx
const { scrollTo } = useLenisContext();

useEffect(() => {
  if (shouldScrollToTop) {
    scrollTo(0, { duration: 1.5 });
  }
}, [shouldScrollToTop]);
```

## ⚙️ Customization

### Custom Easing Functions
```jsx
// Ease out cubic
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Ease in out quart
const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

// Custom bounce
const bounce = (t) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (t < 1 / d1) return n1 * t * t;
  if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
  if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
  return n1 * (t -= 2.625 / d1) * t + 0.984375;
};
```

### Performance Tips

1. **Disable on Low-End Devices**:
```jsx
const shouldUseSmooth = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
```

2. **Optimize for Touch Devices**:
```jsx
const isTouchDevice = 'ontouchstart' in window;
const smoothTouch = !isTouchDevice; // Disable on touch for performance
```

3. **Conditional Loading**:
```jsx
// Only load Lenis on larger screens
const shouldLoadLenis = window.innerWidth > 768;
```

## 🔧 Troubleshooting

### Common Issues

1. **Scroll not working**: Ensure LenisProvider wraps your app
2. **Performance issues**: Disable smoothTouch on mobile
3. **Layout shifts**: Use proper CSS for fixed positioning
4. **Keyboard navigation**: Lenis preserves native keyboard scrolling

### Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ IE 11 (with polyfills)

## 📊 Performance Metrics

Expected performance improvements:
- 60fps smooth scrolling
- Reduced jank and stuttering
- Better user engagement
- Improved scroll-based animations

## 🎨 Integration with Animations

The smooth scrolling works perfectly with:
- CSS transitions and animations
- GSAP ScrollTrigger
- Framer Motion scroll-based animations
- Intersection Observer API

```jsx
// Example with Intersection Observer
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animations
      }
    });
  });
  
  return () => observer.disconnect();
}, []);
```
