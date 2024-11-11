import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselButton = ({ handlePrev, handleNext }) => {
  return (
    <div className="addFlexItems gap-3">
      <button onClick={handlePrev} className="btnCarousel">
        {" "}
        <IoIosArrowBack className="text-2xl text-t1" />{" "}
      </button>
      <button onClick={handleNext} className="btnCarousel">
        {" "}
        <IoIosArrowForward className="text-2xl text-p2" />{" "}
      </button>
    </div>
  );
};

export default CarouselButton;
