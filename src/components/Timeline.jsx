"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { useLiteMode } from "../context/LiteModeContext";

const TimelineAnimated = ({ data, title, containerClassName }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={containerClassName} ref={containerRef}>
      <h2 className="text-heading">{title}</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-28 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-3 md:flex md:pl-20">
                <span className="inline-flex items-center self-start px-3 py-1 text-sm font-semibold tracking-wide rounded-full bg-white/5 text-neutral-300">
                  {item.date}
                </span>
                <h3 className="text-3xl font-bold text-neutral-200">
                  {item.title}
                </h3>
                <div className="text-xl text-neutral-400">{item.job}</div>
                {item.location && (
                  <div className="text-base text-neutral-500">
                    {item.location}
                  </div>
                )}
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0d1026] via-[#0b0f24] to-[#090c1f] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="block mb-4 md:hidden">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/5 text-neutral-300">
                    {item.date}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400">{item.job}</p>
                  {item.location && (
                    <p className="text-sm text-neutral-500">{item.location}</p>
                  )}
                </div>
                {item.type === "tags" ? (
                  <div className="flex flex-wrap gap-2">
                    {item.contents.map((content, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm border rounded-full bg-white/5 border-white/10 text-neutral-300"
                      >
                        {content}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {item.contents.map((content, index) => (
                      <li
                        className="text-sm font-normal leading-relaxed text-neutral-400 md:text-base"
                        key={index}
                      >
                        {content}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const TimelineStatic = ({ data, title, containerClassName }) => {
  return (
    <div className={containerClassName}>
      <h2 className="text-heading">{title}</h2>
      <div className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-28 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-3 md:flex md:pl-20">
                <span className="inline-flex items-center self-start px-3 py-1 text-sm font-semibold tracking-wide rounded-full bg-white/5 text-neutral-300">
                  {item.date}
                </span>
                <h3 className="text-3xl font-bold text-neutral-200">
                  {item.title}
                </h3>
                <div className="text-xl text-neutral-400">{item.job}</div>
                {item.location && (
                  <div className="text-base text-neutral-500">
                    {item.location}
                  </div>
                )}
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0d1026] via-[#0b0f24] to-[#090c1f] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="block mb-4 md:hidden">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/5 text-neutral-300">
                    {item.date}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400">{item.job}</p>
                  {item.location && (
                    <p className="text-sm text-neutral-500">{item.location}</p>
                  )}
                </div>
                {item.type === "tags" ? (
                  <div className="flex flex-wrap gap-2">
                    {item.contents.map((content, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm border rounded-full bg-white/5 border-white/10 text-neutral-300"
                      >
                        {content}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {item.contents.map((content, index) => (
                      <li
                        className="text-sm font-normal leading-relaxed text-neutral-400 md:text-base"
                        key={index}
                      >
                        {content}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="absolute md:left-1 left-1 top-0 w-[2px] bg-neutral-700 h-full opacity-60" />
      </div>
    </div>
  );
};

export const Timeline = ({
  data,
  title = "My Work Experience",
  containerClassName = "c-space section-spacing",
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { liteMode } = useLiteMode();
  if (prefersReducedMotion || liteMode) {
    return (
      <TimelineStatic
        data={data}
        title={title}
        containerClassName={containerClassName}
      />
    );
  }
  return (
    <TimelineAnimated
      data={data}
      title={title}
      containerClassName={containerClassName}
    />
  );
};
