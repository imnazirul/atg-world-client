import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
              <a
                href="#"
                className="label-text-alt link link-hover text-[16px]"
              >
                Forgot password?
              </a>
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
    </div>
  );
};

export default Login;
