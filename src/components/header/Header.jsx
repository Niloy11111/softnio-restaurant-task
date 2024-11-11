import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../shared/button/Button";
import logo from "/assets/Logo.png";
import banner from "/assets/banner.jpg";
import vector from "/assets/vector.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  return (
    <>
      <header className={`h-[792px]  lg:h-[1047px] headerGredient`}>
        <div className={`h-full  pt-8 `}>
          <nav
            className={` 
               ${
                 scroll
                   ? "sticky z-30  text-black addFlexItems h-[100px] w-full"
                   : "h-0"
               }`}
          >
            <div className="addFlexBetween customWidth ">
              <div className="addFlexItems gap-[60px]">
                <div className="">
                  <img src={logo} alt="logo" />
                </div>

                <div className="smHidden">
                  <ul className="navLinkContainer addFlexItems gap-10">
                    <li>
                      <span>Home</span>
                    </li>
                    <li>
                      <span>About</span>
                    </li>
                    <li>
                      <span>Portfolio</span>
                    </li>
                    <li>
                      <span>Clients</span>
                    </li>
                    <li>
                      <span>Blog</span>
                    </li>
                    <li>
                      <span>Contact</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="smHidden">
                <Button title="Book a Table" />
              </div>

              <div className="lgHidden">
                <FaBars className="text-3xl text-white" />
              </div>
            </div>
          </nav>

          <div className="customWidth lgRow addFlexBetween  h-[95%] ">
            <div className="lg:w-[550px] lg:mt-0 mt-20">
              <h2 className=" bannerTitle lg:bg-gradient-to-r from-[#BD1F1700] to-[#BD1F17B2] relative lg:w-[830px] z-20">
                Taste the authentic Saudi cuisine
              </h2>
              <p className="font-Roboto text-xl lg:text-2xl text-white mb-7 lg:mb-10">
                Among the best Saudi chefs in the world, serving{" "}
                <br className="smHidden" /> you something beyond flavor.{" "}
              </p>

              <Button title="Explore more" />
            </div>
            <div className="relative ">
              <img
                className="relative z-10 w-[330px] lg:w-[700px] h-[310px] lg:h-[650px]"
                src={banner}
                alt=""
              />

              <div className="absolute   -top-5 lg:-top-9 right-0 lg:right-[-30px] ">
                <img src={vector} alt="" />
              </div>

              <div
                className="z-20 smHidden absolute bottom-[1px]  right-[-50px]
              bg-b1  w-[120px]  h-[120px] rounded-full"
              >
                <svg width="120" height="120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#BD1F17"
                    strokeWidth="1"
                    strokeDasharray="4, 4"
                    strokeDashoffset="0"
                  />
                  <text
                    className="uppercase text-t1 font-Bebas font-extralight text-[36px]"
                    x="60"
                    y="55"
                    textAnchor="middle"
                    fill="#000"
                  >
                    <tspan x="60" dy="0">
                      Today
                    </tspan>
                    <tspan x="60" dy="36px">
                      offer
                    </tspan>
                  </text>
                </svg>
              </div>
              <div
                className="z-20 lgHidden absolute  right-4 bottom-4 
               bg-b1 w-[72px] h-[72px] rounded-full"
              >
                <svg width="72" height="72">
                  <circle
                    cx="36"
                    cy="36"
                    r="30"
                    fill="none"
                    stroke="#BD1F17"
                    strokeWidth="1"
                    strokeDasharray="4, 4"
                    strokeDashoffset="0"
                  />
                  <text
                    className="uppercase text-t1 font-Bebas font-extralight text-xl"
                    x="36"
                    y="33"
                    textAnchor="middle"
                    fill="#000"
                  >
                    <tspan x="36" dy="0">
                      Today
                    </tspan>
                    <tspan x="36" dy="18px">
                      offer
                    </tspan>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
