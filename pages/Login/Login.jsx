import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { TiFlashOutline } from "react-icons/ti";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location)

  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { loginUser, setUser, googleSignIn } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const checkPassword = (event) => {
    const password = event.target.value;

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

  // login
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (errorMsg) {
      toast.error("Please fix the password errors before login.");
      setLoading(false);
      return;
    }

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        setLoading(false);
        toast.success("Successfully Loged in.");
        navigate(`${location.state ? location.state : "/"}`);

        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        setLoading(false);
      });
  };
  // google login
  const googleHandler = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Successfully Loged in.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
      });
  };

  //demo login
  const demoEmail = "demo@test.com";
  const demoPassword = "Aa12345678";

  const demoLoginHandler = () => {
    setDemoLoading(true);
    loginUser(demoEmail, demoPassword)
      .then((res) => {
        const user = res.user;
        setUser(user);
        setDemoLoading(false);
        toast.success("Successfully Loged in.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        setDemoLoading(false);
      });
  };

  return (
    <div className="min-h-screen w-full flex items-center px-4 bg-base-200">
      <title>Login | Import Export Hub</title>
      <div className="bg-base-100 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-black mb-2">Welcome Back!</h1>
          <p className="text-sm leading-relaxed text-base-content/30">
            Today is a new day. It's your day. You shape it.
            <br />
            Sign in to start managing your projects.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2 ">
          <div className="space-y-2">
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
                  onChange={checkPassword}
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  className="input text-sm w-full py-2 px-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />

                {/* Eye toggle button */}
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors z-10"
                >
                  {showPass ? (
                    <HiOutlineEyeSlash className="h-5 w-5" />
                  ) : (
                    <HiOutlineEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* error msg */}
            <h1 className="text-xs text-red-500">{errorMsg}</h1>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/auth/forgotPassword">
              <button
                type="button"
                className="text-primary hover:text-primary/50 transition-colors"
              >
                Forgot Password?
              </button>
            </Link>
          </div>

          {/* Submit login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 mt-2 bg-primary hover:bg-primary/50 text-white font-md rounded-lg transition-colors"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm text-white"></span>
            ) : (
              <p>Log in</p>
            )}
          </button>
        </form>

        {/* demo login */}
        <button
          onClick={demoLoginHandler}
          disabled={demoLoading}
          className="w-full p-2 mt-2 bg-primary/10 hover:bg-primary/20 text-black/70 font-semibold text-sm rounded-lg transition-colors"
        >
          {demoLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <div className="flex items-center justify-center gap-2 text-base-content/70">
              <TiFlashOutline size={20} />
              <span>Demo Login</span>
            </div>
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mt-3">
          <div className="border-t border-gray-200 flex-1"></div>
          <span className="px-4 text-base-content/50 text-sm">Or</span>
          <div className="border-t border-gray-200 flex-1"></div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          {/* google button */}
          <button
            onClick={googleHandler}
            className="w-full p-2 mt-2 bg-primary/10 hover:bg-primary/20 text-black/70 font-semibold text-sm rounded-lg transition-colors"
          >
            <div className="flex items-center justify-center gap-2 text-base-content/70">
              <FcGoogle size={20} />
              <span>Sign in with Google</span>
            </div>
          </button>
        </div>

        <div className="text-center mt-3">
          <p className="text-base-content/50 ">
            Don't you have an account?{" "}
            <Link
              state={location.state}
              to="/auth/register"
              className="hover:text-primary text-secondary font-semibold transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-xs">© 2025 ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
}
