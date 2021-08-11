import React from "react";

const Button = ({ text, containerClass, buttonClass, updateDisplay }) => {
  const handleClick = () => {
    updateDisplay(text);
  };

  return (
    <div
      className={`${containerClass} transition duration-500 ease-in-out text-center rounded-md shadow border-b-4 cursor-pointer pt-3 sm:pt-2`}
      role="button"
      onClick={handleClick}
    >
      <button className={` ${buttonClass} font-spartan `}>{text}</button>
    </div>
  );
};

export { Button };
