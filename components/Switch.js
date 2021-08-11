export default function Switch({ active, changeTheme }) {
  const bgclass = "bg-skin-keyRedColor";
  return (
    <div>
      <div className="flex flex-row items-center space-x-3">
        <span className="font-spartan text-skin-globalText transition duration-500 ease-in-out text-sm pt-6">
          THEME
        </span>
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-3">
            <span
              className="text-skin-globalText transition duration-500 ease-in-out font-spartan cursor-pointer"
              onClick={() => {
                changeTheme([true, false, false]);
              }}
            >
              1
            </span>
            <span
              className="text-skin-globalText transition duration-500 ease-in-out font-spartan cursor-pointer"
              onClick={() => {
                changeTheme([false, true, false]);
              }}
            >
              2
            </span>
            <span
              className="text-skin-globalText transition duration-500 ease-in-out font-spartan cursor-pointer"
              onClick={() => {
                changeTheme([false, false, true]);
              }}
            >
              3
            </span>
          </div>
          <div>
            <div className="flex flex-row w-16 space-x-3 bg-skin-toggleBackground rounded-full h-6 p-1 items-center shadow">
              <span
                className={`w-3 h-3 transition duration-500 ease-in-out cursor-pointer rounded-full ${
                  active[0] ? bgclass : ""
                }`}
                onClick={() => {
                  changeTheme([true, false, false]);
                }}
              />
              <span
                className={`w-3 h-3 transition duration-500 ease-in-out cursor-pointer rounded-full ${
                  active[1] ? bgclass : ""
                }`}
                onClick={() => {
                  changeTheme([false, true, false]);
                }}
              />
              <span
                className={`w-3 h-3 transition duration-500 ease-in-out cursor-pointer rounded-full ${
                  active[2] ? bgclass : ""
                }`}
                onClick={() => {
                  changeTheme([false, false, true]);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
