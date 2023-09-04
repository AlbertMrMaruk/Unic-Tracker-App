import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { Reels } from "../services/ReelsService";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/blocks/Spinner";
// import useFirebaseMessaging from "@useweb/use-firebase-messaging";

function TasksPage() {
  const [doneInf, setDoneInf] = useState({});
  const [videos, setVideos] = useState("");
  const [tasksView, setTasksView] = useState("classic");
  const [spinner, setSpinner] = useState(true);
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      console.log(auth.currentUser);
    } else {
      navigate("/sign-in");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const firebaseMessaging = useFirebaseMessaging({
  //     onMessage: (message) => {
  //       console.log(`Received foreground message`, message);
  //     },
  //   });

  //   useEffect(() => {
  //     firebaseMessaging.init();
  //   }, []);
  const loadReels = async () => {
    const media = await Reels.requestTopMedia();
    const list = [];
    for (const el of media.data.slice(1, 3)) {
      if (el.media_type === "IMAGE") {
        list.push({ type: "img", src: el.media_url });
      } else {
        const src = await Reels.requestMediaURL(el.permalink);
        src &&
          list.push({
            type: "video",
            src,
          });
      }
    }
    setVideos(list);
    setHidden(false);
  };
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh]  pb-10">
      {hidden || (
        <div
          className="bg-[#000000b4] w-full h-full absolute z-50"
          onClick={() => setHidden(true)}
        >
          {videos.map((el) =>
            el.type === "img" ? (
              <img
                src={el.src}
                alt="Instagram Posts"
                className="mt-10  z-50 m-auto"
                width={500}
                height={500}
              />
            ) : (
              <video
                src={el.src}
                className="mt-10  z-50 m-auto"
                width={500}
                height={500}
                controls
              ></video>
            )
          )}
        </div>
      )}
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <Navbar
            user={user}
            setTasksView={setTasksView}
            tasksView={tasksView}
          />
          <TaskList
            isDone={false}
            user={user}
            doneInf={doneInf}
            setDoneInf={setDoneInf}
            tasksView={tasksView}
            setSpinner={setSpinner}
          />
          <h2
            className="text-4xl my-10 font-bold text-white text-center"
            onClick={loadReels}
          >
            Done Tasks
          </h2>
        </>
      )}
      <TaskList
        isDone={true}
        user={user}
        doneInf={doneInf}
        setDoneInf={setDoneInf}
        tasksView={tasksView}
        setSpinner={setSpinner}
      />
    </div>
  );
}

export default TasksPage;
