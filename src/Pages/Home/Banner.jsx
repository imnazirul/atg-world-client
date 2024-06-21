const Banner = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/267355/pexels-photo-267355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  h-[420px] bg-black bg-opacity-50 bg-blend-overlay w-full bg-cover max-md:h-[236px]">
      <div className="flex flex-col justify-center gap-8 text-white h-full items-center font-poppins">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold ">
          ESocial
        </h1>
        <p className="text-2xl md:text-4xl lg:text-5xl   font-semibold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-transparent bg-clip-text">
          Share Your Thoughts
        </p>
      </div>
    </div>
  );
};

export default Banner;
