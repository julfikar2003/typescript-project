import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Toast from '../Components/Toast';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';

const Register = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
const [
  createUserWithEmailAndPassword,

  error,
] = useCreateUserWithEmailAndPassword(auth);

const changeHandeler = (e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
}
console.log(formData);

const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    const response = await createUserWithEmailAndPassword(formData.email,formData.password);
    if(response.user.accessToken){
        localStorage.setItem('token',response.user.accessToken);
        navigate('/');
        setLoading(false);
        return<Toast/>
    }
}
  return (
    <div>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       {
      error && <div role="alert" className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Something went wrong. please try again</span>
</div>
    }

      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={changeHandeler}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your Name"
              required
            />
          </div>
        
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
    </div>
  )
}

export default Register
