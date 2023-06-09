import { FaPlus, FaTrash } from "react-icons/fa";
import { updateDoc, doc, collection, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

function Task({ task, id, setDoneInf, doneInf, isDark }) {
  const editTask = async (doneD) => {
    await updateDoc(doc(db, "tasks", id), { ...task, done: doneD });
    setDoneInf((doneI) => ({ ...doneI, [id]: doneD }));
  };
  const deleteTask = async () => {
    await deleteDoc(doc(db, "tasks", id));
    setDoneInf((doneI) => ({ ...doneI, [id]: "deleted" }));
  };
  return (
    <div
      className={`w-[100%] ${
        isDark ? "bg-[#242527]" : "bg-[#38dbe0] text-black"
      } rounded-2xl shadow-xl shadow-[#00000047]`}
    >
      <div
        className={`${
          isDark ? " bg-[#383a39]" : "bg-[#2fc7cd] "
        } rounded-t-xl flex justify-between w-[100%] py-3 px-7`}
      >
        <div className="ml-[3.5rem]">
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
        <div className="flex gap-5">
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
      <div className="px-7 py-5 rounded-b-xl flex justify-between align-middle m-auto">
        <div className="flex gap-3 align-middle">
          <input
            type="checkbox"
            className={`appearance-none  border-[2.5px] rounded-md m-auto border-solid w-[35px] h-[35px]  ${
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
              }`}
            >
              {task.title}
            </h2>
            <p className={`text-md ${isDark && "text-[#8e897b]"}`}>
              {task.desc}
            </p>
          </div>
        </div>
        <p
          className={`text-lg my-auto font-bold ${isDark && "text-[#8e897b]"}`}
        >
          Tommorow
        </p>
      </div>
    </div>
  );
}

export default Task;
