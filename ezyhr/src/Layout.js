// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Admin_navbar from './components/Admin_Navbar';

const Layout = () => {
  return (
    <div className='flex text-center h-screen overflow-hidden'>
      <Admin_navbar className="left-0 fixed" />
      <div className="ml-4 flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
