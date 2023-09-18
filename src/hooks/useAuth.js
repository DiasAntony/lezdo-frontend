import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const isLogedIn = useSelector((state) => state.isLogedIn);

  console.log(isLogedIn);
  useEffect(() => {
    if (!isLogedIn) {
      navigate("/");
    }
  }, [navigate]);
};

export default useAuth;
