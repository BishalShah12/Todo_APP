import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import { logoutThunk } from '../../store/slice/user/user.thunk';
import LoginPage from '../../User/LogInPage.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector(state => state.user)


  
  return (
    <nav className="bg-gradient-to-r from-white-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/todos"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Create To-do List
            </Link>
            <Link
              to="/allTodo"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              All To-do List
            </Link>
        
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300 transform hover:scale-105"
            onClick={() => {!isAuthenticated ? <LoginPage/> : dispatch(logoutThunk())}}>
              {!isAuthenticated ? "Login" : "Logout"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            >
              {/* {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )} */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className=" absolute w-full bg-blue-700 left-0 right-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
              >
                About
              </Link>
              <Link
                to="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
              >
                Services
              </Link>
              <Link
                to="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300"
              >
                Contact
              </Link>
              <button className="w-full bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-base font-medium mt-2 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;