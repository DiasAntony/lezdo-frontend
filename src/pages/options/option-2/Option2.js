import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/calling.gif";
import "./Option2.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../../../service";
import { SET_LOGIN_STATUS, SET_TOGGLE, SET_USER } from "../../../store/userSlice";

const Option2 = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!password) {
      navigate("/");
    }

    SET_TOGGLE(false)
  }, []);

  const [userData, setUserDate] = useState({
    name: "",
    role: "",
    num: "",
    attroney_name: "",
    attroney_num: "",
    attroney_email: "",
    attroney_prac: "",
  });

  const {
    name,
    role,
    num,
    attroney_email,
    attroney_name,
    attroney_num,
    attroney_prac,
  } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDate((userData) => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !role || !attroney_email || !attroney_name || !attroney_prac) {
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
      <div style={{ marginBottom: -20 }} className="link">
        <Link to="/create/about" className="link_back">
          <ArrowBackIosIcon sx={{ fontSize: 20 }} className="link_icon" /> Back
        </Link>
      </div>
      <div style={{ marginBottom: -20 }} className="container">
        <img src={logo} alt="happy-face" height={60} />
        <h1>Your Contact Information</h1>
      </div>
      <div style={{ marginLeft: -20 }} className="container">
        <div class="row g-3">
          <div className="col">
            <label className="form-label">
              Your Name <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 15, width: 300 }}
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChange}
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
              name="role"
              value={role}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row g-3">
          <div className="col">
            <label className="form-label">Mobile Number</label>
            <input
              style={{ padding: 15, width: 300 }}
              type="number"
              className="form-control"
              name="num"
              value={num}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label className="form-label">Email Address</label>
            <input
              style={{ padding: 15, width: 300 }}
              type="email"
              className="form-control"
              value={email}
              disabled
            />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: -25 }} className="container_2">
        <h1>Your Attorney's Information</h1>
      </div>
      <div style={{ marginLeft: -20, marginBottom: 10 }} className="container">
        <div class="row g-3">
          <div className="col">
            <label className="form-label">
              Attorney's Name <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 15, width: 300 }}
              type="text"
              className="form-control"
              name="attroney_name"
              value={attroney_name}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label className="form-label">
              Attorney's Email Address <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 15, width: 300 }}
              type="email"
              className="form-control"
              name="attroney_email"
              value={attroney_email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row g-3">
          <div className="col">
            <label className="form-label">Mobile Number</label>
            <input
              style={{ padding: 15, width: 300 }}
              type="num"
              className="form-control"
              name="attroney_num"
              value={attroney_num}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label className="form-label">
              Practice Area <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 15, width: 300 }}
              type="text"
              className="form-control"
              name="attroney_prac"
              value={attroney_prac}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: -10 }} className="btn_next">
        <button onClick={submitHandler}>Next</button>
      </div>
    </Layout>
  );
};

export default Option2;
