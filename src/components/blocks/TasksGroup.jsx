import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MiniTask from "./MiniTask";

function TasksGroup({ tasks, setDoneInf, doneInf, isDark }) {
  const navigate = useNavigate();
  return (
    <div className="flex w-[100%]">
      <div
        className={`w-[100%] ${
          isDark ? "bg-[#242527]" : "bg-[#38dbe0] text-black"
        } ease-in-out duration-300 rounded-2xl shadow-xl shadow-[#00000047]`}
      >
        <div
          className={`${
            isDark ? " bg-[#383a39]" : "bg-[#2fc7cd] "
          } rounded-t-xl flex justify-between w-[100%] py-3 px-7`}
        >
          <div className="m-auto text-center md:text-left md:ml-[3.5rem] ">
            <h4
              className={`font-bold  text-uppercase text-xl ${
                isDark && "text-[#8e897b]"
              }`}
            >
              {tasks[0].data.category}
            </h4>
            <h2
              className={`font-bold  text-uppercase text-2xl  ${
                isDark && "text-white"
              }`}
            >
              {tasks[0].data.project}
            </h2>
          </div>
          <div className=" gap-5 hidden md:flex">
            <FaPlus
              className={`my-5 text-xl cursor-pointer ${
                isDark && "text-[#8e897b]"
              }`}
              onClick={() => navigate("/create-task")}
            />
          </div>
        </div>
        {tasks.map((el, index) => (
          <>
            <MiniTask
              id={el.id}
              task={el.data}
              key={index}
              setDoneInf={setDoneInf}
              doneInf={doneInf}
              isDark={isDark}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default TasksGroup;
