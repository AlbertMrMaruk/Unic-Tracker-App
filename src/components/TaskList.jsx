import Task from "./blocks/Task";
import TaskBlack from "./blocks/TaskBlack";

function TaskList() {
  return (
    <main className="flex  flex-col gap-6 px-[5rem]">
      <Task />
      <TaskBlack />
    </main>
  );
}

export default TaskList;
