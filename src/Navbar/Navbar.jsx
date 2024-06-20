/* eslint-disable react/no-unescaped-entities */
import { TiArrowSortedDown, TiDelete } from "react-icons/ti";
import Logo from "../assets/whole.png";
import { IoIosEye, IoIosEyeOff, IoIosSearch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Facebook from "../assets/facebook.png";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, user, setUser } = useContext(AuthContext);

  console.log("userInfo", user);

  // console.log(createUser);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleRegister = (formData) => {
    if (formData.password != formData.confirmPassword) {
      return setError("confirmPassword", {
        message: "Password Didn't Match",
      });
    }

    const userInfo = {
      name: formData.name,
      email: formData.email,
      username: formData.username,
    };
    // console.log(userInfo);
    createUser(
      formData.name,
      formData.email,
      formData.password,
      formData.username
    ).then((res) => {
      console.log(res.data);
      if (res.data.message == "Sign Up Successful") {
        setUser(userInfo);
        document.getElementById("my_modal_4").close();
        toast.success("Registration Successful");
      }
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Toaster />
      <nav className=" z-10 md:block sticky top-0 border-b font-poppins bg-white">
        <div className="px-4 container mx-auto flex items-center  font-ibmplex  py-4 justify-between">
          <div>
            <img className="w-32" src={Logo} alt="logo" />
          </div>
          <div className=" hidden md:flex bg-[#F2F2F2] w-80 max-w-80 px-4  items-center gap-1 py-2 rounded-3xl">
            <IoIosSearch className="text-[#5C5C5C] text-xl"></IoIosSearch>
            <input
              className="w-full placeholder:font-medium placeholder:text-[14px]  outline-none  h-full bg-transparent"
              placeholder="Search for your favorite groups in ATG"
              type="search"
            />
          </div>

          {user ? (
            <div className="flex gap-1 items-center">
              <div className="avatar online">
                <div className="w-9 rounded-full border-2 border-blue-500">
                  <img src="https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg" />
                </div>
              </div>
              <span
                className="font-semibold
               text-xl font-poppins"
              >
                {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-sm ml-5 bg-blue-500 text-white font-poppins hover:bg-blue-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="flex gap-1 items-center"
            >
              <p className="text-[#2E2E2E] flex gap-1 items-center font-bold">
                Create account.{" "}
                <span className=" hidden md:flex text-[#2F6CE5] font-bold cursor-pointer">
                  It's free!
                </span>
              </p>
              <TiArrowSortedDown></TiArrowSortedDown>
            </button>
          )}
        </div>
      </nav>

      <button
        onClick={() => document.getElementById("my_modal_4").showModal()}
        className=" md:hidden fixed bottom-5 right-4"
      >
        <img src="https://i.ibb.co/fvT0XBL/Group-6.png" alt="" />
      </button>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal ">
        <div className="max-md:absolute md:top-2 max-md:bottom-0 md:relative   max-w-4xl">
          <div className="bg-white  rounded-xl overflow-hidden">
            <button
              onClick={() => document.getElementById("my_modal_4").close()}
              className="absolute md:-top-12 md:-p-2 top-1 right-1  rounded-full bg-opacity-60 md:right-0"
            >
              <TiDelete className="text-5xl cursor-pointer  md:text-white "></TiDelete>
            </button>
            <div className="bg-[#EFFFF4] hidden md:block py-3">
              <p className="font-medium text-center text-[#008A45]">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
            </div>
            {/* sign up */}
            <div
              className={`${
                show ? "flex" : "hidden"
              } md:gap-4  justify-between px-4 md:px-8 pt-5`}
            >
              <div>
                <h1 className="text-2xl mb-5 font-bold text-black">
                  Create Account
                </h1>
                <form
                  onSubmit={handleSubmit(handleRegister)}
                  className="grid grid-cols-2"
                >
                  <div className="">
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Enter Your Name",
                        },
                      })}
                      type="text"
                      placeholder={`${
                        errors.name ? errors.name.message : "Name"
                      }`}
                      className={`bg-[#F7F8FA]  px-2 py-3 border border-[#8A8A8A] outline-none md:placeholder:font-medium max-md:w-full rounded-none ${
                        errors.name ? "placeholder:text-red-500 " : ""
                      }`}
                    />
                  </div>

                  <div className="">
                    <input
                      {...register("username", {
                        required: {
                          value: true,
                          message: "Enter Username Here",
                        },
                      })}
                      type="text"
                      placeholder={`${
                        errors.username ? errors.username.message : "Username"
                      }`}
                      className={`bg-[#F7F8FA]  px-2 py-3 border border-[#8A8A8A] outline-none md:placeholder:font-medium border-l-0 max-md:w-full md:pl-[9px] rounded-none ${
                        errors.username ? "placeholder:text-red-500 " : ""
                      }`}
                    />
                  </div>

                  <div className="col-span-2">
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Enter Email Here",
                        },
                      })}
                      type="email"
                      placeholder={`${
                        errors.email ? errors.email.message : "Email"
                      }`}
                      className={` bg-[#F7F8FA]  px-2 py-3 border border-[#8A8A8A] outline-none md:placeholder:font-medium  w-full border-t-0 rounded-none ${
                        errors.email ? "placeholder:text-red-500 " : ""
                      }`}
                    />
                  </div>

                  <div className="col-span-2 relative">
                    <input
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Enter password",
                        },
                      })}
                      placeholder={`${
                        errors.password ? errors.password.message : "Password"
                      }`}
                      type={showPassword ? "text" : "password"}
                      className={`bg-[#F7F8FA]  px-2 py-3 border border-[#8A8A8A] outline-none md:placeholder:font-medium border-t-0 w-full rounded-none ${
                        errors.password ? "placeholder:text-red-500 " : ""
                      }`}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-2xl absolute right-4 top-[25%]"
                    >
                      {showPassword ? (
                        <IoIosEye></IoIosEye>
                      ) : (
                        <IoIosEyeOff></IoIosEyeOff>
                      )}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <input
                      {...register("confirmPassword", {
                        required: {
                          value: true,
                          message: "Confirm password!",
                        },
                      })}
                      type="password"
                      placeholder="Confirm Password"
                      className={`bg-[#F7F8FA]  px-2 py-3 border border-[#8A8A8A] outline-none md:placeholder:font-medium border-t-0 w-full  rounded-none `}
                    />

                    {errors.confirmPassword && (
                      <p className="text-red-500 font-semibold font-jost">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2 max-md:flex max-md:justify-between max-md:items-center mt-4">
                    <button className="btn rounded-3xl bg-[#2F6CE5] text-white font-semibold md:w-full hover:bg-[#2F6CE5] ">
                      Create Account
                    </button>
                    <p
                      onClick={() => setShow(!show)}
                      className="md:hidden text-lg underline"
                    >
                      or, Sign In
                    </p>
                  </div>
                </form>

                <div className="w-full mb-5">
                  <button className="disabled:cursor-not-allowed flex justify-center items-center w-full lg:space-x-3 space-x-1 max-sm:mt-3 border md:mt-3 lg:px-8 md:px-2 px-1 py-2 hover:shadow-xl border-gray-300 rounded-3xl bg-base-100 brightness-110 font-medium cursor-pointer">
                    <img src={Facebook} className="w-8 h-8" alt="facebook" />{" "}
                    <p>Sign In With Facebook</p>
                  </button>

                  <button className="disabled:cursor-not-allowed flex justify-center items-center w-full lg:space-x-3 space-x-1 max-sm:mt-3 border md:mt-3 lg:px-8 md:px-2 px-1 py-2 hover:shadow-xl border-gray-300 rounded-3xl bg-base-100 brightness-110 font-medium cursor-pointer">
                    <FcGoogle size={32} />

                    <p>Sign In with Google</p>
                  </button>
                  <p className="text-center mt-2 text-sm mb-2 md:hidden">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="text-center">
                  Already have an account?{" "}
                  <span
                    onClick={() => setShow(!show)}
                    className="font-semibold cursor-pointer text-[#2F6CE5]"
                  >
                    Sign In
                  </span>
                </p>
                <img src="https://i.ibb.co/Ns4WK8t/Group-3.png" alt="banner" />
                <p className="text-sm">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>

            {/* sign In */}

            <div
              className={`${
                !show ? "flex" : "hidden"
              } gap-4 justify-between md:px-8 w-[100vw] px-4 pt-5 max-md:mb-16 `}
            >
              <div className="md:max-w-96  md:w-96">
                <h1 className="text-2xl mb-5 font-bold text-black">Sign In</h1>
                <form
                  onClick={(e) => e.preventDefault()}
                  className="md:flex md:flex-col w-full"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className=" bg-[#F7F8FA]  px-2 py-3 border border-[#8A8A8A] outline-none  w-full  rounded-none md:placeholder:font-medium"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className=" bg-[#F7F8FA]  px-2 py-3 border border-[#8A8A8A] outline-none border-t-0 w-full rounded-none md:placeholder:font-medium"
                  />

                  <div className="col-span-2 mt-4 max-md:flex max-md:justify-between max-md:items-center">
                    <button className="btn rounded-3xl bg-[#2F6CE5] text-white font-semibold md:w-full hover:bg-[#2F6CE5] ">
                      Sign In
                    </button>
                    <p
                      onClick={() => setShow(!show)}
                      className="md:hidden text-lg underline"
                    >
                      or, Create Account
                    </p>
                  </div>
                </form>

                <div className="w-full mb-8">
                  <button className="disabled:cursor-not-allowed flex justify-center items-center w-full lg:space-x-3 space-x-1 max-sm:mt-3 border md:mt-3 lg:px-8 md:px-2 px-1 py-2 hover:shadow-xl border-gray-300 rounded-3xl bg-base-100 brightness-110 font-medium cursor-pointer">
                    <img src={Facebook} className="w-8 h-8" alt="facebook" />{" "}
                    <p>Sign In With Facebook</p>
                  </button>

                  <button className="disabled:cursor-not-allowed flex justify-center items-center w-full lg:space-x-3 space-x-1 max-sm:mt-3 border md:mt-3 lg:px-8 md:px-2 px-1 py-2 hover:shadow-xl border-gray-300 rounded-3xl bg-base-100 brightness-110 font-medium cursor-pointer">
                    <FcGoogle size={32} />

                    <p>Sign In with Google</p>
                  </button>
                  <p className="hover:underline cursor-pointer text-center mt-4  font-semibold">
                    Forgot Password?
                  </p>
                </div>
              </div>
              <div className="hidden md:block flex-1">
                <p className="text-left md:pl-5">
                  Don’t have an account yet?{" "}
                  <span
                    onClick={() => setShow(!show)}
                    className="font-semibold cursor-pointer text-[#2F6CE5]"
                  >
                    Create new for free!
                  </span>
                </p>
                <img src="https://i.ibb.co/Ns4WK8t/Group-3.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
