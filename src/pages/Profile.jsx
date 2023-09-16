import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { FaEnvelope, FaUser } from "react-icons/fa";
// import { setDoc, doc, serverTimestamp } from "firebase/firestore";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../hooks/useAuthStatus";
import Field from "../components/blocks/Field";
function Profile() {
  const [user, setUser] = useState({ email: "", displayName: "" });
  const { email, displayName } = user;
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      navigate("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onLogOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };
  return (
    <div className="bg-[#1b1d1f] h-screen">
      <Navbar user={user} />
      <div className="static rounded-2xl bg-[#2c2e30] pt-6 px-3 pb-10 w-[90%] md:w-[55%] m-auto mt-7  shadow-xl shadow-[#00000047] ">
        <div className="absolute bg-[#38dbe0] py-2  text-sm uppercase font-bold px-4 rounded-md top-[6.75rem] left-[50%] ml-[-60.5px] md:top-[9.25rem]  text-black flex gap-3 ">
          <FaUser className="my-auto text-lg" />
          Профиль
        </div>
        <Field
          icon={<FaUser className="text-[#38dbe0] text-4xl my-auto" />}
          placeholder={displayName}
          text={displayName}
          disabled={true}
        ></Field>
        <Field
          icon={<FaEnvelope className="text-[#38dbe0] text-4xl my-auto" />}
          placeholder={email}
          text={email}
          disabled={true}
        ></Field>
        {/* 
        <div className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full left-[50%] ml-[-65px] top-[24rem] md:top-[26.5rem] cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in ">
          <FaBullseye className="my-auto text-2xl" />
          Sign Up
        </div> */}
      </div>
      <div className=" text-center mt-9 font-bold cursor-pointer md:mt-12 ">
        <p onClick={onLogOut} className="  text-[#dd1a1a]">
          Выйти
        </p>
      </div>
    </div>
  );
}

export default Profile;
