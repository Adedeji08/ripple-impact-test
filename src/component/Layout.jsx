import React, { useState } from "react";
import NavBar from "./NavBar";
import SiderBar from "./SiderBar";

const Layout = ({ children }) => {

   const [showSidebar, setShowSidebar] = useState(false);

  
  return (
    <div className="w-full">
          <div className=" w-[310px] desktop-sidebar">
          <SiderBar  /> 
        </div>
      <NavBar show={showSidebar} setShow={setShowSidebar} />
      <div className=" sidebar w-full">
        {showSidebar && (
          <div
            className="mobile-sidebar-container w-100"
            onClick={() => setShowSidebar(false)}
          >
            <SiderBar show={showSidebar} setShow={setShowSidebar} />
          </div>
        )}
        <main style={{ flex: 1, flexWrap: "wrap" }}>
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
