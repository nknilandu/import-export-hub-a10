import { Link, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";


export default function ForgotPassword() {
  const { forgotPassword } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    forgotPassword(email)
      .then(() => {
        toast.success("Successfully email sent!");
        navigate("/auth/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="h-screen w-full flex items-center px-4 bg-base-200">
      <title>Warm Paws - ForgotPassword</title>
      <div className="bg-base-100 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-black mb-2">
            Forgot Your Password?
          </h1>
          <p className=" text-sm leading-relaxed text-base-content/30">
            Don't worry. We will send a password reset link to your email.
            Please check your inbox or spam box to find mail.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-2">
            {/* Email Field */}
            <div>
              <label className="block text-sm label mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                className="input text-sm w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
             />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 mt-2 bg-primary hover:bg-primary/50 text-white font-md rounded-lg transition-colors"
          >
            Send a mail
          </button>

          <div className="text-center mt-3">
            <p className="text-base-content/50">
              Login into another account?{" "}
              <Link
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
