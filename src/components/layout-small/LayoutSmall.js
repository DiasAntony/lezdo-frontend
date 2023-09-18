import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import style from "./LayoutSmall.module.css";
import { Link } from "react-router-dom";

const LayoutSmall = ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.layout}>
        <div className={style.wrapper}>{children}</div>
        <p>
          <Link className={style.link}>Privacy Policy</Link>
          <span></span>
          <Link className={style.link}>Terms & Conditions</Link>
          <span></span>
          <Link className={style.link}>Help</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default LayoutSmall;
