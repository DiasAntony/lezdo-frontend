import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogedIn: false,
  email: "",
  password: "",
  otp: undefined,
  otpStatus: false,
  otp_sign: undefined,
  toggle: false,
  email_sign: "",
  user: {
    name: "",
    email: "",
    token: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_EMAIL: (state, action) => {
      state.email = action.payload;
    },
    SET_EMAIL_SIGN: (state, action) => {
      state.email_sign = action.payload;
    },
    SET_TOGGLE: (state, action) => {
      state.toggle = action.payload;
    },
    SET_PASS: (state, action) => {
      state.password = action.payload;
    },
    SET_LOGIN_STATUS: (state, action) => {
      state.isLogedIn = action.payload;
    },
    SET_USER: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.token = action.payload.token;
    },
    SET_OTP: (state, action) => {
      state.otp = action.payload;
    },
    SET_OTP_STATUS: (state, action) => {
      state.otpStatus = action.payload;
    },
    RESET_OTP: (state) => {
      state.otp = undefined;
    },
    SET_OTP_SIGN: (state, action) => {
      state.otp_sign = action.payload;
    },
    RESET_OTP_SIGN: (state) => {
      state.otp_sign = undefined;
    },
    
  },
});

export const {
  SET_EMAIL,
  SET_LOGIN_STATUS,
  SET_USER,
  SET_OTP_STATUS,
  RESET_OTP,
  SET_OTP,
  SET_PASS,
  SET_EMAIL_SIGN,
  SET_OTP_SIGN,
  SET_TOGGLE,
} = userSlice.actions;

export default userSlice.reducer;
