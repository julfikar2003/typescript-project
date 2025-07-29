import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import {
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await signInWithEmailAndPassword(
        formData.email,
        formData.password
      );

      if (response?.user) {
        const token = await response.user.getIdToken();
        localStorage.setItem("token", token);
        toast.success("Logged in successfully!");
        navigate("/");
      } else {
        toast.error("Failed to login. Please try again.");
      }
    } catch (error: any) {
      console.error("Email login error:", error);
      toast.error(error.message || "Login failed.");
    }

    setIsSubmitting(false);
  };

  const googleSignIn = async () => {
    setGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account", // 🔄 Force account chooser
    });

    try {
      await signOut(auth); // Firebase logout (if any user logged in)
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        const token = await result.user.getIdToken();
        localStorage.setItem("token", token);
        toast.success("Google login successful!");
        navigate("/");
      } else {
        toast.error("Failed to login with Google.");
      }
    } catch (error: any) {
      console.error("Google login error:", error);
      toast.error(error.message || "Google login failed.");
    }

    setGoogleLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@email.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Password"
              required
            />
          </div>

          {/* Show Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="mr-2 rounded"
              />
              Show password
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <p className="text-center text-sm text-gray-500">or</p>

          {/* Google Sign-In Button */}
          <button
            type="button"
            onClick={googleSignIn}
            disabled={googleLoading}
            className="mt-3 w-full flex justify-center items-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            {googleLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                Sign In With Google <FcGoogle />
              </>
            )}
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
