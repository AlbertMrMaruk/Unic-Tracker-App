import logo from "../assets/output-onlinepngtools (8).png";
import avatar from "../assets/DCA6ABF9-EE3C-4E5C-84DD-455071481FB3_1_102_o.jpeg";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="navbar
 bg-[#1b1d1f] px-[1.5rem] flex gap-2 w-100 justify-between align-top md:px-[5rem] py-6 text-center"
    >
      <div className="w-[33%] hidden md:block">
        <div className=" flex   rounded-full w-[13rem]  text-lg py-1 bg-[#353535] text-white">
          <span className="text-center  text-white px-3 py-1">
            <FaSearch />
          </span>
          <input
            type="text"
            className="w-[9rem] active:border-none active:outline-none focus:outline-none bg-transparent "
          />
        </div>
      </div>
      <div className="w-[33%]">
        <Link to="/">
          <img
            src={logo}
            className="w-[75px] cursor-pointer  mt-[-.2rem] md:m-auto "
            alt="logo"
          />
          <h4 className="text-[#d1cdc5] text-xl font-semibold mt-2 hidden  md:block">
            Things to focus on today.
          </h4>
        </Link>
      </div>
      <div className="w-[33%]  ">
        <div className="flex gap-5 w-[100%] justify-end">
          <Link to="/create">
            <div className="btn btn-primary rounded-full border-[#38dbe0]  px-4 text-[#38dbe0] border-solid border-2 flex gap-2 py-2 cursor-pointer ">
              <FaPlus className="my-1.5" />
              <p className="text-lg font-[900]">CREATE</p>
            </div>
          </Link>
          <img
            src={avatar}
            className="cursor-pointer rounded-full w-[50px]"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
