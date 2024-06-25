import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import Dashboardadmin from "./interfaces/dashboard-admin";
import Admin_navbar from "./components/Admin_Navbar";
import Layout from "./Layout";



export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="Dashboard" element={<Dashboardadmin/>}/></Route>
        </Routes>
      </BrowserRouter>
   
  )
}   /*<div className='flex text-center h-screen overflow-hidden'>
<Admin_navbar className="left-0 fixed"/>*/