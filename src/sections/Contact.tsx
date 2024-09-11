import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <>
      <div
        className="py-16 pt-12 lg:py-24 lg:pt-20 scroll-mt-[-200px]"
        id="contact"
      >
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-calistoga text-2xl">
                  Let&apos;s create something amazing together.
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  Ready to bring your vision to life? Whether it's a new
                  business, creative project, or personal goal, I'm here to help
                  you plan, strategize, and overcome challenges. What's your
                  next project?
                </p>
              </div>
              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chiraagbhandakkar@gmail.com"
                  target="_blank" // Ensures that Gmail opens in a new tab
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-950"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
