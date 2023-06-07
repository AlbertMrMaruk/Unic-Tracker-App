import { FaRegCheckSquare, FaProjectDiagram, FaBullseye } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Field from "../components/blocks/Field";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [task, setTask] = useState("");
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
    console.log({
      name: task,
      project: project.data.name,
      projectId: project.id,
      categoryId: project.data.categoryId,
      category: project.data.category,
    });
    // await addDoc(collection(db, "projects"), {
    //   name: project,
    //   project: project.name,
    //   projectId: project.id,
    //   categoryId: project.categoryId,
    //   category: project.category,
    // });
    // navigate("/");
  };
  return (
    <div className="bg-[#1b1d1f] h-screen">
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
        <div
          className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full top-[22rem] left-[35.5rem] cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in "
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
