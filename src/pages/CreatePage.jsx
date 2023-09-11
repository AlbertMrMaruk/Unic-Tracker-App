import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaProjectDiagram,
  FaRegCheckSquare,
  FaObjectGroup,
} from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

function CreatePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      navigate("/sign-in");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh] pb-10">
      <Navbar user={user} />
      <div className="flex gap-5 flex-col mt-[1rem] md:mt-[8rem] px-[1.5rem] md:px-[5rem] md:flex-row">
        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-full md:w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150 shadow-xl shadow-[#00000047] ">
          <Link to="/create-task">
            <FaRegCheckSquare className="m-auto text-5xl" />
            <h3 className="text-2xl font-bold mt-3 ">Новая задача</h3>
            <p className="text-md mt-2"> Одна задача в группе</p>
          </Link>
        </div>
        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-full md:w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150 shadow-xl shadow-[#00000047]">
          <Link to="/create-project">
            <FaProjectDiagram className="m-auto text-5xl" />
            <h3 className="text-2xl font-bold mt-3 ">Новый проект</h3>
            <p className="text-md mt-2">
              Большой проект с множеством задач и этапов
            </p>
          </Link>
        </div>

        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-full md:w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150 shadow-xl shadow-[#00000047]">
          <Link to="/create-category">
            <FaObjectGroup className="m-auto text-5xl" />
            <h3 className="text-2xl font-bold mt-3 ">Новая группа</h3>
            <p className="text-md mt-2">Группа с проектами</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
