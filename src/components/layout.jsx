import React from "react";
import Nav from "./nav";
import "../style/style.scss";


const Layout = ({ children }) => {
  return (
    <section>
      <Nav />
      <main className="content">
        {children}
      </main>
    </section>
  );
};

export default Layout;



  