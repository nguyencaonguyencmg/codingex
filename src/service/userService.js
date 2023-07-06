import axios from "../axios";

const handleLogin = (userName, pass) => {
  return axios.post("/api/login", { email: userName, password: pass });
};

export { handleLogin };
