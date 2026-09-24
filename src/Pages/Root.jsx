import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Root;
