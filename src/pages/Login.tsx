import  React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import {  useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';


const Login = () => {
 interface LoginFormData {
  email: string;
  password: string;
}

const [formData, setFormData] = useState<LoginFormData>({
  email: "",
  password: ""
});

 const [loading, setLoading] = useState(false);
 const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
const [
  signInWithEmailAndPassword,
 
] = useSignInWithEmailAndPassword(auth);

 const changeHandeler = (e:React.ChangeEvent<HTMLInputElement>) =>{
const {name,value}=e.target;
setFormData({...formData,[name]:value})
 }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
      setLoading(true);
     try {
    const response = await signInWithEmailAndPassword(formData.email, formData.password);
    if (response && response.user) {
      const accessToken = await response.user.getIdToken();
      localStorage.setItem("token", accessToken);
      navigate("/");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
  };

  return (
    

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    

      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={changeHandeler}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={changeHandeler}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Password"
              required
            />
          </div>

              <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="mr-2 rounded"
              />
              Remember me (show password)
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

         

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
           {
            loading ?<span className="loading loading-spinner loading-md"></span>: "Submit"
           }
          </button>
        </form>

      
      </div>
    </div>
  );
};

export default Login;