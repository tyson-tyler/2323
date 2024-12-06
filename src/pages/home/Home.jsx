import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

const Home = () => {
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <div>Home</div>;
};

export default Home;
