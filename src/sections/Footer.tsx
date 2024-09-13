import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    url: `https://github.com/chiraagb`,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/chiraagb/",
  },
  {
    title: "Leetcode",
    url: "https://leetcode.com/u/chiraagb/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
        [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10
        animate-pulse"
      ></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40 animate-fade-in">
            &copy; 2024 All Rights Reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks?.map((link, index) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 cursor-pointer 
                hover:text-white transition-all duration-300 
                animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-semibold relative overflow-hidden">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.title}
                  </span>
                  <span className="inline-block absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    {link.title}
                  </span>
                </span>
                <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
