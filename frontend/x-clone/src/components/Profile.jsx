import Avatar from "react-avatar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="w-[50%] border border-gray-200">
      <div>
        <div className="flex  p-3 border-b border-gray-200">
          <Link to={"/"}>
            <IoIosArrowRoundBack size={"40px"} />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Vishal Kairi</h1>
            <p className="text-gray-500">19 post</p>
          </div>
        </div>
        <div className="">
          <img
            src="https://pbs.twimg.com/profile_banners/2908098340/1712809929/1500x500"
            alt=""
          />
          <div className="absolute top-52 ml-4 border-4 border-white rounded-full">
            <Avatar
              src="https://pbs.twimg.com/profile_images/2587943780/1jhy0y59gvs7fwpdt6j9_400x400.jpeg"
              size="120"
              round={true}
            />
          </div>
          <div className="text-right m-4 hover:bg-gray-200">
            <button className="px-4 py-1 rounded-full  border border-gray-400">
              Edit Profile
            </button>
          </div>
          <div className="ml-4">
            <h1 className="font-bold text-lg">Vishal</h1>
            <p>@vk</p>
          </div>
          <div className="m-4">
            DevRel & DX at @Supabase | Formerly @Stripe , @Google , @SAP
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
