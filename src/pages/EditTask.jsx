import {
  FaRegCheckSquare,
  FaProjectDiagram,
  FaBullseye,
  FaCalendarCheck,
} from "react-icons/fa";
import { getAuth } from "firebase/auth";
// import logo from "../assets/output-onlinepngtools (8) — копия.png";
// import { askForNotif, PERMISSION_STATES, subscribeUserToPush } from "../utils";
import Navbar from "../components/Navbar";
import Field from "../components/blocks/Field";
import {
  collection,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Textarea from "../components/blocks/Textarea";

function EditTask() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [date, setDate] = useState(new Date());
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState("");
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const { state } = useLocation();
  // const [, setPermissionState] = useState(PERMISSION_STATES.UNKNOWN);
  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      navigate("/sign-in");
    }
    const getProjects = async () => {
      const projectsSnap = await getDocs(collection(db, "projects"));
      const projectsArr = [];
      projectsSnap.forEach((el) =>
        projectsArr.push({ data: el.data(), id: el.id })
      );
      const taskElement = await getDoc(doc(db, "tasks", state.id));
      setProjects(projectsArr);

      setProject(
        projectsArr.find((el) => el.id === taskElement.data().projectId)
      );
      setDesc(taskElement.data().desc);
      setTask(taskElement.data().title);
    };
    getProjects();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editTask = async () => {
    await updateDoc(doc(db, "tasks", state.id), {
      title: task,
      project: project.data.name,
      projectId: project.id,
      categoryId: project.data.categoryId,
      category: project.data.category,
      desc: desc,
      userId: user.uid,
      createdAt: serverTimestamp(),
      timestamp: serverTimestamp(new Date(date).getTime() / 1000),
      done: false,
    });
    navigate("/");
  };
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh] pb-10">
      <Navbar user={user} />

      <div className="static rounded-2xl bg-[#2c2e30] pt-6 px-3 pb-10 w-[90%] md:w-[55%] m-auto mt-7  shadow-xl shadow-[#00000047] ">
        <div className="absolute bg-[#38dbe0] py-2  text-sm uppercase font-bold px-4 rounded-md top-[6.75rem] left-[50%] ml-[-67.91px] md:top-[9.25rem]  text-black flex gap-3 ">
          <FaRegCheckSquare className="my-auto text-lg" />
          Edit Task
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
          className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full top-[32.5rem] left-[50%] ml-[-77.85px]   md:top-[35rem]  cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in "
          onClick={editTask}
        >
          <FaBullseye className="my-auto text-2xl" />
          Make it So
        </div>
      </div>
    </div>
  );
}

export default EditTask;
