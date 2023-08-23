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
import { getAuth } from "firebase/auth";

function TaskList({ setDoneInf, doneInf, isDone, user }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        //Get a referee
        const auth = getAuth();
        const docsRef = collection(db, "tasks");
        // Create a query
        console.log(auth.currentUser?.uid);
        const q = query(
          docsRef,
          where("done", "==", isDone),
          where("userId", "==", auth.currentUser?.uid),
          orderBy("timestamp", "desc"),
          limit(10)
        );
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
        console.error("Could not fetch tasks", error);
      }
    };
    getTasks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneInf]);

  return (
    <main className="flex  flex-col gap-6 px-[1.5rem] md:px-[5rem] truncate  whitespace-pre-wrap">
      {tasks &&
        tasks.map((el, index) => (
          <Task
            task={el.data}
            setDoneInf={setDoneInf}
            doneInf={doneInf}
            id={el.id}
            key={index}
            isDark={index !== 0}
          />
        ))}
    </main>
  );
}

export default TaskList;
