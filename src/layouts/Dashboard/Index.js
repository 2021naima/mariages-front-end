import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from "./DashboardNav"

// ----------------------------------------------------------------------

export default function DashboardLayout() {

  return (
    <>
      <DashboardNav  />
      
      
        <Outlet />
     
    </>
  );
}
