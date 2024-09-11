"use client";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/programming-icons/javascript-original.svg";
import HtmlIcon from "@/assets/programming-icons/html5-original.svg";
import CssIcon from "@/assets/programming-icons/css3-original.svg";
import ReactIcon from "@/assets/programming-icons/react-original.svg";
import NextjsIcon from "@/assets/programming-icons/nextjs-icon-svgrepo-com.svg";
import GithubIcon from "@/assets/programming-icons/github.svg";
import PythonIcon from "@/assets/programming-icons/python-original.svg";
import DockerIcon from "@/assets/programming-icons/docker-original.svg";
import DjangoIcon from "@/assets/programming-icons/django-plain.svg";
import DRFIcon from "@/assets/programming-icons/djangorest-original.svg";
import PostmanIcon from "@/assets/programming-icons/postman-original.svg";
import AWSIcon from "@/assets/programming-icons/amazonwebservices-original-wordmark.svg";
import NPMIcon from "@/assets//programming-icons/npm-original-wordmark.svg";
import FigmaIcon from "@/assets/programming-icons/figma-original.svg";
import SwaggerIcon from "@/assets/programming-icons/swagger-original.svg";
import TailwindIcon from "@/assets/programming-icons/tailwindcss-original.svg";
import CplusplusIcon from "@/assets/programming-icons/cplusplus-original.svg";
import MaterialuiIcon from "@/assets/programming-icons/materialui-original.svg";
import PostgresqlIcon from "@/assets/programming-icons/postgresql-original.svg";
import AppleIcon from "@/assets/programming-icons/apple-original.svg";
import NodejsIcon from "@/assets/programming-icons/nodejs-original.svg";
import BashIcon from "@/assets/programming-icons/bash-original.svg";
import VscodeIcon from "@/assets/programming-icons/vscode-original.svg";
import FramermotionIcon from "@/assets/programming-icons/framermotion-original.svg";
import GitIcon from "@/assets/programming-icons/git-original.svg";
import JiraIcon from "@/assets/programming-icons/jira-original.svg";
import mapImage from "@/assets/images/india.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { Fragment, useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "C++",
    iconType: CplusplusIcon,
  },
  {
    title: "Django",
    iconType: DjangoIcon,
  },
  {
    title: "Nodejs",
    iconType: NodejsIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgresqlIcon,
  },
  {
    title: "MacOS",
    iconType: AppleIcon,
  },
  {
    title: "Django Rest Framework",
    iconType: DRFIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "Jira",
    iconType: JiraIcon,
  },
  {
    title: "NPM",
    iconType: NPMIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React.js",
    iconType: ReactIcon,
  },
  {
    title: "VS Code",
    iconType: VscodeIcon,
  },
  {
    title: "Material UI",
    iconType: MaterialuiIcon,
  },
  {
    title: "Framer Motion",
    iconType: FramermotionIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Swagger",
    iconType: SwaggerIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "AWS - EC2, S3, Route53, CloudFront, Amplify, ElasticIP",
    iconType: AWSIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Bash",
    iconType: BashIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <>
      <div className="py-20 lg:py-28 scroll-mt-8" id="about">
        <div className="container">
          <SectionHeader
            eyebrow=" About Me"
            title="A Glimpse Into My World"
            description="Learn more about who I am, what I do, and what inspires me."
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />

                <div className="mx-auto w-40 mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book image" />
                </div>
              </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences."
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:90s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:90s]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond my digital realm"
                  className="px-6 py-6"
                />

                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies?.map((hobby) => {
                    return (
                      <Fragment key={hobby.title}>
                        <motion.div
                          className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute cursor-pointer"
                          style={{ left: hobby.left, top: hobby.top }}
                          drag
                          dragConstraints={constraintRef}
                        >
                          <span className="font-medium text-gray-950">
                            {hobby.title}
                          </span>
                          <span>{hobby.emoji}</span>
                        </motion.div>
                      </Fragment>
                    );
                  })}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="Map image"
                  className="h-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to bg-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to bg-sky-400 -z-10"></div>
                  <Image
                    src={smileMemoji}
                    alt="Smile emoji"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
