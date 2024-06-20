import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showPage, setShowPage] = useState(true);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [passMatchErr, setPassMatchErr] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (formData) => {
    signIn(formData.username, formData.password).then((res) => {
      if (res.data.message === "user not found") {
        toast.error("User Not Found!");
      } else if (res.data.message === "Invalid Password") {
        toast.error("Invalid Password");
      }

      if (res.data.message === "login successful") {
        toast.success("Login Successful");
        setUser(res.data.user);
        navigate("/");
      }
    });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const userInfo = {
      email,
      username,
    };
    axiosPublic.post("/forgot-password", userInfo).then((res) => {
      if (res.data.message === "user not found") {
        toast.error("User Not Found!");
      }
      if (res.data.message === "user found") {
        setUserInfo(res.data.userInfo);
        setShowPage(false);
      }
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      return setPassMatchErr(true);
    }
    setPassMatchErr(false);
    const newDoc = {
      password: password,
    };
    axiosPublic
      .patch(`/change-password/${userInfo?.email}`, newDoc)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          document.getElementById("my_modal_1").close();
          setShowPage(true);
          navigate("/login");
          toast.success("Password Changed. Now Login !");
        }
      });
  };

  return (
    <div className="mb-5 lg:mb-10 bg-base-300 rounded-xl bg-[url('https://i.ibb.co/XFwZHc4/brandi-redd-a-JTi-W00qqt-I-unsplash-2.jpg')] bg-cover bg-center bg-blend-overlay">
      {/* <Helmet>
        <title>Sign In | ECO Volunteers</title>
      </Helmet> */}
      <h1 className="text-3xl font-jost font-bold text-center pt-5 ">LOGIN</h1>
      <div className="hero flex justify-center flex-wrap px-2 py-5 lg:py-10">
        <div className="card shrink-0 w-full max-w-md md:border">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Username</span>
              </label>
              <input
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is a Required!",
                  },
                })}
                type="text"
                placeholder="Username"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.username && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Enter password to proceed!",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input w-full input-bordered"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="text-2xl absolute right-4 top-[60%]"
              >
                {showPassword ? (
                  <IoIosEye></IoIosEye>
                ) : (
                  <IoIosEyeOff></IoIosEyeOff>
                )}
              </div>
            </div>
            <div>
              {errors.password && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.password.message}
                </p>
              )}
            </div>
            <label className="label">
              <p
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="label-text-alt link link-hover text-[16px]"
              >
                Forgot password?
              </p>
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 hover:bg-primary-1 text-lg text-white hover:bg-btn-1">
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-4 justify-center  items-center mb-5">
            {" "}
          </div>
          <p className="text-center mb-4 text-lg">
            Don't have any account?{" "}
            <Link to="/register" className="link text-secondary-1 pb-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* forgot password */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box font-poppins px-5">
          <Toaster />
          <div className={`${showPage ? "" : "hidden"}`}>
            <h3
              className=" text-2xl
          text-blue-500 text-center mb-5"
            >
              Change Password
            </h3>
            <form
              onSubmit={handleForgotPassword}
              className="flex flex-col items-center max-w-80 mx-auto gap-2"
            >
              <div className="w-full">
                <p className=" text-center  text-lg">Enter Email </p>{" "}
                <input
                  name="email"
                  type="text"
                  className=" px-4 py-2 w-full bg-gray-200 outline-none rounded-3xl placeholder:text-[16px]"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="w-full">
                <p className=" text-center  text-lg">Enter Username </p>
                <input
                  name="username"
                  type="text"
                  className=" px-4 py-2 bg-gray-200 w-full outline-none rounded-3xl placeholder:text-[16px]"
                  placeholder="Username"
                  required
                />
              </div>

              <input
                type="submit"
                value="Next"
                className="btn mt-5 bg-blue-500 hover:bg-blue-700 text-white px-16 text-lg rounded-3xl"
              />
            </form>
          </div>

          <div>
            <div className={`${!showPage ? "" : "hidden"}`}>
              <h3
                className=" text-2xl
          text-blue-500 text-center mb-5"
              >
                Enter New Password
              </h3>
              <form
                onSubmit={handleChangePassword}
                className="flex flex-col items-center max-w-80 mx-auto gap-2"
              >
                <div className="w-full relative">
                  <p className=" text-center  text-lg">New Password </p>{" "}
                  <input
                    name="password"
                    type={`${showNewPassword ? "text" : "password"}`}
                    className=" px-4 py-2 w-full bg-gray-200 outline-none rounded-3xl placeholder:text-[16px]"
                    placeholder="New Password"
                    required
                  />
                  <span
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="text-2xl absolute right-4 top-[55%]"
                  >
                    {showNewPassword ? (
                      <IoIosEye></IoIosEye>
                    ) : (
                      <IoIosEyeOff></IoIosEyeOff>
                    )}
                  </span>
                </div>

                <div className="w-full relative">
                  <p className=" text-center  text-lg">Confirm New Password </p>
                  <input
                    name="confirmPassword"
                    type={`${showConfirmPass ? "text" : "password"}`}
                    className=" px-4 py-2 bg-gray-200 w-full outline-none rounded-3xl placeholder:text-[16px]"
                    placeholder="Confirm New Password"
                    required
                  />
                  <span
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    className="text-2xl absolute right-4 top-[55%]"
                  >
                    {showConfirmPass ? (
                      <IoIosEye></IoIosEye>
                    ) : (
                      <IoIosEyeOff></IoIosEyeOff>
                    )}
                  </span>
                </div>

                {passMatchErr && (
                  <p className="text-red-500 text-center">
                    Password Didn't Match
                  </p>
                )}

                <input
                  type="submit"
                  value="Next"
                  className="btn mt-5 bg-blue-500 hover:bg-blue-700 text-white px-16 text-lg rounded-3xl"
                />
              </form>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-blue-500 text-white">Close</button>
            </form>
          </div>

          {/* new password */}
        </div>
      </dialog>
    </div>
  );
};

export default Login;
