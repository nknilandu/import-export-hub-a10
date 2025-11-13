import React, { use, useState } from "react";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);

  const location = useLocation();
  console.log(location.state);

  const googleHandler = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
        // toast.success("Successfully Loged in.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const avater = e.target.avater.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (errorMsg) {
      toast.error("Please fix the password errors before registering.");
      return;
    }

    // console.log(name, avater, email, password)
    createUser(email, password)
      .then((res) => {
        const userData = res.user;
        toast.success("Successfully Registered");
        e.target.reset();

        // update user
        updateUser({
          displayName: name,
          photoURL: avater,
        })
          .then(() => {
            toast.success("Profile Updated");
            setUser({ userData, displayName: name, photoURL: avater });
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(userData);
          });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const password = e.target.value;

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      setErrorMsg("Password must contain at least one lowercase letter.");
    } else {
      setErrorMsg("");
    }
  };

  return (
    <div className="h-screen w-full flex items-center px-4 bg-base-200">
      <title>Register | Import Export Hub</title>
      <div className="bg-base-100 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-black mb-2">Register Today!</h1>
          <p className=" text-sm leading-relaxed text-base-content/30">
            Today is a new day. It's your day. You shape it.
            <br />
            Sign up to start managing your projects.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-2">
            {/* name Field */}
            <div>
              <label className="block label mb-1">User name</label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            {/* photo url Field */}
            <div>
              <label className="block label mb-1">Photo URL</label>
              <input
                type="text"
                name="avater"
                placeholder="photo url"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block label mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block label mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  onChange={handleInputChange}
                  className="input text-sm w-full py-2 px-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                {/* Eye toggle button */}
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors z-10"
                >
                  {showPassword ? (
                    <HiOutlineEyeSlash className="h-5 w-5" />
                  ) : (
                    <HiOutlineEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xs text-error">{errorMsg}</h1>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 mt-5 bg-primary hover:bg-primary/50 text-white font-md rounded-lg transition-colors"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mt-5">
            <div className="border-t border-gray-200 flex-1"></div>
            <span className="px-4 text-gray-500 text-sm">Or</span>
            <div className="border-t border-gray-200 flex-1"></div>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            {/* google button */}
            <button
              onClick={googleHandler}
              type="submit"
              className="w-full p-2 mt-2 bg-primary/10 hover:bg-primary/20 text-black/70 font-semibold text-sm rounded-lg transition-colors"
            >
              <div className="flex items-center justify-center gap-2 text-base-content/70">
                <FcGoogle size={20} />
                <span>Sign in with Google</span>
              </div>
            </button>
          </div>

          <div className="text-center mt-3">
            <p className="text-base-content/50">
              Already have an account?{" "}
              <Link
                state={location.state}
                to="/auth/login"
                className="hover:text-primary text-secondary font-semibold transition-colors"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>

        {/* Copyright */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-xs">
            © 2025 ALL RIGHTS RESERVED WarmPows
          </p>
        </div>
      </div>
    </div>
  );
}
