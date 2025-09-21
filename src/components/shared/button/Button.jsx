const Button = ({ title }) => {
  return (
    <button
      className={`bg-b1  text-t1
         uppercase font-Roboto font-bold leading-6 ${
           title === "Book a Table"
             ? "w-[157px] h-[44px] text-base"
             : "w-[180px] h-[56px] text-lg "
         } `}
    >
      {title}
    </button>
  );
};

export default Button;
