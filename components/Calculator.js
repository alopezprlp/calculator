import { useState } from "react";
import Switch from "./Switch";

export default function Calculator() {
  const themes = ["","theme-2","theme-3"]
  const [act, setAct] = useState([false, false, true]);
  return (
    <div className={`${act[0] ? themes[0]: act[1] ? themes[1] : act[2] ? themes[2] : ""}`}>
      <div className="bg-skin-fill transition duration-500 ease-in-out w-full h-screen flex flex-row justify-center items-center">
        <div className="h-4/5 w-9/12 sm:w-8/12 md:w-7/12 xl:w-4/12 mx-auto p-2">
          <div className="flex flex-row justify-between">
            <span className="font-mono text-skin-globalText font-bold text-2xl">
              calc
            </span>

            <Switch active={act} changeTheme={setAct} />
          </div>
          <div className="h-20 bg-skin-screenBackground transition duration-500 ease-in-out rounded-md flex justify-end align-middle mt-8 shadow">
            <input
              defaultValue="399,386"
              className=" rounded-md bg-skin-screenBackground transition duration-500 ease-in-out transparent text-skin-globalText text-5xl font-mono w-11/12 text-right pr-3 outline-none"
            />
          </div>

          <div className="bg-skin-toggleBackground transition duration-500 ease-in-out h-auto mt-5 rounded-md shadow w-auto">
            <div className="p-4 grid grid-cols-4 gap-3 ">
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out lg:pt-2 rounded text-center shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl transition duration-500 ease-in-out text-skin-keytextColor text-btnFont">
                  7
                </span>
              </div>

              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  8
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  9
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyBack text-center pt-1 lg:pt-2 rounded shadow border-b-4 border-skin-keyBackShadow cursor-pointer">
                <span className="font-bold font-mono text-lg text-white">
                  DEL
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out lg:pt-2 rounded text-center shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  4
                </span>
              </div>

              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  5
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  6
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor ">
                  +
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out lg:pt-2 rounded text-center shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  1
                </span>
              </div>

              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  2
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  3
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor ">
                  -
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out lg:pt-2 rounded text-center shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor">
                  .
                </span>
              </div>

              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor text-btnFont">
                  0
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor">
                  /
                </span>
              </div>
              <div className="w-12 lg:w-20 h-10 lg:h-12 bg-skin-keyColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-KeyShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-skin-keytextColor ">
                  x
                </span>
              </div>

              <div className="col-span-2   bg-skin-keyBack  text-center lg:pt-2 rounded shadow border-b-4 border-skin-keyBackShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl text-white">
                  RESET
                </span>
              </div>

              <div className="col-span-2  bg-skin-keyRedColor transition duration-500 ease-in-out text-center lg:pt-2 rounded shadow border-b-4 border-skin-keyRedColorShadow cursor-pointer">
                <span className="font-bold font-mono text-2xl transition duration-500 ease-in-out text-skin-equalText">
                  =
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
