import React from "react";
import { Login } from "../pages/Auth/Login";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Outlet />
    </div>
  );
};

export default App;
