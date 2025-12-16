"use client";

import { useEffect, useState, useRef } from "react";

export default function FadeIn({ target, duration=1000, delay=0, threshold=0.4, direction="down"}) {
    const [isVisible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const ref = useRef(null);

    const directionMap = {
        up: 'translate-y-10',
        down: '-translate-y-0',
        left: 'translate-x-0',
        right: '-translate-x-10',
    }

    const directionMapReverse = {
        down: 'translate-y-10',
        left: '-translate-x-10'
    }

    useEffect(() => setMounted(true), []);

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
    const classes = `transition-all ease-out ${isVisible ? `${directionMap[direction]}` : `opacity-0 ${directionMapReverse[direction]}`}`

    return (
        <div
            ref={ref}
            className={classes}
            style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
        >
            {target}
        </div>
    );
};

















