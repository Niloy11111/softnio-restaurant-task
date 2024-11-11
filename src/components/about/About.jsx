import { useState } from "react";

import { options, tabSections } from "../../../public/data";
import Button from "../shared/button/Button";
import about from "/assets/about.jpg";
import aboutRight from "/assets/aboutRight.png";
import phone from "/assets/phone.png";
const About = () => {
  const [tabName, setTabName] = useState("About");

  const filteredSection = tabSections.filter(
    (item) => item?.section === tabName
  );

  const tabs = ["About", "Experience", "Contact"];
  return (
    <>
      <section className="relative overflow-hidden">
        <section className=" customWidth lg:pb-0 pb-10 lg:h-[864px] addFlexItems">
          <div>
            <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:mt-7">
              <div className="flex-1 relative">
                <img
                  className="w-[330px] h-[246px] lg:w-[617px] lg:h-[460px]"
                  src={about}
                  alt=""
                />
                <div className="w-[129px] h-[73px] lg:w-[241px] lg:h-[136px] addFlex  gap-2  rounded-[12px] lg:rounded-[20px] bg-white absolute top-7 left-7">
                  <div className="relative progress-bar w-[50px] lg:w-[94px] h-[50px] lg:h-[94px] addFlex rounded-full ">
                    <span className="text-t2 text-sm lg:text-[26px] font-bold font-OpenSans">
                      50+
                    </span>

                    <div className="border-4 border-b1 rounded-full w-[10px] lg:w-[20px] h-[10px] lg:h-[20px] bg-white absolute  left-1 top-1 lg:left-0 lg:top-3"></div>
                  </div>
                  <div>
                    <p className=" text-t2 font-semibold font-OpenSans text-[8px] lg:text-base ">
                      {" "}
                      Market <br /> Experiences
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 ">
                <div className="border-b border-p1 addFlexItems gap-3 font-Inter text-sm mb-7">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setTabName(tab)}
                      className={`${
                        tabName === tab ? "btnTabActive" : "btnTabInActive"
                      }
                `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {filteredSection?.map((item) => (
                  <div key={item?.id} className="space-y-5 lg:space-y-7">
                    <h1 className="regularTitle text-t2">{item?.title}</h1>
                    <p className="text-d1 font-Roboto">{item?.description}</p>
                    <div className="addFlexItems gap-5">
                      <Button py="3" title="ABout more" />

                      <div className="addFlexItems gap-2">
                        <img
                          className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px]"
                          src={phone}
                          alt=""
                        />
                        <span className="font-Roboto text-t1 font-bold  text-sm lg:text-lg">
                          +88 3426 739 485
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 grid lg:grid-cols-3 gap-10">
              {options?.map(({ id, image, title, subtitle }) => (
                <div key={id} className="addFlexItems gap-5 ">
                  <div className="w-[90px] h-[90px] rounded-full addFlex shadow-2xl">
                    <img src={image} alt="" />
                  </div>

                  <div className="text-t1">
                    <h3 className="font-Bebas font-medium text-[30px] ">
                      {title}
                    </h3>
                    <p className="subTitle text-[20px] ">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="smHidden absolute top-[50%] right-[-245px]">
          <img className="w-[363px] h-[340px]" src={aboutRight} alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
