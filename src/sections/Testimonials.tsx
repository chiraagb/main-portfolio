"use client";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export const MediumBlogPostsSection = () => {
  const [mediumPosts, setMediumPosts] = useState<
    {
      title: string;
      description: string;
      pubDate: string;
      author: string;
      categories: string[];
      link: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchMediumData = async () => {
      try {
        const res = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chiraagb`
        );
        console.log(res, "Medium data");
        setMediumPosts(res.data.items);
      } catch (error) {
        console.error("Error in fetching medium data", error);
      }
    };
    fetchMediumData();
  }, []);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Insights & Learnings"
          title="Latest Articles on Medium"
          description="Explore a collection of my latest articles on the challenges I've solved and the lessons I've learned through building."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="relative flex flex-none gap-8 pr-8 animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {mediumPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300 group"
                  >
                    <h3 className="text-xl font-semibold mb-4 overflow-clip truncate w-[200px]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-4 w-[200px] flex-1">
                      {stripHtml(post.description).slice(0, 150)}...
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-white/50">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(post.pubDate).toLocaleDateString()}
                      </div>
                      <div className="flex flex-wrap items-center gap-1">
                        <Tag size={16} className="mr-0" />
                        {post.categories.map((category, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-700/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 backdrop-blur-sm"
                    >
                      <p className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight size={18} />
                      </p>
                    </a>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
