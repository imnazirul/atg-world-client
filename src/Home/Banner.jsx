import { FaArrowLeft } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/sVPVZ17/Rectangle-2.png')]  h-[420px] bg-black bg-opacity-50 bg-blend-overlay w-full bg-cover max-md:h-[236px]">
      <div className="flex justify-between flex-col h-full">
        <div className="flex md:hidden justify-between items-center  p-2">
          <FaArrowLeft className="text-white text-2xl"></FaArrowLeft>
          <button className="btn bg-transparent btn-sm text-white border-2 border-white">
            Join Group
          </button>
        </div>
        <div className="flex items-end justify-start h-full w-full ">
          <div className="text-white pb-4 md:pb-16 pl-4 md:pl-24 ">
            <h1 className="text-2xl md:text-3xl font-bold">
              Computer Engineering
            </h1>
            <p className="max-md:text-sm ">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
