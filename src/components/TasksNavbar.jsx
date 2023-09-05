import logo from "../assets/output-onlinepngtools (8).png";
import noAvatar from "../assets/no_foto.jpg";
import avatar from "../assets/DCA6ABF9-EE3C-4E5C-84DD-455071481FB3_1_102_o.jpeg";
import { FaPlus, FaListAlt, FaThList } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function TasksNavbar({ user, setTasksView, tasksView, countTasks }) {
  const navigate = useNavigate();
  return (
    <div
      className="navbar
 bg-[#1b1d1f] px-[1.5rem] flex gap-2 w-100 justify-between align-top md:px-[5rem] py-6 text-center mb-[5.5rem] md:mb-0"
    >
      <div className="w-[33%]  flex gap-7 md:ml-[2rem] md:mr-0 absolute md:relative mt-[4.5rem] md:mt-0 mx-[6rem] ">
        <button
          className={`${
            tasksView === "classic" ? "text-white" : "text-[#d1cdc5]"
          } text-xl font-bold `}
          onClick={() => setTasksView("classic")}
        >
          <FaListAlt
            className={`mx-auto  text-4xl mb-2 ${
              tasksView === "classic" ? "text-[#38dbe0]" : "text-[#d1cdc5]"
            }`}
          />
          Classic
        </button>
        <button
          className={`${
            tasksView === "group" ? "text-white" : "text-[#d1cdc5]"
          } text-xl font-bold `}
          onClick={() => setTasksView("group")}
        >
          <FaThList
            className={`mx-auto  text-4xl mb-2 ${
              tasksView === "group" ? "text-[#38dbe0]" : "text-[#d1cdc5]"
            }`}
          />
          Group
        </button>
        {/* <div className="text-xl font-bold mt-1.5  text-white ml-[3rem]">
          <div className="bg-[#38dbe0] text-black rounded-full py-1 w-[3rem] mx-auto h-[2.5rem] mb-2 ">
            <span className="font-bold text-2xl">{countTasks.process}</span>
          </div>
          Work
        </div>
        <div className="text-xl font-bold mt-1.5  text-[#d1cdc5] ">
          <div className="bg-[#d1cdc5] text-black rounded-full py-1 w-[3rem]  mx-auto h-[2.5rem] mb-2 ">
            <span className="font-bold text-2xl">{countTasks.done}</span>
          </div>
          Done
        </div> */}
      </div>
      <div className="w-[33%]">
        <Link to="/">
          <div className="block md:gap-4 md:flex ">
            <div className="bg-[#2fc7cd] text-black rounded-full py-1 w-[3rem] mx-auto h-[2.5rem] mb-2 hidden md:block">
              <span className="font-bold text-2xl ">{countTasks.process}</span>
            </div>
            <img
              src={logo}
              className="w-[75px] cursor-pointer  mt-[-.2rem] md:m-auto "
              alt="logo"
            />
            <div className="bg-[#d1cdc5] text-black rounded-full py-1 w-[3rem]  mx-auto h-[2.5rem] mb-2 hidden md:block">
              <span className="font-bold text-2xl">{countTasks.done}</span>
            </div>
          </div>
          <h4 className="text-[#d1cdc5] text-xl font-semibold mt-2 hidden  md:block">
            Things to focus on today.
          </h4>
        </Link>
      </div>
      <div className="w-[33%] flex items-center justify-center ">
        <div className="flex gap-5 w-[100%] justify-end">
          <Link to="/create">
            <div className="btn btn-primary rounded-full border-[#38dbe0]  px-4 text-[#38dbe0] border-solid border-2 flex gap-2 py-2 cursor-pointer ">
              <FaPlus className="my-1.5" />
              <p className="text-lg font-[900]">CREATE</p>
            </div>
          </Link>

          <img
            src={user?.displayName === "Albert" ? avatar : noAvatar}
            className="cursor-pointer rounded-full w-[50px]"
            alt="Avatar"
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>
    </div>
  );
}

export default TasksNavbar;
