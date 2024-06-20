import AllPosts from "./AllPosts";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className=" mx-auto max-md:font-poppins md:font-ibmplex">
      <Banner />
      <AllPosts />
    </div>
  );
};

export default Home;
