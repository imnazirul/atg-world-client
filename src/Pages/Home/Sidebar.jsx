import { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import { HiPencil } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

const Sidebar = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("/groups.json")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  return (
    <>
      <div className="flex items-center  w-full">
        <p className="flex  gap-2  w-full border-b justify-between text-xl">
          <span className="flex gap-1 ">
            <IoLocationSharp></IoLocationSharp>Noida, India
          </span>
        </p>
        <HiPencil className="cursor-pointer text-xl"></HiPencil>
      </div>
      <div className="flex gap-1 items-center mt-8">
        <CiCircleInfo></CiCircleInfo>
        <p className="text-xs text-[#808080]">
          Your location will help us serve better and extend a personalized
          experience.
        </p>
      </div>
      <div className="flex gap-1 items-center mt-12">
        <AiTwotoneLike></AiTwotoneLike>{" "}
        <p className="uppercase">REcommended Groups</p>
      </div>
      <div className="flex flex-col gap-5 my-6">
        {groups.map((group, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex gap-1 items-center">
              <img src={group.image} alt="image" />
              <p>{group.name}</p>
            </div>
            <button className="bg-[#EDEEF0] self-start rounded-3xl py-1 px-3">
              Follow
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-[#2F6CE5]">See More...</button>
      </div>
    </>
  );
};

export default Sidebar;
