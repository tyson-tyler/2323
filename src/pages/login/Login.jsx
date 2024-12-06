import React, { useState } from "react";
import { signuserAccount } from "../../firebase/auth";
import { useAuth } from "../../context/authcontext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const authContext = useAuth();

  if (!authContext) {
    console.error(
      "AuthContext is undefined. Ensure AuthProvider is wrapping the component tree."
    );
    return <div>Error: AuthContext is undefined</div>;
  }

  const { userLoggedIn } = authContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigned, setSignedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigned) {
      try {
        setSignedIn(true);
        await signuserAccount(email, password);
      } catch (error) {
        toast.error("Invalid credentails . ");
        setErrorMessage("Login failed. Please check your credentials.");
        console.error(error);
      } finally {
        setSignedIn(false);
      }
    }
  };

  return (
    <div className="flex h-screen w-full">
      {userLoggedIn && <Navigate to="/" replace />}

      <section className="h-screen flex-1 flex justify-center items-center flex-col py-10">
        <div className="flex-col sm:w-[450px] flex justify-center items-center">
          <h1 className="text-xl md:text-3xl pt-5 sm:pt-12">
            Log in to your account
          </h1>
          <p className="text-gray-700 font-light text-sm mt-5">
            Welcome back! Please enter your details.
          </p>

          <form className="flex flex-col gap-5 w-full mt-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold leading-none">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-12 outline-none w-full rounded-md border border-gray-900  bg-gray-900 px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold leading-none">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-12 w-full outline-none rounded-md bg-gray-900  px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}

            <div className="space-y-2">
              <button
                type="submit"
                className="flex h-12 text-center text-white bg-blue-600 justify-center items-center py-2 w-full rounded-md text-sm transition hover:bg-blue-400"
                disabled={isSigned}
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-sm text-gray-600 font-semibold mt-4">
            Don' t have an Account?{" "}
            <a href="/reg" className="text-blue-600">
              Sign Up
            </a>
          </div>
        </div>
      </section>

      <div className="h-screen flex-1 hidden lg:flex">
        <img
          src="https://picsum.photos/1920/1080?random"
          alt="Login Background"
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
