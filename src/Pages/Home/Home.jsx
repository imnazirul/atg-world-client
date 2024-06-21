import Banner from "./Banner";
import FeaturedPost from "./FeaturedPost";

const Home = () => {
  return (
    <div className=" mx-auto max-md:font-poppins md:font-ibmplex">
      <Banner />
      <FeaturedPost />
    </div>
  );
};

export default Home;
