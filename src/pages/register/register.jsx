import { useState } from "react";
import { Navigate } from "react-router";
import { createUserAccount } from "../../firebase/auth";
import { useAuth } from "../../context/authcontext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegister, setRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { userLoggedIn } = useAuth();

  // Function to check password strength
  const isPasswordStrong = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!isPasswordStrong(password)) {
      setErrorMessage(
        "Password is weak. It must be at least 8 characters long and include uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    try {
      setRegister(true);
      await createUserAccount(email, password);
    } catch (error) {
      setErrorMessage(error.message || "Failed to create an account.");
      setRegister(false);
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
      <section className="h-screen flex-1 flex justify-center items-center flex-col py-10">
        <div className="flex-col sm:w-[450px] flex justify-center items-center">
          <h1 className="text-xl md:text-3xl pt-5 sm:pt-12">
            Hello, User to your account
          </h1>
          <p className="text-gray-700 font-light text-sm mt-5">
            Welcome here! Please enter your details.
          </p>

          <form className="flex flex-col gap-5 w-full mt-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Name</label>
              <input
                type="text"
                className="flex h-12 outline-none w-full rounded-md border  bg-gray-800 text-white px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-12 outline-none w-full rounded-md border  bg-gray-800 text-white px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Password</label>
              <input
                disabled={isRegister}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-12 outline-none w-full rounded-md  bg-gray-800 text-white px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Confirm Password</label>
              <input
                disabled={isRegister}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex h-12 outline-none w-full rounded-md border  bg-gray-800 text-white px-3 py-2 text-sm"
              />
            </div>

            {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}
            <div className="space-y-2">
              <button
                disabled={isRegister}
                type="submit"
                className="flex h-12 text-center text-white bg-blue-600 justify-center items-center py-2 w-full rounded-md text-sm font-semibold hover:bg-blue-400"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="text-sm text-gray-600 font-semibold mt-4">
            Already have an Account?
            <span>
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
