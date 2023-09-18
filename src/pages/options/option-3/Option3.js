import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/calling.gif";
import "./Option3.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../../../service";
import { SET_LOGIN_STATUS, SET_TOGGLE, SET_USER } from "../../../store/userSlice";

const Option3 = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!password) {
      navigate("/");
    }
    SET_TOGGLE(false)
  }, []);

  const [name, setName] = useState("");
  const [num, setNum] = useState();
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !role) {
      return toast.info("Fill the required field");
    }

    if (name.length < 3) {
      return toast.warning("Name should be above 3 character");
    }

    if (user.name && user.email) {
      return navigate("/create/about/company");
    }

    try {
      const data = await registerUser({ name, email, password });
      if (data) {
        dispatch(SET_USER({ name, email, password }));
        dispatch(SET_LOGIN_STATUS(true));
        return navigate("/create/about/company");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Layout>
      <div className="link">
        <Link to="/create/about" className="link_back">
          <ArrowBackIosIcon sx={{ fontSize: 20 }} className="link_icon" /> Back
        </Link>
      </div>
      <div className="container">
        <img src={logo} alt="happy-face" height={60} />
        <h1>Your Contact Information</h1>
      </div>
      <div style={{ marginLeft: -20, marginRight: -10 }} className="container">
        <div class="row g-3">
          <div className="col">
            <label className="form-label">
              Your Name <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 15, width: 300 }}
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">
              Job Role <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 15, width: 300 }}
              type="text"
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>
        <div style={{ marginTop: 10, marginBottom: 10 }} class="row g-3">
          <div className="col">
            <label className="form-label">Mobile Number</label>
            <input
              style={{ padding: 15, width: 300 }}
              type="text"
              className="form-control"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <div className="col">
            <label className="form-label">Email Address</label>
            <input
              style={{ padding: 15, width: 300 }}
              type="email"
              className="form-control"
              placeholder="Email"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="btn_next">
        <button onClick={submitHandler}>Next</button>
      </div>
    </Layout>
  );
};

export default Option3;
