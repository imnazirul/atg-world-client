import { useForm } from "react-hook-form";
import { AiOutlineLike } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const img_hosting_key = "4e462399428a72a6ed028adcf02886dd";
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const Posts = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [btnText, setBtnText] = useState(
    <>
      <FaPlus className="text-2xl" /> Post
    </>
  );

  const {
    data: posts,
    isPending,
    // isError,
    // refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/posts");
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddPost = async (formData) => {
    try {
      setBtnText(
        <>
          <div className="border-blue-400 h-7 w-7 animate-spin rounded-full border-[3px] border-t-white" />
          ADDING POST...
        </>
      );
      if (formData.image.length > 0) {
        const imgFile = { image: formData.image[0] };

        const res = await axiosPublic.post(img_hosting_api, imgFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          const imageURL = res.data.data.display_url;
          const PostData = {
            post_title: formData.post_title,
            post_description: formData.post_description,
            image: imageURL,
            date: new Date().toLocaleDateString,
            author: user?.name,
            likes: [],
            comments: [],
          };

          //   console.log(PostData);
          axiosPublic.post("/posts", PostData).then((res) => {
            {
              if (res.data.insertedId) {
                setBtnText(
                  <>
                    <FaPlus className="text-2xl" /> Post
                  </>
                );
                reset();
                document.getElementById("my_modal_3").close();
                Swal.fire({
                  position: "middle",
                  icon: "success",
                  title: "Your Post has been Published",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            }
          });
        }
      } else {
        const PostData = {
          post_title: formData.post_title,
          post_description: formData.post_description,
          likes: [],
          comments: [],
        };
        // console.log(PostData);
        axiosPublic.post("/posts", PostData).then((res) => {
          if (res.data.insertedId) {
            reset();
            setBtnText(
              <>
                <FaPlus className="text-2xl" /> Post
              </>
            );
            document.getElementById("my_modal_3").close();
            Swal.fire({
              position: "middle",
              icon: "success",
              title: "Your Post has been Published",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    } catch (err) {
      setBtnText(
        <>
          <FaPlus className="text-2xl" /> Post
        </>
      );
      Swal.fire({
        title: "UNSUPPORTED IMAGE FORMAT",
        customClass: {
          confirmButton: "confirm-button-class",
          title: "title-class",
          icon: "icon-class",
        },
        text: "PLEASE CHANGE THE PHOTO AND TRY AGAIN",
        icon: "error",
      });
    }
  };

  if (isPending) {
    return <h1 className="text-5xl text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="container mx-auto px-5 lg:px-10 mb-16">
      <h1 className="text-4xl text-center font-semibold underline">
        All Posts
      </h1>

      <div>
        <div>
          <div className="flex justify-between my-5 items-center">
            <h1 className="text-3xl my-5 font-semibold">Your Posts</h1>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="flex gap-1 btn hover:text-black text-lg bg-blue-500 text-white items-center px-5 py-2 font-medium  rounded "
            >
              Write a Post <TiArrowSortedDown />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-16">
            {posts.map((post) => (
              <div
                key={post._id}
                className=" font-poppins flex flex-col h-full justify-between  p-6 space-y-6 overflow-hidden rounded-lg shadow-md border relative"
              >
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="btn absolute btn-sm bg-blue-500 text-white top-1 hover:bg-blue-500 right-1"
                >
                  Edit
                </button>
                <div>
                  {post?.image ? (
                    <div className=" h-[180px]  md:h-[200px] rounded-lg overflow-hidden  mb-2">
                      <img
                        className="h-full w-full"
                        src={post?.image}
                        alt="Shoes"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex justify-between items-center">
                    <p className="text-blue-600">Author: {post?.author}</p>
                    <p className="text-blue-600 bg-primary-1 bg-opacity-20 rounded-3xl px-2 text-sm py-[2px]">
                      {post?.date}
                    </p>
                  </div>
                  <h1 className="text-lg md:text-2xl text-pink-600 font-semibold mb-2">
                    {post?.post_title}
                  </h1>
                  <p className="text-sm ">{post?.post_description}</p>
                </div>
                <hr />
                <div className="flex text-sm text-gray-400 dark:text-gray-600 justify-between">
                  <button className="btn">
                    <AiOutlineLike className="text-3xl" />{" "}
                    {/* AiOutlineLike  */}
                  </button>
                  <button className="btn flex gap-1 bg-gray-200 border">
                    {post?.comments.length} Comments
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="rounded-full absolute right-2 top-2 text-3xl bg-gray-200 p-1 px-[10px]">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center uppercase underline">
            Create New Post
          </h3>
          <div className="w-full">
            <form
              onSubmit={handleSubmit(handleAddPost)}
              className="w-full mt-2 px-5"
            >
              <input
                {...register("post_title", {
                  required: {
                    value: true,
                    message: "Post Title is Required",
                  },
                })}
                type="text"
                placeholder="Post Title"
                className="px-4 py-2 outline-none rounded-3xl w-full bg-gray-200 "
              />

              {errors.post_title && (
                <p className="text-red-500">{errors.post_title.message}</p>
              )}

              <textarea
                {...register("post_description", {
                  required: {
                    value: true,
                    message: "Post Text is Required",
                  },
                })}
                placeholder="Post Text"
                className="px-4 py-2 outline-none rounded-xl w-full bg-gray-200 h-40 resize-none mt-4"
              ></textarea>

              {errors.post_description && (
                <p className="text-red-500">
                  {errors.post_description.message}
                </p>
              )}

              <div className="w-full">
                <label
                  htmlFor="image"
                  className="font-semibold font-poppins text-lg"
                >
                  Add Image
                </label>
                <input
                  {...register("image")}
                  type="file"
                  className="px-4 py-2 outline-none rounded-xl w-full bg-gray-200 "
                  placeholder="Add Image"
                />
              </div>

              <div className="flex justify-center mt-2">
                <button className="btn bg-blue-500 px-16 rounded-3xl text-white text-lg hover:bg-blue-500">
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Posts;
