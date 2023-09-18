import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/calling.gif";
import "./CompanyInfo.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { SET_TOGGLE } from "../../store/userSlice";

const CompanyInfo = () => {
  const navigate = useNavigate();
  useAuth();


  const [userData, setUserDate] = useState({
    name: "",
    size: "Myself",
    num: "",
    extension: "",
    Address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  console.log(userData);

  const { name, size, num, extension, Address, city, state, country, zipcode } =
    userData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDate((userData) => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !name ||
      !size ||
      !num ||
      !Address ||
      !city ||
      !state ||
      !zipcode ||
      !country
    ) {
      return toast.info("Fill required fields");
    }

    navigate("/create/about/payment");
  };

  return (
    <Layout>
      <div style={{ marginBottom: -20 }} className="link">
        <Link to="/create/about" className="link_back">
          <ArrowBackIosIcon sx={{ fontSize: 20 }} className="link_icon" /> Back
        </Link>
      </div>
      <div style={{ marginBottom: -20 }} className="container">
        <img
          style={{ marginBottom: -10 }}
          src={logo}
          alt="happy-face"
          height={60}
        />
        <h1>Your Company Information</h1>
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="col">
            <label className="form-label">
              Company Name <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 12, width: 300 }}
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label className="form-label">
              Company Size <sup>&#10039;</sup>
            </label>
            {/* <input type="text" className="form-control" /> */}
            <select
              style={{ padding: 12, width: 300 }}
              className="form-select"
              aria-label="Default select example"
              name="size"
              value={size}
              onChange={handleChange}
            >
              <option selected>Myself Only</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row g-3">
          <div className="col">
            <label className="form-label">
              Phone Number <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 12, width: 300 }}
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
              style={{ padding: 12, width: 300 }}
              type="text"
              className="form-control"
              name="extension"
              value={extension}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: -20 }} className="container_center">
        <div className="mb-3">
          <label className="form-label">
            Address <sup>&#10039;</sup>
          </label>
          <input
            style={{ padding: 12, width: 750 }}
            type="text"
            className="form-control"
            name="Address"
            value={Address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="container">
        <div className="row g-3">
          <div className="col">
            <label className="form-label">
              City <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 12, width: 300 }}
              type="text"
              className="form-control"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            {/* <label className="form-label">
              State <sup>&#10039;</sup>
            </label>
            {/* <input
              type="text"
              className="form-control"
              placeholder="Select State"
            /> */}
            {/* <select className="form-select" aria-label="Default select example" placeholder="Select State">
              <option selected>Select State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
            <label for="exampleDataList" class="form-label">
              State <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 12, width: 300 }}
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Select State"
              name="state"
              value={state}
              onChange={handleChange}
            />
            <datalist id="datalistOptions">
              <option value="San Francisco" />
              <option value="New York" />
              <option value="Seattle" />
              <option value="Los Angeles" />
              <option value="Chicago" />
            </datalist>
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <label className="form-label">
              Country <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 12, width: 300 }}
              type="text"
              className="form-control"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label className="form-label">
              Zip Code <sup>&#10039;</sup>
            </label>
            <input
              style={{ padding: 12, width: 300 }}
              type="number"
              className="form-control"
              name="zipcode"
              value={zipcode}
              onChange={handleChange}
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

export default CompanyInfo;
