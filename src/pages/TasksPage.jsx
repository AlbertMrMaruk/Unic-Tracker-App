import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import useFirebaseMessaging from "@useweb/use-firebase-messaging";

function TasksPage() {
  const [doneInf, setDoneInf] = useState({});
  const firebaseMessaging = useFirebaseMessaging({
    onMessage: (message) => {
      console.log(`Received foreground message`, message);
    },
  });

  useEffect(() => {
    firebaseMessaging.init();
  }, []);
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
