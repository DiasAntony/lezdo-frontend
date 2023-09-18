import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import style from "./AboutUserself.module.css";
import logo from "../../assets/happy_face.gif";
import InfoIcon from "@mui/icons-material/Info";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SET_TOGGLE } from "../../store/userSlice";

const AboutUserself = () => {
  const [val, setVal] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const password = useSelector((state) => state.password);

  useEffect(() => {
    if (!password) {
      navigate("/");
    }

    dispatch(SET_TOGGLE(false));
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (val === "") {
      return toast.warning("Select one Option");
    }

    if (val === "I am an attoney") {
      return navigate("/create/about/opt1");
    } else if (val === "I work for an attorney") {
      return navigate("/create/about/opt2");
    } else if (val === "Others") {
      return navigate("/create/about/opt3");
    }
  };

  return (
    <Layout>
      <div className={style.flex}>
        <img src={logo} alt="happy-face" height={60} />
        <h1>Tell Us About Yourself</h1>
        <p>
          <strong>
            Share about you & your firm to help LezDo TechMed tailor a unique
            service and personalised dashboard experiance.
          </strong>
        </p>
      </div>
      <div className={style.flex}>
        <h5>What role suits your best?</h5>
        <div className={style.ratio} onChange={(e) => setVal(e.target.value)}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="I am an attoney"
              checked={val === "I am an attoney"}
              onChange={(e) => setVal(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              I am an attoney
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="I work for an attorney"
              checked={val === "I work for an attorney"}
              onChange={(e) => setVal(e.target.value)}
            />
            <label className="form-check-label" for="inlineRadio2">
              I work for an attorney
            </label>
            <div className="btn-group dropup">
              <InfoIcon
                sx={{ fontSize: 20 }}
                type="button"
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropup
              </InfoIcon>
              <div className="dropdown-menu">
                <Link className="dropdown-item">QMEs</Link>
                <Link className="dropdown-item">IMEs</Link>
                <Link className="dropdown-item">Health Care Provider</Link>
                <Link className="dropdown-item">Life Insurance Firms</Link>
                <Link className="dropdown-item">Life Care Planners</Link>
                <Link className="dropdown-item">APS Underwriters</Link>
                <Link className="dropdown-item">BGA</Link>
              </div>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="Others"
              checked={val === "Others"}
              onChange={(e) => setVal(e.target.value)}
            />
            <label className="form-check-label" for="inlineRadio3">
              Others
            </label>
            <div className="btn-group dropup">
              <InfoIcon
                sx={{ fontSize: 20 }}
                type="button"
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropup
              </InfoIcon>
              <div className="dropdown-menu">
                <Link className="dropdown-item">Paralegals</Link>
                <Link className="dropdown-item">Case Managers</Link>
                <Link className="dropdown-item">Legal Nurse Consultant</Link>
                <Link className="dropdown-item">Legal Assistant</Link>
                <Link className="dropdown-item">
                  Administrative & Support Staff
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bt}>
          <button onClick={submitHandler}>Next</button>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUserself;
