import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (formData) => {
    const userInfo = {
      name: formData.fullName,
      email: formData.email,
      username: formData.username,
    };
    // console.log(userInfo);
    createUser(
      formData.fullName,
      formData.email,
      formData.password,
      formData.username
    ).then((res) => {
      console.log(res.data);
      if (res.data.message == "Sign Up Successful") {
        setUser(userInfo);
        toast.success("Registration Successful");
        navigate("/");
      } else if (res.data.message == "Email Already Registered") {
        toast.error("Email Already Exists");
      } else {
        toast.error("Username Has Already Taken ");
      }
    });
  };

  return (
    <div className="mb-5 lg:mb-10 bg-base-300 rounded-xl bg-[url('https://i.ibb.co/XFwZHc4/brandi-redd-a-JTi-W00qqt-I-unsplash-2.jpg')] bg-cover bg-center bg-blend-overlay">
      <h1 className="text-3xl  font-jost font-bold text-center pt-5  text-btn-1 font-poppins">
        REGISTER
      </h1>
      <div className="hero flex justify-center flex-wrap px-2 py-5  ">
        <div className="card shrink-0 w-full max-w-md md:border ">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Name is a Required Field!",
                  },
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.fullName && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is a required !",
                  },
                })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Username</span>
              </label>
              <input
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is a required",
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
                className="input input-bordered"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-2xl absolute right-4 top-[61%]"
              >
                {showPassword ? (
                  <IoIosEye></IoIosEye>
                ) : (
                  <IoIosEyeOff></IoIosEyeOff>
                )}
              </span>
            </div>
            <div>
              {errors.password && (
                <p className="text-red-500 font-semibold font-jost">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-blue-500 hover:bg-primary-1  text-lg text-white ">
                Register
              </button>
            </div>
          </form>
          <p className="text-center pb-5 text-lg">
            Already have an account? Please{" "}
            <Link to="/login" className="link text-secondary-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
