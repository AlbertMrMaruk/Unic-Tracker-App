import {
  FaRegCheckSquare,
  FaProjectDiagram,
  FaBullseye,
  FaCalendarCheck,
} from "react-icons/fa";
// import logo from "../assets/output-onlinepngtools (8) — копия.png";
// import { askForNotif, PERMISSION_STATES, subscribeUserToPush } from "../utils";
import Navbar from "../components/Navbar";
import Field from "../components/blocks/Field";
import {
  collection,
  //  addDoc,
  getDocs,
  // serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Textarea from "../components/blocks/Textarea";
import { Reels } from "../services/ReelsService";

function CreateTask() {
  // const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [date, setDate] = useState(new Date());
  const [desc, setDesc] = useState("");
  const [videos, setVideos] = useState("");
  const [hidden, setHidden] = useState(true);
  const [task, setTask] = useState("");
  // const [, setPermissionState] = useState(PERMISSION_STATES.UNKNOWN);
  useEffect(() => {
    const getProjects = async () => {
      const projectsSnap = await getDocs(collection(db, "projects"));
      const projectsArr = [];
      projectsSnap.forEach((el) =>
        projectsArr.push({ data: el.data(), id: el.id })
      );
      setProjects(projectsArr);
      setProject(projectsArr[0]);
    };
    getProjects();
  }, []);
  const addTask = async () => {
    // await Notification.requestPermission().then((perm) => {
    //   if (perm === "granted") {
    //     const timestamp = new Date().getTime() + 5 * 1000;
    //     let mailNotification = new Notification(task, {
    //       tag: "ache-mail",
    //       body: desc,
    //       icon: logo,
    //       showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
    //       data: {
    //         url: window.location.href, // pass the current url to the notification
    //       },
    //     });
    //     mailNotification.onclick = () => {
    //       mailNotification.close();
    //       window.parent.focus();
    //     };
    //   }
    // });

    // const permisionRes = await askForNotif();
    // setPermissionState(permisionRes);
    // if (permisionRes === PERMISSION_STATES.GRANTED) {
    //   const pushSubscription = JSON.parse(
    //     JSON.stringify(await subscribeUserToPush())
    //   );
    //   console.log(pushSubscription);
    // }
    const media = await Reels.requestTopMedia();
    const list = [];
    for (const el of media.data.slice(10, 20)) {
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
    console.log(list);
    setVideos(list);
    setHidden(false);
    //media.data[0].permalink
    //https://www.instagram.com/p/CuPl6mSNng4/
    // await addDoc(collection(db, "tasks"), {
    //   title: task,
    //   project: project.data.name,
    //   projectId: project.id,
    //   categoryId: project.data.categoryId,
    //   category: project.data.category,
    //   desc: desc,
    //   createdAt: serverTimestamp(),
    //   timestamp: serverTimestamp(new Date(date).getTime() / 1000),
    //   done: false,
    // });
    // navigate("/");
  };
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh] pb-10">
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
      <Navbar />

      <div className="static rounded-2xl bg-[#2c2e30] pt-6 px-3 pb-10 w-[55%] m-auto mt-7  shadow-xl shadow-[#00000047] ">
        <div className="absolute bg-[#38dbe0] py-2  text-sm uppercase font-bold px-4 rounded-md top-[9.25rem] left-[36rem] text-black flex gap-3 ">
          <FaRegCheckSquare className="my-auto text-lg" />
          New Task
        </div>

        <Field
          icon={
            <FaRegCheckSquare className="text-[#38dbe0] text-4xl my-auto" />
          }
          placeholder={"Your task name..."}
          setText={setTask}
          text={task}
        ></Field>
        <Field
          icon={
            <FaProjectDiagram className="text-[#38dbe0] text-4xl my-auto" />
          }
          placeholder={"Choose Project..."}
          setText={setProject}
          text={project}
          select={true}
          options={projects}
        ></Field>
        <Field
          icon={<FaCalendarCheck className="text-[#38dbe0] text-4xl my-auto" />}
          type="date"
          setText={setDate}
          text={date}
        ></Field>
        <Textarea text={desc} setText={setDesc}></Textarea>
        <div
          className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full top-[35rem] left-[35.5rem] cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in "
          onClick={addTask}
        >
          <FaBullseye className="my-auto text-2xl" />
          Make it So
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
