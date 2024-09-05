"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="container">
        <SectionHeader
          title="My Experience"
          eyebrow="A big thanks to my past employers"
          description="See what I've been up to in the past few years."
        />
        <div className="mt-16">
          <VerticalTimeline lineColor="#9ca3af">
            {experiencesData?.map((item, index) => {
              const { ref, inView } = useInView({
                threshold: 0,
              });
              return (
                <div
                  key={index}
                  ref={ref}
                  className="relative vertical-timeline-element"
                >
                  <VerticalTimelineElement
                    contentStyle={{
                      padding: "0rem",
                      backgroundImage: `url(${grainImage.src})`,

                      background: "#f3f4f6",

                      boxShadow: "none",

                      textAlign: "left",
                      borderRadius: "1.5rem",
                    }}
                    contentArrowStyle={{
                      borderRight: "0.4rem solid #9ca3af",
                    }}
                    visible={inView}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                      background: "#1f2937",
                      fontSize: "1.5rem",
                      borderRadius: "100%",
                      border: "1px solid #9ca3af",
                      outline: "none",
                    }}
                  >
                    <div
                      className={twMerge(
                        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-8"
                      )}
                    >
                      <div
                        className="absolute inset-0 -z-10 opacity-5 rounded-3xl"
                        style={{
                          backgroundImage: `url(${grainImage.src})`,
                        }}
                      ></div>
                      <h3 className="font-semibold capitalize text-white/90">
                        {item.title}
                      </h3>
                      <p className="font-normal text-white/80">
                        {item.location}
                      </p>
                      <p className="font-normal text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </VerticalTimelineElement>
                </div>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
