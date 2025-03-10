import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {LoginPage} from "../User/LogInPage"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loading ) navigate("/login")
  }, [isAuthenticated, loading]);

  return children;
};

export default ProtectedRoute;