import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import Topbar from "../../components/header/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Right from "../../components/sidebar/right";

const Home = () => {
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <main className="my-6 mx-5">
        <Topbar />
        <div className="flex justify-around items-center gap-3">
          <div className="mt-6  ">
            <Sidebar />
          </div>
          <div className="">
            <Feed />
          </div>
          <div className="mt-6  ">
            <Right />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
