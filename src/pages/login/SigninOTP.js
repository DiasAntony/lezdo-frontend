import React, { useEffect, useState } from "react";
import "./Signin.css";
import LayoutSmall from "../../components/layout-small/LayoutSmall";
import logo from "../../assets/password.gif";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPass } from "../../service";
import { SET_OTP_SIGN, SET_TOGGLE } from "../../store/userSlice";
import { toast } from "react-toastify";

const SigninOTP = () => {
  const [OTP, setOTP] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(SET_TOGGLE(true));
  }, []);

  const email_sign = useSelector((state) => state.email_sign);
  const otp_sign = useSelector((state) => state.otp_sign);

  const resendOtp = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000);

    await forgotPass({ email: email_sign, otp: otp });
    dispatch(SET_OTP_SIGN(otp));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (OTP.length !== 6) {
      return toast.error("fill the field");
    }

    if (otp_sign === OTP) {
      return toast.error("OTP doesn't match");
    }

    dispatch(SET_OTP_SIGN(undefined));
    navigate("/signin/changepass");
  };

  return (
    <LayoutSmall>
      <div className="container">
        <img src={logo} alt="happy-face" height={80} />
        <h1>Reset Password</h1>
        <OTPInput
          className="otp-input"
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          inputStyles={{
            borderSizing: "border-box",
            border: "none",
            borderBottom: "2px solid #ccc",
            borderRadius: "2px",
            width: "54px",
            height: "54px",
            margin: "10px",
            fontSize: "20px",
            color: "red",
            fontWeight: "400",
            caretColor: "blue",
          }}
          inputFocusStyles={{
            border: "1px solid red",
            borderBottom: "2px solid red",
            outline: "none",
          }}
        />
        <div className="container">
          {/* <ResendOTP
          maxTime={30}
          onResendClick={() => console.log("Resend clicked")}
          style={{
            backgroundColor:'red',
            height:"60px",
            width:"150px"
          }}
        /> */}
          <ResendOTP
            className="resend-otp"
            maxTime={30}
            onResendClick={resendOtp}
            renderTime={() => React.Fragment}
            renderButton={(buttonProps) => {
              return (
                <button {...buttonProps}>
                  {buttonProps.remainingTime !== 0
                    ? `Please wait for ${buttonProps.remainingTime} sec`
                    : "Resend"}
                </button>
              );
            }}
          />
        </div>
      </div>
      <button
        onClick={submitHandler}
        style={{ marginLeft: 105 }}
        className="btn btn-primary"
      >
        Confirm
      </button>
    </LayoutSmall>
  );
};
export default SigninOTP;
