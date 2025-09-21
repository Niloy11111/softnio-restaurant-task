import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { testimonials } from "../../../public/data";
import CarouselButton from "../shared/headertitle/CarouselButton";
import SharedHeaderTitle from "../shared/headertitle/SharedHeaderTitle";
import Group from "/assets/Group.png";
import left from "/assets/left.png";
import Qoute from "/assets/qoute.png";
import right from "/assets/right.png";
const Testimonials = () => {
  const [currentId, setCurrentId] = useState(1);
  const currectReview = testimonials.find(
    (testimonial) => testimonial.id === currentId
  );

  const { image, name, address, review } = currectReview;

  const handleNext = () => {
    if (currentId === 4) {
      return;
    } else {
      setCurrentId((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentId === 1) {
      return;
    } else {
      setCurrentId((prev) => prev - 1);
    }
  };

  return (
    <section className="z-0 relative overflow-hidden my-[120px]  flex-items">
      <div className="w-full z-30 customWidth">
        <div className="mb-[60px]">
          <SharedHeaderTitle
            handleNext={handleNext}
            handlePrev={handlePrev}
            heading="What Some of my Customers Say"
            title="Crispy, Every Bite Taste"
          />
        </div>
        <div className="lg:h-[555px] flex flex-col-reverse lg:flex-row w-full">
          <div className="relative lg:flex-1 bg-y1 h-[335px] lg:h-full addFlex ">
            <div className="relative h-[285px] pt-5 pl-[26px] pb-[18px]   lg:h-[411px] w-[280px] lg:w-[386px] flex-between flex-col">
              <div className="absolute left-0 top-0">
                <img className="w-[28px] h-[29px]" src={Qoute} alt="" />
              </div>
              <div>
                <p className="subTitle ">{review}</p>
              </div>

              <div className="border-b h-[37px] border-t1 pb-[17.5px]  flex-between w-full">
                <div className="">
                  <h3 className="text-t1 font-Bebas text-lg font-medium">
                    {name}
                  </h3>
                  <p className="font-Roboto text-sm">{address}</p>
                </div>

                <div className="border-b-4  border-[#BD1F17] pb-3.5">
                  <img
                    className="w-[39px] h-[39px] rounded-full"
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                className="absolute w-[24px] lg:w-[39px] left-0 -bottom-0.5 lg:bottom-12"
                src={Group}
                alt=""
              />
            </div>
          </div>

          <div className="bg-[url('/assets/meal.png')] addFlex   h-[240px] lg:h-full  lg:w-[763px]">
            <div className="w-[49px] h-[49px] addFlex bg-y1 rounded-full">
              <FaPlay className="text-lg" />
            </div>
          </div>
        </div>
        <div className="mt-4 addFlex lg:lgHidden ">
          <CarouselButton handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>

      <div className="smHidden absolute  top-[22%] rotate-[-90deg] -left-[8%]">
        <img className="w-[306px] h-[303px]" src={left} alt="" />
      </div>
      <div className="smHidden absolute bottom-[20%] -right-[10%] rotate-[30deg]">
        <img className="w-[566px] h-[300px]" src={right} alt="" />
      </div>
    </section>
  );
};

export default Testimonials;
