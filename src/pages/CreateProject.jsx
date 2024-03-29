import { FaObjectGroup, FaProjectDiagram, FaBullseye } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Field from "../components/blocks/Field";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function CreateProject() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});

  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      navigate("/sign-in");
    }
    const getCategories = async () => {
      const docsRef = collection(db, "categories");
      const q = query(docsRef, where("userId", "==", auth.currentUser?.uid));
      //Execute a query
      const categoriesSnap = await getDocs(q);
      const categoriesArr = [];
      categoriesSnap.forEach((el) =>
        categoriesArr.push({ data: el.data(), id: el.id })
      );
      setCategories(categoriesArr);
      setCategory(categoriesArr[0]);
    };
    getCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [project, setProject] = useState("");
  const addProject = async () => {
    await addDoc(collection(db, "projects"), {
      name: project,
      category: category.data.name,
      categoryId: category.id,

      userId: user.uid,
    });
    navigate("/create-task");
  };
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh] pb-10">
      <Navbar user={user} />
      <div className="static rounded-2xl bg-[#2c2e30] pt-6 px-3 pb-10 w-[90%] md:w-[55%] m-auto mt-7  shadow-xl shadow-[#00000047] ">
        <div className="absolute bg-[#38dbe0] py-2  text-sm uppercase font-bold px-4 rounded-md top-[6.75rem] left-[50%] ml-[-82.125px]  md:top-[9.25rem]  text-black flex gap-3 ">
          <FaProjectDiagram className="my-auto text-lg" />
          Новый проект
        </div>
        <Field
          icon={
            <FaProjectDiagram className="text-[#38dbe0] text-4xl my-auto" />
          }
          placeholder={"Название проекта..."}
          setText={setProject}
          text={project}
        ></Field>
        <Field
          icon={<FaObjectGroup className="text-[#38dbe0] text-4xl my-auto" />}
          placeholder={"Выберите группу..."}
          setText={setCategory}
          text={category}
          select={true}
          options={categories}
        ></Field>
        <div
          className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full left-[50%] ml-[-77.85px]  top-[19.5rem] md:top-[22rem] cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in "
          onClick={addProject}
        >
          <FaBullseye className="my-auto text-2xl" />
          Создать
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
