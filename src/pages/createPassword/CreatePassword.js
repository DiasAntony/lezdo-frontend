import React, { useState, useEffect } from "react";
import style from "./CreatePassword.module.css";
import Layout from "../../components/layout/Layout";
import logo from "../../assets/shield.gif";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_OTP, SET_PASS, SET_TOGGLE } from "../../store/userSlice";

const CreatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passErr, setPassErr] = useState(false);
  const [condErr, setCondErr] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [num, setNum] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [charLenth, setCharLenth] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wrongIcon = <ClearSharpIcon fontSize="10px" className={style.icon} />;
  const crtIcon = <DoneSharpIcon fontSize="10px" className={style.icon} />;

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfPassword = () => {
    setShowConfPassword(!showConfPassword);
  };

  const switchIcon = (condition) => {
    if (condition) {
      return crtIcon;
    }
    return wrongIcon;
  };

  useEffect(() => {
    dispatch(SET_TOGGLE(false));
  }, []);

  useEffect(() => {
    setPassErr(false);
    setCondErr(false);
    // check Lower and Uppercase

    if (newPassword.match(/([A-Z])/g)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }
    // check from Numbers

    if (newPassword.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // check from special charecter

    if (newPassword.match(/([!,%,&,@,#,$,.,^,*,?,_,~])/)) {
      setSpecialChar(true);
    } else {
      setSpecialChar(false);
    }

    // check for length

    if (newPassword.length > 8) {
      setCharLenth(true);
    } else {
      setCharLenth(false);
    }
  }, [newPassword]);

  const passwordTrue = upperCase && num && specialChar && charLenth;

  const submitHandler = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return setPassErr(true);
    }
    if (!passwordTrue) {
      return setCondErr(true);
    }

    dispatch(SET_PASS(confirmPassword));
    dispatch(SET_OTP(undefined));
    navigate("/create/about");
  };

  return (
    <Layout>
      <div className={style.flex}>
        <img src={logo} alt="happy-face" height={60} />
        <h1>Create your Password</h1>
      </div>
      <div className={style.conditions}>
        <ul>
          <li>
            <span className={charLenth ? style.bg_success : style.bg}>
              {switchIcon(charLenth)}
            </span>{" "}
            Minimum 8 Characters
          </li>
          <li>
            <span className={upperCase ? style.bg_success : style.bg}>
              {switchIcon(upperCase)}
            </span>{" "}
            1 Upper Case Letter
          </li>
          <li>
            <span className={num ? style.bg_success : style.bg}>
              {switchIcon(num)}
            </span>{" "}
            1 Number
          </li>
          <li>
            <span className={specialChar ? style.bg_success : style.bg}>
              {switchIcon(specialChar)}
            </span>{" "}
            1 Special Charater
          </li>
        </ul>
      </div>

      <div className={style.flex}>
        {passErr && <h6>Password doesn't match</h6>}
        {condErr && <h6>Password condition needed!!</h6>}
        <div className={style.password}>
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="Password"
            name="newPass"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className={style.eye} onClick={toggleNewPassword}>
            {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
        <div className={style.password}>
          <input
            type={showConfPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPass"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className={style.eye} onClick={toggleConfPassword}>
            {showConfPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
        <div>
          <button onClick={submitHandler}>Set New Password</button>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePassword;
