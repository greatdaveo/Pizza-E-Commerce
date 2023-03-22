import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SharedLayout;
