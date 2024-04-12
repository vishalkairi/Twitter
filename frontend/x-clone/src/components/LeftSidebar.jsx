import { GoHomeFill } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="flex flex-col">
        <div>
          <img
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais"
            alt="Logo"
            width={"60px"}
            className="ml-2"
          />
        </div>
        <div className="my-4">
          <Link
            to={"/"}
            className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer"
          >
            <GoHomeFill size={"30px"} />
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </Link>
          <div className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer">
            <IoSearchSharp size={"30px"} />
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer">
            <IoNotificationsSharp size={"30px"} />
            <h1 className="font-bold text-lg ml-2">Notifications</h1>
          </div>
          <Link
            to={"/profile/1"}
            className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer"
          >
            <FaUserLarge size={"30px"} />
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>
          <div className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer">
            <FaBookmark size={"30px"} />
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer">
            <FiLogOut size={"30px"} />
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
        </div>
        <div>
          <button className=" bg-[#1d9bf0] px-6 py-2 rounded-full w-full text-white font-semibold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
