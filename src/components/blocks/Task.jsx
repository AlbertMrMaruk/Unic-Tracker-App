import { FaPlus } from "react-icons/fa";

function Task() {
  return (
    <div className="w-[100%] bg-[#38dbe0] text-black rounded-2xl">
      <div className="bg-[#2fc7cd] rounded-t-xl flex justify-between w-[100%] py-3 px-7">
        <div className="ml-[3.5rem]">
          <h4 className="font-bold  text-uppercase text-xl">Podcast</h4>
          <h2 className="font-bold  text-uppercase text-2xl ">
            Consider Website
          </h2>
        </div>
        <FaPlus className="my-5 text-xl cursor-pointer" />
      </div>
      <div className="px-7 py-5 rounded-b-xl flex justify-between align-middle m-auto">
        <div className="flex gap-3 align-middle">
          <input
            type="checkbox"
            class="appearance-none checked:bg-black border-[2.5px] rounded-md m-auto border-black border-solid w-[35px] h-[35px]"
          />
          <div className="ml-[.75rem]">
            <h2 className="font-bold  text-uppercase text-[1.4rem]">
              Here is the title of the task
            </h2>
            <p className="text-md"> Here is the thing and stuff</p>
          </div>
        </div>
        <p className="text-lg my-auto font-bold">Tommorow</p>
      </div>
    </div>
  );
}

export default Task;