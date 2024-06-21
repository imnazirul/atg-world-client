import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://atg-world-server-green.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
