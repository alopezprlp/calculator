import { useState } from "react";
import Switch from "./Switch";
import { Keypad } from "./Keypad";
import { Display } from "./Display";

export default function Calculator() {
  const themes = ["", "theme-2", "theme-3"];
  const [act, setAct] = useState([true, false, false]);
  const [displayValue, setDisplayValue] = useState("0");

  const updateDisplay = (text) => {
    setDisplayValue((value) => {
      if (text === ".") {
        return value + ",";
      } else if (text === "del") {
        if (value.length === 1) {
          return "0";
        }
        return value !== "0" ? value.slice(0, -1) : value;
      } else if (text === "reset") {
        return "0";
      } else if (text === "=") {
        try {
          value = value.replaceAll("x", "*").replaceAll(",", ".");
          return "" + eval(value);
        } catch (error) {
          // do nothing
        }
      } else {
        if (value === "0") {
          return text;
        }
        return value + text;
      }
    });
  };

  return (
    <div className={`${themes[act.findIndex((isTrue) => isTrue)]}`}>
      <div className="bg-skin-fill transition duration-500 ease-in-out w-full h-screen flex flex-row md:justify-center md:items-center pt-2 sm:pt-0 overflow-hidden">
        <div className="h-4/5 w-9/12 sm:w-8/12 md:w-7/12 xl:w-4/12 mx-auto p-2">
          <div className="flex flex-row justify-between items-end">
            <span className="text-skin-globalText font-spartan text-2xl">
              calc
            </span>
            <Switch active={act} changeTheme={setAct} />
          </div>
          <Display displayValue={displayValue} />
          <Keypad updateDisplay={updateDisplay} />
        </div>
      </div>
    </div>
  );
}
