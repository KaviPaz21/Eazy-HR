import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import Dashboardadmin from "./interfaces/dashboard-admin";
import Vacancies from "./interfaces/Vacancies";
import Layout from "./Layout";



export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboardadmin />} />
          <Route path="Vacancies" element={<Vacancies />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}   /*<div className='flex text-center h-screen overflow-hidden'>
<Admin_navbar className="left-0 fixed"/>*/