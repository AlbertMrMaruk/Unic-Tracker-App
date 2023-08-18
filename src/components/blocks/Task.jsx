import { FaPlus, FaTrash } from "react-icons/fa";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";

function Task({ task, id, setDoneInf, doneInf, isDark }) {
  const editTask = async (doneD) => {
    await updateDoc(doc(db, "tasks", id), { ...task, done: doneD });
    setDoneInf((doneI) => ({ ...doneI, [id]: doneD }));
  };
  const deleteTask = async () => {
    await deleteDoc(doc(db, "tasks", id));
    setDeleteBar(false);
    setDoneInf((doneI) => ({ ...doneI, [id]: "deleted" }));
  };
  const [touchPosition, setTouchPosition] = useState(true);
  const [deleteBar, setDeleteBar] = useState(false);
  const handleStart = (e) => {
    const touchDown = e.touches[0].clientX;
    console.log("START");
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    console.log("end");
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      console.log("swipe to left");
      setDeleteBar(true);
    }

    if (diff < -5) {
      setDeleteBar(false);
      console.log("swipe to right");
    }

    setTouchPosition(null);
  };
  const data = new Date(task.timestamp.seconds * 1000);
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
              {task.category}
            </h4>
            <h2
              className={`font-bold  text-uppercase text-2xl  ${
                isDark && "text-white"
              }`}
            >
              {task.project}
            </h2>
          </div>
          <div className=" gap-5 hidden md:flex">
            <FaPlus
              className={`my-5 text-xl cursor-pointer ${
                isDark && "text-[#8e897b]"
              }`}
            />
            <FaTrash
              className={`my-5 text-xl cursor-pointer ${
                isDark && "text-[#8e897b]"
              }`}
              onClick={deleteTask}
            />
          </div>
        </div>
        <div className="py-[2rem] px-[1rem]  rounded-b-xl flex flex-col justify-between align-middle m-auto md:px-7 md:py-5 md:flex-row ">
          <div className="flex gap-3 align-middle flex-col md:flex-row">
            <input
              type="checkbox"
              className={`appearance-none cursor-pointer  border-[2.5px] rounded-md m-auto border-solid w-[35px] h-[35px]  ${
                isDark
                  ? "checked:bg-[#38dbe0] border-[#38dbe0] "
                  : "checked:bg-black border-black "
              }`}
              checked={doneInf[task.id] ?? task.done}
              onChange={(e) => {
                editTask(e.target.checked);
              }}
            />
            <div className="ml-[.75rem]">
              <h2
                className={`font-bold  text-uppercase text-[1.4rem] ${
                  isDark && "text-white"
                } text-center md:text-left`}
              >
                {task.title}
              </h2>
              <p
                className={`text-lg ${
                  isDark && "text-[#8e897b]"
                } text-center   font-bold my-3 md:text-left md:my-0 md:text-md`}
              >
                {task.desc}
              </p>
            </div>
          </div>
          <p
            className={`text-lg my-auto font-bold ${
              isDark && "text-[#8e897b]"
            } text-center my-2 md:text-left md:my-auto`}
          >
            {data.toLocaleDateString("default", {
              day: "2-digit",
              month: "long",
            }) +
              "  " +
              data.toLocaleTimeString("default", {
                hour: "2-digit",
                minute: "2-digit",
              })}
          </p>
        </div>
      </div>
      <div
        className={`w-[30%] bg-red-600 text-white ${
          deleteBar ? "mr-[0] visible" : "mr-[-8rem] invisible "
        }  flex align-middle  justify-center ease-in-out duration-300 h-auto ml-[1rem] rounded-2xl shadow-xl  shadow-[#00000047] md:hidden`}
      >
        <FaTrash
          className={`m-auto   text-3xl cursor-pointer`}
          onClick={deleteTask}
        />
      </div>
    </div>
  );
}

export default Task;
