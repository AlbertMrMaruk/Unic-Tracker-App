import { FaPlus } from "react-icons/fa";
import { updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";

function Task({ task, id, done, setDone }) {
  const editTask = async (doneD) => {
    setDone(doneD);
    await updateDoc(doc(db, "tasks", id), { ...task, done: doneD });
  };
  return (
    <div className="w-[100%] bg-[#38dbe0] text-black rounded-2xl shadow-xl shadow-[#00000047]">
      <div className="bg-[#2fc7cd] rounded-t-xl flex justify-between w-[100%] py-3 px-7">
        <div className="ml-[3.5rem]">
          <h4 className="font-bold  text-uppercase text-xl">{task.category}</h4>
          <h2 className="font-bold  text-uppercase text-2xl ">
            {task.project}
          </h2>
        </div>
        <FaPlus className="my-5 text-xl cursor-pointer" />
      </div>
      <div className="px-7 py-5 rounded-b-xl flex justify-between align-middle m-auto">
        <div className="flex gap-3 align-middle">
          <input
            type="checkbox"
            className="appearance-none  border-[2.5px] rounded-md m-auto border-black border-solid w-[35px] h-[35px] checked:bg-black"
            checked={done}
            onChange={(e) => {
              editTask(e.target.checked);
            }}
          />
          <div className="ml-[.75rem]">
            <h2 className="font-bold  text-uppercase text-[1.4rem]">
              {task.title}
            </h2>
            <p className="text-md"> {task.desc}</p>
          </div>
        </div>
        <p className="text-lg my-auto font-bold">Tommorow</p>
      </div>
    </div>
  );
}

export default Task;
