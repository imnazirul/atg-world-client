/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { TiArrowSortedDown } from "react-icons/ti";
import Logo from "../assets/whole.png";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    toast.success("Logout Successfully");
    localStorage.removeItem("user");
    setUser(null);
  };

  const navLinks = (
    <>
      <li className="text-lg hover:text-blue-500 font-poppins">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg hover:text-blue-500 font-poppins">
        <NavLink to="/posts">All Posts</NavLink>
      </li>
    </>
  );

  return (
    <>
      <Toaster />
      <nav className=" z-10 md:block sticky top-0 border-b font-poppins bg-white">
        <div className="px-4 container mx-auto flex items-center   py-4 justify-between">
          <div className="dropdown md:hidden dropdown-bottom">
            <div tabIndex={0} role="button" className="">
              <IoMenu className="text-4xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-3 px-4 shadow bg-base-100 rounded-box space-y-2 text-[16px] w-56"
            >
              {navLinks}
              {!user && (
                <li className="text-lg hover:text-blue-500 font-poppins">
                  <NavLink to="/register">Create Account</NavLink>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h1 className="text-xl md:text-4xl font-semibold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-transparent bg-clip-text">
              ESocial
            </h1>{" "}
          </div>

          <ul className=" hidden md:flex gap-20">{navLinks}</ul>

          {user ? (
            <div className="flex gap-1 items-center">
              <div className="avatar online">
                <div className="w-9 rounded-full border-2 border-blue-500">
                  <img src="https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg" />
                </div>
              </div>

              <span
                className="md:font-semibold
               text-[16px] md:text-xl font-poppins"
              >
                {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-sm md:ml-5 bg-blue-500 text-white font-poppins hover:bg-blue-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link
                to="/register"
                className=" hidden md:flex gap-1 items-center"
              >
                <p className="text-[#2E2E2E] flex gap-1 items-center font-bold">
                  Create account.{" "}
                  <span className=" hidden md:flex text-[#2F6CE5] font-bold cursor-pointer">
                    It's free!
                  </span>
                </p>
                <TiArrowSortedDown></TiArrowSortedDown>
              </Link>

              <Link
                to="/login"
                className="btn btn-sm bg-blue-500 hover:bg-blue-700 text-white font-poppins"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
