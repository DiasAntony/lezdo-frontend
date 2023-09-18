import React, { useState, useEffect } from "react";
import logo from "../../assets/password.gif";
import "./Signin.css";
import LayoutSmall from "../../components/layout-small/LayoutSmall";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import { toast } from "react-toastify";
import { changePass } from "../../service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RESET_OTP, SET_TOGGLE } from "../../store/userSlice";

const SigninChangePass = () => {
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

  const email = useSelector((state) => state.email_sign);

  useEffect(() => {
    dispatch(SET_TOGGLE(true));
  });

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfPassword = () => {
    setShowConfPassword(!showConfPassword);
  };

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

  const submitHandler = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return setPassErr(true);
    }
    if (!passwordTrue) {
      return setCondErr(true);
    }

    try {
      const data = await changePass({
        email: email,
        newPassword: confirmPassword,
      });
      if (data) {
        dispatch(RESET_OTP());
        toast.success("password changed");
        navigate("/signin");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <LayoutSmall>
      <div className="container">
        <img src={logo} alt="happy-face" height={60} />
        <h1>Login</h1>
      </div>
      <form className="signin-form">
        <div className="form-group pass_">
          <label htmlFor="exampleInputPassword1">New Password</label>
          <input
            style={{ width: 400, margin: 10 }}
            type={showNewPassword ? "text" : "password"}
            className="form-control form-control-lg"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="eye" onClick={toggleNewPassword}>
            {!showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>

        <div className="form-group pass_">
          <label htmlFor="exampleInputPassword1">
            Confirm Password{" "}
            {passErr && (
              <span className="erro-span">Password doesn't match</span>
            )}
            {condErr && (
              <span className="erro-span">Password condition needed!!</span>
            )}
          </label>
          <input
            style={{ width: 400, margin: 10 }}
            type={showConfPassword ? "text" : "password"}
            className="form-control form-control-lg"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="eye" onClick={toggleConfPassword}>
            {!showConfPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
        <div className="cond_icc">
          <ul>
            <li>
              <span className={charLenth ? "bg_blue" : "b-g"}>
                <DoneSharpIcon fontSize="10px" className="icc" />
              </span>{" "}
              Minimum 8 Characters
            </li>
            <li>
              <span className={upperCase ? "bg_blue" : "b-g"}>
                <DoneSharpIcon fontSize="10px" className="icc" />
              </span>{" "}
              1 Upper Case Letter
            </li>
            <li>
              <span className={num ? "bg_blue" : "b-g"}>
                <DoneSharpIcon fontSize="10px" className="icc" />
              </span>{" "}
              1 Number
            </li>
            <li>
              <span className={specialChar ? "bg_blue" : "b-g"}>
                <DoneSharpIcon fontSize="10px" className="icc" />
              </span>{" "}
              1 Special Charater
            </li>
          </ul>
        </div>
        <button
          onClick={submitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Reset
        </button>
      </form>
    </LayoutSmall>
  );
};

export default SigninChangePass;
