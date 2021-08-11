import { Button } from "./Button";

const Keypad = () => {
  const buttons = [
    {
      text: "7",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "8",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "9",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "del",
      containerClass: "bg-skin-keyBack border-skin-keyBackShadow pt-1",
      buttonClass: "text-sm sm:text-lg text-white uppercase",
    },
    {
      text: "4",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "5",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "6",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "+",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "1",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "2",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "3",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "-",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: ".",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "0",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor text-btnFont",
    },
    {
      text: "/",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "x",
      containerClass: "bg-skin-keyColor border-skin-KeyShadow",
      buttonClass: "text-2xl text-skin-keytextColor",
    },
    {
      text: "reset",
      containerClass: "col-span-2 bg-skin-keyBack border-skin-keyBackShadow",
      buttonClass: "text-2xl text-white uppercase",
    },
    {
      text: "=",
      containerClass:
        "col-span-2 bg-skin-keyRedColor border-skin-keyRedColorShadow",
      buttonClass: "text-2xl text-skin-equalText",
    },
  ];

  const renderButtons = buttons.map((button, index) => (
    <Button {...button} key={index} />
  ));

  return (
    <div className="bg-skin-toggleBackground transition duration-500 ease-in-out h-auto mt-5 rounded-md shadow w-auto">
      <div className="p-4 grid grid-cols-4 gap-5">{renderButtons}</div>
    </div>
  );
};

export { Keypad };
