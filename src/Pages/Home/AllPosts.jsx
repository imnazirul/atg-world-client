import { IoLocationOutline, IoPersonAdd, IoShareSocial } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from "../../assets/Rectangle 5.png";
import Image1 from "../../assets/Rectangle 51.png";
import Image2 from "../../assets/Rectangle 52.png";
import Profile from "../../assets/Rectangle 31.png";
import { IoIosEye, IoMdArrowDropdown } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa6";
import { PiBagSimpleLight } from "react-icons/pi";
import Sidebar from "./Sidebar";
import { HiDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import { MdLogout } from "react-icons/md";

const AllPosts = () => {
  const [btnType, setBtnType] = useState(true);

  return (
    <div className="container mx-auto">
      <div className="md:mx-24 mt-5 max-md:font-poppins md:font-ibmplex mb-10">
        <div className="hidden z-10 sticky top-[69px] bg-base-100 pt-3 md:flex justify-between border-b pb-4 ">
          <div className=" md:flex text-[#8A8A8A]  gap-5 text-lg pt-2">
            <span className="text-black border-b  px-1 border-black font-medium">
              All Post (32)
            </span>
            <span>Article</span>
            <span>Event</span>
            <span>Education</span>
            <span>Job</span>
          </div>
          <div className="hidden lg:flex  gap-4">
            <button className="flex gap-1  items-center px-3 font-medium py-1 rounded bg-[#EDEEF0]">
              Write a Post <TiArrowSortedDown />
            </button>
            <button
              onClick={() => setBtnType(!btnType)}
              className={`flex gap-1 px-2 py-1 rounded font-medium items-center  ${
                btnType
                  ? "bg-[#2F6CE5] text-white"
                  : "text-gray-600 border border-gray-500 bg-transparent"
              } `}
            >
              {btnType ? (
                <>
                  <IoPersonAdd className="text-lg"></IoPersonAdd> Join Group
                </>
              ) : (
                <>
                  <MdLogout className="text-xl"></MdLogout> Leave Group
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex md:hidden justify-between items-center px-4">
          <p className="font-bold text-lg">Post(368)</p>
          <button className="flex gap-1 text-lg items-center bg-[#F1F3F5] px-2 py-1 rounded-md font-semibold ">
            Filter: All <IoMdArrowDropdown></IoMdArrowDropdown>
          </button>
        </div>

        <div className="mt-8 flex md:gap-5">
          <div className="flex flex-col gap-4">
            {/* one */}
            <div className="border overflow-hidden pb-8 rounded-md">
              <img src={Image} alt="" />
              <div className="px-4 mt-5">
                <div className="flex gap-1 items-center mb-2">
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/Fs4srLt/handwriting.png"
                    alt="pencil"
                  />
                  <p className="md:text-lg  font-medium">Article</p>
                </div>

                <div className="flex gap-1 items-center justify-between mb-3">
                  <div className="max-w-[600px]">
                    <h1 className="text-lg md:text-xl font-semibold">
                      What if famous brands had regular fonts? Meet Regular
                      Brands!{" "}
                    </h1>
                  </div>

                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                      {" "}
                      <HiDotsHorizontal className="text-2xl"></HiDotsHorizontal>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
                    >
                      <li>
                        <a>Edit</a>
                      </li>
                      <li>
                        <a>Report</a>
                      </li>
                      <li>
                        <a>Option 3</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="md:text-[19px] text-[#5C5C5C] mb-8">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-1 items-center">
                      <img src={Profile} alt="profile image" />
                      <div>
                        <p className=" font-semibold">Sarthak Kamra</p>
                        <p className="md:hidden">1.4K Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-20 items-center">
                    <p className="hidden md:flex items-center gap-1 text-[#525252]">
                      <IoIosEye className="text-xl"></IoIosEye> 1.4K Views
                    </p>
                    <button className="bg-[#EDEEF0] p-2 px-3 rounded-md">
                      <IoShareSocial className="text-2xl"></IoShareSocial>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* two */}
            <div className="border overflow-hidden pb-8 rounded-md">
              <img src={Image1} alt="" />
              <div className="px-4 mt-5">
                <div className="flex gap-1 items-center mb-2">
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/Fs4srLt/handwriting.png"
                    alt="pencil"
                  />
                  <p className="md:text-lg  font-medium">Education</p>
                </div>

                <div className="flex gap-1 items-center justify-between mb-3">
                  <div className="max-w-[600px]">
                    <h1 className="text-lg md:text-xl font-semibold">
                      Tax Benefits for Investment under National Pension Scheme
                      launched by Government
                    </h1>
                  </div>

                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                      {" "}
                      <HiDotsHorizontal className="text-2xl"></HiDotsHorizontal>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
                    >
                      <li>
                        <a>Edit</a>
                      </li>
                      <li>
                        <a>Report</a>
                      </li>
                      <li>
                        <a>Option 3</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="md:text-[19px] text-[#5C5C5C] mb-8">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-1 items-center">
                      <img
                        src="https://i.ibb.co/s2LwWj9/Rectangle-3-1.png"
                        alt="profile image"
                      />
                      <div>
                        <p className="text-lg font-semibold">Sara West</p>
                        <p className="md:hidden">1.4K Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-20 items-center">
                    <p className="hidden md:flex items-center gap-1 text-[#525252]">
                      <IoIosEye className="text-xl"></IoIosEye> 1.4K Views
                    </p>
                    <button className="bg-[#EDEEF0] p-2 px-3 rounded-md">
                      <IoShareSocial className="text-2xl"></IoShareSocial>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* three */}
            <div className="border overflow-hidden pb-8 rounded-md">
              <img src={Image2} alt="banner" />
              <div className="px-4 mt-5">
                <div className="flex gap-1 items-center mb-2">
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/Fs4srLt/handwriting.png"
                    alt="pencil"
                  />
                  <p className="md:text-lg  font-medium">Meetup</p>
                </div>

                <div className="flex gap-1 items-center justify-between mb-3">
                  <div className="max-w-[600px]">
                    <h1 className="text-lg md:text-xl font-semibold">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </h1>
                  </div>

                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                      {" "}
                      <HiDotsHorizontal className="text-2xl"></HiDotsHorizontal>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
                    >
                      <li>
                        <a>Edit</a>
                      </li>
                      <li>
                        <a>Report</a>
                      </li>
                      <li>
                        <a>Option 3</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" mb-8 flex gap-3 md:gap-40">
                  <p className="flex max-md:text-sm gap-1 items-center font-medium">
                    <FaRegCalendar></FaRegCalendar>
                    Fri, 12 Oct, 2018
                  </p>
                  <p className="flex max-md:text-sm gap-1 items-center font-medium">
                    <IoLocationOutline></IoLocationOutline> Ahmedabad, India
                  </p>
                </div>
                <button className="text-[#E56135] border w-full py-1 mb-8 rounded md:font-semibold">
                  Visit Website
                </button>
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-1 items-center">
                      <img
                        src="https://i.ibb.co/vmk7fGN/Rectangle-3-2.png"
                        alt="profile image"
                      />
                      <div>
                        <p className="text-lg font-semibold">Ronal Jones</p>
                        <p className="md:hidden">1.4K Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-20 items-center">
                    <p className=" hidden md:flex items-center gap-1 text-[#525252]">
                      <IoIosEye className="text-xl"></IoIosEye> 1.4K Views
                    </p>
                    <button className="bg-[#EDEEF0] p-2 px-3 rounded-md">
                      <IoShareSocial className="text-2xl"></IoShareSocial>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* four */}
            <div className="border overflow-hidden pb-8 rounded-md">
              <div className="px-4 mt-5">
                <div className="flex gap-1 items-center mb-2">
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/Fs4srLt/handwriting.png"
                    alt="pencil"
                  />
                  <p className="md:text-lg  font-medium">Job</p>
                </div>

                <div className="flex gap-1 items-center justify-between mb-3">
                  <div className="max-w-[600px]">
                    <h1 className="text-xl font-semibold">
                      Software Developer
                    </h1>
                  </div>

                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                      {" "}
                      <HiDotsHorizontal className="text-2xl"></HiDotsHorizontal>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
                    >
                      <li>
                        <a>Edit</a>
                      </li>
                      <li>
                        <a>Report</a>
                      </li>
                      <li>
                        <a>Option 3</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-8 flex max-md:flex-col  md:gap-40">
                  <p className="flex max-md:text-sm gap-1 items-center font-medium">
                    <PiBagSimpleLight></PiBagSimpleLight> Innovaccer Analytics
                    Private Ltd.
                  </p>
                  <p className="flex gap-1 max-md:text-sm items-center font-medium">
                    <IoLocationOutline></IoLocationOutline> Noida, India
                  </p>
                </div>
                <button className="text-[#02B875] border w-full py-1 mb-8 rounded md:font-semibold">
                  Apply on Timesjobs
                </button>
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-1 items-center">
                      <img
                        src="https://i.ibb.co/pR0n1ww/Rectangle-3-3.png"
                        alt="profile image"
                      />
                      <div>
                        <p className="text-lg font-semibold">Joseph Gray</p>
                        <p className="md:hidden">1.4K Views</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-20 items-center">
                    <p className="hidden md:flex items-center gap-1 text-[#525252]">
                      <IoIosEye className="text-xl"></IoIosEye> 1.4K Views
                    </p>
                    <button className="bg-[#EDEEF0] p-2 px-3 rounded-md">
                      <IoShareSocial className="text-2xl"></IoShareSocial>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block  flex-1  gap-1 px-8 pt-8 border-b">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
