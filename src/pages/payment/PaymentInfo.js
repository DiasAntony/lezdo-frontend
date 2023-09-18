import React, { useState } from "react";
// import Layout from "../../components/layout/Layout";
import "./PaymentInfo.css";
import logo from "../../assets/handle_pay.gif";
import LayoutSmall from "../../components/layout-small/LayoutSmall";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentInfo = () => {
  const navigate = useNavigate();

  const [val, setVal] = useState("Myself");

  const [someOne, setSomeOne] = useState({
    name: "",
    email: "",
    role: "",
    extension: "",
    num: "",
    depatment: "",
  });

  const { name, email, role, extension, num, department } = someOne;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSomeOne((someOne) => {
      return {
        ...someOne,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (val === "Someone Else") {
      if (!name || !email || !role) {
        return toast.info("Fill the required fields");
      }

      navigate("/service");
    }

    if (val === "Myself") {
      return navigate("/service");
    }
  };

  return (
    <LayoutSmall>
      <div className="container">
        <img src={logo} alt="happy-face" height={60} />
        <h3>Who is in-charge of handling the payment?</h3>
      </div>
      <div className="ratio">
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="Myself"
              checked={val === "Myself"}
              onChange={(e) => setVal(e.target.value)}
            />
            <label className="form-check-label">Myself</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="Someone Else"
              onChange={(e) => setVal(e.target.value)}
              checked={val === "Someone Else"}
            />
            <label className="form-check-label">Someone Else</label>
          </div>
        </div>
      </div>
      <div className={val === "Myself" ? "none" : undefined}>
        <div className="container">
          <div className="row g-3">
            <div className="col">
              <label className="form-label">
                Name <sup>&#10039;</sup>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label className="form-label">
                Email Address <sup>&#10039;</sup>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                name="num"
                value={num}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label className="form-label">Extension (Optional)</label>
              <input
                type="text"
                className="form-control"
                name="extension"
                value={extension}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col">
              <label className="form-label">
                Job Role <sup>&#10039;</sup>
              </label>
              <input
                type="text"
                className="form-control"
                name="role"
                value={role}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={department}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="btn_next">
        <button onClick={submitHandler}>Next</button>
      </div>
    </LayoutSmall>
  );
};

export default PaymentInfo;
