import Navbar from "../components/Navbar";
import { FaBullseye, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Field from "../components/blocks/Field";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../hooks/useAuthStatus";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCreds = await signInWithEmailAndPassword(auth, email, password);
      if (userCreds.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="bg-[#1b1d1f] h-screen">
      <Navbar />
      <div className="static rounded-2xl bg-[#2c2e30] pt-6 px-3 pb-10 w-[90%] md:w-[55%] m-auto mt-7  shadow-xl shadow-[#00000047] ">
        <div className="absolute bg-[#38dbe0] py-2  text-sm uppercase font-bold px-4 rounded-md top-[6.75rem] left-[50%] ml-[-60.5px] md:top-[9.25rem]  text-black flex gap-3 ">
          <FaUser className="my-auto text-lg" />
          Профиль
        </div>
        <Field
          icon={<FaEnvelope className="text-[#38dbe0] text-4xl my-auto" />}
          placeholder={"Почта"}
          setText={(e) => setFormData({ ...formData, email: e })}
          text={email}
        ></Field>
        <Field
          icon={<FaLock className="text-[#38dbe0] text-4xl my-auto" />}
          placeholder={"Пароль"}
          setText={(e) => setFormData({ ...formData, password: e })}
          text={password}
        ></Field>
        <div
          className="absolute bg-[#38dbe0] py-3  text-md uppercase font-bold px-4 rounded-full left-[50%] ml-[-61.85px] top-[19.5rem] md:top-[22.5rem] cursor-pointer text-black flex gap-2 hover:scale-110 duration-100 ease-in "
          onClick={onSubmit}
        >
          <FaBullseye className="my-auto text-2xl" />
          Войти
        </div>
      </div>
      <div className=" text-center mt-9 font-bold cursor-pointer md:mt-14 ">
        <Link to="/sign-up" className="  text-[#1ad6dd]">
          Создать новый аккаунт
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
