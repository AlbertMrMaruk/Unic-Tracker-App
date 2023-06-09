import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaProjectDiagram,
  FaRegCheckSquare,
  FaObjectGroup,
} from "react-icons/fa";
function CreatePage() {
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh] pb-10">
      <Navbar />
      <div className="flex gap-5 mt-[8rem] px-[5rem]">
        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150 shadow-xl shadow-[#00000047]">
          <Link to="/create-task">
            <FaRegCheckSquare className="m-auto text-5xl" />
            <h3 className="text-2xl font-bold mt-3 ">New task</h3>
            <p className="text-md mt-2">A single item to do</p>
          </Link>
        </div>
        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150 shadow-xl shadow-[#00000047]">
          <Link to="/create-project">
            <FaProjectDiagram className="m-auto text-5xl" />
            <h3 className="text-2xl font-bold mt-3 ">New Project</h3>
            <p className="text-md mt-2">
              A bigger task or goal thats requires multiple steps
            </p>
          </Link>
        </div>

        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150 shadow-xl shadow-[#00000047]">
          <Link to="/create-category">
            <FaObjectGroup className="m-auto text-5xl" />
            <h3 className="text-2xl font-bold mt-3 ">New group</h3>
            <p className="text-md mt-2">
              An area or container for your projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
