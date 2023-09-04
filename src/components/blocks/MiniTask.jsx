import { FaEdit, FaTrash } from "react-icons/fa";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MiniTask({ task, id, setDoneInf, doneInf, isDark }) {
  const navigate = useNavigate();
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
  const data = new Date(task.timestamp.seconds * 1000);
  return (
    <div
      onTouchStart={handleStart}
      onTouchMove={handleTouchMove}
      className={`py-[2rem] px-[1rem]   flex flex-col justify-between align-middle m-auto md:px-7 md:py-6 md:flex-row  border-b-[1px] border-b-black  ${
        deleteBar ? "ml-[-8rem]" : ""
      } `}
    >
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

      <div className=" gap-5 hidden md:flex align-middle  justify-center h-auto">
        <p
          className={`text-lg my-auto font-bold ${
            isDark && "text-[#8e897b]"
          } text-center md:text-left md:my-auto`}
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
        <FaTrash
          className={`my-2 text-xl cursor-pointer ${
            isDark && "text-[#8e897b]"
          }`}
          onClick={deleteTask}
        />
        <FaEdit
          className={`my-2 text-xl cursor-pointer ${
            isDark && "text-[#8e897b]"
          }`}
          onClick={() => navigate("/edit-task", { state: { id: id } })}
        />
      </div>
    </div>
  );
}
export default MiniTask;
