"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Particles from "../ui/particles";
import { BorderBeam } from "../ui/border-beam";
import HyperText from "../ui/hyper-text";
import RetroGrid from "../ui/retro-grid";

export default function FUIBentoGridDark() {
  return (
    <div className="pt-32 container mx-auto ">
             <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
      <h1 className="font-geistMono tracking-tight text-3xl md:text-5xl ">
      <HyperText
      className=""
      text="features"
    />
    
      </h1>
      
      <p className="max-w-3xl text-2xl/8 font-medium tracking-tight mt-2">
        
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2 ">
        <BentoCard
          eyebrow="Next generation"
          title="Powerful Servers"
          description="A powerful server for your bot will make all the difference. We strive to beat competitiors, thats why we are cheaper and provide better service."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/ghyfFEStl6BNusZl0ZQd5r7JpM.png)] object-fill" />
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] object-fill" />
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="absolute  inset-0 -top-20 -left-60 bg-[url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)] object-scale-down" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] object-contain" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
        
          eyebrow="Limitless"
          title="Sell globally"
          description="PerkAI helps you sell in locations currently under international embargo."
          graphic={
            <div className="absolute inset-0 -top-44 -left-60 bg-[url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)] object-contain" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
}
export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]   shadow-sm ring-1 ring-black/5",
        "data-[dark]:bg-gray-800 data-[dark]:ring-white/15"
      )}
    >
              <BorderBeam colorFrom="#A020F0" colorTo=""/>
      <div className="relative h-[29rem] shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25" />
        )}
      </div>
      <div className="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl">
        <h1>{eyebrow}</h1>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight ">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 dark:text-gray-300 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}