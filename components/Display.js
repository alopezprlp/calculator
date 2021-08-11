const Display = ({ displayValue }) => (
  <div className="h-20 bg-skin-screenBackground transition duration-500 ease-in-out rounded-md flex justify-end align-middle mt-5 shadow">
    <input
      readOnly
      className="font-spartan rounded-md bg-skin-screenBackground transition duration-500 ease-in-out transparent text-skin-globalText text-5xl w-11/12 text-right pr-3 outline-none"
      value={displayValue}
    />
  </div>
);

export { Display };
