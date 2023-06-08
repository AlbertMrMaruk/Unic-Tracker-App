import Task from "./blocks/Task";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";

function TaskList({ isDone }) {
  const [tasks, setTasks] = useState();
  const [doneInf, setDoneInf] = useState(false);
  useEffect(() => {
    const getTasks = async () => {
      try {
        //Get a referee
        const docsRef = collection(db, "tasks");
        // Create a query
        const q = query(docsRef, where("done", "==", isDone), limit(10));
        //orderBy("timestamp", "desc")
        //Execute a query
        const querySnap = await getDocs(q);
        const tasksArr = [];
        querySnap.forEach((el) => {
          return tasksArr.push({
            id: el.id,
            data: el.data(),
          });
        });
        setTasks(tasksArr);
      } catch (error) {
        console.error("Could not fetch tasks");
      }
    };
    getTasks();
  }, [doneInf]);

  return (
    <main className="flex  flex-col gap-6 px-[5rem]">
      {tasks &&
        tasks.map((el, index) => (
          <Task
            task={el.data}
            setDoneInf={setDoneInf}
            id={el.id}
            key={index}
            isDark={index !== 0}
          />
        ))}
    </main>
  );
}

export default TaskList;
