import Avatar from "react-avatar";
import { FaRegComment, FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className="cursor-pointer border-b border-gray-200">
      <div className="flex p-4">
        <div className="flex gap-1 w-full">
          <Avatar
            src="https://pbs.twimg.com/profile_images/2587943780/1jhy0y59gvs7fwpdt6j9_400x400.jpeg"
            size="40"
            round={true}
          />
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h1 className="font-bold">Vishal</h1>
              <p className="text-gray-500 text-sm">@vk</p>
            </div>
            <div>
              <p>Hello everyone</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center  hover:text-[#1d9bf0]">
                <div className="p-3 hover:bg-blue-100 rounded-full">
                  <FaRegComment size="24px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center  hover:text-green-400">
                <div className="p-3 hover:bg-green-100 rounded-full">
                  <FaRetweet size="24px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center  hover:text-red-300">
                <div className="p-3 hover:bg-red-100 rounded-full">
                  <CiHeart size="24px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center  hover:text-[#1d9bf0]">
                <div className="p-3  hover:bg-blue-100  rounded-full">
                  <CiBookmark size="24px" />
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
