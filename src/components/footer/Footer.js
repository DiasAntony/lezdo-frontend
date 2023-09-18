import style from "./Footer.module.css";
import React from "react";
import ForumIcon from "@mui/icons-material/Forum";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.circle}>
          <ForumIcon className={style.icon} />
        </div>
      </div>
    </>
  );
};

export default Footer;
