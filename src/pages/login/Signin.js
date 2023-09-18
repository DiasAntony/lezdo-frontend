import React, { useEffect, useState } from "react";
import logo from "../../assets/in-love.gif";
import "./Signin.css";
import LayoutSmall from "../../components/layout-small/LayoutSmall";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../service";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN_STATUS, SET_TOGGLE, SET_USER } from "../../store/userSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(SET_TOGGLE(true));
  },[]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.info("Fill these fields");
    }

    try {
      const data = await loginUser({ email, password });

      if (data) {
        await dispatch(SET_LOGIN_STATUS(true));
        await dispatch(SET_USER(data));
        navigate("/service");
      }
    } catch (error) {
      toast.error(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <LayoutSmall>
      <div className="container">
        <img src={logo} alt="happy-face" height={60} />
        <h1>Login</h1>
      </div>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Your Email</label>
          <input
            style={{ width: 400, margin: 10 }}
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group pass_">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            style={{ width: 400, margin: 10 }}
            type={showPassword ? "text" : "password"}
            className="form-control form-control-lg"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="eye" onClick={togglePassword}>
            {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
        <div className="label-mark">
          <span>
            <Link to="/signin/email" className="link-forgot">
              Forgot my password
            </Link>
          </span>
          <input type="checkbox" />
          <label>Remeber me</label>
        </div>
        <button onClick={submitHandler} className="btn btn-primary">
          Login
        </button>
      </form>
    </LayoutSmall>
  );
};

export default Signin;
