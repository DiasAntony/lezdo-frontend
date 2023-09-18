import React, { useEffect, useState } from "react";
import style from "./CreateOTP.module.css";
import Layout from "../../components/layout/Layout";
import logo from "../../assets/mail-box.gif";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  RESET_OTP,
  SET_EMAIL,
  SET_OTP,
  SET_OTP_STATUS,
  SET_TOGGLE,
} from "../../store/userSlice";
import { createPass } from "../../service";
import { useNavigate } from "react-router-dom";

const CreateOTP = () => {
  const [OTP, setOTP] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state) => state.email);
  const otp = useSelector((state) => state.otp);

  useEffect(() => {
    dispatch(SET_TOGGLE(false));

    if (!otp || otp === "") {
      navigate("/");
    }
  }, []);

  const resendOtp = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000);

    await createPass({ email, otp });
    dispatch(SET_EMAIL(email));
    // dispatch(SET_OTP_STATUS(true));
    dispatch(SET_OTP(otp));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (OTP.length !== 6) {
      return toast.error("fill the field");
    }

    if (otp === OTP) {
      return toast.error("OTP doesn't match");
    }

    dispatch(SET_OTP_STATUS(false));
    dispatch(RESET_OTP());
    navigate("/create/pass");
  };

  return (
    <Layout>
      <div className={style.flex}>
        <img src={logo} alt="happy-face" height={60} />
        <h1>Check your email</h1>
        <p>
          Please enter the verification code we sent to:
          <h5>{email}</h5>
        </p>
      </div>
      <div className={style.flex}>
        <h4>Verification Code</h4>
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
          <h5>Didn't get the Code?</h5>
        </div>
        <div>
          <ResendOTP
            maxTime={30}
            renderTime={() => React.Fragment}
            onResendClick={resendOtp}
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
        <div className="btn-confirmm">
          <button onClick={submitHandler}>Confirm</button>
        </div>
      </div>
    </Layout>
  );
};

export default CreateOTP;
