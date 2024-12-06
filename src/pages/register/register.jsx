import { useState } from "react";
import { Navigate } from "react-router";
import { createUserAccount } from "../../firebase/auth";
import { useAuth } from "../../context/authcontext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegister, setRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegister) {
      setRegister(true);
      await createUserAccount(email, password);
    }
  };
  return (
    <div className="flex h-screen w-full">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <div className="h-screen flex-1 hidden lg:flex">
        <img
          src="https://picsum.photos/1920/1080?random"
          alt=""
          className="h-screen object-cover"
        />
      </div>
      <section className="h-screen   flex-1  flex justify-center items-center flex-col py-10">
        <div className="flex-col sm:w-[450px] flex justify-center items-center">
          <h1 className="text-xl font- md:text-3xl pt-5 sm:pt-12">
            Hello, User to your account
          </h1>
          <p className="text-gray-700 font-light  text-sm mt-5">
            Welcome here! Please enter your details.
          </p>

          <form className="flex flex-col gap-5 w-full mt-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                Name
              </label>
              <input
                type="text"
                className="flex h-12 outline-none w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 shad-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="flex h-12 outline-none w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 shad-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 shad-form_label">
                Password
              </label>
              <input
                disabled={isRegister}
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="flex h-12 w-full outline-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 shad-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 shad-form_label">
                Confirm Password
              </label>
              <input
                disabled={isRegister}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
                className="flex h-12 w-full outline-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 shad-input"
              />
            </div>

            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}
            <div className="space-y-2">
              <button
                disabled={isRegister}
                type="submit"
                className="flex h-12 text-center text-white bg-blue-600 justify-center items-center py-2 w-full rounded-md text-sm text-semibold transition hover:bg-blue-400 "
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="text-sm text-gray-600 font-semibold mt-4">
            Already have an Account ?
            <span className=" ">
              {" "}
              <a href="/login" className="text-blue-600">
                Login
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
