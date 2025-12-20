"use client";

import { useEffect, useState, useRef } from "react";

export default function FadeIn({ target, duration=1000, delay="medium", threshold=0.4, direction="down", index, trigger }) {
    const [isVisible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef(null);

    const directionMap = {
        down: '-translate-y-0',
        left: 'translate-x-0',
    }

    const directionMapReverse = {
        down: 'translate-y-10',
        left: '-translate-x-10'
    }

    const delayMap = {
        none: 'sm:[--base-delay:0ms]',
        short: 'sm:[--base-delay:400ms]',
        medium: 'sm:[--base-delay:600ms]',
        high: 'sm:[--base-delay:1000ms]'
    }

    useEffect(() => setMounted(true), []);
    useEffect(() => setIsAnimating(trigger), [trigger])

    useEffect(() => {
        if (!mounted) return;

        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true), 
            {threshold: threshold}
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [mounted]);

    // When `isVisible` is true -> opacity-100 and translate-y-0
    // Otherwise -> opacity-0 and slightly translated down (translate-y-10)
    const classes = `
        transition-all ease-out
        [--base-delay:0ms]              
        ${delayMap[delay]}

        ${isVisible && isAnimating
            ? directionMap[direction]
            : `opacity-0 ${directionMapReverse[direction]}`
        }   
    `;

    return (
        <div
            ref={ref}
            className={classes}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: 'calc(var(--i) * var(--base-delay))',
                '--i': index,
            }}
        >
            {target}
        </div>
    );
    };

















