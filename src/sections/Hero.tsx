"use client";
import memojiImage from "@/assets/images/a-hacker-with-a-laptop-and-a-dashing-hoodie.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Typewriter from "typewriter-effect";
import { BsArrow90DegRight } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <>
      <div
        className="py-32 md:py-48 lg:py-48 relative z-0 overflow-x-clip"
        id="home"
      >
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          {/* 
            size: number;
            rotation: number;
            orbitDuration?: string;
            shouldOrbit?: boolean;
            shouldSpin?: boolean;
            spinDuration?: string; 
          */}

          <HeroOrbit
            size={430}
            rotation={-14}
            shouldOrbit
            orbitDuration="30s"
            shouldSpin
            spinDuration="3s"
          >
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={440}
            rotation={79}
            shouldOrbit
            orbitDuration="32s"
            shouldSpin
            spinDuration="3s"
          >
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <div className="size-2 rounded-full text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={178}
            shouldOrbit
            orbitDuration="36s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={550}
            rotation={20}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="40s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="size-2 rounded-full text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={710}
            rotation={144}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="3s"
          >
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className="size-3 rounded-full text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={800}
            rotation={-72}
            shouldOrbit
            orbitDuration="48s"
            shouldSpin
            spinDuration="6s"
          >
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <Image src={memojiImage} alt="My image" className="size-[100px]" />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">
                Available for building exceptional user experience
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-calistoga text-3xl md:text-4xl text-center mt-8 tracking-wider">
              Ahoy! I&apos;m <span className="text-green-500">Chirag B.</span>
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg  gap-2 w-full">
              I am dedicated in building exceptional digital solutions using
              cutting-edge web technologies, focusing on:
              <Typewriter
                options={{
                  strings: [
                    '<span style="color: #F5F5F5;font-size:18px">innovative web applications.</span>',
                    '<span style="color: #C7FFD8;font-size:18px">scalable and responsive interfaces.</span>',
                    '<span style="color: #FEF9D9;font-size:18px">secure and efficient backend systems.</span>',
                    '<span style="color: #D7C3F1;font-size:18px">optimized data management solutions.</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50,
                }}
              />
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a
              href="/Chirag_Bhandakkar_Resume.pdf"
              download="Chirag_Bhandakkar_Resume.pdf"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-20 cursor-pointer"
            >
              <span className="font-semibold">Hire Me &lt;/&gt;</span>
              {/* <BsArrow90DegRight className="size-4" /> */}
            </a>
            <a
              href="https://www.linkedin.com/in/chiraagb/"
              target="_blank"
              className="inline-flex items-center gap-3 border border-white bg-white text-gray-900 h-12 leading-[90px] px-6 rounded-xl cursor-pointer z-20"
            >
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
