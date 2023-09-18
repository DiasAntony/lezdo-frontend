import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import "./ServicePage.css";
import logo from "../../assets/select.gif";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createServices, getUser } from "../../service";
import useAuth from "../../hooks/useAuth";

const ServicePage = () => {
  const [val, setVal] = useState([]);
  const [val2, setVal2] = useState([]);
  const [val3, setVal3] = useState([]);

  const [check,setCheck]=useState(false)

  useAuth();

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleChange1 = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setVal([...val, value]);
    } else {
      setVal(val.filter((s) => s !== value));
    }
  };

  const handleChange2 = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setVal2([...val2, value]);
    } else {
      setVal2(val2.filter((s) => s !== value));
    }
  };

  const handleChange3 = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setVal3([...val3, value]);
    } else {
      setVal3(val3.filter((s) => s !== value));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (val.length === 0) {
      return toast.info("Select required option (MRR service)");
    }

    if(!check){
      return toast.info("Click terms & conditions")
    }

    navigate("/congratulations");

    console.log(val);
  };

  return (
    <Layout>
      <div className="container_1">
        <img src={logo} alt="happy-face" height={40} />
        <span>Kindly select the required services</span>
      </div>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <div
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Medical Record Review Services
              </div>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="container_1">
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Medical Chronology"
                          value="Medical Chronology"
                          onChange={handleChange1}
                          disabled={
                            val.includes("APS Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Medical Billing Summary") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label className="form-check-label">
                          Medical Chronology{" "}
                          <small> &nbsp;(Include free addons)</small>
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Narrative Summary"
                          value="Narrative Summary"
                          onChange={handleChange1}
                          disabled={
                            val.includes("APS Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Medical Billing Summary") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label className="form-check-label">
                          Narrative Summary{" "}
                          <small> &nbsp;(Include free addons)</small>
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Depositions Summary"
                          value="Depositions Summary"
                          onChange={handleChange1}
                          disabled={
                            val.includes("APS Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Medical Billing Summary") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label className="form-check-label">
                          Depositions Summary
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Demand Letter"
                          value="Demand Letter"
                          onChange={handleChange1}
                          disabled={
                            val.includes("APS Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Medical Billing Summary") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label className="form-check-label">
                          Demand Letter
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Sorting & Indexing"
                          value="Sorting & Indexing"
                          onChange={handleChange1}
                          disabled={
                            val.includes("APS Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Medical Billing Summary")
                          }
                        />
                        <label className="form-check-label">
                          Sorting & Indexing
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name=" Medical Record Retrieval"
                          value=" Medical Record Retrieval"
                          onChange={handleChange1}
                        />
                        <label className="form-check-label">
                          Medical Record Retrieval
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="APS Summary"
                          value="APS Summary"
                          onChange={handleChange1}
                          disabled={
                            val.includes("Medical Chronology") ||
                            val.includes("Narrative Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Medical Billing Summary") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label className="form-check-label">APS Summary</label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Life Care Plannig"
                          value="Life Care Plannig"
                          onChange={handleChange1}
                          disabled={
                            val.includes("Medical Chronology") ||
                            val.includes("Narrative Summary") ||
                            val.includes("APS Summary") ||
                            val.includes("Medical Billing Summary") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label
                          htmlFor="Life Care Plannig"
                          className="form-check-label"
                        >
                          Life Care Plannig
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Expert Medical Opinion"
                          value="Expert Medical Opinion"
                          onChange={handleChange1}
                          disabled={
                            val.includes("APS Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Medical Billing Summary") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label className="form-check-label">
                          Expert Medical Opinion
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Medical Billing Summary"
                          value="Medical Billing Summary"
                          onChange={handleChange1}
                          disabled={
                            val.includes("APS Summary") ||
                            val.includes("Life Care Plannig") ||
                            val.includes("Sorting & Indexing")
                          }
                        />
                        <label className="form-check-label">
                          Medical Billing Summary
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <div
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Special Reports (Optional)
              </div>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="container_1">
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Treatment Timeline"
                          value="Treatment Timeline"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Treatment Timeline
                          {val2.includes("Treatment Timeline") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Medical Synopsis"
                          value="Medical Synopsis"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Medical Synopsis
                          {val2.includes("Medical Synopsis") && <sup>Free</sup>}
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Med-A-Word"
                          value="Med-A-Word"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Med-A-Word
                          {val2.includes("Med-A-Word") && <sup>Free</sup>}
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Special Injury Report"
                          value="Special Injury Report"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Special Injury Report
                          {val2.includes("Special Injury Report") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Missing Record Identification"
                          value="Missing Record Identification"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Missing Record Identification
                          {val2.includes("Missing Record Identification") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Pain & Suffering Chart"
                          value="Pain & Suffering Chart"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Pain & Suffering Chart
                          {val2.includes("Pain & Suffering Chart") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Future Medical Cost Projection"
                          value="Future Medical Cost Projection"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Future Medical Cost Projection
                          {val2.includes("Future Medical Cost Projection") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Strength & Weakness Report"
                          value="Strength & Weakness Report"
                          onChange={handleChange2}
                        />
                        <label className="form-check-label">
                          Strength & Weakness Report
                          {val2.includes("Strength & Weakness Report") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <div
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Technical Services (Optional)
              </div>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="container_1">
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Indexing"
                          value="Indexing"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Indexing
                          {val3.includes("Indexing") && <sup>Free</sup>}
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Duplicate Record Identification"
                          value="Duplicate Record Identification"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Duplicate Record Identification
                          {val3.includes("Duplicate Record Identification") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Bookmarking"
                          value="Bookmarking"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Bookmarking
                          {val3.includes("Bookmarking") && <sup>Free</sup>}
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Other Language Translation"
                          value="Other Language Translation"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Other Language Translation
                          {val3.includes("Other Language Translation") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Sorting"
                          value="Sorting"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Sorting
                          {val3.includes("Sorting") && <sup>Free</sup>}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Duplicate Record Extraction"
                          value="Duplicate Record Extraction"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Duplicate Record Extraction
                          {val3.includes("Duplicate Record Extraction") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Other Patient Record Extraction"
                          value="Other Patient Record Extraction"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Other Patient Record Extraction
                          {val3.includes("Other Patient Record Extraction") && (
                            <sup>Free</sup>
                          )}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="Hyperlinks"
                          value="Hyperlinks"
                          onChange={handleChange3}
                        />
                        <label className="form-check-label">
                          Hyperlinks
                          {val3.includes("Hyperlinks") && <sup>Free</sup>}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_3">
        <div className="terms">
          <input type="checkbox" checked={check===true} onChange={e=>setCheck(e.target.checked)} />
          <label htmlFor="checkbox">
            By clicking this,I hereby agree to the{" "}
            <Link>Terms & Conditions</Link>
          </label>
        </div>

        <div className="btn_confirm">
          <button onClick={submitHandler}>Confirm</button>
        </div>
      </div>
    </Layout>
  );
};

export default ServicePage;
