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
import { useNavigate } from "react-router-dom";
import Textarea from "../components/blocks/Textarea";
import { Reels } from "../services/ReelsService";

function CreateTask() {
  // const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [date, setDate] = useState(new Date());
  const [desc, setDesc] = useState("");
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
    await Reels.requestMediaURL(media.data[0].permalink);

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
