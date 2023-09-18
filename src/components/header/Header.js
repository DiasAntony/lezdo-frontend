import React from "react";
import logo from "../../assets/logo_blue.svg";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const toggle = useSelector((state) => state.toggle);
  const loggedin = useSelector((state) => state.isLogedIn);
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className={style.header}>
        <div>
          <img src={logo} alt="case-drive-logo" height="50px" />
        </div>
        <div className={style.header_right}>
          {loggedin ? (
            <h2>{user.name}</h2>
          ) : (
            <h2>
              {toggle ? "Don't have an account?" : "Already have an account?"}
            </h2>
          )}

          {!loggedin && (
            <Link to={toggle ? "/" : "/signin"} className={style.link}>
              {toggle ? "Sign up" : "Sign in"}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
