import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={twMerge(shouldOrbit === true && "animate-spin")}
          style={{
            animationDuration: orbitDuration,
          }}
        >
          <div
            className="/*border border-red-500*/ /*animate-spin [animation-duration:30s]*/ /*outline outline-1 outline-red-500*/ flex items-start justify-start"
            style={{
              transform: `rotate(${rotation}deg)`,
              height: `${size}px`,
              width: `${size}px`,
            }}
          >
            <div
              className={twMerge(shouldSpin === true && "animate-spin")}
              style={{
                animationDuration: spinDuration,
              }}
            >
              <div
                className="/*border border-red-500*/ inline-flex /*animate-spin [animation-duration:5s]*/ /*outline outline-1 outline-red-500*/"
                style={{
                  transform: `rotate(${rotation * -1}deg)`,
                }}
              >
                {/* <StarIcon className="size-28 text-emerald-300" /> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
