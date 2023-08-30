import { FaPlus, FaTrash } from "react-icons/fa";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";
import Task from "./Task";

function TasksGroup({ tasks, id, setDoneInf, doneInf, isDark }) {
  console.log(tasks);
  const [touchPosition, setTouchPosition] = useState(true);
  const [deleteBar, setDeleteBar] = useState(false);
  const handleStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      setDeleteBar(true);
    }

    if (diff < -5) {
      setDeleteBar(false);
    }

    setTouchPosition(null);
  };
  return (
    <div className="flex w-[100%]">
      <div
        onTouchStart={handleStart}
        onTouchMove={handleTouchMove}
        className={`w-[100%] ${
          isDark ? "bg-[#242527]" : "bg-[#38dbe0] text-black"
        }  ${
          deleteBar ? "ml-[-8rem]" : ""
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
            />
          </div>
        </div>
        {tasks.map((el, index) => (
          <Task
            miniTask={true}
            task={el.data}
            key={index}
            setDoneInf={setDoneInf}
            doneInf={doneInf}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}

export default TasksGroup;
