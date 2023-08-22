import { FaObjectGroup, FaBullseye } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Field from "../components/blocks/Field";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function CreateCategory() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      navigate("/sign-in");
    }
  }, []);
  const addCategory = async () => {
    await addDoc(collection(db, "categories"), {
      name: category,
    });
    navigate("/create-project");
  };
  return (
    <div className="bg-[#1b1d1f] h-screen">
      <Navbar user={user} />
      <div className="static rounded-2xl bg-[#2c2e30] pt-6 px-3 pb-10 w-[90%] md:w-[55%] m-auto mt-7  shadow-xl shadow-[#00000047] ">
        <div className="absolute bg-[#38dbe0] py-2  text-sm uppercase font-bold px-4 rounded-md top-[6.75rem] left-[50%] ml-[-87.5px] md:top-[9.25rem]  text-black flex gap-3 ">
          <FaObjectGroup className="my-auto text-lg" />
          New Category
        </div>
        <Field
          icon={<FaObjectGroup className="text-[#38dbe0] text-4xl my-auto" />}
          placeholder={"Your category name..."}
          setText={setCategory}
          text={category}
        ></Field>
        <div
          className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full left-[50%] ml-[-77.85px] top-[15.5rem] md:top-[18rem] cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in "
          onClick={addCategory}
        >
          <FaBullseye className="my-auto text-2xl" />
          Make it So
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
