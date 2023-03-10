import React from "react";

const MainLayout = () => {
  return (
    <div>
      <div className="title">Main Layout</div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
