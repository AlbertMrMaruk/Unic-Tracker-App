import Task from "./blocks/Task";
import TaskBlack from "./blocks/TaskBlack";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";

function TaskList() {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    const getTasks = async () => {
      try {
        //Get a referee
        const docsRef = collection(db, "tasks");
        // Create a query
        const q = query(docsRef, orderBy("timestamp", "desc"), limit(10));
        //Execute a query
        const querySnap = await getDocs(q);
        const tasksArr = [];
        console.log(querySnap[0]);
        querySnap.forEach((el) => {
          return tasksArr.push({
            id: el.id,
            data: el.data(),
          });
        });
        console.log(tasksArr);
        setTasks(tasksArr);
      } catch (error) {
        console.error("Could not fetch tasks");
      }
    };
    getTasks();
  }, []);

  return (
    <main className="flex  flex-col gap-6 px-[5rem]">
      <Task />
      <TaskBlack />
    </main>
  );
}

export default TaskList;
