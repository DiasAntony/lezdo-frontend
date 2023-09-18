import React from "react";
import style from "./Congratulation.module.css";
import LayoutSmall from "../../components/layout-small/LayoutSmall";
import logo from "../../assets/verified.gif";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../service";
import { SET_LOGIN_STATUS, SET_USER } from "../../store/userSlice";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Congratulation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useAuth();
  const user = useSelector((state) => state.user);

  const close = async (e) => {
    e.preventDefault();

    await logoutUser(user.email);
    await dispatch(SET_LOGIN_STATUS(false));
    await dispatch(SET_USER({ name: "", email: "", token: "" }));
    navigate("/");
  };

  return (
    <LayoutSmall>
      <div className={style.flex}>
        <img src={logo} alt="verified" height={80} style={{ marginTop: 10 }} />
        <h1>Congratulations!!!</h1>
        <p className="display-4">
          Your account has been successfully submitted for verification. Expect
          an email soon!
        </p>

        <div>
          <button onClick={close} className={style.btn_close}>
            Close
          </button>
        </div>
      </div>
    </LayoutSmall>
  );
};

export default Congratulation;
