function Textarea({ text, setText }) {
  return (
    <textarea
      className="bg-transparent text-white text-xl w-[97%] p-2 px-2 mx-3 my-1 font-bold focus:bg-none focus:outline-none placeholder:text-[#837f79] h-[125px] max-h-[125px] "
      placeholder="Описание задачи..."
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  );
}

export default Textarea;
