import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUserThunk } from '../store/slice/user/user.thunk';

const Signup = () => {
   const [registerData, setRegisterData] = useState({
    username:"",
    email:"",
    password:""
   })
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isAuthenticated} = useSelector(state => state.user)
    


  useEffect(() => {
     if (isAuthenticated) navigate("/home")
   },[isAuthenticated])
 


    const handleChange = (e) =>{
      const {name, value} = e.target;

      setRegisterData({
        ...registerData,
        [name]:value
      })
    }
    

    const handleSubmit = async(e) => {
      e.preventDefault();
      await dispatch(registerUserThunk(registerData))
      navigate("/")

    }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="Enter your username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
         
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? {' '}
          <Link to="/login" className="text-blue-600 font-medium hover:text-blue-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;