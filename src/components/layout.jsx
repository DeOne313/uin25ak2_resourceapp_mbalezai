import React from "react";
import "../style/style.scss"
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <section>
      <header>
        <Nav />
      </header>
      {children}
    </section>
  );
};

export default Layout;



  