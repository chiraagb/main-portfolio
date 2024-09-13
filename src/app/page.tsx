"use client";

import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

import Experience from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";

import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { MediumBlogPostsSection } from "@/sections/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // for hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Experience />
      <TapeSection />
      <MediumBlogPostsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
