import Navbar from "../components/Navbar";
import {
  FaProjectDiagram,
  FaRegCheckSquare,
  FaObjectGroup,
} from "react-icons/fa";
function CreatePage() {
  return (
    <div className="bg-[#1b1d1f] h-screen">
      <Navbar />
      <div className="flex gap-5 mt-[8rem] px-[5rem]">
        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150">
          <FaRegCheckSquare className="m-auto text-5xl" />
          <h3 className="text-2xl font-bold mt-3 ">New task</h3>
          <p className="text-md mt-2">A single item to do</p>
        </div>
        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150">
          <FaProjectDiagram className="m-auto text-5xl" />
          <h3 className="text-2xl font-bold mt-3 ">New Project</h3>
          <p className="text-md mt-2">
            A bigger task or goal thats requires multiple steps
          </p>
        </div>
        <div className="border-2 border-white text-white rounded-3xl py-7 px-2 w-[33%] text-center cursor-pointer hover:bg-[#38dbe0] hover:border-[#38dbe0] hover:text-black ease-in duration-150">
          <FaObjectGroup className="m-auto text-5xl" />
          <h3 className="text-2xl font-bold mt-3 ">New group</h3>
          <p className="text-md mt-2">
            An area or container for your projects{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
