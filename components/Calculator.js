import { useState } from "react";
import Switch from "./Switch";
import { Keypad } from "./Keypad";
import { Display } from "./Display";

export default function Calculator() {
  const themes = ["", "theme-2", "theme-3"];
  const [act, setAct] = useState([true, false, false]);
  return (
    <div className={`${themes[act.findIndex((isTrue) => isTrue)]}`}>
      <div className="bg-skin-fill transition duration-500 ease-in-out w-full h-screen flex flex-row justify-center items-center">
        <div className="h-4/5 w-9/12 sm:w-8/12 md:w-7/12 xl:w-4/12 mx-auto p-2">
          <div className="flex flex-row justify-between">
            <span className="text-skin-globalText font-spartan text-2xl">
              calc
            </span>
            <Switch active={act} changeTheme={setAct} />
          </div>
          <Display />
          <Keypad />
        </div>
      </div>
    </div>
  );
}
