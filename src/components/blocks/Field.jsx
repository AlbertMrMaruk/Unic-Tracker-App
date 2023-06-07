function Field({ icon, placeholder }) {
  return (
    <div className="flex gap-3 text-2xl border-b-2  border-[#837f79]   hover:border-[#38dbe0] p-3 px-2 mx-3 my-2">
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        className=" border-none outline-none bg-transparent text-white font-bold placeholder:text-[#837f79] placeholder:font-bold focus:outline-none focus:border-none"
      />
    </div>
  );
}

export default Field;
