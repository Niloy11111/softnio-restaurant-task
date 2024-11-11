import DatePicker from "react-datepicker";
import { Bounce, toast } from "react-toastify";
import Button from "../shared/button/Button";
import SharedHeaderTitle from "../shared/headertitle/SharedHeaderTitle";
import dateimg from "/assets/date.png";
import sortimg from "/assets/sort.png";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useState } from "react";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleBookTable = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const people = form.people.value;
    const date = form.date.value;
    const message = form.message.value;

    const bookingInfo = {
      userName,
      userEmail,
      people,
      date,
      message,
    };

    console.log(bookingInfo);

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let arr = [];
    arr = [...bookings, bookingInfo];
    localStorage.setItem("bookings", JSON.stringify(arr));
    form.reset();
    toast("You have booked a table!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <section
      className="text-white h-[722px] lg:h-[788px] 
    bg-[url('/assets/booking.jpg')] bg-no-repeat bg-cover"
    >
      <div className=" customWidth addFlexItems h-full">
        <div className="w-[635px]">
          <div className="space-y-3 mb-6">
            <SharedHeaderTitle heading="Book Your Table" title="Book Now" />

            <p className="font-Roboto">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>

          <form onSubmit={handleBookTable}>
            <div className=" flex-col lg:addFlexItems gap-8">
              <input
                type="text"
                placeholder="Your Name*"
                className="textInput"
                name="userName"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="textInput"
                name="userEmail"
                required
              />
            </div>
            <div className="flex-col lg:addFlexItems gap-8">
              <div className="w-full relative">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-[330px] lg:w-[302px] py-2 border border-[#E5E7EB] outline-none pl-3 bg-transparent  mb-5 "
                  placeholder="Reservation Date"
                  name="date"
                  required
                />

                <img className="absolute right-4 top-2" src={dateimg} alt="" />
              </div>
              <div className="w-full relative">
                <input
                  type="number"
                  placeholder="Total People"
                  className="textInput"
                  name="people"
                  required
                />
                <img className="absolute right-4 top-2" src={sortimg} alt="" />
              </div>
            </div>
            <textarea
              className=" h-[140px]
               textInput"
              id=""
              cols="50"
              rows="6"
              placeholder="Message"
              name="message"
            ></textarea>
            <Button title="book now" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
