import Task from "./blocks/Task";
import TasksGroup from "./blocks/TasksGroup";
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

function TaskList({ setDoneInf, doneInf, isDone, setSpinner, tasksView }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState();
  useEffect(() => {
    const getTasks = async () => {
      try {
        //Get a referee
        const auth = getAuth();
        const docsRef = collection(db, "tasks");
        // Create a query

        const q = query(
          docsRef,
          where("done", "==", isDone),
          where("userId", "==", auth.currentUser?.uid),
          orderBy("timestamp", "desc"),
          limit(25)
        );
        //Execute a query
        const querySnap = await getDocs(q);
        const tasksArr = [];
        const projectsSet = new Set();
        querySnap.forEach((el) => {
          projectsSet.add(el.data().projectId);
          return tasksArr.push({
            id: el.id,
            data: el.data(),
          });
        });
        setSpinner(false);
        setProjects(new Array(...projectsSet));
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
      {tasksView === "classic"
        ? tasks &&
          tasks.map((el, index) => {
            return (
              <Task
                task={el.data}
                setDoneInf={setDoneInf}
                doneInf={doneInf}
                id={el.id}
                key={index}
                isDark={index !== 0}
              />
            );
          })
        : projects &&
          projects.map((id, index) => {
            return (
              <TasksGroup
                tasks={tasks.filter((el) => el.data.projectId === id)}
                setDoneInf={setDoneInf}
                doneInf={doneInf}
                id={id}
                key={index}
                isDark={index !== 0}
              />
            );
          })}
      {/* {tasks &&
        tasks.map((el, index) => {
          return (
            <Task
              task={el.data}
              setDoneInf={setDoneInf}
              doneInf={doneInf}
              id={el.id}
              key={index}
              isDark={index !== 0}
            />
          );
        })} */}
    </main>
  );
}

export default TaskList;
