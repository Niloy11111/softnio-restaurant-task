import { cards } from "../../../public/data";
import CarouselButton from "../shared/headertitle/CarouselButton";
import SharedHeaderTitle from "../shared/headertitle/SharedHeaderTitle";
import aboutRight from "/assets/aboutRight.png";
const Popular = () => {
  return (
    <>
      <section
        className="relative bg-[#FBF7F2] h-[532px] 
      lg:h-[710px] addFlexItems  "
      >
        <div className="customWidth overflow-hidden">
          <div>
            <SharedHeaderTitle
              heading="POPULAR FOOD ITEMS"
              title="Crispy, Every Bite Taste"
            />

            <div className="slide-track flex gap-4 lg:gap-8 mt-8 lg:mt-12">
              {cards?.map(({ id, title, subtitle, image }) => (
                <div
                  key={id}
                  className="addFlex slide 
                bg-white w-[310px] h-[300px] "
                >
                  <div className="">
                    <div className="h-[115px] addFlex ">
                      <img className=" mx-auto w-[120px] " src={image} alt="" />
                    </div>
                    <div className="mt-5 mx-auto w-[57px] h-[4px] bg-p2 "></div>
                    <h2 className="mt-5  cardTitle">{title}</h2>
                    <p className="mt-2 text-t1 subTitleCard">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 addFlex lg:lgHidden ">
            <CarouselButton />
          </div>
        </div>
        <div className="smHidden absolute top-[38%] left-[-255px]  rotate-[-70deg]">
          <img className="w-[363px] h-[340px]" src={aboutRight} alt="" />
        </div>
      </section>
    </>
  );
};

export default Popular;
