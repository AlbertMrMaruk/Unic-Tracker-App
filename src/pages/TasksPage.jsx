import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

function TasksPage() {
  const [doneInf, setDoneInf] = useState({});
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh]  pb-10">
      <Navbar />
      <TaskList isDone={false} doneInf={doneInf} setDoneInf={setDoneInf} />
      <h2 className="text-4xl my-10 font-bold text-white text-center">
        Done Tasks
      </h2>
      <TaskList isDone={true} doneInf={doneInf} setDoneInf={setDoneInf} />
    </div>
  );
}

export default TasksPage;
