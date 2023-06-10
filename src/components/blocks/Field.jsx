function Field({ icon, type, placeholder, text, setText, select, options }) {
  return (
    <div className="flex gap-3 text-2xl border-b-2  border-[#837f79]   hover:border-[#38dbe0] p-3 px-2 mx-3 my-2 ">
      {icon}
      {select ? (
        <select
          className=" border-none outline-none bg-transparent text-white font-bold placeholder:text-[#837f79] placeholder:font-bold focus:outline-none focus:border-none w-[100%]"
          onChange={(e) => {
            const elem = options.find((el) => el.data.name === e.target.value);
            setText({
              data: elem.data,
              id: elem.id,
            });
          }}
        >
          {Array.from(options).map((el, index) => (
            <option key={index} data-id={el.id}>
              {el.data.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type ? type : "text"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className=" border-none outline-none bg-transparent text-white font-bold placeholder:text-[#837f79] placeholder:font-bold focus:outline-none focus:border-none w-[100%]"
        />
      )}
    </div>
  );
}

export default Field;
