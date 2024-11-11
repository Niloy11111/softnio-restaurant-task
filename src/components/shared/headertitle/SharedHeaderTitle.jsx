import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SharedHeaderTitle = ({ title, heading, handleNext, handlePrev }) => {
  return (
    <div className="addFlexBetween">
      <div>
        <div className="addFlexItems gap-2 mb-3 lg:mb-4">
          <p className="bg-p2 #BD1F17 w-[10px] h-[10px]"></p>
          <p className="text-p2 font-Roboto lg:text-xl font-bold">{title}</p>
        </div>
        <h3
          className={`${
            heading === "Book Your Table" ? "text-white" : "text-t2"
          } regularTitle `}
        >
          {heading}
        </h3>
      </div>

      <div
        className={`${
          heading === "Book Your Table"
            ? "hidden"
            : "smHidden  lg:addFlexItems gap-3 "
        } `}
      >
        <button onClick={handlePrev} className="btnCarousel">
          {" "}
          <IoIosArrowBack className="text-2xl text-t1" />{" "}
        </button>
        <button onClick={handleNext} className="btnCarousel">
          {" "}
          <IoIosArrowForward className="text-2xl text-p2" />{" "}
        </button>
      </div>
    </div>
  );
};

export default SharedHeaderTitle;
