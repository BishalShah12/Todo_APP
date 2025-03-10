import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUserThunk } from '../store/slice/user/user.thunk';

const SignUpPage = () => {

    const [registerData, setRegisterData] = useState({
        username:"",
        email:"",
        password:""
       })

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {isAuthenticated,loading} = useSelector(state => state.user)

    console.log(isAuthenticated);
    

 useEffect(() => {
     if (isAuthenticated) navigate("/")
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
    <div className="min-h-screen flex">
      {/* Right Side - Sign Up Form */}
      <div className="flex-1 p-8 max-w-md mx-auto">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="text-gray-600">
            Have an account? <Link to="/login" className="text-blue-600">Log in now</Link>
          </p>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                {/* Google icon SVG */}
              </svg>
              Continue with Google
            </button>
            
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3">
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
              <span className="px-2 bg-white text-gray-500">Or with email and password</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
           

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor='username' className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}

                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                id='email'
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="We recommend using your work email"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name='password'
                id='password'
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>

      {/* Left Side - Todo List Image */}
      <div className="hidden md:block flex-1 bg-blue-100 p-8">
        <div className="h-full bg-gray-100 rounded-lg flex items-center justify-center">
          {/* Replace this div with actual todo list image */}
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-4">Your Todo List</h2>
            <p className="text-gray-600">Organize your tasks efficiently</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;