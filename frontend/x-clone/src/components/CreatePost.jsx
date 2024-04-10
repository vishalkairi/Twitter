import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
const CreatePost = () => {
  return (
    <div className="w-full">
      <div>
        <div className="flex items-center justify-center border-b text-center border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 w-full p-3">
            <h1 className="font-bold text-gray-600 text-lg">For You</h1>
          </div>
          <div className="cursor-pointer  hover:bg-gray-200 w-full p-3">
            <h1 className="font-bold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start p-4">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/2587943780/1jhy0y59gvs7fwpdt6j9_400x400.jpeg"
                size="40"
              />
            </div>
            <input
              type="text"
              className=" p-4 w-full outline-none"
              placeholder="What is happening?!"
            />
          </div>
          <div className="flex justify-between items-center border-b p-4 border-gray-200">
            <div>
              <CiImageOn width="40" />
            </div>
            <button className=" bg-[#1d9bf0] px-6 py-2 rounded-full text-white font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
