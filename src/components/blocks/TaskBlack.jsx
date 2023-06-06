import { FaPlus } from "react-icons/fa";

function TaskBlack() {
  return (
    <div className="w-[100%] bg-[#242527] rounded-2xl">
      <div className="bg-[#383a39] rounded-t-xl flex justify-between w-[100%] py-3 px-7">
        <div className="ml-[3.5rem]">
          <h4 className="font-bold  text-uppercase text-xl text-[#8e897b]">
            Podcast
          </h4>
          <h2 className="font-bold  text-uppercase text-2xl  text-white">
            Consider Website
          </h2>
        </div>
        <FaPlus className="my-5 text-xl cursor-pointer text-[#8e897b]" />
      </div>
      <div className="px-7 py-5 rounded-b-xl flex justify-between align-middle m-auto">
        <div className="flex gap-3 align-middle">
          <input
            type="checkbox"
            className="appearance-none checked:bg-[#38dbe0] border-[2.5px] rounded-md m-auto border-[#38dbe0] border-solid w-[35px] h-[35px]"
          />
          <div className="ml-[.75rem]">
            <h2 className="font-bold  text-uppercase text-[1.4rem] text-white">
              Here is the title of the task
            </h2>
            <p className="text-md text-[#6c6b62]">
              Here is the thing and stuff
            </p>
          </div>
        </div>
        <p className="text-lg my-auto font-bold text-[#8e897b] ">Tommorow</p>
      </div>
    </div>
  );
}

export default TaskBlack;
