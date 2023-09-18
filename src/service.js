import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND;

// register user
export const registerUser = async (userData) => {
  try {
    //parameters api endpoint and what you wannna post this api,help post the json data
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("User Register Successfully");
    }
    // this response.data goes to register component data == then the reponse have serveral property like data,status,statustext,header... but we need just a data for that component
    // response.data only show whatever we give a response to this endpoint in backend {backend response only come frontend}
    return response.data;
  } catch (error) {
    // response error came from what we set backend that and more error also come to frontend
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// login User

export const loginUser = async (userData) => {
  try {
    //parameters api endpoint and what you wannna post this api,help post the json data
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData
    );
    if (response.statusText === "OK") {
      toast.success("User login Successfully");
    }
    return response.data;
    //   console.log(response)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// logout user

export const logoutUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/logout`);
    if (response.statusText === "OK") {
      toast.success("User logout Successfully");
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


// upadte Password
export const changePass = async (formData) => {
  try {
    //parameters api endpoint and what you wannna post this api
    const response = await axios.put(
      `${BACKEND_URL}/api/users/changepassword`,
      formData
    );
    if (response.statusText === "OK") {
      // this data.message from backend this api success res.jeson({message:"email send successfully"})
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

//forgot password

export const forgotPass = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/forgotpassword`,
      userData
    );
    if (response.statusText === "OK") {
      // this data.message from backend this api success res.jeson({message:"email send successfully"})
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

//create password

export const createPass = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/createpassword`,
      userData
    );
    if (response.statusText === "OK") {
      // this data.message from backend this api success res.jeson({message:"email send successfully"})
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

//check user

export const checkUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/checkuser`,
      userData
    );
    if (response.statusText === "OK") {
      // this data.message from backend this api success res.jeson({message:"email send successfully"})
      toast.success(response.data.message);
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const createServices = async (data) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/services`, data);
    if (response.statusText === "OK") {
      // this data.message from backend this api success res.jeson({message:"email send successfully"})
      toast.success("service added!!");
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
