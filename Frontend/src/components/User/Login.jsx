import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { loginUserThunk } from "../store/slice/user/user.thunk";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

  const [loginData, setLoginData] = useState({
    username:"",
    password:""
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector(state => state.user)
  console.log("login auth is",isAuthenticated);
  
  useEffect(() => {

    if(isAuthenticated) navigate("/")

  },[isAuthenticated])

  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData({
      ...loginData,
      [name]:value
    })
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(loginUserThunk(loginData))
    navigate("/")
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-blue-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-2xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                {/* <EnvelopeIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                <input
                  id="username"
                  name="username"
                  type="text"
                  // autoComplete="text"
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-10 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                {/* <LockClosedIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                <input
                  id="password"
                  name="password"
                  type="password"
                  // autoComplete="current-password"
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-10 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              {/* <GoogleIcon className="h-5 w-5" /> */}
            </button>
         
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to='/signup' className="font-medium text-purple-600 hover:text-purple-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;