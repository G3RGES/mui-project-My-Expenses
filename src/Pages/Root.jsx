import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Root;
