import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes for other pages */}
    </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
