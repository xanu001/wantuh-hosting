
import React from "react";
import clsx from "clsx";
import Particles from "../ui/particles";
import Navbar from "@/components/custom/nav"
// import { MoveDown, SquareArrowOutUpRight } from "lucide_react"

export default function FUIDarkHeroSection() {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <div className="relative min-h-[60vh]">
      <Navbar/>
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
      <Container className="relative  py-20 sm:pb-24 sm:pt-36">
        <img
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
          className="absolute z-2 -top-0 left-10"
        />

        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-geist text-5xl font-normal  tracking-tighter  bg-gradient-to-r from-zinc-100 via-stone-200/50 to-purple-200/70 bg-clip-text  text-transparent sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span>The new
            way to host bots.
          </h1>
          <div className="mt-6 space-y-6 font-geist text-md sm:text-xl tracking-tight text-gray-500">
            <p>
              We value your data & your time. So while you go with the best, we do too. We're up day and night keeping your servers well maintained and healthy.
            </p>
            <p>
              At wantuh hosting, we provide top quality discord bot hosting for less than our competitors.
            </p>
          </div>
          <div className="flex gap-6">
          <button className="rounded-lg gap-2 mt-4 w-full md:w-40 font-geist tracking-tighter text-center text-md bg-gradient-to-br from-zinc-900 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center ">
  Get Started
  {/* <MoveDown size={16}/> */}
</button>
<button className="rounded-lg gap-2 mt-4 w-full md:w-40 font-geist tracking-tighter text-center text-md bg-gradient-to-br from-blue-400 to-blue-1200 px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-blue-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-100/70 flex items-center justify-center ">
  Contact us
  {/* <SquareArrowOutUpRight size={16}/> */}
</button>

          </div>
        
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Providing for", "25+"],
              ["Location", "United Kingdom"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-gray-300">{name}</dt>
                <dd className="mt-0.5 text-2xl font-normal font-geist tracking-tight text-gray-300">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}



export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}


  

      
      