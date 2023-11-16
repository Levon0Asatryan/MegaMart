"use client";
import { Carousel, IconButton } from "@material-tailwind/react";
import React from "react";
import Image from "next/image";

type Props = {};

const MidCarousel = (props: Props) => {
  return (
    <div className="lg:h-80 xl:h-96 md:h-72 sm:h-64 h-52  flex justify-center items-center px-8  md:px-20 py-6 md:py-8 ">
      <Carousel
        className="rounded-3xl cursor-pointer"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 bg-background3 rounded-3xl hover:bg-background3 active:bg-background3 opacity-50 lg:opacity-70"
          >
            <Image
              src="/Arrow-Left3.svg"
              width={1400}
              height={500}
              alt="image 1"
            />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-background3 rounded-3xl hover:bg-background3 active:bg-background3 opacity-50 lg:opacity-70"
          >
            <Image
              src="/Arrow-Right3.svg"
              width={1400}
              height={500}
              alt="image 1"
            />
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <Image
          src="/Carousel0.png"
          width={1200}
          height={300}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <Image
          src="/Carousel2.png"
          width={1400}
          height={500}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <Image
          src="/Carousel7.png"
          width={1400}
          height={500}
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default MidCarousel;
