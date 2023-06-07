import { FaObjectGroup, FaBullseye } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Field from "../components/blocks/Field";

function CreateCategory() {
  return (
    <div className="bg-[#1b1d1f] h-screen">
      <Navbar />
      <div className="static rounded-2xl bg-[#2c2e30] pt-6 px-3 pb-10 w-[55%] m-auto mt-7  shadow-xl shadow-[#00000047] ">
        <div className="absolute bg-[#38dbe0] py-2  text-sm uppercase font-bold px-4 rounded-md top-[9.25rem] left-[34.25rem] text-black flex gap-3 ">
          <FaObjectGroup className="my-auto text-lg" />
          New Category
        </div>
        <Field
          icon={<FaObjectGroup className="text-[#38dbe0] text-4xl my-auto" />}
          placeholder={"Your category name..."}
        ></Field>
        <div className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full top-[18rem] left-[35.5rem] cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in ">
          <FaBullseye className="my-auto text-2xl" />
          Make it So
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
