import { useEffect, useState, useRef } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({ target, duration = 1000, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => setMounted(true), []);
  
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStart(true),
      {threshold: 0.4}
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (!start) return;

    const timeout = setTimeout(() => {
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        setCount(Math.round(eased * target));

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setCount(target); // hard stop, no overshoot
        }
      }

      requestAnimationFrame(update);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, mounted, target, duration, delay]);

  return <span ref={ref}>{count}</span>;
}

export default CountUp;
