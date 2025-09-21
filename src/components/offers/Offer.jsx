import React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import offerOne from "/assets/banner/01.jpg";
import offerTwo from "/assets/banner/02.jpg";
import offerThree from "/assets/banner/03.png";
import slideOne from "/assets/banner/slide1.jpg";
const arr = [
  {
    slide: slideOne,
    banner: offerOne,
  },
  {
    slide: slideOne,
    banner: offerTwo,
  },
  {
    slide: slideOne,
    banner: offerThree,
  },
];

const Offer = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {arr.map((item, index) => (
          <CarouselItem key={index}>
            <div className="customWidth flex gap-5 items-center">
              <div className="h-[50vh]">
                <img className=" w-[400px]" src={slideOne} alt="" />
              </div>
              <div
                className="flex
        w-full gap-5 h-[50vh] flex-col"
              >
                <img className="h-full" src={offerOne} alt="" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Offer;
