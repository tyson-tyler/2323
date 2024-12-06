import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Register from "./pages/register/register";
import Login from "./pages/login/Login";
import { AuthProvider } from "./context/authcontext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reg" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
