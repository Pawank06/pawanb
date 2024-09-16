'use client'

import React, {useRef } from 'react'
import { AnimationControls, motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils';

const TabAnimation = () => {
  const controls = useAnimation();

  const handleMouseLeave = () => {
    controls.start({ opacity: 0 });
  };

  return (
    <div className=' h-[20rem] md:h-[34rem] mx-auto flex items-center justify-center border border-stone-800 bg-stone-950 rounded-lg mb-10'>
    <div className='flex items-center justify-center'>
      <div
        onMouseLeave={handleMouseLeave}
        className='relative border-2 mx-aut bg-stone-900 border-stone-800 px-1 py-1 rounded-full flex  items-center font-semibold'
      >
        <Tab controls={controls}>PRICING</Tab>
        <Tab controls={controls} className='hidden md:block'>PRODUCTS</Tab>
        <Tab controls={controls}>FEATURES</Tab>
        <Tab controls={controls}>DOCS</Tab>
        <Tab controls={controls} >BLOG</Tab>
        <Cursor controls={controls} />
      </div>
    </div>
    </div>
  )
}

export default TabAnimation;

const Tab = ({ children, controls, className }: { children: React.ReactNode, controls: AnimationControls, className?:string }) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;

    const { width } = ref.current.getBoundingClientRect();

    controls.start({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn('relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-sm', className)}
    >
      {children}
    </div>
  );
};

const Cursor = ({ controls }: { controls: AnimationControls }) => {
  return (
    <motion.div
      animate={controls}
      className='absolute z-0 h-7 rounded-full bg-black  md:h-12'
    />
  );
};