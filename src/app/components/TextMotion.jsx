'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Functions for animate texts.
export function TextAnimate({firstText, lastText}) {
    return (
      <div>
        <motion.h1 className='text-5xl md:text-6xl font-bold text-white mb-6'
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.6, ease:"easeOut"}}
        >
            {firstText}
        </motion.h1>

        <motion.p className='text-xl text-gray-200 mb-8 max-w-2xl mx-auto'
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.9, ease:"easeOut", delay:0.7}}
        >
            {lastText}
        </motion.p>
      </div>
    );
}
