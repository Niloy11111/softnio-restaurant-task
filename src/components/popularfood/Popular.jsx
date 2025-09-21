import { cards } from "../../../public/data";
import CarouselButton from "../shared/headertitle/CarouselButton";
import SharedHeaderTitle from "../shared/headertitle/SharedHeaderTitle";
import aboutRight from "/assets/aboutRight.png";
const Popular = () => {
  return (
    <>
      <section className="relative bg-[#FBF7F2]  py-[120px] mt-20">
        <div className="customWidth overflow-hidden">
          <div>
            <SharedHeaderTitle
              heading="POPULAR FOOD ITEMS"
              title="Crispy, Every Bite Taste"
            />

            <div className="slide-track flex gap-4 lg:gap-8 mt-8 lg:mt-[60px]">
              {cards?.map(({ id, title, subtitle, image }) => (
                <div
                  key={id}
                  className="addFlex slide 
                bg-white w-[306px] h-[300px] "
                >
                  <div className="p-8 ">
                    <div className="">
                      <img
                        className={`mx-auto  h-[124px] w-[186px] ${
                          id === 2 && "h-[70%] w-[70%]"
                        }`}
                        src={image}
                        alt=""
                      />
                    </div>
                    <div className="mt-5 mx-auto w-[57px] h-[4px] bg-p2 "></div>
                    <div className="mt-[26px] flex  flex-col  justify-between h-[68px] ">
                      <h2 className=" cardTitle">{title}</h2>
                      <p className=" text-t1 subTitleCard">{subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 addFlex lg:lgHidden ">
            <CarouselButton />
          </div>
        </div>
        <div className="smHidden absolute top-[38%] left-[-255px] ">
          <img
            className="w-[363px] -rotate-[71.70deg] h-[340px]"
            src={aboutRight}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Popular;
