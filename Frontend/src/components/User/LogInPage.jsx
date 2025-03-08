import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUserThunk } from '../store/slice/user/user.thunk';

const LoginPage = () => {


  const [loginData, setLoginData] = useState({
    username:"",
    password:""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector(state => state.user)
  console.log(isAuthenticated);
  
  

  useEffect(() => {
    if (isAuthenticated) navigate("/")
  },[isAuthenticated])


  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData({
      ...loginData,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(loginUserThunk(loginData))
     navigate("/")
  };
  

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Todo List Image */}
      <div className="hidden md:block flex-1 bg-blue-50 p-8">
        <div className="h-full bg-gray-50 rounded-lg flex items-center justify-center">
          {/* Replace this div with actual todo list image */}
          <div className="text-center space-y-4">
            <div className="text-6xl">✅</div>
            <h2 className="text-3xl font-bold text-gray-800">Stay Organized</h2>
            <p className="text-gray-600 max-w-xs mx-auto">
              Manage your tasks effectively with our intuitive todo list system
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 p-8 max-w-md mx-auto flex items-center">
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Log in to your account</h1>
            <p className="text-gray-600">
              Don’t have an account?{' '}
              <Link to="/simple" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                {/* Google icon SVG */}
              </svg>
              Continue with Google
            </button>
            
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                {/* GitHub icon SVG */}
              </svg>
              Continue with GitHub
            </button>
          </div>
 
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or with email and password
              </span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username' className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="text"
                name='username'
                id='username'
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor='password' className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name='password'
                id='password'
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;