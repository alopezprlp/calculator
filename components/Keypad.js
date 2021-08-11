import { Button } from "./Button";

const Keypad = () => {
  const buttons = [
    {
      text: "7",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "8",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "9",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "del",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyBack border-skin-keyBackShadow pt-1",
      buttonClass: "text-lg text-white uppercase",
    },
    {
      text: "4",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "5",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "6",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "+",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "1",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "2",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "3",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "-",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: ".",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "0",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "/",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "x",
      containerClass:
        "w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "reset",
      containerClass: "col-span-2  bg-skin-keyBack border-skin-keyBackShadow",
      buttonClass: "text-2xl text-white uppercase",
    },
    {
      text: "=",
      containerClass:
        "col-span-2  bg-skin-keyRedColor border-skin-keyRedColorShadow",
      buttonClass: "text-2xl text-skin-equalText",
    },
  ];

  const renderButtons = buttons.map((button, index) => (
    <Button {...button} key={index} />
  ));

  return (
    <div className="bg-skin-toggleBackground transition duration-500 ease-in-out h-auto mt-5 rounded-md shadow w-auto">
      <div className="p-4 grid grid-cols-4 gap-3 ">{renderButtons}</div>
    </div>
  );
};

export { Keypad };
