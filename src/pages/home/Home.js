import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Layout from "../../components/layout/Layout";
import logo from "../../assets/in-love.gif";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  SET_EMAIL,
  SET_OTP,
  SET_OTP_STATUS,
  SET_TOGGLE,
} from "../../store/userSlice";
import { createPass } from "../../service";

const Home = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_TOGGLE(false));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      return toast.error("Enter the valid email");
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    const data = await createPass({ email, otp });

    if (data) {
      dispatch(SET_EMAIL(email));
      dispatch(SET_OTP_STATUS(true));
      dispatch(SET_OTP(otp));
      navigate("/create/otp");
    }
  };

  return (
    <Layout>
      <div className={style.flex}>
        <img src={logo} alt="happy-face" height={60} />
        <h1>
          Get Started With <span className={style.lezdo}>LezDo</span>
        </h1>
        <p>
          <strong>
            Choose the best medical record review services that matters to you &
            your clients the most.
          </strong>
        </p>
      </div>
      <div className={style.flex}>
        <h2>Email Address</h2>
        <div className={style.email}>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.referral}>
          <input type="text" placeholder="Have a referral code?(optional)" />
        </div>
        <div>
          <button onClick={submitHandler}>Next</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
