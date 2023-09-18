import React, { useEffect, useState } from "react";
import "./Signin.css";
import LayoutSmall from "../../components/layout-small/LayoutSmall";
import logo from "../../assets/password.gif";
import { toast } from "react-toastify";
import { checkUser, forgotPass } from "../../service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SET_EMAIL_SIGN,
  SET_OTP_SIGN,
  SET_TOGGLE,
} from "../../store/userSlice";

const SigninEmail = () => {
  const [email, setEmail] = useState("");
  const [emailMatch, setEmailMatch] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(SET_TOGGLE(true));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      return toast.info("Enter email");
    }

    try {
      const data = await checkUser(email);

      if (data) {
        dispatch(SET_EMAIL_SIGN(email));
        const otp = Math.floor(100000 + Math.random() * 900000);
        dispatch(SET_OTP_SIGN(otp));
        await forgotPass({ email, otp });

        navigate("/signin/otp");
      }

      console.log(data);
    } catch (error) {
      toast.error(error);
    }

    setEmailMatch(false);
  };

  return (
    <LayoutSmall>
      <div className="container">
        <img src={logo} alt="happy-face" height={80} />
        <h1>Reset Password</h1>
      </div>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter your registered mail</label>
          <input
            style={{ width: 400, margin: 10 }}
            type="email"
            className="form-control form-control-lg"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ marginTop: -10, marginLeft: 10, color: "red" }}>
            {!emailMatch && "This email doesn't exist"}
          </div>
        </div>
        <button
          onClick={submitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Send OTP
        </button>
      </form>
    </LayoutSmall>
  );
};

export default SigninEmail;
