const Display = () => (
  <div className="h-20 bg-skin-screenBackground transition duration-500 ease-in-out rounded-md flex justify-end align-middle mt-6 shadow">
    <input
      readOnly
      defaultValue="0"
      className="font-spartan rounded-md bg-skin-screenBackground transition duration-500 ease-in-out transparent text-skin-globalText text-5xl w-11/12 text-right pr-3 outline-none"
    />
  </div>
);

export { Display };
