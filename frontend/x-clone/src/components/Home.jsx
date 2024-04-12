import { Outlet } from "react-router-dom";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RigthSidebar from "./RigthSidebar";

const Home = () => {
  return (
    <div className="flex justify-between w-10/12 mx-auto">
      <LeftSidebar />
      <Outlet />
      <RigthSidebar />
    </div>
  );
};
export default Home;
