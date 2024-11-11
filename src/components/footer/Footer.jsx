import { links, storeDetails } from "../../../public/data";

const Footer = () => {
  return (
    <section className="addFlexItems bg-blend-overlay bg-[#000000CC]  h-[999px] lg:h-[719px] bg-center  bg-cover  bg-no-repeat bg-[url('/assets/footer.jpg')]">
      <div className="customWidth h-[939px] lg:h-[479px] addFlexBetween flex-col">
        <div className="h-[808px] lg:h-[256px] addFlexBetween flex-col">
          <h3 className="regularTitle text-white text-center ">
            We ready to have you the best dining experiences
          </h3>
          <div className="grid lg:grid-cols-4 gap-6  ">
            {storeDetails.map(({ id, title, icon, subOne, subTwo }) => (
              <div
                key={id}
                className="h-[136px] lg:h-[144px] addFlexBetween flex-col"
              >
                <img className="mx-auto" src={icon} alt="" />
                <h4 className="cardTitle text-white">{title}</h4>
                <div>
                  <p className="subTitleCard text-[#F7F8F9] ">{subOne}</p>
                  <p className="subTitleCard text-[#F7F8F9] ">{subTwo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  addFlexBetween flex-col h-[71px] lg:h-[103px]">
          <div className="addFlexBetween w-[192px] lg:w-[285px]">
            {links.map((link, index) => (
              <div
                key={index}
                className="w-[36px] lg:w-[53px] h-[36px] lg:h-[53px] addFlex border border-[#E5E7EB] rounded-full"
              >
                <img src={link} alt="" />
              </div>
            ))}
          </div>
          <p className="font-Roboto text-white lg:text-[21px]">
            © 2023 All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
