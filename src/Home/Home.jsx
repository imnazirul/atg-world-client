import Navbar from "../Navbar/Navbar";
import AllPosts from "./AllPosts";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className=" mx-auto max-md:font-poppins md:font-ibmplex">
      <Navbar />
      <Banner />
      <AllPosts />
    </div>
  );
};

export default Home;
