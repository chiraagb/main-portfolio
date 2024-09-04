import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Responsive",
  "Interactive",
  "Dynamic",
  "Modern",
  "Intuitive",
  "Fast",
  "Scalable",
  "Robust",
  "Efficient",
  "Optimized",
  "Maintainable",
  "Reusable",
  "Elegant",
  "Clean",
  "Simple",
  "Flexible",
  "Powerful",
  "Innovative",
  "Creative",
  "Functional",
  "Practical",
  "Effective",
  "Effortless",
  "Seamless",
  "Stylish",
  "Sleek",
  "Sophisticated",
  "Professional",
  "Polished",
  "Engaging",
  "Captivating",
  "Inspiring",
  "Impactful",
  "Memorable",
  "Unique",
  "Original",
  "Fresh",
  "Bold",
  "Vibrant",
  "Colorful",
  "Playful",
  "Whimsical",
  "Friendly",
  "Approachable",
  "Welcoming",
  "Warm",
  "Inviting",
  "Charming",
  "Cheerful",
  "Joyful",
  "Delightful",
  "Fun",
  "Lively",
  "Dynamic",
  "Energetic",
  "Exciting",
  "Passionate",
  "Expressive",
  "Artistic",
  "Creative",
  "Imaginative",
  "Innovative",
  "Original",
  "Unique",
  "Fresh",
  "Modern",
  "Sleek",
  "Stylish",
  "Sophisticated",
  "Professional",
  "Polished",
  "Elegant",
  "Minimal",
  "Clean",
  "Simple",
  "Functional",
  "Practical",
  "Efficient",
  "Effective",
  "Powerful",
  "Robust",
  "Scalable",
  "Flexible",
  "Maintainable",
];

export const TapeSection = () => {
  return (
    <>
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:90s]">
              {[...new Array(2)].fill(0).map((_, index) => {
                return (
                  <Fragment key={index}>
                    {words.map((word) => {
                      return (
                        <>
                          <div
                            key={word}
                            className="inline-flex gap-4 items-center"
                          >
                            <span className="text-gray-900 uppercase font-extrabold text-sm">
                              {word}
                            </span>
                            <StarIcon className="size-6 text-gray-900 -rotate-12" />
                          </div>
                        </>
                      );
                    })}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
