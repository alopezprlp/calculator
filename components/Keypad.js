import { Button } from "./Button";

const Keypad = ({ updateDisplay }) => {
  const buttons = [
    {
      text: "7",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "8",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "9",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "del",
      containerClass: "bg-skin-keyBack border-skin-keyBackShadow",
      buttonClass: "text-lg text-white uppercase pt-2",
    },
    {
      text: "4",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "5",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "6",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "+",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "1",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "2",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "3",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "-",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: ".",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "0",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "/",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "x",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-skin-keytextColor text-btnFont",
    },
    {
      text: "reset",
      containerClass:
        "col-span-2 bg-skin-keyBack border-skin-keyBackShadow p-3",
      buttonClass: "text-white uppercase text-lg pt-2",
    },
    {
      text: "=",
      containerClass:
        "col-span-2 bg-skin-keyRedColor border-skin-keyRedColorShadow p-3",
      buttonClass: "text-skin-equalText text-lg pt-2",
    },
  ];

  const renderButtons = buttons.map((button, index) => (
    <Button {...button} key={index} updateDisplay={updateDisplay} />
  ));

  return (
    <div className="bg-skin-toggleBackground transition duration-500 ease-in-out h-auto mt-3 rounded-md shadow w-auto">
      <div className="p-4 grid grid-cols-4 gap-4">{renderButtons}</div>
    </div>
  );
};

export { Keypad };
