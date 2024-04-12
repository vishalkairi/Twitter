import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
const RigthSidebar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div className="flex items-center bg-gray-200 p-2 rounded-full hover:outline hover:outline-[#1d9bf0] mt-2">
          <div>
            <CiSearch size={"24px"} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 outline-none ml-2"
          />
        </div>
        <div className="mt-2 bg-gray-200 rounded-md p-2">
          <h2 className="text-lg font-bold mb-2">Who to follow</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar
                src="https://pbs.twimg.com/profile_images/2587943780/1jhy0y59gvs7fwpdt6j9_400x400.jpeg"
                size="40"
                round={true}
              />
              <div className="ml-2">
                <h1 className="font-bold">Crew</h1>
                <p className="text-sm">@creq</p>
              </div>
            </div>
            <div>
              <button className=" bg-[#1d9bf0] px-6 py-2 rounded-full text-white font-semibold">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RigthSidebar;
