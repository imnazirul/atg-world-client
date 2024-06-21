import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const img_hosting_key = "4e462399428a72a6ed028adcf02886dd";
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const UpdatePost = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [btnText, setBtnText] = useState(
    <>
      <FaPlus className="text-2xl" /> Post
    </>
  );
  const { data: post, isPending } = useQuery({
    queryKey: ["post", id],
  });

  const {
    register,
    handleSubmit,
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
    <div className="">
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
            defaultValue={post?.post_title}
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
            defaultValue={post?.post_description}
            placeholder="Post Text"
            className="px-4 py-2 outline-none rounded-xl w-full bg-gray-200 h-40 resize-none mt-4"
          ></textarea>

          {errors.post_description && (
            <p className="text-red-500">{errors.post_description.message}</p>
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
  );
};

export default UpdatePost;
