import React, { useState } from "react";
import "./OtpInput.css";
import OTPInput, { ResendOTP } from "otp-input-react";

const OtpInput = () => {
  const [OTP, setOTP] = useState("");
  return (
    <>
      <OTPInput
      className='otp-input'
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
        <h6>Din't get the code?</h6>
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
          maxTime={30}
          renderTime={() => React.Fragment}
          renderButton={(buttonProps) => {
            return (
              <button {...buttonProps}>
                {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
              </button>
            );
          }}
        />
      </div>
    </>
  );
};

export default OtpInput;
