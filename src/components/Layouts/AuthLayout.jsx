import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation,Navigate, Outlet } from 'react-router-dom';
import Loader from './Loader';
import { LoginPage } from '../../Pages';

function AuthLayout() {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();
  const [loader, setLoader] = useState(true);

  console.log('authlayout',authenticated)

  useEffect(() => {
    // Handle redirects based on authentication state
    if (authenticated ===true) {
      if (location.pathname === '/login' || location.pathname === '/register') {
        navigate('/home'); // Redirect authenticated users to home page
      }
    } else if(authenticated === false){
        if(location.pathname !== '/login' && location.pathname !== '/register'){
            navigate('/login')
        }
    }
    setLoader(false);
  }, [authenticated, navigate, location.pathname]);

  // Prevent rendering if the loader is active
  if (loader) {
    return <Loader divClass="h-screen " />;
  }

  // Prevent rendering of login/register if the user is already authenticated
  return <Outlet />;
}

export default AuthLayout;
