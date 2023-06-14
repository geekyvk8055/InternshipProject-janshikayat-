import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPanelComp from "./AdminPanelComp";
import CreateCounterComp from "./CreateCounterComp";

const AdminRouting = () => {
  return (
    <>
    <Routes>
    <Route path="/getLogi" element={<AdminPanelComp />} />
    <Route path="/createCounter" element={<CreateCounterComp />} />
    </Routes>
      
    </>
  )
}

export default AdminRouting
